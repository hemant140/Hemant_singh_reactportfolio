import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { Container, SectionHeader } from '../common/Section';
import { GradientText } from '../common/GradientText';

// Case study data
const CASE_STUDIES = [
  {
    id: 'bluearn',
    title: 'Bluearn PMS',
    tagline: 'Multi-Tenant Hotel Management System',
    category: 'Enterprise Software',
    accentColor: '#a855f7',
    problem: 'Hotels struggled with fragmented systems for booking, billing, housekeeping, and guest management, leading to operational inefficiencies and poor guest experiences.',
    challenge: 'Creating a unified multi-tenant platform with real-time booking management, AI-powered dynamic pricing algorithms, and optimized PostgreSQL architecture for high performance.',
    architecture: [
      { name: 'NestJS Backend', type: 'service' },
      { name: 'Booking Engine', type: 'service' },
      { name: 'Dynamic Pricing AI', type: 'ai' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'Real-time Availability', type: 'service' },
    ],
    scale: {
      properties: '50+',
      bookings: '10K+/month',
      latency: 'Low',
    },
    technologies: ['NestJS', 'PostgreSQL', 'TypeScript', 'Docker', 'AI/ML'],
    outcome: 'Built scalable multi-tenant PMS with AI-driven dynamic pricing, real-time availability, and optimized database architecture.',
    links: {},
  },
  {
    id: 'orimon',
    title: 'Orimon.ai',
    tagline: 'AI-Powered Chatbot Platform',
    category: 'AI & SaaS',
    accentColor: '#3b82f6',
    problem: 'Businesses needed intelligent chatbots that could handle complex conversations, automate workflows, and integrate with existing CRM systems while supporting multiple languages.',
    challenge: 'Building a workflow automation engine with FAQ management, chat summarization, multilingual training with duplicate detection, and seamless CRM integration for live chat escalation.',
    architecture: [
      { name: 'Node.js Backend', type: 'service' },
      { name: 'Workflow Engine', type: 'service' },
      { name: 'FAQ Manager', type: 'service' },
      { name: 'MongoDB', type: 'database' },
      { name: 'CRM Integration', type: 'external' },
    ],
    scale: {
      users: '100K+',
      automation: 'Workflow',
      languages: 'Multi',
    },
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'REST APIs', 'React'],
    outcome: 'Improved automated query resolution with workflow automation, multilingual support, and seamless human escalation through CRM integration.',
    links: {
      live: 'https://orimon.ai',
    },
  },
  {
    id: 'ghgsync',
    title: 'GHG Sync',
    tagline: 'Carbon Emissions Reporting Platform',
    category: 'Sustainability Tech',
    accentColor: '#22c55e',
    problem: 'Organizations lacked tools to accurately measure, track, and report their carbon emissions with proper authentication, access control, and audit-ready compliance.',
    challenge: 'Building a multi-tenant SaaS platform with modular microservices architecture, centralized JWT/RBAC authentication, automated CI/CD pipelines, and high-volume report generation.',
    architecture: [
      { name: 'NestJS Microservices', type: 'service' },
      { name: 'Auth Service (JWT/RBAC)', type: 'service' },
      { name: 'Report Generator', type: 'service' },
      { name: 'MongoDB', type: 'database' },
      { name: 'React Dashboard', type: 'frontend' },
    ],
    scale: {
      calculations: '1000s/month',
      deployments: 'Daily',
      architecture: 'Microservices',
    },
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'React', 'AWS EC2', 'GitHub Actions', 'Docker'],
    outcome: 'Enabled enterprises to achieve compliance with automated reporting, centralized authentication, and streamlined CI/CD deployments.',
    links: {},
  },
  {
    id: 'fintech',
    title: 'FinTech Platform',
    tagline: 'Financial Technology Backend',
    category: 'FinTech',
    accentColor: '#f97316',
    problem: 'Financial platforms required secure, reliable backend services with robust authentication and authorization for sensitive financial operations.',
    challenge: 'Developing secure RESTful APIs with proper authentication mechanisms, authorization controls, and reliable data handling for financial transactions.',
    architecture: [
      { name: 'Node.js Backend', type: 'service' },
      { name: 'Auth Service', type: 'service' },
      { name: 'API Gateway', type: 'service' },
      { name: 'Database Layer', type: 'database' },
      { name: 'Security Layer', type: 'infra' },
    ],
    scale: {
      reliability: 'High',
      security: 'Enterprise',
      apis: 'RESTful',
    },
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Authentication'],
    outcome: 'Delivered secure financial technology platform with reliable backend services and robust access control mechanisms.',
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
