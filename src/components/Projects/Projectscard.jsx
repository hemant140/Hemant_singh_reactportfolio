import { useRef } from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const catLabel = {
  'ai-saas':    { text: 'AI · SaaS',       color: '#00d9ff' },
  'fintech':    { text: 'Fintech',           color: '#00ff88' },
  'mobile-web': { text: 'Mobile · Web',      color: '#a78bfa' },
};

const Projectscard = ({
  title, des, src, href, showGlobeLink, showBookLink, showEsimSouceLink, showahbrndsLink,
  projectLink, projectUrl, tech, category,
}) => {
  const cardRef = useRef(null);

  /* ── 3-D tilt ── */
  const onMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const rx = ((e.clientY - top) / height - 0.5) * -8;
    const ry = ((e.clientX - left) / width - 0.5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  };
  const onLeave = () => {
    const card = cardRef.current;
    if (card) { card.style.transition = 'transform 0.5s ease'; card.style.transform = ''; }
  };
  const onEnter = () => {
    const card = cardRef.current;
    if (card) card.style.transition = 'none';
  };

  const cat = catLabel[category] || catLabel['mobile-web'];

  const links = [
    href             && { href, icon: <BsGithub size={14} />, label: 'GitHub' },
    projectLink      && { href: projectUrl, icon: <FaGlobe size={13} />, label: 'Live' },
    showGlobeLink    && { href: 'https://hemantmoviesflix.netlify.app/', icon: <FaGlobe size={13} />, label: 'Live' },
    showBookLink     && { href: 'https://hemantbooksite.netlify.app/', icon: <FaGlobe size={13} />, label: 'Live' },
    showEsimSouceLink && { href: 'https://esimsource.com', icon: <HiExternalLink size={14} />, label: 'Visit' },
    showahbrndsLink  && { href: 'https://play.google.com/store/apps/details?id=com.ahbrands.app', icon: <FaGlobe size={13} />, label: 'Play' },
  ].filter(Boolean);

  return (
    <div
      ref={cardRef}
      className="terminal-card flex flex-col h-full group"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s ease, border-color 0.4s ease, box-shadow 0.4s ease' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      {/* ── Terminal header bar ── */}
      <div className="terminal-header gap-2">
        <div className="terminal-dot" style={{ background: '#ff5f57' }} />
        <div className="terminal-dot" style={{ background: '#febc2e' }} />
        <div className="terminal-dot" style={{ background: '#28c840' }} />
        <span className="ml-2 font-Orbitron text-[10px] font-semibold tracking-widest"
              style={{ color: 'var(--text-dim)' }}>
          ~/projects/{title.toLowerCase().replace(/\s+/g, '-').slice(0, 18)}
        </span>
        <span
          className="ml-auto text-[9px] font-Outfit font-bold px-2 py-0.5 rounded-full"
          style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40`, color: cat.color }}
        >
          {cat.text}
        </span>
      </div>

      {/* ── Image / Screenshot ── */}
      <div className="relative w-full h-44 overflow-hidden" style={{ background: 'var(--bg)' }}>
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        {/* scan-line shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
             style={{ background: 'linear-gradient(transparent 50%, rgba(0,217,255,0.02) 50%)', backgroundSize: '100% 4px' }} />
        {/* neon bottom edge glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-400 opacity-0 group-hover:opacity-100"
             style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <span className="font-Orbitron text-[9px] tracking-[0.18em] font-semibold"
                  style={{ color: cat.color }}>$ cat project.info</span>
            <h3 className="font-Outfit font-black text-base mt-0.5 leading-tight" style={{ color: 'var(--text)' }}>
              {title}
            </h3>
          </div>
          {/* Link icons */}
          <div className="flex gap-1.5 flex-shrink-0">
            {links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer">
                <span
                  className="w-7 h-7 rounded-lg border inline-flex items-center justify-center transition-all duration-200 cursor-pointer"
                  style={{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--text-dim)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.color = cat.color; e.currentTarget.style.boxShadow = `0 0 10px ${cat.color}30`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.boxShadow = ''; }}
                >
                  {l.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Command line output */}
        <div className="flex-1 mb-4">
          <span className="font-Orbitron text-[9px] tracking-widest" style={{ color: 'var(--primary)', opacity: 0.5 }}>
            &gt;{' '}
          </span>
          <span className="font-Outfit text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            {des}
          </span>
        </div>

        {/* Tech stack badges */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3"
               style={{ borderTop: '1px solid var(--border)' }}>
            {tech.map((t, i) => (
              <span key={i} className="tech-badge" style={{ color: cat.color, borderColor: `${cat.color}30`, background: `${cat.color}0a` }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projectscard;
