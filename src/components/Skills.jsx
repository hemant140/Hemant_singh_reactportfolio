import React from 'react';
import { FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaAngular } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiMongodb, SiMysql, SiRedux, SiTailwindcss, SiFirebase, SiFlutter, SiCplusplus, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    // Categorized Tech Stack
    const categories = [
        {
            title: "Backend & Core Development",
            skills: [
                { id: 1, icon: <FaNodeJs size={60} className="mx-auto" />, title: 'Node.js' },
                { id: 2, icon: <SiNestjs size={60} className="mx-auto" />, title: 'NestJS' },
                { id: 3, icon: <SiTypescript size={60} className="mx-auto" />, title: 'TypeScript' },
                { id: 4, icon: <SiJavascript size={60} className="mx-auto" />, title: 'JavaScript' },
                { id: 5, icon: <FaPython size={60} className="mx-auto" />, title: 'Python' },
                { id: 6, icon: <SiCplusplus size={60} className="mx-auto" />, title: 'C++' },
            ]
        },
        {
            title: "Frontend & App Development",
            skills: [
                { id: 7, icon: <FaReact size={60} className="mx-auto" />, title: 'React' },
                { id: 8, icon: <TbBrandNextjs size={60} className="mx-auto" />, title: 'NextJS' },
                { id: 9, icon: <FaAngular size={60} className="mx-auto" />, title: 'Angular' },
                { id: 10, icon: <SiRedux size={60} className="mx-auto" />, title: 'Redux' },
                { id: 11, icon: <SiTailwindcss size={60} className="mx-auto" />, title: 'Tailwind' },
                { id: 12, icon: <SiFlutter size={60} className="mx-auto" />, title: 'Flutter' },
                { id: 13, icon: <FaHtml5 size={60} className="mx-auto" />, title: 'HTML5' },
                { id: 14, icon: <FaCss3Alt size={60} className="mx-auto" />, title: 'CSS3' },
            ]
        },
        {
            title: "Databases & Storage",
            skills: [
                { id: 15, icon: <SiMongodb size={60} className="mx-auto" />, title: 'MongoDB' },
                { id: 16, icon: <SiMysql size={60} className="mx-auto" />, title: 'MySQL' },
                { id: 17, icon: <SiFirebase size={60} className="mx-auto" />, title: 'Firebase' },
            ]
        },
        {
            title: "Cloud, DevOps & Tools",
            skills: [
                { id: 18, icon: <FaAws size={60} className="mx-auto" />, title: 'AWS EC2' },
                { id: 19, icon: <FaDocker size={60} className="mx-auto" />, title: 'Docker' },
                { id: 20, icon: <FaGithub size={60} className="mx-auto" />, title: 'GitHub Actions' },
            ]
        }
    ];

    return (
        <div name='skills' className='bg-slate-950 w-full min-h-screen text-white py-24 relative flex items-center'>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80"></div>
            
            <div className='max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full z-10'>
                <div className='pb-4'>
                    <h2 className='text-5xl font-extrabold font-Outfit inline border-b-4 border-cyan-500 tracking-tight'>
                        Skills
                    </h2>
                    <p className='py-4 text-slate-400 font-Outfit text-lg'>
                        These are the modern technologies, core frameworks, and tools in my technical arsenal.
                    </p>
                </div>

                <div className='mt-8 space-y-12'>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="space-y-4">
                            <h3 className="text-xl font-bold font-Outfit text-cyan-400 tracking-wide border-l-2 border-cyan-400 pl-3">
                                {cat.title}
                            </h3>
                            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center'>
                                {cat.skills.map(({ id, icon, title }) => (
                                    <div
                                        key={id}
                                        className="glass-card p-5 rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md duration-300 hover:-translate-y-1 hover:border-slate-700/85 hover:shadow-[0_8px_24px_rgba(6,182,212,0.02)] group cursor-pointer"
                                    >
                                        <div className="mb-3 transform group-hover:scale-105 duration-350 text-slate-450 group-hover:text-cyan-450">
                                            {icon}
                                        </div>
                                        <p className='text-slate-350 group-hover:text-white font-semibold font-Outfit text-sm md:text-base duration-350'>{title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
