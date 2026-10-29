import { useMemo, useState } from 'react'
import { skills } from '../data/resume'
import { Section, Reveal } from './ui'
import TechMarquee from './TechMarquee'

/** Skills as a package.json — pick a category, watch the deps "install". */
export default function Skills() {
  const [active, setActive] = useState(skills[0].id)
  const current = useMemo(() => skills.find((s) => s.id === active), [active])

  return (
    <Section id="skills" index={2} kicker="package.json" title="Tools I ship with">
      <div className="skills">
        <Reveal className="skill-tabs" role="tablist">
          {skills.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              className={`skill-tab ${active === s.id ? 'is-active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              <span className="skill-icon">{s.icon}</span>
              <span>{s.label}</span>
              <span className="skill-count">{s.items.length}</span>
            </button>
          ))}
        </Reveal>

        <Reveal className="pkg" delay={120}>
          <div className="code-bar">
            <i /><i /><i />
            <span>package.json</span>
          </div>
          {/* key forces a remount so the install animation replays */}
          <pre className="code pkg-code" key={active}>
            {'{\n'}
            {'  '}<span className="c-a">"name"</span>: <span className="c-s">"amir-khan"</span>,{'\n'}
            {'  '}<span className="c-a">"{current.id}Dependencies"</span>: {'{\n'}
            {current.items.map((item, i) => (
              <span key={item} className="pkg-line" style={{ animationDelay: `${i * 90}ms` }}>
                {'    '}<span className="c-s">"{item}"</span>: <span className="c-n">"^latest"</span>
                {i < current.items.length - 1 ? ',' : ''}
                {'\n'}
              </span>
            ))}
            {'  }\n}'}
          </pre>
          <div className="pkg-term" key={active + '-t'}>
            <span className="dim">$</span> npm install --save {current.id}
            <br />
            <span className="ok">✔ added {current.items.length} packages</span> <span className="dim">in 0.{current.items.length}s</span>
          </div>
        </Reveal>
      </div>

      <TechMarquee />
    </Section>
  )
}
