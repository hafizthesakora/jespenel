import { useRef, useEffect, useState } from 'react'

export default function CountUp({ target, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const started = useRef(false)
  const num = parseFloat(String(target).replace(/[^0-9.]/g, ''))
  const isNumeric = !isNaN(num) && String(target).match(/^\d/)
  const [display, setDisplay] = useState(isNumeric ? '0' : String(target))

  useEffect(() => {
    if (!isNumeric) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(String(Math.round(eased * num)))
            if (t < 1) requestAnimationFrame(tick)
            else { setDisplay(String(num)); obs.disconnect() }
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [isNumeric, num, duration])

  return <span ref={ref}>{display}{suffix}</span>
}
