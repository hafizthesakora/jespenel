import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : '0 1px 0 #f1f5f9' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/logo.jpg" alt="Jespenel Ghana Ltd" style={{ height: 46, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#8D054F] bg-[#fdf2f8]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white text-[14px] font-semibold transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
            style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 4px 12px rgba(141,5,79,0.25)' }}>
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M7 3l4 4-4 4"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" onClick={() => setOpen(!open)}>
          {open
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4l14 14M18 4L4 18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h16M3 11h16M3 16h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-[15px] font-medium ${isActive ? 'text-[#8D054F] bg-[#fdf2f8]' : 'text-slate-600'}`
              }>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl text-center text-white font-semibold text-[15px]"
            style={{ background: '#8D054F' }}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
