import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen overflow-hidden fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative flex flex-col justify justify-center'>
            <HomeHeroText/>
            <HomeBottomText/>

        </div>
    </div>
  )
}

export default Home