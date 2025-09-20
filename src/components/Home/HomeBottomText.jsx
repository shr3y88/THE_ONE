import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5 m-6'>
      <div className='text-[2.2vw] text-white hover:border-none hover:bg-[rgba(3,0,4,0.6)]  transition-transform duration-500 ease-in-out hover:scale-115   leading-[3vw] border-3 border-gray-600 rounded-full px-4  uppercase '>
        <Link to='/projects'>Projects</Link>

      </div>
      <div className='text-[2.2vw] text-white hover:border-none  hover:bg-[rgba(3,0,4,0.6)]  transition-transform duration-500 ease-in-out   hover:scale-115  leading-[3vw] border-3 border-gray-600 rounded-full px-4 uppercase '>
        <Link to='/agence'>COMPANY</Link>
      </div>
      
      
    </div>
  )
}

export default HomeBottomText