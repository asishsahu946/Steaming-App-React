import React from 'react'
import Categories from '../components/Categories'
import Upcoming from '../components/Upcoming'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'

function Movies() {
 
  return (
    <div className='text-white'>
      <Categories/>
      <Upcoming/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Movies