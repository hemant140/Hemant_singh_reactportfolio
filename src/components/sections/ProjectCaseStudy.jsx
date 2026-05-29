import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { Container, SectionHeader } from '../common/Section';
import { GradientText } from '../common/GradientText';

// Case study data
const CASE_STUDIES = [
  {
    id: 'orimon',
    title: 'Orimon.ai',
    tagline: 'Enterprise AI Chatbot Platform',
    category: 'AI & SaaS',
    accentColor: '#3b82f6',
    problem: 'Businesses needed intelligent chatbots that could handle complex conversations, integrate with existing systems, and scale to millions of users without compromising response quality.',
    challenge: 'Building a real-time conversation engine that processes natural language, maintains context across sessions, and delivers sub-second responses while handling concurrent users at scale.',
    architecture: [
      { name: 'NestJS Gateway', type: 'service' },
      { name: 'Conversation Engine', type: 'ai' },
      { name: 'Intent Classifier', type: 'ai' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'Redis Cache', type: 'cache' },
    ],
    scale: {
      users: '100K+',
      messages: '1M+/month',
      uptime: '99.9%',
    },
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'OpenAI', 'AWS'],
    outcome: 'Reduced customer support costs by 60% for enterprise clients while maintaining 95%+ user satisfaction scores.',
    links: {
      live: 'https://orimon.ai',
    },
  },
  {
    id: 'bluearn',
    title: 'Bluearn PMS',
    tagline: 'Hotel Management System',
    category: 'Enterprise Software',
    accentColor: '#a855f7',
    problem: 'Hotels struggled with fragmented systems for booking, billing, housekeeping, and guest management, leading to operational inefficiencies and poor guest experiences.',
    challenge: 'Creating a unified platform with real-time synchronization across all hotel operations, dynamic pricing algorithms, and seamless third-party integrations.',
    architecture: [
      { name: 'API Gateway', type: 'service' },
      { name: 'Booking Engine', type: 'service' },
      { name: 'Pricing Service', type: 'ai' },
      { name: 'MongoDB', type: 'database' },
      { name: 'Payment Gateway', type: 'external' },
    ],
    scale: {
      properties: '50+',
      bookings: '10K+/month',
      revenue: '$2M+ processed',
    },
    technologies: ['NestJS', 'Angular', 'MongoDB', 'Stripe', 'Socket.io', 'Docker'],
    outcome: 'Reduced booking conflicts by 94% and increased operational efficiency by 40% across all managed properties.',
    links: {
      live: 'https://bluearn.com',
    },
  },
  {
    id: 'ghgsync',
    title: 'GHG Sync',
    tagline: 'Carbon Emission Tracking Platform',
    category: 'Sustainability Tech',
    accentColor: '#22c55e',
    problem: 'Organizations lacked tools to accurately measure, track, and report their carbon emissions across complex supply chains and operations.',
    challenge: 'Building a data pipeline that ingests emissions data from multiple sources, applies calculation methodologies (GHG Protocol), and generates compliance-ready reports.',
    architecture: [
      { name: 'Data Ingestion', type: 'service' },
      { name: 'Calculation Engine', type: 'service' },
      { name: 'Report Generator', type: 'service' },
      { name: 'TimescaleDB', type: 'database' },
      { name: 'Analytics Dashboard', type: 'frontend' },
    ],
    scale: {
      dataPoints: '1M+',
      reports: '500+/year',
      accuracy: '99.5%',
    },
    technologies: ['NestJS', 'React', 'TimescaleDB', 'Python', 'AWS Lambda', 'Grafana'],
    outcome: 'Enabled 30+ enterprises to achieve carbon neutrality goals with automated, audit-ready reporting.',
    links: {},
  },
  {
    id: 'dayzio',
    title: 'Dayzio',
    tagline: 'Smart Scheduling Infrastructure',
    category: 'SaaS Platform',
    accentColor: '#f97316',
    problem: 'Teams wasted hours on scheduling coordination, dealing with timezone conflicts, availability mismatches, and no-shows.',
    challenge: 'Developing an intelligent scheduling system with calendar integrations, timezone handling, buffer time optimization, and automated reminders.',
    architecture: [
      { name: 'Scheduling API', type: 'service' },
      { name: 'Calendar Sync', type: 'service' },
      { name: 'Notification Service', type: 'service' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'Queue System', type: 'infra' },
    ],
    scale: {
      meetings: '50K+/month',
      integrations: '10+',
      noShowReduction: '45%',
    },
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Google Calendar API', 'Twilio', 'Bull'],
    outcome: 'Reduced scheduling time by 80% and no-show rates by 45% through smart reminders and buffer optimization.',
    links: {},
  },
];

