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
    { id: 1, link: 'home',       label: 'Home' },
    { id: 2, link: 'about',      label: 'About' },
    { id: 3, link: 'experience', label: 'Resume' },
    { id: 4, link: 'skills',     label: 'Skills' },
    { id: 5, link: 'project',    label: 'Projects' },
    { id: 6, link: 'contact',    label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`navbar fixed top-0 left-0 w-full h-[72px] flex items-center justify-between px-6 md:px-10 z-50 transition-all duration-500 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.6)]' : ''}`}>

        {/* Logo */}
        <Link to="home" smooth duration={600} className="cursor-pointer group flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                 style={{ background: 'linear-gradient(135deg, var(--primary), var(--green))', boxShadow: '0 0 15px rgba(37,99,235,0.4)' }}>
              <span className="text-black font-black font-Orbitron text-sm">H</span>
            </div>
            <span className="font-Orbitron font-bold text-lg tracking-wide">
              <span style={{ color: 'var(--primary)' }}>Hemant</span>
              <span style={{ color: 'rgba(232,240,255,0.8)' }}> Singh</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link to={link} smooth duration={600} offset={-80} spy activeClass="nav-link-active" className="nav-link cursor-pointer inline-block">
                {label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <HiOutlineMoon size={17} /> : <HiOutlineSun size={18} />}
            </button>
          </li>
          <li className="ml-1">
            <a href="Hemant_Singh_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary text-sm py-2 px-5 rounded-lg"><span>Resume ↗</span></button>
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setNav(!nav)} className="md:hidden p-2 z-50 transition-colors duration-300"
                style={{ color: nav ? 'var(--neon)' : 'rgba(200,215,240,0.7)' }} aria-label="Toggle menu">
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile menu */}
        <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
             style={{ background: 'rgba(7,8,15,0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="orb orb-neon absolute w-[300px] h-[300px] top-1/4 left-1/4 opacity-10 pointer-events-none" />
          <ul className="flex flex-col items-center gap-2 z-10">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link onClick={() => setNav(false)} to={link} smooth duration={600} offset={-80}
                      className="block text-3xl font-Outfit font-bold py-3 px-8 cursor-pointer transition-colors duration-300"
                      style={{ color: 'rgba(200,215,240,0.7)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(200,215,240,0.7)'; }}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-4 flex flex-col items-center gap-3">
              <a href="Hemant_Singh_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary text-base"><span>Download Resume</span></button>
              </a>
              <button
                className="theme-toggle w-auto px-5 gap-2 flex items-center"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <HiOutlineMoon size={16} /> : <HiOutlineSun size={16} />}
                <span className="font-Outfit text-sm font-semibold">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
