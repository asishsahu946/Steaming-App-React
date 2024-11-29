import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'

function Home({setProgress}) {
  useEffect(() =>{
    setProgress(50)
  })
  return (
    <div>
        <HeroSection/>
        <Categories/>
    </div>
  )
}

export default Home