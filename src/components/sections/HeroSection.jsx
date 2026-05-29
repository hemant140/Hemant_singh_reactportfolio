import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import SystemArchitecture from '../canvas/SystemArchitecture';
import { GradientText } from '../common/GradientText';
import { PrimaryButton, SecondaryButton } from '../common/Button';

// Stats data
const STATS = [
  { value: '20+', label: 'Production Projects' },
  { value: '5', label: 'Companies' },
  { value: '3.5+', label: 'Years Experience' },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      name="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* System Architecture Background */}
      <SystemArchitecture />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="status-badge mx-auto">
            <span className="live-indicator" />
            <span>Sr. Software Engineer @ Blue Enigma</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="section-title-xl mb-6"
        >
          Building Products
          <br />
          <GradientText animate>That Scale</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="section-subtitle mx-auto mb-10"
        >
          Full-Stack Software Engineer with 3.5+ years specializing in backend development
          and scalable system design. Building production-grade APIs, microservices,
          multi-tenant SaaS platforms, AI chatbots, and enterprise hotel management systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link to="projects" smooth duration={600} offset={-80}>
            <PrimaryButton>
              View Case Studies
            </PrimaryButton>
          </Link>
          <SecondaryButton
            href="https://drive.google.com/file/d/1pBsanJxnOhWcr1JwT_u9RqGFBDU-c-dI/view"
            icon={<FiDownload className="w-4 h-4" />}
          >
            Resume
          </SecondaryButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16"
        >
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link to="about" smooth duration={600} offset={-80}>
            <motion.div
              className="flex flex-col items-center gap-2 cursor-pointer group"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs font-medium text-[var(--text-dim)] group-hover:text-[var(--text-secondary)] transition-colors">
                Scroll to explore
              </span>
              <FiArrowDown className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text-secondary)] transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
