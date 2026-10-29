import { useEffect, useRef } from 'react'
import { profile, summary } from '../data/resume'
import { useTypewriter } from '../hooks'
import { SplitText, Magnetic } from './ui'
import portrait from '../assets/amir.webp'

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const scene = useRef(null)

  // Gentle mouse parallax on the background glow only
  useEffect(() => {
    const el = scene.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => {
      el.style.setProperty('--mx', (e.clientX / innerWidth - 0.5).toFixed(3))
      el.style.setProperty('--my', (e.clientY / innerHeight - 0.5).toFixed(3))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section id="home" className="hero" ref={scene}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="pulse" /> Available · {profile.location}
          </p>

          <h1 className="hero-name">
            <SplitText text="Amir" delay={150} />
            <br />
            <SplitText text="Khan J." delay={400} className="outline" />
          </h1>

          <p className="hero-role">
            <span className="mono dim">&gt; </span>
            <span className="typed">{role}</span>
            <span className="caret" />
          </p>

          <p className="hero-lead">{summary.intro}</p>

          <div className="hero-ctas">
            <Magnetic href="#experience" className="btn btn-primary">
              View my work <span>→</span>
            </Magnetic>
            <Magnetic
              href={profile.resume}
              {...(profile.resume !== '#' ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="btn btn-ghost"
            >
              Resume ↗
            </Magnetic>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="portrait">
            <img src={portrait} alt={`${profile.name}, React Developer`} width="900" height="1123" />
            <figcaption className="portrait-badge">
              <strong>{profile.experience}</strong>
              <span>
                years
                <br />
                building React
              </span>
            </figcaption>
            <div className="portrait-tag mono">⚛ React · TypeScript · Next.js</div>
          </figure>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
