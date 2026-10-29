import { useState } from 'react'
import { useScrollProgress, useScrollSpy } from '../hooks'

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'impact', label: 'Impact' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
const IDS = SECTIONS.map((s) => s.id)

export default function Nav({ onOpenPalette }) {
  const progress = useScrollProgress()
  const active = useScrollSpy(IDS)
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav ${progress > 0.01 ? 'is-scrolled' : ''}`}>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
      <a href="#home" className="nav-logo" aria-label="Home">
        <span className="logo-bracket">&lt;</span>AK<span className="logo-bracket"> /&gt;</span>
      </a>

      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {SECTIONS.slice(1).map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </button>
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
