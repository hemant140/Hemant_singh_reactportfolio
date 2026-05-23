import React, { useState } from 'react'
import EducationCard from './EducationCard'

const Eduction = () => {
    // Interactive Tab State: 'experience' or 'education'
    const [activeTab, setActiveTab] = useState('experience');

    // BITS Pilani M.Tech Achievements
    const bitsPilaniPoints = [
        "Specializing in Advanced Machine Learning Algorithms, Deep Neural Networks, Computer Vision, and Natural Language Processing.",
        "Evaluating distributed AI workloads and building high-performance intelligence integration architectures.",
        "Engaged in advanced curriculum combining statistical learning, neural architectures, and optimization algorithms."
    ];

    // Detailed achievements for experience cards
    const blueEnigmaPoints = [
        "Led backend development using NestJS, building scalable APIs for booking management, real-time availability, and hotel operations in a multi-tenant PMS system.",
        "Designed and optimized PostgreSQL database architecture, including relational schema design, indexing, and query optimization to ensure high performance and data consistency.",
        "Architected a modular and scalable backend system, enabling seamless integration of a dynamic pricing engine and supporting concurrent bookings with low latency.",
        "Integrated an AI-based dynamic pricing system into the backend, enabling real-time price adjustments based on demand, occupancy, and historical trends."
    ];

    const oriservePoints = [
        "Architected and owned core backend features for Orimon.ai AI-powered chatbot platform using Node.js, Express.js, and TypeScript, including workflow automation engine, FAQ management system, and chat summarization services.",
        "Designed and implemented RESTful API endpoints for multilingual training logic with intelligent duplicate detection and suppression, reducing redundant API calls.",
        "Built complex integration layer connecting CRM systems and live chat escalation services through custom REST APIs, ensuring seamless handoff between automated and human support.",
        "Optimized message processing pipeline using asynchronous queuing and batch processing, significantly improving API response times and system throughput."
    ];

    const ecohodoPoints = [
        "Architected and developed multi-tenant Carbon Emissions Reporting SaaS platform backend using NestJS, Node.js, TypeScript, and MongoDB, processing thousands of calculations monthly.",
        "Built centralized authentication and authorization system using JWT and RBAC in Node.js, successfully deployed across multiple platform ecosystems, eliminating code duplication.",
        "Managed end-to-end deployment of microservices architecture and React applications on EC2, implementing CI/CD pipelines with GitHub Actions that streamlined releases.",
        "Optimized MongoDB and MySQL query performance through strategic indexing and batch processing, significantly reducing API latency and stabilizing performance."
    ];

    const plutosOnePoints = [
        "Developed and maintained backend services using Node.js and Express.js, designing RESTful APIs for financial technology platform with focus on reliability and security.",
        "Implemented authentication and authorization mechanisms, ensuring secure access control across application features."
    ];

    const virtuzoPoints = [
        "Developed backend services and REST APIs using Node.js and Express.js, supporting various client projects and internal tools.",
        "Designed and implemented database architectures using MongoDB, ensuring scalable data models and efficient query patterns.",
        "Built authentication systems and integrated third-party services through API connections, enhancing platform capabilities."
    ];

    return (
        <div name='experience' className='w-full min-h-screen bg-slate-950 text-white py-24 relative flex items-center'>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-85"></div>
            
            <div className='w-full max-w-screen-lg mx-auto px-6 z-10 flex flex-col justify-center'>
                <div className="pb-8 text-center md:text-left">
                    <h2 className="text-5xl font-extrabold font-Outfit inline border-b-4 border-[#ff014f] tracking-tight">
                        Resume
                    </h2>
                    <p className="mt-4 text-slate-400 font-Outfit text-lg">
                        Explore my professional journey and academic timeline through the interactive selector below.
                    </p>
                </div>

                {/* Sliding Glass Tab Switcher */}
                <div className="flex justify-center items-center mb-16 mt-8">
                    <div className="flex bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-2xl max-w-md w-full">
                        <button 
                            onClick={() => setActiveTab('experience')}
                            className={`flex-1 py-3.5 px-6 rounded-full font-Outfit font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${activeTab === 'experience' ? 'bg-[#ff014f] text-white shadow-[0_4px_15px_rgba(255,1,79,0.3)]' : 'text-slate-400 hover:text-white'}`}
                        >
                            💼 Experience
                        </button>
                        <button 
                            onClick={() => setActiveTab('education')}
                            className={`flex-1 py-3.5 px-6 rounded-full font-Outfit font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${activeTab === 'education' ? 'bg-[#ff014f] text-white shadow-[0_4px_15px_rgba(255,1,79,0.3)]' : 'text-slate-400 hover:text-white'}`}
                        >
                            🎓 Education
                        </button>
                    </div>
                </div>

                {/* Central Single-Column Timelines */}
                <div className="w-full max-w-3xl mx-auto">
                    {activeTab === 'experience' ? (
                        <div key="experience-timeline" className="flex flex-col relative border-l-2 border-slate-800 pl-1 py-2 animate-fade-in-up">
                            <EducationCard
                                title="Sr. Software Engineer"
                                subTitle="Blue Enigma"
                                result="Feb 2026 - Present"
                                points={blueEnigmaPoints}
                                isActive={true}
                            />
                            <EducationCard
                                title="Software Engineer"
                                subTitle="Oriserve India Pvt. Ltd."
                                result="Mar 2025 - Jan 2026"
                                points={oriservePoints}
                            />
                            <EducationCard
                                title="Software Engineer"
                                subTitle="Ecohodo Technologies Pvt. Ltd."
                                result="Jul 2024 - Mar 2025"
                                points={ecohodoPoints}
                            />
                            <EducationCard
                                title="Software Developer"
                                subTitle="Plutos One"
                                result="Mar 2024 - Jul 2024"
                                points={plutosOnePoints}
                            />
                            <EducationCard
                                title="Junior Software Developer"
                                subTitle="Virtuzo Infosystems"
                                result="Feb 2023 - Mar 2024"
                                points={virtuzoPoints}
                            />
                        </div>
                    ) : (
                        <div key="education-timeline" className="flex flex-col relative border-l-2 border-slate-800 pl-1 py-2 animate-fade-in-up">
                            <EducationCard
                                title="M.Tech in Artificial Intelligence & Machine Learning"
                                subTitle="BITS Pilani (Birla Institute of Technology and Science)"
                                result="March 2026 - Present"
                                points={bitsPilaniPoints}
                                isActive={true}
                            />
                            <EducationCard
                                title="B.Tech (Computer Science & Engineering)"
                                subTitle="Veer Bahadur Singh Purvanchal University, Jaunpur, UP"
                                result="2018 - 2022"
                                des="Relational Database Systems, OOP, Data Structures, Algorithms, Computer Networks, Operating Systems."
                            />
                            <EducationCard
                                title="12th Senior Secondary (Science)"
                                subTitle="Maharishi Vidya Mandir, Aligarh, UP"
                                result="2017 - 2018"
                                des="Completed senior secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science."
                            />
                            <EducationCard
                                title="10th Higher Secondary Examination"
                                subTitle="Maharishi Vidya Mandir, Aligarh, UP"
                                result="2015 - 2016"
                                des="Completed general secondary education with excellent marks in science and information technology subjects."
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Eduction
