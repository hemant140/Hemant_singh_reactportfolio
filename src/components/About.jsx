import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full min-h-screen bg-slate-950 text-white flex items-center py-20 relative'>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80"></div>
            
            <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full z-10'>
                <div className='pb-4'>
                    <h2 className='text-5xl font-extrabold font-Outfit inline border-b-4 border-cyan-500 tracking-tight'>
                        About Me
                    </h2>
                </div>

                <div className='flex flex-col lg:flex-row gap-12 items-center justify-between mt-12'>
                    {/* Visual Container */}
                    <div className="hidden lg:flex relative group flex-shrink-0">
                        <div className="absolute -inset-[1px] rounded-3xl bg-slate-800 group-hover:bg-slate-700 transition duration-300"></div>
                        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-slate-905 border border-slate-850 p-2">
                            <img 
                                src="images/pic.png" 
                                alt="Hemant Singh Portrait" 
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] duration-550" 
                            />
                        </div>
                    </div>

                    {/* Text Container with Glassmorphic Card */}
                    <div className='flex-1 glass-card rounded-2xl p-8 border border-slate-800/80 bg-slate-900/40 backdrop-blur-md'>
                        <h3 className="text-2xl font-bold font-Outfit text-cyan-400 mb-4">
                            Hi, I'm Hemant Singh
                        </h3>
                        <div className='text-slate-350 leading-relaxed font-Outfit space-y-4 text-justify text-base md:text-lg'>
                            <p>
                                I am a <strong className="text-white">Senior Software Engineer</strong> with <strong className="text-white">3.5+ years of experience</strong> specializing in robust backend development, scalable microservices architectures, and high-performance full-stack solutions.
                            </p>
                            <p>
                                I specialize in building production-grade APIs using <strong className="text-slate-200">Node.js, NestJS, TypeScript, and Express.js</strong>. I have a proven track record of designing multi-tenant SaaS architectures, integrating advanced AI-based systems (like real-time dynamic pricing engines), and maintaining secure authentication models (JWT, Role-Based Access Control).
                            </p>
                            <p>
                                With strong skills in databases like <strong className="text-slate-200">MongoDB, MySQL, PostgreSQL, and Redis</strong>, alongside modern cloud setups like <strong className="text-slate-200">AWS (EC2), Docker, and CI/CD pipelines (GitHub Actions)</strong>, I engineer highly maintainable systems that scale seamlessly under load.
                            </p>
                        </div>

                        {/* Executive Visual Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/60">
                            <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl text-center">
                                <h4 className="text-2xl font-bold text-cyan-400 font-Outfit">3.5+ Years</h4>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold font-Outfit">Engineering Exp</p>
                            </div>
                            <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl text-center">
                                <h4 className="text-2xl font-bold text-cyan-400 font-Outfit">20+ Deployed</h4>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold font-Outfit">Production APIs</p>
                            </div>
                            <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl text-center">
                                <h4 className="text-2xl font-bold text-cyan-400 font-Outfit">10+ Core</h4>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold font-Outfit">SaaS Microservices</p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <a 
                                href="Hemant_Singh_Software_Engineer.pdf" 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <button className="text-slate-950 font-bold bg-white hover:bg-slate-200 border border-white px-6 py-3 rounded-lg hover:scale-[1.02] duration-300 cursor-pointer font-Outfit tracking-wide shadow-md">
                                    View Resume
                                </button>
                            </a>
                            <span className="text-slate-400 font-Outfit italic text-sm">Thank you for visiting!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
