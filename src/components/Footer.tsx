import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" text-[#c7c7c7] pt-16 pb-4 sm:pt-24 relative sm:h-[300px]  h-[500px] flex justify-center items-center">
      <div className=" mx-auto px-4 w-full max-w-full space-y-6 sm:max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold font-playwrite text-[#c7c7c7]">
              Aasif Ali
            </h2>
            <p className="text-[#c7c7c7] font-playwrite font-regular">
              Web & App Developer
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
              <a
                href="#about"
                className="hover:text-gray-300 text-[#c7c7c7] font-medium font-playwrite"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="hover:text-gray-300 text-[#c7c7c7]  font-medium font-playwrite"
              >
                Contact Me
              </a>
              <a
                href="tel:+91788942564"
                className="hover:text-gray-300 text-[#c7c7c7] font-medium font-playwrite"
              >
                +91,7889423564
              </a>
              <a
                href="https://drive.google.com/file/d/10dr-uBLLsG7L8gxcFs_OjsZ18PsQmoY8/view?usp=drive_link"
                className="hover:text-gray-300 text-[#c7c7c7] font-medium font-playwrite"
              >
                Resume
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div>
                <h2 className="text-sm font-playwrite font-regular">
                  Follow me :
                </h2>
              </div>
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a
                  href="https://www.linkedin.com/in/meAasifAli"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://github.com/meAasifAli"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://instagram.com/_asif_ali10"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="mt-4 text-center text-[#c7c7c7] font-medium text-xs font-playwrite">
          <p>
            &copy; {new Date().getFullYear()} Aasif Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
