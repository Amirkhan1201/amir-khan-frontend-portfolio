import { useMemo, useState, useCallback } from 'react'
import { projects } from '../data/resume'
import { Section, Reveal } from './ui'

const FILTERS = ['All', ...new Set(projects.map((p) => p.kind))]

function TiltCard({ p, i }) {
  const onMove = useCallback((e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * 12}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 14}deg`)
    el.style.setProperty('--gx', `${x * 100}%`)
    el.style.setProperty('--gy', `${y * 100}%`)
  }, [])
  const onLeave = useCallback((e) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }, [])

  const Tag = p.link ? 'a' : 'article'
  return (
    <Tag
      className="proj"
      style={{ '--h': p.hue, animationDelay: `${i * 70}ms` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
    >
      <div className="proj-glare" />
      <div className="proj-top">
        <span className="proj-kind">{p.kind}</span>
        <span className="proj-client mono">{p.client}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="tags">
        {p.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      {p.link && <span className="proj-link">Visit live ↗</span>}
    </Tag>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.kind === filter)), [filter])

  return (
    <Section id="projects" index={5} kicker="projects.map(render)" title="Things I've built">
      <Reveal className="filters">
        {FILTERS.map((f) => (
          <button key={f} className={`filter ${filter === f ? 'is-active' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </Reveal>
      <div className="proj-grid" key={filter}>
        {list.map((p, i) => (
          <TiltCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  )
}
