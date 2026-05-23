import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {

    const [text] = useTypewriter({
        words: ["Senior Software Engineer.", "NestJS Specialist.", "Full-Stack Developer.", "SaaS Architect."],
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 30,
        delaySpeed: 2000,
    });

    return (
        <div name="home" className="h-screen w-full bg-slate-950 relative overflow-hidden flex items-center">
            {/* Background ambient glowing circles - very subtle */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-900/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full w-full px-6 md:px-12 z-10 gap-10">
                <div className="flex flex-col justify-center h-full flex-1">
                    <span className="text_name font-semibold text-slate-450 tracking-wider font-Outfit">Hello, I'm</span>
                    <h1 className="text-white text-6xl md:text-7xl font-extrabold font-Outfit tracking-tight leading-none my-3">
                        Hemant Singh
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-200 font-Outfit flex items-center gap-2">
                        a <span className="text-cyan-400">{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#06b6d4"
                        />
                    </h2>
                    <p className="text-slate-450 mt-4 max-w-lg text-lg leading-relaxed font-Outfit">
                        Full-Stack Software Engineer with 3.5+ years of experience specializing in scalable backend services, microservices, NestJS, and high-performance system design.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a 
                            href="https://www.linkedin.com/in/hemant140/" 
                            target="_blank" 
                            rel='noreferrer'
                            className="inline-block"
                        >
                            <button className="text-slate-950 font-bold bg-white hover:bg-slate-200 border border-white px-8 py-3.5 rounded-lg hover:scale-[1.02] transition-all duration-300 font-Outfit tracking-wide shadow-xl cursor-pointer">
                                Hire Me
                            </button>
                        </a>
                        <a 
                            href="#about"
                            className="inline-block"
                        >
                            <button className="text-slate-300 hover:text-white font-bold bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 px-8 py-3.5 rounded-lg hover:scale-[1.02] transition-all duration-300 font-Outfit tracking-wide cursor-pointer">
                                About Me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end items-center mt-20 md:mt-0">
                    <div className="relative group">
                        {/* Subtly illuminated border framework */}
                        <div className="absolute -inset-[1px] rounded-full bg-slate-800 group-hover:bg-cyan-500/20 transition duration-500"></div>
                        <div className="relative bg-slate-950 rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden flex items-center justify-center p-1 border border-slate-850 group-hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                                <img 
                                    src="images/avtar.png" 
                                    alt="Hemant Singh Avatar" 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 duration-500" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;