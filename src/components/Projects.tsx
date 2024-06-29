import { projects } from '@/static/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='flex flex-col justify-start items-start max-w-full'>
            <div className='flex flex-col justify-start items-start w-full'>
                <h1 className='text-white font-amenti text-[43px]  sm:text-[76px] leading-[100%] font-medium'>Featured Projects</h1>
                <span className='text-wrap font-amenti text-[16px] text-[#C7C7C7] leading-[160%] sm:leading-[150%] tracking-wider py-2 font-regular'>Here are some of my selected projects <br /> that exhibit my passion as a Web and App developer</span>
            </div>
            <div className=''>
                <div className='flex flex-col sm:flex-row flex-wrap justify-end items-start w-full  mt-[50px] gap-[45px]'>
                    {
                        projects.map((project, id) => {
                            return <div key={id} className='flex flex-col items-center  w-full sm:w-[30%]  bg-[#1A1A1A] p-4 rounded-2xl max-h-[500px] space-y-4 overflow-hidden'>
                                <Image src={project.thumbnail} alt='err' height={200} width={400} />
                                <h3 className='text-white text-[24px] font-medium font-amenti'>{project.title}</h3>
                                <p className='font-amenti font-regular text-sm text-[#c7c7c7] text-wrap'>{project.content.slice(0, 80)}..</p>
                                <div className='flex items-center w-full justify-between gap-4'>
                                    <button className='animated-button w-full p-2'>
                                        <Link href={project.DeployURL}>Live</Link>
                                    </button>
                                    <button className='animated-button w-full p-2'>
                                        <Link href={project.GitURl}>Github</Link>
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
