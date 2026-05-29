import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiPackage, FiUsers, FiCpu, FiCloud, FiHome, FiActivity, FiCalendar, FiGlobe
} from 'react-icons/fi';
import { Container, SectionHeader } from '../common/Section';
import { GradientText } from '../common/GradientText';

// Achievement data
const ACHIEVEMENTS = [
  {
    icon: FiPackage,
    value: '20+',
    label: 'Production Projects',
    description: 'Shipped to real users',
    color: '#3b82f6',
  },
  {
    icon: FiUsers,
    value: '5',
    label: 'Companies',
    description: 'Career journey',
    color: '#22c55e',
  },
  {
    icon: FiCpu,
    value: 'AI',
    label: 'Chatbot Platform',
    description: 'Orimon.ai workflow automation',
    color: '#a855f7',
  },
  {
    icon: FiCloud,
    value: 'SaaS',
    label: 'Multi-tenant Systems',
    description: 'Scalable architectures',
    color: '#06b6d4',
  },
  {
    icon: FiHome,
    value: 'PMS',
    label: 'Hotel Management',
    description: 'Dynamic pricing & booking',
    color: '#f97316',
  },
  {
    icon: FiActivity,
    value: 'GHG',
    label: 'Carbon Reporting',
    description: 'Emissions tracking platform',
    color: '#22c55e',
  },
  {
    icon: FiCalendar,
    value: '3.5+',
    label: 'Years Experience',
    description: 'Full-stack development',
    color: '#ec4899',
  },
  {
    icon: FiGlobe,
    value: '100K+',
    label: 'Users Served',
    description: 'Across all platforms',
    color: '#3b82f6',
  },
];

// Achievement card component
const AchievementCard = ({ achievement, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div
        className="card-elevated p-6 md:p-8 h-full relative overflow-hidden transition-all duration-300 group-hover:border-[var(--border-bright)]"
      >
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${achievement.color}15` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <achievement.icon
            className="w-7 h-7"
            style={{ color: achievement.color }}
          />
        </motion.div>

        {/* Value */}
        <motion.div
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{ color: achievement.color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
        >
          {achievement.value}
        </motion.div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-[var(--text)] mb-1">
          {achievement.label}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-dim)]">
          {achievement.description}
        </p>

        {/* Decorative gradient */}
        <div
          className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${achievement.color} 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

// Main Achievements Section
const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="achievements"
      name="achievements"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
        }}
      />

      <Container>
        <SectionHeader
          label="Impact"
          title={
            <>
              Numbers That <GradientText>Matter</GradientText>
            </>
          }
          subtitle="Metrics from products I've built and systems I've scaled."
        />

        {/* Achievement grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard
              key={achievement.label}
              achievement={achievement}
              index={index}
            />
          ))}
        </motion.div>

        {/* Summary statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Every number represents real users, real problems solved, and real
            business value delivered through thoughtful engineering.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AchievementsSection;
