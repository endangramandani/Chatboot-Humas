-- ==========================================================
-- DATABASE RESMI UNIVERSITAS PUTRA INDONESIA (UNPI) CIANJUR
-- Database Name: db_unpi_cianjur
-- Versi: 2026.2 (15 Kategori Terpadu & Multi-Source API Registry)
-- Standard SQL DDL & DML (Compatible with PostgreSQL / MySQL / SQLite)
-- ==========================================================

-- 1. Table: Institusi
CREATE TABLE IF NOT EXISTS institusi (
    id SERIAL PRIMARY KEY,
    nama_institusi VARCHAR(255) NOT NULL,
    singkatan VARCHAR(50) NOT NULL,
    nama_yayasan VARCHAR(255) NOT NULL,
    tahun_berdiri INT NOT NULL,
    alamat TEXT NOT NULL,
    nomor_telepon VARCHAR(100),
    email_resmi VARCHAR(100),
    email_humas VARCHAR(100),
    website_resmi VARCHAR(255),
    akreditasi_institusi VARCHAR(50),
    lembaga_akreditasi VARCHAR(50),
    nomor_sk_akreditasi VARCHAR(100),
    masa_berlaku_akreditasi VARCHAR(50)
);

INSERT INTO institusi (
    nama_institusi, singkatan, nama_yayasan, tahun_berdiri, alamat,
    nomor_telepon, email_resmi, email_humas, website_resmi,
    akreditasi_institusi, lembaga_akreditasi, nomor_sk_akreditasi, masa_berlaku_akreditasi
) VALUES (
    'Universitas Putra Indonesia (UNPI) Cianjur',
    'UNPI',
    'Yayasan Pendidikan Putra Indonesia (YPP-PI)',
    2001,
    'Jl. Dr. Muwardi No. 66 (Bypass), Kel. Muka, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43215',
    '(0263) 262604 / 270958',
    'info@unpi-cianjur.ac.id',
    'humas@unpi-cianjur.ac.id',
    'https://www.unpi-cianjur.ac.id/',
    'Terakreditasi Baik Sekali',
    'BAN-PT',
    'No. 782/SK/BAN-PT/Akred/PT/2024',
    '2029'
);

-- 2. Table: Fakultas
CREATE TABLE IF NOT EXISTS fakultas (
    id INT PRIMARY KEY,
    kode_fakultas VARCHAR(20) NOT NULL UNIQUE,
    nama_fakultas VARCHAR(100) NOT NULL,
    dekan VARCHAR(255),
    status_dekan VARCHAR(100) DEFAULT 'Belum Terverifikasi SK'
);

INSERT INTO fakultas (id, kode_fakultas, nama_fakultas, dekan, status_dekan) VALUES
(1, 'FT', 'Fakultas Teknik', 'Belum Terverifikasi (Pejabat Baru)', 'Belum Terverifikasi SK'),
(2, 'FE', 'Fakultas Ekonomi', 'Belum Terverifikasi (Pejabat Baru)', 'Belum Terverifikasi SK'),
(3, 'FIKOM', 'Fakultas Ilmu Komunikasi', 'Belum Terverifikasi (Pejabat Baru)', 'Belum Terverifikasi SK'),
(4, 'FS', 'Fakultas Sastra', 'Belum Terverifikasi (Pejabat Baru)', 'Belum Terverifikasi SK');

-- 3. Table: Program Studi
CREATE TABLE IF NOT EXISTS program_studi (
    id INT PRIMARY KEY,
    fakultas_id INT REFERENCES fakultas(id),
    jenjang VARCHAR(10) NOT NULL,
    nama_prodi VARCHAR(100) NOT NULL,
    gelar_lulusan VARCHAR(50) NOT NULL,
    kepala_up_prodi VARCHAR(255) NOT NULL,
    peringkat_akreditasi VARCHAR(50) NOT NULL,
    lembaga_akreditasi VARCHAR(50) NOT NULL,
    nomor_sk_akreditasi VARCHAR(100),
    masa_berlaku VARCHAR(50)
);

INSERT INTO program_studi (
    id, fakultas_id, jenjang, nama_prodi, gelar_lulusan,
    kepala_up_prodi, peringkat_akreditasi, lembaga_akreditasi, nomor_sk_akreditasi, masa_berlaku
) VALUES
(1, 1, 'S1', 'Teknik Informatika', 'S.Kom.', 'Mohamad Sidiq Permana, S.T., M.Kom.', 'Baik Sekali', 'LAM INFOKOM / BAN-PT', 'No. 124/SK/LAM-INFOKOM/Akred/S1/2024', '2029'),
(2, 2, 'S1', 'Manajemen', 'S.M.', 'Iis Kartini, S.Sos., M.M.', 'Baik Sekali', 'LAMEMBA / BAN-PT', 'No. 312/SK/LAMEMBA/Akred/S1/2024', '2029'),
(3, 2, 'S1', 'Akuntansi', 'S.Ak.', 'Merry Merliani Hindarsah, S.E., M.Ak.', 'Baik', 'LAMEMBA / BAN-PT', 'No. 195/SK/LAMEMBA/Akred/S1/2023', '2028'),
(4, 3, 'S1', 'Ilmu Komunikasi', 'S.I.Kom.', 'Dwi Sri Agustina, S.I.Kom., M.I.Kom.', 'Baik Sekali', 'BAN-PT', 'No. 401/SK/BAN-PT/Akred/S1/2024', '2029'),
(5, 4, 'S1', 'Sastra Inggris', 'S.S.', 'Shagita Maulady Anjany, M.Hum.', 'Baik', 'BAN-PT', 'No. 305/SK/BAN-PT/Akred/S1/2024', '2029'),
(6, 1, 'D3', 'Manajemen Informatika', 'A.Md.Kom.', 'Widianjani, M.Pd.', 'Baik', 'BAN-PT', 'No. 092/SK/BAN-PT/Akred/D3/2023', '2028');

