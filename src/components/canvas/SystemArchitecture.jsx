import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Architecture node definitions
const ARCHITECTURE_NODES = [
  { id: 'users', label: 'Users', x: 0.08, y: 0.35, type: 'source', icon: '👥' },
  { id: 'lb', label: 'Load Balancer', x: 0.22, y: 0.35, type: 'infra', icon: '⚖️' },
  { id: 'gateway', label: 'API Gateway', x: 0.38, y: 0.35, type: 'service', icon: '🚪' },
  { id: 'auth', label: 'Auth Service', x: 0.52, y: 0.2, type: 'service', icon: '🔐' },
  { id: 'core', label: 'Core Service', x: 0.52, y: 0.35, type: 'service', icon: '⚙️' },
  { id: 'ai', label: 'AI Engine', x: 0.52, y: 0.5, type: 'ai', icon: '🧠' },
  { id: 'postgres', label: 'PostgreSQL', x: 0.68, y: 0.2, type: 'database', icon: '🐘' },
  { id: 'mongo', label: 'MongoDB', x: 0.68, y: 0.35, type: 'database', icon: '🍃' },
  { id: 'redis', label: 'Redis', x: 0.68, y: 0.5, type: 'cache', icon: '⚡' },
  { id: 'analytics', label: 'Analytics', x: 0.85, y: 0.35, type: 'output', icon: '📊' },
];

// Connection definitions
const CONNECTIONS = [
  { from: 'users', to: 'lb' },
  { from: 'lb', to: 'gateway' },
  { from: 'gateway', to: 'auth' },
  { from: 'gateway', to: 'core' },
  { from: 'gateway', to: 'ai' },
  { from: 'auth', to: 'postgres' },
  { from: 'core', to: 'mongo' },
  { from: 'ai', to: 'redis' },
  { from: 'postgres', to: 'analytics' },
  { from: 'mongo', to: 'analytics' },
  { from: 'redis', to: 'analytics' },
];

// Particle class for data flow animation
class DataParticle {
  constructor(startX, startY, endX, endY, speed = 0.02) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.progress = Math.random();
    this.speed = speed * (0.8 + Math.random() * 0.4);
    this.size = 2 + Math.random() * 2;
    this.opacity = 0.6 + Math.random() * 0.4;
  }

  update() {
    this.progress += this.speed;
    if (this.progress > 1) this.progress = 0;
  }

  getPosition() {
    return {
      x: this.startX + (this.endX - this.startX) * this.progress,
      y: this.startY + (this.endY - this.startY) * this.progress,
    };
  }
}

const SystemArchitecture = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const mousePosition = useMousePosition({ smoothing: 0.05 });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Get node positions based on dimensions
  const getNodePositions = useCallback(() => {
    return ARCHITECTURE_NODES.map(node => ({
      ...node,
      px: node.x * dimensions.width,
      py: node.y * dimensions.height,
    }));
  }, [dimensions]);

  // Initialize particles
  const initParticles = useCallback(() => {
    if (prefersReducedMotion) return;

    const nodes = getNodePositions();
    const particles = [];

    CONNECTIONS.forEach(conn => {
      const fromNode = nodes.find(n => n.id === conn.from);
      const toNode = nodes.find(n => n.id === conn.to);

      if (fromNode && toNode) {
        // Create 2-4 particles per connection
        const count = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          particles.push(
            new DataParticle(fromNode.px, fromNode.py, toNode.px, toNode.py)
          );
        }
      }
    });

    particlesRef.current = particles;
  }, [getNodePositions, prefersReducedMotion]);

  // Draw architecture on canvas
  const draw = useCallback((ctx) => {
    const { width, height } = dimensions;
    if (!width || !height) return;

    ctx.clearRect(0, 0, width, height);

    const nodes = getNodePositions();

    // Mouse influence
    const mouseInfluence = {
      x: (mousePosition.normalizedX - 0.5) * 20,
      y: (mousePosition.normalizedY - 0.5) * 20,
    };

    // Draw connections
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
    ctx.lineWidth = 1;

    CONNECTIONS.forEach(conn => {
      const fromNode = nodes.find(n => n.id === conn.from);
      const toNode = nodes.find(n => n.id === conn.to);

      if (fromNode && toNode) {
        ctx.beginPath();
        ctx.moveTo(fromNode.px + mouseInfluence.x * 0.3, fromNode.py + mouseInfluence.y * 0.3);

        // Curved connection
        const midX = (fromNode.px + toNode.px) / 2;
        const midY = (fromNode.py + toNode.py) / 2 - 10;

        ctx.quadraticCurveTo(
          midX + mouseInfluence.x * 0.5,
          midY + mouseInfluence.y * 0.5,
          toNode.px + mouseInfluence.x * 0.3,
          toNode.py + mouseInfluence.y * 0.3
        );
        ctx.stroke();
      }
    });

    // Draw particles
    if (!prefersReducedMotion) {
      particlesRef.current.forEach(particle => {
        particle.update();
        const pos = particle.getPosition();

        ctx.beginPath();
        ctx.arc(
          pos.x + mouseInfluence.x * 0.4,
          pos.y + mouseInfluence.y * 0.4,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(
          pos.x + mouseInfluence.x * 0.4,
          pos.y + mouseInfluence.y * 0.4,
          particle.size * 2,
          0,
          Math.PI * 2
        );
        const gradient = ctx.createRadialGradient(
          pos.x + mouseInfluence.x * 0.4,
          pos.y + mouseInfluence.y * 0.4,
          0,
          pos.x + mouseInfluence.x * 0.4,
          pos.y + mouseInfluence.y * 0.4,
          particle.size * 3
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    }

    // Draw nodes
    nodes.forEach(node => {
      const nx = node.px + mouseInfluence.x * 0.3;
      const ny = node.py + mouseInfluence.y * 0.3;

      // Node glow
      const glowGradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, 40);
      glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(nx - 40, ny - 40, 80, 80);

      // Node circle
      ctx.beginPath();
      ctx.arc(nx, ny, 24, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(24, 24, 27, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Node icon (emoji)
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.icon, nx, ny);

      // Node label
      ctx.font = '500 10px Inter, sans-serif';
      ctx.fillStyle = 'rgba(161, 161, 170, 0.8)';
      ctx.fillText(node.label, nx, ny + 38);
    });
  }, [dimensions, getNodePositions, mousePosition, prefersReducedMotion]);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    draw(ctx);

    animationRef.current = requestAnimationFrame(animate);
  }, [draw]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles();
    }
  }, [dimensions, initParticles]);

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

  // Update canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && dimensions.width && dimensions.height) {
      canvas.width = dimensions.width * window.devicePixelRatio;
      canvas.height = dimensions.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }, [dimensions]);

  return (
    <motion.div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity, scale }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

      {/* Radial gradient at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </motion.div>
  );
};

export default SystemArchitecture;
