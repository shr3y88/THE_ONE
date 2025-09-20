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
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      start: "top -5%",
      end: "top -157%",
      scrub: true,
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      pinType: "transform",
      scrub: 1,

      onUpdate: (Elem) => {
        let imageIndex;
        if (Elem.progress < 1) {
          imageIndex = Math.floor(Elem.progress * imageArray.length);
        } else {
          imageIndex = imageArray.length - 1;
        }

        if (imageRef.current.src !== imageArray[imageIndex]) {
          // Fade out, swap image, fade in
          gsap.to(imageRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              imageRef.current.src = imageArray[imageIndex];
              gsap.to(imageRef.current, {
                opacity: 1,
                duration: 0.3,
              });
            },
          });
        }
      },
    },
  });
});

  

  
  return (

    <div>
      <div className='section1 py-1 bg-purple-50 '>
        <div ref={imageDivRef} className='absolute h-[20vw] w-[15vw] rounded-3xl top-10 left-[30vw] overflow-hidden'>
          <img ref={imageRef} className='h-full object-cover w-full' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'></img>
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[25vw]'>
            <h1 className='text-[16vw] text-center uppercase leading-[15vw] '>EVERYTHING <br />
              is design</h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='text-5xl p-0.5 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

     <div className="section2 bg-purple-50 h-screen py-100 flex items-center justify-center gap-15">
  <div className="bg-purple-200 w-[22vw] h-[20vw] hover:scale-120 transition-transform duration-500 ease-in-out rounded-3xl shadow-[0_0_30px_10px_rgba(100,0,100,0.6)] flex items-center justify-center p-6 text-center">
  <h4 className="font-[font1] text-lg md:text-xl font-semibold 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 
                 bg-clip-text text-transparent leading-relaxed tracking-wide ">
   “Creativity is inventing, experimenting, growing, taking risk, breaking rules, making mistakes and having fun.”
    <br />
    <span className="block mt-3 text-sm font-light text-gray-700 italic">
      - Mary Lou Cook
    </span>
  </h4>
</div>
<div className="bg-purple-200 w-[22vw] h-[20vw] hover:scale-120 transition-transform duration-500 ease-in-out rounded-3xl shadow-[0_0_30px_10px_rgba(100,0,100,0.6)] flex items-center justify-center p-6 text-center">
  <h4 className="font-[font1] text-lg md:text-xl font-semibold 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 
                 bg-clip-text text-transparent leading-relaxed tracking-wide ">
    “Design is the intermediary between information and understanding.”
    <br />
    <span className="block mt-3 text-sm font-light text-gray-700 italic">
      - Hans Hofmann
    </span>
  </h4>
</div>
<div className="bg-purple-200 w-[22vw] h-[20vw] hover:scale-120 transition-transform duration-500 ease-in-out rounded-3xl shadow-[0_0_30px_10px_rgba(100,0,100,0.6)] flex items-center justify-center p-6 text-center">
  <h4 className="font-[font1] text-lg md:text-xl font-semibold 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 
                 bg-clip-text text-transparent leading-relaxed tracking-wide ">
    “Design creates culture. Culture shapes values. 
    Values determine the future.”
    <br />
    <span className="block mt-3 text-sm font-light text-gray-700 italic">
      - Robert L. Peters
    </span>
  </h4>
</div>
 

</div>



    </div>
  )
}

export default Agents