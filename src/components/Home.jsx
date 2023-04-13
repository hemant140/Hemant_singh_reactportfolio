import React from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Home = () => {

    const [text] = useTypewriter({
        words: ["Software Engineer.", "Full Stack Developer.", "Flutter Developer."],
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 30,
        delaySpeed: 2000,
    });

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex  items-center justify-center h-full px-4 md:flex-row max-sm:justify-center">


                <div className="flex flex-col justify-center h-full">
                    <h2 className="text_name  font-bold text-white">Hello ,I'm </h2>
                    <p className="text-hemant text-7xl font-bold max-md:text-5xl max-lg:6xl max-sm:text-6xl">Hemant Singh</p>
                    <h2 className="text-4xl font-bold text-white max-sm:text-4xl  max-md:text-2xl">a <span>{text}</span><Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    /></h2>
                    <div>
                        <Link to="https://www.linkedin.com/in/hemant-singh-646826227/" target="_blank" > <button className="text-white font-bold bg-teal-500  w-fit px-6 py-3 my-2 rounded-md max-sm:px-3 max-sm:py-2 hover:scale-110 duration-300">
                            Hire me
                        </button></Link>

                    </div>
                </div>

                <div className="bg-gradient-to-b from-teal-500  to-gray-600 rounded-full w-80 h-80 ml-16 max-lg:w-72 max-lg:h-72 max-md:w-64 max-md:h-64 max-sm:w-52 sm:flex  hidden max-sm:h-52 ">
                    <img width='270' src="images/avtar.png" alt="Avtar" className=" w-80 my-10 max-lg:w-72  max-md:w-64
                    " />
                </div>

            </div>
        </div>
    )
}

export default Home