import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'

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

const SECTORS = [
  {
    id: 'oil-gas',
    emoji: '🛢️',
    label: 'Oil & Gas',
    accent: '#8D054F',
    bg: '#fdf2f8',
    tagline: 'Upstream, Midstream & Downstream',
    imageHint: 'Offshore platform, drilling rig, pipeline, or oil & gas facility — Jespenel crew at work',
    imageSrc: '/images/industry-oil-gas.png',
    description: 'Operating at the heart of Ghana\'s growing oil & gas sector, we provide critical inspection, access, and fabrication services to upstream producers, midstream operators, and downstream facilities across the Jubilee, TEN, and Sankofa fields and beyond.',
    services: [
      'Non-destructive testing of pipelines & pressure vessels',
      'Offshore platform scaffolding & safe access',
      'Structural steel fabrication & repair',
      'Asset integrity management programmes',
      'Lifting & rigging operations',
      'Painting & corrosion protection systems',
    ],
    clients: ['TAQA', 'Goenergy'],
  },
  {
    id: 'marine',
    emoji: '⚓',
    label: 'Marine & Offshore',
    accent: '#22C55E',
    bg: '#f0fdf4',
    tagline: 'Offshore & Marine Support',
    imageHint: 'Marine vessel, FPSO unit, offshore support ship, or crew at an offshore worksite',
    imageSrc: '/images/industry-marine.png',
    description: 'With Sekondi-Takoradi as our home — Ghana\'s primary offshore logistics hub — we are ideally positioned to support marine vessels, FPSO units, and offshore infrastructure with fast, reliable engineering services.',
    services: [
      'Marine vessel inspection & structural assessment',
      'FPSO & offshore structure access solutions',
      'Subsea & above-water welding support',
      'Marine coating & corrosion control',
      'Rope access for at-height marine work',
      'Labour supply for offshore rotations',
    ],
    clients: ['FlatC Marine'],
  },
  {
    id: 'construction',
    emoji: '🏗️',
    label: 'Construction & Infrastructure',
    accent: '#F59E0B',
    bg: '#fffbeb',
    tagline: 'Civil & Industrial Construction',
    imageHint: 'Construction site, structural steel erection, scaffolding, or heavy equipment at a Jespenel job site',
    imageSrc: '/images/industry-construction.png',
    description: 'Supporting major construction contractors operating across Ghana and West Africa, we provide welding, inspection, access, and specialist labour services for large-scale civil, industrial, and infrastructure projects.',
    services: [
      'Structural steel fabrication & erection',
      'Construction site scaffolding & access',
      'Weld inspection & quality assurance',
      'Labour supply for civil & industrial projects',
      'Construction materials & consumables supply',
      'Heavy lift rigging & crane coordination',
    ],
    clients: ['WBHO', 'STRABAG SE', 'Gabriel Couto'],
  },
  {
    id: 'power',
    emoji: '⚡',
    label: 'Power & Energy',
    accent: '#8D054F',
    bg: '#fdf2f8',
    tagline: 'Power Generation & Utilities',
    imageHint: 'Power plant, turbines, boiler systems, or energy infrastructure — inspection or maintenance crew at work',
    imageSrc: '/images/industry-power.png',
    description: 'From thermal power plants to emerging renewable energy installations, we provide the inspection, fabrication, and access expertise that keeps Ghana\'s power infrastructure operating safely and reliably — minimising downtime and maximising asset life.',
    services: [
      'NDT inspection of turbines, boilers & pressure systems',
      'Power plant scaffolding & confined space access',
      'Pipe welding & pressure system fabrication',
      'Asset integrity & maintenance programmes',
      'Protective coating application',
      'Qualified maintenance labour supply',
    ],
    clients: ['CEN Power'],
  },
]

const ALL_CLIENTS = [
  { name: 'TAQA', sector: 'Oil & Gas', initials: 'TQ', accent: '#8D054F', bg: '#fdf2f8', logo: '/images/taqa-logo.png' },
  { name: 'WBHO', sector: 'Construction', initials: 'WB', accent: '#F59E0B', bg: '#fffbeb', logo: '/images/wbho-logo.jpeg' },
  { name: 'STRABAG SE', sector: 'Construction', initials: 'ST', accent: '#F59E0B', bg: '#fffbeb', logo: '/images/strabag-logo.png' },
  { name: 'Gabriel Couto', sector: 'Construction', initials: 'GC', accent: '#22C55E', bg: '#f0fdf4', logo: '/images/gabriel-logo.jpeg' },
  { name: 'CEN Power', sector: 'Power & Energy', initials: 'CP', accent: '#8D054F', bg: '#fdf2f8', logo: '/images/cen-logo.jpeg' },
  { name: 'FlatC Marine', sector: 'Marine', initials: 'FM', accent: '#22C55E', bg: '#f0fdf4', logo: '/images/flatc-logo.jpeg' },
  { name: 'Goenergy', sector: 'Oil & Gas', initials: 'GE', accent: '#8D054F', bg: '#fdf2f8', logo: '/images/go-energy-logo.jpeg' },
]

