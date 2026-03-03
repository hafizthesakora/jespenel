import { useState } from 'react'
import { Link } from 'react-router-dom'

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

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'Civil Engineering',
    accent: '#8D054F',
    bg: '#fdf2f8',
    status: 'Completed',
    statusColor: '#22C55E',
    title: 'Accra–Kumasi Highway Expansion',
    client: 'Ghana Highway Authority',
    location: 'Ashanti Region, Ghana',
    duration: '18 Months',
    value: 'GHS 240M',
    year: '2023',
    description: 'Dual-carriageway expansion of 42.5km including three major bridge structures, full drainage systems, and service roads.',
    tags: ['Roads', 'Bridges', 'Drainage'],
    highlights: ['42.5km of dual carriageway', '3 major bridge structures', 'Zero safety incidents', 'Delivered 3 weeks early'],
  },
  {
    id: 2,
    category: 'Building Construction',
    accent: '#22C55E',
    bg: '#f0fdf4',
    status: 'Completed',
    statusColor: '#22C55E',
    title: 'Goldfields Office Complex',
    client: 'Goldfields Development Ltd',
    location: 'Accra, Ghana',
    duration: '24 Months',
    value: 'GHS 185M',
    year: '2024',
    description: '12-storey Class-A office complex with 4 basement parking levels, retail podium, and rooftop facilities.',
    tags: ['Commercial', 'High-Rise', 'Retail'],
    highlights: ['12-storey office tower', '4-level basement car park', 'LEED Silver certified', 'On time & budget'],
  },
  {
    id: 3,
    category: 'Building Construction',
    accent: '#22C55E',
    bg: '#f0fdf4',
    status: 'Ongoing',
    statusColor: '#F59E0B',
    title: 'Tema Industrial Park Phase 2',
    client: 'GIPC / Industrial Dev. Corp',
    location: 'Tema, Ghana',
    duration: '30 Months',
    value: 'GHS 310M',
    year: '2025',
    description: 'Industrial park expansion featuring 8 factory units, logistics hub, staff amenities, and full infrastructure.',
    tags: ['Industrial', 'Infrastructure'],
    highlights: ['8 factory units', 'Central logistics hub', '64% complete', 'On programme'],
  },
  {
    id: 4,
    category: 'Civil Engineering',
    accent: '#8D054F',
    bg: '#fdf2f8',
    status: 'Completed',
    statusColor: '#22C55E',
    title: 'Kasoa Urban Drainage System',
    client: 'Awutu Senya East Muni. Assembly',
    location: 'Kasoa, Central Region',
    duration: '12 Months',
    value: 'GHS 48M',
    year: '2022',
    description: 'Comprehensive urban drainage upgrade covering 18km of open and closed channels with outfall structures.',
    tags: ['Drainage', 'Urban', 'Hydraulics'],
    highlights: ['18km of drainage channels', 'Flood mitigation for 50,000 residents', '3 major outfall structures', 'Awarded Best Infrastructure Project 2022'],
  },
  {
    id: 5,
    category: 'Building Construction',
    accent: '#22C55E',
    bg: '#f0fdf4',
    status: 'Completed',
    statusColor: '#22C55E',
    title: 'University of Ghana Research Centre',
    client: 'University of Ghana',
    location: 'Legon, Accra',
    duration: '20 Months',
    value: 'GHS 92M',
    year: '2023',
    description: 'State-of-the-art research and innovation centre with specialist laboratories, lecture theatres, and library.',
    tags: ['Institutional', 'Education', 'Labs'],
    highlights: ['12,500m² facility', 'Specialist wet & dry labs', 'Automated building management', 'Below budget delivery'],
  },
  {
    id: 6,
    category: 'Building Construction',
    accent: '#22C55E',
    bg: '#f0fdf4',
    status: 'Ongoing',
    statusColor: '#F59E0B',
    title: 'GreenCity Residential Estate',
    client: 'Prime Properties Group',
    location: 'Adenta, Accra',
    duration: '18 Months',
    value: 'GHS 120M',
    year: '2025',
    description: '150-unit residential estate with community facilities, green spaces, and underground infrastructure.',
    tags: ['Residential', 'Estate', 'Community'],
    highlights: ['150 housing units', 'Underground utilities', '42% complete', 'On track for 2026 handover'],
  },
  {
    id: 7,
    category: 'Project Management',
    accent: '#F59E0B',
    bg: '#fffbeb',
    status: 'Completed',
    statusColor: '#22C55E',
    title: 'Takoradi Port Expansion PM',
    client: 'Ghana Ports & Harbours Authority',
    location: 'Takoradi, Western Region',
    duration: '36 Months',
    value: 'Project Value: GHS 1.2B',
    year: '2022',
    description: 'Full project management and contract administration for a major port expansion including new berths and logistics infrastructure.',
    tags: ['Port', 'PM', 'FIDIC'],
    highlights: ['FIDIC Silver Book contract', 'GHS 1.2B project value managed', 'International contractor co-ordination', '100% of milestones achieved'],
  },
  {
    id: 8,
    category: 'Consulting & Design',
    accent: '#8D054F',
    bg: '#fdf2f8',
    status: 'Completed',
    statusColor: '#22C55E',
    title: 'Kumasi Metropolitan Road EIA',
    client: 'Kumasi Metropolitan Assembly',
    location: 'Kumasi, Ashanti Region',
    duration: '4 Months',
    value: 'Advisory',
    year: '2023',
    description: 'Environmental Impact Assessment for 28km of proposed inner-city road upgrades, securing EPA approval.',
    tags: ['EIA', 'Advisory', 'Roads'],
    highlights: ['28km road network assessed', 'Full EPA approval secured', 'Community consultation programme', 'Stakeholder engagement framework'],
  },
]

