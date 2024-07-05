import { Experiences } from '@/static/Experience'
import { skills } from '@/static/skills'
import Image from 'next/image'
import React from 'react'


const About = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-16'>
            <div className='flex flex-col sm:flex-row items-start justify-between'>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti'>About Me</h1>
                </div>
                <div className='w-full sm:w-1/2'>
                    <p className='text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular'>In the realm of web development, my expertise with the MERN stack allows me to build dynamic, data-driven websites and applications. From designing intuitive front-end interfaces with React to developing powerful back-end solutions with Node.js and Express.js, I ensure every project is optimized for performance and scalability.
                        <br /><br />
                        On the mobile front, React Native is my tool of choice for developing cross-platform mobile apps that run smoothly on both iOS and Android. By utilizing a single codebase, I streamline the development process while maintaining a high standard of quality and performance.
                    </p>

                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between w-full space-y-2 sm:space-y-0 py-4 sm:py-16'>
                <div className='flex flex-col gap-1 text-center'>
                    <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%]  font-amenti'>10+</h1>
                    <p className='text-[#d3e97a] text-[13px] sm:text-[16px] font-amenti font-regular'>Projects Done</p>
                </div>
                <div className='flex flex-col gap-1 text-center'>
                    <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%]  font-amenti'>5+</h1>
                    <p className='text-[#d3e97a] text-[13px] sm:text-[16px] font-amenti font-regular'>Satisified Clients</p>
                </div>
                <div className='flex flex-col gap-1 text-center'>
                    <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%]  font-amenti'>3+</h1>
                    <p className='text-[#d3e97a] text-[13px] sm:text-[16px] font-amenti font-regular'>Months of Experience</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-start justify-between'>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti'>My Capabilities</h1>
                </div>
                <div className='w-full sm:w-1/2'>
                    <p className='text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular'>
                        I am always looking for new challenges and opportunities to expand my skills and knowledge. From the past 2 years, I have worked on a variety of projects, including web applications, mobile applications, and websites.
                    </p>
                    <div className='flex flex-wrap justify-center items-center w-full gap-6 mt-[32px] '>
                        {
                            skills.map((skill) => {
                                return <div key={skill.name} className='p-4 rounded-full bg-gradient-to-l cursor-pointer from-[#d3e97a] to-[#222222] sm:h-[100px] h-[90px] w-[90px] sm:w-[100px] overflow-hidden flex justify-center items-center relative'>
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
            <div className='flex flex-col sm:flex-row items-start justify-between'>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti'>My Experience</h1>
                </div>
                <div className='w-full sm:w-1/2'>

                    <div className='flex flex-col justify-center items-center w-full gap-6'>
                        {
                            Experiences.map((exp, id) => {
                                return <div key={id} className='flex flex-col  w-full space-y-2'>
                                    <div className='flex flex-col sm:flex-row items-center sm:justify-between'>
                                        <h2 className='text-[24px] font-medium font-amenti text-[#c7c7c7]'>{exp.title}</h2>
                                        <p className='text-[16px] font-regular font-amenti text-[#c7c7c7]'>{exp.duration}</p>
                                    </div>
                                    <div>
                                        <hr className="w-full border border-[#484848]" />
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-regular font-amenti text-[#c7c7c7]'>{exp.description}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
