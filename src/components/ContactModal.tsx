import React, { useState } from 'react';
import { UNPI_PROFILE } from '../data/unpiData';
import { X, Phone, Mail, Globe, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [kategori, setKategori] = useState('PMB & Pendaftaran');
  const [pesan, setPesan] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !pesan) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNama('');
      setEmail('');
      setPesan('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border-2 border-blue-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Biru Kuning */}
        <div className="flex items-center justify-between p-4 bg-blue-900 border-b-4 border-yellow-400 text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            <h3 className="text-base font-extrabold text-white">
              Layanan Hubungan Masyarakat (Humas) UNPI
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-blue-100 hover:text-white hover:bg-blue-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 bg-blue-50/30">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-200 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950 block font-bold mb-0.5">Alamat Kampus:</strong>
                <span className="text-slate-700 leading-relaxed font-medium">{UNPI_PROFILE.alamat}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-200 shadow-sm">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950 block font-bold mb-0.5">Telepon Sekretariat:</strong>
                <span className="text-slate-700 font-medium">{UNPI_PROFILE.telepon}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-200 shadow-sm">
              <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950 block font-bold mb-0.5">Email Resmi Humas:</strong>
                <span className="text-slate-700 font-medium">{UNPI_PROFILE.emailHumas}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-200 shadow-sm">
              <Globe className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950 block font-bold mb-0.5">Website Utama:</strong>
                <a
                  href={UNPI_PROFILE.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-yellow-600 underline font-bold"
                >
                  unpi-cianjur.ac.id
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm">
            <h4 className="text-sm font-extrabold text-blue-950 mb-3">
              Kirim Pesan Langsung ke Sekretariat Humas UNPI
            </h4>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="font-bold text-emerald-950 text-sm">Pesan Berhasil Terkirim!</p>
                <p>Terima kasih, tim Humas UNPI Cianjur akan menindaklanjuti pesan Anda secepatnya.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Masukkan nama..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-blue-200 text-slate-900 outline-none focus:border-blue-700 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Email / No. WhatsApp</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="0812... atau email@domain.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-blue-200 text-slate-900 outline-none focus:border-blue-700 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Kategori Pertanyaan</label>
                  <select
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-blue-200 text-slate-900 outline-none focus:border-blue-700 font-medium"
                  >
                    <option>PMB & Pendaftaran Mahasiswa Baru</option>
                    <option>Informasi Beasiswa</option>
                    <option>Pelayanan Legalitas & Akreditasi</option>
                    <option>Permohonan Kerja Sama / MoU</option>
                    <option>Liputan Media & Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Isi Pesan / Pertanyaan *</label>
                  <textarea
                    required
                    rows={3}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-blue-200 text-slate-900 outline-none focus:border-blue-700 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 font-bold" />
                  <span>Kirim Pesan Ke Humas</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-blue-900 text-white flex flex-wrap items-center justify-between text-xs">
          <span className="font-semibold text-blue-100">Media Sosial Humas UNPI:</span>
          <div className="flex items-center gap-3 font-bold text-yellow-400">
            <span>{UNPI_PROFILE.sosialMedia.instagram}</span>
            <span>{UNPI_PROFILE.sosialMedia.tiktok}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
