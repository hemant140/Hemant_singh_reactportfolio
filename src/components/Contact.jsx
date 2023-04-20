import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

        <div className='pb-8 mt-5'>
          <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6 text-hemant'>Submit the Form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center px-40 max-sm:px-0'>
          <form action="https://getform.io/f/c9305fd4-31b5-427e-82ca-d4aaf454a8af" method='POST' className='flex flex-col w-full md:2-1/2'>
            <label htmlFor="" className='mt-4 font-bold'>Name</label>
            <input
              type="text"
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <label htmlFor="" className='mt-4 font-bold'>Email</label>
            <input
              type="email"
              name='email'
              placeholder='Enter your email'
              className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <label htmlFor="" className='mt-4 font-bold'>Messages</label>
            <textarea name="message" rows="7" placeholder='Enter your message'
              className='p-2 rounded-md bg-transparent border-2 text-white focus:outline-none'
            ></textarea>

            <button className='text-white bg-teal-500 font-bold px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
