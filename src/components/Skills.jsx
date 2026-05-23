import { FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaAngular } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiMongodb, SiMysql, SiRedux, SiTailwindcss, SiFirebase, SiFlutter, SiCplusplus, SiJavascript, SiPostgresql, SiRedis, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useInView } from '../hooks/useInView';

/* ── Marquee rows ── */
const ROW1 = [
  { icon: <FaNodeJs />,     label: 'Node.js',      color: '#339933' },
  { icon: <SiNestjs />,     label: 'NestJS',        color: '#e0234e' },
  { icon: <SiTypescript />, label: 'TypeScript',    color: '#3178c6' },
  { icon: <SiJavascript />, label: 'JavaScript',    color: '#f7df1e' },
  { icon: <SiExpress />,    label: 'Express.js',    color: '#6366f1' },
  { icon: <FaPython />,     label: 'Python',        color: '#3776ab' },
  { icon: <SiCplusplus />,  label: 'C++',           color: '#00599c' },
];

const ROW2 = [
  { icon: <FaReact />,       label: 'React',        color: '#61dafb' },
  { icon: <TbBrandNextjs />, label: 'Next.js',      color: '#1a1a2e' },
  { icon: <FaAngular />,     label: 'Angular',      color: '#dd0031' },
  { icon: <SiRedux />,       label: 'Redux',        color: '#764abc' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: '#06b6d4' },
  { icon: <SiFlutter />,     label: 'Flutter',      color: '#02569b' },
  { icon: <FaHtml5 />,       label: 'HTML5',        color: '#e34f26' },
  { icon: <FaCss3Alt />,     label: 'CSS3',         color: '#1572b6' },
];

const ROW3 = [
  { icon: <SiMongodb />,    label: 'MongoDB',       color: '#47a248' },
  { icon: <SiPostgresql />, label: 'PostgreSQL',    color: '#336791' },
  { icon: <SiMysql />,      label: 'MySQL',         color: '#4479a1' },
  { icon: <SiRedis />,      label: 'Redis',         color: '#dc382d' },
  { icon: <SiFirebase />,   label: 'Firebase',      color: '#ffca28' },
  { icon: <FaAws />,        label: 'AWS EC2',       color: '#ff9900' },
  { icon: <FaDocker />,     label: 'Docker',        color: '#2496ed' },
  { icon: <FaGithub />,     label: 'GitHub Actions',color: '#1f2937' },
];

const SkillPill = ({ icon, label, color }) => (
  <div className="skill-pill">
    <span style={{ color, fontSize: 18, flexShrink: 0 }}>{icon}</span>
    <span>{label}</span>
  </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = '28s' }) => {
  const doubled = [...items, ...items];
  const cls = direction === 'left' ? 'marquee-left' : 'marquee-right';
  return (
    <div className="overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />
      <div className={`marquee-track ${cls}`} style={{ '--speed': speed }}>
        {doubled.map((item, i) => <SkillPill key={i} {...item} />)}
      </div>
    </div>
  );
};

/* ── Microservice node graph (SVG + CSS) ── */
const NODES = [
  { id: 'client',    label: 'Client',    icon: <FaReact size={22} color="#61dafb" />, x: 50,  y: 15  },
  { id: 'gateway',   label: 'API Gateway',icon: <SiNestjs size={22} color="#e0234e" />, x: 50,  y: 42  },
  { id: 'auth',      label: 'Auth Svc',  icon: <SiTypescript size={20} color="#3178c6" />, x: 20,  y: 68  },
  { id: 'data',      label: 'Data Svc',  icon: <FaNodeJs size={22} color="#339933" />, x: 50,  y: 70  },
  { id: 'ai',        label: 'AI Engine', icon: <FaPython size={22} color="#3776ab" />, x: 80,  y: 68  },
  { id: 'db',        label: 'PostgreSQL', icon: <SiPostgresql size={20} color="#336791" />, x: 30,  y: 92  },
  { id: 'cache',     label: 'Redis',     icon: <SiRedis size={20} color="#dc382d" />, x: 70,  y: 92  },
  { id: 'cloud',     label: 'AWS EC2',   icon: <FaAws size={22} color="#ff9900" />, x: 50,  y: 95  },
];

