import { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

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
    { id: 1, link: 'home',        label: 'Home'       },
    { id: 2, link: 'projects',    label: 'Work'       },
    { id: 3, link: 'experience',  label: 'Experience' },
    { id: 4, link: 'skills',      label: 'Skills'     },
    { id: 5, link: 'achievements', label: 'Impact'    },
    { id: 6, link: 'contact',     label: 'Contact'    },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[9999]"
        style={{
          width: `${progress}%`,
          background: 'var(--gradient-brand)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.nav
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        style={{ height: 72 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center justify-between h-full px-6 md:px-10 max-w-7xl mx-auto">

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={600}
            className="cursor-pointer flex items-center gap-3 group flex-shrink-0"
          >
            <motion.div
              className="group-hover:scale-105"
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                fontFamily: 'Inter',
                fontWeight: 800,
                color: 'white',
                fontSize: 14,
                letterSpacing: '-0.02em',
                transition: 'transform 0.2s ease',
              }}
              whileHover={{ rotate: 5 }}
            >
              HS
            </motion.div>
            <div className="hidden sm:block">
              <p className="font-semibold text-[15px] tracking-tight leading-tight text-[var(--text)]">
                Hemant Singh
              </p>
              <p className="text-[10px] text-[var(--text-dim)] tracking-wide uppercase">
                Sr. Software Engineer
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            className="hidden md:flex items-center gap-1 p-1.5 rounded-xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="nav-pill-active"
                  className="nav-pill cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://drive.google.com/file/d/1pBsanJxnOhWcr1JwT_u9RqGFBDU-c-dI/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="btn-primary text-sm py-2.5 px-5 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setNav(!nav)}
            className="md:hidden p-2.5 z-50 rounded-xl transition-all duration-200"
            style={{
              color: 'var(--text-secondary)',
              background: nav ? 'var(--bg-elevated)' : 'transparent',
              border: `1px solid ${nav ? 'var(--border)' : 'transparent'}`,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setNav(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden"
            style={{
              background: 'var(--bg-card)',
              borderLeft: '1px solid var(--border)',
              boxShadow: '-8px 0 40px rgba(0,0,0,0.3)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Drawer header */}
            <div
              className="p-5 border-b border-[var(--border)] flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.05), transparent)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background: 'var(--gradient-brand)',
                    boxShadow: '0 0 15px rgba(59,130,246,0.3)',
                  }}
                >
                  HS
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--text)]">Hemant Singh</p>
                  <p className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider">
                    Navigation
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNav(false)}
                className="p-2 rounded-lg text-[var(--text-dim)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-all"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex-1 p-4 space-y-1">
              {links.map(({ id, link, label }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={600}
                    offset={-80}
                    className="block font-medium py-3 px-4 rounded-xl cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-all"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-[var(--border)]">
              <a
                href="https://drive.google.com/file/d/1pBsanJxnOhWcr1JwT_u9RqGFBDU-c-dI/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary w-full py-3">
                  Download Resume
                </button>
              </a>
              <a
                href="mailto:hemo.hm579@gmail.com"
                className="block mt-2"
              >
                <button className="btn-secondary w-full py-3">
                  Get in Touch
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
