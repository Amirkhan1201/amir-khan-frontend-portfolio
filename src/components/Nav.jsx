import { useState } from 'react'
import { useScrollProgress, useScrollSpy, useTheme } from '../hooks'

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
  const [theme, toggleTheme] = useTheme()

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
        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
            </svg>
          )}
        </button>
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
