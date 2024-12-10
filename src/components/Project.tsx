'use client'
import { ProjectProps } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { MdOutlinePreview } from 'react-icons/md'

type project = {
  project: ProjectProps
}

const Project = ({ project }: project) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4  items-center justify-between w-full  bg-[#1A1A1A] p-4 rounded-2xl ">
      <div>
        <Image
          src={project.thumbnail}
          alt="err"
          height={1000}
          width={1000}
          className="w-full h-[200px] object-cover rounded-2xl"
        />
      </div>
      <div className="ml-4">
        <h3 className="text-white text-[24px] font-medium font-amenti">
          {project.title}
        </h3>
        <p className="font-amenti font-regular text-sm text-[#c7c7c7] text-wrap">
          {project.content.slice(0, 60)}..
        </p>
        <div className="flex items-center w-full justify-between gap-4 mt-4">
          <button className=" w-full p-3 bg-transparent border border-[#9b42f5] rounded-full hover:scale-105 hover:transition-all ease-in-out duration-300 delay-75">
            <Link
              href={project.DeployURL}
              className="text-white font-amenti text-center flex items-center gap-2 "
            >
              <MdOutlinePreview size={20} color="#fff" />
              <p>Preview</p>
            </Link>
          </button>
          <button className=" w-full p-3  bg-[#9b42f5] rounded-full hover:scale-105 hover:transition-all ease-in-out duration-300 delay-75">
            <Link
              href={project.GitURl}
              className="text-white font-amenti text-center flex items-center gap-2 "
            >
              <FaGithub size={20} color="#fff" />
              <p>Github</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Project
