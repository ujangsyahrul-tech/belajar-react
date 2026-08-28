export function getTotalLembaga(data) { return data.length }
export function getTotalKomersial(data) { return data.filter((item) => item.kelompok === 'Keuangan Syariah Komersial').length }
export function getTotalSosial(data) { return data.filter((item) => item.kelompok === 'Keuangan Sosial Syariah').length }
export function getTotalProvinsi(data) { return new Set(data.map((item) => item.provinsi)).size }
export function getCountByJenis(data) { return data.reduce((counts, item) => ({ ...counts, [item.jenis]: (counts[item.jenis] || 0) + 1 }), {}) }
export function getCountByProvinsi(data) { return data.reduce((counts, item) => ({ ...counts, [item.provinsi]: (counts[item.provinsi] || 0) + 1 }), {}) }
