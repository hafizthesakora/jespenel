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

const CONTACT_INFO = [
  {
    icon: '📍',
    accent: '#8D054F',
    bg: '#fdf2f8',
    label: 'Head Office',
    value: 'H/No.EP7/1, William Ofori-Atta Road',
    sub: 'Sekondi-Takoradi, Western Region, Ghana',
  },
  {
    icon: '📞',
    accent: '#22C55E',
    bg: '#f0fdf4',
    label: 'Phone',
    value: '+233 59 787 1855',
    sub: 'Mon–Fri · 8:00am – 5:00pm GMT',
  },
  {
    icon: '✉️',
    accent: '#F59E0B',
    bg: '#fffbeb',
    label: 'Email',
    value: 'jespenelghltd@gmail.com',
    sub: 'We respond within 24 hours',
  },
]

const SERVICE_TYPES = [
  'Inspection & NDT',
  'Access Solutions (Scaffolding / Rope Access)',
  'Welding & Fabrication',
  'Lifting & Rigging',
  'Asset Integrity Management',
  'Painting & Protective Coatings',
  'Labour & Manpower Supply',
  'Supply Chain & MRO',
  'Other / Not Sure',
]

const SECTORS = [
  'Oil & Gas',
  'Marine & Offshore',
  'Construction & Infrastructure',
  'Power & Energy',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', sector: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-[15px] text-slate-800 placeholder-slate-400 outline-none transition-all border focus:border-[#8D054F] focus:ring-2 focus:ring-[#8D054F]/10"
  const inputStyle = { border: '1.5px solid #e2e8f0', background: '#fff' }

  return (
    <main>
      {/* Page header */}
      <section className="pt-[72px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-2 text-[13px] text-slate-400">
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Contact</span>
          </div>
          <Tag color="#8D054F">Get in Touch</Tag>
          <h1 className="mt-4 font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Let's Work <span style={{ color: '#8D054F' }}>Together</span>
          </h1>
          <p className="mt-4 text-[17px] text-slate-500 max-w-[540px] leading-relaxed">
            Have a project or operational requirement? Reach out and our team will respond with a tailored proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CONTACT_INFO.map((c, i) => (
            <AnimateIn key={c.label} animation="fade-up" delay={i * 100}>
            <div className="flex items-start gap-4 p-5 rounded-2xl h-full"
              style={{ background: c.bg, border: `1.5px solid ${c.accent}20` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 bg-white"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                {c.icon}
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase mb-1" style={{ color: c.accent }}>{c.label}</p>
                <p className="font-bold text-[14px] text-slate-900">{c.value}</p>
                <p className="text-[12px] text-slate-500 mt-0.5">{c.sub}</p>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Form + side info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-14">

          {/* Form */}
          <div className="flex-1 lg:max-w-[620px]">
            <div className="mb-8">
              <h2 className="font-extrabold text-[28px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Send Us a Message
              </h2>
              <p className="text-[15px] text-slate-500 mt-2">
                Fill in the form and our team will prepare a tailored response within one business day.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: '#f0fdf4', border: '2px solid #22C55E' }}>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-extrabold text-[22px] text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-[15px] text-slate-600">
                  Thank you, <strong>{form.name || 'there'}</strong>! We've received your enquiry and will be in touch within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', service: '', sector: '', message: '' }) }}
                  className="mt-6 px-6 py-3 rounded-xl text-white font-bold text-[14px]"
                  style={{ background: '#22C55E' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required
                      className={inputClass} style={inputStyle} placeholder="e.g. John Mensah" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Company / Organisation</label>
                    <input name="company" value={form.company} onChange={handle}
                      className={inputClass} style={inputStyle} placeholder="e.g. TAQA Ghana" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handle} required
                      className={inputClass} style={inputStyle} placeholder="you@company.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handle}
                      className={inputClass} style={inputStyle} placeholder="+233 xx xxx xxxx" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Service Required</label>
                    <select name="service" value={form.service} onChange={handle}
                      className={inputClass} style={inputStyle}>
                      <option value="">Select a service...</option>
                      {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Industry Sector</label>
                    <select name="sector" value={form.sector} onChange={handle}
                      className={inputClass} style={inputStyle}>
                      <option value="">Select your sector...</option>
                      {SECTORS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-slate-700">Tell Us About Your Requirement *</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5}
                    className={inputClass} style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Briefly describe your project or requirement — location, scope, timeline, and any other key details..." />
                </div>

                <button type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-[16px] w-full mt-2 transition-all hover:brightness-110 hover:-translate-y-px"
                  style={{ background: 'linear-gradient(135deg, #8D054F, #b3066a)', boxShadow: '0 8px 20px rgba(141,5,79,0.3)' }}>
                  Send Enquiry <ArrowIcon color="white" size={18} />
                </button>

                <p className="text-center text-[12px] text-slate-400">
                  By submitting, you agree to our{' '}
                  <Link to="/" className="underline hover:text-slate-600">Privacy Policy</Link>.
                  We never share your data.
                </p>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:w-[340px] flex flex-col gap-7 shrink-0">

            {/* Response promise */}
            <div className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: 'linear-gradient(135deg, #8D054F, #a8055e)', boxShadow: '0 8px 24px rgba(141,5,79,0.2)' }}>
              <div className="text-3xl">⚡</div>
              <h3 className="font-bold text-[18px] text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                We Move Fast
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Every enquiry receives a personal response within 24 hours. For urgent requirements, contact us directly.
              </p>
              <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                {[['📞 Direct Line', '+233 59 787 1855'], ['✉️ Email', 'jespenelghltd@gmail.com']].map(([k, v]) => (
                  <div key={k} className="flex flex-col">
                    <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{k}</span>
                    <span className="text-[13px] font-bold text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[16px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Our Office
              </h3>
              <div className="rounded-xl p-4 flex flex-col gap-2"
                style={{ background: '#fdf2f8', border: '1.5px solid rgba(141,5,79,0.12)' }}>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[14px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Sekondi-Takoradi</p>
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold"
                    style={{ background: 'white', color: '#8D054F' }}>Head Office</span>
                </div>
                <p className="text-[12px] text-slate-600">H/No.EP7/1, William Ofori-Atta Road</p>
                <p className="text-[12px] text-slate-600">Sekondi-Takoradi, Western Region, Ghana</p>
                <p className="text-[12px] font-medium" style={{ color: '#8D054F' }}>+233 59 787 1855</p>
              </div>
            </div>

            {/* Business hours */}
            <div className="rounded-xl p-5" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h3 className="font-bold text-[14px] text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Business Hours
              </h3>
              <div className="flex flex-col gap-2">
                {[['Mon – Fri', '8:00am – 5:00pm'], ['Saturday', '9:00am – 1:00pm'], ['Sunday', 'Closed']].map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-[13px] text-slate-600">{day}</span>
                    <span className="text-[13px] font-semibold text-slate-800">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ISO cert note */}
            <div className="rounded-xl p-4 flex items-center gap-3"
              style={{ background: '#f0fdf4', border: '1.5px solid rgba(34,197,94,0.2)' }}>
              <span className="text-lg">🏅</span>
              <div>
                <p className="text-[12px] font-bold" style={{ color: '#22C55E' }}>ISO 9001:2015 Certified</p>
                <p className="text-[11px] text-slate-500">Cert No. WA25QM81442 · Universal Registrars, London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden h-[280px] relative flex items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #e2e8f0, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            {/* Map grid */}
            <svg width="100%" height="100%" viewBox="0 0 1200 280" fill="none" style={{ position: 'absolute', inset: 0 }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`mv${i}`} x1={i * 64} y1="0" x2={i * 64} y2="280" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`mh${i}`} x1="0" y1={i * 70} x2="1200" y2={i * 70} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
              ))}
              <line x1="0" y1="140" x2="1200" y2="140" stroke="rgba(0,0,0,0.12)" strokeWidth="8"/>
              <line x1="600" y1="0" x2="600" y2="280" stroke="rgba(0,0,0,0.12)" strokeWidth="8"/>
              <line x1="0" y1="70" x2="1200" y2="70" stroke="rgba(0,0,0,0.06)" strokeWidth="4"/>
              <line x1="0" y1="210" x2="1200" y2="210" stroke="rgba(0,0,0,0.06)" strokeWidth="4"/>
              <line x1="300" y1="0" x2="300" y2="280" stroke="rgba(0,0,0,0.06)" strokeWidth="4"/>
              <line x1="900" y1="0" x2="900" y2="280" stroke="rgba(0,0,0,0.06)" strokeWidth="4"/>
              {[[320,80,240,120],[560,20,200,100],[820,170,240,80],[60,160,200,100]].map(([x,y,w,h],i) => (
                <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="rgba(141,5,79,0.05)" stroke="rgba(141,5,79,0.12)" strokeWidth="1"/>
              ))}
              <circle cx="600" cy="140" r="16" fill="#8D054F" opacity="0.9"/>
              <circle cx="600" cy="140" r="6" fill="white"/>
              <circle cx="600" cy="140" r="28" fill="rgba(141,5,79,0.15)" className="animate-ping"/>
            </svg>
            <div className="relative z-10 bg-white rounded-2xl px-6 py-4 text-center"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }}>
              <p className="font-bold text-[14px] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                📍 Jespenel Ghana Ltd — Head Office
              </p>
              <p className="text-[12px] text-slate-500 mt-1">William Ofori-Atta Road, Sekondi-Takoradi, Western Region</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
