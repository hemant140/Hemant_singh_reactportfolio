import React from 'react';


const Skills = () => {


    const tech = [
        {
            id: 1,
            src: 'images/html.png',
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: 'images/css.png',
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: 'images/javascript.png',
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },

        {
            id: 4,
            src: 'images/react.png',
            title: 'React',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: 'images/c_programming.png',
            title: 'C++',
            style: 'shadow-sky-700'
        },
        {
            id: 6,
            src: 'images/angular.png',
            title: 'Angular',
            style: 'shadow-red-500'
        },
        {
            id: 7,
            src: 'images/mongodb.png',
            title: 'MongoDb',
            style: 'shadow-lime-400'
        },
        {
            id: 8,
            src: 'images/flutter.png',
            title: 'Flutter',
            style: 'shadow-sky-300'
        },
        {
            id: 9,
            src: 'images/firebase.png',
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },

        {
            id: 10,
            src: 'images/mysql.png',
            title: 'SQL',
            style: 'shadow-blue-500'
        },
        {
            id: 11,
            src: 'images/python.png',
            title: 'Python',
            style: 'shadow-yellow-300'
        },
        {
            id: 12,
            src: 'images/githubs.png',
            title: 'Github',
            style: 'shadow-gray-500'
        },
    ]

    return (
        <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full text-li'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-7'>
                    <p className=' text-5xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                    <p className='py-4 text-hemant'>I have to know these technologies.</p>
                </div>

                <div className='w-full grid
                 grid-cols-2 sm:grid-cols-4 gap-8 text-center  px-12 sm:px-0'>


                    {tech.map(({ id, src, title, style }) => (

                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="html" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Skills
