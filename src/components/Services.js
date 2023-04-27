import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from "react-icons/bs";
import services from '../assets/services.png'

const Services = () => {
  const services = [
    {
      name: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint officiis.',
      link: 'Learn more'
    },
    {
      name: 'Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint officiis laudantium.',
      link: 'Learn more'
    },
    {
      name: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint.',
      link: 'Learn more'
    },
    {
      name: 'Product Branding',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint officiis laudantium ad iusto.',
      link: 'Learn more'
    }
  ]
  return <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & img*/}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:bg-services lg:bg-bottom lg:mb-0'  >
          <h2 className='h2 text-accent'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          {/* service list */}
          <div>
            {
              services.map((service, idx) => {
                const { name, description, link } = service;
                return (
                  <div key={idx} className='border-b border-white/20 h-[120px] mb-[36px] flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href="/">
                        <BsArrowUpRight />
                      </a>
                      <a href="/" className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
