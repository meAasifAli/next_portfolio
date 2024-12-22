'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as motion from 'motion/react-client'
import { CiMail } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    >
      <section
        id="hero"
        className="w-full sm:h-screen flex justify-center items-center"
      >
        <div className="flex flex-col  gap-8 sm:gap-0 justify-center items-center max-h-auto max-w-full w-full">
          <div className="flex flex-col gap-2 justify-center items-center max-w-full  mt-8 sm:mt-0">
            <motion.div
              initial={{ translateY: 0 }}
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.5 }}
              className="p-4 shadow-lg rounded-full bg-black border-[10px] border-[#9b42f5]"
            >
              <Image
                height={1000}
                width={1000}
                src={'/assets/profile.png'}
                alt="err"
                className="h-[200px] w-[200px] object-contain "
              />
            </motion.div>

            <h1 className="sm:text-[57px] text-[43px]  tracking-wide text-center my-4 font-bold leading-10 text-white uppercase font-amenti">
              Hi, I am Aasif <span className="text-[#9b42f5]">Ali.</span>
            </h1>
            <p className="text-[16px] text-center  sm:w-1/2 mx-auto font-regular text-[#C7C7C7] leading-[150%] mt-[16px] font-playwrite">
              Web and App Developer creating seamless digital solutions. With
              expertise in modern web and mobile technologies, I transform
              innovative concepts into reality, delivering user-friendly and
              impactful experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-8 mt-[32px]">
              <motion.p
                initial={{ translateY: 0 }}
                whileHover={{ translateY: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-[#100d25] flex items-center gap-2 p-4 rounded-full "
              >
                <a
                  href="#contact"
                  className="uppercase text-white  text-[16px] font-regular font-playwrite flex items-center gap-4"
                >
                  Contact Me
                  <CiMail />
                </a>
              </motion.p>

              <motion.button
                initial={{ translateY: 0 }}
                whileHover={{ translateY: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-transparent border-2 border-[#100d25] flex items-center gap-2 p-4 rounded-full "
              >
                <p className="uppercase text-white text-[16px] font-regular font-playwrite">
                  <a
                    className="text-white flex items-center gap-4"
                    href="https://drive.google.com/file/d/10dr-uBLLsG7L8gxcFs_OjsZ18PsQmoY8/view?usp=drive_link"
                    target="_blank"
                  >
                    View Resume
                    <FaEye />
                  </a>
                </p>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Hero