function SectorCard({ sector, reverse }) {
  return (
    <section className="py-20" style={{ background: reverse ? '#f8fafc' : 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Sector image banner */}
        <img
          src={sector.imageSrc}
          alt={sector.label}
          className="w-full mb-12 rounded-3xl"
          style={{ height: 260, objectFit: 'cover' }}
        />

        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-14 items-start`}>

          {/* Text side */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                style={{ background: sector.bg, border: `2px solid ${sector.accent}20` }}>
                {sector.emoji}
              </div>
              <div>
                <Tag color={sector.accent} bg={sector.bg}>{sector.tagline}</Tag>
                <h2 className="mt-1.5 font-extrabold text-[30px] text-slate-900 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                  {sector.label}
                </h2>
              </div>
            </div>

            <p className="text-[16px] text-slate-500 leading-relaxed">{sector.description}</p>

            <div className="flex flex-col gap-2.5">
              {sector.services.map(s => (
                <div key={s} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: sector.bg }}>
                    <CheckIcon color={sector.accent} />
                  </div>
                  <span className="text-[14px] text-slate-600">{s}</span>
                </div>
              ))}
            </div>

            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-[14px] w-fit transition-all hover:brightness-110"
              style={{ background: `linear-gradient(135deg, ${sector.accent}, ${sector.accent}cc)`, boxShadow: `0 6px 16px ${sector.accent}30` }}>
              Discuss a Project <ArrowIcon color="white" size={14} />
            </Link>
          </div>

          {/* Clients side */}
          {sector.clients.length > 0 && (
            <div className="lg:w-[340px] shrink-0">
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-6"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' }}>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase mb-1" style={{ color: 'rgba(0,0,0,0.35)' }}>
                    Clients in this sector
                  </p>
                  <p className="text-[13px] text-slate-400">Companies Jespenel has served</p>
                </div>
                <div className="flex flex-col gap-3">
                  {sector.clients.map(client => {
                    const info = ALL_CLIENTS.find(c => c.name === client)
                    return (
                      <div key={client} className="flex items-center gap-4 p-4 rounded-xl"
                        style={{ background: info?.bg || '#f8fafc', border: `1.5px solid ${info?.accent || '#e2e8f0'}15` }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
                          style={{ background: info?.logo ? '#fff' : (info?.accent || '#8D054F'), border: info?.logo ? '1px solid #f1f5f9' : 'none' }}>
                          {info?.logo
                            ? <img src={info.logo} alt={client} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                            : <span className="font-extrabold text-[13px] text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{info?.initials || client.slice(0, 2)}</span>
                          }
                        </div>
                        <div>
                          <p className="font-bold text-[15px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{client}</p>
                          <p className="text-[12px] text-slate-400">{info?.sector || sector.label}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link to="/contact"
                    className="text-[13px] font-bold transition-colors hover:opacity-70 flex items-center gap-1.5"
                    style={{ color: sector.accent }}>
                    Work with us in {sector.label} <ArrowIcon color={sector.accent} size={13} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function AllClients() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Tag color="#8D054F">Trusted By</Tag>
          <h2 className="mt-4 font-extrabold text-[36px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Clients We've <span style={{ color: '#8D054F' }}>Served</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-500 max-w-[500px] mx-auto">
            From international oil majors to regional construction leaders — Jespenel Ghana Ltd is trusted by organisations that demand quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {ALL_CLIENTS.map((c, i) => (
            <AnimateIn key={c.name} animation="scale-up" delay={i * 60}>
            <div className="group bg-white rounded-2xl p-6 flex flex-col items-center gap-4 text-center transition-all duration-300 hover:-translate-y-1 h-full"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{ background: c.logo ? '#fff' : `linear-gradient(135deg, ${c.accent}, ${c.accent}bb)`, border: c.logo ? '1px solid #f1f5f9' : 'none' }}>
                {c.logo
                  ? <img src={c.logo} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />
                  : <span className="font-extrabold text-[18px] text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.initials}</span>
                }
              </div>
              <div>
                <p className="font-bold text-[15px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.name}</p>
                <span className="inline-block mt-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold"
                  style={{ background: c.bg, color: c.accent }}>
                  {c.sector}
                </span>
              </div>
            </div>
            </AnimateIn>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-[#8D054F] to-[#b3066a] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center"
            style={{ boxShadow: '0 8px 20px rgba(141,5,79,0.2)' }}>
            <p className="font-bold text-[15px] text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              Your Company
            </p>
            <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Join our growing client base
            </p>
            <Link to="/contact"
              className="mt-1 px-4 py-2 rounded-lg bg-white text-[12px] font-bold transition-all hover:bg-slate-50"
              style={{ color: '#8D054F' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Industries() {
  return (
    <main>
      {/* Page header */}
      <section className="pt-[72px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-2 text-[13px] text-slate-400">
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Industries</span>
          </div>
          <Tag color="#F59E0B" bg="#fffbeb">Industries We Serve</Tag>
          <h1 className="mt-4 font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Proven Expertise Across <span style={{ color: '#F59E0B' }}>Key Sectors</span>
          </h1>
          <p className="mt-4 text-[17px] text-slate-500 max-w-[560px] leading-relaxed">
            Jespenel Ghana Ltd delivers specialist engineering services to the oil & gas, marine, construction, and power sectors — serving some of West Africa's most demanding operators.
          </p>

          {/* Sector quick links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {SECTORS.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all hover:-translate-y-px"
                style={{ background: s.bg, color: s.accent, border: `1.5px solid ${s.accent}20` }}>
                {s.emoji} {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sector sections */}
      {SECTORS.map((sector, i) => (
        <div key={sector.id} id={sector.id} className="scroll-mt-20">
          <SectorCard sector={sector} reverse={i % 2 !== 0} />
        </div>
      ))}

      {/* All clients */}
      <AllClients />

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-[34px] text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Operating in one of these <span style={{ color: '#8D054F' }}>sectors?</span>
          </h2>
          <p className="text-[16px] text-slate-500 mb-8 max-w-[480px] mx-auto">
            Tell us about your next project and we'll show you how Jespenel Ghana Ltd can support your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 8px 20px rgba(141,5,79,0.25)' }}>
              Start a Conversation <ArrowIcon color="white" />
            </Link>
            <Link to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] border-2 transition-all hover:bg-white"
              style={{ borderColor: '#e2e8f0', color: '#475569' }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
