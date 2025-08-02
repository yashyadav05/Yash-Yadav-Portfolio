import React from 'react'
import Heading from './Heading'
import linkedInIcon from '../assets/icons/icons8-linkedin.svg'
import { Footer } from './Footer'
import { links } from '../assets/links'

const GetInTouch = () => {
    const socialLinks = [
        {
            name: 'Email',
            icon: 'fa-solid fa-envelope',
            color: '#10b981', // emerald-500
            hoverColor: '#059669', // emerald-600
            action: () => window.open('mailto:iamyashyadav07@gmail.com'),
            gradient: 'from-emerald-500 to-emerald-600'
        },
        {
            name: 'LinkedIn',
            icon: 'fa-brands fa-linkedin-in',
            color: '#0A66C2',
            hoverColor: '#004182',
            action: () => window.open(links.linkedin, '_blank'),
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            name: 'GitHub',
            icon: 'fa-brands fa-github',
            color: '#181717',
            hoverColor: '#000000',
            action: () => window.open(links.github, '_blank'),
            gradient: 'from-gray-700 to-gray-900'
        },
        {
            name: 'X',
            icon: 'fa-brands fa-x-twitter',
            color: '#000000',
            hoverColor: '#1a1a1a',
            action: () => window.open(links.x, '_blank'),
            gradient: 'from-gray-800 to-black'
        }
    ]

    return (
        <div id='getintouch' className='w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent'></div>
            <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-1/4 left-1/4 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl'></div>
            
            <div className='relative text-start w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 m-auto min-h-[100vh]'>
                <Heading title={'Get in Touch'} />

                {/* Social Links Section */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 my-12 sm:my-16 lg:my-20'>
                    {socialLinks.map((social, index) => (
                        <div 
                            key={index}
                            onClick={social.action} 
                            className='group flex flex-col items-center justify-center gap-3 sm:gap-4 cursor-pointer transform hover:scale-110 transition-all duration-300'
                        >
                            {/* Icon container with gradient background */}
                            <div className={`relative h-16 sm:h-20 lg:h-24 aspect-square rounded-2xl flex items-center justify-center bg-gradient-to-br ${social.gradient} shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden`}>
                                {/* Shine effect */}
                                <div className='absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <i 
                                    className={`${social.icon} text-2xl sm:text-3xl lg:text-4xl text-white relative z-10 group-hover:scale-110 transition-transform duration-300`}
                                ></i>
                            </div>
                            
                            {/* Label */}
                            <h3 className='text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300'>
                                {social.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Content Section */}
                <div className='space-y-6 sm:space-y-8 lg:space-y-10 max-w-4xl'>
                    {/* Main CTA */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 leading-tight'>
                            Feel free to connect with me on socials
                        </h2>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-emerald-400 leading-tight'>
                            Let's Build Something Amazing Together!
                        </h1>
                    </div>

                    {/* Description */}
                    <div className='space-y-4 sm:space-y-6'>
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-white leading-relaxed'>
                            Excited about a project idea?
                        </h3>
                        
                        <p className='text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed'>
                            I'm all in for collaborative efforts. Collaboration fuels creativity, and together, we'll build a standout showcase.
                        </p>
                        
                        <div className='p-4 sm:p-6 bg-emerald-600/10 border border-emerald-500/30 rounded-2xl backdrop-blur-sm'>
                            <p className='text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed'>
                                Share your insights and reach out via email at{' '}
                                <a 
                                    href="mailto:iamyashyadav07@gmail.com"
                                    className='text-emerald-400 font-bold hover:text-emerald-300 transition-colors duration-300 break-all underline decoration-emerald-400/50 hover:decoration-emerald-300'
                                >
                                    iamyashyadav07@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Call to action button */}
                    <div className='pt-6 sm:pt-8'>
                        <button 
                            onClick={() => window.open('mailto:iamyashyadav07@gmail.com')}
                            className='group bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/25 flex items-center gap-3'
                        >
                            <i className="fa-solid fa-envelope group-hover:rotate-12 transition-transform duration-300"></i>
                            <span className='text-lg'>Start a Conversation</span>
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default GetInTouch
