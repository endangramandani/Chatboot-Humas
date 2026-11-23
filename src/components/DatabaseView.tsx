import React, { useState, useEffect } from 'react';
import {
  Database,
  Download,
  Copy,
  Check,
  Table,
  FileCode,
  Braces,
  Search,
  Building2,
  Users,
  Award,
  Gift,
  Sparkles,
  RefreshCw,
  Globe,
  ShieldCheck,
  ExternalLink,
  Layers,
  CheckCircle2,
  Clock,
  Radio,
  FileText,
  History as HistoryIcon
} from 'lucide-react';
import dbJson from '../data/database.json';

interface DatabaseViewProps {
  onAskAIFromDb?: (query: string) => void;
}

type TabType = 'prodi' | 'fakultas' | 'pimpinan' | 'pmb' | 'kategori15' | 'sources' | 'sql' | 'json';

export const DatabaseView: React.FC<DatabaseViewProps> = ({ onAskAIFromDb }) => {
  const [activeTable, setActiveTable] = useState<TabType>('prodi');
  const [searchTerm, setSearchTerm] = useState('');
  const [sqlContent, setSqlContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isLoadingSql, setIsLoadingSql] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string | null>(null);
  const [latestSyncResult, setLatestSyncResult] = useState<any>(null);
  const [dbData, setDbData] = useState<any>(dbJson);

  useEffect(() => {
    // Fetch SQL script from backend
    setIsLoadingSql(true);
    fetch('/api/database/sql')
      .then(res => res.text())
      .then(text => {
        setSqlContent(text);
        setIsLoadingSql(false);
      })
      .catch(() => {
        setIsLoadingSql(false);
      });

    // Also fetch latest database JSON dynamically
    fetch('/api/database')
      .then(res => res.json())
      .then(data => {
        if (data && data.database_name) {
          setDbData(data);
        }
      })
      .catch(() => {});
  }, []);

  const handleCopySQL = () => {
    navigator.clipboard.writeText(sqlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSQL = () => {
    const blob = new Blob([sqlContent], { type: 'text/sql;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `schema_db_unpi_cianjur_${new Date().toISOString().slice(0, 10)}.sql`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(dbData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `database_unpi_cianjur_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleTriggerSync = async () => {
    setIsSyncing(true);
    setSyncStatusMsg('Menghubungkan ke Wikipedia REST API & LLDIKTI IV Verifier...');

    try {
      const res = await fetch('/api/database/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await res.json();

      if (result.success) {
        setLatestSyncResult(result);
        setSyncStatusMsg('Sinkronisasi selesai! Data 15 kategori terpadu berhasil diperbarui.');
        // Refresh dbData
        const refreshed = await fetch('/api/database').then(r => r.json());
        setDbData(refreshed);
      } else {
        setSyncStatusMsg('Sinkronisasi selesai dengan data arsip lokal.');
      }
    } catch (_err) {
      setSyncStatusMsg('Gagal menyambung ke server sync. Menggunakan pangkalan data lokal.');
    } finally {
      setIsSyncing(false);
      setTimeout(() => setSyncStatusMsg(null), 6000);
    }
  };

  // Filtered Program Studi
  const filteredProdi = (dbData.program_studi || []).filter((p: any) =>
    p.nama_prodi?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.kepala_up_prodi?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.fakultas?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.akreditasi?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtered Fakultas
  const filteredFakultas = (dbData.fakultas || []).filter((f: any) =>
    f.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.kode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtered Pimpinan
  const filteredPimpinan = (dbData.pimpinan || []).filter((p: any) =>
    p.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.jabatan?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const kategoriList = Object.entries(dbData.kategori_terpadu || {}).map(([key, value]: [string, any]) => ({
    key,
    ...value
  }));

  const filteredKategori = kategoriList.filter(item =>
    item.kategori?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.metadata?.sumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 space-y-4">
      {/* Header Banner Database */}
      <div className="bg-blue-900 border-b-4 border-yellow-400 rounded-2xl p-5 shadow-lg text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-yellow-400 text-blue-950 font-black shadow-md mt-0.5">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Database Resmi UNPI Cianjur
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-yellow-400 text-blue-950">
                  v{dbData.version || '2026.2'}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-800 text-blue-200 border border-blue-700">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  15 Kategori Terpadu
                </span>
              </div>
              <p className="text-xs text-blue-100 mt-1 max-w-2xl">
                Pusat data terintegrasi Universitas Putra Indonesia Cianjur (LLDIKTI IV & BAN-PT) yang terhubung langsung ke mesin S.I.M.A.S AI dengan integrasi multi-sumber data dan audit sinkronisasi.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleTriggerSync}
              disabled={isSyncing}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer"
              title="Sinkronkan dengan sumber data publik (Wikipedia REST API & LLDIKTI)"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Sinkronisasi...' : 'Sinkronkan Data'}</span>
            </button>

            <button
              onClick={handleDownloadSQL}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 border border-blue-600 text-yellow-300 font-bold text-xs transition-all shadow cursor-pointer"
              title="Unduh file schema.sql"
            >
              <FileCode className="w-4 h-4 text-yellow-400" />
              <span>Unduh .SQL</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-extrabold text-xs transition-all shadow-md cursor-pointer"
              title="Unduh database JSON"
            >
              <Download className="w-4 h-4" />
              <span>Unduh .JSON</span>
            </button>
          </div>
        </div>

        {/* Sync Toast Feedback */}
        {syncStatusMsg && (
          <div className="mt-3 p-2.5 rounded-xl bg-blue-950/90 border border-yellow-400/50 flex items-center justify-between text-xs text-yellow-300 animate-fadeIn">
            <div className="flex items-center gap-2">
              <RefreshCw className={`w-3.5 h-3.5 text-yellow-400 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{syncStatusMsg}</span>
            </div>
            {latestSyncResult?.sync_entry && (
              <span className="text-[10px] text-blue-200">
                Kode: {latestSyncResult.sync_entry.id}
              </span>
            )}
          </div>
        )}

        {/* Quick Stats Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-4 pt-4 border-t border-blue-800 text-xs">
          <div className="bg-blue-950/60 p-2.5 rounded-xl border border-blue-800">
            <span className="text-blue-200 block text-[11px]">Kategori Basis Data</span>
            <span className="text-base font-extrabold text-yellow-400">15 Kategori</span>
          </div>
          <div className="bg-blue-950/60 p-2.5 rounded-xl border border-blue-800">
            <span className="text-blue-200 block text-[11px]">Fakultas & Prodi</span>
            <span className="text-base font-extrabold text-yellow-400">4 Fak / 6 Prodi</span>
          </div>
          <div className="bg-blue-950/60 p-2.5 rounded-xl border border-blue-800">
            <span className="text-blue-200 block text-[11px]">Pimpinan SK Aktif</span>
            <span className="text-base font-extrabold text-yellow-400">5 Pejabat Utama</span>
          </div>
          <div className="bg-blue-950/60 p-2.5 rounded-xl border border-blue-800">
            <span className="text-blue-200 block text-[11px]">Akreditasi Institusi</span>
            <span className="text-base font-extrabold text-yellow-400">Baik Sekali (2029)</span>
          </div>
          <div className="bg-blue-950/60 p-2.5 rounded-xl border border-blue-800 col-span-2 sm:col-span-1">
            <span className="text-blue-200 block text-[11px]">Pembaruan Terakhir</span>
            <span className="text-base font-extrabold text-emerald-400">{dbData.last_updated || '2026-11-02'}</span>
          </div>
        </div>
      </div>

      {/* Tabs & Search Filter */}
      <div className="bg-white border-2 border-blue-200 rounded-2xl p-3 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTable('prodi')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'prodi'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Program Studi (6)</span>
          </button>

          <button
            onClick={() => setActiveTable('fakultas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'fakultas'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Fakultas (4)</span>
          </button>

          <button
            onClick={() => setActiveTable('pimpinan')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'pimpinan'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Pimpinan & Rektorat</span>
          </button>

          <button
            onClick={() => setActiveTable('kategori15')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'kategori15'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>15 Kategori Terpadu</span>
          </button>

          <button
            onClick={() => setActiveTable('sources')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'sources'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Sumber Data & API (5 Tier)</span>
          </button>

          <button
            onClick={() => setActiveTable('pmb')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'pmb'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Gift className="w-3.5 h-3.5" />
            <span>PMB & Beasiswa</span>
          </button>

          <button
            onClick={() => setActiveTable('sql')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'sql'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Skema SQL (DDL)</span>
          </button>

          <button
            onClick={() => setActiveTable('json')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTable === 'json'
                ? 'bg-blue-900 text-yellow-400 shadow-sm'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <Braces className="w-3.5 h-3.5" />
            <span>Data JSON</span>
          </button>
        </div>

        {/* Live Search */}
        {activeTable !== 'sql' && activeTable !== 'json' && activeTable !== 'sources' && (
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-blue-900" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari dalam database..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-blue-50/70 border border-blue-200 text-slate-800 text-xs font-medium outline-none focus:border-blue-700"
            />
          </div>
        )}
      </div>

      {/* Main Database Content Area */}
      <div className="space-y-4">
        
        {/* TAB 1: PROGRAM STUDI */}
        {activeTable === 'prodi' && (
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-3.5 bg-blue-900 text-white flex items-center justify-between text-xs">
              <span className="font-extrabold flex items-center gap-2">
                <Table className="w-4 h-4 text-yellow-400" />
                Tabel Program Studi (LLDIKTI Wilayah IV & BAN-PT)
              </span>
              <span className="text-[11px] text-blue-200">
                Menampilkan {filteredProdi.length} dari 6 program studi
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-blue-50/80 text-blue-950 font-bold border-b border-blue-200 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Jenjang</th>
                    <th className="p-3">Nama Program Studi</th>
                    <th className="p-3">Fakultas</th>
                    <th className="p-3">Gelar Lulusan</th>
                    <th className="p-3">Kepala UP Prodi (Kaprodi)</th>
                    <th className="p-3">Akreditasi</th>
                    <th className="p-3 text-right">Aksi Cepat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {filteredProdi.map((p: any) => (
                    <tr key={p.id} className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3 font-extrabold text-blue-900">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px]">
                          {p.jenjang}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-slate-900">{p.nama_prodi}</td>
                      <td className="p-3 text-slate-600">{p.fakultas}</td>
                      <td className="p-3 font-mono font-semibold text-blue-800">{p.gelar}</td>
                      <td className="p-3 font-semibold text-slate-800">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{p.kepala_up_prodi}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                          p.akreditasi === 'Baik Sekali'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                        }`}>
                          {p.akreditasi}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        {onAskAIFromDb && (
                          <button
                            onClick={() => onAskAIFromDb(`Siapa kaprodi dan apa akreditasi ${p.nama_prodi}?`)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-100 hover:bg-yellow-400 hover:text-blue-950 text-blue-900 font-bold text-[11px] transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            <span>Tanyakan AI</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: FAKULTAS */}
        {activeTable === 'fakultas' && (
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-3.5 bg-blue-900 text-white flex items-center justify-between text-xs">
              <span className="font-extrabold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-yellow-400" />
                Tabel 4 Fakultas Resmi Universitas Putra Indonesia Cianjur
              </span>
              <span className="text-[11px] text-yellow-300 font-bold">
                Status Dekan: Belum Terverifikasi SK Baru
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-blue-50/80 text-blue-950 font-bold border-b border-blue-200 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Kode</th>
                    <th className="p-3">Nama Fakultas</th>
                    <th className="p-3">Pejabat Dekan</th>
                    <th className="p-3">Status Verifikasi</th>
                    <th className="p-3">Jumlah Prodi</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {filteredFakultas.map((f: any) => (
                    <tr key={f.id} className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3 font-mono font-extrabold text-blue-900">{f.kode}</td>
                      <td className="p-3 font-bold text-slate-900">{f.nama}</td>
                      <td className="p-3 text-slate-500 italic">{f.dekan}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          {f.status_dekan}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-blue-900">{f.jumlah_prodi} Prodi</td>
                      <td className="p-3 text-right">
                        {onAskAIFromDb && (
                          <button
                            onClick={() => onAskAIFromDb(`Apa saja program studi di bawah ${f.nama}?`)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-100 hover:bg-yellow-400 hover:text-blue-950 text-blue-900 font-bold text-[11px] transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            <span>Lihat Prodi</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PIMPINAN & REKTORAT */}
        {activeTable === 'pimpinan' && (
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-3.5 bg-blue-900 text-white flex items-center justify-between text-xs">
              <span className="font-extrabold flex items-center gap-2">
                <Users className="w-4 h-4 text-yellow-400" />
                Tabel Pimpinan Yayasan & Rektorat UNPI Cianjur
              </span>
              <span className="text-[11px] text-blue-200">
                Terverifikasi SK Resmi Pejabat Aktif
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-blue-50/80 text-blue-950 font-bold border-b border-blue-200 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Jabatan Resmi</th>
                    <th className="p-3">Nama Lengkap & Gelar</th>
                    <th className="p-3">Unit Kerja</th>
                    <th className="p-3">Dasar Hukum / SK</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {filteredPimpinan.map((p: any) => (
                    <tr key={p.id} className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3 font-extrabold text-blue-900">{p.jabatan}</td>
                      <td className="p-3 font-bold text-slate-900">{p.nama}</td>
                      <td className="p-3 text-slate-600">{p.unit}</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-semibold">{p.sk_dasar}</td>
                      <td className="p-3 text-right">
                        {onAskAIFromDb && (
                          <button
                            onClick={() => onAskAIFromDb(`Siapa ${p.jabatan} UNPI Cianjur?`)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-100 hover:bg-yellow-400 hover:text-blue-950 text-blue-900 font-bold text-[11px] transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            <span>Tanyakan</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: 15 KATEGORI TERPADU */}
        {activeTable === 'kategori15' && (
          <div className="space-y-3">
            <div className="p-3.5 bg-blue-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-yellow-400" />
                <span className="font-extrabold">Struktur 15 Kategori Terpadu S.I.M.A.S AI</span>
              </div>
              <span className="text-[11px] text-blue-200">
                Lengkap dengan Metadata Sumber Resmi & Tanggal Pembaruan
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredKategori.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-blue-200 hover:border-blue-500 rounded-2xl p-4 shadow-sm transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-900">
                        Kategori {idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {item.metadata?.status_verifikasi || 'Terverifikasi'}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-sm">
                      {item.kategori}
                    </h4>

                    <div className="space-y-1 text-[11px] text-slate-600">
                      <div className="flex items-start gap-1">
                        <span className="font-bold text-slate-800 shrink-0">Sumber:</span>
                        <span className="truncate">{item.metadata?.sumber}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <Clock className="w-3 h-3 text-blue-600" />
                        <span>Update: {item.metadata?.tanggal_pembaruan}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-blue-100 flex items-center justify-between">
                    {item.metadata?.url_sumber ? (
                      <a
                        href={item.metadata.url_sumber}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <span>Tautan</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] text-slate-400">Arsip Resmi</span>
                    )}

                    {onAskAIFromDb && (
                      <button
                        onClick={() => onAskAIFromDb(`Berikan informasi lengkap tentang ${item.kategori} UNPI Cianjur`)}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-100 hover:bg-yellow-400 hover:text-blue-950 text-blue-900 font-bold text-[10px] transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-yellow-600" />
                        <span>Tanyakan</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SUMBER DATA & API (5 TIER) */}
        {activeTable === 'sources' && (
          <div className="space-y-4">
            {/* 5 Source Tiers Card */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-sm p-4 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100">
                <div>
                  <h3 className="font-black text-blue-950 text-base flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-700" />
                    5 Tingkat Sumber Informasi Resmi & API Registry
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Hierarki pengambilan data bertingkat sesuai ketentuan Humas UNPI Cianjur untuk menjamin keaslian dan validitas informasi.
                  </p>
                </div>

                <button
                  onClick={handleTriggerSync}
                  disabled={isSyncing}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-yellow-400 font-bold text-xs shadow-sm transition-all cursor-pointer self-start sm:self-auto shrink-0"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Sinkronisasi...' : 'Uji Sinkronisasi API'}</span>
                </button>
              </div>

              {/* Source Tier List */}
              <div className="space-y-3">
                {(dbData.sumber_data_registry || []).map((source: any, i: number) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 hover:border-blue-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-900 text-yellow-400 font-black flex items-center justify-center shrink-0">
                        {source.tier}
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-blue-950 text-sm">{source.nama_kelompok}</h4>
                          <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            {source.status}
                          </span>
                        </div>
                        <p className="font-semibold text-slate-800">{source.sumber}</p>
                        <p className="text-[11px] text-slate-500">Cakupan: {source.cakupan}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-white border border-blue-200 text-blue-900 font-bold">
                        {source.tipe_integrasi}
                      </span>
                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-blue-100 hover:bg-yellow-400 text-blue-900 hover:text-blue-950 transition-colors"
                          title="Buka sumber resmi"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Wikipedia REST API Summary Panel */}
            {latestSyncResult?.wiki_summary && (
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
                    <span>Hasil Ekstraksi Wikipedia REST API (Tier C Ensiklopedia)</span>
                  </div>
                  <span className="text-[10px] bg-amber-200 text-amber-950 px-2 py-0.5 rounded font-mono font-bold">
                    REST v1 Summary
                  </span>
                </div>
                <p className="leading-relaxed text-slate-700 italic">
                  "{latestSyncResult.wiki_summary.extract}"
                </p>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-amber-200 flex items-center justify-between">
                  <span>Judul: {latestSyncResult.wiki_summary.title}</span>
                  <span>Sebagai data pelengkap histori dan latar belakang non-pejabat</span>
                </div>
              </div>
            )}

            {/* Audit History Log */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-sm p-4 space-y-3">
              <h4 className="font-extrabold text-blue-950 text-xs flex items-center gap-2">
                <HistoryIcon className="w-4 h-4 text-blue-700" />
                <span>Riwayat Audit Sinkronisasi Data (Preservasi Historis)</span>
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-blue-50 text-blue-950 font-bold border-b border-blue-200 text-[10px] uppercase">
                    <tr>
                      <th className="p-2.5">ID Sinkronisasi</th>
                      <th className="p-2.5">Waktu</th>
                      <th className="p-2.5">Metode / Engine</th>
                      <th className="p-2.5">Status</th>
                      <th className="p-2.5">Catatan Verifikasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100 font-mono text-[11px]">
                    {(dbData.riwayat_sinkronisasi || []).map((sync: any, idx: number) => (
                      <tr key={idx} className="hover:bg-blue-50/50">
                        <td className="p-2.5 font-bold text-blue-900">{sync.id}</td>
                        <td className="p-2.5 text-slate-600">{new Date(sync.tanggal).toLocaleString('id-ID')}</td>
                        <td className="p-2.5 font-sans font-semibold text-slate-800">{sync.metode}</td>
                        <td className="p-2.5">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                            {sync.status}
                          </span>
                        </td>
                        <td className="p-2.5 font-sans text-slate-600 text-[11px] max-w-xs">{sync.catatan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: PMB & BEASISWA */}
        {activeTable === 'pmb' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PMB Wave */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <h4 className="font-extrabold text-blue-900 text-sm flex items-center gap-2">
                  <Gift className="w-4 h-4 text-yellow-500" />
                  Jadwal Gelombang PMB 2026
                </h4>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {dbData.pmb_2026?.status || 'Gelombang 2 Aktif'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {(dbData.pmb_2026?.gelombang || []).map((g: any, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">{g.nama}</span>
                      <span className="text-[11px] text-slate-500">{g.periode}</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-900 bg-white px-2 py-1 rounded border border-blue-200">
                      {g.keuntungan}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beasiswa */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <h4 className="font-extrabold text-blue-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  Daftar Program Beasiswa Kampus
                </h4>
                <span className="text-xs font-bold text-blue-800">
                  4 Program Unggulan
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {(dbData.beasiswa || []).map((b: any) => (
                  <div key={b.id} className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1">
                    <span className="font-bold text-blue-950 block">{b.nama}</span>
                    <p className="text-[11px] text-slate-700 font-medium">{b.cakupan}</p>
                    <p className="text-[10px] text-slate-500">Syarat: {b.syarat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: SQL SCHEMA */}
        {activeTable === 'sql' && (
          <div className="bg-slate-900 border-2 border-blue-950 rounded-2xl shadow-xl overflow-hidden text-slate-100">
            <div className="p-3.5 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 font-mono text-yellow-400 font-bold">
                <FileCode className="w-4 h-4" />
                <span>db_unpi_cianjur / schema.sql (DDL & DML)</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySQL}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-yellow-300 text-xs font-bold transition-colors cursor-pointer border border-slate-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin!' : 'Salin SQL'}</span>
                </button>

                <button
                  onClick={handleDownloadSQL}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-blue-950 text-xs font-black transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh .SQL</span>
                </button>
              </div>
            </div>

            <div className="p-4 overflow-x-auto max-h-[600px] scrollbar-thin scrollbar-thumb-slate-700 font-mono text-xs text-blue-200 leading-relaxed">
              <pre>{sqlContent || '-- Memuat schema SQL...'}</pre>
            </div>
          </div>
        )}

        {/* TAB 8: JSON RAW DATA */}
        {activeTable === 'json' && (
          <div className="bg-slate-900 border-2 border-blue-950 rounded-2xl shadow-xl overflow-hidden text-slate-100">
            <div className="p-3.5 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 font-mono text-yellow-400 font-bold">
                <Braces className="w-4 h-4" />
                <span>db_unpi_cianjur / database.json</span>
              </div>

              <button
                onClick={handleDownloadJSON}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-blue-950 text-xs font-black transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh JSON</span>
              </button>
            </div>

            <div className="p-4 overflow-x-auto max-h-[600px] scrollbar-thin scrollbar-thumb-slate-700 font-mono text-xs text-emerald-300 leading-relaxed">
              <pre>{JSON.stringify(dbData, null, 2)}</pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
