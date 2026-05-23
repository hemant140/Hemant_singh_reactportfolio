import { useState } from 'react';
import Projectscard from './Projectscard';
import { useInView } from '../../hooks/useInView';

const projectsData = [
  {
    title: "Orimon.ai",
    des: "Owned core backend for an AI-powered chatbot platform. Built workflow automation engine, FAQ management, multilingual training logic, and CRM integration layer using Node.js, Express.js & TypeScript.",
    src: "https://api.microlink.io/?url=https%3A%2F%2Forimon.ai&screenshot=true&meta=false&embed=screenshot.url",
    category: "ai-saas", tech: ["Node.js", "Express.js", "TypeScript", "MongoDB", "AI"],
    projectLink: true, projectUrl: "https://orimon.ai",
  },
  {
    title: "GHG Sync Carbon Reporting",
    des: "Multi-tenant Carbon Emissions SaaS backend with NestJS, JWT/RBAC auth, MongoDB optimization, and full EC2 + GitHub Actions CI/CD pipeline deployment.",
    src: "https://api.microlink.io/?url=https%3A%2F%2Fecohodo.com&screenshot=true&meta=false&embed=screenshot.url",
    category: "ai-saas", tech: ["NestJS", "Node.js", "TypeScript", "MongoDB", "AWS"],
  },
  {
    title: "Plutos One (BBPS)",
    des: "RESTful fintech APIs for Bharat Bill Payment System with Node.js & Express.js. Implemented secure auth, payment routing, and compliance-focused reliability controls.",
    src: "https://api.microlink.io/?url=https%3A%2F%2Fwww.plutos.one&screenshot=true&meta=false&embed=screenshot.url",
    category: "fintech", tech: ["Node.js", "Express.js", "REST APIs", "Fintech"],
  },
  {
    title: "Esim Source",
    des: "Scalable eSIM management platform with React, Redux, and MySQL. Designed responsive UI and robust state management for complex telecom subscription flows.",
    src: "images/sim.jpg",
    category: "fintech", tech: ["React", "Redux", "MySQL", "eSIM"],
    showEsimSouceLink: true,
  },
  {
    title: "Esim Trav",
    des: "Global eSIM travel portal with Redux-driven state, modern responsive UI, and optimized data flow for real-time eSIM provisioning and plan selection.",
    src: "images/esim Trav.png",
    category: "fintech", tech: ["React", "Redux", "eSIM", "Tailwind"],
    projectLink: true, projectUrl: "http://esimtrav.sirrat.com/",
  },
  {
    title: "ENK Wireless",
    des: "eSIM activation portal with React frontend and high-performance Node.js automation backend. Reduced manual activation time to near-zero with automated logic.",
    src: "images/enk-wireless.png",
    category: "fintech", tech: ["React", "Node.js", "MySQL", "Automation"],
    projectLink: true, projectUrl: "https://activate.enkwirelessinc.com/",
  },
  {
    title: "AHBRANDS APP",
    des: "Cross-platform e-commerce app built with Ionic Angular and PHP RESTful APIs. Published on Google Play Store with secure cart, checkout, and product catalog.",
    src: "images/ah2.jpg",
    category: "mobile-web", tech: ["Ionic Angular", "Angular", "PHP", "E-commerce"],
    showahbrndsLink: true,
  },
  {
    title: "MoviesFlix",
    des: "Movie discovery app powered by TMDB API. Built modular React architecture with fast load times, real-time search, and responsive modern UI/UX.",
    src: "images/movies.png",
    category: "mobile-web", tech: ["React", "TMDB API", "Tailwind", "CSS3"],
    href: "https://github.com/hemant140/MoviesFlixReact", showGlobeLink: true,
  },
  {
    title: "Malware Detection ML",
    des: "Python ML system that classifies malicious executables from benign files using ensemble learning algorithms. Achieved high accuracy on real-world PE file datasets.",
    src: "images/malware.jpg",
    category: "ai-saas", tech: ["Python", "Machine Learning", "Data Science"],
    href: "https://github.com/hemant140/MalwareDetection",
  },
  {
    title: "Notify App",
    des: "Cross-platform Flutter note-taking app with Firebase real-time DB triggers, collaborative editing, and fluid animations across Android and iOS.",
    src: "images/note.jpg",
    category: "mobile-web", tech: ["Flutter", "Firebase", "Mobile"],
    href: "https://github.com/hemant140/Notify-App",
  },
  {
    title: "BMI Calculator App",
    des: "Precise Flutter BMI Calculator with health tracking, personalized fitness tips, historical data via local storage, and polished UI for Android & iOS.",
    src: "images/bmi.jpg",
    category: "mobile-web", tech: ["Flutter", "Mobile", "Local Storage"],
    href: "https://github.com/hemant140/Bmi-Calculater-App",
  },
  {
    title: "BookStore",
    des: "Responsive online bookstore in vanilla HTML5, CSS3 & JavaScript — clean grid layout, search, cart UI, and DOM manipulation without any framework.",
    src: "images/bookstore.png",
    category: "mobile-web", tech: ["HTML5", "CSS3", "JavaScript"],
    href: "https://github.com/hemant140/MoviesFlixReact", showBookLink: true,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "AI & SaaS", value: "ai-saas" },
  { label: "Fintech", value: "fintech" },
  { label: "Mobile & Web", value: "mobile-web" },
];

const Projects = () => {
  const [active, setActive] = useState('all');
  const [sectionRef, inView] = useInView();

  const filtered = active === 'all' ? projectsData : projectsData.filter(p => p.category === active);

  return (
    <div name="project" className="relative w-full min-h-screen cosmic-bg-alt py-28 overflow-hidden">
      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[380px] h-[380px] top-[0%] left-[-60px] opacity-12" />
      <div className="orb orb-green absolute w-[280px] h-[280px] bottom-[5%] right-[-40px] opacity-08" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={sectionRef} className="mb-12">
          <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>Portfolio</p>
          <h2 className={`section-title reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className={`w-20 h-1 rounded-full mt-4 reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
               style={{ background: 'linear-gradient(90deg, var(--primary), var(--green))' }} />
          <p className={`font-Outfit text-lg mt-4 max-w-xl reveal-hidden stagger-3 ${inView ? 'revealed' : ''}`}
             style={{ color: 'var(--text-dim)' }}>
            Backend microservices, AI integrations, and full-stack products shipped to production.
          </p>
        </div>

        {/* Filter pills */}
        <div className={`flex flex-wrap gap-3 mb-10 reveal-hidden stagger-4 ${inView ? 'revealed' : ''}`}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`filter-pill ${active === f.value ? 'filter-pill-active' : 'filter-pill-inactive'}`}
            >
              {f.label}
              <span className="ml-2 opacity-50 text-[11px]">
                {f.value === 'all' ? projectsData.length : projectsData.filter(p => p.category === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" key={active}>
          {filtered.map((project, i) => (
            <div
              key={i}
              style={{
                animation: inView ? `scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both` : 'none',
                animationDelay: `${i * 0.07}s`,
                opacity: inView ? undefined : 0,
              }}
            >
              <Projectscard {...project} />
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center reveal-hidden stagger-5 ${inView ? 'revealed' : ''}`}>
          <a href="https://github.com/hemant140" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 font-Outfit text-sm transition-colors duration-300"
             style={{ color: 'var(--text-dim)' }}
             onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; }}
             onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; }}>
            <span>View all repositories on GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
