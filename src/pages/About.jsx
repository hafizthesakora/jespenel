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

function CheckIcon({ color = '#22C55E' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8l4 4 7-8" />
    </svg>
  )
}

function ArrowIcon({ color = 'currentColor', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8h12M8 4l4 4-4 4" />
    </svg>
  )
}

function PageHeader() {
  return (
    <section className="pt-[72px] bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-center gap-2 mb-2 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600">About Us</span>
        </div>
        <Tag color="#8D054F">About Us</Tag>
        <h1 className="mt-4 font-extrabold leading-tight text-slate-900 max-w-[600px]"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
          Proudly <span style={{ color: '#8D054F' }}>Indigenous.</span>{' '}
          Proudly <span style={{ color: '#22C55E' }}>Women-Led.</span>
        </h1>
        <p className="mt-4 text-[17px] text-slate-500 max-w-[540px] leading-relaxed">
          A Ghanaian engineering services company delivering world-class inspection, fabrication, and offshore support across West Africa's energy, marine, and construction sectors.
        </p>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">

        {/* Visual */}
        <AnimateIn animation="slide-left" className="flex-1 relative">
          <img
            src="/images/about-page-image.jpg"
            alt="Jespenel crew at work"
            style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '1rem' }}
          />

          {/* Accent shapes */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #8D054F, #c2075f)', zIndex: -1 }} />
          <div className="absolute -top-4 -left-4 w-14 h-14 rounded-xl" style={{ background: '#fffbeb', border: '3px solid #F59E0B', zIndex: -1 }} />

          {/* ISO badge */}
          <div className="float-badge absolute top-4 right-4 bg-white rounded-2xl px-4 py-3"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }}>
            <p className="font-extrabold text-[12px] leading-none" style={{ color: '#22C55E', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              ✓ ISO 9001:2015
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Quality Certified</p>
          </div>

          {/* Women-Led badge */}
          <div className="float-badge-slow absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9' }}>
            <p className="font-bold text-[11px]" style={{ color: '#8D054F' }}>♀ Women-Led</p>
            <p className="text-[10px] text-slate-400">Indigenous Ghanaian</p>
          </div>
        </AnimateIn>

        {/* Text */}
        <AnimateIn animation="slide-right" className="flex-1 flex flex-col gap-8">
          <div>
            <Tag color="#8D054F">Our Story</Tag>
            <h2 className="mt-4 font-extrabold text-[34px] text-slate-900 leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              Built on <span style={{ color: '#8D054F' }}>Integrity</span>, Driven by <span style={{ color: '#22C55E' }}>Excellence</span>
            </h2>
            <p className="text-[16px] text-slate-500 leading-relaxed mb-4">
              Jespenel Ghana Ltd is a proudly indigenous, women-led engineering services company based in Sekondi-Takoradi — the heart of Ghana's oil & gas industry. We deliver specialised inspection, fabrication, access, and offshore support services to the energy, marine, construction, and power sectors across West Africa.
            </p>
            <p className="text-[16px] text-slate-500 leading-relaxed">
              Certified to ISO 9001:2015, we bring deep technical expertise, qualified field operatives, and a genuine commitment to doing the job right — every time. Our company is a testament to what indigenous Ghanaian enterprise can achieve in one of the world's most demanding industries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ['ISO 9001:2015 Certified', '#22C55E', '#f0fdf4'],
              ['Women-Led Organisation', '#8D054F', '#fdf2f8'],
              ['Indigenous Ghanaian Company', '#F59E0B', '#fffbeb'],
              ['Zero Compromise on Safety', '#8D054F', '#fdf2f8'],
            ].map(([label, color, bg]) => (
              <div key={label} className="flex items-center gap-2.5 p-3.5 rounded-xl" style={{ background: bg }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  <CheckIcon color={color} />
                </div>
                <span className="text-[13px] font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white rounded-3xl p-10 flex flex-col gap-5"
            style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: '#fdf2f8' }}>
              🎯
            </div>
            <div>
              <Tag color="#8D054F">Mission</Tag>
              <h3 className="mt-3 font-extrabold text-[22px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Our Mission
              </h3>
            </div>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              To provide superior quality engineering services — including inspection, access solutions, fabrication, and asset management — that keep our clients' operations safe, compliant, and efficient. We are committed to delivering value through technical excellence, qualified personnel, and a relentless focus on safety and integrity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-10 flex flex-col gap-5"
            style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: '#f0fdf4' }}>
              🌍
            </div>
            <div>
              <Tag color="#22C55E" bg="#f0fdf4">Vision</Tag>
              <h3 className="mt-3 font-extrabold text-[22px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Our Vision
              </h3>
            </div>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              To be the foremost indigenous engineering services company in West Africa — known for technical excellence, safety leadership, and our unwavering commitment to Ghanaian enterprise. We aspire to grow a company that creates opportunity, builds local capacity, and sets a new standard for what indigenous businesses can achieve in the oil & gas sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Values() {
  const vals = [
    { icon: '🤝', accent: '#8D054F', bg: '#fdf2f8', title: 'Integrity', body: 'We operate with full transparency in all dealings — with clients, regulatory bodies, and the communities we serve in Ghana\'s Western Region.' },
    { icon: '🏆', accent: '#22C55E', bg: '#f0fdf4', title: 'Excellence', body: 'ISO 9001:2015 certified, we set and maintain the highest quality standards across every inspection, fabrication, and access assignment.' },
    { icon: '🦺', accent: '#F59E0B', bg: '#fffbeb', title: 'Safety First', body: 'Safety is non-negotiable. Our HSE culture protects our people, our clients\' assets, and the environment on every job site.' },
    { icon: '🌿', accent: '#22C55E', bg: '#f0fdf4', title: 'Local Impact', body: 'As an indigenous company, we invest in local talent and communities — building Ghana\'s engineering capacity for generations to come.' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Tag color="#22C55E" bg="#f0fdf4">Our Values</Tag>
          <h2 className="mt-4 font-extrabold text-[36px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            What We <span style={{ color: '#22C55E' }}>Stand For</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vals.map(v => (
            <div key={v.title} className="bg-white rounded-2xl p-8 flex flex-col gap-4 text-center"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto"
                style={{ background: v.bg }}>
                {v.icon}
              </div>
              <h3 className="font-bold text-[18px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{v.title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { num: '12', suffix: '+', label: 'Service Lines' },
    { num: '4', suffix: '', label: 'Industry Sectors' },
    { num: '7', suffix: '+', label: 'Key Clients' },
    { num: '100', suffix: '%', label: 'Safety Record' },
  ]

  return (
    <section style={{ background: 'linear-gradient(135deg, #8D054F, #a8055e)' }} className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AnimateIn key={s.label} animation="scale-up" delay={i * 100}>
            <div className="flex flex-col items-center text-center gap-2">
              <p className="font-extrabold text-white leading-none" style={{ fontSize: '52px', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                <CountUp target={s.num} suffix={s.suffix} />
              </p>
              <p className="text-[14px] font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{s.label}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Tag color="#8D054F">Accreditations</Tag>
          <h2 className="mt-4 font-extrabold text-[34px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Certified to the Highest <span style={{ color: '#8D054F' }}>Standards</span>
          </h2>
        </div>

        {/* ISO cert — featured */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '2px solid rgba(34,197,94,0.2)' }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#f0fdf4' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v5c0 6.6 4.3 12.8 9 14.5C17.7 24.8 21 18.6 21 12V7L12 2z"/>
              <path d="M7 12l3.5 3.5 6.5-7"/>
            </svg>
          </div>
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold mb-2" style={{ background: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
              ✓ ACTIVE CERTIFICATION
            </span>
            <h3 className="font-extrabold text-[20px] text-slate-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>ISO 9001:2015</h3>
            <p className="text-[14px] text-slate-500 mb-2">Quality Management System</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-400">
              <span>Certificate No. <strong className="text-slate-600">WA25QM81442</strong></span>
              <span>Certified by <strong className="text-slate-600">Universal Registrars, London</strong></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {[
            { icon: '🇬🇭', title: 'Locally Incorporated', desc: 'Registered Ghanaian company compliant with the Companies Act, 2019' },
            { icon: '🦺', title: 'HSE Management', desc: 'Formal Health, Safety & Environment policy applied across all operations' },
            { icon: '🔧', title: 'Qualified Workforce', desc: 'Verified competency records for all technical and field personnel' },
          ].map(c => (
            <div key={c.title} className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 text-center"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
              <div className="text-2xl">{c.icon}</div>
              <p className="font-bold text-[14px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.title}</p>
              <p className="text-[12px] text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-extrabold text-[34px] text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
          Ready to work with <span style={{ color: '#8D054F' }}>Jespenel?</span>
        </h2>
        <p className="text-[16px] text-slate-500 mb-8 max-w-[480px] mx-auto">
          Contact us today to discuss your inspection, fabrication, or offshore services requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 8px 20px rgba(141,5,79,0.25)' }}>
            Get in Touch
            <ArrowIcon color="white" />
          </Link>
          <Link to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] border-2 transition-all hover:bg-slate-50"
            style={{ borderColor: '#e2e8f0', color: '#475569' }}>
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main>
      <PageHeader />
      <Story />
      <MissionVision />
      <Values />
      <Stats />
      <Certifications />
      <CTA />
    </main>
  )
}
