import { Experiences } from '@/static/Experience'
import React from 'react'
import * as motion from 'motion/react-client'

const Experience = () => {
  return (
    <section className="w-full sm:h-auto flex justify-center items-center">
      <div className="flex flex-col justify-center gap-16 sm:gap-0 items-center space-y-8 sm:space-y-16">
        <motion.div
          initial={{ x: '-100%' }} // Start from off-screen to the left
          whileInView={{ x: '0%' }} // Move to the original position
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
          className="flex flex-col  justify-center"
        >
          <div className="w-full relative">
            <h1 className="text-white text-[43px] sm:text-[57px] text-center  font-medium leading-[90%] mb-8 sm:mb-0 font-amenti">
              My Experience
            </h1>
          </div>
          <div className="w-full sm:mt-8">
            <p className="text-[#C7C7C7] sm:w-2/3 mx-auto text-xs leading-2  tracking-wider text-center font-amenti ">
              I have experience working with a variety of technologies and
              frameworks, including React, React Native, Next.js, Tailwind CSS,
              and Node.js etc.
            </p>
          </div>
        </motion.div>

        {/* Experiences*/}
        <div className="flex flex-col mt-0 sm:mt-8  justify-center">
          <div className="w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {Experiences.map((item, id) => (
                <motion.div
                  initial={{ x: id % 2 === 0 ? '100%' : '-100%' }}
                  whileInView={{ x: '0%' }}
                  whileHover={{
                    translateY: -10,
                    scale: 1.02,
                    transition: { duration: 0.4, ease: 'easeInOut' },
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
                  key={id}
                  className="flex flex-col items-center  bg-[#100d25]  rounded-2xl"
                >
                  <h3 className="text-white font-amenti font-bold text-center w-full sm:text-sm text-xl p-2 sm:p-4">
                    {item?.title}- <span>{` (${item?.duration})`}</span>
                  </h3>
                  {/* <div className="h-[0.5px] w-full bg-[#9b42f5] my-2 sm:my-4" /> */}
                  <p className="text-[#ccc] font-playwrite font-regular text-center w-full  text-xs p-2 sm:p-4  leading-6 tracking-wider">
                    {item?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
