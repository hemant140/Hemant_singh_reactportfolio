import { motion } from 'framer-motion';

/**
 * Animated gradient text component
 * Creates a premium gradient effect with optional animation
 */
export const GradientText = ({
  children,
  className = '',
  animate = false,
  as: Component = 'span',
}) => {
  const baseClasses = animate ? 'gradient-text-animated' : 'gradient-text';

  if (animate) {
    return (
      <motion.span
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
};

/**
 * Gradient border wrapper
 */
export const GradientBorder = ({
  children,
  className = '',
  borderRadius = '1rem',
}) => {
  return (
    <div
      className={`relative p-[1px] ${className}`}
      style={{
        background: 'var(--gradient-brand)',
        borderRadius,
      }}
    >
      <div
        className="relative bg-[var(--bg-card)] h-full"
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientText;
