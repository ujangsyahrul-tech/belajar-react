import { useState } from 'react'
import './App.css'

const modules = [
  { id: 1, title: 'Komponen & JSX', type: 'Dasar', duration: '18 menit', progress: 100, color: 'mint' },
  { id: 2, title: 'Props dan State', type: 'Dasar', duration: '24 menit', progress: 68, color: 'coral' },
  { id: 3, title: 'Event Handling', type: 'Interaksi', duration: '16 menit', progress: 0, color: 'yellow' },
  { id: 4, title: 'Hooks: useEffect', type: 'Interaksi', duration: '31 menit', progress: 0, color: 'sky' },
]

function App() {
  const [activeTab, setActiveTab] = useState('Semua')
  const [isPlaying, setIsPlaying] = useState(false)
  const filters = ['Semua', 'Dasar', 'Interaksi']
  const visibleModules = activeTab === 'Semua' ? modules : modules.filter((module) => module.type === activeTab)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">&lt;/&gt;</span><span>Ruang<span className="brand-accent">Kode</span></span></div>
        <p className="sidebar-label">MENU UTAMA</p>
        <nav><a className="nav-link active" href="#beranda"><span>⌂</span> Beranda</a><a className="nav-link" href="#modul"><span>▤</span> Modul belajar</a><a className="nav-link" href="#progres"><span>◔</span> Progres saya</a></nav>
        <p className="sidebar-label">LAINNYA</p>
        <nav><a className="nav-link" href="#catatan"><span>▱</span> Catatan</a><a className="nav-link" href="#bantuan"><span>?</span> Bantuan</a></nav>
        <div className="sidebar-bottom"><div className="avatar">AS</div><div><strong>Agus Santoso</strong><small>Pelajar</small></div><button className="icon-button" aria-label="Buka menu akun">•••</button></div>
      </aside>
      <main className="main-content" id="beranda">
        <header className="topbar"><div className="breadcrumb">Ruang belajar <span>/</span> React JS</div><div className="top-actions"><button className="icon-button" aria-label="Notifikasi">♧</button><div className="mini-avatar">AS</div></div></header>
        <section className="welcome-section"><div><p className="eyebrow">KAMIS, 27 AGUSTUS 2026</p><h1>MUDAH BELAJAR REACT <span className="wave">✦</span></h1><p className="intro">Lanjutkan perjalananmu membangun antarmuka yang <strong>lebih hidup.</strong></p></div><div className="streak"><span className="streak-icon">✹</span><div><strong>5 hari</strong><small>streak belajar</small></div></div></section>
        <section className="focus-card" id="progres"><div className="focus-copy"><div className="lesson-tag">LANJUTKAN BELAJAR</div><h2>Props dan State</h2><p>Belajar bagaimana komponen React saling berbagi data.</p><div className="progress-row"><span>68% selesai</span><span>16 menit tersisa</span></div><div className="progress-track"><span style={{ width: '68%' }} /></div><button className="primary-button" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Sedang diputar' : 'Mulai belajar'} <span>→</span></button></div><div className="focus-art"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="code-window"><span>&lt;</span><strong>State</strong><span> /&gt;</span><i>●</i></div><div className="art-label">useState( )</div></div></section>
        <section className="modules-section" id="modul"><div className="section-heading"><div><p className="eyebrow">KURIKULUM</p><h2>Modul belajar</h2></div><div className="filter-tabs">{filters.map((filter) => <button key={filter} className={activeTab === filter ? 'selected' : ''} onClick={() => setActiveTab(filter)}>{filter}</button>)}</div></div><div className="module-grid">{visibleModules.map((module) => <article className="module-card" key={module.id}><div className={`module-number ${module.color}`}>0{module.id}</div><div className="module-info"><div className="module-meta"><span>{module.type}</span><span>◷ {module.duration}</span></div><h3>{module.title}</h3><div className="card-progress"><span style={{ width: `${module.progress}%` }} /></div><small>{module.progress === 0 ? 'Belum dimulai' : `${module.progress}% selesai`}</small></div><button className="arrow-button" aria-label={`Buka modul ${module.title}`}>↗</button></article>)}</div></section>
        <footer><span>RuangKode / Belajar dengan ritme sendiri.</span><span>React track <b>●</b></span></footer>
      </main>
    </div>
  )
}

export default App
