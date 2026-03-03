import { useRef, useEffect, useState } from 'react'

export default function AnimateIn({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const classes = {
    'fade-up':     `transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`,
    'fade-in':     `transition-opacity duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`,
    'slide-left':  `transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`,
    'slide-right': `transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
    'scale-up':    `transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
  }[animation] || ''

  return (
    <Tag ref={ref} className={`${classes} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
