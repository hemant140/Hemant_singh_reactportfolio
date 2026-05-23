import React, { useState } from 'react'
import Projectscard from './Projectscard'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Complete array-driven project details with categorizations and specific tech stacks
  const projectsData = [
    {
      title: "Orimon.ai",
      des: "Architected and owned core backend features for Orimon.ai AI-powered chatbot platform using Node.js, Express.js, TypeScript, and MongoDB. Built workflow automation engine, FAQ management system, chat summarization services, and multilingual training logic.",
      src: "https://api.microlink.io/?url=https%3A%2F%2Forimon.ai&screenshot=true&meta=false&embed=screenshot.url" ,
      category: "ai-saas",
      tech: ["Node.js", "Express.js", "TypeScript", "MongoDB", "AI"],
      projectLink: true,
      projectUrl: "https://orimon.ai"
    },
    {
      title: "GHG Sync Carbon Reporting",
      des: "Architected and developed multi-tenant Carbon Emissions Reporting SaaS platform backend using NestJS, Node.js, TypeScript, and MongoDB. Standardized JWT/RBAC centralized authentication and managed end-to-end EC2 deployment with GitHub Actions.",
      src: "https://api.microlink.io/?url=https%3A%2F%2Fecohodo.com&screenshot=true&meta=false&embed=screenshot.url",
      category: "ai-saas",
      tech: ["NestJS", "Node.js", "TypeScript", "MongoDB", "AWS"]
    },
    {
      title: "Plutos One (BBPS)",
      des: "Developed and maintained backend services using Node.js and Express.js, designing robust RESTful APIs for fintech platform with focus on reliability, security, and Bharat Bill Payment System (BBPS) standards.",
      src: "https://api.microlink.io/?url=https%3A%2F%2Fwww.plutos.one&screenshot=true&meta=false&embed=screenshot.url",
      category: "fintech",
      tech: ["Node.js", "Express.js", "REST APIs", "Fintech"]
    },
    {
      title: "Esim Source",
      des: "As a software developer, contributed to scalable project infrastructures built with React, Redux, and MySQL, playing a key role in designing, implementing, and maintaining responsive web platforms.",
      src: "images/sim.jpg",
      category: "fintech",
      tech: ["React", "Redux", "MySQL", "eSIM"],
      showEsimSouceLink: true
    },
    {
      title: "Esim Trav",
      des: "Seamlessly integrated Redux to optimize global data flow and engineered responsive, modern user interfaces. Played a pivotal role in optimizing platform scalability and user experience.",
      src: "images/esim Trav.png",
      category: "fintech",
      tech: ["React", "Redux", "eSIM", "Tailwind"],
      projectLink: true,
      projectUrl: "http://esimtrav.sirrat.com/"
    },
    {
      title: "ENK Wireless",
      des: "A streamlined eSIM activation portal built with React, Node.js, and MySQL. Implemented responsive frontend UI and high-performance backend automation logic for rapid eSIM activation.",
      src: "images/enk-wireless.png",
      category: "fintech",
      tech: ["React", "Node.js", "MySQL", "Automation"],
      projectLink: true,
      projectUrl: "https://activate.enkwirelessinc.com/"
    },
    {
      title: "AHBRANDS APP",
      des: "Contributed to building and designing a user-friendly cross-platform e-commerce application developed using Ionic Angular, utilizing secure PHP-based RESTful API connections.",
      src: "images/ah2.jpg",
      category: "mobile-web",
      tech: ["Ionic Angular", "Angular", "PHP", "E-commerce"],
      showahbrndsLink: true
    },
    {
      title: "MoviesFlix",
      des: "Built an attractive movie information site using TMDB APIs in ReactJS. Focused on modern UI/UX design, modular frontend architecture, and fast load-time optimizations.",
      src: "images/movies.png",
      category: "mobile-web",
      tech: ["React", "TMDB API", "Tailwind", "CSS3"],
      href: "https://github.com/hemant140/MoviesFlixReact",
      showGlobeLink: true
    },
    {
      title: "Malware Detection ML",
      des: "Built an intelligent malware detection system using Python libraries and advanced machine learning algorithms to analyze and differentiate malicious executable files from benign ones.",
      src: "images/malware.jpg",
      category: "ai-saas",
      tech: ["Python", "Machine Learning", "Data Science"],
      href: "https://github.com/hemant140/MalwareDetection"
    },
    {
      title: "Notify App",
      des: "A sleek, cross-platform collaborative note-taking and notification utility designed using Flutter, featuring secure realtime database triggers and fluid layout designs.",
      src: "images/note.jpg",
      category: "mobile-web",
      tech: ["Flutter", "Firebase", "Mobile"],
      href: "https://github.com/hemant140/Notify-App"
    },
    {
      title: "BMI Calculator App",
      des: "Developed a highly precise BMI Calculator app using Flutter, accurately tracking health records, providing personalized fitness tips, and utilizing fluid local storage strategies.",
      src: "images/bmi.jpg",
      category: "mobile-web",
      tech: ["Flutter", "Mobile", "Local Storage"],
      href: "https://github.com/hemant140/Bmi-Calculater-App"
    },
    {
      title: "BookStore",
      des: "Created a responsive, user-friendly online bookstore using HTML5, CSS3, and JavaScript, demonstrating clean design layout and modern DOM manipulation logic.",
      src: "images/bookstore.png",
      category: "mobile-web",
      tech: ["HTML5", "CSS3", "JavaScript"],
      href: "https://github.com/hemant140/MoviesFlixReact",
      showBookLink: true
    }
  ];

  // Dynamic filter logic
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeFilter);

  // Filter Pills config
  const filters = [
    { label: "All Projects", value: "all" },
    { label: "AI & SaaS", value: "ai-saas" },
    { label: "Fintech & Telecom", value: "fintech" },
    { label: "Mobile & Web Apps", value: "mobile-web" }
  ];

  return (
    <div name='project' className='w-full min-h-screen bg-slate-950 text-white py-24 relative flex items-center'>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80"></div>
      
      <div className='flex flex-col p-6 justify-center max-w-screen-lg mx-auto w-full z-10'>
        <div className='pb-4 text-center md:text-left'>
          <h2 className='text-5xl font-extrabold font-Outfit inline border-b-4 border-[#ff014f] tracking-tight'>
            Projects
          </h2>
          <p className='py-6 text-slate-400 font-Outfit text-lg'>
            A showcase of my recent full-stack applications, robust backend microservices, and AI integrations.
          </p>
        </div>

        {/* Categories Filter Panel */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 my-8">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full font-Outfit font-bold text-sm transition-all duration-300 border cursor-pointer ${activeFilter === filter.value ? 'bg-[#ff014f] border-[#ff014f] text-white shadow-[0_4px_12px_rgba(255,1,79,0.25)] hover:bg-[#e00045]' : 'bg-slate-900/40 border-slate-800 text-slate-450 hover:text-white hover:border-slate-700'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Card grid with key-based fade-in transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 animate-fade-in-up" key={activeFilter}>
          {filteredProjects.map((project, index) => (
            <Projectscard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              category={project.category}
              tech={project.tech}
              href={project.href}
              projectLink={project.projectLink}
              projectUrl={project.projectUrl}
              showGlobeLink={project.showGlobeLink}
              showBookLink={project.showBookLink}
              showEsimSouceLink={project.showEsimSouceLink}
              showahbrndsLink={project.showahbrndsLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
