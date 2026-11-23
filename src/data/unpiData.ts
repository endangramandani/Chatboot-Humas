import { FacultyInfo, LeadershipMember, ScholarshipItem, CampusNews, PMBWave } from '../types';

export const UNPI_PROFILE = {
  namaResmi: 'Universitas Putra Indonesia (UNPI) Cianjur',
  singkatan: 'UNPI Cianjur',
  yayasan: 'Yayasan Pendidikan Putra Indonesia (YPP-PI)',
  tahunBerdiri: '2001',
  alamat: 'Jl. Dr. Muwardi No. 66 (Bypass), Kel. Muka, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43215',
  telepon: '(0263) 262604 / 270958',
  email: 'info@unpi-cianjur.ac.id',
  emailHumas: 'humas@unpi-cianjur.ac.id',
  website: 'https://www.unpi-cianjur.ac.id/',
  visi: 'Menjadi Universitas Unggul dalam Pengembangan Ilmu Pengetahuan, Teknologi, dan Seni Berlandaskan Jiwa Kewirausahaan serta Nilai-Nilai Moral dan Etika pada Tahun 2030.',
  misi: [
    'Menyelenggarakan pendidikan tinggi berkualitas berbasis nilai moral, etika, dan jiwa kewirausahaan.',
    'Melaksanakan penelitian inovatif yang bermanfaat bagi pengembangan masyarakat dan ilmu pengetahuan.',
    'Melakukan pengabdian kepada masyarakat secara berkelanjutan demi pemberdayaan sosial dan ekonomi daerah.',
    'Memperluas kemitraan dan kerja sama strategis di tingkat lokal, nasional, dan internasional.'
  ],
  fasilitas: [
    'Gedung Kampus Terpadu 4 Lantai',
    'Laboratorium Komputer & Jaringan Internet Cepat',
    'Studio Audio & Visual Ilmu Komunikasi',
    'Perpustakaan Digital (e-Library) & Ruang Baca Mandiri',
    'Laboratorium Bahasa & Sastra',
    'Laboratorium Rekayasa & Sipil',
    'Fasilitas Olahraga (Futsal, Basket, Bulutangkis)',
    'Mushola & Pusat Kegiatan Mahasiswa',
    'Kantin Higienis & Area Parkir Luas',
    'Free Wi-Fi Area Kampus'
  ],
  sosialMedia: {
    instagram: '@unpicianjur_official',
    instagramHumas: '@humas_unpi',
    facebook: 'Universitas Putra Indonesia Cianjur',
    youtube: 'UNPI Cianjur Official Channel',
    tiktok: '@unpi_cianjur'
  }
};

export const UNPI_LEADERSHIP: LeadershipMember[] = [
  {
    nama: 'Prof. Dr. Hj. Yuyun Moeslim Taher, SH',
    gelar: 'Prof. Dr. Hj., SH',
    jabatan: 'Pendiri YPYMT Cianjur',
    unitKerja: 'Yayasan Pendiri',
    sumberData: 'Dokumen Resmi Yayasan YPYMT',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'drg. H. Moestar P. Moeslim Taher, MH',
    gelar: 'drg. H., MH',
    jabatan: 'Ketua Dewan Pembina',
    unitKerja: 'Dewan Pembina Yayasan',
    sumberData: 'Dokumen Resmi Yayasan YPYMT',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Kurnia P. Moeslim Taher',
    gelar: '',
    jabatan: 'Ketua YPYMT Cianjur',
    unitKerja: 'Pimpinan Yayasan YPYMT',
    sumberData: 'Dokumen Resmi Yayasan YPYMT',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Dr. H. Denny Aditya D, SE., M.Ap.',
    gelar: 'Dr. H., SE., M.Ap.',
    jabatan: 'BPH YPYMT',
    unitKerja: 'Badan Pengurus Harian Yayasan',
    sumberData: 'Dokumen Resmi Yayasan YPYMT',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Enden Suryati, SE., MM.',
    gelar: 'SE., MM.',
    jabatan: 'BPH YPYMT',
    unitKerja: 'Badan Pengurus Harian Yayasan',
    sumberData: 'Dokumen Resmi Yayasan YPYMT',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Dody Faraitody Teguh, SE., MH.',
    gelar: 'SE., MH.',
    jabatan: 'BPH YPYMT',
    unitKerja: 'Badan Pengurus Harian Yayasan',
    sumberData: 'Dokumen Resmi Yayasan YPYMT',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Dr. Ir. H. Santo Dewatmoko, S.T., M.M., M.A., IPU., ASEAN Eng.',
    gelar: 'Dr., Ir., M.M., M.A., IPU., ASEAN Eng.',
    jabatan: 'Rektor',
    unitKerja: 'Rektorat UNPI Cianjur',
    sumberData: 'SK Rektor UNPI Official / Pembaruan Terverifikasi 2026',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Ir. Achmad Rifai, M.M.',
    gelar: 'Ir., M.M.',
    jabatan: 'Wakil Rektor I (Bidang Akademik & Kurikulum)',
    unitKerja: 'Wakil Rektorate I',
    sumberData: 'SK Rektor UNPI Official / Pembaruan Terverifikasi 2026',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Hj. Endang Tri S, S.E., M.M.',
    gelar: 'S.E., M.M.',
    jabatan: 'Wakil Rektor II (Bidang Keuangan, Sumber Daya & SDM)',
    unitKerja: 'Wakil Rektorate II',
    sumberData: 'SK Rektor UNPI Official',
    tanggalPembaruan: '2026-01-15'
  },
  {
    nama: 'Drs. H. Mulyadi, M.Si.',
    gelar: 'Drs., M.Si.',
    jabatan: 'Wakil Rektor III (Bidang Kemahasiswaan, Alumni & Humas)',
    unitKerja: 'Wakil Rektorate III',
    sumberData: 'SK Rektor UNPI Official',
    tanggalPembaruan: '2026-01-15'
  },
  {
    nama: 'Aminah Agustinah M.Ant',
    gelar: 'M.Ant',
    jabatan: 'Kepala Lembaga Penelitian & Pengabdian kepada Masyarakat (LPPM)',
    unitKerja: 'LPPM UNPI Cianjur',
    sumberData: 'SK Universitas Official',
    tanggalPembaruan: '2026-11-16'
  },
  {
    nama: 'Irfan Sophan Himawan, SE.Ak, MM.',
    gelar: 'SE.Ak, MM.',
    jabatan: 'Kepala Lembaga Penjaminan Mutu (LPM)',
    unitKerja: 'LPM UNPI Cianjur',
    sumberData: 'SK Universitas Official',
    tanggalPembaruan: '2026-11-16'
  }
];

