import React from 'react';
import { FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaAngular } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiMongodb, SiMysql, SiRedux, SiTailwindcss, SiFirebase, SiFlutter, SiCplusplus, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {


    const tech = [
        {
            id: 1,
            icon: <FaNodeJs size={80} className="mx-auto" />,
            title: 'Node.js',
            style: 'shadow-green-500 text-green-500'
        },
        {
            id: 2,
            icon: <SiNestjs size={80} className="mx-auto" />,
            title: 'NestJS',
            style: 'shadow-red-500 text-red-600'
        },
        {
            id: 3,
            icon: <SiTypescript size={80} className="mx-auto" />,
            title: 'TypeScript',
            style: 'shadow-blue-500 text-blue-600'
        },
        {
            id: 4,
            icon: <FaReact size={80} className="mx-auto" />,
            title: 'React',
            style: 'shadow-sky-400 text-sky-400'
        },
        {
            id: 5,
            icon: <TbBrandNextjs size={80} className="mx-auto" />,
            title: 'NextJS',
            style: 'shadow-white text-white'
        },
        {
            id: 6,
            icon: <SiMongodb size={80} className="mx-auto" />,
            title: 'MongoDB',
            style: 'shadow-green-400 text-green-500'
        },
        {
            id: 7,
            icon: <FaAws size={80} className="mx-auto" />,
            title: 'AWS',
            style: 'shadow-orange-500 text-orange-500'
        },
        {
            id: 8,
            icon: <FaDocker size={80} className="mx-auto" />,
            title: 'Docker',
            style: 'shadow-blue-400 text-blue-500'
        },
        {
            id: 9,
            icon: <SiJavascript size={80} className="mx-auto" />,
            title: 'JavaScript',
            style: 'shadow-yellow-500 text-yellow-400'
        },
        {
            id: 10,
            icon: <FaHtml5 size={80} className="mx-auto" />,
            title: 'HTML',
            style: 'shadow-orange-500 text-orange-600'
        },
        {
            id: 11,
            icon: <FaCss3Alt size={80} className="mx-auto" />,
            title: 'CSS',
            style: 'shadow-blue-500 text-blue-600'
        },
        {
            id: 12,
            icon: <SiMysql size={80} className="mx-auto" />,
            title: 'MySQL',
            style: 'shadow-blue-500 text-blue-500'
        },
        {
            id: 13,
            icon: <SiRedux size={80} className="mx-auto" />,
            title: 'Redux',
            style: 'shadow-purple-500 text-purple-600'
        },
        {
            id: 14,
            icon: <SiTailwindcss size={80} className="mx-auto" />,
            title: 'Tailwind',
            style: 'shadow-sky-400 text-sky-400'
        },
        {
            id: 15,
            icon: <FaGithub size={80} className="mx-auto" />,
            title: 'Github',
            style: 'shadow-gray-500 text-gray-400'
        },
        {
            id: 16,
            icon: <SiFlutter size={80} className="mx-auto" />,
            title: 'Flutter',
            style: 'shadow-sky-300 text-sky-400'
        },
        {
            id: 17,
            icon: <SiFirebase size={80} className="mx-auto" />,
            title: 'Firebase',
            style: 'shadow-yellow-500 text-yellow-500'
        },
        {
            id: 18,
            icon: <FaPython size={80} className="mx-auto" />,
            title: 'Python',
            style: 'shadow-yellow-300 text-yellow-300'
        },
        {
            id: 19,
            icon: <SiCplusplus size={80} className="mx-auto" />,
            title: 'C++',
            style: 'shadow-blue-700 text-blue-700'
        },
        {
            id: 20,
            icon: <FaAngular size={80} className="mx-auto" />,
            title: 'Angular',
            style: 'shadow-red-500 text-red-600'
        },
    ]

    return (
        <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full text-li'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-7'>
                    <p className=' text-5xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                    <p className='py-4 text-hemant'>I have to know these technologies.</p>
                </div>

                <div className='w-full grid
                 grid-cols-2 sm:grid-cols-4 gap-8 text-center px-12 sm:px-0'>


                    {tech.map(({ id, icon, title, style }) => (

                        <div
                            key={id}
                            className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg ${style}`}>
                            {icon}
                            <p className='mt-4 text-white'>{title}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Skills
