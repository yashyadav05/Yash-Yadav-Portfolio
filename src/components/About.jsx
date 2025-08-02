import React from 'react'
import Heading from './Heading'
import { links } from '../assets/links'

const About = () => {
  return (
    <div id='about' className='text-start w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 m-auto'>
      
      <Heading title={"Short Bio"} />
      
      <div className='space-y-6 sm:space-y-8 my-8 sm:my-12 lg:my-16'>
        <p className='text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
          Hello, I'm <span className='text-emerald-400 font-semibold'>Yash Yadav</span>, a{' '}
          <span className='text-emerald-400 font-semibold'>Fullstack Developer</span> currently based in{' '}
          <span className='text-white font-medium'>Bengaluru, Karnataka, India</span>. I have completed my graduation in{' '}
          <span className='text-white font-medium'>Bachelor of Computer Applications</span> from{' '}
          <span className='text-white font-medium'>AKS University, Satna, Madhya Pradesh, India</span>.
        </p>
        
        <p className='text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
          I specialize in building{' '}
          <span className='text-emerald-400 font-medium'>scalable web applications</span> using modern technologies. 
          I am always eager to{' '}
          <span className='text-white font-medium'>learn new skills</span>,{' '}
          <span className='text-white font-medium'>collaborate with like-minded individuals</span>, and{' '}
          <span className='text-emerald-400 font-medium'>create something exciting</span> that makes a difference.
        </p>
        
        <p className='text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
          My expertise includes working with both{' '}
          <span className='text-emerald-400 font-medium'>frontend and backend technologies</span>, 
          ensuring{' '}
          <span className='text-white font-medium'>seamless user experiences</span> and{' '}
          <span className='text-white font-medium'>robust functionality</span>.
        </p>
      </div>
      
      {/* Optional: Add some visual elements for enhancement */}
      <div className='flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8'>
        <div className='px-3 sm:px-4 py-2 bg-emerald-600/10 border border-emerald-500/30 rounded-full'>
          <span className='text-emerald-400 text-sm sm:text-base font-medium'>📍 Bengaluru, India</span>
        </div>
        <div className='px-3 sm:px-4 py-2 bg-emerald-600/10 border border-emerald-500/30 rounded-full'>
          <span className='text-emerald-400 text-sm sm:text-base font-medium'>🎓 BCA Graduate</span>
        </div>
        <div className='px-3 sm:px-4 py-2 bg-emerald-600/10 border border-emerald-500/30 rounded-full'>
          <span className='text-emerald-400 text-sm sm:text-base font-medium'>💻 Full Stack Developer</span>
        </div>
      </div>
    </div>
  )
}

export default About
