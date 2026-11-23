import React from 'react';
import { UNPI_PROFILE } from '../data/unpiData';
import { ShieldCheck, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-slate-800/80">
        {/* Col 1 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white font-extrabold text-sm">
            <span className="text-amber-400">S.I.M.A.S</span> AI Humas UNPI
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Chatbot Resmi Pusat Informasi Hubungan Masyarakat Universitas Putra Indonesia Cianjur. Berbasis Kecerdasan Buatan (AI) Generatif.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-amber-300 font-bold uppercase tracking-wider text-[11px] mb-2">Alamat & Kontak</h4>
          <p className="text-slate-300 text-[11px] leading-relaxed">{UNPI_PROFILE.alamat}</p>
          <p className="mt-1 text-[11px] text-slate-400">Telp: {UNPI_PROFILE.telepon}</p>
          <p className="text-[11px] text-slate-400">Email: {UNPI_PROFILE.emailHumas}</p>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-amber-300 font-bold uppercase tracking-wider text-[11px] mb-2">Fakultas & Akreditasi</h4>
          <ul className="space-y-1 text-[11px] text-slate-300">
            <li>• Fakultas Teknik (Informatika & Sipil)</li>
            <li>• Fakultas Ekonomi (Manajemen & Akuntansi)</li>
            <li>• Fakultas Ilmu Komunikasi</li>
            <li>• Fakultas Hukum</li>
            <li className="text-emerald-400 font-semibold mt-1">Status BAN-PT: Baik Sekali</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-amber-300 font-bold uppercase tracking-wider text-[11px] mb-2">Kanal Resmi</h4>
          <div className="space-y-1.5 text-[11px]">
            <a
              href={UNPI_PROFILE.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span>Website UNPI Official</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <p className="text-slate-400">Instagram: {UNPI_PROFILE.sosialMedia.instagram}</p>
            <p className="text-slate-400">TikTok: {UNPI_PROFILE.sosialMedia.tiktok}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
        <span>© {new Date().getFullYear()} Universitas Putra Indonesia (UNPI) Cianjur. All rights reserved.</span>
        <span className="flex items-center gap-1">
          <span>Dikembangkan oleh Bagian Humas UNPI Cianjur</span>
        </span>
      </div>
    </footer>
  );
};
