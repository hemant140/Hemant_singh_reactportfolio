import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

const Sociallinks = () => {
    const sociallinks = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/hemant140/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/hemant140",
        },
        {
            id: 3,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/h_e_m_a_n_t14/",
        },
        {
            id: 4,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:hemo.hm579@gmail.com",
            style: 'rounded-br-md'
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-40'>
            <ul>
                {sociallinks.map(({ id, child, href, style }) => (
                    <li 
                        key={id} 
                        className={`flex justify-between items-center w-36 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-slate-900/90 border border-slate-800/80 hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300 shadow-xl ${style}`}
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white font-Outfit font-semibold text-sm'
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sociallinks
