import { useState } from 'react';
import { MdWork, MdSchool } from 'react-icons/md';
import EducationCard from './EducationCard';
import { useInView } from '../../hooks/useInView';

const exp = {
  blueEnigma: [
    "Led backend development with NestJS — scalable APIs for booking management, real-time availability, and hotel operations in a multi-tenant PMS system.",
    "Designed and optimized PostgreSQL schema, indexing, and query optimization for high performance and data consistency.",
    "Architected a modular backend supporting a dynamic pricing engine with concurrent bookings at low latency.",
    "Integrated an AI-based dynamic pricing system enabling real-time price adjustments based on demand and occupancy.",
  ],
  oriserve: [
    "Owned core backend for Orimon.ai AI chatbot platform — workflow automation engine, FAQ management, and multilingual training logic using Node.js, Express.js & TypeScript.",
    "Designed RESTful API endpoints with intelligent duplicate detection, reducing redundant API calls significantly.",
    "Built CRM + live chat escalation integration layer through custom REST APIs ensuring seamless handoff between AI and human support.",
    "Optimized message processing with async queuing and batch processing, improving API response times significantly.",
  ],
  ecohodo: [
    "Architected multi-tenant Carbon Emissions Reporting SaaS backend with NestJS, processing thousands of calculations monthly.",
    "Built centralized JWT/RBAC authentication deployed across multiple platform ecosystems, eliminating code duplication.",
    "Managed EC2 + Docker microservice deployments with GitHub Actions CI/CD pipelines that streamlined releases.",
    "Optimized MongoDB and MySQL queries with strategic indexing, reducing API latency and stabilizing system performance.",
  ],
  plutosOne: [
    "Developed and maintained backend services with Node.js and Express.js, designing RESTful APIs for a BBPS fintech platform.",
    "Implemented authentication and authorization mechanisms ensuring secure access control across all features.",
  ],
  virtuzo: [
    "Built backend services and REST APIs with Node.js and Express.js for multiple client projects and internal tools.",
    "Designed MongoDB architectures with scalable data models and efficient query patterns.",
    "Integrated third-party services and auth systems enhancing platform capabilities.",
  ],
};

const edu = {
  bits: [
    "Specializing in Advanced ML Algorithms, Deep Neural Networks, Computer Vision, and NLP.",
    "Evaluating distributed AI workloads and building high-performance intelligence integration architectures.",
    "Advanced curriculum combining statistical learning, neural architectures, and optimization algorithms.",
  ],
};

const Eduction = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [sectionRef, inView] = useInView();

  return (
    <div name="experience" className="relative w-full min-h-screen cosmic-bg py-28 overflow-hidden">
      <div className="grid-overlay" />
      <div className="orb orb-neon absolute w-[320px] h-[320px] top-[8%] right-[-50px] opacity-12" />
      <div className="orb orb-dark absolute w-[250px] h-[250px] bottom-[10%] left-[-50px] opacity-20" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={sectionRef} className="mb-12">
          <p className={`section-label mb-3 reveal-hidden ${inView ? 'revealed' : ''}`}>Career Journey</p>
          <h2 className={`section-title reveal-hidden stagger-1 ${inView ? 'revealed' : ''}`}>
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className={`w-20 h-1 rounded-full mt-4 reveal-hidden stagger-2 ${inView ? 'revealed' : ''}`}
               style={{ background: 'linear-gradient(90deg, var(--primary), var(--green))' }} />
          <p className={`font-Outfit text-lg mt-4 max-w-lg reveal-hidden stagger-3 ${inView ? 'revealed' : ''}`}
             style={{ color: 'var(--text-dim)' }}>
            Professional experience and academic journey.
          </p>
        </div>

        {/* Tab switcher */}
        <div className={`flex justify-center mb-14 reveal-hidden stagger-4 ${inView ? 'revealed' : ''}`}>
          <div className="flex p-1.5 rounded-2xl gap-1" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            {[
              { key: 'experience', icon: <MdWork size={18} />, label: 'Experience' },
              { key: 'education',  icon: <MdSchool size={18} />, label: 'Education' },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`tab-btn flex items-center gap-2 ${activeTab === t.key ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              >
                {t.icon}{t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'experience' ? (
            <div key="exp" className="animate-fade-up">
              <EducationCard title="Sr. Software Engineer"    subTitle="Blue Enigma"                        result="Feb 2026 – Present"   points={exp.blueEnigma} isActive />
              <EducationCard title="Software Engineer"        subTitle="Oriserve India Pvt. Ltd."           result="Mar 2025 – Jan 2026"  points={exp.oriserve} />
              <EducationCard title="Software Engineer"        subTitle="Ecohodo Technologies Pvt. Ltd."     result="Jul 2024 – Mar 2025"  points={exp.ecohodo} />
              <EducationCard title="Software Developer"       subTitle="Plutos One"                         result="Mar 2024 – Jul 2024"  points={exp.plutosOne} />
              <EducationCard title="Junior Software Developer" subTitle="Virtuzo Infosystems"               result="Feb 2023 – Mar 2024"  points={exp.virtuzo} />
            </div>
          ) : (
            <div key="edu" className="animate-fade-up">
              <EducationCard
                title="M.Tech in Artificial Intelligence & Machine Learning"
                subTitle="BITS Pilani (Birla Institute of Technology and Science)"
                result="March 2026 – Present" points={edu.bits} isActive />
              <EducationCard
                title="B.Tech — Computer Science & Engineering"
                subTitle="Veer Bahadur Singh Purvanchal University, Jaunpur, UP"
                result="2018 – 2022"
                des="Relational Database Systems, OOP, Data Structures, Algorithms, Computer Networks, Operating Systems." />
              <EducationCard
                title="12th Senior Secondary (Science)"
                subTitle="Maharishi Vidya Mandir, Aligarh, UP"
                result="2017 – 2018"
                des="Physics, Chemistry, Mathematics, and Computer Science." />
              <EducationCard
                title="10th Higher Secondary Examination"
                subTitle="Maharishi Vidya Mandir, Aligarh, UP"
                result="2015 – 2016"
                des="Excellent marks in science and information technology subjects." />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eduction;