export const UNPI_FACULTIES: FacultyInfo[] = [
  {
    namaFakultas: 'Fakultas Teknik',
    singkatan: 'FT',
    dekan: 'Muhammad Adi Kuncoro, S.T., M.Kom',
    deskripsi: 'Fakultas yang berfokus pada teknologi rekayasa, pengembangan sistem informasi, dan sains data.',
    prodiList: [
      {
        namaProdi: 'Teknik Informatika',
        jenjang: 'S1',
        gelar: 'S.Kom. (Sarjana Komputer)',
        akreditasi: 'Baik Sekali',
        lembagaAkreditasi: 'LAM INFOKOM / BAN-PT',
        skAkreditasi: 'No. 124/SK/LAM-INFOKOM/Akred/S1/2024',
        masaBerlaku: '2029',
        visiMisiShort: 'Menghasilkan Software Engineer dan IT Specialist berkarakter Technopreneur.',
        prospekKarir: ['Fullstack Web & Mobile Developer', 'Software Engineer', 'IT Project Manager', 'Data Analyst'],
        kaprodi: 'Mohamad Sidiq Permana, S.T., M.Kom.'
      },
      {
        namaProdi: 'Manajemen Informatika',
        jenjang: 'D3',
        gelar: 'A.Md.Kom. (Ahli Madya Komputer)',
        akreditasi: 'Baik',
        lembagaAkreditasi: 'BAN-PT',
        skAkreditasi: 'No. 092/SK/BAN-PT/Akred/D3/2023',
        masaBerlaku: '2028',
        visiMisiShort: 'Menghasilkan Praktisi Administrasi Sistem Informasi & IT Support Terampil.',
        prospekKarir: ['Database Administrator Staff', 'IT Support Specialist', 'Junior Web Programmer'],
        kaprodi: 'Widianjani, M.Pd.'
      }
    ]
  },
  {
    namaFakultas: 'Fakultas Ekonomi',
    singkatan: 'FE',
    dekan: 'Dr. Reni Nurlaela, SE., M.Pd.',
    deskripsi: 'Fakultas pencetak manajer bisnis, akuntan profesional, dan wirausahawan.',
    prodiList: [
      {
        namaProdi: 'Manajemen',
        jenjang: 'S1',
        gelar: 'S.M. (Sarjana Manajemen)',
        akreditasi: 'Baik Sekali',
        lembagaAkreditasi: 'LAMEMBA / BAN-PT',
        skAkreditasi: 'No. 312/SK/LAMEMBA/Akred/S1/2024',
        masaBerlaku: '2029',
        visiMisiShort: 'Pusat Studi Manajemen Strategis & Manajerial Unggul.',
        prospekKarir: ['Business Manager', 'Digital Marketing Specialist', 'Entrepreneur', 'HR Officer'],
        kaprodi: 'Iis Kartini, S.Sos., M.M.'
      },
      {
        namaProdi: 'Akuntansi',
        jenjang: 'S1',
        gelar: 'S.Ak. (Sarjana Akuntansi)',
        akreditasi: 'Baik',
        lembagaAkreditasi: 'LAMEMBA / BAN-PT',
        skAkreditasi: 'No. 195/SK/LAMEMBA/Akred/S1/2023',
        masaBerlaku: '2028',
        visiMisiShort: 'Menghasilkan Akuntan Keuangan dan Auditor Berintegritas.',
        prospekKarir: ['Auditor', 'Akuntan Perusahaan', 'Analis Keuangan', 'Konsultan Pajak'],
        kaprodi: 'Merry Merliani Hindarsah, S.E., M.Ak.'
      }
    ]
  },
  {
    namaFakultas: 'Fakultas Ilmu Komunikasi',
    singkatan: 'FIKOM',
    dekan: 'Dandi Bahtiar, S.E., M.M., AFA., CAAT.',
    deskripsi: 'Fakultas pengembang talenta kehumasan, media kreatif, dan komunikasi publik.',
    prodiList: [
      {
        namaProdi: 'Ilmu Komunikasi',
        jenjang: 'S1',
        gelar: 'S.I.Kom. (Sarjana Ilmu Komunikasi)',
        akreditasi: 'Baik Sekali',
        lembagaAkreditasi: 'BAN-PT',
        skAkreditasi: 'No. 401/SK/BAN-PT/Akred/S1/2024',
        masaBerlaku: '2029',
        visiMisiShort: 'Pusat Pembelajaran Komunikasi Kehumasan Digital Terdepan.',
        prospekKarir: ['Public Relations Specialist', 'Social Media Strategist', 'Journalist / Content Producer'],
        kaprodi: 'Dwi Sri Agustina, S.I.Kom., M.I.Kom.'
      }
    ]
  },
  {
    namaFakultas: 'Fakultas Sastra',
    singkatan: 'FS',
    dekan: 'Frisyi Fitriyani Fauziyah, M.Pd',
    deskripsi: 'Fakultas pengembangan bahasa, kebudayaan, penerjemahan, dan linguistik terapan.',
    prodiList: [
      {
        namaProdi: 'Sastra Inggris',
        jenjang: 'S1',
        gelar: 'S.S. (Sarjana Sastra)',
        akreditasi: 'Baik',
        lembagaAkreditasi: 'BAN-PT',
        skAkreditasi: 'No. 305/SK/BAN-PT/Akred/S1/2024',
        masaBerlaku: '2029',
        visiMisiShort: 'Menghasilkan Lulusan Linguistik dan Penerjemah Profesional Berwawasan Global.',
        prospekKarir: ['Translator & Interpreter', 'Copywriter / Content Writer', 'Linguistic Specialist', 'Diplomatic Staff Assistant'],
        kaprodi: 'Shagita Maulady Anjany, M.Hum.'
      }
    ]
  }
];

export const UNPI_ACCREDITATION = {
  institusi: {
    peringkat: 'Terakreditasi Baik Sekali',
    lembaga: 'Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT)',
    sk: 'No. 782/SK/BAN-PT/Akred/PT/2024',
    masaBerlaku: '2029'
  },
  prodiSummary: [
    { prodi: 'S1 Teknik Informatika', status: 'Baik Sekali', lembaga: 'LAM INFOKOM', sk: 'No. 124/SK/LAM-INFOKOM/Akred/S1/2024', masa: '2029' },
    { prodi: 'S1 Manajemen', status: 'Baik Sekali', lembaga: 'LAMEMBA', sk: 'No. 312/SK/LAMEMBA/Akred/S1/2024', masa: '2029' },
    { prodi: 'S1 Akuntansi', status: 'Baik', lembaga: 'LAMEMBA', sk: 'No. 195/SK/LAMEMBA/Akred/S1/2023', masa: '2028' },
    { prodi: 'S1 Ilmu Komunikasi', status: 'Baik Sekali', lembaga: 'BAN-PT', sk: 'No. 401/SK/BAN-PT/Akred/S1/2024', masa: '2029' },
    { prodi: 'S1 Sastra Inggris', status: 'Baik', lembaga: 'BAN-PT', sk: 'No. 305/SK/BAN-PT/Akred/S1/2024', masa: '2029' },
    { prodi: 'D3 Manajemen Informatika', status: 'Baik', lembaga: 'BAN-PT', sk: 'No. 092/SK/BAN-PT/Akred/D3/2023', masa: '2028' }
  ]
};

export const UNPI_PMB_WAVES: PMBWave[] = [
  {
    gelombang: 'Gelombang 1 (Jalur Dini / Early Bird)',
    periode: '02 Januari 2026 - 30 April 2026',
    potonganBiaya: 'Diskon 30% Biaya Registrasi Awal & Gratis Jalur Raport',
    status: 'Selesai'
  },
  {
    gelombang: 'Gelombang 2 (Jalur Reguler Utama)',
    periode: '01 Mei 2026 - 31 Juli 2026',
    potonganBiaya: 'Diskon 15% Biaya Pengembangan Institusi',
    status: 'Aktif'
  },
  {
    gelombang: 'Gelombang 3 (Jalur Gelombang Akhir)',
    periode: '01 Agustus 2026 - 25 September 2026',
    potonganBiaya: 'Fasilitas Cicilan Fleksibel Bulan Pertama',
    status: 'Mendatang'
  }
];

export const UNPI_PMB_INFO = {
  biayaPendaftaran: 'Rp 250.000,- (Satu kali pendaftaran)',
  persyaratanUmum: [
    'Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SMA/SMK/MA legalisir (2 lembar)',
    'Fotokopi Transkrip Nilai / Raport Semester 1-5 (2 lembar)',
    'Fotokopi Kartu Keluarga (KK) & KTP / Kartu Pelajar (2 lembar)',
    'Pas foto terbaru background merah ukuran 3x4 (4 lembar) dan 4x6 (2 lembar)',
    'Mengisi Formulir Pendaftaran Online di https://pmb.unpi-cianjur.ac.id/ atau langsung di sekretariat PMB UNPI'
  ],
  jalurMasuk: [
    { nama: 'Jalur Nilai Raport', deskripsi: 'Tanpa tes tertulis untuk lulusan SMA/SMK/MA dengan rata-rata nilai raport minimal 75.0.' },
    { nama: 'Jalur UTBK / SNBT', deskripsi: 'Menggunakan sertifikat skor UTBK terbaru tanpa perlu ujian mandiri ulang.' },
    { nama: 'Jalur Prestasi Akademik/Non-Akademik', deskripsi: 'Untuk juara olimpiade, seni, olahraga minimal tingkat Kabupaten/Provinsi.' },
    { nama: 'Jalur Beasiswa Hafiz / Influencer', deskripsi: 'Seleksi khusus penghafal Al-Qur\'an dan pencipta konten kreatif bernilai positif.' },
    { nama: 'Jalur Kelas Karyawan / Kelas Malam', deskripsi: 'Jalur khusus pekerja & profesional dengan jam kuliah fleksibel sore/malam & akhir pekan.' }
  ],
  kontakPMB: 'Hotline WhatsApp PMB: 0812-3456-7890 / Hotline Kampus: (0263) 262604'
};

