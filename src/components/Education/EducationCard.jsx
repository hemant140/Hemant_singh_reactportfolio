const EducationCard = ({ title, subTitle, result, des, points, isActive }) => (
  <div className="relative flex gap-6 pb-10 group">
    {/* Dot + line */}
    <div className="flex flex-col items-center flex-shrink-0 mt-1">
      <div className={`timeline-dot ${isActive ? 'timeline-dot-active' : ''} transition-all duration-300`}
           style={!isActive ? { boxShadow: 'none', background: 'var(--primary-30)' } : {}} />
      <div className="w-px flex-1 mt-2 min-h-[40px]"
           style={{ background: 'linear-gradient(to bottom, rgba(37,99,235,0.25), transparent)' }} />
    </div>

    {/* Card */}
    <div
      className={`flex-1 glass-card-new rounded-2xl p-6 transition-all duration-400 ${
        isActive ? '' : 'hover:border-[rgba(0,217,255,0.25)]'
      }`}
      style={isActive ? { borderColor: 'var(--border-bright)', boxShadow: '0 0 30px var(--shadow-lg)' } : {}}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-Outfit font-bold text-lg leading-tight" style={{ color: 'var(--text)' }}>{title}</h3>
            {isActive && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-Outfit font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--green)', border: '1px solid rgba(0,255,136,0.3)' }}>
                <span className="active-indicator" style={{ width: 6, height: 6 }} />
                Active
              </span>
            )}
          </div>
          <p className="font-Outfit font-semibold text-sm" style={{ color: 'var(--primary)', opacity: 0.85 }}>{subTitle}</p>
        </div>
        {result && (
          <span className="flex-shrink-0 text-xs font-Outfit font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={isActive
                  ? { background: 'var(--primary-08)', border: '1px solid var(--primary-30)', color: 'var(--primary)' }
                  : { background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-dim)' }
                }>
            {result}
          </span>
        )}
      </div>

      {des && <p className="font-Outfit text-sm leading-relaxed mt-2" style={{ color: 'var(--text-dim)' }}>{des}</p>}

      {points && points.length > 0 && (
        <ul className="mt-4 space-y-2.5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-Outfit leading-relaxed transition-colors duration-300"
                style={{ color: 'var(--text-dim)' }}>
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: 'var(--primary)', boxShadow: '0 0 6px rgba(37,99,235,0.4)' }} />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default EducationCard;
