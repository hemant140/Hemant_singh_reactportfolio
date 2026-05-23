import { useInView, useCountUp } from '../hooks/useInView';

const StatCard = ({ num, suffix = '', label, inView, delay }) => {
  const count = useCountUp(parseInt(num), 1800, inView);
  return (
    <div className={`stat-card reveal-hidden-scale ${inView ? 'revealed' : ''}`} style={{ transitionDelay: delay }}>
      <p className="gradient-text font-Orbitron font-black text-3xl">{count}{suffix}</p>
      <p className="font-Outfit text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>{label}</p>
    </div>
  );
};

const About = () => {
  const [sectionRef, inView] = useInView();
  const [imgRef, imgInView] = useInView();

  return (
    <div name="about" className="relative w-full min-h-screen cosmic-bg-alt py-28 overflow-hidden">
      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[380px] h-[380px] top-[10%] right-[-80px] opacity-15" />
      <div className="orb orb-green absolute w-[260px] h-[260px] bottom-[10%] left-[-60px] opacity-10" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={sectionRef} className="mb-16">
          <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>Who I Am</p>
          <h2 className={`section-title reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className={`w-20 h-1 rounded-full mt-4 reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
               style={{ background: 'linear-gradient(90deg, var(--primary), var(--green))' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Photo */}
          <div ref={imgRef} className={`flex-shrink-0 relative reveal-hidden-left ${imgInView ? 'revealed' : ''}`}>
            <div className="relative w-[270px] h-[330px] md:w-[310px] md:h-[390px]">
              {/* blob bg */}
              <div className="absolute inset-0 rounded-[2rem] animate-blob"
                   style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(124,58,237,0.06))', animationDuration: '12s' }} />

              {/* Photo */}
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden"
                   style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                <img src="images/pic.png" alt="Hemant Singh" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 pointer-events-none"
                     style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.25), transparent 60%)' }} />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8"
                   style={{ borderTop: '2px solid var(--neon)', borderLeft: '2px solid var(--neon)', borderRadius: '4px 0 0 0' }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8"
                   style={{ borderBottom: '2px solid var(--green)', borderRight: '2px solid var(--green)', borderRadius: '0 0 4px 0' }} />

              {/* Exp badge */}
              <div className="absolute -right-6 top-8 glass-card-new rounded-xl px-4 py-3">
                <p className="gradient-text font-Orbitron font-black text-xl">3.5+</p>
                <p className="font-Outfit text-xs mt-0.5" style={{ color: 'var(--text-dim)' }}>Years of<br/>Experience</p>
              </div>

              {/* Status */}
              <div className="absolute -left-6 bottom-12 glass-card-new rounded-xl px-3 py-2 flex items-center gap-2">
                <div className="active-indicator" />
                <span className="font-Outfit text-xs font-semibold" style={{ color: 'var(--green)' }}>Open to Work</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className={`text-2xl md:text-3xl font-Outfit font-bold mb-6 reveal-hidden ${inView ? 'revealed' : ''} stagger-1`}
                style={{ color: 'var(--text)' }}>
              Senior Software Engineer &{' '}
              <span className="gradient-text">Backend Architect</span>
            </h3>

            <div className={`space-y-4 font-Outfit text-base leading-relaxed reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
                 style={{ color: 'var(--text-dim)' }}>
              <p>
                I am a <span className="font-semibold" style={{ color: 'var(--text)' }}>Senior Software Engineer</span> with{' '}
                <span className="font-semibold" style={{ color: 'var(--primary)' }}>3.5+ years</span> specializing in
                robust backend development, scalable microservices, and high-performance full-stack solutions.
                Currently pursuing <span className="font-semibold" style={{ color: 'var(--text)' }}>M.Tech in AI/ML at BITS Pilani</span>.
              </p>
              <p>
                I build production-grade APIs using{' '}
                <span className="font-semibold" style={{ color: 'var(--text)' }}>Node.js, NestJS, TypeScript,</span> and{' '}
                <span className="font-semibold" style={{ color: 'var(--text)' }}>Express.js</span>. Proven track record designing
                multi-tenant SaaS architectures, AI-based dynamic pricing engines, and JWT/RBAC auth systems.
              </p>
              <p>
                Deep expertise in <span className="font-semibold" style={{ color: 'var(--text)' }}>MongoDB, MySQL, PostgreSQL, Redis</span> and
                cloud infrastructure on <span className="font-semibold" style={{ color: 'var(--text)' }}>AWS EC2</span> with{' '}
                <span className="font-semibold" style={{ color: 'var(--text)' }}>Docker</span> and CI/CD via{' '}
                <span className="font-semibold" style={{ color: 'var(--text)' }}>GitHub Actions</span>.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 reveal-hidden stagger-3 ${inView ? 'revealed' : ''}`}>
              <StatCard num="3" suffix=".5+" label="Years Exp"          inView={inView} delay="0.1s" />
              <StatCard num="20" suffix="+"  label="APIs Built"          inView={inView} delay="0.2s" />
              <StatCard num="10" suffix="+"  label="SaaS Microservices"  inView={inView} delay="0.3s" />
              <StatCard num="5"  suffix="+"  label="Companies"           inView={inView} delay="0.4s" />
            </div>

            {/* Tags */}
            <div className={`flex flex-wrap gap-2 mt-6 reveal-hidden stagger-4 ${inView ? 'revealed' : ''}`}>
              {['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Redis', 'React'].map(s => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>

            {/* CTA */}
            <div className={`mt-8 flex flex-wrap gap-4 items-center reveal-hidden stagger-5 ${inView ? 'revealed' : ''}`}>
              <a href="Hemant_Singh_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary flex items-center gap-2"><span>View Resume</span><span>↗</span></button>
              </a>
              <p className="font-Outfit italic text-sm" style={{ color: 'var(--text-dim)' }}>Thanks for stopping by!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
