import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { links } from '../assets/links'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden lg:flex w-full max-w-[1180px] py-4 px-6 sticky top-4 backdrop-blur-lg m-auto border-2 border-emerald-500/30 bg-gray-900/80 items-center justify-center gap-12 rounded-full z-50 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300'>
        
        <Link 
          to='skills' 
          smooth={true} 
          duration={500} 
          className='group text-gray-300 text-base font-semibold cursor-pointer hover:text-emerald-400 transition-all duration-300 ease-in-out relative px-3 py-2 rounded-lg hover:bg-emerald-500/10'
        >
          Skills
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300'></span>
        </Link>
        
        <Link 
          to='projects' 
          smooth={true} 
          duration={500} 
          className='group text-gray-300 text-base font-semibold cursor-pointer hover:text-emerald-400 transition-all duration-300 ease-in-out relative px-3 py-2 rounded-lg hover:bg-emerald-500/10'
        >
          My Work
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300'></span>
        </Link>
        
        <Link 
          to='about' 
          smooth={true} 
          duration={500} 
          className='group text-gray-300 text-base font-semibold cursor-pointer hover:text-emerald-400 transition-all duration-300 ease-in-out relative px-3 py-2 rounded-lg hover:bg-emerald-500/10'
        >
          About
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300'></span>
        </Link>
        
        <a 
          href={links.resume} 
          target='_blank' 
          rel='noopener noreferrer'
          className='group text-gray-300 text-base font-semibold cursor-pointer hover:text-emerald-400 transition-all duration-300 ease-in-out relative px-3 py-2 rounded-lg hover:bg-emerald-500/10 flex items-center gap-2'
        >
          <i className="fa-regular fa-file text-sm group-hover:scale-110 transition-transform duration-300"></i>
          Resume
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300'></span>
        </a>
        
        <Link 
          to='getintouch' 
          smooth={true} 
          duration={500} 
          className='group bg-emerald-600 text-white text-base font-semibold cursor-pointer hover:bg-emerald-700 transition-all duration-300 ease-in-out px-4 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-600/25 transform hover:scale-105 flex items-center gap-2'
        >
          <i className="fa-regular fa-envelope text-sm group-hover:rotate-12 transition-transform duration-300"></i>
          Contact
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className='lg:hidden w-full max-w-[1180px] mx-auto px-4 sm:px-6 sticky top-2 z-50'>
        {/* Mobile Header */}
        <div className='flex items-center justify-between py-3 px-4 sm:px-6 backdrop-blur-lg bg-gray-900/80 border-2 border-emerald-500/30 rounded-full shadow-lg shadow-emerald-500/10'>
          {/* Logo/Brand */}
          <div className='text-emerald-400 font-bold text-lg sm:text-xl'>
            YY
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className='p-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300'
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mt-2 backdrop-blur-lg bg-gray-900/90 border-2 border-emerald-500/30 rounded-2xl shadow-lg shadow-emerald-500/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='p-4 space-y-2'>
            <Link 
              to='skills' 
              smooth={true} 
              duration={500}
              onClick={closeMobileMenu}
              className='block w-full text-left px-4 py-3 text-gray-300 font-semibold hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300'
            >
              <i className="fa-solid fa-code mr-3 text-emerald-400"></i>
              Skills
            </Link>
            
            <Link 
              to='projects' 
              smooth={true} 
              duration={500}
              onClick={closeMobileMenu}
              className='block w-full text-left px-4 py-3 text-gray-300 font-semibold hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300'
            >
              <i className="fa-solid fa-briefcase mr-3 text-emerald-400"></i>
              My Work
            </Link>
            
            <Link 
              to='about' 
              smooth={true} 
              duration={500}
              onClick={closeMobileMenu}
              className='block w-full text-left px-4 py-3 text-gray-300 font-semibold hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300'
            >
              <i className="fa-solid fa-user mr-3 text-emerald-400"></i>
              About
            </Link>
            
            <a 
              href={links.resume} 
              target='_blank' 
              rel='noopener noreferrer'
              onClick={closeMobileMenu}
              className='block w-full text-left px-4 py-3 text-gray-300 font-semibold hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300'
            >
              <i className="fa-regular fa-file mr-3 text-emerald-400"></i>
              Resume
            </a>
            
            <Link 
              to='getintouch' 
              smooth={true} 
              duration={500}
              onClick={closeMobileMenu}
              className='block w-full text-center px-4 py-3 mt-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300'
            >
              <i className="fa-regular fa-envelope mr-2"></i>
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className='lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40'
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  )
}

export default Navbar
