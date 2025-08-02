import React from 'react'
import Heading from './Heading'
import devfolioIcon from '../assets/icons/devfolio.png'
import bookIcon from '../assets/icons/icons8-book-48.png'
import speakingIcon from '../assets/icons/icons8-public-speaking-40.png'

export const Interests = () => {
  const interests = [
    {
      id: '01',
      name: 'Coding',
      icon: 'fa-solid fa-code',
      iconType: 'font',
      description: 'Building solutions through clean, efficient code',
      color: 'text-emerald-500',
      bgGradient: 'from-emerald-500/10 to-emerald-600/10'
    },
    {
      id: '02',
      name: 'Hackathons',
      icon: devfolioIcon,
      iconType: 'image',
      description: 'Collaborative innovation in time-bound challenges',
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/10 to-blue-600/10'
    },
    {
      id: '03',
      name: 'Books',
      icon: bookIcon,
      iconType: 'image',
      description: 'Continuous learning through reading',
      color: 'text-amber-500',
      bgGradient: 'from-amber-500/10 to-amber-600/10'
    },
    {
      id: '04',
      name: 'Public Speaking',
      icon: speakingIcon,
      iconType: 'image',
      description: 'Sharing knowledge and inspiring others',
      color: 'text-purple-500',
      bgGradient: 'from-purple-500/10 to-purple-600/10'
    }
  ]

  return (
    <div id='interests' className='text-start w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 m-auto min-h-[90vh]'>
      <Heading title={"Interests"} />
      
      {/* Section Introduction */}
      <div className='my-8 sm:my-12 lg:my-16 text-center lg:text-left'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-emerald-400 leading-tight'>
          <i className='not-italic'>Interests</i> That Define Me:
        </h1>
        <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium mt-2 sm:mt-4'>
          Passions that fuel my creativity
        </p>
      </div>

      {/* Interests Grid */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12'>
        {interests.map((interest, index) => (
          <div 
            key={interest.id}
            className={`group relative w-full aspect-[3/4] bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 flex flex-col items-start justify-between cursor-pointer px-3 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-2xl text-start hover:border-emerald-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 transform hover:scale-105 ${index % 2 === 1 ? 'lg:mt-8' : ''}`}
          >
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${interest.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
            
            {/* Content */}
            <div className='relative z-10 w-full h-full flex flex-col justify-between'>
              {/* Icon Container */}
              <div className='w-full aspect-square rounded-xl flex items-center justify-center bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3 sm:mb-4 overflow-hidden'>
                {interest.iconType === 'font' ? (
                  <i className={`${interest.icon} text-2xl sm:text-3xl lg:text-4xl ${interest.color} group-hover:scale-110 transition-transform duration-300`}></i>
                ) : (
                  <img 
                    className='h-[50%] sm:h-[60%] w-auto object-contain group-hover:scale-110 transition-transform duration-300' 
                    src={interest.icon} 
                    alt={interest.name}
                  />
                )}
              </div>

              {/* Content Section */}
              <div className='space-y-2 sm:space-y-3'>
                {/* Number */}
                <h2 className='text-sm sm:text-base lg:text-lg font-bold text-gray-400 group-hover:text-emerald-400 transition-colors duration-300'>
                  {interest.id}
                </h2>
                
                {/* Title */}
                <h3 className='text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-tight'>
                  {interest.name}
                </h3>

                {/* Description - only visible on larger screens */}
                <p className='hidden lg:block text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2'>
                  {interest.description}
                </p>
                
                {/* Accent Line */}
                <div className='w-full h-px bg-emerald-500 group-hover:bg-emerald-400 transition-colors duration-300 mt-auto'></div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className='absolute top-2 right-2 w-1 h-1 bg-emerald-400/50 rounded-full group-hover:bg-emerald-400 group-hover:scale-150 transition-all duration-300'></div>
          </div>
        ))}
      </div>

      {/* Optional: Interest Stats */}
      <div className='flex flex-wrap justify-center gap-6 sm:gap-12 mt-12 sm:mt-16 lg:mt-20'>
        <div className='text-center'>
          <div className='text-2xl sm:text-3xl font-bold text-emerald-400'>4+</div>
          <div className='text-sm sm:text-base text-gray-300 font-medium'>Core Interests</div>
        </div>
        <div className='w-px h-12 bg-emerald-500/30 hidden sm:block'></div>
        <div className='text-center'>
          <div className='text-2xl sm:text-3xl font-bold text-emerald-400'>∞</div>
          <div className='text-sm sm:text-base text-gray-300 font-medium'>Learning Opportunities</div>
        </div>
        <div className='w-px h-12 bg-emerald-500/30 hidden sm:block'></div>
        <div className='text-center'>
          <div className='text-2xl sm:text-3xl font-bold text-emerald-400'>24/7</div>
          <div className='text-sm sm:text-base text-gray-300 font-medium'>Passion Drive</div>
        </div>
      </div>
    </div>
  )
}
