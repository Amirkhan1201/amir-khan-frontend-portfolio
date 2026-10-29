import { useEffect, useRef, useState, useCallback } from 'react'

/** Reveal-on-scroll: returns [ref, inView]. Fires once. */
export function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])
  return [ref, inView]
}

/** Types and deletes a rotating list of words. */
export function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? erase : type
    if (!deleting && text === word) delay = hold
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setIndex((i) => i + 1)
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, type, erase, hold])

  return text
}

/** Animated number counter, starts when `start` is true. */
export function useCountUp(target, start, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setValue(Number((target * eased).toFixed(decimals)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration, decimals])
  return value
}

/** Which section id is currently on screen. */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

/** 0 → 1 scroll progress of the page. */
export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? h.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return p
}

/** Global keyboard shortcut. */
export function useHotkey(test, handler) {
  const saved = useRef(handler)
  saved.current = handler
  useEffect(() => {
    const onKey = (e) => test(e) && saved.current(e)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [test])
}

/** Copy to clipboard with a transient "copied" flag. */
export function useCopy(timeout = 1500) {
  const [copied, setCopied] = useState(null)
  const copy = useCallback(
    async (text, key = text) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        /* clipboard blocked — ignore */
      }
      setCopied(key)
      setTimeout(() => setCopied(null), timeout)
    },
    [timeout]
  )
  return [copied, copy]
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
