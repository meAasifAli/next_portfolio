
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#d3e97a] via-[#222222] to-[#d3e97a] text-black pt-8 pb-4 sm:pt-16 relative">
            <div className="container mx-auto px-4 w-full max-w-full space-y-6 sm:max-w-screen-xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold font-amenti text-black">Aasif Ali</h2>
                        <p className="text-black font-amenti font-regular">Web & App Developer</p>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
                            <a href="#about" className="hover:text-gray-300 text-black font-medium font-amenti">About Me</a>
                            <a href="#contact" className="hover:text-gray-300 text-black font-medium font-amenti">Contact Me</a>
                            <a href="tel:+91788942564" className="hover:text-gray-300 text-black font-medium font-amenti">+91,7889423564</a>
                            <a href="resume.pdf" className="hover:text-gray-300 text-black font-medium font-amenti">Resume</a>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <div>
                                <h2 className="text-sm font-amenti font-regular">Follow me :</h2>
                            </div>
                            <div className="flex space-x-4 mb-4 md:mb-0">
                                <a href="https://www.linkedin.com/in/meAasifAli" target="_blank" className="hover:text-gray-300">
                                    <FaLinkedinIn size={24} />
                                </a>
                                <a href="https://github.com/meAasifAli" target="_blank" className="hover:text-gray-300">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://instagram.com/_asif_ali10" target="_blank" className="hover:text-gray-300">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-4 text-center text-black font-medium text-xs font-amenti">
                    <p>&copy; {new Date().getFullYear()} Aasif Ali. All rights reserved.</p>
                </div>
            </div>
            <a
                href="#top"
                className="absolute right-4 bottom-4 bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
                <FaArrowUp />
            </a>
        </footer>
    )
}
export default Footer