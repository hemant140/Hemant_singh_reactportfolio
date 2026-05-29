import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Section wrapper with scroll-reveal animation
 * Consistent padding and reveal behavior across all sections
 */
export const Section = ({
  children,
  id,
  name,
  className = '',
  fullHeight = false,
  noPadding = false,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px -100px 0px',
  });

  const paddingClasses = noPadding ? '' : 'py-24 md:py-32';
  const heightClasses = fullHeight ? 'min-h-screen' : '';

  return (
    <motion.section
      ref={ref}
      id={id}
      name={name || id}
      className={`relative ${paddingClasses} ${heightClasses} ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

/**
 * Container for consistent max-width and padding
 */
export const Container = ({
  children,
  className = '',
  size = 'default',
}) => {
  const sizeClasses = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-6 md:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Section header with label, title, and optional subtitle
 */
export const SectionHeader = ({
  label,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const alignClasses = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignClasses} ${className}`}>
      {label && (
        <motion.span
          className="section-label block mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {label}
        </motion.span>
      )}
      {title && (
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          className={`section-subtitle mt-6 ${centered ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default Section;
