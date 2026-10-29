import { useState } from 'react'
import { profile, summary } from '../data/resume'
import { Section, Reveal } from './ui'

/** The summary, shown as a React DevTools "component inspector". */
export default function About() {
  const [hovered, setHovered] = useState(null)

  return (
    <Section id="about" index={1} kicker="about.me" title="The developer behind the components">
      <div className="about">
        <Reveal className="about-text">
          <p className="about-big">
            I build <em>responsive</em>, <em>high-performance</em> and <em>user-friendly</em> web apps for{' '}
            {summary.domains.map((d, i) => (
              <span key={d}>
                <mark>{d}</mark>
                {i < summary.domains.length - 2 ? ', ' : i === summary.domains.length - 2 ? ' and ' : ''}
              </span>
            ))}{' '}
            clients.
          </p>
          <p>
            Strong in React.js (components, hooks, Context, Redux Toolkit), TypeScript and modern JavaScript (ES6+),
            with UIs built in Tailwind CSS and Material UI. I integrate REST APIs end to end and work with Node.js
            and Express.js for smooth collaboration with backend teams.
          </p>
          <p>
            I own features from design discussion to deployment, work through Git pull-request reviews, and I'm
            comfortable working in rotational shifts.
          </p>
        </Reveal>

        <Reveal className="inspector" delay={150}>
          <div className="inspector-head">
            <span className="tab is-active">⚛ Components</span>
            <span className="tab">Profiler</span>
          </div>
          <div className="inspector-body">
            <div className="tree">
              <div>▾ &lt;App&gt;</div>
              <div className="lvl1">▾ &lt;Portfolio&gt;</div>
              <div className="lvl2 is-sel">&lt;AmirKhan /&gt;</div>
            </div>
            <div className="props">
              <div className="props-title">props</div>
              <div className="prop">
                <span className="k">name</span>: <span className="s">"{profile.name}"</span>
              </div>
              <div className="prop">
                <span className="k">experience</span>: <span className="n">{profile.experience}</span>{' '}
                <span className="dim">// years</span>
              </div>
              <div className="prop">
                <span className="k">location</span>: <span className="s">"{profile.location}"</span>
              </div>
              <div className="props-title">hooks</div>
              {summary.points.map((p, i) => (
                <div
                  key={p.k}
                  className={`prop hook ${hovered === i ? 'is-hover' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="dim">{i + 1}</span> <span className="k">{p.k}</span>:{' '}
                  <span className="s">"{p.v}"</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
