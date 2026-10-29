import { lazy, Suspense, useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cursor from './components/Cursor'
import CommandPalette from './components/CommandPalette'
import { useHotkey } from './hooks'
import { profile } from './data/resume'

// Below-the-fold sections are code-split and lazy loaded
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Impact = lazy(() => import('./components/Impact'))
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))

const isPaletteKey = (e) => (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'

export default function App() {
  const [palette, setPalette] = useState(false)
  const toggle = useCallback((e) => {
    e?.preventDefault?.()
    setPalette((p) => !p)
  }, [])
  useHotkey(isPaletteKey, toggle)

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Cursor />
      <Nav onOpenPalette={toggle} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
      <main>
        <Hero />
        <Suspense fallback={<div className="loading">loading…</div>}>
          <About />
          <Skills />
          <Experience />
          <Impact />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <footer className="footer">
        <span className="mono">
          &lt;/&gt; Designed &amp; built with React by {profile.name} · {new Date().getFullYear()}
        </span>
        <a href="#home" className="mono">back to top ↑</a>
      </footer>
    </>
  )
}
