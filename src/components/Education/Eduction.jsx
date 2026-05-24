import { useState } from 'react';
import { MdWork, MdSchool } from 'react-icons/md';
import { useInView } from '../../hooks/useInView';

/* ── Experience data ── */
const EXP_DATA = [
  {
    id: 'blueEnigma',
    color: '#2563eb',
    company: 'Blue Enigma',
    title: 'Sr. Software Engineer',
    period: 'Feb 2026 – Present',
    isActive: true,
    points: [
      "Led backend development with NestJS — scalable APIs for booking management, real-time availability, and hotel operations in a multi-tenant PMS system.",
      "Designed and optimized PostgreSQL schema, indexing, and query optimization for high performance and data consistency.",
      "Architected a modular backend supporting a dynamic pricing engine with concurrent bookings at low latency.",
      "Integrated an AI-based dynamic pricing system enabling real-time price adjustments based on demand and occupancy.",
    ],
    skills: ['NestJS', 'PostgreSQL', 'TypeScript', 'Dynamic Pricing', 'Multi-tenant PMS'],
  },
  {
    id: 'oriserve',
    color: '#7c3aed',
    company: 'Oriserve India Pvt. Ltd.',
    title: 'Software Engineer',
    period: 'Mar 2025 – Jan 2026',
    isActive: false,
    points: [
      "Owned core backend for Orimon.ai AI chatbot platform — workflow automation engine, FAQ management, and multilingual training logic using Node.js, Express.js & TypeScript.",
      "Designed RESTful API endpoints with intelligent duplicate detection, reducing redundant API calls significantly.",
      "Built CRM + live chat escalation integration layer through custom REST APIs ensuring seamless handoff between AI and human support.",
      "Optimized message processing with async queuing and batch processing, improving API response times significantly.",
    ],
    skills: ['Node.js', 'Express.js', 'TypeScript', 'AI Chatbot', 'CRM Integration'],
  },
  {
    id: 'ecohodo',
    color: '#10b981',
    company: 'Ecohodo Technologies Pvt. Ltd.',
    title: 'Software Engineer',
    period: 'Jul 2024 – Mar 2025',
    isActive: false,
    points: [
      "Architected multi-tenant Carbon Emissions Reporting SaaS backend with NestJS, processing thousands of calculations monthly.",
      "Built centralized JWT/RBAC authentication deployed across multiple platform ecosystems, eliminating code duplication.",
      "Managed EC2 + Docker microservice deployments with GitHub Actions CI/CD pipelines that streamlined releases.",
      "Optimized MongoDB and MySQL queries with strategic indexing, reducing API latency and stabilizing system performance.",
    ],
    skills: ['NestJS', 'JWT/RBAC', 'MongoDB', 'Docker', 'AWS EC2', 'CI/CD'],
  },
  {
    id: 'plutosOne',
    color: '#f59e0b',
    company: 'Plutos One',
    title: 'Software Developer',
    period: 'Mar 2024 – Jul 2024',
    isActive: false,
    points: [
      "Developed and maintained backend services with Node.js and Express.js, designing RESTful APIs for a BBPS fintech platform.",
      "Implemented authentication and authorization mechanisms ensuring secure access control across all features.",
    ],
    skills: ['Node.js', 'Express.js', 'BBPS', 'Fintech', 'Auth'],
  },
  {
    id: 'virtuzo',
    color: '#6366f1',
    company: 'Virtuzo Infosystems',
    title: 'Junior Software Developer',
    period: 'Feb 2023 – Mar 2024',
    isActive: false,
    points: [
      "Built backend services and REST APIs with Node.js and Express.js for multiple client projects and internal tools.",
      "Designed MongoDB architectures with scalable data models and efficient query patterns.",
      "Integrated third-party services and auth systems enhancing platform capabilities.",
    ],
    skills: ['Node.js', 'MongoDB', 'REST APIs', 'Third-party Integration'],
  },
];

/* ── Education data ── */
const EDU_DATA = [
  {
    id: 'bits',
    color: '#7c3aed',
    company: 'BITS Pilani',
    title: 'M.Tech in Artificial Intelligence & Machine Learning',
    period: 'March 2026 – Present',
    isActive: true,
    points: [
      "Specializing in Advanced ML Algorithms, Deep Neural Networks, Computer Vision, and NLP.",
      "Evaluating distributed AI workloads and building high-performance intelligence integration architectures.",
      "Advanced curriculum combining statistical learning, neural architectures, and optimization algorithms.",
    ],
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
  },
  {
    id: 'btech',
    color: '#2563eb',
    company: 'VBS Purvanchal University, Jaunpur, UP',
    title: 'B.Tech — Computer Science & Engineering',
    period: '2018 – 2022',
    isActive: false,
    points: null,
    des: 'Relational Database Systems, OOP, Data Structures, Algorithms, Computer Networks, Operating Systems.',
    skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'Algorithms'],
  },
  {
    id: 'class12',
    color: '#10b981',
    company: 'Maharishi Vidya Mandir, Aligarh, UP',
    title: '12th Senior Secondary (Science)',
    period: '2017 – 2018',
    isActive: false,
    points: null,
    des: 'Physics, Chemistry, Mathematics, and Computer Science.',
    skills: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
  {
    id: 'class10',
    color: '#f59e0b',
    company: 'Maharishi Vidya Mandir, Aligarh, UP',
    title: '10th Higher Secondary Examination',
    period: '2015 – 2016',
    isActive: false,
    points: null,
    des: 'Excellent marks in science and information technology subjects.',
    skills: ['Science', 'Information Technology'],
  },
];

