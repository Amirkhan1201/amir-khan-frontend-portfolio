import { memo, useEffect, useRef } from 'react'
import { useInView } from '../hooks'

/** Fades/slides children in when scrolled into view. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Section shell with a numbered, code-comment style heading. */
export function Section({ id, index, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <span className="section-index">{String(index).padStart(2, '0')}</span>
        <span className="section-kicker">// {kicker}</span>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

/** Splits text into letters that rise in one by one. */
export const SplitText = memo(function SplitText({ text, delay = 0, className = '' }) {
  return (
    <span className={`split ${className}`} aria-label={text}>
      {[...text].map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="split-ch"
          style={{ animationDelay: `${delay + i * 45}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
})

/** Button that leans toward the cursor. */
export function Magnetic({ children, strength = 0.35, className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * strength
      const y = (e.clientY - r.top - r.height / 2) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const leave = () => (el.style.transform = '')
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [strength])
  return (
    <a ref={ref} className={`magnetic ${className}`} {...rest}>
      {children}
    </a>
  )
}
