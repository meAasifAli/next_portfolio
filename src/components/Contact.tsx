import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between mb-8">
      <div className="w-full sm:w-1/2 space-y-0">
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="text-white text-[43px] sm:text-[76px]  font-medium leading-[90%]  font-amenti mb-4 sm:mb-8"
        >
          let&apos;s connect
        </h1>
        <p
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="text-[#c7c7c7] text-[16px] sm:text-[18px] text-start font-regular leading-[160%] mb-8 sm:mb-0 font-amenti"
        >
          Say Hello at{' '}
          <a className="underline text-white" href="mailto:asif15310@gmail.com">
            asif@gmail.com
          </a>{' '}
        </p>
        <p
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="text-[#c7c7c7] text-[16px] sm:text-[18px] text-start font-regular leading-[160%] mb-8 sm:mb-0 font-amenti"
        >
          For more info check{' '}
          <a className="underline text-white" href="">
            {' '}
            my resume
          </a>{' '}
        </p>
        <div
          data-aos="fade-top"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="flex items-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/meAasifAli/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="#d3e97a" size={25} />
          </a>
          <a
            href="https://www.instagram.com/_asif_ali10"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram color="#d3e97a" size={25} />
          </a>
          <a
            href="https://www.github.com/meAasifAli"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#d3e97a" size={25} />
          </a>
        </div>
      </div>
      <form
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="w-full sm:w-1/2 mt-6 sm:mt-0 space-y-4 sm:space-y-6"
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
            placeholder="Your Name"
            className="w-full px-4 py-3 font-medium font-amenti text-[#c7c7c7]  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]"
          />
        </div>
        <div>
          <label
            className="text-[16px] font-amenti font-medium text-[#c7c7c7]"
            htmlFor="name"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 font-medium font-amenti text-[#c7c7c7]  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]"
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
            placeholder="Your Email"
            className="w-full px-4 py-3 font-medium font-amenti text-[#c7c7c7]  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]"
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
            placeholder="Your Message"
            className="w-full px-4 py-3 font-medium font-amenti text-[#c7c7c7]  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]"
          ></textarea>
        </div>

        <button className="font-amenti font-medium reverse-animated-button text-end">
          submit
        </button>
      </form>
    </div>
  )
}
export default Contact
