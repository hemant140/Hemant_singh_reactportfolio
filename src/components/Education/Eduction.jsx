import React from 'react'
import EducationCard from './EducationCard'

const Eduction = () => {
    return (
        <div name='experience' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='w-full flex gap-20 justify-evenly px-24 max-[950px]:flex-col'>
                <div>
                    <div className="py-6 font-titleFont flex flex-col ">
                        <h2 className="text-3xl md:text-4xl font-bold ">Education </h2>
                        <p className="text-sm text-hemant tracking-[4px]">2015 - 2022</p>
                    </div>
                    <div className="mt-6 w-full h-auto border-l-[6px] border-l-gray-500 border-opacity-30 flex flex-col">
                        <EducationCard
                            title="B.Tech (Computer Science & Engineering)"
                            subTitle="Veer Bahadur Singh Purvanchal University Jaunpur(2018 - 2022)"
                            result="Percentage: 72%"

                        />
                        <EducationCard
                            title="12th Senior Secondary Examination"
                            subTitle="Maharishi Vidya mandir,Aligarh(2017 - 2018)"
                            result="Percentage: 61%"


                        />
                        <EducationCard
                            title="10th Higher Secondary Examination"
                            subTitle="Maharishi Vidya mandir,Aligarh(2015 - 2016)"
                            result="Percentage: 90%"
                        />
                    </div>
                </div>
                {/* part Two */}

                <div>
                    <div className="py-6  font-titleFont flex flex-col">

                        <h2 className="text-3xl md:text-4xl font-bold ">Experience</h2>
                        <p className="text-sm text-hemant tracking-[4px]">Feb 2023 - Present</p>
                    </div>
                    <div className="mt-6 w-full h-auto border-l-[6px] border-l-gray-500 border-opacity-30 flex flex-col ">
                        <EducationCard
                            title="Software Engineer"
                            subTitle="Oriserve India Pvt. Ltd. - (Mar 2025 - Present)"
                            result="Noida"
                        />
                        <EducationCard
                            title="Software Engineer (Founding Engineer)"
                            subTitle="Ecohodo Technologies Pvt. Ltd. - (Jul 2024 - Mar 2025)"
                            result="New Delhi"
                        />
                        <EducationCard
                            title="Software Developer"
                            subTitle="Plutos One - (Mar 2024 - Jul 2024)"
                            result="Noida"
                        />
                        <EducationCard
                            title="Junior Software Developer"
                            subTitle="Virtuzo Infosystems - (Feb 2023 - Mar 2024)"
                            result="Noida"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Eduction
