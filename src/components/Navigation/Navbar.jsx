import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  const navGreenRef = useRef(null)



  return (
    <div className='z-4 flex fixed top-0 w-full items-start justify-between px-2 sm:px-4'>
      <div className="cursor-pointer p-1.5">
        <Link to="/" className="w-16 sm:w-20 md:w-24 lg:w-[15vw] max-w-[120px] block">
          <img  src='/fileok.png' alt='' className='w-full h-auto'/>
        </Link>
      </div>

      <div onMouseEnter={() => {
        navGreenRef.current.style.height = '100%'
        navGreenRef.current.style.color='black'
      }}
        onMouseLeave={() => {

          navGreenRef.current.style.height = '0%'
          navGreenRef.current.style.color='white'
        }}
        className='bg-black relative h-8 sm:h-10 md:h-12 lg:h-[3vw] w-32 sm:w-36 md:w-40 lg:w-45 left-5'>
          <Link to='/navbar'>
        <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full l text-right text-white text-xs sm:text-sm md:text-base lg:text-[1vw] leading-4'><span>_________</span><h6>_____</h6></div>
        <div className=' relative'></div>
        
        
          </Link>
      </div>
    </div>
  )
}

export default Navbar


