import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations with proper cleanup
 * Uses gsap.context() for automatic cleanup of animations
 */
export const useGSAPContext = (callback, deps = []) => {
  const ctx = useRef();

  useLayoutEffect(() => {
    ctx.current = gsap.context(callback);
    return () => ctx.current.revert();
  }, deps);

  return ctx;
};

/**
 * Hook for scroll-triggered animations
 */
export const useScrollTrigger = (ref, options = {}) => {
  const {
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    markers = false,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  } = options;

  useLayoutEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      scrub,
      markers,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    });

    return () => trigger.kill();
  }, [ref, start, end, scrub]);
};

/**
 * Hook for parallax effects
 */
export const useParallax = (ref, speed = 0.5) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
};

export default useGSAPContext;
