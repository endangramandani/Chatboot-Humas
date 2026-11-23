export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isError?: boolean;
  isOutOfScope?: boolean;
  suggestedQuestions?: string[];
  sources?: string[];
}

export interface QuickTopic {
  id: string;
  icon: string;
  title: string;
  description: string;
  prompt: string;
  category: 'pmb' | 'fakultas' | 'pimpinan' | 'akreditasi' | 'beasiswa' | 'event' | 'kontak';
}

export interface LeadershipMember {
  nama: string;
  gelar: string;
  jabatan: string;
  unitKerja: string;
  masaJabatan?: string;
  sumberData: string;
  tanggalPembaruan: string;
  fotoUrl?: string;
}

export interface StudyProgram {
  namaProdi: string;
  jenjang: 'S1' | 'D3' | 'S2';
  gelar: string;
  akreditasi: string;
  lembagaAkreditasi: string;
  skAkreditasi?: string;
  masaBerlaku?: string;
  visiMisiShort: string;
  prospekKarir: string[];
  kaprodi: string;
}

export interface FacultyInfo {
  namaFakultas: string;
  singkatan: string;
  dekan: string;
  deskripsi: string;
  prodiList: StudyProgram[];
}

export interface ScholarshipItem {
  id: string;
  nama: string;
  jenis: 'Internal' | 'Pemerintah' | 'Prestasi' | 'Hafiz' | 'Influencer' | 'Kemitraan';
  cakupan: string;
  persyaratan: string[];
  periodePendaftaran: string;
  status: 'Buka' | 'Segera Buka' | 'Tutup';
}

export interface CampusNews {
  id: string;
  judul: string;
  tanggal: string;
  kategori: 'Akademik' | 'Prestasi' | 'Kegiatan' | 'Kerja Sama' | 'Wisuda';
  ringkasan: string;
  lokasi?: string;
  narasumber?: string;
  penyelenggara?: string;
  link?: string;
}

export interface PMBWave {
  gelombang: string;
  periode: string;
  potonganBiaya?: string;
  status: 'Aktif' | 'Mendatang' | 'Selesai';
}
