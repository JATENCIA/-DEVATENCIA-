import React from 'react'
import aboutImg from '../assets/images/naruto1.png'
const About = () => {
  const info = [
    { text: 'Years experience', count: '01' },
    { text: 'Completed Projects', count: '04' },
    { text: 'Companies Work', count: '01' }
  ]
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
                I am a Full Stack developer with experience in JavaScript and
                solid knowledge of technologies such as React, Node, Express,
                Redux, MongoDB, Mongoose, PostgreSQL, Sequelize, Git, and
                GitHub, as well as HTML and CSS. Additionally, I possess
                leadership skills and the ability to learn quickly, allowing me
                to bring value. I am always seeking new challenges and
                professional growth opportunities.
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                      {content.count}
                      <span className='text-cyan-600'>+</span>{' '}
                    </h3>
                    <span className='md:text-base text-xs'>{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href='./src/assets/CV_ José Atencia Jaramillo.pdf' download>
                <button className='btn-primary hover:bg-cyan-700 transition'>
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg '>
              <img
                src={aboutImg}
                alt=''
                className='w-full object-cover bg-cyan-600 rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
