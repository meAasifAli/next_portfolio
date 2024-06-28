import { projects } from '@/static/projects'
import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='flex flex-col justify-start items-start max-w-full'>
            <div className='flex flex-col justify-start items-start w-full'>
                <h1 className='text-white font-amenti text-[43px]  sm:text-[76px] leading-[100%] font-medium'>Featured Projects</h1>
                <span className='text-wrap font-amenti text-[16px] text-[#C7C7C7] leading-[160%] sm:leading-[150%] tracking-wider py-2 font-regular'>Here are some of my selected projects <br /> that exhibit my passion as a Web and App developer</span>
            </div>
            <div className='flex flex-col w-full gap-8 mt-[50px]'>
                {
                    projects.map((project, id) => {
                        return <div key={id} className='flex flex-col sm:flex-row items-center w-full gap-[45px]'>
                            <div className='bg-[#1A1A1A] w-full sm:w-1/2 p-8 flex justify-center items-center rounded-3xl'>
                                <Image src={project!.thumbnail} alt='err' height={200} width={200} className='rounded-3xl' />
                            </div>
                            <div className='w-full sm:w-1/2 flex flex-col justify-start items-start gap-4'>
                                <h1 className='sm:text-[32px] text-[24px] font-amenti text-white font-medium leading-[140%]'>{project!.title}</h1>
                                <p className='sm:text-[18px] text-[16px] font-amenti fon-regular text-[#C7C7C7] font-normal leading-[150%] tracking-wider'>{project!.content}</p>
                                <h2 className='font-amenti text-[16px] uppercase font-bold tracking-widest leading-[150%] text-white'>project info</h2>
                                <hr className='w-full border border-[#484848]' />
                                <div className='w-full flex justify-between items-center'>
                                    <p className='sm:text-[18px] text-[16px] font-amenti text-[#C7C7C7] font-normal leading-[150%] '>Year</p>
                                    <p className='sm:text-[18px] text-[16px] font-amenti text-[#C7C7C7] font-normal leading-[150%] '>{project!.year}</p>
                                </div>
                                <hr className='w-full border border-[#484848]' />
                                <div className='w-full flex justify-between items-center'>
                                    <p className='sm:text-[18px] text-[16px] font-amenti text-[#C7C7C7] font-normal leading-[150%] '>Category</p>
                                    <p className='sm:text-[18px] text-[16px] font-amenti text-[#C7C7C7] font-normal leading-[150%] '>{project!.category}</p>
                                </div>
                                <hr className='w-full border border-[#484848]' />
                                <div className='flex flex-row w-full items-center justify-center gap-4 py-3'>
                                    <a href={project.DeployURL} className='animated-button w-full flex items-center justify-center'>
                                        <p className='text-[#D3E97A] sm:text-[18px] text-[16px] font-amenti  font-bold leading-[150%] '>Preview</p>
                                    </a>
                                    <a href={project.GitURl} target='_blank' className='animated-button w-full flex items-center justify-center'>
                                        <p className='text-[#D3E97A] sm:text-[18px] text-[16px] font-amenti font-bold leading-[150%] '>Github</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Projects
