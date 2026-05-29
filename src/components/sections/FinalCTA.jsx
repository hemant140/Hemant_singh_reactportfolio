import { useRef, useEffect, useCallback, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { GradientText } from '../common/GradientText';
import { GradientButton, SecondaryButton } from '../common/Button';

// Living Network Canvas Component
const LivingNetwork = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const nodesRef = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize nodes
  useEffect(() => {
    const nodeCount = 50;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }

    nodesRef.current = nodes;
  }, [dimensions]);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = dimensions;

    if (!width || !height) return;

    ctx.clearRect(0, 0, width, height);

    const nodes = nodesRef.current;

    // Update and draw nodes
    nodes.forEach((node, i) => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Keep in bounds
      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));

      // Draw connections to nearby nodes
      nodes.forEach((other, j) => {
        if (i >= j) return;

        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      });

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${node.opacity})`;
      ctx.fill();

      // Draw glow
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius * 3
      );
      gradient.addColorStop(0, `rgba(59, 130, 246, ${node.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [dimensions]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.parentElement.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });

      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start animation
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
};

// Social link data
const SOCIAL_LINKS = [
  { icon: FiMail, href: 'mailto:hemo.hm579@gmail.com', label: 'Email' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/hemantsingh140', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/hemant140', label: 'GitHub' },
  { icon: FiTwitter, href: 'https://twitter.com/hemantsingh140', label: 'Twitter' },
];

// Main Final CTA Section
const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      name="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Living network background */}
      <div className="absolute inset-0">
        <LivingNetwork />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        {/* Label */}
        <motion.span
          className="section-label block mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Let's Connect
        </motion.span>

        {/* Main headline */}
        <motion.h2
          className="section-title-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Engineering Products
          <br />
          <GradientText animate>Beyond Code</GradientText>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="section-subtitle mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          Looking for a founding engineer who can take your product from concept
          to scale? I build systems that grow with your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <GradientButton href="mailto:hemo.hm579@gmail.com">
            Let's Build Something That Scales
          </GradientButton>
          <SecondaryButton href="https://calendly.com/hemantsingh140">
            Schedule a Call
          </SecondaryButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--border-bright)] transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.div
          className="mt-16 pt-8 border-t border-[var(--border)]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-[var(--text-dim)]">
            Designed & built by Hemant Singh
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
