import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";



const Projectscard = ({ title, des, src, href, showGlobeLink, showBookLink, showEsimSouceLink, showahbrndsLink }) => {
    return (
        <div className="w-80 p-4  h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="w-72  h-[80%] overflow-hidden rounded-lg">
                <img
                    className="w-full h-44 object-cover  group-hover:scale-110 duration-300 cursor-pointer"
                    src={src}
                    alt="src"
                />
            </div>
            <div className="w-full mt-5 flex flex-col  gap-6 group ">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-designColor  text-hemant group-hover:text-white font-normal">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            <a href={href} target='_blank' rel="noopener noreferrer" ><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-hemant group-hover:text-white duration-300 cursor-pointer">
                                <BsGithub />
                            </span></a>
                            {showGlobeLink && (
                                <a href="https://hemantmoviesflix.netlify.app/" target='_blank' rel="noopener noreferrer"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-hemant group-hover:text-white duration-300 cursor-pointer">
                                    <FaGlobe />
                                </span></a>
                            )}
                            {showBookLink && (
                                <a href="https://hemantbooksite.netlify.app/" target='_blank' rel="noopener noreferrer"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-hemant group-hover:text-white duration-300 cursor-pointer">
                                    <FaGlobe />
                                </span></a>
                            )}
                            {showEsimSouceLink && (
                                <a href="http://esim.sirrat.com" target='_blank' rel="noopener noreferrer"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-hemant group-hover:text-white duration-300 cursor-pointer">
                                    <FaGlobe />
                                </span></a>
                            )}
                            {showahbrndsLink && (
                                <a href="https://play.google.com/store/apps/details?id=com.ahbrands.app" target='_blank' rel="noopener noreferrer"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-hemant group-hover:text-white duration-300 cursor-pointer">
                                    <FaGlobe />
                                </span></a>
                            )}
                        </div>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {des}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projectscard
