import React from 'react'
import Heading from './Heading'
import image from '../assets/images/quicklinkPreview.png'

const Events = () => {
    const events=[
        {
            name:'HackerEarth',
            link:image
        },
        {
            name:'HackerEarth',
            link:image
        },
        {
            name:'HackerEarth',
            link:image
        },
        {
            name:'HackerEarth',
            link:image
        }

    ]
  return (
    <div id='projects' className='text-start w-full max-w-[1180px] px-4 py-5 m-auto '>
            <Heading title={'Events & Hackathons'} />
            <div className='w-full my-8 grid grid-cols-2 gap-4  w-full'>
{
    events.map((event,index)=>{

        return (<div key={index} className='rounded-md shadow-md'>
                <h1 className='text-3xl font-bold text-[var(--primary-color)]'>{event.name}</h1>
                <img src={event.link} alt="" />
            </div>)
    })
}
                




            </div>

        </div>
  )
}

export default Events