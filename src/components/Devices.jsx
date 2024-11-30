import React from 'react'
import {devicesDetails} from '../assets/devicesDetails'

function Devices() {
  return (
    <div className=' bg-black2 text-white px-20 xl-max:px-10 sm-max:px-3 pb-10'>

     <div className='pt-24'>
      <h1 className='font-semibold text-4xl xl-max:text-3xl sm-max:text-xl'>We Provide you streaming experience across various devices.</h1>
      <p className='mt-5 text-lg xl-max:text-base sm-max:text-xs text-gray1'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
     </div>

    <div className='grid grid-cols-3 md-max:grid-cols-1 gap-14 xl-max:gap-5 mt-14 '>
      {
        devicesDetails.map((item,index) =>{
          return (
            <div key={index} className='border border-black5 px-14 xl-max:px-6 py-9 rounded-xl device-gradiant' >
              <div className='flex items-center'>
              <img className='xl-max:w-14 sm-max:w-10' src={item.logo} alt="" />
              <h1 className='pl-6 xl-max:pl-1 sm-max:pl-3 text-lg xl-max:text-base sm-max:text-sm font-semibold'>{item.device}</h1>
              </div>
              <p className='text-gray1 lg-max:text-sm sm-max:text-xs mt-3'>{item.details}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Devices