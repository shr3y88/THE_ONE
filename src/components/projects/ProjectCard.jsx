import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-full sm:w-80 md:w-96 lg:w-400 group transition-all relative rounded-2xl hover:rounded-[70px] hover:scale-105 sm:hover:scale-110 overflow-hidden h-64 sm:h-80 md:h-96 lg:h-110'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-[font1] border-2 sm:border-3 lg:border-4 pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 text-white border-white rounded-full text-center'>know more</h2>
                </div>
            </div>
            <div className='w-full sm:w-80 md:w-96 lg:w-400 group transition-all relative rounded-2xl hover:rounded-[70px] hover:scale-105 sm:hover:scale-110 overflow-hidden h-64 sm:h-80 md:h-96 lg:h-110'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-[font1] border-2 sm:border-3 lg:border-4 pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 text-white border-white rounded-full text-center'>know more</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard