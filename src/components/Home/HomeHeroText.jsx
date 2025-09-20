import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font=[font1] pt-5 text-center'>
      <div className='text-[7.5vw] text-white justify-center flex items-center uppercase leading-[7vw]'>
        hey fellas
      </div>
      <div className='font=[font1] text-[7.5vw] text-white justify-center flex items-start uppercase leading-[7vw]'>
        welcome
        <div className='h-[7.5vw] w-[15vw] mt-1 rounded-full overflow-hidden'>
          <Video />
        </div>
        to
      </div>
      <div className='font-[font3] text-[7.5vw] text-purple-900 justify-center flex items-center uppercase leading-[7vw]'>
        The one
      </div>
    </div>
  )
}

export default HomeHeroText