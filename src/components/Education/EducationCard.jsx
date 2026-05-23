import React from 'react'

const EducationCard = ({ title, subTitle, result, des, points, isActive }) => {
    return (
        <div className="w-full h-auto group flex relative">
            {/* Timeline Left Node connector */}
            <div className="w-10 flex-shrink-0 flex justify-center relative">
                {/* Horizontal connection line */}
                <div className="w-10 h-[2px] bg-slate-800 absolute top-12 left-0 group-hover:bg-cyan-500/50 duration-300"></div>
                {/* Node dot */}
                <span className={`absolute w-5 h-5 rounded-full top-[38px] left-[10px] flex justify-center items-center bg-slate-950 border-2 z-10 duration-300 ${isActive ? 'border-cyan-500 glow-node' : 'border-slate-700 group-hover:border-cyan-500'}`}>
                    <span className={`w-2 h-2 rounded-full inline-flex duration-300 ${isActive ? 'bg-cyan-500 scale-110' : 'bg-cyan-500/70 group-hover:bg-white group-hover:scale-125'}`}></span>
                </span>
            </div>

            {/* Content Card */}
            <div className={`w-full ml-4 glass-card rounded-xl p-6 mb-8 border backdrop-blur-md duration-300 ${isActive ? 'border-cyan-500/40 bg-slate-900/50 shadow-[0_4px_20px_rgba(6,182,212,0.08)]' : 'border-slate-800/80 bg-slate-900/30 hover:border-cyan-500/30'}`}>
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-3">
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl md:text-2xl text-cyan-450 font-bold group-hover:text-white duration-300 font-Outfit">
                                {title}
                            </h3>
                            {isActive && (
                                <span className="text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-2 py-0.5 rounded-full uppercase shadow-md animate-pulse">
                                    Active
                                </span>
                            )}
                        </div>
                        <p className="text-base text-slate-350 mt-1 font-semibold font-Outfit">
                            {subTitle}
                        </p>
                    </div>
                    {result && (
                        <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${isActive ? 'text-white bg-cyan-500/20 border border-cyan-500/50' : 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60'}`}>
                            {result}
                        </span>
                    )}
                </div>

                {/* Plain description if present */}
                {des && (
                    <p className="mt-4 text-slate-400 font-Outfit text-sm md:text-base leading-relaxed">
                        {des}
                    </p>
                )}

                {/* Detailed Professional Achievements Bullet Points */}
                {points && points.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-slate-800/60 pt-4">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-2 text-slate-450 group-hover:text-slate-300 duration-300 text-sm md:text-base leading-relaxed">
                                <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-xs">◆</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default EducationCard
