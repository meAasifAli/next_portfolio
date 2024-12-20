'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as motion from 'motion/react-client'

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

            <h1 className="text-[57px] text-center tracking-wide my-4 font-bold leading-[100%] text-white uppercase font-amenti">
              Hi, I am Aasif <span className="text-[#9b42f5]">Ali.</span>
            </h1>
            <p className="text-[18px] text-center  sm:w-1/2 mx-auto font-regular text-[#C7C7C7] leading-[150%] mt-[16px] font-amenti">
              Web and App Developer crafting seamless digital experiences.
              Specializing in modern web and mobile technologies to bring
              innovative ideas to life.
            </p>
            <div className="flex justify-center items-center w-full gap-8 mt-[32px]">
              <Link
                href={'#contact'}
                className="bg-[#9b42f5] flex items-center gap-2 p-4 rounded-full hover:scale-105 hover:transition-all delay-75 duration-300 ease-in-out"
              >
                <p className="uppercase text-white  text-[16px] font-regular font-amenti">
                  Contact Me
                </p>
              </Link>

              <button className="bg-transparent border-2 border-[#9b42f5] flex items-center gap-2 p-4 rounded-full hover:scale-105 hover:transition-all delay-75 duration-300 ease-in-out hover:bg-[#9b42f5] ">
                <p className="uppercase text-white text-[16px] font-regular font-amenti">
                  <a
                    className="text-white"
                    href="https://drive.google.com/file/d/10dr-uBLLsG7L8gxcFs_OjsZ18PsQmoY8/view?usp=drive_link"
                    target="_blank"
                  >
                    View Resume
                  </a>
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Hero
