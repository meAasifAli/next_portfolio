import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col sm:flex-row items-start justify-between h-auto sm:h-[60vh]'>
            <div className='w-full sm:w-1/2'>
                <h1 className='text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti'>About Me</h1>
            </div>
            <div className='w-full sm:w-1/2'>
                <p className='text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular'>In the realm of web development, my expertise with the MERN stack allows me to build dynamic, data-driven websites and applications. From designing intuitive front-end interfaces with React to developing powerful back-end solutions with Node.js and Express.js, I ensure every project is optimized for performance and scalability.
                    <br /><br />
                    On the mobile front, React Native is my tool of choice for developing cross-platform mobile apps that run smoothly on both iOS and Android. By utilizing a single codebase, I streamline the development process while maintaining a high standard of quality and performance.
                </p>
                <Link href={'/about'} className='text-[#D3E97A] underline font-amenti font-medium'>
                    More about me
                </Link>
            </div>
        </div>
    )
}

export default About
