import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    // Check if device is mobile for different animation settings
    const isMobile = window.innerWidth <= 768;
    
    gsap.from('.hero', {
      height: isMobile ? '50px' : '100px',
      stagger: {
        amount: isMobile ? 0.2 : 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: isMobile ? 'top 80%' : 'top 100%',
        end: isMobile ? 'top -100%' : 'top -150%',
        scrub: isMobile ? 0.5 : true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 bg-purple-50 overflow-hidden'>
      <div className='pt-16 sm:pt-20 md:pt-24 lg:pt-[25vh] px-4'>
        <h2 className='font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9.5vw] uppercase text-center'>Projets</h2>
      </div>
   <div className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-8'>
  {projects.map((elem, idx) => (
    <div 
      key={idx} 
      className='hero w-full max-w-[1400px] h-auto lg:h-[500px] flex lg:flex-row flex-col lg:gap-13 gap-6 items-center justify-center py-8 lg:py-0'>
      <ProjectCard image1={elem.image1} image2={elem.image2} />
    </div>
  ))}
</div>

    </div>
  )
}

export default Projects