import { memo } from 'react'
import { metrics } from '../data/resume'
import { useCountUp, useInView } from '../hooks'
import { Section } from './ui'

const R = 46
const C = 2 * Math.PI * R

/** Lighthouse-style gauge that fills and counts up on scroll. */
const Gauge = memo(function Gauge({ m, i }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const val = useCountUp(m.value, inView, 1700, m.decimals || 0)
  // ring fill: percentages use their value, others fill fully
  const fill = m.suffix === '%' ? m.value / 100 : 1
  return (
    <div ref={ref} className={`gauge ${inView ? 'is-in' : ''}`} style={{ transitionDelay: `${i * 90}ms` }}>
      <svg viewBox="0 0 110 110" className="gauge-svg">
        <circle cx="55" cy="55" r={R} className="gauge-bg" />
        <circle
          cx="55"
          cy="55"
          r={R}
          className="gauge-fg"
          strokeDasharray={C}
          strokeDashoffset={inView ? C * (1 - fill) : C}
        />
      </svg>
      <div className="gauge-val">
        {(m.decimals ? val.toFixed(m.decimals) : val)}
        <small>{m.suffix}</small>
      </div>
      <p className="gauge-label">{m.label}</p>
    </div>
  )
})

export default function Impact() {
  return (
    <Section id="impact" index={4} kicker="lighthouse --report" title="Impact, measured">
      <div className="gauges">
        {metrics.map((m, i) => (
          <Gauge key={m.label} m={m} i={i} />
        ))}
      </div>
    </Section>
  )
}