/* ── Left nav button ── */
const NavBtn = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`itl-nav-btn ${isActive ? 'itl-active' : ''}`}
    style={{ '--itl-color': item.color }}
  >
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{
        width: 10, height: 10, borderRadius: '50%',
        background: isActive ? item.color : 'var(--border-bright)',
        flexShrink: 0, marginTop: 5,
        boxShadow: isActive ? `0 0 10px ${item.color}88` : 'none',
        transition: 'all 0.22s ease',
      }} />
      <div style={{ textAlign: 'left' }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.3,
          color: isActive ? 'var(--text)' : 'var(--text-dim)',
          transition: 'color 0.22s ease',
        }}>
          {item.company}
        </p>
        <p style={{
          fontFamily: 'Outfit', fontSize: '0.7rem', marginTop: 2,
          color: isActive ? item.color : 'var(--text-dim)',
          transition: 'color 0.22s ease',
        }}>
          {item.period}
        </p>
      </div>
    </div>
  </button>
);

/* ── Right detail panel ── */
const DetailCard = ({ item }) => (
  <div key={item.id} className="itl-detail-card">
    <div className="itl-accent-bar" style={{ background: item.color }} />

    {/* Header */}
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <p style={{
          fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.7rem',
          textTransform: 'uppercase', letterSpacing: '0.12em', color: item.color,
        }}>
          {item.company}
        </p>
        {item.isActive && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', padding: '2px 8px', borderRadius: 999,
            background: 'rgba(0,255,136,0.1)', color: 'var(--green)',
            border: '1px solid rgba(0,255,136,0.3)',
          }}>
            <span className="active-indicator" style={{ width: 5, height: 5 }} />
            Active
          </span>
        )}
      </div>
      <h3 style={{
        fontFamily: 'Outfit', fontWeight: 900, fontSize: '1.25rem',
        color: 'var(--text)', lineHeight: 1.3, marginBottom: 10,
      }}>
        {item.title}
      </h3>
      <span style={{
        fontFamily: 'Outfit', fontSize: '0.75rem', fontWeight: 600,
        padding: '3px 12px', borderRadius: 999,
        background: `${item.color}15`, border: `1px solid ${item.color}33`, color: item.color,
      }}>
        {item.period}
      </span>
    </div>

    {/* Bullet points */}
    {item.points && (
      <ul style={{ marginBottom: 20 }}>
        {item.points.map((point, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: item.color, flexShrink: 0, marginTop: 7,
              boxShadow: `0 0 6px ${item.color}66`,
            }} />
            <span style={{
              fontFamily: 'Outfit', fontSize: '0.875rem',
              lineHeight: 1.68, color: 'var(--text-dim)',
            }}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    )}

    {/* Description */}
    {item.des && (
      <p style={{
        fontFamily: 'Outfit', fontSize: '0.875rem',
        lineHeight: 1.68, color: 'var(--text-dim)', marginBottom: 20,
      }}>
        {item.des}
      </p>
    )}

    {/* Skills */}
    {item.skills && (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
        {item.skills.map(skill => (
          <span key={skill} style={{
            fontFamily: 'Outfit', fontSize: '0.65rem', fontWeight: 700,
            padding: '3px 10px', borderRadius: 999,
            background: `${item.color}12`, border: `1px solid ${item.color}30`, color: item.color,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Eduction = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, inView] = useInView();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const data = activeTab === 'experience' ? EXP_DATA : EDU_DATA;

  return (
    <div name="experience" className="relative w-full min-h-screen cosmic-bg py-28 overflow-hidden">
      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[320px] h-[320px] top-[8%] right-[-50px] opacity-12" />
      <div className="orb orb-dark absolute w-[250px] h-[250px] bottom-[10%] left-[-50px] opacity-20" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={sectionRef} className="mb-12">
          <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>Career Journey</p>
          <h2 className={`section-title reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}>
            My <span className="gradient-text">Resume</span>
          </h2>
          <div
            className={`w-20 h-1 rounded-full mt-4 reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
            style={{ background: 'linear-gradient(90deg, var(--primary), var(--green))' }}
          />
          <p
            className={`font-Outfit text-lg mt-4 max-w-lg reveal-hidden stagger-3 ${inView ? 'revealed' : ''}`}
            style={{ color: 'var(--text-dim)' }}
          >
            Professional experience and academic journey.
          </p>
        </div>

        {/* Tab switcher */}
        <div className={`flex justify-center mb-10 reveal-hidden stagger-4 ${inView ? 'revealed' : ''}`}>
          <div className="flex p-1.5 rounded-2xl gap-1" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            {[
              { key: 'experience', icon: <MdWork size={18} />, label: 'Experience' },
              { key: 'education',  icon: <MdSchool size={18} />, label: 'Education' },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => handleTabChange(t.key)}
                className={`tab-btn flex items-center gap-2 ${activeTab === t.key ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              >
                {t.icon}{t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive split panel */}
        <div
          key={activeTab}
          className={`itl-split reveal-hidden stagger-4 ${inView ? 'revealed' : ''}`}
        >
          {/* Left nav */}
          <div className="itl-nav-scroll" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {data.map((item, i) => (
              <NavBtn
                key={item.id}
                item={item}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Right detail card — key forces re-animation on change */}
          <DetailCard key={`${activeTab}-${activeIndex}`} item={data[activeIndex]} />
        </div>

      </div>
    </div>
  );
};

export default Eduction;
