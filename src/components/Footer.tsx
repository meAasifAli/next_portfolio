
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full  h-auto shadow-md bg-gradient-to-bl space-y-4 from-[#d3e97a] to-black p-4 rounded-lg">
            <div className="z-0 flex flex-row items-center justify-center  px-4 sm:px-16 gap-4 sm:gap-16 h-full relative">
                <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className='text-[16px] sm:text-[24px] leading-24 tracking-widest  text-[#c7c7c7] font-amenti font-medium'>Aasif Ali</h2>
                    <div className="flex items-center gap-2">
                        <a href='https://www.linkedin.com/in/meaasifali/' target='_blank' className='p-1 sm:p-2 bg-[#222222] rounded-full'>
                            <FaLinkedinIn color='#D3E97A' size={20} />
                        </a>
                        <a href='https://www.github.com/meAasifAli' target='_blank' className='p-1 sm:p-2 bg-[#222222] rounded-full'>
                            <FaGithub color='#D3E97A' size={20} />
                        </a>
                        <a href='https://www.instagram.com/_asif_ali10' target='_blank' className='p-1 sm:p-2 bg-[#222222] rounded-full'>
                            <FaInstagram color='#D3E97A' size={20} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                    <a href="" className='text-[#c7c7c7] underline font-amenti font-medium text-[13px] text-sm'>
                        Resume
                    </a>
                    <a href="mailto:asif15310@gmail.com" className='text-[#c7c7c7] underline font-amenti font-medium text-[13px] text-sm'>
                        asif@gmail.com
                    </a>
                    <p className='text-[#c7c7c7] cursor-pointer font-amenti font-medium text-[13px] text-sm'>
                        +91, 7889423564
                    </p>
                </div>

            </div>
            <hr className="w-full border-[#c7c7c7] " />
            <p className="text-[#c7c7c7] text-[12px] text-center font-amenti font-regular">Aasif Ali &copy;  All rights reserved</p>
        </div>
    )
}
export default Footer