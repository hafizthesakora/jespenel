import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import CountUp from '../components/CountUp'

function Tag({ color, bg, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase"
      style={{ color, background: bg || color + '14' }}>
      {children}
    </span>
  )
}

function Arrow({ color = 'currentColor', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8h12M8 4l4 4-4 4" />
    </svg>
  )
}

function Check({ color = '#22C55E' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8l4 4 7-8" />
    </svg>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-[72px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT — text */}
        <div className="flex-1 flex flex-col gap-8 max-w-[560px]">
          <div className="hero-animate flex items-center gap-3 flex-wrap" style={{ animationDelay: '0ms' }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold" style={{ background: '#f0fdf4', color: '#16a34a' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22C55E' }} />
              ISO 9001:2015 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold" style={{ background: '#fdf2f8', color: '#8D054F' }}>
              ♀ Women-Led Company
            </span>
          </div>

          <h1 className="hero-animate font-extrabold leading-[1.1] tracking-tight text-slate-900"
            style={{ fontSize: 'clamp(36px, 4.5vw, 54px)', fontFamily: "'Plus Jakarta Sans',sans-serif", animationDelay: '80ms' }}>
            Your Trusted Partner for{' '}
            <span style={{ color: '#8D054F' }}>Offshore</span> &amp;{' '}
            <span className="relative inline-block">
              <span style={{ color: '#22C55E' }}>Onshore</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 160 5" fill="none">
                <path d="M0 4 Q80 0 160 4" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}Engineering Services
          </h1>

          <p className="hero-animate text-[17px] leading-relaxed text-slate-500 max-w-[480px]" style={{ animationDelay: '180ms' }}>
            Jespenel Ghana Ltd delivers quality inspection, welding, access solutions, NDT, and supply services across the oil &amp; gas, marine, and power industries in Ghana and beyond.
          </p>

          <div className="hero-animate flex flex-col gap-3" style={{ animationDelay: '260ms' }}>
            {[
              ['Lifting, Rigging &amp; NDT Inspection', '#8D054F', '#fdf2f8'],
              ['Welding, Fabrication &amp; Painting', '#22C55E', '#f0fdf4'],
              ['Access Solutions &amp; Asset Management', '#F59E0B', '#fffbeb'],
            ].map(([item, color, bg]) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: bg }}>
                  <Check color={color} />
                </div>
                <span className="text-[15px] text-slate-600" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>

          <div className="hero-animate flex flex-wrap items-center gap-4 pt-2" style={{ animationDelay: '340ms' }}>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white text-[15px] font-bold transition-all hover:brightness-110 hover:-translate-y-px"
              style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 8px 20px rgba(141,5,79,0.3)' }}>
              Get a Quote <Arrow color="white" />
            </Link>
            <Link to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-slate-700 text-[15px] font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
              Our Services <Arrow color="#475569" />
            </Link>
          </div>
        </div>

        {/* RIGHT — Hero image placeholder */}
        <div className="hero-animate flex-1 flex justify-center lg:justify-end w-full" style={{ animationDelay: '150ms' }}>
          <div className="relative w-full max-w-[540px]">

            <img
              src="/images/hero.jpg"
              alt="Offshore engineering operations"
              style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '1rem' }}
            />

            {/* Floating badge: ISO */}
            <div className="float-badge absolute -left-5 top-8 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.18)', border: '1px solid #f1f5f9' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: '#fdf2f8' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#8D054F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 1.5L2 5v5c0 5 3 8.5 7 9.5 4-1 7-4.5 7-9.5V5L9 1.5z"/>
                  <path d="M5.5 9l2.5 2.5 5-5.5"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[12px] text-slate-900">ISO 9001:2015</p>
                <p className="text-[11px] text-slate-400">No. WA25QM81442</p>
              </div>
            </div>

            {/* Floating badge: Women-led */}
            <div className="float-badge-slow absolute -right-5 bottom-10 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.18)', border: '1px solid #f1f5f9' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-lg" style={{ background: '#fffbeb' }}>
                ♀
              </div>
              <div>
                <p className="font-bold text-[12px] text-slate-900">Women-Led</p>
                <p className="text-[11px] text-slate-400">Indigenous Ghanaian Co.</p>
              </div>
            </div>

            {/* Floating bottom left: location */}
            <div className="float-badge absolute -left-5 bottom-10 bg-white rounded-xl px-3 py-2 flex items-center gap-2"
              style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.14)', border: '1px solid #f1f5f9', animationDelay: '1.2s' }}>
              <span style={{ color: '#22C55E', fontSize: 14 }}>📍</span>
              <p className="font-bold text-[11px] text-slate-700">Sekondi-Takoradi, Ghana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services marquee strip */}
      <div className="border-t border-slate-100 bg-white py-5">
        <div className="flex items-center gap-6 px-6 lg:px-8 mb-4">
          <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 shrink-0">Core Services</p>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="overflow-hidden relative"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="marquee-track flex items-center gap-3" style={{ width: 'max-content' }}>
            {[
              ['🔍', 'Lifting & Rigging Inspection', '#8D054F', '#fdf2f8'],
              ['🧪', 'NDT Inspection', '#22C55E', '#f0fdf4'],
              ['🔧', 'Welding & Fabrication', '#F59E0B', '#fffbeb'],
              ['🪜', 'Scaffolding & Access', '#8D054F', '#fdf2f8'],
              ['🔥', 'Firefighting Services', '#EF4444', '#fef2f2'],
              ['🛡️', 'Asset Management', '#22C55E', '#f0fdf4'],
              ['📦', 'Supply & Labour', '#F59E0B', '#fffbeb'],
              ['🔍', 'Lifting & Rigging Inspection', '#8D054F', '#fdf2f8'],
              ['🧪', 'NDT Inspection', '#22C55E', '#f0fdf4'],
              ['🔧', 'Welding & Fabrication', '#F59E0B', '#fffbeb'],
              ['🪜', 'Scaffolding & Access', '#8D054F', '#fdf2f8'],
              ['🔥', 'Firefighting Services', '#EF4444', '#fef2f2'],
              ['🛡️', 'Asset Management', '#22C55E', '#f0fdf4'],
              ['📦', 'Supply & Labour', '#F59E0B', '#fffbeb'],
            ].map(([emoji, label, color, bg], i) => (
              <Link key={i} to="/services"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-semibold shrink-0 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                style={{ background: bg, color }}>
                <span>{emoji}</span>{label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Clients marquee bar */}
      <div className="border-t border-slate-100 bg-slate-50 py-5">
        <div className="flex items-center gap-6 px-6 lg:px-8 mb-4">
          <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 shrink-0">Trusted By</p>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="overflow-hidden relative"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="marquee-track flex items-center gap-10" style={{ width: 'max-content' }}>
            {[
              { name: 'TAQA', logo: '/images/taqa-logo.png' },
              { name: 'WBHO', logo: '/images/wbho-logo.jpeg' },
              { name: 'STRABAG SE', logo: '/images/strabag-logo.png' },
              { name: 'Gabriel Couto', logo: '/images/gabriel-logo.jpeg' },
              { name: 'CEN Power', logo: '/images/cen-logo.jpeg' },
              { name: 'FlatC Marine', logo: '/images/flatc-logo.jpeg' },
              { name: 'Goenergy', logo: '/images/go-energy-logo.jpeg' },
              { name: 'Asante Gold Bibiani Ltd', logo: '/images/asante-gold-logo.jpg' },
              { name: 'TAQA', logo: '/images/taqa-logo.png' },
              { name: 'WBHO', logo: '/images/wbho-logo.jpeg' },
              { name: 'STRABAG SE', logo: '/images/strabag-logo.png' },
              { name: 'Gabriel Couto', logo: '/images/gabriel-logo.jpeg' },
              { name: 'CEN Power', logo: '/images/cen-logo.jpeg' },
              { name: 'FlatC Marine', logo: '/images/flatc-logo.jpeg' },
              { name: 'Goenergy', logo: '/images/go-energy-logo.jpeg' },
              { name: 'Asante Gold Bibiani Ltd', logo: '/images/asante-gold-logo.jpg' },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 bg-white rounded-xl px-4 py-2"
                style={{ height: 52, minWidth: 110, boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <img src={c.logo} alt={c.name} style={{ maxHeight: 34, maxWidth: 90, objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Jespenel ─────────────────────────────────────────────────────────────

function WhyUs() {
  const features = [
    { icon: '🏅', accent: '#8D054F', bg: '#fdf2f8', title: 'ISO 9001:2015 Certified', body: 'Our quality management system is independently certified, ensuring consistent, reliable, and auditable service delivery on every engagement.' },
    { icon: '♀', accent: '#22C55E', bg: '#f0fdf4', title: 'Women-Led & Indigenous', body: 'Proudly Ghanaian and women-led, we champion gender equality in engineering while delivering world-class services to international standards.' },
    { icon: '⚡', accent: '#F59E0B', bg: '#fffbeb', title: 'Rapid & Responsive', body: 'We understand the urgency of offshore and onshore operations. Our teams mobilise quickly and our processes are built for swift responsiveness.' },
    { icon: '🔒', accent: '#8D054F', bg: '#fdf2f8', title: 'Safety-First Culture', body: 'Every task is planned and executed with safety as the top priority. Our personnel are trained, certified, and equipped to work in demanding environments.' },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="text-center mb-16">
          <Tag color="#8D054F">Why Choose Us</Tag>
          <h2 className="mt-4 font-extrabold text-[38px] text-slate-900 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            The <span style={{ color: '#8D054F' }}>Jespenel</span> Difference
          </h2>
          <p className="mt-4 text-[17px] text-slate-500 max-w-[500px] mx-auto leading-relaxed">
            We combine technical expertise, certified processes, and a genuine commitment to our clients' success.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={f.title} animation="fade-up" delay={i * 80}>
              <div className="group bg-white rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110" style={{ background: f.bg }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{f.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{f.body}</p>
                </div>
                <Link to="/about" className="inline-flex items-center gap-1.5 text-[13px] font-bold mt-auto transition-colors hover:opacity-70" style={{ color: f.accent }}>
                  Learn more <Arrow color={f.accent} size={14} />
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Band ───────────────────────────────────────────────────────────────

function StatsBand() {
  const stats = [
    { val: '12', suffix: '+', label: 'Service Lines', icon: '🔧' },
    { val: '4', suffix: '', label: 'Industry Sectors', icon: '🏭' },
    { val: 'ISO', suffix: '', label: '9001:2015 Certified', icon: '🏅' },
    { val: '100', suffix: '%', label: 'Safety Commitment', icon: '🛡️' },
  ]
  return (
    <section style={{ background: 'linear-gradient(135deg, #8D054F, #a8055e)' }} className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AnimateIn key={s.label} animation="scale-up" delay={i * 100}>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="text-3xl mb-1">{s.icon}</span>
              <p className="font-extrabold leading-none text-white" style={{ fontSize: '48px', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                <CountUp target={s.val} suffix={s.suffix} />
              </p>
              <p className="text-[14px] font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{s.label}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}

// ─── Featured Services ────────────────────────────────────────────────────────

function FeaturedServices() {
  const services = [
    {
      emoji: '🔍', accent: '#8D054F', bg: '#fdf2f8', title: 'Inspection Services',
      body: 'Comprehensive lifting, rigging, and NDT inspection services using state-of-the-art equipment and certified technicians for offshore and onshore assets.',
      items: ['Lifting & Rigging Inspection', 'NDT — VT, MPI, DPI, UT, ECT', 'Above Ground Storage Tank', 'Life Boat & Crane Inspection'],
    },
    {
      emoji: '🔧', accent: '#22C55E', bg: '#f0fdf4', title: 'Fabrication & Welding',
      body: 'High-quality structural welding, custom metal fabrication, and on-site welding services for marine, industrial, and energy applications.',
      items: ['Structural Steel Fabrication', 'Stainless Steel & Aluminium', 'Industrial & Marine Metalwork', 'On-Site Welding Services'],
    },
    {
      emoji: '🛡️', accent: '#F59E0B', bg: '#fffbeb', title: 'Asset Management',
      body: 'Expert corrosion control, protective coatings, UHP water blasting, and tank cleaning to protect and extend the life of your critical assets.',
      items: ['Corrosion Control', 'Blasting & Protective Coating', 'UHP Water Blasting', 'Tank & Vessel Cleaning'],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <Tag color="#22C55E" bg="#f0fdf4">Our Services</Tag>
            <h2 className="mt-4 font-extrabold text-[38px] text-slate-900 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              What We <span style={{ color: '#8D054F' }}>Deliver</span>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-[14px] font-bold transition-colors hover:opacity-70 shrink-0" style={{ color: '#8D054F' }}>
            View all services <Arrow color="#8D054F" />
          </Link>
        </AnimateIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <AnimateIn key={s.title} animation="fade-up" delay={i * 120}>
              <div className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
                style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <div className="h-1.5 transition-all duration-300 group-hover:h-2" style={{ background: s.accent }} />
                <div className="p-8 flex flex-col gap-6 flex-1 bg-white">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110" style={{ background: s.bg }}>{s.emoji}</div>
                  <div>
                    <h3 className="font-bold text-[22px] text-slate-900 mb-3" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.title}</h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed">{s.body}</p>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    {s.items.map(item => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: s.bg }}>
                          <Check color={s.accent} />
                        </div>
                        <span className="text-[14px] text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/services" className="inline-flex items-center gap-2 text-[14px] font-bold mt-auto pt-4 border-t border-slate-100 transition-colors hover:opacity-70" style={{ color: s.accent }}>
                    Explore service <Arrow color={s.accent} size={14} />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Our Work Gallery ─────────────────────────────────────────────────────────

function OurWork() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="text-center mb-14">
          <Tag color="#8D054F">Our Work</Tag>
          <h2 className="mt-4 font-extrabold text-[38px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Engineering in <span style={{ color: '#8D054F' }}>Action</span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-[480px] mx-auto">
            Real work. Real results. Across Ghana's most demanding offshore and onshore environments.
          </p>
        </AnimateIn>

        {/* Top row — 3 equal images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {[
            { label: 'NDT Inspection', src: '/images/work-ndt.jpg' },
            { label: 'Welding & Fabrication', src: '/images/work-welding.jpg' },
            { label: 'Scaffolding & Access', src: '/images/work-scaffolding.jpg' },
          ].map((img, i) => (
            <AnimateIn key={img.label} animation="fade-up" delay={i * 80}>
              <img src={img.src} alt={img.label} style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </AnimateIn>
          ))}
        </div>

        {/* Bottom row — 2 wider images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: 'Protective Coatings & Blasting', src: '/images/work-coatings.jpg' },
            { label: 'Offshore Crew & Operations', src: '/images/work-crew.jpg' },
          ].map((img, i) => (
            <AnimateIn key={img.label} animation="fade-up" delay={i * 100}>
              <img src={img.src} alt={img.label} style={{ aspectRatio: '16/8', width: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="fade-up" className="text-center mt-10">
          <Link to="/industries"
            className="inline-flex items-center gap-2 text-[14px] font-bold transition-colors hover:opacity-70"
            style={{ color: '#8D054F' }}>
            See the industries we serve <Arrow color="#8D054F" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}

// ─── Clients Section ──────────────────────────────────────────────────────────

function Clients() {
  const clients = [
    { name: 'TAQA', sector: 'Oil & Gas', accent: '#8D054F', bg: '#fdf2f8', initial: 'T', logo: '/images/taqa-logo.png' },
    { name: 'WBHO', sector: 'Construction', accent: '#22C55E', bg: '#f0fdf4', initial: 'W', logo: '/images/wbho-logo.jpeg' },
    { name: 'STRABAG SE', sector: 'Engineering', accent: '#F59E0B', bg: '#fffbeb', initial: 'S', logo: '/images/strabag-logo.png' },
    { name: 'Gabriel Couto', sector: 'Infrastructure', accent: '#8D054F', bg: '#fdf2f8', initial: 'G', logo: '/images/gabriel-logo.jpeg' },
    { name: 'CEN Power', sector: 'Power Generation', accent: '#22C55E', bg: '#f0fdf4', initial: 'C', logo: '/images/cen-logo.jpeg' },
    { name: 'FlatC Marine', sector: 'Marine Offshore', accent: '#F59E0B', bg: '#fffbeb', initial: 'F', logo: '/images/flatc-logo.jpeg' },
    { name: 'Goenergy', sector: 'Quality Fuels', accent: '#8D054F', bg: '#fdf2f8', initial: 'G', logo: '/images/go-energy-logo.jpeg' },
    { name: 'Asante Gold Bibiani Ltd', sector: 'Gold Mining', accent: '#F59E0B', bg: '#fffbeb', initial: 'A', logo: '/images/asante-gold-logo.jpg' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="text-center mb-14">
          <Tag color="#F59E0B" bg="#fffbeb">Our Clients</Tag>
          <h2 className="mt-4 font-extrabold text-[38px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Trusted by <span style={{ color: '#F59E0B' }}>Industry Leaders</span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-[480px] mx-auto">
            We are proud to serve some of the most respected names in oil & gas, marine, construction, and energy.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {clients.map((c, i) => (
            <AnimateIn key={c.name} animation="scale-up" delay={i * 60}>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ background: c.logo ? '#fff' : c.accent, border: c.logo ? '1px solid #f1f5f9' : 'none', boxShadow: `0 6px 16px ${c.accent}30` }}>
                  {c.logo
                    ? <img src={c.logo} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />
                    : <span className="font-extrabold text-[22px] text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.initial}</span>
                  }
                </div>
                <div>
                  <p className="font-bold text-[15px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.name}</p>
                  <p className="text-[12px] text-slate-400 mt-0.5">{c.sector}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
          <AnimateIn animation="scale-up" delay={clients.length * 60}>
            <Link to="/contact" className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-center border-2 border-dashed border-slate-200 hover:border-[#8D054F] transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110" style={{ background: '#fdf2f8' }}>🤝</div>
              <p className="font-bold text-[14px] text-slate-400 group-hover:text-[#8D054F] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Your Company</p>
              <p className="text-[12px] text-slate-400">Work with us</p>
            </Link>
          </AnimateIn>
        </div>
        <AnimateIn animation="fade-up" className="text-center">
          <Link to="/industries" className="inline-flex items-center gap-2 text-[14px] font-bold transition-colors hover:opacity-70" style={{ color: '#8D054F' }}>
            Explore the industries we serve <Arrow color="#8D054F" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}

// ─── Philosophy / Mission ─────────────────────────────────────────────────────

function Philosophy() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn animation="scale-up">
          <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row"
            style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' }}>

            {/* Left: image + gradient overlay */}
            <div className="lg:w-2/5 relative overflow-hidden flex flex-col justify-end">
              <img
                src="/images/philosophy.jpg"
                alt="Jespenel team on site"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Gradient overlay for text legibility */}
              <div className="relative z-10 p-10 lg:p-14 flex flex-col gap-5"
                style={{ background: 'linear-gradient(to top, rgba(141,5,79,0.97) 40%, rgba(141,5,79,0.7) 75%, rgba(141,5,79,0.2) 100%)' }}>
                <div className="w-12 h-1 rounded-full" style={{ background: '#FBBF24' }} />
                <h2 className="font-extrabold text-[32px] text-white leading-tight" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                  Our Philosophy
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Quality engineering begins with people — skilled, empowered, and driven by integrity. We are committed to delivering reliable, cost-effective solutions on time, every time.
                </p>
              </div>
            </div>

            {/* Right: mission & vision */}
            <div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center gap-8 bg-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#f0fdf4' }}>🎯</div>
                  <span className="font-bold text-[13px] tracking-widest uppercase" style={{ color: '#22C55E' }}>Mission</span>
                </div>
                <p className="text-[16px] text-slate-700 leading-relaxed">
                  To render high quality services and products that will be appreciated by our consumers through <strong>strict quality control</strong>, timely deliveries and competitive pricing.
                </p>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#fffbeb' }}>🔭</div>
                  <span className="font-bold text-[13px] tracking-widest uppercase" style={{ color: '#F59E0B' }}>Vision</span>
                </div>
                <p className="text-[16px] text-slate-700 leading-relaxed">
                  To gain recognition in the supply chain market and to render <strong>services of excellence with integrity</strong> while maintaining swift responsiveness.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn animation="scale-up">
          <div className="rounded-3xl px-10 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10"
            style={{ background: 'linear-gradient(135deg, #8D054F 0%, #a8055e 100%)', boxShadow: '0 20px 50px rgba(141,5,79,0.25)' }}>
            <div className="flex flex-col gap-4 lg:max-w-[520px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 rounded-full" style={{ background: '#FBBF24' }} />
                <span className="text-[13px] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.7)' }}>Get Started</span>
              </div>
              <h2 className="font-extrabold text-[34px] text-white leading-tight" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Need Offshore or Onshore Engineering Support?
              </h2>
              <p className="text-[16px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Contact our team today for a free quote. We respond within 24 hours and mobilise quickly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] transition-all hover:brightness-110 hover:-translate-y-px"
                style={{ background: '#FBBF24', color: '#7c2d12', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
                Get a Free Quote <Arrow color="#7c2d12" />
              </Link>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[15px] border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                View Services
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <StatsBand />
      <FeaturedServices />
      <OurWork />
      <Clients />
      <Philosophy />
      <CTA />
    </main>
  )
}
