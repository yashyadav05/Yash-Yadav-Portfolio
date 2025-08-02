import React from 'react'

export const VideoPlayer = ({link}) => {
   
  return (
    <iframe  width="100%" height="100%"src={link} title="YouTube video player" 
    rel='0'
    modestbranding="1"
    aria-controls='0'
aria-details='0'
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  )
}


