import { useState } from 'react'

import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import GetInTouch from './components/GetInTouch'
import { Interests } from './components/Interests'
import { Footer } from './components/Footer'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <div className='w-full flex flex-col gap-20'>
   <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <Events/> */}
    <Interests/>
    <GetInTouch/>

   </div>

    </>
  )
}

export default App
