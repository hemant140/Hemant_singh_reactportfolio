import { useState, useEffect } from 'react';

/**
 * Hook to detect user's reduced motion preference
 * Respects prefers-reduced-motion media query for accessibility
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window exists (SSR safety)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Legacy browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Helper to get animation config based on reduced motion preference
 */
export const useAnimationConfig = () => {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion,
    // Return reduced duration/distance for users who prefer reduced motion
    duration: prefersReducedMotion ? 0.01 : 1,
    distance: prefersReducedMotion ? 0 : 40,
    scale: prefersReducedMotion ? 1 : 0.95,
    // Helper for conditional animation props
    animate: (props) => prefersReducedMotion ? {} : props,
    // GSAP-specific helpers
    gsapDuration: prefersReducedMotion ? 0.01 : undefined,
  };
};

export default useReducedMotion;
