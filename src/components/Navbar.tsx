'use client'

import { navLinks } from '@/static/nav'
import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import * as motion from 'motion/react-client'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <nav className="flex items-center justify-between w-full ">
      <div className="">
        <h2 className="text-[32px] leading-24 tracking-widest  text-white font-amenti font-bold uppercase">
          Aasif
        </h2>
      </div>
      <ul className="hidden sm:hidden  md:flex items-center gap-8 relative">
        {navLinks.map((navItem, id) => {
          return (
            <li
              id="nav"
              key={id}
              className="relative text-white text-[18px] font-medium leading-6 font-playwrite"
            >
              <a href={navItem.link} className="relative">
                {navItem.name}
                <span className="absolute bottom-[-8px] left-0 h-[4px] w-0 bg-[#9b42f5] transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          )
        })}
      </ul>

      <motion.button
        initial={{ translateY: 0 }}
        whileHover={{ translateY: -10 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden sm:flex bg-[#100d25] p-3 rounded-2xl"
      >
        <a
          className="text-white flex items-center gap-4 font-playwrite font-normal"
          href="https://drive.google.com/file/d/10dr-uBLLsG7L8gxcFs_OjsZ18PsQmoY8/view?usp=drive_link"
          target="_blank"
        >
          Resume
          <FaEye />
        </a>
      </motion.button>

      <div className="block sm:block md:hidden">
        <div>
          {openMenu ? (
            <MdOutlineClose
              onClick={() => setOpenMenu((pre) => !pre)}
              size={30}
              color="white"
            />
          ) : (
            <BiMenuAltRight
              onClick={() => setOpenMenu((pre) => !pre)}
              size={30}
              color="white"
            />
          )}
        </div>
        {openMenu && (
          <div className="scale-up-center flex flex-col space-y-6 p-12 bg-gradient-to-bl from-black to-gray-600 absolute right-[5%] z-50 rounded-xl">
            {navLinks.map((navItem, id) => {
              return (
                <li
                  key={id}
                  className="text-white text-[24px] font-amenti leading-6  list-none"
                >
                  <a
                    href={navItem.link}
                    onClick={() => setOpenMenu((pre) => !pre)}
                  >
                    {navItem.name}
                  </a>
                </li>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
