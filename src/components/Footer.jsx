import { Link } from 'react-router-dom'

const COLS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Team', to: '/about' },
      { label: 'Industries', to: '/industries' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Inspection & NDT', to: '/services' },
      { label: 'Welding & Fabrication', to: '/services' },
      { label: 'Access Solutions', to: '/services' },
      { label: 'Supply & Labour', to: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Industries We Serve', to: '/industries' },
      { label: 'ISO Certification', to: '/about' },
      { label: 'Privacy Policy', to: '/' },
      { label: 'Terms & Conditions', to: '/' },
    ],
  },
]

const SOCIAL = [
  { label: 'Facebook', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { label: 'LinkedIn', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'Instagram', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white"/></svg> },
  { label: 'Twitter/X', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-12 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          {/* Brand */}
          <div className="lg:w-72 flex flex-col gap-5 shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-white rounded-xl px-3 py-2">
                <img src="/logo.jpg" alt="Jespenel Ghana Ltd" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
              </div>
            </Link>
            <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              A women-led, indigenous engineering company delivering quality inspection, fabrication, and offshore services across Ghana and West Africa.
            </p>
            {/* Contact quick info */}
            <div className="flex flex-col gap-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <span>📞 +233 59 787 1855</span>
              <span>✉️ jespenelghltd@gmail.com</span>
              <span>📍 Sekondi-Takoradi, Ghana</span>
            </div>
            <div className="flex gap-2.5">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:brightness-110"
                  style={{ background: 'rgba(255,255,255,0.08)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-1 gap-8 lg:gap-16 justify-end flex-wrap">
            {COLS.map(col => (
              <div key={col.title} className="flex flex-col gap-4 min-w-[140px]">
                <p className="font-bold text-[13px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                  {col.title}
                </p>
                <div className="flex flex-col gap-3">
                  {col.links.map(l => (
                    <Link key={l.label} to={l.to}
                      className="text-[14px] transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ISO cert bar */}
        <div className="py-4 border-b flex items-center gap-4 flex-wrap" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <span className="px-3 py-1.5 rounded-lg text-[12px] font-bold" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>
            ✓ ISO 9001:2015 Certified
          </span>
          <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Certificate No. WA25QM81442 · Certified by Universal Registrars, London</span>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Jespenel Ghana Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {['#8D054F', '#22C55E', '#F59E0B'].map(c => (
              <div key={c} className="w-8 h-1.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
