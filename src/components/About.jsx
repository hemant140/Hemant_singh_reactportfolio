import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>


            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    {/* <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p> */}
                </div>

                <div className='flex justify-center'>
                    <div className=" hidden md:flex bg-gradient-to-b from-teal-500  to-gray-600 rounded-full w-72 h-72 mt-20 ml-10 mr-14  max-lg:w-64 max-lg:h-64 max-md:w-52 max-md:h-52">
                        <img src="images/pic.png" alt="Avtar" className="mx-auto w-2/3 md:w-80 max-md:w-52
                    " />
                    </div>
                    <div className='flex-1'>
                        <p className=' mx-2 text-5xl max-lg:text-3xl max-md:text-4xl font-bold inline border-b-4 border-gray-500 max-[390px]:text-3xl max-md:mx-0'>About</p>
                        <p className='text-lg  px-2 max mt-10 text-gray-600 text-justify max-md:text-lg max-[390px]:text-base' >
                            <span className='text-lg text-gray-600 max-lg:text-base max-md:text-lg max-[390px]:text-base'>Hi,</span><br /> I am Hemant Singh, a graduate in Computer Science and Engineering from Veer Bahadur Singh Purvanchal University in Jaunpur, with a 72% grade.

                            Skilled in C++, Python, Flutter, HTML, CSS, JavaScript, Jquery, Reactjs, MySQL, etc. Created minor and major projects, including a malware detection project using machine learning and a notification app built with Flutter, Dart, and Firebase.

                            Currently learning Reactjs and working on web development projects after gaining proficiency in HTML, CSS, JavaScript, Jquery, and Bootstrap.
                            <br /> <span className='text-xl text-gray-500 max-lg:text-lg max-md:text-xl max-[390px]:text-lg'> Thanks You!</span>
                        </p>
                        <div>
                            <a href="Hemant_Singh_Resume.pdf" target='_blank' ><button className="text-white font-bold bg-teal-500 w-fit px-4 py-2 my-2 rounded-md max-sm:px-3 max-sm:py-2 hover:scale-110 duration-300 cursor-pointer">
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
