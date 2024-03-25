import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import ChooseUs from './Components//ChooseUs/ChooseUs'
import Plans from './Components/Plans/Plans'
import Testimonials from './Components/Testimonials/Testimonials'
import Join from './Components/Join/Join'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
       <Hero/>
       <Programs/>
       <ChooseUs/>
       <Plans/>
       <Testimonials/>
       <Join/>
       <Footer/>
    </>
  )
}

export default App
