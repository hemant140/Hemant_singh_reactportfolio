import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-slate-950 text-white py-24 relative flex items-center'>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80"></div>
      
      <div className='flex flex-col p-6 justify-center max-w-screen-lg mx-auto w-full z-10'>
        <div className='pb-4'>
          <h2 className='text-5xl font-extrabold font-Outfit inline border-b-4 border-[#ff014f] tracking-tight'>
            Contact
          </h2>
          <p className='py-6 text-slate-400 font-Outfit text-lg'>
            Feel free to submit the form below or reach out directly to get in touch with me!
          </p>
        </div>

        <div className='flex justify-center items-center mt-6 w-full'>
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-slate-800/80 bg-slate-900/20 backdrop-blur-md shadow-2xl max-w-xl w-full">
            <form 
              action="https://getform.io/f/c9305fd4-31b5-427e-82ca-d4aaf454a8af" 
              method='POST' 
              className='flex flex-col w-full gap-5'
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className='font-bold font-Outfit text-slate-300 text-sm md:text-base'>Name</label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  placeholder='Enter your name'
                  required
                  className='p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#ff014f] focus:ring-1 focus:ring-[#ff014f] transition-all duration-300 font-Outfit'
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className='font-bold font-Outfit text-slate-300 text-sm md:text-base'>Email</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  placeholder='Enter your email'
                  required
                  className='p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#ff014f] focus:ring-1 focus:ring-[#ff014f] transition-all duration-300 font-Outfit'
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className='font-bold font-Outfit text-slate-300 text-sm md:text-base'>Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="6" 
                  placeholder='Enter your message'
                  required
                  className='p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#ff014f] focus:ring-1 focus:ring-[#ff014f] transition-all duration-300 font-Outfit resize-none'
                ></textarea>
              </div>

              <button className='text-white bg-[#ff014f] hover:bg-[#e00045] font-bold px-8 py-3.5 mt-4 rounded-lg hover:scale-105 duration-300 font-Outfit tracking-wide shadow-[0_4px_15px_rgba(255,1,79,0.25)] hover:shadow-[0_4px_25px_rgba(255,1,79,0.45)] w-full transition-all'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
