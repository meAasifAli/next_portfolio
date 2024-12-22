'use client'

import { CiCalendar } from 'react-icons/ci'
import {
  FaCss3,
  FaDocker,
  FaFigma,
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
import Skill from './Skill'
import * as motion from 'motion/react-client'

const About = () => {
  return (
    <section className="w-full sm:h-auto flex justify-center items-center">
      <div className="flex flex-col justify-center gap-16 sm:gap-0 items-center space-y-8 sm:space-y-16">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '0%' }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col  justify-center"
        >
          <div className="w-full relative">
            <h1 className="text-white text-[43px] sm:text-[57px] text-center  font-medium leading-[90%] mb-8 sm:mb-0 font-amenti">
              About Me
            </h1>
          </div>
          <div className="w-full sm:mt-8">
            <p className="text-[#C7C7C7] sm:w-2/3 mx-auto text-xs  leading-4 tracking-wider text-center font-playwrite">
              I specialize in building dynamic web and mobile applications using
              the MERN stack and React Native.
            </p>
          </div>
        </motion.div>

        {/* skills */}
        <div className="flex flex-col mt-0 sm:mt-8  justify-center">
          <div className="w-full ">
            <div className="flex flex-wrap justify-center items-center  gap-6 w-full sm:w-[90%] mx-auto">
              <Skill icon={<FaHtml5 size={50} color="#fff" />} />
              <Skill icon={<FaCss3 size={50} color="#fff" />} />
              <Skill icon={<FaJs size={50} color="#fff" />} />
              <Skill icon={<FaGithub size={50} color="#fff" />} />
              <Skill icon={<FaReact size={50} color="#fff" />} />
              <Skill icon={<RiNextjsFill size={50} color="#fff" />} />
              <Skill icon={<RiTailwindCssFill size={50} color="#fff" />} />
              <Skill icon={<FaNodeJs size={50} color="#fff" />} />
              <Skill icon={<DiMysql size={50} color="#fff" />} />
              <Skill icon={<FaDocker size={50} color="#fff" />} />
              <Skill icon={<TbBrandReactNative size={50} color="#fff" />} />
              <Skill icon={<DiMongodb size={50} color="#fff" />} />
              <Skill icon={<FaJava size={50} color="#fff" />} />
              <Skill icon={<FaPython size={50} color="#fff" />} />
              <Skill icon={<FaDocker size={50} color="#fff" />} />
              <Skill icon={<FaFigma size={50} color="#fff" />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
