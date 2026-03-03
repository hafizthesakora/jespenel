import { useState } from 'react'
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

function ArrowIcon({ color = 'currentColor', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8h12M8 4l4 4-4 4" />
    </svg>
  )
}

function CheckIcon({ color = '#22C55E' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8l4 4 7-8" />
    </svg>
  )
}

const CATEGORIES = [
  {
    id: 'inspection',
    label: 'Inspection & NDT',
    emoji: '🔬',
    accent: '#8D054F',
    bg: '#fdf2f8',
    tagline: 'Detect. Assess. Certify.',
    description: 'Our qualified NDT inspectors use industry-leading techniques to assess material integrity, identify defects, and ensure compliance across oil & gas, marine, and industrial assets.',
    services: [
      {
        title: 'Non-Destructive Testing',
        duration: 'Per inspection schedule',
        items: ['Radiographic Testing (RT)', 'Ultrasonic Testing (UT)', 'Magnetic Particle Testing (MPT)', 'Liquid Penetrant Testing (LPT)'],
      },
      {
        title: 'Visual & Dimensional Inspection',
        duration: 'Ongoing / per schedule',
        items: ['Visual weld inspection', 'Dimensional verification', 'Surface condition assessment', 'Corrosion mapping'],
      },
      {
        title: 'Structural Integrity Assessment',
        duration: 'Project-based',
        items: ['Above-water structure inspection', 'Pipeline & vessel inspection', 'Tank floor & shell inspection', 'Fitness-for-service evaluation'],
      },
      {
        title: 'Inspection Reporting',
        duration: 'Per inspection cycle',
        items: ['Detailed inspection reports', 'Defect categorisation', 'Regulatory compliance documentation', 'Asset condition registers'],
      },
    ],
  },
  {
    id: 'access',
    label: 'Access Solutions & Lifting',
    emoji: '🏗️',
    accent: '#22C55E',
    bg: '#f0fdf4',
    tagline: 'Safe access. Every time.',
    description: 'We design and erect safe access systems for complex industrial environments — from offshore platforms to onshore refineries — ensuring compliance and work-at-height safety.',
    services: [
      {
        title: 'Scaffolding Services',
        duration: 'Per project',
        items: ['Conventional tube & fitting scaffolding', 'System scaffolding (modular)', 'Offshore & marine scaffolding', 'Scaffold inspection & certification'],
      },
      {
        title: 'Rope Access',
        duration: 'As required',
        items: ['IRATA-compliant rope access', 'At-height inspection & maintenance', 'Confined space rope access', 'Paint & coating access support'],
      },
      {
        title: 'Rigging & Lifting Operations',
        duration: 'Per lift',
        items: ['Lift plan preparation & review', 'Crane selection & coordination', 'Rigging equipment supply', 'Lifting supervisor services'],
      },
      {
        title: 'Access Platform Installation',
        duration: 'Project-based',
        items: ['Temporary access platforms', 'Work staging & shoring', 'Safety netting & edge protection', 'Fall protection systems'],
      },
    ],
  },
  {
    id: 'welding',
    label: 'Welding & Fabrication',
    emoji: '⚙️',
    accent: '#F59E0B',
    bg: '#fffbeb',
    tagline: 'Precision. Strength. Quality.',
    description: 'Our certified welders and fabricators handle structural, mechanical, and piping works for onshore and offshore applications, with full quality management and weld certification.',
    services: [
      {
        title: 'Structural Steel Fabrication',
        duration: 'Project-based',
        items: ['Steel frame & module fabrication', 'Platform grating & handrails', 'Skid & equipment base fabrication', 'Offshore structure components'],
      },
      {
        title: 'Pipe Welding & Fitting',
        duration: 'Project-based',
        items: ['Carbon & stainless steel pipe welding', 'High-pressure pipe systems', 'Flange & fitting installation', 'Pipe spool fabrication'],
      },
      {
        title: 'Offshore Structure Fabrication',
        duration: 'Project-based',
        items: ['Marine structure repair welding', 'Jacket & topside components', 'Subsea structure fabrication', 'Riser & conductor welding'],
      },
      {
        title: 'Weld Quality & Certification',
        duration: 'Per project',
        items: ['Weld Procedure Specification (WPS)', 'Procedure Qualification Records (PQR)', 'Welder qualification testing', 'Third-party weld certification'],
      },
    ],
  },
  {
    id: 'supply',
    label: 'Asset Management & Supply',
    emoji: '📦',
    accent: '#8D054F',
    bg: '#fdf2f8',
    tagline: 'Reliability. Readiness. Results.',
    description: 'From asset integrity programmes and protective coatings to labour supply and MRO procurement, we keep your operations staffed, protected, and running without interruption.',
    services: [
      {
        title: 'Asset Integrity Management',
        duration: 'Ongoing contract',
        items: ['Inspection & maintenance planning', 'Corrosion management programmes', 'Risk-based inspection (RBI)', 'Asset condition monitoring'],
      },
      {
        title: 'Painting & Protective Coatings',
        duration: 'Project-based',
        items: ['Surface preparation (blast cleaning)', 'Marine & offshore coating systems', 'Anti-corrosion protective coatings', 'Coating inspection & DFT testing'],
      },
      {
        title: 'Labour & Manpower Supply',
        duration: 'Short or long-term',
        items: ['Skilled tradespeople (welders, riggers, inspectors)', 'Semi-skilled site operatives', 'Offshore & onshore deployment', 'Verified competency records'],
      },
      {
        title: 'Supply Chain & MRO',
        duration: 'On demand',
        items: ['PPE & safety equipment supply', 'Welding consumables & materials', 'Inspection tools & equipment', 'Spare parts & MRO procurement'],
      },
    ],
  },
]

