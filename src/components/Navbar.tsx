"use client"

import { navLinks } from '@/static/nav';
import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    return (
        <nav className='flex items-center justify-between w-full'>
            <div>
                <h2 className='text-[32px] leading-24 tracking-tighter font-bold text-white font-playwrite uppercase'>Aasif Ali</h2>
            </div>
            <ul className='hidden sm:hidden  md:flex items-center gap-8 relative'>
                {
                    navLinks.map((navItem, id) => {
                        return <li key={id} className='text-white text-[16px] font-medium leading-6 font-playwrite hover:text-gray-400'>
                            <a href={navItem.link}>{navItem.name}</a>
                        </li>
                    })
                }

            </ul>
            <div className='block sm:block md:hidden'>
                <div>
                    {
                        openMenu ? <MdOutlineClose onClick={() => setOpenMenu(pre => !pre)} size={30} color='white' /> :
                            <BiMenuAltRight onClick={() => setOpenMenu(pre => !pre)} size={30} color='white' />
                    }
                </div>
                {
                    openMenu && <div className='scale-up-center flex flex-col space-y-6 p-12 bg-gradient-to-bl from-black  to-white absolute right-[5%] z-50 rounded-xl'>
                        {
                            navLinks.map((navItem, id) => {
                                return <li key={id} className='text-black  text-[24px] font-medium leading-6 font-playwrite list-none'>
                                    <a href={navItem.link}>{navItem.name}</a>
                                </li>
                            })
                        }
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar
