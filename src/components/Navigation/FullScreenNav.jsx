import React from 'react'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    return (
        <div className='text-white h-screen w-full overflow-hidden absolute bg-black'>
            <div className='flex w-full p-2 sm:p-4 justify-between items-start'>
                <div className="cursor-pointer">
                    <Link to="/" className="w-16 sm:w-20 md:w-24 lg:w-[15vw] max-w-[120px] block">
                        <img src='/copy.jpg' alt='' className='w-full h-auto' />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 relative cursor-pointer'>
                            <div className='h-20 w-0.5 sm:h-24 sm:w-0.5 md:h-28 md:w-0.5 lg:h-44 lg:w-0.5 rounded-2xl absolute -rotate-45 origin-top bg-purple-800'></div>
                            <div className='h-20 w-0.5 sm:h-24 sm:w-0.5 md:h-28 md:w-0.5 lg:h-44 lg:w-0.5 rounded-2xl absolute right-0 rotate-45 origin-top bg-purple-800'></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='py-4 sm:py-6 md:py-8 lg:py-10'>
                <Link to='/projects'>
                <div className='link relative border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase'>Projects</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] overflow-hidden'>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>SEE EVERYTHING</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>SEE EVERYTHING</h2>
                        </div>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>SEE EVERYTHING</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>SEE EVERYTHING</h2>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to='/agence'>
                <div className='link relative border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase'>COMPANY</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] overflow-hidden'>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>know us</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>know us</h2>
                        </div>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>know us</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>know us</h2>
                        </div>
                    </div>
                </div>
                </Link>
                <Link>
                <div className='link relative border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase'>contact</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] overflow-hidden'>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>send us a message</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>send us a message</h2>
                        </div>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>send us a message</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>send us a message</h2>
                        </div>
                    </div>
                </div>
                </Link>
                <Link>
                <div className='link relative border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase'>blog</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] overflow-hidden'>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>read articles</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>read articles</h2>
                        </div>
                        <div className='moveX flex items-center'>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>read articles</h2>
                            <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-22 lg:w-60 rounded-full shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[8vw] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8] pt-2 sm:pt-2.5 uppercase px-2 sm:px-4'>read articles</h2>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default FullScreenNav