import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi';

/**
 * Primary button with hover effects
 */
export const PrimaryButton = ({
  children,
  onClick,
  href,
  icon,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      className={`btn-primary inline-flex items-center justify-center gap-2 ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...linkProps}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </Component>
  );
};

/**
 * Secondary/outline button
 */
export const SecondaryButton = ({
  children,
  onClick,
  href,
  icon,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      className={`btn-secondary inline-flex items-center justify-center gap-2 ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...linkProps}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </Component>
  );
};

/**
 * Gradient CTA button
 */
export const GradientButton = ({
  children,
  onClick,
  href,
  className = '',
  ...props
}) => {
  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      className={`btn-gradient inline-flex items-center justify-center gap-3 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...linkProps}
      {...props}
    >
      {children}
      <FiArrowRight className="w-5 h-5" />
    </Component>
  );
};

/**
 * Icon-only button
 */
export const IconButton = ({
  icon,
  onClick,
  href,
  label,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-10 h-10',
    large: 'w-12 h-12',
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      className={`
        inline-flex items-center justify-center rounded-lg
        bg-[var(--bg-card)] border border-[var(--border)]
        text-[var(--text-secondary)] hover:text-[var(--text)]
        hover:border-[var(--border-bright)] hover:bg-[var(--bg-elevated)]
        transition-all duration-200
        ${sizeClasses[size]} ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      {...linkProps}
      {...props}
    >
      {icon}
    </Component>
  );
};

/**
 * Download button
 */
export const DownloadButton = ({
  children = 'Download Resume',
  href,
  className = '',
  ...props
}) => (
  <SecondaryButton
    href={href}
    icon={<FiDownload className="w-4 h-4" />}
    className={className}
    {...props}
  >
    {children}
  </SecondaryButton>
);

/**
 * External link button
 */
export const ExternalLinkButton = ({
  children,
  href,
  className = '',
  ...props
}) => (
  <SecondaryButton
    href={href}
    icon={<FiExternalLink className="w-4 h-4" />}
    className={className}
    {...props}
  >
    {children}
  </SecondaryButton>
);

export default PrimaryButton;
