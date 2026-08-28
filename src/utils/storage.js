import { dummyLembaga } from '../data/dummyLembaga'

const STORAGE_KEY = 'silks_indonesia_data'

export function getLembaga() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
    saveLembaga(dummyLembaga)
    return dummyLembaga
  } catch {
    return dummyLembaga
  }
}

export function saveLembaga(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); return data }
export function addLembaga(item) { return saveLembaga([...getLembaga(), item]) }
export function updateLembaga(item) { return saveLembaga(getLembaga().map((entry) => entry.id === item.id ? item : entry)) }
export function deleteLembaga(id) { return saveLembaga(getLembaga().filter((entry) => entry.id !== id)) }
