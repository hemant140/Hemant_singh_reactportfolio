import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiUsers, FiCode, FiTrendingUp } from 'react-icons/fi';
import { Container, SectionHeader } from '../common/Section';
import { GradientText } from '../common/GradientText';

// Journey/Experience data
const JOURNEY_DATA = [
  {
    id: 'virtuzo',
    company: 'Virtuzo Infosystems',
    role: 'Junior Developer',
    period: 'Aug 2021 - Jan 2022',
    duration: '6 months',
    color: '#64748b',
    phase: 'Foundation',
    description: 'Started my journey building web applications and learning enterprise development practices.',
    achievements: [
      'Built 5+ client websites with React and Node.js',
      'Learned agile methodologies and version control',
      'Developed foundation in full-stack development',
    ],
    metrics: {
      projects: 5,
      teamSize: 8,
      techStack: ['React', 'Node.js', 'MongoDB'],
    },
  },
  {
    id: 'plutosone',
    company: 'PlutosOne',
    role: 'Software Developer',
    period: 'Jan 2022 - Jun 2022',
    duration: '6 months',
    color: '#f97316',
    phase: 'Growth',
    description: 'Transitioned to fintech, building secure payment systems and API integrations.',
    achievements: [
      'Developed payment gateway integrations',
      'Built RESTful APIs handling 10K+ transactions',
      'Implemented security best practices for financial data',
    ],
    metrics: {
      projects: 3,
      teamSize: 12,
      techStack: ['NestJS', 'PostgreSQL', 'Redis'],
    },
  },
  {
    id: 'ecohodo',
    company: 'Ecohodo Technologies',
    role: 'Software Engineer',
    period: 'Jun 2022 - Dec 2022',
    duration: '7 months',
    color: '#22c55e',
    phase: 'Scaling',
    description: 'Led development of sustainability platforms, scaling systems for enterprise clients.',
    achievements: [
      'Architected carbon emission tracking platform',
      'Scaled data pipeline to handle 1M+ data points',
      'Led team of 3 developers on GHG Sync project',
    ],
    metrics: {
      projects: 4,
      teamSize: 15,
      techStack: ['NestJS', 'TimescaleDB', 'AWS'],
    },
  },
  {
    id: 'oriserve',
    company: 'Oriserve (Orimon.ai)',
    role: 'Software Engineer',
    period: 'Dec 2022 - Mar 2024',
    duration: '1 year 4 months',
    color: '#3b82f6',
    phase: 'AI Platform',
    description: 'Owned critical AI chatbot infrastructure, building scalable conversation systems.',
    achievements: [
      'Built conversation engine handling 100K+ users',
      'Reduced API latency by 40% through optimization',
      'Implemented real-time analytics dashboard',
      'Led migration to microservices architecture',
    ],
    metrics: {
      projects: 8,
      teamSize: 25,
      techStack: ['NestJS', 'PostgreSQL', 'OpenAI', 'Redis'],
    },
  },
  {
    id: 'blueenigma',
    company: 'Blue Enigma',
    role: 'Founding Engineer',
    period: 'Mar 2024 - Present',
    duration: 'Current',
    color: '#a855f7',
    phase: 'Leadership',
    description: 'Leading product development from 0 to 1, building enterprise hotel management systems.',
    achievements: [
      'Architected entire product from scratch',
      'Built scalable multi-tenant SaaS platform',
      'Managing 50+ hotel properties on platform',
      'Driving product decisions and technical roadmap',
    ],
    metrics: {
      projects: 2,
      teamSize: 5,
      techStack: ['NestJS', 'Angular', 'MongoDB', 'Docker'],
    },
  },
];

// Timeline node component
const TimelineNode = ({ experience, index, isActive, onClick }) => {
  return (
    <motion.button
      onClick={() => onClick(index)}
      className={`relative flex flex-col items-center group ${isActive ? 'z-10' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Node circle */}
      <motion.div
        className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
          isActive
            ? 'bg-[var(--bg-card)] shadow-lg'
            : 'bg-[var(--bg)] hover:bg-[var(--bg-card)]'
        }`}
        style={{
          borderColor: isActive ? experience.color : 'var(--border)',
          boxShadow: isActive ? `0 0 24px ${experience.color}40` : undefined,
        }}
        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <FiBriefcase
          className="w-5 h-5"
          style={{ color: isActive ? experience.color : 'var(--text-dim)' }}
        />
      </motion.div>

      {/* Phase label */}
      <motion.span
        className="mt-3 text-xs font-medium uppercase tracking-wider transition-colors"
        style={{
          color: isActive ? experience.color : 'var(--text-dim)',
        }}
      >
        {experience.phase}
      </motion.span>

      {/* Company name */}
      <span
        className={`mt-1 text-sm font-medium transition-colors ${
          isActive ? 'text-[var(--text)]' : 'text-[var(--text-secondary)]'
        }`}
      >
        {experience.company.split(' ')[0]}
      </span>

      {/* Active indicator line */}
      {isActive && (
        <motion.div
          className="absolute -bottom-4 w-0.5 h-4 rounded-full"
          style={{ backgroundColor: experience.color }}
          layoutId="activeIndicator"
        />
      )}
    </motion.button>
  );
};

