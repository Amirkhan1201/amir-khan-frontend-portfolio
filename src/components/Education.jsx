import { education } from '../data/resume'
import { Section, Reveal } from './ui'

export default function Education() {
  return (
    <Section id="education" index={6} kicker="education.json" title="Foundations">
      <div className="edu">
        {education.map((e, i) => (
          <Reveal key={e.title} className="edu-card" delay={i * 120}>
            <div className="edu-seal">{i === 0 ? '🎓' : '📜'}</div>
            <div>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <div className="edu-meta">
                {e.period && <span className="tag">{e.period}</span>}
                <span className="tag tag-accent">{e.score}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
