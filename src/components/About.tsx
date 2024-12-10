'use client'

import { CiCalendar } from 'react-icons/ci'
import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RiNextjsFill } from 'react-icons/ri'

const About = () => {
  return (
    <section className="w-full sm:h-auto flex justify-center items-center">
      <div className="flex flex-col justify-center gap-16 sm:gap-0 items-center space-y-8 sm:space-y-16">
        <div className="flex flex-col  justify-center">
          <div className="w-full relative">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center  font-medium leading-[90%] mb-8 sm:mb-0 font-amenti">
              About Me
            </h1>
          </div>
          <div className="w-full mt-8">
            <p className="text-[#C7C7C7] sm:w-2/3 mx-auto text-[16px] leading-6  tracking-widest text-center mb-4 font-amenti ">
              I specialize in building dynamic web and mobile applications using
              the MERN stack and React Native. From intuitive front-end designs
              to robust back-end solutions, I deliver high-quality, user-centric
              experiences.
            </p>
          </div>
        </div>

        {/* skills */}
        <div className="flex flex-col mt-0 sm:mt-8  justify-center">
          <div className="w-full ">
            <div className="flex flex-wrap justify-center items-center  gap-6 mt-[32px] w-[90%] mx-auto">
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaHtml5 size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaCss3 size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaJs size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaGithub size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaReact size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <RiNextjsFill size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <TbBrandReactNative size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaJava size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaPython size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <DiMongodb size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <DiMysql size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaDocker size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <FaNodeJs size={50} color="#fff" />
                </div>
              </div>
              <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
                <div className="p-4 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                  <RiTailwindCssFill size={50} color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* experience */}
      </div>
    </section>
  )
}

export default About
