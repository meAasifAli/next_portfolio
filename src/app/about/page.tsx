import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsDownload } from "react-icons/bs";
import '../../app/globals.css'
import Image from 'next/image';
import { skills } from '@/static/skills';

const About = () => {
    return (
        <div className='relative'>
            <div className="animated-gradient1"></div>
            <div className='w-full max-w-full space-y-6 sm:max-w-screen-xl mx-auto p-4 sm:p-8 z-10 flex justify-center items-center flex-col'>
                <div className='flex flex-col sm:flex-row items-start justify-between'>
                    <div className='w-full sm:w-1/2'>
                        <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti'>About Me</h1>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <p className='text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular'>
                            I am a self-taught full-stack web developer with a passion for creating innovative and user-friendly web applications.
                            With a strong foundation in HTML, CSS, and JavaScript, I am able to bring ideas to life using a variety of web development frameworks and libraries.
                        </p>
                        <div className='flex items-center w-full gap-6 mt-[32px]'>
                            <Link href={''} className='reverse-animated-button flex items-center gap-2'>
                                <p className='uppercase text-[16px] font-regular font-amenti'> Resume</p>
                                <BsDownload size={20} />
                            </Link>
                            <a href='https://www.linkedin.com/in/meaasifali/' target='_blank' className='p-3 bg-[#222222] rounded-full'>
                                <FaLinkedinIn color='#D3E97A' size={30} />
                            </a>
                            <a href='https://www.github.com/meAasifAli' target='_blank' className='p-3 bg-[#222222] rounded-full'>
                                <FaGithub color='#D3E97A' size={30} />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="w-full py-4 sm:py-8">
                    <hr className="w-full border border-[#484848]" />
                </div>
                <div className='flex flex-col sm:flex-row items-start justify-between'>
                    <div className='w-full sm:w-1/2'>
                        <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti'>My Capabilities</h1>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <p className='text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular'>
                            I am always looking for new challenges and opportunities to expand my skills and knowledge. From the past 2 years, I have worked on a variety of projects, including web applications, mobile applications, and websites.
                        </p>
                        <div className='flex flex-wrap items-center w-full gap-6 mt-[32px] '>
                            {
                                skills.map((skill) => {
                                    return <div key={skill.name} className='p-4 rounded-full bg-gradient-to-l cursor-pointer from-[#d3e97a] to-[#222222] h-[100px] w-[100px] overflow-hidden flex justify-center items-center relative'>
                                        <Image src={skill.image} height={60} width={60} alt='err' className='object-cover' />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-100  flex items-center justify-center rounded-lg transition duration-300 ease-in-out">
                                            <span className="text-[#c7c7c7] opacity-0 hover:opacity-100 transition duration-300 ease-in-out font-amenti text-sm">{skill.name}</span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="animated-gradient2"></div>
        </div>
    )
}

export default About
