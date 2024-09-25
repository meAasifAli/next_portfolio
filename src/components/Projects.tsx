import { projects } from '@/static/projects'
import React from 'react'
import Project from './Project'


const Projects = () => {
    return (
        <div className='flex flex-col justify-end items-end w-full'>
            <div className='flex flex-col justify-start items-start w-full'>
                <h1 className='text-white font-amenti text-[43px]  sm:text-[76px] leading-[100%] font-medium'>Featured Projects</h1>
                <span className='text-wrap font-amenti text-[16px] text-[#C7C7C7] leading-[160%] sm:leading-[150%] tracking-wider py-2 font-regular'>Here are some of my selected projects <br /> that exhibit my passion as a Web and App developer</span>
            </div>

            <div className='w-full '>
                <div className='flex flex-col sm:flex-row flex-wrap justify-end items-start w-full  mt-[50px] gap-[45px]'>
                    {
                        projects.map((project, id) => {
                            return <Project project={project} key={id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
