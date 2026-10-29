import { useEffect, useRef, useState } from 'react'
import { profile, skills, experience } from '../data/resume'
import { useCopy } from '../hooks'
import { Section, Reveal, Magnetic } from './ui'

const HELP = ['help', 'whoami', 'contact', 'skills', 'experience', 'hire', 'clear']

function respond(cmd) {
  switch (cmd) {
    case 'help':
      return [`available commands: ${HELP.join(', ')}`]
    case 'whoami':
      return [`${profile.name} — ${profile.role}`, `${profile.experience} years · ${profile.location}`]
    case 'contact':
      return [`email    ${profile.email}`, `phone    ${profile.phone}`, `linkedin ${profile.linkedinLabel}`]
    case 'skills':
      return skills.map((s) => `${s.label.padEnd(17)} ${s.items.join(', ')}`)
    case 'experience':
      return experience.map((e) => `${e.period.padEnd(20)} ${e.role} @ ${e.company}`)
    case 'hire':
    case 'sudo hire amir':
      return ['✔ Great choice. Opening your mail client…', '__mail__']
    default:
      return [`command not found: ${cmd}. Type "help".`]
  }
}

/** A tiny working terminal — type commands to learn about me. */
function Terminal() {
  const [lines, setLines] = useState([
    { t: 'out', v: 'Welcome to amir-sh v1.0 — type "help" to begin.' },
  ])
  const [value, setValue] = useState('')
  const body = useRef(null)
  const input = useRef(null)

  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight, behavior: 'smooth' })
  }, [lines])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') return setLines([])
    const out = respond(cmd)
    if (out.includes('__mail__')) setTimeout(() => (location.href = `mailto:${profile.email}`), 600)
    setLines((l) => [...l, { t: 'in', v: raw }, ...out.filter((o) => o !== '__mail__').map((v) => ({ t: 'out', v }))])
  }

  return (
    <div className="term" onClick={() => input.current?.focus()}>
      <div className="code-bar">
        <i /><i /><i />
        <span>amir@portfolio: ~</span>
      </div>
      <div className="term-body" ref={body}>
        {lines.map((l, i) => (
          <div key={i} className={`term-line ${l.t}`}>
            {l.t === 'in' && <span className="prompt">➜ ~ </span>}
            {l.v}
          </div>
        ))}
        <form
          className="term-input"
          onSubmit={(e) => {
            e.preventDefault()
            run(value)
            setValue('')
          }}
        >
          <span className="prompt">➜ ~ </span>
          <input
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
      <div className="term-chips">
        {HELP.slice(0, 6).map((c) => (
          <button key={c} onClick={(e) => (e.stopPropagation(), run(c))}>
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Contact() {
  const [copied, copy] = useCopy()
  const items = [
    { k: 'email', label: 'Email', v: profile.email, href: `mailto:${profile.email}` },
    { k: 'phone', label: 'Phone', v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { k: 'linkedin', label: 'LinkedIn', v: profile.linkedinLabel, href: profile.linkedin },
    { k: 'loc', label: 'Location', v: profile.location },
  ]

  return (
    <Section id="contact" index={7} kicker="contact.sh" title="Let's build something">
      <div className="contact">
        <Reveal className="contact-left">
          <p className="contact-big">
            Got a React role or a product that needs a sharp frontend? <span className="grad">Let's talk.</span>
          </p>
          <ul className="contact-list">
            {items.map((it) => (
              <li key={it.k}>
                <span className="contact-label mono">{it.label}</span>
                {it.href ? (
                  <a href={it.href} target={it.k === 'linkedin' ? '_blank' : undefined} rel="noreferrer">
                    {it.v}
                  </a>
                ) : (
                  <span>{it.v}</span>
                )}
                {it.href && it.k !== 'linkedin' && (
                  <button className="copy" onClick={() => copy(it.v, it.k)}>
                    {copied === it.k ? 'copied ✔' : 'copy'}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <Magnetic href={`mailto:${profile.email}`} className="btn btn-primary">
            Say hello <span>→</span>
          </Magnetic>
        </Reveal>
        <Reveal delay={150}>
          <Terminal />
        </Reveal>
      </div>
    </Section>
  )
}