const EDGES = [
  ['client','gateway'], ['gateway','auth'], ['gateway','data'], ['gateway','ai'],
  ['data','db'], ['data','cache'], ['auth','db'], ['cloud','db'], ['cloud','cache'],
];

const MicroserviceGraph = () => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`reveal-hidden ${inView ? 'revealed' : ''}`}>
      <div className="glass-card-new rounded-2xl p-6 overflow-hidden">
        <p className="section-label mb-4 text-center">Microservice Architecture</p>
        <div className="node-graph select-none">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: 'none' }}
          >
            {/* edges */}
            {EDGES.map(([a, b], i) => {
              const na = NODES.find(n => n.id === a);
              const nb = NODES.find(n => n.id === b);
              return (
                <g key={i}>
                  <line
                    x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                    stroke="rgba(37,99,235,0.2)" strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                  {/* animated data-flow dot */}
                  <circle r="0.8" fill="#2563eb" opacity="0.85">
                    <animateMotion
                      dur={`${2.5 + i * 0.4}s`}
                      repeatCount="indefinite"
                      path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
                    />
                    <animate attributeName="opacity" values="0;1;1;0" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* nodes */}
          {NODES.map(({ id, label, icon, x, y }) => (
            <div key={id} className="ms-node" style={{ left: `${x}%`, top: `${y}%` }}>
              <div className="ms-node-circle">
                {icon}
              </div>
              <span className="ms-node-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [sectionRef, inView] = useInView();

  return (
    <div name="skills" className="relative w-full min-h-screen cosmic-bg py-28 overflow-hidden">
      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[350px] h-[350px] top-[5%] right-[5%] opacity-10" />
      <div className="orb orb-green absolute w-[280px] h-[280px] bottom-[5%] left-[-40px] opacity-08" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={sectionRef} className="mb-14 text-center">
          <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>Tech Arsenal</p>
          <h2 className={`section-title reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}>
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <div className={`w-20 h-1 rounded-full mx-auto mt-4 reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
               style={{ background: 'linear-gradient(90deg, var(--primary), var(--green))' }} />
          <p className={`font-Outfit text-lg mt-4 max-w-lg mx-auto reveal-hidden stagger-3 ${inView ? 'revealed' : ''}`}
             style={{ color: 'var(--text-dim)' }}>
            Technologies I use daily to architect scalable, production-grade systems.
          </p>
        </div>

        {/* ── 3-row infinite marquee ── */}
        <div className={`space-y-4 reveal-hidden stagger-4 ${inView ? 'revealed' : ''}`}>
          {/* Row label */}
          <div className="flex items-center gap-3 mb-2 px-2">
            <span className="font-Outfit text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
              Backend & Languages
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span style={{ color: 'var(--primary)', fontSize: 12 }}>→</span>
          </div>
          <MarqueeRow items={ROW1} direction="left" speed="24s" />

          <div className="flex items-center gap-3 mt-6 mb-2 px-2">
            <span className="font-Outfit text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
              Frontend & Mobile
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span style={{ color: 'var(--green)', fontSize: 12 }}>←</span>
          </div>
          <MarqueeRow items={ROW2} direction="right" speed="32s" />

          <div className="flex items-center gap-3 mt-6 mb-2 px-2">
            <span className="font-Outfit text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
              Databases, Cloud & DevOps
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span style={{ color: 'var(--primary)', fontSize: 12 }}>→</span>
          </div>
          <MarqueeRow items={ROW3} direction="left" speed="28s" />
        </div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* ── Microservice Node Graph ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>System Design</p>
            <h3 className={`font-Outfit font-black text-3xl mb-4 reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}
                style={{ color: 'var(--text)' }}>
              How My Backend <span className="gradient-text">Services Connect</span>
            </h3>
            <p className={`font-Outfit text-base leading-relaxed reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
               style={{ color: 'var(--text-dim)' }}>
              A simplified view of the microservice architecture I architect — React frontend
              talks to a NestJS API Gateway, which routes to Auth, Data, and AI services,
              backed by PostgreSQL, Redis, and deployed on AWS EC2 with Docker.
            </p>
            <div className={`mt-6 flex flex-wrap gap-2 reveal-hidden stagger-3 ${inView ? 'revealed' : ''}`}>
              {['NestJS Gateway', 'JWT/RBAC Auth', 'Redis Caching', 'Docker + EC2', 'GitHub CI/CD'].map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <MicroserviceGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
