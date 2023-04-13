import React from 'react'

const EducationCard = ({ title, subTitle, result, des }) => {
    return (
        <div className="w-full h-1/3 group flex ">
            <div className="w-10 h-[6px] bg-gray-500 opacity-30 mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-lightpink inline-flex group-hover:bg-white opacity-100 duration-300"></span>
                </span>
            </div>
            <div className="w-96 background  rounded-lg p-4 flex flex-col justify-center  shadow-shadowOn mb-7">
                <div className="flex flex-col lgl:flex-row justify-between lgl:items-center">
                    <div>
                        <h3 className="text-lg md:text-2xl text-hemant font-semibold group-hover:text-white duration-300">
                            {title}
                        </h3>
                        <p className="text-base mt-2 text-gray-400 group-hover:text-white duration-300">
                            {subTitle}
                            <p>{result}</p>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EducationCard