// Connection line between nodes
const ConnectionLine = ({ isActive, color }) => (
  <div className="flex-1 h-0.5 mx-2 relative">
    <div className="absolute inset-0 bg-[var(--border)]" />
    <motion.div
      className="absolute inset-0 origin-left"
      style={{ backgroundColor: color }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  </div>
);

// Detail card component
const DetailCard = ({ experience }) => {
  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="card-elevated p-8 md:p-10 relative overflow-hidden"
      style={{
        borderColor: `${experience.color}30`,
      }}
    >
      {/* Accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
        style={{ backgroundColor: experience.color }}
      />

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-[var(--text)]">
            {experience.company}
          </h3>
          <p className="text-lg" style={{ color: experience.color }}>
            {experience.role}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[var(--text-secondary)]">{experience.period}</p>
          <p className="text-xs text-[var(--text-dim)]">{experience.duration}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-4">
          Key Achievements
        </h4>
        <ul className="space-y-3">
          {experience.achievements.map((achievement, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3 text-[var(--text-secondary)]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <FiArrowRight
                className="w-4 h-4 mt-1 flex-shrink-0"
                style={{ color: experience.color }}
              />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FiCode className="w-4 h-4 text-[var(--text-dim)]" />
            <span className="text-2xl font-bold" style={{ color: experience.color }}>
              {experience.metrics.projects}
            </span>
          </div>
          <span className="text-xs text-[var(--text-dim)]">Projects</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FiUsers className="w-4 h-4 text-[var(--text-dim)]" />
            <span className="text-2xl font-bold" style={{ color: experience.color }}>
              {experience.metrics.teamSize}
            </span>
          </div>
          <span className="text-xs text-[var(--text-dim)]">Team Size</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FiTrendingUp className="w-4 h-4 text-[var(--text-dim)]" />
            <span className="text-2xl font-bold" style={{ color: experience.color }}>
              {experience.metrics.techStack.length}
            </span>
          </div>
          <span className="text-xs text-[var(--text-dim)]">Core Tech</span>
        </div>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-6">
        {experience.metrics.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${experience.color}15`,
              color: experience.color,
              border: `1px solid ${experience.color}30`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Background decoration */}
      <div
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${experience.color} 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

// Main Journey Section
const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(JOURNEY_DATA.length - 1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="experience"
      name="experience"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 100%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
        }}
      />

      <Container>
        <SectionHeader
          label="The Journey"
          title={
            <>
              From Developer to <GradientText>Founding Engineer</GradientText>
            </>
          }
          subtitle="A startup journey of growth, leadership, and building products that matter."
        />

        {/* Timeline */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto">
            {JOURNEY_DATA.map((exp, index) => (
              <div key={exp.id} className="flex items-center flex-1 last:flex-none">
                <TimelineNode
                  experience={exp}
                  index={index}
                  isActive={index === activeIndex}
                  onClick={setActiveIndex}
                />
                {index < JOURNEY_DATA.length - 1 && (
                  <ConnectionLine
                    isActive={index < activeIndex}
                    color={JOURNEY_DATA[index + 1].color}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Timeline - Horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex items-center gap-4 min-w-max">
              {JOURNEY_DATA.map((exp, index) => (
                <div key={exp.id} className="flex items-center">
                  <TimelineNode
                    experience={exp}
                    index={index}
                    isActive={index === activeIndex}
                    onClick={setActiveIndex}
                  />
                  {index < JOURNEY_DATA.length - 1 && (
                    <div className="w-12 h-0.5 mx-2 bg-[var(--border)]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detail Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <DetailCard
              key={JOURNEY_DATA[activeIndex].id}
              experience={JOURNEY_DATA[activeIndex]}
            />
          </AnimatePresence>
        </motion.div>

        {/* Journey summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[var(--text-dim)] text-sm">
            Total experience across{' '}
            <span className="text-[var(--text-secondary)] font-medium">5 companies</span>
            {' • '}
            <span className="text-[var(--text-secondary)] font-medium">20+ projects</span>
            {' • '}
            <span className="text-[var(--text-secondary)] font-medium">3.5+ years</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default JourneySection;