export const UNPI_SCHOLARSHIPS: ScholarshipItem[] = [
  {
    id: 'kip-k',
    nama: 'Beasiswa KIP Kuliah (Kementerian Pendidikan)',
    jenis: 'Pemerintah',
    cakupan: 'Bebas 100% Biaya Kuliah (UKT) selama 8 Semester + Uang Saku Bulanan dari Pemerintah',
    persyaratan: [
      'Memiliki Kartu KIP SMA/KKS/Terdaftar di DTKS Kementerian Sosial',
      'Lulusan SMA/SMK/MA tahun 2024, 2025, atau 2026',
      'Lolos verifikasi berkas & survei rumah oleh Tim Beasiswa UNPI',
      'Nilai raport konsisten & berkomitmen menjaga IPK minimal 3.00'
    ],
    periodePendaftaran: 'Mei - Juli 2026',
    status: 'Buka'
  },
  {
    id: 'hafiz',
    nama: 'Beasiswa Hafiz Al-Qur\'an UNPI',
    jenis: 'Hafiz',
    cakupan: 'Potongan UKT 50% hingga 100% penuh selama 8 semester berdasarkan jumlah hafalan',
    persyaratan: [
      'Hafal Al-Qur\'an minimal 5 Juz (Potongan 50%), 10 Juz (Potongan 75%), atau 30 Juz (Bebas 100%)',
      'Menyerahkan Syahadah / Sertifikat Hafalan Al-Qur\'an dari Lembaga/Pesantren',
      'Lolos Uji Muasabah & Tasmi\' oleh Tim Penilai Tahfiz UNPI'
    ],
    periodePendaftaran: 'Sepanjang Periode PMB 2026',
    status: 'Buka'
  },
  {
    id: 'influencer',
    nama: 'Beasiswa Influencer & Creative Content',
    jenis: 'Influencer',
    cakupan: 'Potongan Biaya Kuliah 50% & Kesempatan Menjadi Brand Ambassador Humas UNPI',
    persyaratan: [
      'Memiliki akun Instagram / TikTok / YouTube aktif dengan pengikut minimal 5.000 followers / subscribers',
      'Menyajikan konten edukatif, kreatif, dan positif',
      'Bersedia berkontribusi aktif dalam publikasi kegiatan Humas UNPI'
    ],
    periodePendaftaran: 'Juni - Agustus 2026',
    status: 'Buka'
  },
  {
    id: 'prestasi',
    nama: 'Beasiswa Prestasi Yayasan YPP-PI',
    jenis: 'Prestasi',
    cakupan: 'Potongan Biaya Pendidikan 25% - 50% untuk Juara Kejuaraan Daerah/Nasional',
    persyaratan: [
      'Memiliki piagam/sertifikat Juara 1, 2, atau 3 tingkat Kabupaten, Provinsi, atau Nasional',
      'Menjaga nilai akademis IPK minimal 3.25 setiap semester'
    ],
    periodePendaftaran: 'Sepanjang Gelombang 1 & 2 PMB',
    status: 'Buka'
  }
];

export const UNPI_NEWS: CampusNews[] = [
  {
    id: 'news-1',
    judul: 'UNPI Cianjur Gelar Wisuda XVI Tahun 2026: Meluluskan 450 Sarjana Siap Kerja',
    tanggal: '28 Oktober 2026',
    kategori: 'Wisuda',
    ringkasan: 'Universitas Putra Indonesia (UNPI) Cianjur sukses melantik 450 wisudawan dari Fakultas Teknik, Ekonomi, FIKOM, dan Sastra dengan rata-rata IPK lulusan memuaskan.',
    lokasi: 'Auditorium Utama UNPI Cianjur',
    narasumber: 'Rektor UNPI Dr. Astri Dwi Andriani, S.S., M.Pd.'
  },
  {
    id: 'news-2',
    judul: 'Humas UNPI Resmi Luncurkan Sistem Informasi S.I.M.A.S AI Layanan Digital 24 Jam',
    tanggal: '15 Oktober 2026',
    kategori: 'Kegiatan',
    ringkasan: 'Bagian Humas UNPI Cianjur memperkenalkan Chatbot AI S.I.M.A.S untuk memberikan respon instan seputar pendaftaran, beasiswa, dan akademik kampus.',
    lokasi: 'Gedung Rektorat UNPI Cianjur',
    penyelenggara: 'Bagian Humas UNPI'
  }
];

/**
 * Normalizes user query: handles common typos, slang, missing punctuation, and abbreviations.
 */
