import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project_person from '../assets/images/naruto5.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'SportPlanet',
      github_link: 'https://github.com/JATENCIA/SportPlanetStaff',
      live_link: 'https://sport-planet-staff-nbkv.vercel.app/'
    },
    {
      img: project2,
      name: 'My favorite videos',
      github_link: 'https://github.com/JATENCIA/myFavoriteVideos',
      live_link: 'https://my-favorite-videos-h6jj.vercel.app/'
    },
    {
      img: project3,
      name: 'News Home Page',
      github_link: 'https://github.com/JATENCIA/NewsHomePage',
      live_link: 'https://glowing-selkie-9938fc.netlify.app/'
    },
    {
      img: project4,
      name: 'Sunnyside Agency',
      github_link: 'https://github.com/JATENCIA/sunnysideAgency',
      live_link: 'https://taupe-druid-93b500.netlify.app/'
    },
    {
      img: project5,
      name: 'Home Land',
      github_link: 'https://github.com/JATENCIA/HomeLand',
      live_link: 'https://leafy-yeot-78aab0.netlify.app/'
    }
  ]
  return (
    <section id='projects' className='py-10 text-white'>
      <div className='text-center'>
        <br />
        <br />
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <br />
      <div className='flex max-w-6xl gap-6 px-5 mx-auto items-center relative'>
        <div className='lg:w-2/3 w-full'>
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            loop={true}
            autoplay={{
              delay: 3000
            }}
            pagination={{
              clickable: true
            }}
            modules={[Pagination, Autoplay]}>
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                  <img
                    src={project_info.img}
                    alt=''
                    className='rounded-lg w-[350px] h-[180px]'
                  />
                  <h3 className='text-xl my-4 text-center'>
                    {project_info.name}
                  </h3>
                  <div className='flex gap-3 place-content-center'>
                    <a
                      href={project_info.github_link}
                      target='_blank'
                      className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block hover:bg-gray-900 rounded-lg transition'>
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target='_blank'
                      className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block hover:bg-gray-900 rounded-lg transition'>
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src={project_person} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Project
