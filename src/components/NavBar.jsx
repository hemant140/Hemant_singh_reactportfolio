import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'experience',
        },
        {
            id: 4,
            link: 'skills',
        },
        {
            id: 5,
            link: 'project',
        },
        {
            id: 6,
            link: 'contact',
        },
    ]

    return (
        <div className="bg-slate-950/75 backdrop-blur-md border-b border-slate-800/80 px-6 flex justify-between items-center w-full h-20 text-white fixed top-0 z-50 transition-all duration-300">

            <div className="flex items-center">
                <Link to="home" smooth duration={500} className="cursor-pointer group">
                    <h1 className="text-3xl font-signature font-bold text-hemant group-hover:scale-105 duration-300 flex items-center gap-1">
                        Hemant<span className="text-white group-hover:text-hemant duration-300">Singh</span>
                    </h1>
                </Link>
            </div>

            <ul className="hidden md:flex items-center gap-2">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 py-2 cursor-pointer capitalize font-semibold font-Outfit text-slate-300 hover:text-[#ff014f] transition-all duration-300 relative group">
                        <Link to={link} smooth duration={500} offset={-80} spy={true} activeClass="text-[#ff014f]">
                            {link}
                        </Link>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff014f] group-hover:w-full transition-all duration-300"></span>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-2 z-50 text-slate-300 hover:text-[#ff014f] duration-300 md:hidden">
                {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-lg text-slate-300 transition-all duration-300">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl font-semibold font-Outfit hover:text-[#ff014f] duration-300">
                            <Link onClick={() => setNav(false)} to={link} smooth duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Navbar