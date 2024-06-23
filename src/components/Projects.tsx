import { projects } from '@/static/projects'
import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='flex flex-col justify-start items-start max-w-full'>
            <div className='flex flex-col justify-start items-start w-full'>
                <h1 className='text-white font-bebasNue text-[43px] sm:text-[76px] leading-[100%]'>Featured Projects</h1>
                <span className='text-wrap font-manRope text-[16px] text-[#C7C7C7] leading-[160%] sm:leading-[150%] tracking-wider py-2'>Here are some of my selected projects done <br /> that exhibit my passion as a Web and App developer</span>
            </div>
            <div className='flex flex-col w-full gap-8 mt-[50px]'>
                {
                    projects.map((project, id) => {
                        return <div key={id} className='flex flex-col sm:flex-row items-center w-full gap-[45px]'>
                            <div className='bg-[#1A1A1A] w-full sm:w-1/2 p-8 flex justify-center items-center rounded-3xl'>
                                <Image src={'/assets/avatar.jpeg'} alt='err' height={300} width={400} className='rounded-3xl' />
                            </div>
                            <div className='w-full sm:w-1/2 flex flex-col justify-start items-start gap-4'>
                                <h1 className='sm:text-[32px] text-[24px] font-manRope text-white font-medium leading-[140%]'>{project.title}</h1>
                                <p className='sm:text-[18px] text-[16px] font-manRope text-[#C7C7C7] font-normal leading-[150%] tracking-wider'>{project.content}</p>
                                <h2 className='font-manRope text-[16px] uppercase font-semibold leading-[150%] text-white'>project info</h2>
                                <hr className='w-full border border-[#484848]' />
                                <div className='w-full flex justify-between items-center'>
                                    <p className='sm:text-[18px] text-[16px] font-manRope text-[#C7C7C7] font-normal leading-[150%] '>Year</p>
                                    <p className='sm:text-[18px] text-[16px] font-manRope text-[#C7C7C7] font-normal leading-[150%] '>{project.year}</p>
                                </div>
                                <hr className='w-full border border-[#484848]' />
                                <div className='w-full flex justify-between items-center'>
                                    <p className='sm:text-[18px] text-[16px] font-manRope text-[#C7C7C7] font-normal leading-[150%] '>Category</p>
                                    <p className='sm:text-[18px] text-[16px] font-manRope text-[#C7C7C7] font-normal leading-[150%] '>{project.category}</p>
                                </div>
                                <hr className='w-full border border-[#484848]' />
                                <div className='flex flex-row w-full items-center justify-center gap-4 py-4'>
                                    <a href="" className='flex items-center justify-center gap-2 p-4 rounded-full w-full border border-[#D3E97A]'>
                                        <p className='text-[#D3E97A] sm:text-[18px] text-[16px] font-manRope  font-bold leading-[150%] '>See Live</p>
                                        <Image src={'/assets/vector2.png'} height={16} width={16} alt='err' />
                                    </a>
                                    <a href="" className='flex items-center justify-center gap-2 p-4 rounded-full w-full border border-[#D3E97A]'>
                                        <p className='text-[#D3E97A] sm:text-[18px] text-[16px] font-manRope  font-bold leading-[150%] '>Check  Github</p>
                                        <FaGithub color='#D3E97A' size={24} />
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
