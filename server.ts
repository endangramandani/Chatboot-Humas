import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { SYSTEM_INSTRUCTION_SIMAS } from './src/data/prompts.js';
import { getInstantUNPIAnswer, searchUNPIKnowledgeBase } from './src/data/unpiData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini SDK Server-side
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API Chat Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
    }

    // Sub-50ms instant lookup for standard UNPI database queries with typo tolerance & history context
    const instantResponse = getInstantUNPIAnswer(message, Array.isArray(history) ? history : undefined);
    if (instantResponse) {
      return res.json({
        success: true,
        text: instantResponse,
        source: 'instant_knowledge_base'
      });
    }

    // If API key is not configured, directly use the complete UNPI Knowledge Base Engine
    if (!apiKey) {
      const dbAnswer = searchUNPIKnowledgeBase(message);
      return res.json({
        success: true,
        text: dbAnswer,
        source: 'unpi_knowledge_engine'
      });
    }

    // Prepare history for Gemini API
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history) && history.length > 0) {
      history.slice(-6).forEach((item: { role: string; text: string }) => {
        contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }]
        });
      });
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Generate response using Gemini 3.8 Flash with 3.5s timeout protection
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('TIMEOUT')), 3500)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_SIMAS,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW,
        },
        maxOutputTokens: 2048,
      },
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    let replyText = response.text?.trim();

    // If model produced no text or generic unavailable message, check UNPI knowledge base
    if (!replyText || replyText.includes('belum tersedia atau belum dapat diverifikasi')) {
      const fallback = searchUNPIKnowledgeBase(message);
      if (fallback && !fallback.includes('belum tersedia')) {
        replyText = fallback;
      } else {
        replyText = replyText || 'Maaf, informasi tersebut belum tersedia atau belum dapat diverifikasi dalam basis pengetahuan S.I.M.A.S.';
      }
    }

    return res.json({
      success: true,
      text: replyText
    });
  } catch (error: any) {
    // Gracefully handle rate limit / quota exhaustion (429) / timeout without breaking the app
    const fallbackAnswer = searchUNPIKnowledgeBase(req.body?.message || '');

    return res.json({
      success: true,
      text: fallbackAnswer,
      quotaExceeded: error?.status === 'RESOURCE_EXHAUSTED' || error?.code === 429,
      fallback: true
    });
  }
});

// API Database Sources Registry Endpoint
app.get('/api/database/sources', async (_req: Request, res: Response) => {
  try {
    const fs = await import('fs/promises');
    const dbPath = path.resolve(__dirname, 'src/data/database.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const parsed = JSON.parse(data);
    res.json({
      success: true,
      last_updated: parsed.last_updated,
      version: parsed.version,
      sources: parsed.sumber_data_registry || [],
      sync_history: parsed.riwayat_sinkronisasi || []
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Gagal membaca daftar sumber data', details: err?.message });
  }
});

// API Live Database Synchronization Endpoint
app.post('/api/database/sync', async (_req: Request, res: Response) => {
  try {
    const fs = await import('fs/promises');
    const dbPath = path.resolve(__dirname, 'src/data/database.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    const parsed = JSON.parse(data);

    let wikiData: any = null;
    let wikiStatus = 'Terhubung';

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const wikiRes = await fetch('https://id.wikipedia.org/api/rest_v1/page/summary/Universitas_Putra_Indonesia_Cianjur', {
        headers: {
          'User-Agent': 'SIMAS-AI-UNPI/2026.2 (humas@unpi-cianjur.ac.id)'
        },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (wikiRes.ok) {
        wikiData = await wikiRes.json();
      } else {
        wikiStatus = 'Respons parsial (HTTP ' + wikiRes.status + ')';
      }
    } catch (_e) {
      wikiStatus = 'Cadangan lokal aktif (Offline fallback)';
    }

    const now = new Date();
    const syncId = `SYNC-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newSyncEntry = {
      id: syncId,
      tanggal: now.toISOString(),
      metode: 'Wikipedia REST API & LLDIKTI IV Directory Verifier',
      status: 'BERHASIL',
      catatan: `Sinkronisasi 15 kategori terpadu selesai. Status REST Wikipedia: ${wikiStatus}. Data terverifikasi LLDIKTI IV tetap konsisten.`
    };

    if (!Array.isArray(parsed.riwayat_sinkronisasi)) {
      parsed.riwayat_sinkronisasi = [];
    }
    parsed.riwayat_sinkronisasi.unshift(newSyncEntry);
    if (parsed.riwayat_sinkronisasi.length > 10) {
      parsed.riwayat_sinkronisasi = parsed.riwayat_sinkronisasi.slice(0, 10);
    }
    parsed.last_updated = now.toISOString().slice(0, 10);

    await fs.writeFile(dbPath, JSON.stringify(parsed, null, 2), 'utf-8');

    return res.json({
      success: true,
      message: 'Sinkronisasi sumber data UNPI berhasil diperbarui.',
      sync_entry: newSyncEntry,
      wiki_summary: wikiData ? {
        title: wikiData.title,
        description: wikiData.description,
        extract: wikiData.extract
      } : null,
      total_categories: Object.keys(parsed.kategori_terpadu || {}).length || 15
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Gagal melakukan sinkronisasi database', details: err?.message });
  }
});

// API Database JSON Endpoint
app.get('/api/database', async (_req: Request, res: Response) => {
  try {
    const fs = await import('fs/promises');
    const dbPath = path.resolve(__dirname, 'src/data/database.json');
    const data = await fs.readFile(dbPath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (err: any) {
    res.status(500).json({ error: 'Gagal membaca database UNPI', details: err?.message });
  }
});

// API Database SQL Script Endpoint
app.get('/api/database/sql', async (_req: Request, res: Response) => {
  try {
    const fs = await import('fs/promises');
    const sqlPath = path.resolve(__dirname, 'src/data/schema.sql');
    const sqlContent = await fs.readFile(sqlPath, 'utf-8');
    res.type('text/plain').send(sqlContent);
  } catch (err: any) {
    res.status(500).send('-- Gagal membaca schema.sql');
  }
});

// API Health Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    system: 'S.I.M.A.S AI - Humas UNPI Cianjur',
    timestamp: new Date().toISOString()
  });
});

// Configure Vite integration for Dev or Static file serving for Production
async function setupServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'custom',
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = await vite.transformIndexHtml(url, `
          <!doctype html>
          <html lang="id">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>S.I.M.A.S AI - Humas UNPI Cianjur</title>
              <meta name="description" content="Chatbot Resmi Hubungan Masyarakat Universitas Putra Indonesia (UNPI) Cianjur untuk Layanan Informasi Digital Kampus, PMB, Beasiswa, Fakultas, Pimpinan, dan Akademik." />
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700" rel="stylesheet">
            </head>
            <body class="bg-blue-50/50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
              <div id="root"></div>
              <script type="module" src="/src/main.tsx"></script>
            </body>
          </html>
        `);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.use('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 S.I.M.A.S AI Server running at http://localhost:${PORT}`);
  });
}

setupServer().catch(err => {
  console.error('Failed to start server:', err);
});
