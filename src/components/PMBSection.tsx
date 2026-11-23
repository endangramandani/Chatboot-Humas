import React from 'react';
import { UNPI_PMB_WAVES, UNPI_PMB_INFO, UNPI_SCHOLARSHIPS } from '../data/unpiData';
import { GraduationCap, Gift, Calendar, CheckCircle, Sparkles, FileText, HelpCircle, ArrowRight } from 'lucide-react';

interface PMBSectionProps {
  onAskAI: (query: string) => void;
}

export const PMBSection: React.FC<PMBSectionProps> = ({ onAskAI }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-blue-950 border border-amber-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>PENERIMAAN MAHASISWA BARU (PMB 2026)</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              PMB & Beasiswa UNPI Cianjur Tahun 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Bergabunglah dengan Universitas Putra Indonesia Cianjur. Dapatkan kemudahan pendaftaran jalur bebas tes, potongan biaya kuliah, dan berbagai program beasiswa prestasi & Hafiz.
            </p>
          </div>

          <button
            onClick={() => onAskAI('Bagaimana cara mendaftar PMB UNPI 2026 dan berapa biayanya?')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/20 transition-all shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tanya Syarat & Biaya PMB</span>
          </button>
        </div>
      </div>

      {/* Gelombang PMB Grid */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Jadwal Gelombang Pendaftaran 2026</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {UNPI_PMB_WAVES.map((wave, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all ${
                wave.status === 'Aktif'
                  ? 'bg-slate-900 border-amber-500/60 ring-1 ring-amber-500/40 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  wave.status === 'Aktif'
                    ? 'bg-amber-400 text-slate-950 animate-pulse'
                    : wave.status === 'Selesai'
                    ? 'bg-slate-800 text-slate-400'
                    : 'bg-blue-950 text-blue-300 border border-blue-800'
                }`}>
                  {wave.status}
                </span>

                <span className="text-[11px] font-bold text-slate-400">PMB 2026</span>
              </div>

              <h4 className="text-base font-extrabold text-white">{wave.gelombang}</h4>
              <p className="text-xs font-semibold text-amber-300 mt-1">{wave.periode}</p>

              {wave.potonganBiaya && (
                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <strong className="text-amber-400 block mb-0.5">Promo / Keuntungan:</strong>
                  <span>{wave.potonganBiaya}</span>
                </div>
              )}

              <button
                onClick={() => onAskAI(`Bagaimana promo dan syarat untuk ${wave.gelombang} UNPI?`)}
                className="w-full mt-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1"
              >
                <span>Cek Detail Gelombang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Jalur Pendaftaran & Persyaratan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span>Pilihan Jalur Masuk PMB UNPI</span>
          </h3>

          <div className="space-y-3">
            {UNPI_PMB_INFO.jalurMasuk.map((jalur, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-amber-300">{jalur.nama}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{jalur.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Persyaratan Berkas Pendaftaran</span>
          </h3>

          <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
            {UNPI_PMB_INFO.persyaratanUmum.map((syarat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[11px] flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{syarat}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/60 text-xs text-blue-200">
            <strong className="block text-white mb-1">Biaya Pendaftaran Official:</strong>
            <span className="text-amber-300 font-extrabold text-sm">{UNPI_PMB_INFO.biayaPendaftaran}</span>
            <span className="block mt-1 text-slate-400 text-[11px]">*Tersedia kemudahan skema cicilan bulanan UKT.</span>
          </div>
        </div>
      </div>

      {/* Beasiswa Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Gift className="w-5 h-5 text-purple-400" />
              <span>Program Beasiswa UNPI Cianjur</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Bantuan pendidikan bagi mahasiswa berprestasi, hafiz Al-Qur\'an, dan kreator konten digital.
            </p>
          </div>

          <button
            onClick={() => onAskAI('Apakah ada beasiswa di UNPI dan apa saja persyaratannya?')}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all shrink-0"
          >
            Tanya Semua Beasiswa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UNPI_SCHOLARSHIPS.map((scholar) => (
            <div key={scholar.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                    Beasiswa {scholar.jenis}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">{scholar.nama}</h4>
                </div>

                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {scholar.status}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 text-xs text-slate-200">
                <strong className="text-amber-300 block mb-0.5">Manfaat & Cakupan:</strong>
                <span>{scholar.cakupan}</span>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <strong className="text-slate-300 block">Syarat Utama:</strong>
                <ul className="list-disc pl-4 space-y-0.5">
                  {scholar.persyaratan.map((p, pIdx) => (
                    <li key={pIdx}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800">
                <span>Periode: {scholar.periodePendaftaran}</span>
                <button
                  onClick={() => onAskAI(`Bagaimana syarat lengkap dan cara mendaftar ${scholar.nama}?`)}
                  className="text-amber-400 font-semibold hover:underline"
                >
                  Tanyakan AI &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
