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
                { id: 1, icon: <FaNodeJs size={60} className="mx-auto" />, title: 'Node.js', style: 'hover:shadow-green-500/40 hover:border-green-500/40 text-green-500' },
                { id: 2, icon: <SiNestjs size={60} className="mx-auto" />, title: 'NestJS', style: 'hover:shadow-red-500/40 hover:border-red-500/40 text-red-600' },
                { id: 3, icon: <SiTypescript size={60} className="mx-auto" />, title: 'TypeScript', style: 'hover:shadow-blue-500/40 hover:border-blue-500/40 text-blue-600' },
                { id: 4, icon: <SiJavascript size={60} className="mx-auto" />, title: 'JavaScript', style: 'hover:shadow-yellow-500/40 hover:border-yellow-500/40 text-yellow-400' },
                { id: 5, icon: <FaPython size={60} className="mx-auto" />, title: 'Python', style: 'hover:shadow-yellow-300/40 hover:border-yellow-300/40 text-yellow-300' },
                { id: 6, icon: <SiCplusplus size={60} className="mx-auto" />, title: 'C++', style: 'hover:shadow-blue-700/40 hover:border-blue-700/40 text-blue-700' },
            ]
        },
        {
            title: "Frontend & App Development",
            skills: [
                { id: 7, icon: <FaReact size={60} className="mx-auto" />, title: 'React', style: 'hover:shadow-sky-400/40 hover:border-sky-400/40 text-sky-400' },
                { id: 8, icon: <TbBrandNextjs size={60} className="mx-auto" />, title: 'NextJS', style: 'hover:shadow-slate-400/40 hover:border-slate-400/40 text-slate-300' },
                { id: 9, icon: <FaAngular size={60} className="mx-auto" />, title: 'Angular', style: 'hover:shadow-red-600/40 hover:border-red-600/40 text-red-600' },
                { id: 10, icon: <SiRedux size={60} className="mx-auto" />, title: 'Redux', style: 'hover:shadow-purple-500/40 hover:border-purple-500/40 text-purple-600' },
                { id: 11, icon: <SiTailwindcss size={60} className="mx-auto" />, title: 'Tailwind', style: 'hover:shadow-sky-400/40 hover:border-sky-400/40 text-sky-400' },
                { id: 12, icon: <SiFlutter size={60} className="mx-auto" />, title: 'Flutter', style: 'hover:shadow-sky-300/40 hover:border-sky-300/40 text-sky-400' },
                { id: 13, icon: <FaHtml5 size={60} className="mx-auto" />, title: 'HTML5', style: 'hover:shadow-orange-500/40 hover:border-orange-500/40 text-orange-600' },
                { id: 14, icon: <FaCss3Alt size={60} className="mx-auto" />, title: 'CSS3', style: 'hover:shadow-blue-500/40 hover:border-blue-500/40 text-blue-600' },
            ]
        },
        {
            title: "Databases & Storage",
            skills: [
                { id: 15, icon: <SiMongodb size={60} className="mx-auto" />, title: 'MongoDB', style: 'hover:shadow-green-400/40 hover:border-green-400/40 text-green-500' },
                { id: 16, icon: <SiMysql size={60} className="mx-auto" />, title: 'MySQL', style: 'hover:shadow-blue-500/40 hover:border-blue-500/40 text-blue-500' },
                { id: 17, icon: <SiFirebase size={60} className="mx-auto" />, title: 'Firebase', style: 'hover:shadow-yellow-500/40 hover:border-yellow-500/40 text-yellow-500' },
            ]
        },
        {
            title: "Cloud, DevOps & Tools",
            skills: [
                { id: 18, icon: <FaAws size={60} className="mx-auto" />, title: 'AWS EC2', style: 'hover:shadow-orange-500/40 hover:border-orange-500/40 text-orange-500' },
                { id: 19, icon: <FaDocker size={60} className="mx-auto" />, title: 'Docker', style: 'hover:shadow-blue-400/40 hover:border-blue-400/40 text-blue-500' },
                { id: 20, icon: <FaGithub size={60} className="mx-auto" />, title: 'GitHub Actions', style: 'hover:shadow-gray-500/40 hover:border-gray-500/40 text-gray-400' },
            ]
        }
    ];

    return (
        <div name='skills' className='bg-slate-950 w-full min-h-screen text-white py-24 relative flex items-center'>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80"></div>
            
            <div className='max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full z-10'>
                <div className='pb-4'>
                    <h2 className='text-5xl font-extrabold font-Outfit inline border-b-4 border-[#ff014f] tracking-tight'>
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
                                {cat.skills.map(({ id, icon, title, style }) => (
                                    <div
                                        key={id}
                                        className={`glass-card p-5 rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md duration-300 hover:-translate-y-1 ${style}`}
                                    >
                                        <div className="mb-3 transform group-hover:scale-110 duration-300">
                                            {icon}
                                        </div>
                                        <p className='text-slate-200 font-semibold font-Outfit text-sm md:text-base'>{title}</p>
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
