import React from 'react';
import { QuickTopic } from '../types';
import { GraduationCap, Users, Building2, Award, Gift, Newspaper, HelpCircle } from 'lucide-react';

interface QuickTopicsProps {
  onSelectPrompt: (prompt: string) => void;
}

export const TOPICS: QuickTopic[] = [
  {
    id: '1',
    icon: 'Users',
    title: 'Pimpinan & Rektor UNPI',
    description: 'Rektor, Yayasan, Dekan & Struktural',
    prompt: 'Siapa rektor UNPI sekarang?',
    category: 'pimpinan'
  },
  {
    id: '2',
    icon: 'GraduationCap',
    title: 'PMB 2026 & Syarat',
    description: 'Jadwal, Gelombang & Jalur Masuk',
    prompt: 'Kapan pendaftaran mahasiswa baru dibuka dan apa saja persyaratannya?',
    category: 'pmb'
  },
  {
    id: '3',
    icon: 'Building2',
    title: 'Fakultas & Prodi S1',
    description: 'Teknik, Ekonomi, FIKOM, Hukum',
    prompt: 'Apa saja fakultas dan program studi di UNPI?',
    category: 'fakultas'
  },
  {
    id: '4',
    icon: 'Gift',
    title: 'Beasiswa Kampus',
    description: 'KIP-K, Hafiz, Influencer, Prestasi',
    prompt: 'Apakah ada beasiswa di UNPI dan apa saja persyaratannya?',
    category: 'beasiswa'
  },
  {
    id: '5',
    icon: 'Award',
    title: 'Akreditasi Kampus',
    description: 'Status BAN-PT & Lembaga Akreditasi',
    prompt: 'Berapa akreditasi UNPI dan program studinya?',
    category: 'akreditasi'
  },
  {
    id: '6',
    icon: 'Newspaper',
    title: 'Berita & Event Humas',
    description: 'Wisuda, Seminar & MoU Terkini',
    prompt: 'Apa kegiatan dan berita terbaru UNPI?',
    category: 'event'
  },
  {
    id: '7',
    icon: 'HelpCircle',
    title: 'Identitas S.I.M.A.S AI',
    description: 'Profil & Peran Chatbot Humas',
    prompt: 'Kamu siapa?',
    category: 'kontak'
  }
];

export const QuickTopics: React.FC<QuickTopicsProps> = ({ onSelectPrompt }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 'Gift': return <Gift className="w-5 h-5 text-purple-400" />;
      case 'Award': return <Award className="w-5 h-5 text-yellow-400" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5 text-rose-400" />;
      default: return <HelpCircle className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Topik Pertanyaan Populer Humas UNPI
        </span>
        <span className="text-[11px] text-slate-500">Klik untuk langsung bertanya</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {TOPICS.slice(0, 4).map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectPrompt(topic.prompt)}
            className="group flex flex-col items-start text-left p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/80 transition-all shadow-md hover:shadow-amber-500/10 cursor-pointer"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-amber-500/10 transition-colors">
                {getIconComponent(topic.icon)}
              </div>
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-amber-400">Tanyakan &rarr;</span>
            </div>
            <h3 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
              {topic.title}
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
              {topic.description}
            </p>
          </button>
        ))}
      </div>

      {/* Secondary pills row */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        {TOPICS.slice(4).map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectPrompt(topic.prompt)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            {getIconComponent(topic.icon)}
            <span>{topic.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
