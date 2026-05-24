import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import {
  FaNodeJs, FaAws, FaDocker, FaReact, FaGithub, FaPython, FaAngular, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiNestjs, SiTypescript, SiMongodb, SiMysql, SiRedux, SiTailwindcss,
  SiFirebase, SiFlutter, SiJavascript, SiPostgresql, SiRedis, SiExpress, SiCplusplus,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

/* ── Background floating tech logos ── */
const BG_ICONS = [
  { C: FaNodeJs,      color: '#339933', top: 6,  left: 2,  s: 30, dur: 13, dl: 0,   op: 0.07 },
  { C: SiNestjs,      color: '#e0234e', top: 11, left: 16, s: 20, dur: 17, dl: 1.5, op: 0.06 },
  { C: SiTypescript,  color: '#3178c6', top: 4,  left: 36, s: 24, dur: 20, dl: 3,   op: 0.06 },
  { C: FaReact,       color: '#61dafb', top: 8,  left: 56, s: 26, dur: 14, dl: 0.8, op: 0.06 },
  { C: FaAws,         color: '#ff9900', top: 5,  left: 75, s: 22, dur: 16, dl: 2.5, op: 0.06 },
  { C: SiMongodb,     color: '#47a248', top: 13, left: 90, s: 18, dur: 22, dl: 4,   op: 0.06 },
  { C: SiPostgresql,  color: '#336791', top: 26, left: 5,  s: 18, dur: 19, dl: 1,   op: 0.05 },
  { C: FaDocker,      color: '#2496ed', top: 32, left: 22, s: 24, dur: 15, dl: 3.5, op: 0.05 },
  { C: SiRedis,       color: '#dc382d', top: 24, left: 43, s: 20, dur: 18, dl: 2,   op: 0.05 },
  { C: TbBrandNextjs, color: '#2563eb', top: 30, left: 63, s: 22, dur: 21, dl: 0.5, op: 0.05 },
  { C: SiMysql,       color: '#4479a1', top: 27, left: 83, s: 16, dur: 24, dl: 3,   op: 0.05 },
  { C: FaPython,      color: '#3776ab', top: 54, left: 3,  s: 22, dur: 16, dl: 4.5, op: 0.06 },
  { C: SiJavascript,  color: '#e8a900', top: 60, left: 18, s: 24, dur: 12, dl: 2,   op: 0.06 },
  { C: SiFirebase,    color: '#ffca28', top: 52, left: 39, s: 18, dur: 18, dl: 1,   op: 0.05 },
  { C: FaAngular,     color: '#dd0031', top: 58, left: 59, s: 20, dur: 20, dl: 3,   op: 0.05 },
  { C: SiTailwindcss, color: '#0891b2', top: 55, left: 77, s: 22, dur: 15, dl: 0,   op: 0.05 },
  { C: SiFlutter,     color: '#02569b', top: 62, left: 93, s: 16, dur: 17, dl: 2,   op: 0.05 },
  { C: SiExpress,     color: '#6366f1', top: 78, left: 6,  s: 18, dur: 14, dl: 3,   op: 0.05 },
  { C: SiRedux,       color: '#764abc', top: 82, left: 26, s: 16, dur: 19, dl: 1.5, op: 0.05 },
  { C: FaGithub,      color: '#1e293b', top: 75, left: 46, s: 22, dur: 16, dl: 4,   op: 0.06 },
  { C: SiCplusplus,   color: '#00599c', top: 80, left: 66, s: 18, dur: 22, dl: 2,   op: 0.05 },
  { C: FaHtml5,       color: '#e34f26', top: 76, left: 84, s: 20, dur: 13, dl: 0.5, op: 0.06 },
  { C: FaCss3Alt,     color: '#1572b6', top: 86, left: 94, s: 16, dur: 18, dl: 3.5, op: 0.05 },
];

/* ── Floating code strings ── */
const CODE_FLOATS = [
  { t: '@Injectable()',                top: 9,  left: 4,  dur: 17, dl: 0,   op: 0.07 },
  { t: 'async findAll(): Promise<[]>', top: 16, left: 23, dur: 22, dl: 2,   op: 0.06 },
  { t: 'NestFactory.create(AppModule)',top: 5,  left: 52, dur: 20, dl: 1,   op: 0.07 },
  { t: "@Controller('/api')",          top: 11, left: 76, dur: 16, dl: 3,   op: 0.06 },
  { t: 'mongoose.Schema<User>()',      top: 33, left: 6,  dur: 25, dl: 0.5, op: 0.06 },
  { t: 'jwt.sign(payload, secret)',    top: 41, left: 40, dur: 19, dl: 2.5, op: 0.07 },
  { t: 'redis.setex(key, 3600)',       top: 37, left: 66, dur: 23, dl: 1.5, op: 0.06 },
  { t: 'aws.ec2.runInstances(params)', top: 56, left: 13, dur: 17, dl: 4,   op: 0.07 },
  { t: 'EventEmitter2.emit(event)',    top: 63, left: 33, dur: 21, dl: 2,   op: 0.06 },
  { t: 'prisma.user.findMany(query)',  top: 59, left: 61, dur: 18, dl: 3.5, op: 0.07 },
  { t: 'docker-compose up --build',   top: 73, left: 4,  dur: 22, dl: 1,   op: 0.06 },
  { t: 'interface ApiResponse<T>',    top: 78, left: 43, dur: 20, dl: 0,   op: 0.07 },
  { t: 'git push origin main',        top: 83, left: 69, dur: 16, dl: 2.5, op: 0.06 },
  { t: "pg.query(sql, params)",        top: 89, left: 17, dur: 24, dl: 4.5, op: 0.06 },
  { t: "@Get('/health')",              top: 86, left: 83, dur: 19, dl: 1.5, op: 0.07 },
];

/* ── Tech strip items ── */
const TECH_STRIP = [
  { C: FaNodeJs,      color: '#339933', label: 'Node.js'    },
  { C: SiNestjs,      color: '#e0234e', label: 'NestJS'     },
  { C: SiTypescript,  color: '#3178c6', label: 'TypeScript' },
  { C: SiJavascript,  color: '#e8a900', label: 'JavaScript' },
  { C: FaReact,       color: '#61dafb', label: 'React'      },
  { C: FaAws,         color: '#ff9900', label: 'AWS EC2'    },
  { C: FaDocker,      color: '#2496ed', label: 'Docker'     },
  { C: SiPostgresql,  color: '#336791', label: 'PostgreSQL' },
  { C: SiMongodb,     color: '#47a248', label: 'MongoDB'    },
  { C: SiRedis,       color: '#dc382d', label: 'Redis'      },
  { C: SiExpress,     color: '#6366f1', label: 'Express.js' },
  { C: FaPython,      color: '#3776ab', label: 'Python'     },
];

/* ── 3-Ring tech orbit constellation (replaces photo) ── */
const ORB1 = [ // inner CW 18s — 3 icons at 120°
  { C: SiNestjs,     color: '#e0234e', delay: 0   },
  { C: SiTypescript, color: '#3178c6', delay: -6  },
  { C: FaAws,        color: '#ff9900', delay: -12 },
];
const ORB2 = [ // middle CCW 26s — 4 icons at 90°
  { C: FaReact,      color: '#61dafb', delay: 0     },
  { C: FaNodeJs,     color: '#339933', delay: -6.5  },
  { C: FaDocker,     color: '#2496ed', delay: -13   },
  { C: SiPostgresql, color: '#336791', delay: -19.5 },
];
const ORB3 = [ // outer CW 34s — 5 icons at 72°
  { C: SiMongodb,    color: '#47a248', delay: 0     },
  { C: SiRedis,      color: '#dc382d', delay: -6.8  },
  { C: FaPython,     color: '#3776ab', delay: -13.6 },
  { C: FaAngular,    color: '#dd0031', delay: -20.4 },
  { C: SiJavascript, color: '#e8a900', delay: -27.2 },
];

/* Orbit icon + counter-rotation wrapper */
const OrbitIcon = ({ C, color, delay, orbitSize, iconSize, iconBoxSize, dur, cw }) => (
  <div style={{
    position: 'absolute',
    width: orbitSize, height: orbitSize,
    top: '50%', left: '50%',
    marginTop: -orbitSize / 2, marginLeft: -orbitSize / 2,
    animation: `${cw ? 'orbitCW' : 'orbitCCW'} ${dur}s linear infinite`,
    animationDelay: `${delay}s`,
  }}>
    <div style={{
      position: 'absolute', top: -iconBoxSize / 2, left: '50%', marginLeft: -iconBoxSize / 2,
      width: iconBoxSize, height: iconBoxSize, borderRadius: '50%',
      background: 'var(--bg-card)',
      border: `1.5px solid ${color}55`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 0 16px ${color}44, 0 4px 12px var(--shadow)`,
      animation: `${cw ? 'counterCW' : 'counterCCW'} ${dur}s linear infinite`,
      animationDelay: `${delay}s`,
    }}>
      <C size={iconSize} color={color} />
    </div>
  </div>
);

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

  return (
    <div
      name="home"
      className="relative w-full overflow-hidden"
      style={{ background: 'var(--bg)', minHeight: '100vh' }}
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="gradient-mesh" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BG_ICONS.map(({ C, color, top, left, s, dur, dl, op }, i) => (
          <div key={i} className="tech-float absolute"
            style={{ top: `${top}%`, left: `${left}%`, '--dur': `${dur}s`, '--delay': `${dl}s`, '--op': op, color }}>
            <C size={s} />
          </div>
        ))}
      </div>

      {/* Floating code strings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {CODE_FLOATS.map(({ t, top, left, dur, dl, op }, i) => (
          <div key={i} className="absolute tech-float"
            style={{
              top: `${top}%`, left: `${left}%`,
              '--dur': `${dur}s`, '--delay': `${dl}s`, '--op': op,
              color: 'var(--primary)',
              fontFamily: "'Fira Code','SF Mono','Roboto Mono',monospace",
              fontSize: 11, fontWeight: 500, whiteSpace: 'nowrap',
            }}>
            {t}
          </div>
        ))}
      </div>

      <div className="grid-overlay absolute inset-0" />
      <div className="orb orb-neon absolute w-[500px] h-[500px] top-[-120px] right-[-120px] opacity-20" />
      <div className="orb orb-green absolute w-[300px] h-[300px] bottom-[-60px] left-[-80px] opacity-15" />
      <div className="orb orb-dark absolute w-[350px] h-[350px] top-[30%] left-[30%] opacity-10" />

      {/* ── Bento grid ── */}
      <div className="bento-grid">

        {/* INTRO */}
        <div className="bento-intro bento-card p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="active-indicator" />
              <span className="section-label">Currently @ Blue Enigma · Open to Work</span>
            </div>

            <h1
              className="font-Outfit font-black leading-none animate-fade-up"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                color: 'var(--text)',
                letterSpacing: '-0.03em',
                marginBottom: 14,
                animationDelay: '0.2s',
              }}
            >
              Hi, I'm <span className="gradient-text">Hemant</span>
              <br />Singh
            </h1>

            <div
              className="flex flex-wrap items-center gap-2 animate-fade-up"
              style={{ marginBottom: 16, animationDelay: '0.35s' }}
            >
              <span style={{ color: 'var(--text-dim)', fontFamily: 'Outfit', fontSize: '1.0625rem' }}>I'm a</span>
              <span style={{ color: 'var(--primary)', fontFamily: 'Outfit', fontSize: '1.0625rem', fontWeight: 700 }}>{text}</span>
              <Cursor cursorStyle="|" cursorColor="#2563eb" />
            </div>

            <p
              className="animate-fade-up"
              style={{
                color: 'var(--text-dim)', fontFamily: 'Outfit', fontSize: '0.9375rem',
                lineHeight: 1.72, maxWidth: 500, marginBottom: 24,
                animationDelay: '0.5s',
              }}
            >
              I engineer backend infrastructure powering AI chatbots, carbon reporting SaaS
              platforms &amp; fintech systems.{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 700 }}>3.5+ years</strong>{' '}
              shipping NestJS microservices, REST APIs, and cloud-deployed systems at scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.65s' }}>
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
        </div>

        {/* PHOTO → 3-Ring Tech Orbit Constellation */}
        <div
          className="bento-photo bento-card relative overflow-hidden flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-2) 100%)' }}
        >
          {/* Subtle inner glow orbs */}
          <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-15%', left: '-15%', width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(25px)', pointerEvents: 'none' }} />

          {/* Orbit container */}
          <div style={{ position: 'relative', width: 320, height: 320, flexShrink: 0 }}>

            {/* Dashed guide rings */}
            <div style={{ position: 'absolute', width: 160, height: 160, top: 80, left: 80, border: '1px dashed rgba(37,99,235,0.22)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: 240, height: 240, top: 40, left: 40, border: '1px dashed rgba(37,99,235,0.15)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: 320, height: 320, top: 0, left: 0, border: '1px dashed rgba(37,99,235,0.09)', borderRadius: '50%', pointerEvents: 'none' }} />

            {/* INNER ring — CW 18s, radius 80px, icon box 40px */}
            {ORB1.map(({ C, color, delay }, i) => (
              <OrbitIcon key={i} C={C} color={color} delay={delay}
                orbitSize={160} iconSize={18} iconBoxSize={40} dur={18} cw={true} />
            ))}

            {/* MIDDLE ring — CCW 26s, radius 120px, icon box 36px */}
            {ORB2.map(({ C, color, delay }, i) => (
              <OrbitIcon key={i} C={C} color={color} delay={delay}
                orbitSize={240} iconSize={16} iconBoxSize={36} dur={26} cw={false} />
            ))}

            {/* OUTER ring — CW 34s, radius 160px, icon box 32px */}
            {ORB3.map(({ C, color, delay }, i) => (
              <OrbitIcon key={i} C={C} color={color} delay={delay}
                orbitSize={320} iconSize={14} iconBoxSize={32} dur={34} cw={true} />
            ))}

            {/* Central HS badge */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
              width: 72, height: 72, borderRadius: 20,
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(37,99,235,0.5), 0 0 80px rgba(37,99,235,0.15)',
              fontFamily: 'Orbitron', fontWeight: 900, fontSize: 22,
              color: 'white', letterSpacing: '0.06em',
              animation: 'pulseTimeline 3s ease-in-out infinite',
            }}>
              HS
            </div>
          </div>

          {/* Bottom label */}
          <div className="orbit-label" style={{ position: 'absolute', bottom: '5%' }}>
            Tech Stack · 12 Technologies
          </div>
        </div>

        {/* INFO 1 — current role */}
        <div className="bento-info1 bento-card p-5 flex flex-col justify-between">
          <div>
            <p className="section-label mb-3">Currently At</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(37,99,235,0.35)',
              }}>
                <SiNestjs size={18} color="white" />
              </div>
              <div>
                <p style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.2 }}>Blue Enigma</p>
                <p style={{ fontFamily: 'Outfit', fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: 2 }}>Feb 2026 – Present</p>
              </div>
            </div>
            <p style={{ fontFamily: 'Outfit', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>Sr. Software Engineer</p>
          </div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 14 }}>
            {[
              { C: SiNestjs,     color: '#e0234e' },
              { C: FaNodeJs,     color: '#339933' },
              { C: SiTypescript, color: '#3178c6' },
              { C: SiPostgresql, color: '#336791' },
            ].map(({ C, color }, i) => (
              <div key={i} style={{
                width: 30, height: 30, borderRadius: 8,
                background: `${color}18`, border: `1px solid ${color}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <C size={14} color={color} />
              </div>
            ))}
          </div>
        </div>

        {/* INFO 2 — availability */}
        <div className="bento-info2 bento-card p-4 flex flex-col justify-center gap-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="active-indicator" />
            <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.875rem', color: 'var(--green)' }}>Open to Opportunities</span>
          </div>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="btn-secondary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.8125rem' }}>
              Get in Touch →
            </button>
          </Link>
        </div>

        {/* STATS */}
        <div className="bento-stats bento-card flex items-center justify-around px-4">
          {[
            { num: "3.5+", label: "Years Exp" },
            { num: "12+",  label: "Projects"  },
            { num: "5+",   label: "Companies" },
            { num: "4",    label: "Domains"   },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p className="gradient-text font-Orbitron font-black" style={{ fontSize: '1.375rem' }}>{num}</p>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginTop: 3 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* TECH STRIP */}
        <div className="bento-tech bento-card relative overflow-hidden" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 40, zIndex: 10, background: 'linear-gradient(to right, var(--bg-card), transparent)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 40, zIndex: 10, background: 'linear-gradient(to left, var(--bg-card), transparent)', pointerEvents: 'none' }} />
          <div className="marquee-track marquee-left" style={{ '--speed': '20s', gap: '0' }}>
            {[...TECH_STRIP, ...TECH_STRIP].map(({ C, color, label }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 18px', borderRight: '1px solid var(--border)' }}>
                <C size={17} color={color} />
                <span style={{ fontFamily: 'Outfit', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CODE CARD */}
        <div className="bento-code bento-card p-4" style={{ fontFamily: "'Fira Code','SF Mono','Roboto Mono',monospace", fontSize: 11.5, lineHeight: 1.85 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            <span style={{ marginLeft: 6, fontFamily: 'Orbitron', fontSize: 9, color: 'var(--text-dim)', letterSpacing: '0.1em' }}>engineer.ts</span>
          </div>
          <div style={{ color: 'var(--text-dim)' }}>
            <div><span style={{ color: '#7c3aed' }}>const </span><span style={{ color: 'var(--primary)' }}>hemant</span> = {'{'}</div>
            <div style={{ paddingLeft: 14 }}>role: <span style={{ color: '#f59e0b' }}>'Sr. Engineer'</span>,</div>
            <div style={{ paddingLeft: 14 }}>stack: <span style={{ color: '#10b981' }}>['NestJS','TS','AWS']</span>,</div>
            <div style={{ paddingLeft: 14 }}>mtech: <span style={{ color: 'var(--primary)' }}>'BITS Pilani'</span>,</div>
            <div style={{ paddingLeft: 14 }}>open: <span style={{ color: '#10b981' }}>true</span><span className="code-cursor" /></div>
            <div>{'}'}</div>
          </div>
        </div>

      </div>{/* end bento-grid */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-float">
        <span style={{ fontFamily: 'Outfit', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Scroll</span>
        <div style={{ width: 20, height: 36, borderRadius: 999, border: '1.5px solid var(--primary-30)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, borderRadius: 999, background: 'var(--primary)', animation: 'bounce 1.4s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
