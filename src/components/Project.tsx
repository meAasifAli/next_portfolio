'use client'
import { ProjectProps } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaGithub } from 'react-icons/fa'
import { MdOutlinePreview } from 'react-icons/md'
import * as motion from 'motion/react-client'

type project = {
  project: ProjectProps
}

const Project = ({ project }: project) => {
  return (
    <motion.div
      initial={{ rotateX: '0deg', rotateY: '0deg', rotateZ: '0deg' }}
      whileHover={{ rotateX: '5deg', rotateY: '0deg', rotateZ: '5deg' }}
      className="flex flex-col lg:flex-row gap-4  items-center justify-between w-full  bg-[#100d25] p-4 rounded-2xl "
    >
      <motion.div initial={{ translateY: 0 }} whileHover={{ translateY: -40 }}>
        <Image
          src={project.thumbnail}
          alt="err"
          height={1000}
          width={1000}
          className="w-full h-[200px] object-cover rounded-2xl"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="ml-4"
      >
        <h3 className="text-white text-[24px] font-medium font-amenti line-clamp-1">
          {project.title}
        </h3>
        <p className="font-playwrite font-regular text-sm text-[#c7c7c7] text-wrap">
          {project.content.slice(0, 100)}..
        </p>
        <div className="flex items-center w-full justify-between gap-4 mt-4">
          <button className=" w-full p-3 bg-transparent border border-[#9b42f5] rounded-full hover:scale-105 hover:transition-all ease-in-out duration-300 delay-75">
            <Link
              href={project.DeployURL}
              className="text-white font-playwrite text-center flex justify-center items-center gap-2 "
            >
              <p>Preview</p>
              <FaEye size={20} color="#fff" />
            </Link>
          </button>
          <button className=" w-full p-3  bg-[#9b42f5] rounded-full hover:scale-105 hover:transition-all ease-in-out duration-300 delay-75">
            <Link
              href={project.GitURl}
              className="text-white font-playwrite text-center flex justify-center items-center gap-2 "
            >
              <p>Github</p>
              <FaGithub size={20} color="#fff" />
            </Link>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
export default Project
