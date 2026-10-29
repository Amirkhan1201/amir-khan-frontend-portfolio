import { useMemo, useState } from 'react'
import { experience } from '../data/resume'
import { Section, Reveal } from './ui'

/** Work history as `git log --graph` — each job is a branch, each achievement a commit. */
export default function Experience() {
  const [active, setActive] = useState(experience[0].id)
  const job = useMemo(() => experience.find((e) => e.id === active), [active])

  return (
    <Section id="experience" index={3} kicker="git log --graph" title="Where I've shipped code">
      <div className="exp">
        <Reveal className="git-graph">
          <div className="git-main-line" />
          <div className="git-head">
            <span className="git-dot head" /> <span className="mono">HEAD → main</span>
          </div>
          {experience.map((e) => (
            <button
              key={e.id}
              className={`git-node ${active === e.id ? 'is-active' : ''}`}
              onClick={() => setActive(e.id)}
            >
              <span className="git-dot" />
              <span className="git-node-body">
                <span className="git-branch mono">{e.branch}</span>
                <strong>{e.company}</strong>
                <small>
                  {e.role} · {e.period}
                </small>
              </span>
            </button>
          ))}
          <div className="git-head">
            <span className="git-dot root" /> <span className="mono dim">initial commit · 2022</span>
          </div>
        </Reveal>

        <Reveal className="git-log" delay={120}>
          <div className="git-log-head" key={job.id + '-h'}>
            <p className="mono dim">
              $ git checkout <span className="c-s">{job.branch}</span>
            </p>
            <h3>
              {job.role} <span className="at">@</span> {job.company}
            </h3>
            <p className="git-meta">
              <span>{job.period}</span>
              <span>·</span>
              <span>{job.tagline}</span>
            </p>
            <div className="tags">
              {job.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <ol className="commits" key={job.id}>
            {job.commits.map((c, i) => (
              <li key={i} className="commit" style={{ animationDelay: `${i * 110}ms` }}>
                <span className="commit-bullet" aria-hidden="true" />
                <p>{highlight(c)}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}

/** Bold the numbers so the impact pops. */
function highlight(text) {
  const parts = text.split(/(\d+\+?%?)/g)
  return parts.map((p, i) => (/^\d+\+?%?$/.test(p) ? <b key={i}>{p}</b> : p))
}
