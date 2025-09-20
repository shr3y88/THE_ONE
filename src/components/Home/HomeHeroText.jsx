import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5vw] text-white justify-center flex items-center uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[7vw]'>
        hey fellas
      </div>
      <div className='font-[font1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5vw] text-white justify-center flex items-start uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[7vw] flex-wrap gap-2'>
        <span>welcome</span>
        <div className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-[7.5vw] xl:w-[15vw] mt-1 rounded-full overflow-hidden flex-shrink-0'>
          <Video />
        </div>
        <span>to</span>
      </div>
      <div className='font-[font3] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5vw] text-purple-900 justify-center flex items-center uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[7vw]'>
        The one
      </div>
    </div>
  )
}

export default HomeHeroText