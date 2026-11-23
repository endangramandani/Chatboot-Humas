import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { ChatMessageBubble } from './ChatMessageBubble';
import { Send, Mic, MicOff, RefreshCw, AlertCircle } from 'lucide-react';

interface ChatInterfaceProps {
  ttsEnabled: boolean;
  onOpenContact: () => void;
  clearTrigger: number;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init-1',
  sender: 'bot',
  text: 'Halo! Saya **S.I.M.A.S AI**, chatbot resmi bagian **Hubungan Masyarakat (Humas) Universitas Putra Indonesia (UNPI) Cianjur**.\n\nSaya menggunakan **Basis Data Terpadu Resmi UNPI** untuk menjawab seluruh pertanyaan seputar kampus tanpa batasan topik selama dalam lingkup Humas UNPI.\n\n- 🏫 **4 Fakultas**: Fakultas Teknik, Fakultas Ekonomi, Fakultas Ilmu Komunikasi, Fakultas Sastra\n- 🎓 **6 Program Studi**: S1 Teknik Informatika, S1 Manajemen, S1 Akuntansi, S1 Ilmu Komunikasi, S1 Sastra Inggris, D3 Manajemen Informatika\n- 🏛️ **Pimpinan & Kaprodi**, Akreditasi Institusi & Prodi, PMB 2026, Biaya Kuliah, Beasiswa, Fasilitas, Ormawa, dan Alumni\n\nSilakan ajukan pertanyaan Anda secara bebas melalui **ketikan teks atau rekaman suara**!',
  timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
};

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ ttsEnabled, onOpenContact, clearTrigger }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (clearTrigger > 0) {
      setMessages([INITIAL_MESSAGE]);
      window.speechSynthesis?.cancel();
    }
  }, [clearTrigger]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const toggleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setVoiceNotice('Perangkat atau browser ini belum mendukung Web Speech Recognition. Silakan ketik pertanyaan Anda.');
      setTimeout(() => setVoiceNotice(null), 5000);
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'id-ID';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceNotice(null);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputPrompt((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      };

      recognition.onerror = (e: any) => {
        console.warn('Speech recognition status:', e);
        setIsListening(false);
        if (e.error === 'not-allowed') {
          setVoiceNotice('Izin mikrofon ditolak. Silakan izinkan akses mikrofon browser.');
          setTimeout(() => setVoiceNotice(null), 5000);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error(err);
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#\-|]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const messageToSend = (customPrompt || inputPrompt).trim();
    if (!messageToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: messageToSend,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputPrompt('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageToSend,
          history: history
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        const replyText = data.text;
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          isOutOfScope: replyText.includes('hanya dapat menjawab pertanyaan seputar Humas')
        };

        setMessages((prev) => [...prev, botMsg]);

        if (ttsEnabled) {
          speakText(replyText);
        }
      } else {
        throw new Error(data.error || 'Gagal tersambung ke server S.I.M.A.S AI.');
      }
    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'bot',
        text: 'Maaf, terjadi kendala koneksi ke server S.I.M.A.S AI. Silakan periksa koneksi dan coba lagi.',
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-3.75rem)] sm:h-[calc(100vh-4.25rem)] max-w-4xl mx-auto px-3 sm:px-4 py-3">
      {/* Messages Feed Container */}
      <div className="flex-1 overflow-y-auto py-3 px-1 space-y-3 scrollbar-thin scrollbar-thumb-blue-200">
        {messages.map((msg) => (
          <ChatMessageBubble
            key={msg.id}
            message={msg}
            onSpeak={(text) => speakText(text)}
          />
        ))}

        {isLoading && (
          <div className="flex items-center gap-3 my-3">
            <div className="w-8 h-8 rounded-xl bg-blue-900 border-2 border-yellow-400 flex items-center justify-center font-black text-yellow-400 text-xs animate-pulse shadow-md">
              SIMAS
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white border-2 border-blue-200 text-xs font-bold text-blue-900 flex items-center gap-2 shadow-sm">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-yellow-500" />
              <span>Memproses jawaban resmi Humas UNPI...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Footer */}
      <div className="pt-2 border-t border-blue-100">
        {/* Real-time Voice Recording Feedback Banner */}
        {isListening && (
          <div className="mb-2 py-2 px-3.5 rounded-xl bg-gradient-to-r from-rose-50 via-red-50 to-amber-50 border-2 border-rose-300 text-rose-900 text-xs font-semibold flex items-center justify-between shadow-sm animate-pulse">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping shrink-0" />
              <span>Mendengarkan suara Anda... Silakan berbicara pertanyaan seputar Humas UNPI</span>
            </div>
            <span className="text-[10px] text-rose-700 font-bold bg-white px-2 py-0.5 rounded-md border border-rose-200">MIC AKTIF</span>
          </div>
        )}

        {/* Voice Notice if any */}
        {voiceNotice && (
          <div className="mb-2 py-1.5 px-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{voiceNotice}</span>
            </div>
            <button
              onClick={() => setVoiceNotice(null)}
              className="text-amber-700 hover:text-amber-950 font-bold text-xs ml-2 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center gap-2"
        >
          {/* Voice Mic Button */}
          <button
            type="button"
            onClick={toggleSpeechRecognition}
            title={isListening ? 'Hentikan rekaman suara' : 'Mulai rekaman suara (Voice Input)'}
            className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-600 border-rose-500 text-white animate-pulse shadow-md'
                : 'bg-blue-900 border-blue-900 text-yellow-400 hover:bg-blue-800'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Ketik atau gunakan suara untuk bertanya seputar UNPI Cianjur..."
            className="flex-1 px-4 py-3 rounded-xl bg-white border-2 border-blue-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-xs sm:text-sm text-slate-800 font-medium placeholder-slate-400 outline-none transition-all shadow-sm"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={!inputPrompt.trim() || isLoading}
            className="px-5 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Kirim</span>
            <Send className="w-4 h-4 font-bold" />
          </button>
        </form>

        <div className="flex items-center justify-between text-[10px] text-blue-900 font-semibold mt-1.5 px-1">
          <span>Official Humas Chatbot UNPI Cianjur • Jawaban sesuai ketikan & suara</span>
          <button onClick={onOpenContact} className="hover:text-yellow-600 underline font-bold cursor-pointer">
            Kontak Langsung Humas
          </button>
        </div>
      </div>
    </div>
  );
};
