import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>


            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    {/* <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p> */}
                </div>

                <div className='flex justify-center'>
                    <div className=" hidden md:flex bg-gradient-to-b from-teal-500  to-gray-600 rounded-full w-72 h-72 mt-32 ml-4 mr-16  max-lg:w-64 max-lg:h-64 max-md:w-52 max-md:h-52">
                        <img src="images/pic.png" alt="Avtar" className="mx-auto w-2/3 md:w-80 max-md:w-52
                    " />
                    </div>
                    <div className='flex-1'>
                        <p className=' mx-2 text-5xl max-lg:text-3xl max-md:text-4xl font-bold inline border-b-4 border-gray-500 max-[390px]:text-3xl max-md:mx-0'>About</p>
                        <p className='text-lg  px-2 max mt-10 text-gray-600 text-justify max-md:text-lg max-[390px]:text-base' >
                            <span className='text-lg text-gray-600 max-lg:text-lg max-md:text-lg max-[390px]:text-base'>Hi,</span><br /> 
                            I am a passionate software developer with expertise in a wide array of web technologies. From the foundational trio of HTML, CSS, and JavaScript to the dynamic capabilities of frameworks like React, Angular, and Next.js, I have honed my skills to craft seamless and responsive digital solutions. Moreover, my proficiency extends to Flutter for building cross-platform mobile applications and Node.js for server-side development, complemented by MySQL for robust data management. My career journey has been a dynamic interplay of innovation and functionality. Whether perfecting user interfaces, architecting the core of web applications, or designing efficient databases, I relish the challenges each project brings. In an ever-evolving digital landscape, I embrace opportunities to learn, adapt, and push boundaries. Join me on this exhilarating journey of reshaping the digital world through code and creativity.
                            <br /> <span className='text-lg text-gray-500 max-lg:text-lg max-md:text-lg max-[390px]:text-lg'> Thanks You!</span>
                        </p>
                        <div>
                            <a href="Hemnat-Singh-Junior-Software-Developer.pdf" target='_blank' ><button className="text-white font-bold bg-teal-500 w-fit px-4 py-2 my-2 rounded-md max-sm:px-3 max-sm:py-2 hover:scale-110 duration-300 cursor-pointer">
                                Resume
                            </button></a> 
                        </div>

                    </div>



                </div>



            </div>

        </div>
    )
}

export default About
