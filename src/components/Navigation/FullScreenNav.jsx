import React from 'react'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    return (
        <div className='text-white h-screen   w-full overflow-hidden absolute bg-black'>
            <div className='flex w-full p-2 justify-between items-start'>
                <div className="cursor-pointer ">
                    <Link to="/" className="w-[15vw]  block">
                        <img src='/copy.jpg' alt='' className='' />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className='h-32 w-32  relative cursor-pointer '>
                            <div className='h-44 w-0.5  rounded-2xl absolute -rotate-45 origin-top bg-purple-800'></div>
                            <div className='h-44 w-0.5  rounded-2xl absolute right-0  rotate-45 origin-top bg-purple-800'></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='py-10'>
                <Link to='/projects'>
                <div className='link relative  border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>Projects</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>SEE EVERYTHING</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>SEE EVERYTHING</h2>
                        </div>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>SEE EVERYTHING</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>SEE EVERYTHING</h2>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to='/agence'>
                <div className='link relative  border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>COMPANY</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>know us</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>know us</h2>
                        </div>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>know us</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>know us</h2>
                        </div>
                    </div>
                </div>
                </Link>
                <Link>
                <div className='link relative  border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>contact</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>send us a message</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>send us a message</h2>
                        </div>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>send us a message</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>send us a message</h2>
                        </div>
                    </div>
                </div>
                </Link>
                <Link>
                <div className='link relative  border-y-1 border-gray-500'>
                    <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>blog</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>read articles</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>read articles</h2>
                        </div>
                        <div className='moveX flex  items-center'>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>read articles</h2>
                            <img className='h-22 rounded-full shrink-0 w-60 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-2.5 uppercase'>read articles</h2>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}


export default FullScreenNav

