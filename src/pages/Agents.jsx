import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agents = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef=useRef(null)
  const imageArray=[
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
  
  useGSAP(() => {
  // Check if device is mobile for different animation settings
  const isMobile = window.innerWidth <= 768;
  
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      start: isMobile ? "top 10%" : "top -5%",
      end: isMobile ? "top -100%" : "top -157%",

      pin: !isMobile, // Disable pinning on mobile for better performance
      pinSpacing: !isMobile,
      pinReparent: !isMobile,
      pinType: "transform",
      scrub: isMobile ? 0.5 : 1, // Faster scrub on mobile

      onUpdate: (Elem) => {
        let imageIndex;
        if (Elem.progress < 1) {
          imageIndex = Math.floor(Elem.progress * imageArray.length);
        } else {
          imageIndex = imageArray.length - 1;
        }

        if (imageRef.current && imageRef.current.src !== imageArray[imageIndex]) {
          // Fade out, swap image, fade in
          gsap.to(imageRef.current, {
            opacity: 0,
            duration: isMobile ? 0.2 : 0.3, // Faster transitions on mobile
            onComplete: () => {
              if (imageRef.current) {
                imageRef.current.src = imageArray[imageIndex];
                gsap.to(imageRef.current, {
                  opacity: 1,
                  duration: isMobile ? 0.2 : 0.3,
                });
              }
            },
          });
        }
      },
    },
  });
});

  

  
  return (

    <div>
      <div className='section1 py-1 bg-purple-50 relative'>
        <div ref={imageDivRef} className='absolute h-32 w-24 sm:h-40 sm:w-32 md:h-48 md:w-40 lg:h-[20vw] lg:w-[15vw] rounded-3xl top-4 sm:top-6 md:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 lg:left-[30vw] lg:transform-none overflow-hidden z-10'>
          <img ref={imageRef} className='h-full object-cover w-full' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'></img>
        </div>
        <div className='relative font-[font2] right-2.5'>
          <div className='mt-32 sm:mt-40 md:mt-48 lg:mt-[25vw] '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[16vw] text-center uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[15vw] px-4'>EVERYTHING <br />
              is design</h1>
          </div>
          <div className='px-4 sm:px-6 md:px-8 lg:pl-[40%] lg:pr-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
            <p className='font-[font2] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl p-0.5 leading-13'>We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

     <div className="section2 bg-purple-50 min-h-screen py-16 sm:py-20 md:py-24 lg:py-100 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-15 px-4 sm:px-6 md:px-8">
  <div className="bg-purple-200 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[22vw] lg:max-w-none h-64 sm:h-80 md:h-96 lg:h-[20vw] hover:scale-105 sm:hover:scale-110 lg:hover:scale-120 transition-transform duration-500 ease-in-out rounded-3xl shadow-[0_0_30px_10px_rgba(100,0,100,0.6)] flex items-center justify-center p-4 sm:p-6 text-center">
  <h4 className="font-[font1] text-sm sm:text-base md:text-lg lg:text-xl font-semibold 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 
                 bg-clip-text text-transparent leading-relaxed tracking-wide ">
   "Creativity is inventing, experimenting, growing, taking risk, breaking rules, making mistakes and having fun."
    <br />
    <span className="block mt-2 sm:mt-3 text-xs sm:text-sm font-light text-gray-700 italic">
      - Mary Lou Cook
    </span>
  </h4>
</div>
<div className="bg-purple-200 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[22vw] lg:max-w-none h-64 sm:h-80 md:h-96 lg:h-[20vw] hover:scale-105 sm:hover:scale-110 lg:hover:scale-120 transition-transform duration-500 ease-in-out rounded-3xl shadow-[0_0_30px_10px_rgba(100,0,100,0.6)] flex items-center justify-center p-4 sm:p-6 text-center">
  <h4 className="font-[font1] text-sm sm:text-base md:text-lg lg:text-xl font-semibold 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 
                 bg-clip-text text-transparent leading-relaxed tracking-wide ">
    "Design is the intermediary between information and understanding."
    <br />
    <span className="block mt-2 sm:mt-3 text-xs sm:text-sm font-light text-gray-700 italic">
      - Hans Hofmann
    </span>
  </h4>
</div>
<div className="bg-purple-200 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[22vw] lg:max-w-none h-64 sm:h-80 md:h-96 lg:h-[20vw] hover:scale-105 sm:hover:scale-110 lg:hover:scale-120 transition-transform duration-500 ease-in-out rounded-3xl shadow-[0_0_30px_10px_rgba(100,0,100,0.6)] flex items-center justify-center p-4 sm:p-6 text-center">
  <h4 className="font-[font1] text-sm sm:text-base md:text-lg lg:text-xl font-semibold 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 
                 bg-clip-text text-transparent leading-relaxed tracking-wide ">
    "Design creates culture. Culture shapes values. 
    Values determine the future."
    <br />
    <span className="block mt-2 sm:mt-3 text-xs sm:text-sm font-light text-gray-700 italic">
      - Robert L. Peters
    </span>
  </h4>
</div>
 

</div>



    </div>
  )
}


export default Agents
