import React from 'react';
import { FaHome, FaRegUser as FaUser, FaClipboardList, FaBriefcase } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from 'react-scroll';

const Nav = () => {
  return <div>
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/80 items-center'>
          <Link to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <FaHome />
          </Link>
          <Link to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <FaUser />
          </Link>
          <Link to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <FaClipboardList />
          </Link>
          <Link to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <FaBriefcase />
          </Link>
          <Link to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <HiMail />
          </Link>
        </div>
      </div>
    </nav>
  </div>;
};

export default Nav;
