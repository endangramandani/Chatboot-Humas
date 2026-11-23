import React, { useState } from 'react';
import { UNPI_PROFILE, UNPI_LEADERSHIP, UNPI_FACULTIES, UNPI_ACCREDITATION } from '../data/unpiData';
import { Users, Building2, Award, Sparkles, CheckCircle2, ChevronRight, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

interface CampusDirectoryProps {
  onAskAI: (query: string) => void;
}

export const CampusDirectory: React.FC<CampusDirectoryProps> = ({ onAskAI }) => {
  const [activeTab, setActiveTab] = useState<'pimpinan' | 'fakultas' | 'akreditasi' | 'profil'>('pimpinan');

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Directory Title Header */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 border border-slate-800 rounded-2xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Pusat Informasi Digital Humas UNPI</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Direktori Kampus & Struktur UNPI Cianjur
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Informasi lengkap mengenai profil universitas, pimpinan aktif, fakultas, program studi S1, akreditasi BAN-PT/LAM, dan fasilitas kampus.
            </p>
          </div>

          <button
            onClick={() => onAskAI('Apa keunggulan dan sejarah UNPI Cianjur?')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tanyakan S.I.M.A.S AI</span>
          </button>
        </div>

        {/* Directory Sub Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => setActiveTab('pimpinan')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'pimpinan'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            Pimpinan & Struktural
          </button>

          <button
            onClick={() => setActiveTab('fakultas')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'fakultas'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Fakultas & Prodi S1
          </button>

          <button
            onClick={() => setActiveTab('akreditasi')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'akreditasi'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            Akreditasi BAN-PT & LAM
          </button>

          <button
            onClick={() => setActiveTab('profil')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'profil'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Profil & Fasilitas Kampus
          </button>
        </div>
      </div>

      {/* TAB 1: PIMPINAN */}
      {activeTab === 'pimpinan' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Pimpinan Aktif & Struktural Organisasi UNPI Cianjur
            </h3>
            <span className="text-xs text-slate-400">Sumber Data: Terverifikasi Dokumen SK Resmiv 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UNPI_LEADERSHIP.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-amber-500/40 transition-all shadow-md group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-700/50 flex items-center justify-center font-bold text-amber-400 text-xs">
                    {item.nama.split(' ')[0][0]}{item.nama.split(' ')[1]?.[0] || 'U'}
                  </div>
                  <button
                    onClick={() => onAskAI(`Siapa profil dan riwayat ${item.jabatan} UNPI ${item.nama}?`)}
                    className="text-[11px] font-semibold text-slate-400 hover:text-amber-400 flex items-center gap-1 bg-slate-800/80 hover:bg-slate-800 px-2 py-1 rounded-md transition-colors"
                  >
                    <span>Tanyakan AI</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
                  {item.jabatan}
                </h4>
                <p className="text-sm font-bold text-white mt-0.5 group-hover:text-amber-400 transition-colors">
                  {item.nama}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                  <div>Unit Kerja: <span className="text-slate-200 font-medium">{item.unitKerja}</span></div>
                  <div>Sumber: <span className="text-slate-300">{item.sumberData}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: FAKULTAS & PRODI */}
      {activeTab === 'fakultas' && (
        <div className="space-y-6">
          {UNPI_FACULTIES.map((fac, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs">
                      {fac.singkatan}
                    </span>
                    <h3 className="text-lg font-bold text-white">{fac.namaFakultas}</h3>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">Dekan: <span className="font-semibold text-amber-300">{fac.dekan}</span></p>
                </div>

                <button
                  onClick={() => onAskAI(`Jelaskan program studi dan prospek lulusan di ${fac.namaFakultas} UNPI!`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs font-semibold transition-all flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tanya Seputar {fac.singkatan}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fac.prodiList.map((prodi, pIdx) => (
                  <div key={pIdx} className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                          Jenjang {prodi.jenjang}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1">{prodi.namaProdi}</h4>
                        <p className="text-xs text-amber-400 font-medium">{prodi.gelar}</p>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-extrabold text-[11px] shrink-0">
                        {prodi.akreditasi}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {prodi.visiMisiShort}
                    </p>

                    <div className="text-xs text-slate-400">
                      <strong className="text-slate-200">Prospek Karir Utama:</strong>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {prodi.prospekKarir.map((karir, kIdx) => (
                          <span key={kIdx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300">
                            • {karir}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Kaprodi: <strong className="text-slate-200">{prodi.kaprodi}</strong></span>
                      <button
                        onClick={() => onAskAI(`Bagaimana syarat pendaftaran dan akreditasi prodi S1 ${prodi.namaProdi} UNPI?`)}
                        className="text-amber-400 hover:underline font-semibold"
                      >
                        Tanyakan Detail &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: AKREDITASI */}
      {activeTab === 'akreditasi' && (
        <div className="space-y-6">
          {/* Institusi Card */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  Akreditasi Perguruan Tinggi
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  Universitas Putra Indonesia (UNPI) Cianjur
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Lembaga Akreditasi: {UNPI_ACCREDITATION.institusi.lembaga}
                </p>
              </div>

              <div className="bg-slate-900/90 border border-amber-500/40 rounded-xl p-4 text-center shrink-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Status Akreditasi</span>
                <span className="text-lg font-black text-amber-400 block mt-0.5">
                  {UNPI_ACCREDITATION.institusi.peringkat}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Berlaku s.d. {UNPI_ACCREDITATION.institusi.masaBerlaku}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-slate-200">Nomor SK Resmi BAN-PT:</span> {UNPI_ACCREDITATION.institusi.sk}
            </div>
          </div>

          {/* Table summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Daftar Akreditasi Program Studi S1 UNPI Cianjur
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-amber-300 border-b border-slate-700">
                    <th className="p-3">Program Studi</th>
                    <th className="p-3">Peringkat Akreditasi</th>
                    <th className="p-3">Lembaga Akreditasi</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {UNPI_ACCREDITATION.prodiSummary.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-800/80 hover:bg-slate-800/50">
                      <td className="p-3 font-semibold text-white">{item.prodi}</td>
                      <td className="p-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-bold text-[11px]">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-slate-300">{item.lembaga}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => onAskAI(`Berapa nomor SK dan masa berlaku akreditasi ${item.prodi} UNPI?`)}
                          className="text-amber-400 hover:text-amber-300 font-semibold text-xs"
                        >
                          Tanyakan AI &rarr;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PROFIL & FASILITAS */}
      {activeTab === 'profil' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Profil & Visi Misi Universitas</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div>
                <strong className="text-amber-300 block mb-1">Visi Universitas:</strong>
                <p className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-slate-200 italic">
                  "{UNPI_PROFILE.visi}"
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-1">Alamat Lengkap Kampus:</strong>
                <p className="text-slate-200 font-medium">
                  {UNPI_PROFILE.alamat}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-4">
              Fasilitas Pembelajaran & Sarana Kampus UNPI
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {UNPI_PROFILE.fasilitas.map((fas, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{fas}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
