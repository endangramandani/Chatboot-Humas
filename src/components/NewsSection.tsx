import React from 'react';
import { UNPI_NEWS } from '../data/unpiData';
import { Newspaper, Calendar, MapPin, Sparkles, User, ArrowRight, ExternalLink } from 'lucide-react';

interface NewsSectionProps {
  onAskAI: (query: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onAskAI }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Publikasi Kehumasan UNPI Cianjur</span>
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Berita, Prestasi & Agenda Resmi Kampus
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Dapatkan berita terbaru seputar kegiatan akademik, kelulusan wisuda, kejuaraan mahasiswa, dan jalinan kerja sama kemitraan universitas.
            </p>
          </div>

          <button
            onClick={() => onAskAI('Apa kegiatan dan berita terbaru UNPI Cianjur?')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition-all shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tanya Berita Terbaru S.I.M.A.S</span>
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {UNPI_NEWS.map((news) => (
          <div key={news.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-slate-800 text-amber-400 border border-slate-700">
                  {news.kategori}
                </span>

                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {news.tanggal}
                </span>
              </div>

              <h3 className="text-base font-bold text-white hover:text-amber-300 transition-colors leading-snug">
                {news.judul}
              </h3>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {news.ringkasan}
              </p>

              {(news.lokasi || news.narasumber) && (
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                  {news.lokasi && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>Lokasi: <strong className="text-slate-300">{news.lokasi}</strong></span>
                    </div>
                  )}
                  {news.narasumber && (
                    <div className="flex items-center gap-1.5">
                      <User className="w-3 h-3 text-slate-500" />
                      <span>Narasumber: <strong className="text-slate-300">{news.narasumber}</strong></span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => onAskAI(`Berikan penjelasan selengkapnya mengenai berita: "${news.judul}"`)}
              className="w-full py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-slate-200 hover:text-amber-300 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Tanyakan Detail Berita ke S.I.M.A.S</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