// Mini architecture diagram component
const MiniArchitecture = ({ nodes, accentColor }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {nodes.map((node, index) => (
        <motion.div
          key={node.name}
          className="arch-node px-3 py-2"
          style={{ borderColor: index === 0 ? accentColor : undefined }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ borderColor: accentColor, scale: 1.02 }}
        >
          <span className="mono-text text-xs text-[var(--text-secondary)]">
            {node.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// Scale metrics component
const ScaleMetrics = ({ scale, accentColor }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {Object.entries(scale).map(([key, value], index) => (
        <motion.div
          key={key}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div
            className="text-2xl font-bold"
            style={{ color: accentColor }}
          >
            {value}
          </div>
          <div className="text-xs text-[var(--text-dim)] capitalize mt-1">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Tech stack badges
const TechStack = ({ technologies, accentColor }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: `${accentColor}15`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
};

// Individual case study card
const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={cardRef}
      className="relative py-24 md:py-32"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container size="wide">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
          {/* Content */}
          <div className={isEven ? '' : 'md:col-start-2'}>
            {/* Category & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: study.accentColor }}
              >
                {study.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-2">
                {study.title}
              </h2>
              <p className="text-xl text-[var(--text-secondary)]">
                {study.tagline}
              </p>
            </motion.div>

            {/* Problem & Challenge */}
            <motion.div
              className="mt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
                  The Problem
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {study.problem}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
                  Engineering Challenge
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mt-8 mb-2">
                Architecture
              </h3>
              <MiniArchitecture nodes={study.architecture} accentColor={study.accentColor} />
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <TechStack technologies={study.technologies} accentColor={study.accentColor} />
            </motion.div>

            {/* Links */}
            {study.links.live && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={study.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  style={{ color: study.accentColor }}
                >
                  View Live Project
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </div>

          {/* Scale & Outcome Card */}
          <motion.div
            className={`relative ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div
              className="card-elevated p-8 md:p-10"
              style={{
                background: `linear-gradient(135deg, var(--bg-card) 0%, ${study.accentColor}08 100%)`,
                borderColor: `${study.accentColor}20`,
              }}
            >
              {/* Scale metrics */}
              <ScaleMetrics scale={study.scale} accentColor={study.accentColor} />

              {/* Divider */}
              <div className="divider my-8" />

              {/* Outcome */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-3">
                  Outcome
                </h3>
                <p className="text-[var(--text)] leading-relaxed font-medium">
                  {study.outcome}
                </p>
              </div>

              {/* Decorative accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${study.accentColor} 0%, transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Divider line */}
      {index < CASE_STUDIES.length - 1 && (
        <div className="divider max-w-4xl mx-auto mt-24" />
      )}
    </motion.article>
  );
};

// Main Projects Section
const ProjectCaseStudySection = () => {
  return (
    <section id="projects" name="projects" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
        }}
      />

      <Container>
        <SectionHeader
          label="Case Studies"
          title={
            <>
              Products I've <GradientText>Shipped</GradientText>
            </>
          }
          subtitle="From concept to production. Here's the engineering behind the products."
        />
      </Container>

      {/* Case Studies */}
      {CASE_STUDIES.map((study, index) => (
        <CaseStudyCard key={study.id} study={study} index={index} />
      ))}
    </section>
  );
};

export default ProjectCaseStudySection;
