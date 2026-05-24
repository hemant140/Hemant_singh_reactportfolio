import { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Link } from "react-scroll";
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (top / max) * 100 : 0);
      setScrolled(top > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 1, link: 'home',       label: 'Home'     },
    { id: 2, link: 'about',      label: 'About'    },
    { id: 3, link: 'experience', label: 'Resume'   },
    { id: 4, link: 'skills',     label: 'Skills'   },
    { id: 5, link: 'project',    label: 'Projects' },
    { id: 6, link: 'contact',    label: 'Contact'  },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.25)]' : ''}`}
        style={{ height: 72 }}
      >
        {/* Gradient accent line at very top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, var(--primary), var(--accent), var(--green))',
          opacity: scrolled ? 1 : 0.5,
          transition: 'opacity 0.5s ease',
        }} />

        <div className="flex items-center justify-between h-full px-6 md:px-10">

          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer flex items-center gap-3 group flex-shrink-0">
            <div
              className="group-hover:scale-110"
              style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 18px rgba(37,99,235,0.35)',
                fontFamily: 'Orbitron', fontWeight: 900, color: 'white',
                fontSize: 13, letterSpacing: '0.05em',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                flexShrink: 0,
              }}
            >
              HS
            </div>
            <div className="hidden sm:block">
              <p className="font-Orbitron font-bold text-base tracking-wide leading-tight">
                <span style={{ color: 'var(--primary)' }}>Hemant</span>
                <span style={{ color: 'var(--text-dim)' }}> Singh</span>
              </p>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1 }}>
                Sr. Software Engineer
              </p>
            </div>
          </Link>

          {/* Desktop nav — links inside a pill container */}
          <ul
            className="hidden md:flex items-center gap-0.5 p-1.5 rounded-2xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: '0 2px 14px var(--shadow)',
            }}
          >
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link} smooth duration={600} offset={-80}
                  spy activeClass="nav-pill-active"
                  className="nav-pill cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <HiOutlineMoon size={17} /> : <HiOutlineSun size={18} />}
            </button>
            <a href="Hemant_Singh_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary text-sm py-2 px-5 rounded-lg">
                <span>Hire Me ↗</span>
              </button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden p-2 z-50 rounded-xl transition-all duration-300"
            style={{
              color: 'var(--text-dim)',
              background: nav ? 'var(--primary-08)' : 'transparent',
              border: `1px solid ${nav ? 'var(--border)' : 'transparent'}`,
            }}
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile — dark backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-400 ${nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
        onClick={() => setNav(false)}
      />

      {/* Mobile drawer — slides in from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden mobile-drawer ${nav ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: 'var(--bg-card)',
          borderLeft: '1px solid var(--border)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Drawer header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(135deg, var(--primary-04), transparent)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Orbitron', fontWeight: 900, color: 'white', fontSize: 12,
              boxShadow: '0 0 14px rgba(37,99,235,0.3)',
            }}>
              HS
            </div>
            <div>
              <p style={{ fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.875rem', color: 'var(--primary)' }}>Hemant Singh</p>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Navigation</p>
            </div>
          </div>
          <button
            onClick={() => setNav(false)}
            style={{
              color: 'var(--text-dim)', padding: 6, borderRadius: 8,
              transition: 'all 0.2s ease', background: 'transparent', border: 'none', cursor: 'pointer',
            }}
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Nav links */}
        <ul style={{ flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(false)}
                to={link} smooth duration={600} offset={-80}
                className="block font-Outfit font-semibold py-3 px-4 rounded-xl cursor-pointer transition-all duration-200"
                style={{ color: 'var(--text-dim)', fontSize: '1rem' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.background = 'var(--primary-08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTA area */}
        <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a href="Hemant_Singh_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary" style={{ width: '100%' }}>
              <span>Download Resume ↗</span>
            </button>
          </a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ width: '100%', justifyContent: 'center', gap: 8 }}
          >
            {theme === 'light' ? <HiOutlineMoon size={16} /> : <HiOutlineSun size={16} />}
            <span className="font-Outfit text-sm font-semibold">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
