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


        </div>


      </div>

    </div>
  )
}

export default Projects
