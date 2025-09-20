import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  const navGreenRef = useRef(null)



  return (
    <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
      <div className="cursor-pointer p-1.5">
        <Link to="/" className="w-[15vw]  block">
          <img  src='public/fileok.png' alt='' className=''/>
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
        className='bg-black relative h-[3vw] w-45'>
          <Link to='/navbar'>
        <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full text-right text-white text-[1vw] leading-4'><span>_________</span><h6>_____</h6></div>
        <div className=' relative'></div>
        
        
          </Link>
      </div>
    </div>
  )
}

export default Navbar



