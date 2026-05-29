import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiAngular, SiNextdotjs, SiTypescript,
  SiNodedotjs, SiNestjs, SiExpress, SiPython, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiElasticsearch,
  SiAmazonaws, SiDocker, SiKubernetes, SiGithubactions,
  SiTensorflow, SiOpenai,
} from 'react-icons/si';
import { FiDatabase, FiCloud, FiCpu, FiLayers, FiServer, FiCode, FiGitBranch } from 'react-icons/fi';
import { Container, SectionHeader } from '../common/Section';
import { GradientText } from '../common/GradientText';

// Skill categories with technologies
const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: FiCode,
    color: '#3b82f6',
    position: { x: 15, y: 30 },
    skills: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'Angular', icon: SiAngular, level: 80 },
      { name: 'TypeScript', icon: SiTypescript, level: 90 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: FiServer,
    color: '#22c55e',
    position: { x: 50, y: 20 },
    skills: [
      { name: 'NestJS', icon: SiNestjs, level: 95 },
      { name: 'Node.js', icon: SiNodedotjs, level: 92 },
      { name: 'Express', icon: SiExpress, level: 88 },
      { name: 'GraphQL', icon: SiGraphql, level: 75 },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: FiDatabase,
    color: '#f97316',
    position: { x: 85, y: 30 },
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
      { name: 'MongoDB', icon: SiMongodb, level: 88 },
      { name: 'Redis', icon: SiRedis, level: 85 },
      { name: 'Elasticsearch', icon: SiElasticsearch, level: 70 },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: FiCloud,
    color: '#a855f7',
    position: { x: 25, y: 70 },
    skills: [
      { name: 'AWS', icon: SiAmazonaws, level: 85 },
      { name: 'Docker', icon: SiDocker, level: 88 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 70 },
      { name: 'CI/CD', icon: SiGithubactions, level: 85 },
    ],
  },
  {
    id: 'ai',
    name: 'AI & ML',
    icon: FiCpu,
    color: '#06b6d4',
    position: { x: 75, y: 70 },
    skills: [
      { name: 'OpenAI', icon: SiOpenai, level: 85 },
      { name: 'Python', icon: SiPython, level: 75 },
      { name: 'TensorFlow', icon: SiTensorflow, level: 60 },
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture',
    icon: FiLayers,
    color: '#ec4899',
    position: { x: 50, y: 50 },
    skills: [
      { name: 'Microservices', icon: FiGitBranch, level: 90 },
      { name: 'REST APIs', icon: FiServer, level: 95 },
      { name: 'System Design', icon: FiLayers, level: 85 },
    ],
  },
];

// Connections between categories
const CONNECTIONS = [
  { from: 'frontend', to: 'backend' },
  { from: 'backend', to: 'databases' },
  { from: 'backend', to: 'architecture' },
  { from: 'cloud', to: 'backend' },
  { from: 'cloud', to: 'architecture' },
  { from: 'ai', to: 'backend' },
  { from: 'ai', to: 'architecture' },
  { from: 'databases', to: 'architecture' },
  { from: 'frontend', to: 'architecture' },
];

// Category node component
const CategoryNode = ({ category, isActive, isRelated, onClick, containerRef }) => {
  const nodeRef = useRef(null);

  return (
    <motion.button
      ref={nodeRef}
      onClick={() => onClick(category.id)}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
      style={{
        left: `${category.position.x}%`,
        top: `${category.position.y}%`,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ backgroundColor: category.color }}
        animate={{
          opacity: isActive ? 0.4 : isRelated ? 0.2 : 0,
          scale: isActive ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Node circle */}
      <motion.div
        className={`
          relative w-20 h-20 rounded-full flex flex-col items-center justify-center
          border-2 transition-all duration-300 cursor-pointer
          ${isActive ? 'bg-[var(--bg-card)]' : 'bg-[var(--bg)]'}
        `}
        style={{
          borderColor: isActive || isRelated ? category.color : 'var(--border)',
          boxShadow: isActive
            ? `0 0 30px ${category.color}50, 0 4px 20px rgba(0,0,0,0.3)`
            : isRelated
            ? `0 0 15px ${category.color}30`
            : undefined,
        }}
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
      >
        <category.icon
          className="w-6 h-6 mb-1"
          style={{ color: isActive || isRelated ? category.color : 'var(--text-dim)' }}
        />
        <span
          className="text-[10px] font-semibold"
          style={{ color: isActive || isRelated ? category.color : 'var(--text-dim)' }}
        >
          {category.name}
        </span>
      </motion.div>
    </motion.button>
  );
};

// Connection lines SVG
const ConnectionLines = ({ activeCategory, categories }) => {
  const getRelatedCategories = useCallback((categoryId) => {
    if (!categoryId) return [];
    return CONNECTIONS
      .filter(c => c.from === categoryId || c.to === categoryId)
      .map(c => c.from === categoryId ? c.to : c.from);
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {CONNECTIONS.map((conn, index) => {
        const fromCat = categories.find(c => c.id === conn.from);
        const toCat = categories.find(c => c.id === conn.to);
        if (!fromCat || !toCat) return null;

        const isActiveConnection =
          activeCategory === conn.from ||
          activeCategory === conn.to;

        return (
          <motion.line
            key={`${conn.from}-${conn.to}`}
            x1={`${fromCat.position.x}%`}
            y1={`${fromCat.position.y}%`}
            x2={`${toCat.position.x}%`}
            y2={`${toCat.position.y}%`}
            stroke={isActiveConnection ? 'url(#lineGradient)' : 'var(--border)'}
            strokeWidth={isActiveConnection ? 2 : 1}
            strokeDasharray={isActiveConnection ? '0' : '4 4'}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: isActiveConnection ? 1 : 0.3,
            }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        );
      })}
    </svg>
  );
};

// Skills detail panel
const SkillsDetail = ({ category }) => {
  if (!category) return null;

  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="card-elevated p-6 md:p-8"
      style={{ borderColor: `${category.color}30` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <category.icon className="w-6 h-6" style={{ color: category.color }} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--text)]">{category.name}</h3>
          <p className="text-sm text-[var(--text-dim)]">
            {category.skills.length} technologies
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${category.color}10` }}
            >
              <skill.icon className="w-5 h-5" style={{ color: category.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-[var(--text)]">
                  {skill.name}
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: category.color }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: category.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Skills Ecosystem Section
const SkillsEcosystem = () => {
  const [activeCategory, setActiveCategory] = useState('architecture');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const getRelatedCategories = useCallback((categoryId) => {
    if (!categoryId) return [];
    return CONNECTIONS
      .filter(c => c.from === categoryId || c.to === categoryId)
      .map(c => c.from === categoryId ? c.to : c.from);
  }, []);

  const relatedIds = activeCategory ? getRelatedCategories(activeCategory) : [];
  const activeCategoryData = SKILL_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      name="skills"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
        }}
      />

      <Container size="wide">
        <SectionHeader
          label="Tech Stack"
          title={
            <>
              Engineering <GradientText>Ecosystem</GradientText>
            </>
          }
          subtitle="An interconnected map of technologies I use to build scalable products."
        />

        <motion.div
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Graph visualization */}
          <div className="lg:col-span-3 relative">
            <div
              className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
              style={{ minHeight: '400px' }}
            >
              {/* Connection lines */}
              <ConnectionLines
                activeCategory={activeCategory}
                categories={SKILL_CATEGORIES}
              />

              {/* Category nodes */}
              {SKILL_CATEGORIES.map((category) => (
                <CategoryNode
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  isRelated={relatedIds.includes(category.id)}
                  onClick={setActiveCategory}
                />
              ))}

              {/* Instructions */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs text-[var(--text-dim)]">
                  Click on a category to explore technologies
                </p>
              </div>
            </div>
          </div>

          {/* Details panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <SkillsDetail category={activeCategoryData} />
            </AnimatePresence>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                <div className="text-2xl font-bold text-[var(--text)]">6</div>
                <div className="text-xs text-[var(--text-dim)]">Domains</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                <div className="text-2xl font-bold text-[var(--text)]">20+</div>
                <div className="text-xs text-[var(--text-dim)]">Technologies</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                <div className="text-2xl font-bold text-[var(--text)]">3.5+</div>
                <div className="text-xs text-[var(--text-dim)]">Years</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SkillsEcosystem;
