import React, { useState } from 'react';
import { UNPI_FACULTIES, UNPI_LEADERSHIP, UNPI_ACCREDITATION, UNPI_PMB_INFO, UNPI_SCHOLARSHIPS, UNPI_PROFILE } from '../data/unpiData';
import { X, Database, Download, Search, Table, ShieldCheck, CheckCircle2, Building2, Users, Award, Gift } from 'lucide-react';

interface DatabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DatabaseModal: React.FC<DatabaseModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'prodi' | 'pimpinan' | 'akreditasi' | 'pmb'>('prodi');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const handleExportJSON = () => {
    const dbExport = {
      institusi: UNPI_PROFILE,
      pimpinan: UNPI_LEADERSHIP,
      fakultasDanProdi: UNPI_FACULTIES,
      akreditasi: UNPI_ACCREDITATION,
      pmb2026: UNPI_PMB_INFO,
      beasiswa: UNPI_SCHOLARSHIPS,
      exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(dbExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `database_resmi_unpi_cianjur_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white border-2 border-blue-200 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header Database */}
        <div className="flex items-center justify-between p-4 bg-blue-900 border-b-4 border-yellow-400 text-white">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-yellow-400" />
            <div>
              <h3 className="text-base font-extrabold text-white">
                Database Resmi Humas UNPI Cianjur
              </h3>
              <p className="text-[11px] text-blue-100">
                Data Terverifikasi Struktur Organisasi & LLDIKTI IV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-extrabold text-xs transition-all shadow cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Ekspor JSON</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-blue-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub Navigation Bar & Search */}
        <div className="p-3 bg-blue-50/60 border-b border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('prodi')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'prodi'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-blue-900 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>4 Fakultas & 6 Prodi</span>
            </button>

            <button
              onClick={() => setActiveTab('pimpinan')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'pimpinan'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-blue-900 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Pimpinan & Yayasan</span>
            </button>

            <button
              onClick={() => setActiveTab('akreditasi')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'akreditasi'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-blue-900 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Akreditasi BAN-PT</span>
            </button>

            <button
              onClick={() => setActiveTab('pmb')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'pmb'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-blue-900 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span>PMB & Beasiswa</span>
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-blue-900" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari dalam database..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white border border-blue-200 text-slate-800 text-xs font-medium outline-none focus:border-blue-700"
            />
          </div>
        </div>

        {/* Database Tables Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB 1: 4 Fakultas & 6 Prodi */}
          {activeTab === 'prodi' && (
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-3 text-xs text-yellow-900 font-medium">
                <strong>Catatan Resmi LLDIKTI IV:</strong> Menampilkan 4 Fakultas dan 6 Program Studi resmi UNPI Cianjur beserta Kepala UP Prodi dan status Dekan terverifikasi.
              </div>

              <div className="overflow-x-auto rounded-xl border-2 border-blue-200 bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-blue-900 border-b-2 border-yellow-400 text-yellow-300 font-bold">
                      <th className="p-3">Fakultas</th>
                      <th className="p-3">Program Studi</th>
                      <th className="p-3">Jenjang & Gelar</th>
                      <th className="p-3">Kepala UP Prodi</th>
                      <th className="p-3">Status Dekan Aktif</th>
                      <th className="p-3">Akreditasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UNPI_FACULTIES.flatMap(f => 
                      f.prodiList.map((p, idx) => ({
                        fakultas: f.namaFakultas,
                        dekan: f.dekan,
                        prodi: p.namaProdi,
                        jenjang: p.jenjang,
                        gelar: p.gelar,
                        kaprodi: p.kaprodi,
                        akreditasi: p.akreditasi,
                        lembaga: p.lembagaAkreditasi
                      }))
                    )
                    .filter(item => 
                      item.fakultas.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.prodi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.kaprodi.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-blue-100 hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">{row.fakultas}</td>
                        <td className="p-3 font-bold text-slate-800">{row.prodi}</td>
                        <td className="p-3 text-slate-700 font-medium">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold mr-1">{row.jenjang}</span>
                          {row.gelar}
                        </td>
                        <td className="p-3 font-bold text-blue-900 bg-yellow-50">{row.kaprodi}</td>
                        <td className="p-3 text-slate-500 italic">{row.dekan}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                            {row.akreditasi}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: Pimpinan & Yayasan */}
          {activeTab === 'pimpinan' && (
            <div className="overflow-x-auto rounded-xl border-2 border-blue-200 bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-blue-900 border-b-2 border-yellow-400 text-yellow-300 font-bold">
                    <th className="p-3">Jabatan Struktural</th>
                    <th className="p-3">Nama Pejabat Aktif</th>
                    <th className="p-3">Gelar Akademik</th>
                    <th className="p-3">Unit Kerja</th>
                    <th className="p-3">Dasar Verifikasi SK</th>
                  </tr>
                </thead>
                <tbody>
                  {UNPI_LEADERSHIP
                    .filter(l => l.nama.toLowerCase().includes(searchTerm.toLowerCase()) || l.jabatan.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((lead, idx) => (
                      <tr key={idx} className="border-b border-blue-100 hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">{lead.jabatan}</td>
                        <td className="p-3 font-extrabold text-slate-900">{lead.nama}</td>
                        <td className="p-3 text-blue-900 font-medium">{lead.gelar}</td>
                        <td className="p-3 text-slate-700">{lead.unitKerja}</td>
                        <td className="p-3 text-slate-500 font-mono text-[11px]">{lead.sumberData}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: Akreditasi BAN-PT & LAM */}
          {activeTab === 'akreditasi' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-900 text-white flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-yellow-400 uppercase">Institusi Perguruan Tinggi</span>
                  <h4 className="text-base font-extrabold mt-0.5">Universitas Putra Indonesia (UNPI) Cianjur</h4>
                  <p className="text-xs text-blue-100 mt-0.5">SK: {UNPI_ACCREDITATION.institusi.sk}</p>
                </div>
                <div className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-xl text-center font-black">
                  <span className="text-xs block">Peringkat</span>
                  <span className="text-sm">{UNPI_ACCREDITATION.institusi.peringkat}</span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border-2 border-blue-200 bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-blue-900 border-b-2 border-yellow-400 text-yellow-300 font-bold">
                      <th className="p-3">Program Studi</th>
                      <th className="p-3">Peringkat Akreditasi</th>
                      <th className="p-3">Lembaga Akreditasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UNPI_ACCREDITATION.prodiSummary
                      .filter(a => a.prodi.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((row, idx) => (
                        <tr key={idx} className="border-b border-blue-100 hover:bg-blue-50">
                          <td className="p-3 font-bold text-slate-900">{row.prodi}</td>
                          <td className="p-3 font-extrabold text-emerald-700">{row.status}</td>
                          <td className="p-3 font-semibold text-blue-900">{row.lembaga}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: PMB & Beasiswa */}
          {activeTab === 'pmb' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-blue-100 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-extrabold text-blue-950 uppercase border-b pb-2">Jalur PMB 2026</h4>
                <p className="text-xs text-slate-700"><strong>Biaya Pendaftaran:</strong> {UNPI_PMB_INFO.biayaPendaftaran}</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  {UNPI_PMB_INFO.jalurMasuk.map((j, jIdx) => (
                    <li key={jIdx} className="p-2 rounded bg-blue-50 border border-blue-100">
                      <strong className="text-blue-900 block">{j.nama}</strong>
                      <span className="text-[11px]">{j.deskripsi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-100 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-extrabold text-blue-950 uppercase border-b pb-2">Beasiswa Disediakan</h4>
                <ul className="text-xs space-y-2">
                  {UNPI_SCHOLARSHIPS.map((s) => (
                    <li key={s.id} className="p-2 rounded bg-yellow-50 border border-yellow-200">
                      <strong className="text-blue-900 block font-bold">{s.nama}</strong>
                      <span className="text-[11px] text-slate-800">{s.cakupan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Footer Database */}
        <div className="p-3 bg-blue-900 text-white flex items-center justify-between text-[11px]">
          <span>Database Resmi Humas Universitas Putra Indonesia Cianjur</span>
          <span className="font-mono text-yellow-400">Total Records: 12 Active Tables</span>
        </div>
      </div>
    </div>
  );
};
