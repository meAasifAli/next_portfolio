'use client'
import { Experiences } from '@/static/Experience'
import { skills } from '@/static/skills'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 })
  return (
    <section className="w-full sm:h-auto flex justify-center items-center">
      <div className="flex flex-col justify-center gap-16 sm:gap-0 items-center space-y-8 sm:space-y-16">
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <div className="w-full sm:w-1/2">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti">
              About Me
            </h1>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular">
              In the realm of web development, my expertise with the MERN stack
              allows me to build dynamic, data-driven websites and applications.
              From designing intuitive front-end interfaces with React to
              developing powerful back-end solutions with Node.js and
              Express.js, I ensure every project is optimized for performance
              and scalability.
              <br />
              <br />
              On the mobile front, React Native is my tool of choice for
              developing cross-platform mobile apps that run smoothly on both
              iOS and Android. By utilizing a single codebase, I streamline the
              development process while maintaining a high standard of quality
              and performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row sm:justify-between w-full space-y-16 sm:space-y-0 py-4 sm:py-16">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%]  font-amenti">
              10+
            </h1>
            <p className="text-[#d3e97a] text-[13px] sm:text-[16px] font-amenti font-regular">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%]  font-amenti">
              5+
            </h1>
            <p className="text-[#d3e97a] text-[13px] sm:text-[16px] font-amenti font-regular">
              Satisified Clients
            </p>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%]  font-amenti">
              3+
            </h1>
            <p className="text-[#d3e97a] text-[13px] sm:text-[16px] font-amenti font-regular">
              Months of Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row items-start justify-between">
          <div className="w-full sm:w-1/2">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti">
              My Capabilities
            </h1>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-[#C7C7C7] text-[16px] leading-[150%]  tracking-[8%] text-start mb-4 font-amenti font-regular">
              I am always looking for new challenges and opportunities to expand
              my skills and knowledge. From the past 2 years, I have worked on a
              variety of projects, including web applications, mobile
              applications, and websites.
            </p>
            <div className="flex flex-wrap justify-center items-center w-full gap-6 mt-[32px] ">
              {skills.map((skill) => {
                return (
                  <div
                    key={skill?.name}
                    className="p-[2px] rounded-lg bg-gradient-to-r from-gray-300 via-[#d3e97a] to-yellow-500 hover:scale-105 hover:transition-all duration-300 ease-linear"
                  >
                    <div className="px-3 py-2 rounded-lg cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
                      {/* <Image src={skill.image} height={60} width={60} alt='err' className='object-cover' /> */}
                      <p className="font-amenti text-sm text-[#C7C7C7]">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className="w-full sm:w-1/2">
            <h1 className="text-white text-[43px] sm:text-[76px] text-center sm:text-start font-medium leading-[90%] mb-8 sm:mb-0 font-amenti">
              My Experience
            </h1>
          </div>
          <div className="w-full">
            <div className="timeline-tree my-8">
              {Experiences.map((item, index) => (
                <motion.div
                  ref={ref}
                  className={`timeline-item ${
                    index % 2 === 0 ? 'timeline-left' : 'timeline-right'
                  }`}
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Initial state offscreen
                  animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
                  transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
                >
                  <div className="timeline-content space-y-2">
                    <h2 className="font-amenti font-bold text-2xl ">
                      {item?.title}
                    </h2>
                    <h3 className="text-lg font-amenti font-medium">
                      {item.company}
                    </h3>
                    <p className="text-sm font-amenti font-medium">
                      <strong>Duration:</strong> {item?.duration}
                    </p>
                    <p className="text-sm font-amenti font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="timeline-line"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