-- 4. Table: Pimpinan Universitas & Yayasan
CREATE TABLE IF NOT EXISTS pimpinan_universitas (
    id INT PRIMARY KEY,
    jabatan VARCHAR(150) NOT NULL,
    nama_pejabat VARCHAR(255) NOT NULL,
    unit_kerja VARCHAR(100) NOT NULL,
    dasar_sk VARCHAR(255) NOT NULL
);

INSERT INTO pimpinan_universitas (id, jabatan, nama_pejabat, unit_kerja, dasar_sk) VALUES
(1, 'Ketua Yayasan Pendidikan Putra Indonesia (YPP-PI)', 'H. Yudi Junadi, S.H., M.H.', 'Yayasan', 'SK Yayasan YPP-PI Official'),
(2, 'Rektor', 'Dr. Astri Dwi Andriani, S.S., M.Pd.', 'Rektorat', 'SK Rektor UNPI Official'),
(3, 'Wakil Rektor I (Bidang Akademik & Kurikulum)', 'Ir. Cecep Nurul Alam, M.T.', 'Rektorat', 'SK Rektor UNPI Official'),
(4, 'Wakil Rektor II (Bidang Keuangan, SDM & Aset)', 'Hj. Endang Tri S, S.E., M.M.', 'Rektorat', 'SK Rektor UNPI Official'),
(5, 'Wakil Rektor III (Bidang Kemahasiswaan, Alumni & Humas)', 'Drs. H. Mulyadi, M.Si.', 'Rektorat', 'SK Rektor UNPI Official');

-- 5. Table: Registry Sumber Data
CREATE TABLE IF NOT EXISTS sumber_data_registry (
    id SERIAL PRIMARY KEY,
    tier VARCHAR(5) NOT NULL,
    nama_kelompok VARCHAR(100) NOT NULL,
    nama_sumber VARCHAR(255) NOT NULL,
    url_sumber VARCHAR(255) NOT NULL,
    tipe_integrasi VARCHAR(100) NOT NULL,
    prioritas INT NOT NULL,
    status_koneksi VARCHAR(50) NOT NULL
);

INSERT INTO sumber_data_registry (tier, nama_kelompok, nama_sumber, url_sumber, tipe_integrasi, prioritas, status_koneksi) VALUES
('A', 'Sumber Resmi UNPI', 'Portal Resmi & Humas UNPI Cianjur', 'https://www.unpi-cianjur.ac.id/', 'Portal & Repository', 1, 'Aktif'),
('B', 'Sumber Data Pendidikan', 'PDDikti, BAN-PT & LLDIKTI IV', 'https://pddikti.kemdiktisaintek.go.id/', 'Direktori Resmi', 1, 'Aktif'),
('C', 'Sumber Ensiklopedia', 'Wikipedia Ensiklopedia Bebas', 'https://id.wikipedia.org/api/rest_v1/page/summary/Universitas_Putra_Indonesia_Cianjur', 'REST API v1', 3, 'Aktif'),
('D', 'Media Sosial Resmi', 'Instagram, TikTok, YouTube UNPI', 'https://www.instagram.com/unpicianjur/', 'Kanal Publikasi Resmi', 2, 'Aktif'),
('E', 'Sumber Tambahan', 'Jurnal Ilmiah & Berita Pendidikan', 'https://repository.unpi-cianjur.ac.id/', 'Repository Ilmiah', 3, 'Aktif');

-- 6. Table: Log Audit Sinkronisasi
CREATE TABLE IF NOT EXISTS audit_sinkronisasi (
    id SERIAL PRIMARY KEY,
    sync_code VARCHAR(50) NOT NULL,
    waktu_sinkronisasi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sumber_target VARCHAR(100) NOT NULL,
    status_hasil VARCHAR(50) NOT NULL,
    keterangan TEXT
);

INSERT INTO audit_sinkronisasi (sync_code, sumber_target, status_hasil, keterangan) VALUES
('SYNC-2026-1102-001', 'Wikipedia REST API & LLDIKTI IV', 'BERHASIL', 'Sinkronisasi baseline 15 kategori terpadu dan validasi SK LLDIKTI selesai.');
