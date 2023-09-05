import React from 'react'
import Projectscard from './Projectscard'

const Projects = () => {
  return (
    <div name='project' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

        <div className='pb-8 mt-5'>
          <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6 text-hemant'>Here is my some Projects</p>
        </div>


        <div className='grid grid-cols-3 gap-14 max-sm:grid-cols-1 max-lg:grid-cols-2'>
          <Projectscard
            title="Esim Source "
            des="As a junior software developer at Virtuzo Infosystems Pvt Ltd, I contributed to projects built with React, Redux, MySQL.I played a key role in designing, implementing, and maintaining these projects."
            src="images/sim.jpg"
            // href="https://github.com/hemant140/MoviesFlixReact"
            showEsimSouceLink // new prop to conditionally render the GitHub link
          />
          <Projectscard
            title="AHBRANDS APP"
            des="Contributing to the AHBRANDS project, an e-commerce app developed using Ionic Angular, which involves building and designing a user-friendly interface for online shopping and utilizing PHP APIs."
            src="images/ah2.jpg"
            // href="https://github.com/hemant140/MoviesFlixReact"
            showahbrndsLink // new prop to conditionally render the GitHub link
          />
          <Projectscard
            title="MoviesFlix "
            des="I built an attractive moviesflix site using TMBD APIs in ReactJS. With a strong emphasis on user experience, I implemented all necessary features to showcase my proficiency in front-end development."
            src="images/movies.png"
            href="https://github.com/hemant140/MoviesFlixReact"
            showGlobeLink // new prop to conditionally render the GitHub link
          />
          <Projectscard
            title="MALWARE DETECTION USING ML"
            des="Built a malware detection system using Python libraries and machine learning algorithms to detect and differentiate between malicious and legitimate files, enhancing the security of the system."
            src="images/malware.jpg"
            href="https://github.com/hemant140/MalwareDetection"
          />
          <Projectscard
            title="NOTIFY APP"
            des="Used Flutter to design and develop a BMI Calculator app accurately calculates BMI and provides personalized health insights.The app helps users maintain a healthy weight by offering useful advice."
            href="https://github.com/hemant140/Notify-App"
            src="images/note.jpg"
          />
          <Projectscard
            title="BMI CALCULATOR APP"
            des="Developed a BMI Calculator app using Flutter.The app accurately calculates and tracks the user's BMI.The app provides personalized health insights and helps users maintain a healthy weight."
            src="images/bmi.jpg"
            href="https://github.com/hemant140/Bmi-Calculater-App"
          />
          <Projectscard
            title="BookStore"
            des="Built online bookstore using HTML, CSS, and JavaScript, demonstrating front-end web dev skills.Created responsive,user-friendly bookstore site with HTML,CSS and JS,showcasing modern web dev proficiency."
            src="images/bookstore.png"
            href="https://github.com/hemant140/MoviesFlixReact"
            showBookLink // new prop to conditionally render the GitHub link
          />



        </div>


      </div>

    </div>
  )
}

export default Projects
