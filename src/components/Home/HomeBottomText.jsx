import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 m-4 sm:m-6'>
      <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[2.2vw] text-white hover:border-none hover:bg-[rgba(3,0,4,0.6)] transition-transform duration-500 ease-in-out hover:scale-105 sm:hover:scale-110 lg:hover:scale-115 leading-tight sm:leading-tight md:leading-tight lg:leading-[3vw] border-2 sm:border-3 border-gray-600 rounded-full px-3 sm:px-4 py-2 sm:py-3 uppercase text-center min-w-[120px]'>
        <Link to='/projects'>Projects</Link>
      </div>
      <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[2.2vw] text-white hover:border-none hover:bg-[rgba(3,0,4,0.6)] transition-transform duration-500 ease-in-out hover:scale-105 sm:hover:scale-110 lg:hover:scale-115 leading-tight sm:leading-tight md:leading-tight lg:leading-[3vw] border-2 sm:border-3 border-gray-600 rounded-full px-3 sm:px-4 py-2 sm:py-3 uppercase text-center min-w-[120px]'>
        <Link to='/agence'>COMPANY</Link>
      </div>
    </div>
  )
}

export default HomeBottomText