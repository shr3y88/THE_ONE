import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = ({ children }) => {
  const stairParentRef = useRef(null)
  const pageRef = useRef(null)
  const currentPath = useLocation().pathname

  useGSAP(() => {
    const tl = gsap.timeline()

    
    gsap.set(stairParentRef.current, { display: 'block' })

   
    tl.from('.stair', {
      height: 0,
      stagger: { amount: -0.25 },
      ease: 'power2.inOut'
    })
      .to('.stair', {
        y: '100%',
        stagger: { amount: -0.25 },
        ease: 'power2.inOut'
      })
      .set(stairParentRef.current, { display: 'none' }) // hide overlay
      .set('.stair', { y: '0%', height: '100%' }) // reset
      
        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })


   
  }, [currentPath])

  return (
    <div>
      
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0 hidden pointer-events-none">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

    
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  )
}

export default Stairs