function CategorySection({ cat }) {
  return (
    <section id={cat.id} className="py-20 scroll-mt-20"
      style={{ background: cat.id === 'access' || cat.id === 'supply' ? '#f8fafc' : 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Category header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: cat.bg, border: `2px solid ${cat.accent}20` }}>
              {cat.emoji}
            </div>
            <div>
              <Tag color={cat.accent} bg={cat.bg}>{cat.tagline}</Tag>
              <h2 className="mt-2 font-extrabold text-[28px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                {cat.label}
              </h2>
            </div>
          </div>
          <p className="text-[15px] text-slate-500 max-w-[420px] leading-relaxed">{cat.description}</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cat.services.map((s, i) => (
            <AnimateIn key={s.title} animation="fade-up" delay={i * 80}>
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 h-full"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
              <div className="h-1.5 w-full" style={{ background: cat.accent }} />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-bold text-[16px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.title}</h3>
                <div className="flex items-center gap-1.5 text-[12px] text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="6" cy="6" r="4.5"/><path d="M6 3.5v2.5l1.5 1.5"/>
                  </svg>
                  {s.duration}
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: cat.bg }}>
                        <CheckIcon color={cat.accent} />
                      </div>
                      <span className="text-[13px] text-slate-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold mt-auto pt-4 border-t border-slate-100 transition-colors hover:opacity-70"
                  style={{ color: cat.accent }}>
                  Enquire <ArrowIcon color={cat.accent} size={14} />
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

export default function Services() {
  const [activeTab, setActiveTab] = useState('inspection')

  return (
    <main>
      {/* Page header */}
      <section className="pt-[72px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-2 text-[13px] text-slate-400">
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
          </div>
          <Tag color="#22C55E" bg="#f0fdf4">What We Do</Tag>
          <h1 className="mt-4 font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Specialist Engineering <span style={{ color: '#22C55E' }}>Services</span>
          </h1>
          <p className="mt-4 text-[17px] text-slate-500 max-w-[540px] leading-relaxed">
            From NDT inspection and offshore access to welding, fabrication, and asset integrity — Jespenel Ghana Ltd delivers the full spectrum of technical engineering services.
          </p>
        </div>

        {/* Sticky category tabs */}
        <div className="border-t border-slate-200 bg-white sticky top-[72px] z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1">
              {CATEGORIES.map(c => (
                <a key={c.id} href={`#${c.id}`}
                  onClick={() => setActiveTab(c.id)}
                  className="flex items-center gap-2 px-5 py-4 text-[14px] font-semibold whitespace-nowrap transition-all duration-200 border-b-2"
                  style={{
                    borderColor: activeTab === c.id ? c.accent : 'transparent',
                    color: activeTab === c.id ? c.accent : '#64748b',
                  }}>
                  <span>{c.emoji}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {CATEGORIES.map(cat => <CategorySection key={cat.id} cat={cat} />)}

      {/* CTA */}
      <section className="py-20" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-[34px] text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Don't see what you need? <span style={{ color: '#8D054F' }}>Let's talk.</span>
          </h2>
          <p className="text-[16px] text-slate-500 mb-8 max-w-[480px] mx-auto">
            Our team handles bespoke engineering challenges. Get in touch and we'll find the right solution for your project.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 8px 20px rgba(141,5,79,0.25)' }}>
            Contact Our Team <ArrowIcon color="white" />
          </Link>
        </div>
      </section>
    </main>
  )
}
