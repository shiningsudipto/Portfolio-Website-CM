import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section id='work' className='mt-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-12'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
            <p className='max-w-sm mb-16 lg:mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum dicta eum corrupti? Soluta itaque dolor, totam harum necessitatibus tempora!</p>
            <div><button className='btn btn-sm'>View all projects</button></div>
          </div>
          {/* image */}
          <div className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>

          {/* image */}

          <div className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
          {/* image */}
          <div className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >);
};

export default Work;
