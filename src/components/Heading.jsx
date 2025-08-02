import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='w-full flex gap-4 sm:gap-6 items-center justify-center mb-6 sm:mb-8 lg:mb-10'>
            {/* Left line with gradient */}
            <div className='flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-emerald-500/60'></div>
            
            {/* Heading */}
            <div className='bg-emerald-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-emerald-500/40 shadow-md hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300'>
                <h1 className='text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-nowrap'>
                    {title}
                </h1>
            </div>
            
            {/* Right line with gradient */}
            <div className='flex-1 h-px bg-gradient-to-l from-transparent via-emerald-500/30 to-emerald-500/60'></div>
        </div>
    )
}

export default Heading