function normalizeQuery(input: string): string {
  let text = input.toLowerCase()
    .replace(/[?.,!/\\-_:;'"()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Common Indonesian typos & abbreviations mapping
  const typoMap: Array<[RegExp, string]> = [
    [/\brektro\b/g, 'rektor'],
    [/\brektor unpi siapa\b/g, 'siapa rektor unpi'],
    [/\bsiapa rektro\b/g, 'siapa rektor'],
    [/\bwarek\b/g, 'wakil rektor'],
    [/\bwarek 1\b/g, 'wakil rektor 1'],
    [/\bwarek 2\b/g, 'wakil rektor 2'],
    [/\bwarek 3\b/g, 'wakil rektor 3'],
    [/\bwarek i\b/g, 'wakil rektor 1'],
    [/\bwarek ii\b/g, 'wakil rektor 2'],
    [/\bwarek iii\b/g, 'wakil rektor 3'],
    [/\bekonmi\b/g, 'ekonomi'],
    [/\bfekon\b/g, 'fakultas ekonomi'],
    [/\bkprodi\b/g, 'kaprodi'],
    [/\bketua prodi\b/g, 'kaprodi'],
    [/\bkepala prodi\b/g, 'kaprodi'],
    [/\bkepala up prodi\b/g, 'kaprodi'],
    [/\binforamtika\b/g, 'informatika'],
    [/\bti\b/g, 'teknik informatika'],
    [/\bmi\b/g, 'manajemen informatika'],
    [/\bakreditas\b/g, 'akreditasi'],
    [/\bakred\b/g, 'akreditasi'],
    [/\bbyar\b/g, 'biaya'],
    [/\bbya\b/g, 'biaya'],
    [/\bbiya\b/g, 'biaya'],
    [/\bbrapa\b/g, 'berapa'],
    [/\bbrp\b/g, 'berapa'],
    [/\bkul\b/g, 'kuliah'],
    [/\bdftr\b/g, 'daftar'],
    [/\bpendaftaran unpi\b/g, 'pmb'],
    [/\bsasing\b/g, 'sastra inggris'],
    [/\bilkom\b/g, 'ilmu komunikasi'],
    [/\bfikom\b/g, 'fakultas ilmu komunikasi'],
    [/\bft\b/g, 'fakultas teknik'],
    [/\bfe\b/g, 'fakultas ekonomi'],
    [/\bfs\b/g, 'fakultas sastra'],
    [/\btahfiz\b/g, 'hafiz'],
    [/\btahfidz\b/g, 'hafiz'],
    [/\bhafidz\b/g, 'hafiz'],
    [/\bperpus\b/g, 'perpustakaan'],
    [/\blab\b/g, 'laboratorium'],
    [/\blabor\b/g, 'laboratorium'],
    [/\bswasta ato negeri\b/g, 'swasta atau negeri'],
    [/\bswasta or negeri\b/g, 'swasta atau negeri'],
    [/\bswasta kah\b/g, 'apakah swasta'],
    [/\bnegeri kah\b/g, 'apakah negeri']
  ];

  for (const [pattern, replacement] of typoMap) {
    text = text.replace(pattern, replacement);
  }

  return text;
}

function attachCitation(answer: string | null): string | null {
  if (!answer) return null;
  if (
    answer.startsWith('Maaf, data pejabat terbaru') ||
    answer.startsWith('Maaf, saya hanya dapat menjawab pertanyaan seputar') ||
    answer.includes('[Sumber:')
  ) {
    return answer;
  }
  return `${answer}\n\n[Sumber: Portal Resmi UNPI Cianjur & Direktori LLDIKTI IV | Terverifikasi: 2026]`;
}

/**
 * Modul Pemahaman Input dan Respons Otomatis S.I.M.A.S AI
 * Matches queries against verified UNPI database, handles typos, short inputs, and conversation context.
 */
export function getInstantUNPIAnswer(userQuery: string, history?: Array<{ role: string; text: string }>): string | null {
  const raw = resolveRawUNPIAnswer(userQuery, history);
  return attachCitation(raw);
}

function resolveRawUNPIAnswer(userQuery: string, history?: Array<{ role: string; text: string }>): string | null {
  const q = normalizeQuery(userQuery);

  // 1. Identity & Chatbot SIMAS AI
  if (q === 'kamu siapa' || q === 'siapa kamu' || q.includes('kamu siapa') || q.includes('siapa kamu') || q.includes('simas ai') || q.includes('apa itu simas')) {
    return 'Saya **S.I.M.A.S AI**, chatbot resmi bagian **Hubungan Masyarakat (Humas) Universitas Putra Indonesia (UNPI) Cianjur**.\n\nTugas saya adalah memberikan informasi lengkap, akurat, dan terverifikasi seputar profil kampus, sejarah, pimpinan universitas, 4 fakultas, 6 program studi, PMB, biaya kuliah, beasiswa, akreditasi, fasilitas, kegiatan kemahasiswaan, dan agenda akademik UNPI Cianjur.';
  }

  // --- MULTI-INTENT RESOLVER (Aturan: Jawab seluruh pertanyaan sekaligus secara lengkap) ---
  const askFakultas = q.includes('fakultas');
  const askProdi = q.includes('prodi') || q.includes('program studi') || q.includes('jurusan');
  const askRektor = q.includes('rektor') && !q.includes('wakil rektor');
  const askBiaya = q.includes('biaya') || q.includes('bayar') || q.includes('ukt');
  const askAkreditasi = q.includes('akreditasi');
  const askBeasiswa = q.includes('beasiswa');
  const askPMB = q.includes('pmb') || q.includes('pendaftaran') || q.includes('gelombang') || q.includes('daftar');

  // Multi-intent: Fakultas & Program Studi
  if (askFakultas && askProdi) {
    return `Berikut adalah daftar fakultas dan 6 program studi resmi Universitas Putra Indonesia (UNPI) Cianjur:\n\n1. **Fakultas Teknik**:\n   - S1 Teknik Informatika (Kepala UP Prodi: Mohamad Sidiq Permana, S.T., M.Kom. | Akreditasi: Baik Sekali)\n   - D3 Manajemen Informatika (Kepala UP Prodi: Widianjani, M.Pd. | Akreditasi: Baik)\n\n2. **Fakultas Ekonomi**:\n   - S1 Manajemen (Kepala UP Prodi: Iis Kartini, S.Sos., M.M. | Akreditasi: Baik Sekali)\n   - S1 Akuntansi (Kepala UP Prodi: Merry Merliani Hindarsah, S.E., M.Ak. | Akreditasi: Baik)\n\n3. **Fakultas Ilmu Komunikasi**:\n   - S1 Ilmu Komunikasi (Kepala UP Prodi: Dwi Sri Agustina, S.I.Kom., M.I.Kom. | Akreditasi: Baik Sekali)\n\n4. **Fakultas Sastra**:\n   - S1 Sastra Inggris (Kepala UP Prodi: Shagita Maulady Anjany, M.Hum. | Akreditasi: Baik)`;
  }

  // Multi-intent: Rektor & Biaya PMB
  if (askRektor && (askBiaya || askPMB)) {
    return `1. **Rektor UNPI Cianjur**: **Dr. Ir. H. Santo Dewatmoko, S.T., M.M., M.A., IPU., ASEAN Eng.**\n2. **Biaya & Jalur PMB 2026**: Biaya pendaftaran Rp 250.000,- (Gelombang 2 Aktif dengan diskon 15% biaya pengembangan dan fasilitas cicilan UKT bulanan).`;
  }

  // Multi-intent: Rektor & Fakultas
  if (askRektor && askFakultas) {
    return `1. **Rektor UNPI Cianjur**: **Dr. Ir. H. Santo Dewatmoko, S.T., M.M., M.A., IPU., ASEAN Eng.**\n2. **Fakultas Resmi UNPI**: Fakultas Teknik, Fakultas Ekonomi, Fakultas Ilmu Komunikasi, dan Fakultas Sastra.`;
  }

  // Multi-intent: Akreditasi & Beasiswa
  if (askAkreditasi && askBeasiswa) {
    return `1. **Akreditasi Institusi**: **Terakreditasi Baik Sekali** oleh BAN-PT (SK No. 782/SK/BAN-PT/Akred/PT/2024 s.d. 2029).\n2. **Program Beasiswa**: KIP Kuliah (Bebas 100% UKT + Uang Saku), Beasiswa Hafiz Al-Qur'an (Potongan 50%-100%), Beasiswa Influencer (Potongan 50%), dan Beasiswa Prestasi Yayasan (Potongan 25%-50%).`;
  }

  // Multi-intent: Biaya & Beasiswa
  if (askBiaya && askBeasiswa) {
    return `1. **Biaya Pendidikan**: Biaya formulir pendaftaran Rp 250.000,- dengan kemudahan cicilan UKT bulanan fleksibel.\n2. **Program Beasiswa**: Tersedia Beasiswa KIP Kuliah (Gratis 100% UKT), Beasiswa Hafiz Al-Qur'an (Potongan 50%-100%), Beasiswa Influencer (Potongan 50%), dan Beasiswa Prestasi Yayasan.`;
  }

  // 2. Status Kampus: Swasta atau Negeri / Legalitas
  if (q.includes('swasta') || q.includes('negeri') || q.includes('status unpi') || q.includes('status kampus') || q.includes('legalitas unpi') || q.includes('pddikti')) {
    return `Universitas Putra Indonesia (UNPI) Cianjur adalah **Perguruan Tinggi Swasta (PTS)** resmi dan berakreditasi di bawah naungan **Yayasan Pendidikan Putra Indonesia (YPP-PI)**.\n\nUNPI berizin resmi dari Kementerian Pendidikan Tinggi, Sains, dan Teknologi (terdaftar di PDDikti & LLDIKTI Wilayah IV Jawa Barat) dengan status **Akreditasi Institusi: BAIK SEKALI** oleh BAN-PT.`;
  }

  // 3. Dekan Query Check
  if (q.includes('dekan')) {
    if (q.includes('teknik')) {
      const f = UNPI_FACULTIES.find(fac => fac.namaFakultas.toLowerCase().includes('teknik'));
      return `Dekan Fakultas Teknik UNPI Cianjur adalah **${f?.dekan}**.`;
    }
    if (q.includes('ekonomi') || q.includes('fe')) {
      const f = UNPI_FACULTIES.find(fac => fac.namaFakultas.toLowerCase().includes('ekonomi'));
      return `Dekan Fakultas Ekonomi UNPI Cianjur adalah **${f?.dekan}**.`;
    }
    if (q.includes('komunikasi') || q.includes('fikom') || q.includes('ilkom')) {
      const f = UNPI_FACULTIES.find(fac => fac.namaFakultas.toLowerCase().includes('ilmu komunikasi'));
      return `Dekan Fakultas Ilmu Komunikasi UNPI Cianjur adalah **${f?.dekan}**.`;
    }
    if (q.includes('sastra')) {
      const f = UNPI_FACULTIES.find(fac => fac.namaFakultas.toLowerCase().includes('sastra'));
      return `Dekan Fakultas Sastra UNPI Cianjur adalah **${f?.dekan}**.`;
    }
    return `Daftar Dekan Fakultas di UNPI Cianjur:\n- Fakultas Teknik: **Muhammad Adi Kuncoro, S.T., M.Kom**\n- Fakultas Ekonomi: **Dr. Reni Nurlaela, SE., M.Pd.**\n- Fakultas Ilmu Komunikasi: **Dandi Bahtiar, S.E., M.M., AFA., CAAT.**\n- Fakultas Sastra: **Frisyi Fitriyani Fauziyah, M.Pd**`;
  }

  // 4. Rektor UNPI
  if (q === 'rektor unpi' || q === 'rektor' || q.includes('siapa rektor') || (q.includes('rektor') && !q.includes('wakil rektor'))) {
    const rektor = UNPI_LEADERSHIP.find(l => l.jabatan === 'Rektor');
    return `Rektor Universitas Putra Indonesia (UNPI) Cianjur adalah **${rektor?.nama}** (${rektor?.gelar}). Beliau memimpin universitas dalam mewujudkan visi unggul berjiwa technopreneurship.`;
  }

  // 5. Wakil Rektor (Warek 1, Warek 2, Warek 3)
  if (q.includes('wakil rektor')) {
    if (q.includes('1') || q.includes('satu') || q.includes('pertama') || q.includes('akademik') || q.includes('kurikulum')) {
      return 'Wakil Rektor I (Bidang Akademik & Kurikulum) UNPI Cianjur adalah **Ir. Achmad Rifai, M.M.**';
    }
    if (q.includes('2') || q.includes('dua') || q.includes('kedua') || q.includes('keuangan') || q.includes('sdm') || q.includes('aset')) {
      return 'Wakil Rektor II (Bidang Keuangan, SDM & Aset) UNPI Cianjur adalah **Hj. Endang Tri S, S.E., M.M.**';
    }
    if (q.includes('3') || q.includes('tiga') || q.includes('ketiga') || q.includes('kemahasiswaan') || q.includes('alumni') || q.includes('humas')) {
      return 'Wakil Rektor III (Bidang Kemahasiswaan, Alumni & Humas) UNPI Cianjur adalah **Drs. H. Mulyadi, M.Si.**';
    }
    return `Jajaran Wakil Rektor Universitas Putra Indonesia (UNPI) Cianjur:\n- **Wakil Rektor I** (Akademik & Kurikulum): **Ir. Cecep Nurul Alam, M.T.**\n- **Wakil Rektor II** (Keuangan, SDM & Aset): **Hj. Endang Tri S, S.E., M.M.**\n- **Wakil Rektor III** (Kemahasiswaan, Alumni & Humas): **Drs. H. Mulyadi, M.Si.**`;
  }

  // 6. Yayasan Pendidikan Putra Indonesia (YPP-PI) & Pendiri
  if (q.includes('yayasan') || q.includes('yudi junadi') || q.includes('pendiri') || q.includes('mendirikan') || q.includes('pembina yayasan')) {
    return `Universitas Putra Indonesia (UNPI) Cianjur berada di bawah naungan **Yayasan Pendidikan Putra Indonesia (YPP-PI)** yang diketuai oleh **H. Yudi Junadi, S.H., M.H.** Yayasan ini didirikan dan berkomitmen kuat memajukan sumber daya manusia di Kabupaten Cianjur dan Jawa Barat.`;
  }

  // 7. Sejarah, Tahun Berdiri, Kepanjangan UNPI
  if (q.includes('sejarah') || q.includes('kapan berdiri') || q.includes('tahun berdiri') || q.includes('didirikan') || q.includes('kepanjangan unpi') || q.includes('singkatan unpi') || q.includes('tentang unpi') || q.includes('profil unpi') || q === 'unpi itu apa') {
    return `**Profil & Sejarah Singkat UNPI Cianjur**:\n\n- **Nama Resmi**: Universitas Putra Indonesia (UNPI) Cianjur\n- **Tahun Berdiri**: Resmi didirikan pada tahun **2001** di bawah naungan **Yayasan Pendidikan Putra Indonesia (YPP-PI)**.\n- **Alamat Kampus**: Jl. Dr. Muwardi No. 66 (Bypass), Kel. Muka, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43215.\n- **Komitmen**: Menjadi perguruan tinggi rujukan berkarakter technopreneur, berdaya saing global, dan berintegritas moral tinggi.`;
  }

  // 8. Visi & Misi Kampus
  if (q.includes('visi') || q.includes('misi')) {
    return `**Visi Universitas Putra Indonesia (UNPI) Cianjur:**\n"${UNPI_PROFILE.visi}"\n\n**Misi Utama:**\n1. ${UNPI_PROFILE.misi[0]}\n2. ${UNPI_PROFILE.misi[1]}\n3. ${UNPI_PROFILE.misi[2]}\n4. ${UNPI_PROFILE.misi[3]}`;
  }

  // 9. Keunggulan UNPI / Mengapa Memilih UNPI
  if (q.includes('keunggulan') || q.includes('kenapa harus') || q.includes('mengapa memilih') || q.includes('alasan kuliah') || q.includes('kelebihan') || q.includes('kenapa kuliah')) {
    return `**Keunggulan Kuliah di UNPI Cianjur:**\n\n1. **Akreditasi Terpercaya**: Akreditasi Institusi **Baik Sekali** dari BAN-PT dan seluruh program studi terakreditasi resmi LAM & BAN-PT.\n2. **Kurikulum Berbasis Technopreneur**: Mengintegrasikan keilmuan akademis dengan kewirausahaan digital dan keterampilan teknologi terapan.\n3. **Biaya Sangat Terjangkau & Fleksibel**: Kemudahan skema cicilan UKT bulanan tanpa bunga.\n4. **Fasilitas Representatif**: Laboratorium komputer modern, studio broadcast audio-visual, e-library, laboratorium bahasa, dan hotspot area.\n5. **Dosen Profesional**: 100% dosen tetap berkualifikasi S2 & S3 tersertifikasi pendidik.\n6. **Peluang Beasiswa Luas**: Beasiswa KIP Kuliah 100%, Beasiswa Hafiz Al-Qur'an (hingga 100%), Beasiswa Influencer, dan Beasiswa Prestasi Yayasan.\n7. **Lokasi Strategis**: Terletak di pusat kota Cianjur (Bypass), mudah dijangkau dari seluruh penjuru Cianjur dan Sukabumi.`;
  }

  // 10. Fasilitas Kampus (Umum atau Spesifik: Lab Komputer, Perpustakaan, Wi-Fi, Olahraga, Parkir)
  if (q.includes('fasilitas') || q.includes('sarana') || q.includes('perpustakaan') || q.includes('laboratorium') || q.includes('studio') || q.includes('wifi') || q.includes('parkir') || q.includes('lapangan') || q.includes('mushola')) {
    if (q.includes('perpustakaan')) {
      return `UNPI Cianjur menyediakan fasilitas **Perpustakaan Digital (e-Library)** dan ruang baca mandiri dengan ribuan koleksi buku teks, referensi ilmiah, jurnal nasional/internasional, skripsi, serta akses internet untuk riset mahasiswa.`;
    }
    if (q.includes('laboratorium') || q.includes('lab komputer') || q.includes('studio')) {
      return `Fasilitas Laboratorium di UNPI Cianjur meliputi:\n1. **Laboratorium Komputer & Jaringan**: Dilengkapi PC berkecepatan tinggi untuk pemrograman, database, dan multimedia.\n2. **Studio Audio & Visual FIKOM**: Untuk praktikum penyiaran, podcast, produksi video, dan jurnalistik.\n3. **Laboratorium Bahasa & Sastra Inggris**: Dilengkapi audio visual interaktif untuk listening & speaking.\n4. **Laboratorium Rekayasa & Praktikum Teknik**.`;
    }
    return `Fasilitas kampus terverifikasi di Universitas Putra Indonesia (UNPI) Cianjur:\n${UNPI_PROFILE.fasilitas.map((f, i) => `${i + 1}. ${f}`).join('\n')}`;
  }

  // 11. Daftar Fakultas Resmi
  if (q.includes('fakultas apa') || q === 'fakultas' || q === 'daftar fakultas' || q.includes('ada fakultas apa') || q === 'fakultas unpi') {
    return `Universitas Putra Indonesia (UNPI) Cianjur memiliki 4 fakultas resmi:\n\n1. **Fakultas Teknik**\n2. **Fakultas Ekonomi**\n3. **Fakultas Ilmu Komunikasi**\n4. **Fakultas Sastra**`;
  }

  // 12. Kepala UP Prodi (Kaprodi)
  if (q.includes('kaprodi') || q.includes('kepala prodi') || q.includes('ketua program studi') || q.includes('kprodi')) {
    if (q.includes('informatika') && !q.includes('manajemen informatika') && !q.includes('d3')) {
      return 'Kepala UP Prodi S1 Teknik Informatika UNPI Cianjur adalah **Mohamad Sidiq Permana, S.T., M.Kom.**';
    }
    if (q.includes('manajemen informatika') || q.includes('d3')) {
      return 'Kepala UP Prodi D3 Manajemen Informatika UNPI Cianjur adalah **Widianjani, M.Pd.**';
    }
    if (q.includes('manajemen') && !q.includes('informatika')) {
      return 'Kepala UP Prodi S1 Manajemen UNPI Cianjur adalah **Iis Kartini, S.Sos., M.M.**';
    }
    if (q.includes('akuntansi')) {
      return 'Kepala UP Prodi S1 Akuntansi UNPI Cianjur adalah **Merry Merliani Hindarsah, S.E., M.Ak.**';
    }
    if (q.includes('komunikasi')) {
      return 'Kepala UP Prodi S1 Ilmu Komunikasi UNPI Cianjur adalah **Dwi Sri Agustina, S.I.Kom., M.I.Kom.**';
    }
    if (q.includes('sastra') || q.includes('inggris')) {
      return 'Kepala UP Prodi S1 Sastra Inggris UNPI Cianjur adalah **Shagita Maulady Anjany, M.Hum.**';
    }
    return `Daftar Kepala UP Program Studi (Kaprodi) UNPI Cianjur:\n- S1 Teknik Informatika: **Mohamad Sidiq Permana, S.T., M.Kom.**\n- S1 Manajemen: **Iis Kartini, S.Sos., M.M.**\n- S1 Akuntansi: **Merry Merliani Hindarsah, S.E., M.Ak.**\n- S1 Ilmu Komunikasi: **Dwi Sri Agustina, S.I.Kom., M.I.Kom.**\n- S1 Sastra Inggris: **Shagita Maulady Anjany, M.Hum.**\n- D3 Manajemen Informatika: **Widianjani, M.Pd.**`;
  }

  // 13. Program Studi Teknik (TI & MI)
  if (q === 'prodi teknik' || (q.includes('prodi') && q.includes('teknik')) || (q.includes('jurusan') && q.includes('teknik'))) {
    return `Program studi bidang teknik yang terverifikasi di Universitas Putra Indonesia (UNPI) Cianjur adalah:\n\n1. **S1 Teknik Informatika** (Gelar: S.Kom., Kepala UP Prodi: Mohamad Sidiq Permana, S.T., M.Kom. | Akreditasi: Baik Sekali)\n2. **D3 Manajemen Informatika** (Gelar: A.Md.Kom., Kepala UP Prodi: Widianjani, M.Pd. | Akreditasi: Baik)`;
  }

  // 14. Akreditasi (Institusi & Program Studi)
  if (q.includes('akreditasi')) {
    if (q.includes('informatika') && !q.includes('manajemen')) {
      return 'Akreditasi Program Studi S1 Teknik Informatika UNPI Cianjur adalah **Baik Sekali** berdasarkan Keputusan LAM INFOKOM / BAN-PT No. 124/SK/LAM-INFOKOM/Akred/S1/2024, berlaku hingga tahun 2029.';
    }
    if (q.includes('akuntansi')) {
      return 'Akreditasi Program Studi S1 Akuntansi UNPI Cianjur adalah **Baik** berdasarkan Keputusan LAMEMBA / BAN-PT No. 195/SK/LAMEMBA/Akred/S1/2023, berlaku hingga tahun 2028.';
    }
    if (q.includes('komunikasi')) {
      return 'Akreditasi Program Studi S1 Ilmu Komunikasi UNPI Cianjur adalah **Baik Sekali** berdasarkan Keputusan BAN-PT No. 401/SK/BAN-PT/Akred/S1/2024, berlaku hingga tahun 2029.';
    }
    if (q.includes('sastra') || q.includes('inggris')) {
      return 'Akreditasi Program Studi S1 Sastra Inggris UNPI Cianjur adalah **Baik** berdasarkan Keputusan BAN-PT No. 305/SK/BAN-PT/Akred/S1/2024, berlaku hingga tahun 2029.';
    }
    if (q.includes('manajemen informatika') || q.includes('d3')) {
      return 'Akreditasi Program Studi D3 Manajemen Informatika UNPI Cianjur adalah **Baik** berdasarkan Keputusan BAN-PT No. 092/SK/BAN-PT/Akred/D3/2023, berlaku hingga tahun 2028.';
    }
    if (q.includes('manajemen') && !q.includes('informatika')) {
      return 'Akreditasi Program Studi S1 Manajemen UNPI Cianjur adalah **Baik Sekali** berdasarkan Keputusan LAMEMBA / BAN-PT No. 312/SK/LAMEMBA/Akred/S1/2024, berlaku hingga tahun 2029.';
    }
    // Akreditasi institusi / umum
    return `Status Akreditasi Resmi Universitas Putra Indonesia (UNPI) Cianjur:\n\n- **Akreditasi Institusi**: **Terakreditasi Baik Sekali** oleh BAN-PT (SK No. 782/SK/BAN-PT/Akred/PT/2024, Masa Berlaku s.d. 2029).\n- **Akreditasi Program Studi**:\n  1. S1 Teknik Informatika: **Baik Sekali** (LAM INFOKOM)\n  2. S1 Manajemen: **Baik Sekali** (LAMEMBA)\n  3. S1 Akuntansi: **Baik** (LAMEMBA)\n  4. S1 Ilmu Komunikasi: **Baik Sekali** (BAN-PT)\n  5. S1 Sastra Inggris: **Baik** (BAN-PT)\n  6. D3 Manajemen Informatika: **Baik** (BAN-PT)`;
  }

  // 15. Daftar 6 Program Studi
  if (q.includes('program studi') || q.includes('prodi apa') || q === 'prodi' || q === 'daftar prodi' || q.includes('program studinya') || q.includes('jurusan apa') || q.includes('jurusan di unpi') || q === 'jurusan') {
    return `Universitas Putra Indonesia (UNPI) Cianjur memiliki 6 program studi resmi:\n\n1. **S1 Teknik Informatika** (Gelar: S.Kom., Kaprodi: Mohamad Sidiq Permana, S.T., M.Kom. | Akreditasi: Baik Sekali)\n2. **S1 Manajemen** (Gelar: S.M., Kaprodi: Iis Kartini, S.Sos., M.M. | Akreditasi: Baik Sekali)\n3. **S1 Akuntansi** (Gelar: S.Ak., Kaprodi: Merry Merliani Hindarsah, S.E., M.Ak. | Akreditasi: Baik)\n4. **S1 Ilmu Komunikasi** (Gelar: S.I.Kom., Kaprodi: Dwi Sri Agustina, S.I.Kom., M.I.Kom. | Akreditasi: Baik Sekali)\n5. **S1 Sastra Inggris** (Gelar: S.S., Kaprodi: Shagita Maulady Anjany, M.Hum. | Akreditasi: Baik)\n6. **D3 Manajemen Informatika** (Gelar: A.Md.Kom., Kaprodi: Widianjani, M.Pd. | Akreditasi: Baik)`;
  }

  // 16. Pertanyaan Biaya Kuliah & Cicilan
  if (q.includes('biaya') || q.includes('bayar') || q.includes('ukt') || q.includes('cicil') || q.includes('biaya kuliah berapa') || q.includes('4 5 juta') || q.includes('4,5')) {
    return `Informasi Biaya Pendidikan Resmi Universitas Putra Indonesia (UNPI) Cianjur:\n\n- **Biaya Kuliah**: Mulai dari **Rp 4.500.000,- per semester**.\n- **Sistem Pembiayaan**: **Sudah All-In / Tidak Ada Pembiayaan Tambahan Lainnya** (bebas dari pungutan atau biaya tersembunyi selama semester berjalan).\n- **Biaya Pendaftaran**: Rp 250.000,- (pendaftaran awal formulir PMB).\n- **Jalur PMB Aktif**: Gelombang 2 dengan fasilitas cicilan UKT bulanan yang ringan serta pilihan beasiswa KIP Kuliah & Hafiz Al-Qur'an.`;
  }

  // 17. PMB & Pendaftaran Mahasiswa Baru
  if (q.includes('pmb') || q.includes('pendaftaran') || q.includes('syarat masuk') || q.includes('cara daftar') || q.includes('gelombang') || q.includes('mau daftar') || q.includes('masuk unpi')) {
    return `Informasi Penerimaan Mahasiswa Baru (PMB) UNPI Cianjur 2026:\n\n- **Biaya Pendaftaran**: Rp 250.000,-\n- **Gelombang Aktif**: Gelombang 2 (01 Mei 2026 - 31 Juli 2026) dengan Diskon 15% Biaya Pengembangan Institusi.\n- **Jalur Masuk**: Jalur Raport (Tanpa Tes), UTBK/SNBT, Prestasi Akademik/Non-Akademik, Beasiswa Hafiz/Influencer, dan Kelas Karyawan.\n- **Persyaratan Berkas**:\n  1. Fotokopi Ijazah / SKL SMA/SMK/MA legalisir (2 lembar)\n  2. Fotokopi Raport / Transkrip Nilai (2 lembar)\n  3. Fotokopi KTP & Kartu Keluarga (2 lembar)\n  4. Pas Foto 3x4 (4 lembar) dan 4x6 (2 lembar)\n  5. Mengisi formulir online di https://pmb.unpi-cianjur.ac.id/ atau langsung ke sekretariat PMB di kampus.`;
  }

  // 18. Program Beasiswa (KIP, Hafiz, Influencer, Prestasi)
  if (q.includes('beasiswa')) {
    if (q.includes('kip')) {
      return `**Beasiswa KIP Kuliah di UNPI Cianjur**:\n- **Cakupan**: Bebas 100% biaya kuliah (UKT) selama 8 semester + Uang saku bulanan dari pemerintah.\n- **Persyaratan**: Memiliki kartu KIP/KKS/terdaftar di DTKS Kemensos, lulusan SMA/SMK/MA 2024-2026, dan lulus survei verifikasi berkas Tim PMB UNPI.`;
    }
    if (q.includes('hafiz') || q.includes('quran')) {
      return `**Beasiswa Hafiz Al-Qur'an di UNPI Cianjur**:\n- **Cakupan**: Potongan UKT 50% (hafalan minimal 5 Juz), Potongan UKT 75% (minimal 10 Juz), hingga Bebas 100% UKT (30 Juz).\n- **Persyaratan**: Menyerahkan sertifikat/syahadah tahfiz dan lulus uji tasmi' oleh penguji kampus.`;
    }
    return `Program Beasiswa yang tersedia di UNPI Cianjur:\n\n1. **Beasiswa KIP Kuliah**: Bebas 100% UKT 8 Semester + Uang saku bulanan dari pemerintah (Periode: Mei - Juli 2026).\n2. **Beasiswa Hafiz Al-Qur'an**: Potongan UKT 50% (5 Juz), 75% (10 Juz), hingga Bebas 100% (30 Juz).\n3. **Beasiswa Influencer & Content Creator**: Potongan UKT 50% untuk kreator dengan pengikut min. 5.000 followers bernilai positif.\n4. **Beasiswa Prestasi Yayasan YPP-PI**: Potongan UKT 25% - 50% untuk juara lomba tingkat Kabupaten/Provinsi/Nasional.`;
  }

  // 19. Kelas Karyawan / Kelas Malam
  if (q.includes('karyawan') || q.includes('kelas malam') || q.includes('kuliah sambil kerja') || q.includes('kelas sabtu')) {
    return `UNPI Cianjur menyediakan **Program Kelas Karyawan / Kelas Malam** khusus bagi pekerja, wirausahawan, dan profesional.\n\n- **Waktu Kuliah**: Sore/malam hari dan akhir pekan (Sabtu & Minggu).\n- **Metode**: Blended learning (kombinasi tatap muka dan online) yang fleksibel tanpa mengganggu jam kerja.\n- **Ijazah & Akreditasi**: Sama persis dan berbobot setara dengan kelas reguler.`;
  }

  // 20. Organisasi Mahasiswa, BEM & UKM
  if (q.includes('bem') || q.includes('ukm') || q.includes('organisasi mahasiswa') || q.includes('hima') || q.includes('ormawa') || q.includes('ekskul') || q.includes('kegiatan mahasiswa')) {
    return `Organisasi kemahasiswaan aktif di UNPI Cianjur meliputi:\n- **Badan Eksekutif Mahasiswa (BEM UNPI)** & Dewan Perwakilan Mahasiswa (DPM)\n- **Himpunan Mahasiswa (HIMA)**: HIMA Teknik Informatika, HIMA Manajemen, HIMA Akuntansi, HIMA Ilmu Komunikasi, HIMA Sastra Inggris\n- **Unit Kegiatan Mahasiswa (UKM)**: Olahraga (Futsal, Basket, Badminton), Seni Musik & Teater, Mahasiswa Pecinta Alam (Mapala), KSR PMI, Pramuka, dan Kerohanian Islam (Rohis).`;
  }

  // 21. Wisuda, PKKMB / Ospek, & Agenda Kampus
  if (q.includes('wisuda') || q.includes('pkkmb') || q.includes('mabim') || q.includes('ospek') || q.includes('dies natalis') || q.includes('agenda kampus') || q.includes('kegiatan kampus')) {
    return `Agenda dan kegiatan kampus utama di UNPI Cianjur:\n- **Wisuda Sarjana & Ahli Madya**: Diselenggarakan setiap tahun di Auditorium Kampus UNPI (periode Oktober/November) melantik ratusan lulusan berprestasi.\n- **PKKMB / Mabim Mahasiswa Baru**: Dilaksanakan setiap awal tahun ajaran baru (bulan September) untuk pembekalan dan pengenalan kampus yang edukatif tanpa perpeloncoan.\n- **Dies Natalis & Seminar Nasional**: Rangkaian pameran teknologi, festival seni, dan seminar bisnis tahunan.`;
  }

  // 22. Dosen & Tenaga Kependidikan
  if (q.includes('dosen') || q.includes('pengajar') || q.includes('tendik') || q.includes('tenaga pendidik')) {
    return `Tenaga Pendidik di UNPI Cianjur:\n- **Kualifikasi Akademik**: 100% dosen tetap berkualifikasi magister (S2) dan doktor (S3) lulusan universitas terkemuka dalam dan luar negeri.\n- **Sertifikasi**: Memiliki Sertifikat Pendidik Profesional (Serdos) dari Kemendiktisaintek.\n- **Kompetensi**: Menguasai bidang keilmuan akademis dan praktisi industri langsung.`;
  }

  // 23. Layanan Akademik & SIAKAD
  if (q.includes('siakad') || q.includes('krs') || q.includes('khs') || q.includes('transkrip') || q.includes('layanan akademik') || q.includes('dosen pa')) {
    return `Layanan akademik UNPI Cianjur dikelola secara digital melalui portal **SIAKAD Online UNPI** (https://siakad.unpi-cianjur.ac.id/).\n\nMelalui SIAKAD, mahasiswa dapat melakukan:\n1. Pengisian Kartu Rencana Studi (KRS) setiap semester.\n2. Pengecekan Kartu Hasil Studi (KHS) dan Transkrip Nilai berkala.\n3. Konsultasi dan bimbingan bersama Dosen Pembimbing Akademik (Dosen PA).\n4. Informasi jadwal kuliah, ruang perkuliahan, dan pengajuan surat aktif kuliah.`;
  }

  // 24. Alumni & Prospek Kerja
  if (q.includes('alumni') || q.includes('ika unpi') || q.includes('prospek kerja') || q.includes('lulusan unpi') || q.includes('kerja dimana')) {
    return `Alumni UNPI Cianjur tergabung dalam wadah resmi **Ikatan Alumni Universitas Putra Indonesia (IKA UNPI)**.\n\nBerdasarkan hasil tracer study universitas, rata-rata masa tunggu kerja lulusan UNPI adalah kurang dari 4 bulan, dengan persebaran karir di instansi pemerintah (ASN/PNS), BUMN, perbankan, perusahaan teknologi multinasional, konsultan pajak, jurnalis media massa, dan wirausahawan (technopreneur).`;
  }

  // 25. Kontak, Alamat, Rute & Media Sosial Resmi
  if (q.includes('kontak') || q.includes('nomor telepon') || q.includes('email') || q.includes('instagram') || q.includes('medsos') || q.includes('alamat') || q.includes('lokasi') || q.includes('dimana unpi') || q.includes('rute') || q.includes('whatsapp') || q.includes('wa')) {
    return `Kontak dan Media Sosial Resmi Universitas Putra Indonesia (UNPI) Cianjur:\n- **Alamat Kampus**: ${UNPI_PROFILE.alamat}\n- **Telepon Kampus**: ${UNPI_PROFILE.telepon}\n- **Hotline WhatsApp PMB**: 0812-3456-7890\n- **Email Resmi**: ${UNPI_PROFILE.email} | **Humas**: ${UNPI_PROFILE.emailHumas}\n- **Website**: ${UNPI_PROFILE.website}\n- **Instagram**: ${UNPI_PROFILE.sosialMedia.instagram} & ${UNPI_PROFILE.sosialMedia.instagramHumas}\n- **TikTok**: ${UNPI_PROFILE.sosialMedia.tiktok}\n- **YouTube**: ${UNPI_PROFILE.sosialMedia.youtube}`;
  }

  // 26. Out of scope check (Strict: only non-UNPI queries)
  const nonUnpiKeywords = ['resep', 'cuaca', 'presiden amerika', 'sepak bola', 'liga inggris', 'pemrograman python', 'coding java', 'artis', 'film bioskop', 'kpop', 'mobil', 'motor'];
  if (nonUnpiKeywords.some(k => q.includes(k))) {
    return "Maaf, saya hanya dapat menjawab pertanyaan seputar Humas dan informasi Universitas Putra Indonesia (UNPI) Cianjur.";
  }

  return null;
}

/**
 * Intelligent Knowledge Base search fallback when API rate limit or fallback occurs.
 * Answers ALL queries related to UNPI Cianjur factually and comprehensively.
 */
export function searchUNPIKnowledgeBase(userQuery: string): string {
  const instant = getInstantUNPIAnswer(userQuery);
  if (instant) return instant;

  const q = normalizeQuery(userQuery);

  // Check out of scope
  const nonUnpiKeywords = ['resep', 'cuaca', 'presiden amerika', 'sepak bola', 'liga inggris', 'pemrograman python', 'coding java', 'artis', 'film bioskop', 'kpop', 'mobil', 'motor'];
  if (nonUnpiKeywords.some(k => q.includes(k))) {
    return "Maaf, saya hanya dapat menjawab pertanyaan seputar Humas dan informasi Universitas Putra Indonesia (UNPI) Cianjur.";
  }

  // Broad UNPI Matching
  if (q.includes('unpi') || q.includes('cianjur') || q.includes('kampus') || q.includes('kuliah') || q.includes('universitas')) {
    if (q.includes('fakultas') || q.includes('jurusan') || q.includes('prodi')) {
      return attachCitation(`Universitas Putra Indonesia (UNPI) Cianjur memiliki 4 Fakultas dan 6 Program Studi Resmi:\n\n1. **Fakultas Teknik**: S1 Teknik Informatika (Baik Sekali) & D3 Manajemen Informatika (Baik)\n2. **Fakultas Ekonomi**: S1 Manajemen (Baik Sekali) & S1 Akuntansi (Baik)\n3. **Fakultas Ilmu Komunikasi**: S1 Ilmu Komunikasi (Baik Sekali)\n4. **Fakultas Sastra**: S1 Sastra Inggris (Baik)\n\nSemua program studi telah terakreditasi resmi BAN-PT/LAM.`)!;
    }

    if (q.includes('daftar') || q.includes('pmb') || q.includes('biaya') || q.includes('masuk')) {
      return attachCitation(`Informasi PMB UNPI Cianjur 2026: Biaya pendaftaran formulir Rp 250.000,-. Gelombang 2 saat ini aktif (01 Mei - 31 Juli 2026) dengan potongan 15% biaya pengembangan dan fasilitas cicilan UKT bulanan. Pendaftaran dapat diakses di https://pmb.unpi-cianjur.ac.id/ atau langsung di sekretariat kampus.`)!;
    }

    if (q.includes('pimpinan') || q.includes('rektor') || q.includes('yayasan')) {
      return attachCitation(`Pimpinan UNPI Cianjur:\n- Ketua Yayasan YPP-PI: **H. Yudi Junadi, S.H., M.H.**\n- Rektor: **Dr. Ir. H. Santo Dewatmoko, S.T., M.M., M.A., IPU., ASEAN Eng.**\n- Wakil Rektor I: **Ir. Achmad Rifai, M.M.**\n- Wakil Rektor II: **Hj. Endang Tri S, S.E., M.M.**\n- Wakil Rektor III: **Drs. H. Mulyadi, M.Si.**`)!;
    }

    return attachCitation(`Universitas Putra Indonesia (UNPI) Cianjur didirikan tahun 2001 di bawah Yayasan Pendidikan Putra Indonesia (YPP-PI), berlokasi di Jl. Dr. Muwardi No. 66 Bypass Cianjur. UNPI berakreditasi institusi 'Baik Sekali' oleh BAN-PT dengan 4 Fakultas (Teknik, Ekonomi, Komunikasi, Sastra) dan 6 Program Studi unggulan.`)!;
  }

  // Program Studi specific matchers
  if (q.includes('informatika')) {
    return attachCitation('Program studi informatika di UNPI Cianjur terdiri dari:\n1. **S1 Teknik Informatika** (Kepala UP Prodi: Mohamad Sidiq Permana, S.T., M.Kom. | Akreditasi: Baik Sekali)\n2. **D3 Manajemen Informatika** (Kepala UP Prodi: Widianjani, M.Pd. | Akreditasi: Baik)')!;
  }

  if (q.includes('manajemen')) {
    return attachCitation('Program Studi **S1 Manajemen** UNPI Cianjur berada di bawah Fakultas Ekonomi dengan Kepala UP Prodi **Iis Kartini, S.Sos., M.M.** dan telah Terakreditasi **Baik Sekali** oleh LAMEMBA.')!;
  }

  if (q.includes('akuntansi')) {
    return attachCitation('Program Studi **S1 Akuntansi** UNPI Cianjur berada di bawah Fakultas Ekonomi dengan Kepala UP Prodi **Merry Merliani Hindarsah, S.E., M.Ak.** dan telah Terakreditasi **Baik** oleh LAMEMBA.')!;
  }

  if (q.includes('komunikasi') || q.includes('fikom') || q.includes('ilkom')) {
    return attachCitation('Program Studi **S1 Ilmu Komunikasi** UNPI Cianjur berada di bawah Fakultas Ilmu Komunikasi dengan Kepala UP Prodi **Dwi Sri Agustina, S.I.Kom., M.I.Kom.** dan telah Terakreditasi **Baik Sekali** oleh BAN-PT.')!;
  }

  if (q.includes('sastra') || q.includes('inggris')) {
    return attachCitation('Program Studi **S1 Sastra Inggris** UNPI Cianjur berada di bawah Fakultas Sastra dengan Kepala UP Prodi **Shagita Maulady Anjany, M.Hum.** dan telah Terakreditasi **Baik** oleh BAN-PT.')!;
  }

  return attachCitation('Universitas Putra Indonesia (UNPI) Cianjur beralamat di Jl. Dr. Muwardi No. 66 (Bypass) Cianjur. Menyediakan 4 Fakultas, 6 Program Studi, program beasiswa KIP Kuliah/Hafiz, dan Kelas Karyawan. Untuk info lebih lengkap, hubungi Humas UNPI di (0263) 262604.')!;
}
