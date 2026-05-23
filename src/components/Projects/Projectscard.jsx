import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projectscard = ({ title, des, src, href, showGlobeLink, showBookLink, showEsimSouceLink, showahbrndsLink, projectLink, projectUrl, tech }) => {
    return (
        <div className="w-full p-5 rounded-xl glass-card border border-slate-800/80 bg-slate-900/30 backdrop-blur-md hover:border-[#ff014f]/30 duration-300 flex flex-col justify-between group">
            <div>
                {/* Image Frame */}
                <div className="w-full h-48 overflow-hidden rounded-lg border border-slate-850 bg-slate-950 relative">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 duration-500 cursor-pointer"
                        src={src}
                        alt={title}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 duration-300"></div>
                </div>

                {/* Details */}
                <div className="w-full mt-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold font-Outfit text-[#ff014f] group-hover:text-white duration-300 tracking-wide uppercase">
                            {title}
                        </h3>
                        
                        <div className="flex gap-2">
                            {href && (
                                <a href={href} target='_blank' rel="noopener noreferrer">
                                    <span className="text-base w-9 h-9 rounded-full bg-slate-950 hover:bg-[#ff014f] border border-slate-800 hover:border-[#ff014f] inline-flex justify-center items-center text-slate-300 hover:text-white duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                        <BsGithub />
                                    </span>
                                </a>
                            )}

                            {projectLink && (
                                <a href={projectUrl} target='_blank' rel="noopener noreferrer">
                                    <span className="text-base w-9 h-9 rounded-full bg-slate-950 hover:bg-[#ff014f] border border-slate-800 hover:border-[#ff014f] inline-flex justify-center items-center text-slate-300 hover:text-white duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                        <FaGlobe />
                                    </span>
                                </a>
                            )}
                            
                            {showGlobeLink && (
                                <a href="https://hemantmoviesflix.netlify.app/" target='_blank' rel="noopener noreferrer">
                                    <span className="text-base w-9 h-9 rounded-full bg-slate-950 hover:bg-[#ff014f] border border-slate-800 hover:border-[#ff014f] inline-flex justify-center items-center text-slate-300 hover:text-white duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                        <FaGlobe />
                                    </span>
                                </a>
                            )}
                            
                            {showBookLink && (
                                <a href="https://hemantbooksite.netlify.app/" target='_blank' rel="noopener noreferrer">
                                    <span className="text-base w-9 h-9 rounded-full bg-slate-950 hover:bg-[#ff014f] border border-slate-800 hover:border-[#ff014f] inline-flex justify-center items-center text-slate-300 hover:text-white duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                        <FaGlobe />
                                    </span>
                                </a>
                            )}
                            
                            {showEsimSouceLink && (
                                <a href="https://esimsource.com" target='_blank' rel="noopener noreferrer">
                                    <span className="text-base w-9 h-9 rounded-full bg-slate-950 hover:bg-[#ff014f] border border-slate-800 hover:border-[#ff014f] inline-flex justify-center items-center text-slate-300 hover:text-white duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                        <FaGlobe />
                                    </span>
                                </a>
                            )}
                            
                            {showahbrndsLink && (
                                <a href="https://play.google.com/store/apps/details?id=com.ahbrands.app" target='_blank' rel="noopener noreferrer">
                                    <span className="text-base w-9 h-9 rounded-full bg-slate-950 hover:bg-[#ff014f] border border-slate-800 hover:border-[#ff014f] inline-flex justify-center items-center text-slate-300 hover:text-white duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                        <FaGlobe />
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                    
                    <p className="text-sm font-Outfit text-slate-400 leading-relaxed font-normal hover:text-slate-300 duration-300">
                        {des}
                    </p>

                    {/* Technology Badges */}
                    {tech && tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2 pt-4 border-t border-slate-800/60">
                            {tech.map((item, index) => (
                                <span 
                                    key={index}
                                    className="text-[10px] font-bold font-Outfit text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projectscard
