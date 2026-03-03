export default function ImagePlaceholder({ label, hint, className = '', style = {} }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl flex flex-col items-center justify-center gap-3 ${className}`}
      style={{
        background: 'linear-gradient(145deg, #0d1520 0%, #1a2540 55%, #0a1020 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
        ...style,
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }} />

      {/* Corner brackets */}
      <div style={{ position: 'absolute', top: 14, left: 14, width: 22, height: 22, borderTop: '2px solid rgba(141,5,79,0.45)', borderLeft: '2px solid rgba(141,5,79,0.45)', borderRadius: '2px 0 0 0' }} />
      <div style={{ position: 'absolute', top: 14, right: 14, width: 22, height: 22, borderTop: '2px solid rgba(141,5,79,0.45)', borderRight: '2px solid rgba(141,5,79,0.45)', borderRadius: '0 2px 0 0' }} />
      <div style={{ position: 'absolute', bottom: 14, left: 14, width: 22, height: 22, borderBottom: '2px solid rgba(34,197,94,0.35)', borderLeft: '2px solid rgba(34,197,94,0.35)', borderRadius: '0 0 0 2px' }} />
      <div style={{ position: 'absolute', bottom: 14, right: 14, width: 22, height: 22, borderBottom: '2px solid rgba(34,197,94,0.35)', borderRight: '2px solid rgba(34,197,94,0.35)', borderRadius: '0 0 2px 0' }} />

      {/* Icon */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="13" rx="2" />
            <circle cx="12" cy="14.5" r="3" />
            <path d="M9 8l1.5-3h3L15 8" />
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</p>
          {hint && <p className="text-[11px] mt-1 leading-relaxed" style={{ color: 'rgba(255,255,255,0.18)', maxWidth: 220 }}>{hint}</p>}
        </div>
      </div>
    </div>
  )
}
