import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../static/Logo'
import CustomButton from './CustomButton'
import { motion } from 'framer-motion'

const NavLayout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleNavMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='text-white relative overflow-x-hidden'>

            <div className='w-full flex items-center justify-center'>

                <div className='w-[85%] pb-6 mt-16 relative z-[10] flex items-center justify-between'>
                    <Logo />
                    <div className='w-[716px] hidden lg:flex justify-between items-center font-montserrat text-[16px] font-normal'>
                        <div className='flex justify-evenly items-center w-[65%]'>
                            <Link className='cursor-pointer text-gradient' href={'/#timeline'}>Timeline</Link>
                            <Link className='cursor-pointer text-gradient' href={'/#overview'}>Overview</Link>
                            <Link className='cursor-pointer text-gradient' href={'/#faq'}>FAQs</Link>
                            <Link className='cursor-pointer text-gradient' href={'/auth/Contact'}>Contact</Link>
                        </div>

                        <Link href={'/auth/Register'}>
                            <CustomButton ButtonText={'Register'} />
                        </Link>

                    </div>


                </div>
            </div>

            <div className={`w-full font-inter text-[18px] font-medium fixed z-[10] rounded-b-[8px] bg-[#150E28] h-[492px] ${isOpen ? 'top-0' : '-top-[492px]'} flex items-center justify-center transition-all duration-500`}>
                <div className='flex flex-col gap-6 items-start w-[65%]'>
                    <Link className='cursor-pointer text-gradient' href={'/#timeline'}>Timeline</Link>
                    <Link className='cursor-pointer text-gradient' href={'/#overview'}>Overview</Link>
                    <Link className='cursor-pointer text-gradient' href={'/#faq'}>FAQs</Link>
                    <Link className='cursor-pointer text-gradient' href={'/auth/Contact'}>Contact</Link>

                    <Link href={'/auth/Register'}>
                        <div className='w-[172px] h-[53px] mt-4 rounded-[4px] font-montserrat text-[16px] button-gradient flex justify-center items-center'>
                            <motion.button whileHover={{ backgroundColor: '#150e28' }} style={{ backgroundColor: 'transparent' }} className='w-[170px] h-[50px] rounded-[4px] transition-all duration-500 delay-100' >Register</motion.button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='lg:hidden fixed right-[5%] top-[7%] z-[1000] flex flex-col gap-1 w-[25px]' onClick={handleNavMenu}>
                <div className={`self-start w-1/2 relative ${isOpen ? 'rotate-45  top-[2.5px] left-[1.5px]' : ''} bg-white transition-all duration-200 h-[3px] rounded-sm`}></div>
                <div className={`w-full self-center ${isOpen ? '-rotate-[45deg]' : ''}  bg-white h-[3px] rounded-sm transition-all duration-200`}></div>
                <div className={`self-end w-1/2 relative ${isOpen ? 'rotate-45  -top-[2.5px] -left-[1.5px]' : ''} bg-white h-[3px] rounded-sm transition-all duration-200`}></div>
                <svg className={`absolute ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" stroke="url(#paint0_linear_181_74)" />
                    <defs>
                        <linearGradient id="paint0_linear_181_74" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#903AFF" />
                            <stop offset="1" stopColor="#FF26B9" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default NavLayout