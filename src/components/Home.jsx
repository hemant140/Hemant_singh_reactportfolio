import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useMemo } from "react";
import { Link } from "react-scroll";
import {
  FaNodeJs, FaAws, FaDocker, FaReact, FaGithub, FaPython, FaAngular, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiNestjs, SiTypescript, SiMongodb, SiMysql, SiRedux, SiTailwindcss,
  SiFirebase, SiFlutter, SiJavascript, SiPostgresql, SiRedis, SiExpress, SiCplusplus,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const BG_ICONS = [
  { C: FaNodeJs,      color: '#339933', top: 6,  left: 2,  s: 36, dur: 13, dl: 0,   op: 0.1  },
  { C: SiNestjs,      color: '#e0234e', top: 11, left: 16, s: 26, dur: 17, dl: 1.5, op: 0.08 },
  { C: SiTypescript,  color: '#3178c6', top: 4,  left: 36, s: 30, dur: 20, dl: 3,   op: 0.09 },
  { C: FaReact,       color: '#61dafb', top: 8,  left: 56, s: 34, dur: 14, dl: 0.8, op: 0.09 },
  { C: FaAws,         color: '#ff9900', top: 5,  left: 75, s: 28, dur: 16, dl: 2.5, op: 0.08 },
  { C: SiMongodb,     color: '#47a248', top: 13, left: 90, s: 24, dur: 22, dl: 4,   op: 0.09 },
  { C: SiPostgresql,  color: '#336791', top: 26, left: 5,  s: 24, dur: 19, dl: 1,   op: 0.07 },
  { C: FaDocker,      color: '#2496ed', top: 32, left: 22, s: 30, dur: 15, dl: 3.5, op: 0.08 },
  { C: SiRedis,       color: '#dc382d', top: 24, left: 43, s: 26, dur: 18, dl: 2,   op: 0.07 },
  { C: TbBrandNextjs, color: '#2563eb', top: 30, left: 63, s: 28, dur: 21, dl: 0.5, op: 0.07 },
  { C: SiMysql,       color: '#4479a1', top: 27, left: 83, s: 22, dur: 24, dl: 3,   op: 0.07 },
  { C: FaPython,      color: '#3776ab', top: 54, left: 3,  s: 28, dur: 16, dl: 4.5, op: 0.08 },
  { C: SiJavascript,  color: '#e8a900', top: 60, left: 18, s: 32, dur: 12, dl: 2,   op: 0.09 },
  { C: SiFirebase,    color: '#ffca28', top: 52, left: 39, s: 24, dur: 18, dl: 1,   op: 0.07 },
  { C: FaAngular,     color: '#dd0031', top: 58, left: 59, s: 26, dur: 20, dl: 3,   op: 0.08 },
  { C: SiTailwindcss, color: '#0891b2', top: 55, left: 77, s: 28, dur: 15, dl: 0,   op: 0.08 },
  { C: SiFlutter,     color: '#02569b', top: 62, left: 93, s: 22, dur: 17, dl: 2,   op: 0.07 },
  { C: SiExpress,     color: '#6366f1', top: 78, left: 6,  s: 24, dur: 14, dl: 3,   op: 0.07 },
  { C: SiRedux,       color: '#764abc', top: 82, left: 26, s: 22, dur: 19, dl: 1.5, op: 0.07 },
  { C: FaGithub,      color: '#1e293b', top: 75, left: 46, s: 28, dur: 16, dl: 4,   op: 0.08 },
  { C: SiCplusplus,   color: '#00599c', top: 80, left: 66, s: 24, dur: 22, dl: 2,   op: 0.07 },
  { C: FaHtml5,       color: '#e34f26', top: 76, left: 84, s: 26, dur: 13, dl: 0.5, op: 0.09 },
  { C: FaCss3Alt,     color: '#1572b6', top: 86, left: 94, s: 22, dur: 18, dl: 3.5, op: 0.07 },
];

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Senior Software Engineer",
      "NestJS & Node.js Expert",
      "Microservices Architect",
      "Full-Stack Developer",
      "M.Tech AI/ML @ BITS Pilani",
    ],
    loop: true,
    typeSpeed: 52,
    deleteSpeed: 26,
    delaySpeed: 2300,
  });

  const badges = useMemo(() => [
    { icon: <SiNestjs size={13} />,  label: "NestJS",      color: "#e0234e", pos: { top: '12%', right: '-16px' }, delay: "0s" },
    { icon: <FaNodeJs size={13} />,  label: "Node.js",     color: "#339933", pos: { top: '44%', right: '-32px' }, delay: "0.7s" },
    { icon: <FaAws size={13} />,     label: "AWS",         color: "#ff9900", pos: { top: '12%', left: '-14px' },  delay: "1.1s" },
    { icon: <SiMongodb size={13} />, label: "MongoDB",     color: "#47a248", pos: { bottom: '18%', left: '-28px' }, delay: "1.6s" },
    { icon: <FaDocker size={13} />,  label: "Docker",      color: "#2496ed", pos: { bottom: '10%', right: '10%' }, delay: "1.9s" },
  ], []);

  return (
    <div
      name="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-[72px]"
      style={{ background: 'var(--bg)' }}
    >
      {/* Floating tech universe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BG_ICONS.map(({ C, color, top, left, s, dur, dl, op }, i) => (
          <div key={i} className="tech-float absolute" style={{ top: `${top}%`, left: `${left}%`, '--dur': `${dur}s`, '--delay': `${dl}s`, '--op': op, color }}>
            <C size={s} />
          </div>
        ))}
      </div>

      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[500px] h-[500px] top-[-120px] right-[-120px] opacity-30" />
      <div className="orb orb-green absolute w-[300px] h-[300px] bottom-[-60px] left-[-80px] opacity-20" />
      <div className="orb orb-dark absolute w-[350px] h-[350px] top-[30%] left-[30%] opacity-15" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

        {/* LEFT — Text */}
        <div className="flex-1 flex flex-col items-start max-w-2xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="active-indicator" />
            <span className="section-label">Currently @ Blue Enigma · Open to Opportunities</span>
          </div>

          <h1
            className="font-Outfit font-black leading-none tracking-[-0.03em] mb-4 animate-fade-up"
            style={{ fontSize: 'clamp(3rem,7vw,5.8rem)', color: 'var(--text)', animationDelay: '0.2s' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Hemant</span>
            <br />Singh
          </h1>

          <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <span className="font-Outfit text-xl font-medium" style={{ color: 'var(--text-dim)' }}>I'm a</span>
            <span className="font-Outfit text-xl font-bold" style={{ color: 'var(--primary)' }}>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#2563eb" />
          </div>

          <p
            className="font-Outfit text-lg leading-relaxed max-w-xl mb-10 animate-fade-up"
            style={{ color: 'var(--text-dim)', animationDelay: '0.5s' }}
          >
            I engineer the backend infrastructure that powers AI chatbots, carbon reporting
            SaaS platforms, and fintech systems. <strong style={{ color: 'var(--text)', fontWeight: 700 }}>3.5+ years</strong> shipping
            NestJS microservices, REST APIs, and cloud-deployed systems at scale.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <a href="https://www.linkedin.com/in/hemant140/" target="_blank" rel="noreferrer">
              <button className="btn-primary flex items-center gap-2">
                <span>Hire Me</span><span>→</span>
              </button>
            </a>
            <Link to="project" smooth duration={600} offset={-80}>
              <button className="btn-secondary flex items-center gap-2">
                <span>View Projects</span>
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-12 pt-8 w-full animate-fade-up"
            style={{ borderTop: '1px solid var(--border)', animationDelay: '0.8s' }}
          >
            {[
              { num: "3.5+", label: "Years Exp" },
              { num: "20+",  label: "APIs Shipped" },
              { num: "10+",  label: "SaaS Modules" },
              { num: "5+",   label: "Companies" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="gradient-text font-Orbitron font-black text-2xl">{num}</p>
                <p className="font-Outfit text-xs uppercase tracking-widest mt-0.5" style={{ color: 'var(--text-dim)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Stacked tilted card photo */}
        <div
          className="flex-shrink-0 relative flex items-center justify-center animate-fade-right"
          style={{ animationDelay: '0.4s', width: 320, height: 420 }}
        >
          {/* Background decorative card 1 — farthest back, most tilted */}
          <div
            className="absolute rounded-3xl"
            style={{
              width: 260, height: 360,
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              transform: 'rotate(8deg) translate(20px, -10px)',
              opacity: 0.15,
              borderRadius: '1.5rem',
            }}
          />
          {/* Background decorative card 2 — middle layer */}
          <div
            className="absolute rounded-3xl"
            style={{
              width: 260, height: 360,
              background: 'linear-gradient(135deg, #7c3aed, #10b981)',
              transform: 'rotate(-5deg) translate(-15px, 8px)',
              opacity: 0.12,
              borderRadius: '1.5rem',
            }}
          />

          {/* Main photo card — slight tilt, white border */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 258,
              height: 358,
              borderRadius: '1.5rem',
              border: '3px solid #ffffff',
              boxShadow: '0 24px 60px rgba(37,99,235,0.18), 0 8px 24px rgba(0,0,0,0.1)',
              transform: 'rotate(-2.5deg)',
              background: 'var(--bg-card)',
              zIndex: 2,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)'; e.currentTarget.style.transition = 'transform 0.4s ease'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-2.5deg)'; e.currentTarget.style.transition = 'transform 0.4s ease'; }}
          >
            <img
              src="hemant%20img.JPG"
              alt="Hemant Singh"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
            {/* Bottom name overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(15,23,42,0.88))',
              padding: '2rem 1rem 1rem',
            }}>
              <p style={{ color: '#fff', fontFamily: 'Outfit', fontWeight: 800, fontSize: '1rem', lineHeight: 1.2 }}>Hemant Singh</p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Outfit', fontSize: '0.72rem', fontWeight: 600, marginTop: 2 }}>Sr. Software Engineer</p>
            </div>
          </div>

          {/* Floating tech badges */}
          {badges.map(({ icon, label, color, pos, delay }) => (
            <div
              key={label}
              className="floating-badge animate-float"
              style={{ ...pos, animationDelay: delay, zIndex: 10 }}
            >
              <span style={{ color }}>{icon}</span>
              <span>{label}</span>
            </div>
          ))}

          {/* Corner accent dots */}
          <div style={{ position: 'absolute', top: 10, right: 10, width: 10, height: 10, borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px rgba(37,99,235,0.6)', animation: 'blink 2s ease-in-out infinite', zIndex: 3 }} />
          <div style={{ position: 'absolute', bottom: 14, left: 14, width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px rgba(16,185,129,0.6)', animation: 'blink 2s ease-in-out infinite', animationDelay: '0.8s', zIndex: 3 }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-float">
        <span className="font-Outfit text-xs tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>Scroll</span>
        <div style={{ width: 20, height: 36, borderRadius: 999, border: '1.5px solid var(--primary-30)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, borderRadius: 999, background: 'var(--primary)', animation: 'bounce 1.4s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
