const commercial = 'Keuangan Syariah Komersial'
const social = 'Keuangan Sosial Syariah'

export const commercialTypes = ['Bank Umum Syariah', 'Unit Usaha Syariah', 'BPRS', 'Koperasi Syariah / KSPPS', 'BMT', 'Asuransi Syariah', 'Pegadaian Syariah', 'Perusahaan Pembiayaan Syariah', 'Pasar Modal Syariah', 'Fintech Syariah', 'Dana Pensiun Syariah', 'Lainnya']
export const socialTypes = ['Lembaga Pengelola Zakat', 'BAZNAS', 'LAZ', 'Lembaga Pengelola Wakaf', 'BWI', 'Nazhir Wakaf', 'Lembaga Sosial Syariah Lainnya']

const make = (id, namaLembaga, kelompok, jenis, provinsi, kota, tahunBerdiri, status = 'Aktif') => ({ id, namaLembaga, kelompok, jenis, provinsi, kota, tahunBerdiri, alamat: 'Alamat dummy untuk demonstrasi aplikasi', website: 'https://contoh.invalid', email: 'info@contoh.invalid', telepon: '0000000000', status, deskripsi: 'Data fiktif untuk demonstrasi SILKS Indonesia, bukan data resmi.' })

export const dummyLembaga = [
  make(1, 'Bank Syariah Nusantara', commercial, 'Bank Umum Syariah', 'DKI Jakarta', 'Jakarta Selatan', 2008),
  make(2, 'BPRS Mitra Syariah', commercial, 'BPRS', 'Jawa Timur', 'Kediri', 2010),
  make(3, 'KSPPS Berkah Indonesia', commercial, 'Koperasi Syariah / KSPPS', 'Jawa Tengah', 'Semarang', 2012),
  make(4, 'BMT Amanah Nusantara', commercial, 'BMT', 'Jawa Barat', 'Bandung', 2014),
  make(5, 'Asuransi Syariah Sejahtera', commercial, 'Asuransi Syariah', 'DKI Jakarta', 'Jakarta Pusat', 2011),
  make(6, 'Pegadaian Syariah Contoh', commercial, 'Pegadaian Syariah', 'Jawa Timur', 'Surabaya', 2009),
  make(7, 'Fintech Syariah Nusantara', commercial, 'Fintech Syariah', 'DKI Jakarta', 'Jakarta Barat', 2019),
  make(8, 'Pembiayaan Syariah Mandiri', commercial, 'Perusahaan Pembiayaan Syariah', 'Banten', 'Tangerang', 2015),
  make(9, 'Dana Pensiun Syariah Indonesia', commercial, 'Dana Pensiun Syariah', 'DKI Jakarta', 'Jakarta Selatan', 2013),
  make(10, 'Lembaga Zakat Nusantara', social, 'Lembaga Pengelola Zakat', 'Jawa Timur', 'Malang', 2007),
  make(11, 'BAZNAS Contoh Daerah', social, 'BAZNAS', 'Jawa Timur', 'Kediri', 2010),
  make(12, 'LAZ Berkah Indonesia', social, 'LAZ', 'Jawa Barat', 'Bogor', 2016),
  make(13, 'Lembaga Wakaf Nusantara', social, 'Lembaga Pengelola Wakaf', 'Jawa Tengah', 'Surakarta', 2012),
  make(14, 'Nazhir Wakaf Contoh', social, 'Nazhir Wakaf', 'DI Yogyakarta', 'Sleman', 2018),
  make(15, 'Koperasi Syariah Sejahtera', commercial, 'Koperasi Syariah / KSPPS', 'Sulawesi Selatan', 'Makassar', 2017),
  make(16, 'BMT Cahaya Sumatera', commercial, 'BMT', 'Sumatera Utara', 'Medan', 2016),
  make(17, 'Lembaga Sosial Harapan Kalimantan', social, 'Lembaga Sosial Syariah Lainnya', 'Kalimantan Selatan', 'Banjarmasin', 2019),
  make(18, 'KSPPS Nusa Berdaya', commercial, 'Koperasi Syariah / KSPPS', 'Nusa Tenggara Barat', 'Mataram', 2020),
  make(19, 'BMT Papua Mandiri', commercial, 'BMT', 'Papua', 'Jayapura', 2021),
]
