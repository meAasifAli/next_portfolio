import { projects } from '@/static/projects'
import React from 'react'
import Project from './Project'
import * as motion from 'motion/react-client'

const Projects = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      whileInView={{ x: '0%' }}
      transition={{ duration: 1.3, delay: 0.4, ease: 'easeInOut' }}
      className="flex flex-col justify-end items-center w-full"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-white font-amenti text-[43px]  sm:text-[76px] leading-[100%] font-medium">
          My work
        </h1>
        <span className="text-wrap font-amenti text-center text-[16px] text-[#C7C7C7] leading-[160%] sm:leading-[150%] tracking-wider py-2 font-regular">
          Here are some of my selected projects <br /> that exhibit my passion
          as a Web and App developer
        </span>
      </div>

      <div className="w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-items-center w-full  mt-[50px] gap-[45px]">
          {projects.map((project, id) => {
            return <Project project={project} key={id} />
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
