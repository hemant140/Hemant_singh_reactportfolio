import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Track mouse position globally
 * Returns normalized coordinates (0-1) and pixel coordinates
 */
export const useMousePosition = (options = {}) => {
  const {
    smoothing = 0.1,
    throttleMs = 16, // ~60fps
  } = options;

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
    isActive: false,
  });

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef();
  const lastUpdateRef = useRef(0);

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const animate = useCallback(() => {
    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, smoothing);
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, smoothing);

    setPosition(prev => ({
      ...prev,
      x: currentRef.current.x,
      y: currentRef.current.y,
      normalizedX: currentRef.current.x / window.innerWidth,
      normalizedY: currentRef.current.y / window.innerHeight,
    }));

    rafRef.current = requestAnimationFrame(animate);
  }, [smoothing]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdateRef.current < throttleMs) return;
      lastUpdateRef.current = now;

      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      setPosition(prev => ({ ...prev, isActive: true }));
    };

    const handleMouseLeave = () => {
      setPosition(prev => ({ ...prev, isActive: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate, throttleMs]);

  return position;
};

/**
 * Track mouse position relative to an element
 */
export const useElementMousePosition = (elementRef) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
    isHovering: false,
  });

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({
        x,
        y,
        normalizedX: x / rect.width,
        normalizedY: y / rect.height,
        isHovering: true,
      });
    };

    const handleMouseLeave = () => {
      setPosition(prev => ({
        ...prev,
        normalizedX: 0.5,
        normalizedY: 0.5,
        isHovering: false,
      }));
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef]);

  return position;
};

export default useMousePosition;
