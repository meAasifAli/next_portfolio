import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import * as motion from 'motion/react-client'

const Contact = () => {
  return (
    <div className="relative flex flex-col bg-gradient-to-bl from-[#9b42f5] to-[#7734eb] sm:flex-row items-stretch justify-between mb-8 rounded-xl">
      <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none z-50"></div>
      {/* White background for content */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="relative flex flex-col w-full lg:w-1/2 bg-white p-8 rounded-t-xl sm:rounded-l-xl z-10 flex-1"
      >
        <h1 className="text-[#7734eb] text-[43px] sm:text-[76px] font-medium leading-[90%] font-amenti sm:mb-8">
          let&apos;s connect
        </h1>
        <p className="text-[#555555] text-[16px] sm:text-[18px] text-start font-regular leading-[160%] sm:mb-0 font-amenti">
          Say Hello at{' '}
          <a
            className="underline text-[#7734eb]"
            href="mailto:asif15310@gmail.com"
          >
            asif@gmail.com
          </a>
        </p>
        <p className="text-[#555555] text-[16px] sm:text-[18px] text-start font-regular leading-[160%]  font-amenti">
          For more info check{' '}
          <a
            className="underline text-[#7734eb]"
            href="https://drive.google.com/file/d/10dr-uBLLsG7L8gxcFs_OjsZ18PsQmoY8/view?usp=drive_link"
            target={'_blank'}
          >
            {' '}
            my resume
          </a>
        </p>
        <div className="flex items-center gap-4 my-2 sm:my-4">
          <a
            href="https://www.linkedin.com/in/meAasifAli/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="#7734eb" size={25} />
          </a>
          <a
            href="https://www.instagram.com/_asif_ali10"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram color="#7734eb" size={25} />
          </a>
          <a
            href="https://www.github.com/meAasifAli"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#7734eb" size={25} />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={'/assets/contact.webp'}
            height={1000}
            width={1000}
            alt="err"
            className="h-[200px] w-[400px] object-contain"
          />
        </div>
      </motion.div>
      {/* Form */}
      <motion.div
        className="relative w-full sm:w-1/2 p-8 space-y-4 sm:space-y-6 z-10 flex-1"
        initial={{ x: '100%' }}
        whileInView={{ x: '0' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <form
          method="POST"
          action={'https://formspree.io/f/mvgojory'}
          className="relative w-full p-8 space-y-4 sm:space-y-6 z-10 flex-1"
        >
          <div>
            <label
              className="text-[16px] font-amenti font-medium text-[#c7c7c7]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 font-medium font-amenti text-[#555555] bg-[#f5f5f5] rounded-md focus:outline-none focus:border-[#7734eb]"
            />
          </div>
          <div>
            <label
              className="text-[16px] font-amenti font-medium text-[#c7c7c7]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 font-medium font-amenti text-[#555555] bg-[#f5f5f5] rounded-md focus:outline-none focus:border-[#7734eb]"
            />
          </div>
          <div>
            <label
              className="text-[16px] font-amenti font-medium text-[#c7c7c7]"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 font-medium font-amenti text-[#555555] bg-[#f5f5f5] rounded-md focus:outline-none focus:border-[#7734eb]"
            />
          </div>
          <div>
            <label
              className="text-[16px] font-amenti font-medium text-[#c7c7c7]"
              htmlFor="msg"
            >
              Message
            </label>
            <textarea
              id="msg"
              name="msg"
              placeholder="Your Message"
              className="w-full px-4 py-3 font-medium font-amenti text-[#555555] bg-[#f5f5f5] rounded-md focus:outline-none focus:border-[#7734eb]"
            ></textarea>
          </div>

          <button className="font-amenti font-medium bg-white text-black px-6 py-3 rounded-full">
            submit
          </button>
        </form>
      </motion.div>
    </div>
  )
}
export default Contact