const FILTERS = ['All', 'Civil Engineering', 'Building Construction', 'Project Management', 'Consulting & Design']

function StatusBadge({ status, color }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold"
      style={{ color, background: color + '15' }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {status}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' }}>

      {/* Colored top bar */}
      <div className="h-1.5" style={{ background: project.accent }} />

      {/* Visual area */}
      <div className="h-[180px] relative flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${project.accent}12, ${project.accent}05)` }}>

        {/* Abstract project visual */}
        <svg width="100%" height="100%" viewBox="0 0 380 180" fill="none" style={{ position: 'absolute', inset: 0 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`gv${i}`} x1={i * 55} y1="0" x2={i * 55} y2="180" stroke={project.accent + '10'} strokeWidth="1"/>
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={`gh${i}`} x1="0" y1={i * 48} x2="380" y2={i * 48} stroke={project.accent + '10'} strokeWidth="1"/>
          ))}
          {/* Stylised icon based on category */}
          {project.category === 'Civil Engineering' && (
            <>
              <rect x="60" y="110" width="260" height="30" rx="4" fill={project.accent + '20'} stroke={project.accent + '40'} strokeWidth="1.5"/>
              <path d="M80 110 Q190 70 300 110" fill="none" stroke={project.accent + '50'} strokeWidth="2"/>
              <rect x="145" y="70" width="90" height="45" fill="none" stroke={project.accent + '40'} strokeWidth="1.5"/>
              <line x1="155" y1="110" x2="155" y2="70" stroke={project.accent + '40'} strokeWidth="1.5"/>
              <line x1="180" y1="110" x2="180" y2="70" stroke={project.accent + '40'} strokeWidth="1.5"/>
              <line x1="200" y1="110" x2="200" y2="70" stroke={project.accent + '40'} strokeWidth="1.5"/>
              <line x1="225" y1="110" x2="225" y2="70" stroke={project.accent + '40'} strokeWidth="1.5"/>
            </>
          )}
          {project.category === 'Building Construction' && (
            <>
              <rect x="100" y="40" width="80" height="110" rx="3" fill={project.accent + '15'} stroke={project.accent + '40'} strokeWidth="1.5"/>
              <rect x="190" y="70" width="70" height="80" rx="3" fill={project.accent + '10'} stroke={project.accent + '30'} strokeWidth="1.5"/>
              {[55,75,95,110,125].map(y => (
                <rect key={y} x="115" y={y} width="16" height="12" rx="1.5" fill="none" stroke={project.accent + '40'} strokeWidth="1"/>
              ))}
              {[85,105,120].map(y => (
                <rect key={y} x="205" y={y} width="14" height="10" rx="1.5" fill="none" stroke={project.accent + '30'} strokeWidth="1"/>
              ))}
            </>
          )}
          {project.category === 'Project Management' && (
            <>
              {[[60,50,200],[60,80,160],[60,110,220]].map(([x,y,w],i) => (
                <g key={i}>
                  <rect x={x} y={y} width="240" height="18" rx="9" fill={project.accent + '10'}/>
                  <rect x={x} y={y} width={w} height="18" rx="9" fill={project.accent + '30'}/>
                </g>
              ))}
              <text x="60" y="47" fill={project.accent + '80'} fontSize="9">Phase 1</text>
              <text x="60" y="77" fill={project.accent + '80'} fontSize="9">Phase 2</text>
              <text x="60" y="107" fill={project.accent + '80'} fontSize="9">Phase 3</text>
            </>
          )}
          {project.category === 'Consulting & Design' && (
            <>
              <rect x="80" y="40" width="220" height="140" rx="4" fill="none" stroke={project.accent + '25'} strokeWidth="1.5"/>
              {[60,80,100,120,140].map(y => (
                <line key={y} x1="100" y1={y} x2="280" y2={y} stroke={project.accent + '25'} strokeWidth="1"/>
              ))}
              {[100,140,180,220].map(x => (
                <line key={x} x1={x} y1="40" x2={x} y2="180" stroke={project.accent + '25'} strokeWidth="1"/>
              ))}
              <circle cx="140" cy="100" r="30" fill="none" stroke={project.accent + '50'} strokeWidth="2"/>
            </>
          )}
        </svg>

        {/* Category tag */}
        <div className="absolute top-3 left-4">
          <Tag color={project.accent} bg={project.bg}>{project.category.split(' ')[0]}</Tag>
        </div>
        <div className="absolute top-3 right-4">
          <StatusBadge status={project.status} color={project.statusColor} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-bold text-[17px] text-slate-900 leading-snug mb-1" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            {project.title}
          </h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">{project.description}</p>
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Client', project.client],
            ['Location', project.location],
            ['Duration', project.duration],
            ['Value', project.value],
          ].map(([k, v]) => (
            <div key={k} className="p-2.5 rounded-lg" style={{ background: '#f8fafc' }}>
              <p className="text-[10px] text-slate-400 uppercase tracking-wide">{k}</p>
              <p className="text-[12px] font-semibold text-slate-700 mt-0.5 leading-snug">{v}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
              style={{ background: project.bg, color: project.accent }}>
              {t}
            </span>
          ))}
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-500">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === filter)

  return (
    <main>
      {/* Page header */}
      <section className="pt-[72px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-2 text-[13px] text-slate-400">
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Projects</span>
          </div>
          <Tag color="#F59E0B" bg="#fffbeb">Our Work</Tag>
          <h1 className="mt-4 font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Projects That <span style={{ color: '#F59E0B' }}>Define Us</span>
          </h1>
          <p className="mt-4 text-[17px] text-slate-500 max-w-[540px] leading-relaxed">
            A selection of our completed and ongoing engineering and construction projects across West Africa.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Filter row */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className="px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200"
                style={filter === f
                  ? { background: '#8D054F', color: 'white', boxShadow: '0 4px 12px rgba(141,5,79,0.3)' }
                  : { background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>
                {f}
                {f !== 'All' && (
                  <span className="ml-2 text-[11px] opacity-70">
                    ({ALL_PROJECTS.filter(p => p.category === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-[13px] text-slate-400 mb-8">
            Showing <strong className="text-slate-600">{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
            {filter !== 'All' && <> in <strong className="text-slate-600">{filter}</strong></>}
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-[34px] text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Want your project to be <span style={{ color: '#8D054F' }}>next?</span>
          </h2>
          <p className="text-[16px] text-slate-500 mb-8 max-w-[480px] mx-auto">
            Get in touch with our team to discuss your engineering or construction requirements.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 8px 20px rgba(141,5,79,0.25)' }}>
            Start a Conversation <ArrowIcon color="white" />
          </Link>
        </div>
      </section>
    </main>
  )
}
