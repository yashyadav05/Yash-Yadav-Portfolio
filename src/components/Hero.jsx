import React from 'react'
import profileImage from '../assets/images/WhatsApp Image 2025-08-15 at 11.23.06_1d54d716.jpg'
import { Link } from 'react-scroll'
import { links } from '../assets/links'

const Hero = () => {
    return (
        <div id='hero' className='w-full max-w-[1180px] m-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 grid-cols-1 text-white items-center min-h-[90vh] lg:max-h-[700px] gap-6 sm:gap-8 lg:gap-12'>
            
            {/* Text Content Section */}
            <div className='text-center lg:text-start space-y-4 sm:space-y-6 order-2 lg:order-1'>
                <div className='space-y-1 sm:space-y-2'>
                    <h1 className='text-lg sm:text-xl font-light text-gray-300 tracking-wide'>Hello, I'm</h1>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-400 leading-tight'>
                        Yash Yadav 
                        <span className='inline-block ml-1 sm:ml-2 animate-pulse'>👋</span>
                    </h1>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                        Fullstack Developer
                    </h1>
                </div>
                
                <p className='text-base sm:text-lg text-gray-300 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0 px-2 sm:px-0'>
                    I'm Yash, a passionate Full-Stack Developer turning ideas into reality with clean code and creative solutions. Whether it's a sleek UI or a robust backend, I bring passion and precision to every project. 
                    <span className='text-emerald-400 font-medium'> Let's innovate together!</span>
                </p>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start pt-2 sm:pt-4'>
                    <Link 
                        to='projects' 
                        smooth={true} 
                        duration={500} 
                        className='group w-full sm:w-auto px-6 py-3 text-base sm:text-lg bg-emerald-600 text-white rounded-full flex gap-2 sm:gap-3 items-center justify-center hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105'
                    >
                        <i className="fa-solid fa-code group-hover:rotate-12 transition-transform duration-300"></i>
                        Projects
                    </Link>
                    
                    <button 
                        onClick={() => window.open(links.resume, '_blank')} 
                        className='group w-full sm:w-auto px-6 py-3 text-base sm:text-lg border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 ease-in-out flex gap-2 sm:gap-3 items-center justify-center hover:shadow-lg hover:shadow-emerald-400/25 transform hover:scale-105'
                    >
                        <i className="fa-regular fa-file group-hover:scale-110 transition-transform duration-300"></i>
                        Resume
                    </button>
                </div>
            </div>

            {/* Profile Image Section */}
            <div className='flex items-center justify-center relative order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0'>
                {/* Decorative background elements */}
                <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl sm:blur-3xl scale-110'></div>
                
                {/* Main profile container */}
                <div className='relative group'>
                    <div 
                        style={{ 
                            backgroundImage: `url(${profileImage})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',  
                            backgroundRepeat: 'no-repeat' 
                        }} 
                        className='w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-800 border-2 sm:border-4 border-emerald-500 shadow-xl sm:shadow-2xl shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500 ease-in-out relative overflow-hidden'
                    >
                        {/* Subtle overlay for better contrast */}
                        <div className='absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-full'></div>
                    </div>
                    
                    {/* Floating accent dots - responsive sizing */}
                    <div className='absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-emerald-400 rounded-full opacity-80 animate-bounce'></div>
                    <div className='absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-emerald-300 rounded-full opacity-60 animate-pulse'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
