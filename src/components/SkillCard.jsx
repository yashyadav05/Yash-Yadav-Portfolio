import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <span key={skill?.skill} onClick={() => window.open(`${skill?.link}`, '_blank')} className=' text-[var(--secondary-color)]   border-[2px] shadow-[#408e0015] border-[#408e0015] gap-2 flex items-center justify-center hover:scale-105  transition duration-300 ease-in-out cursor-pointer hover:border-2 hover:border-[var(--primary-color)]  px-4 py-1 rounded-full shadow-sm'>
                                            <img className='h-10' src={skill?.icon} />
                                            <h1 className=' transition-colors'>{skill?.skill}</h1>
                                        </span>
  )
}

export default SkillCard