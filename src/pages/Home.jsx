import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import Devices from '../components/Devices'

function Home({setProgress}) {
  useEffect(() =>{
    setProgress(50)
  })
  return (
    <div>
        <HeroSection/>
        <Categories/>
        <Devices/>
    </div>
  )
}

export default Home