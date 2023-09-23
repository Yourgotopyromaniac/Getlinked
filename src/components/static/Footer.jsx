import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
import insta from '@/assets/insta.svg'
import facebook from '@/assets/facebook.svg'
import twitter from '@/assets/twitter.svg'
import linkedin from '@/assets/linkedin.svg'
import pin from '@/assets/pin.svg'
import phone from '@/assets/phone.svg'
import starwhite from '@/assets/starwhite.png'
import starpurple from '@/assets/starpurple.png'

const Footer = () => {
    return (
        <div className='w-full flex flex-col gap-0 py-16  items-center bg-[#100B20]'>
            <div className='w-[80%] flex flex-col lg:flex-row gap-16 items-start py-20 pb-16'>
                <div className='relative flex flex-col justify-between w-full lg:w-[45%] gap-10 items-start'>
                    <div className='flex flex-col items-start gap-4'>
                        <Logo/>
                        <p className='text-[12px] w-[80%] font-montserrat leading-5'>Getlinked Tech Hackathon is a technology innovation program
                            established by a group of organizations with the aim of showcasing
                            young and talented individuals in the field of technology</p>
                    </div>

                    <div className='flex items-center gap-4 font-montserrat text-[12px]'>Terms of Use <span className='text-[#D434FE] text-[14px] font-bold'>|</span> Privacy Policy</div>
                    <Image alt="decoration icon" className='absolute z-[3] top-[10%] left-[-10%] w-[10px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
                </div>
                <div className='lg:w-[60%] w-full flex flex-col lg:flex-row gap-8 justify-between items-start font-montserrat relative'>
                    <div className='flex flex-col items-start gap-4 text-[12px]'>
                        <h1 className='text-[#D434FE] text-[14px] font-semibold'>Useful Links</h1>
                        <p>Overview</p>
                        <p>Timeline</p>
                        <p>FAQ</p>
                        <p>Register</p>
                        <div className='flex gap-6 font-normal items-center'>
                            <p className='text-[12px] text-[#D434FE]'>Follow Us</p>
                            <Image alt="decoration icon" src={insta} />
                            <Image alt="decoration icon" src={twitter} />
                            <Image alt="decoration icon" src={facebook} />
                            <Image alt="decoration icon" src={linkedin} />
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-4 text-[12px]'>
                        <h1 className='text-[#D434FE] text-[14px] font-semibold'>Contact Us</h1>
                        <p className='relative flex items-start gap-4'>
                            <Image alt="decoration icon" src={phone} />
                            +234 6707653444</p>
                        <p className='w-[50%] relative flex items-start gap-4 leading-5'>
                            <Image alt="decoration icon" src={pin} />
                            27,Alara Street
                            Yaba 100012
                            Lagos State</p>
                    </div>
                    <Image alt="decoration icon" className='absolute z-[3] top-[5%] left-[35%] w-[10px] lg:w-[15px] animate-pulse duration-500' src={starwhite} />
                    <Image alt="decoration icon" className='absolute z-[3] bottom-0 right-0 w-[10px] lg:w-[15px] animate-pulse duration-500' src={starwhite} />
                </div>
            </div>
            <div className='text-[12px] font-montserrat relative'>
            <Image alt="decoration icon" className='absolute z-[3] top-[-120%] left-[50%] w-[10px] lg:w-[15px] animate-pulse duration-500' src={starpurple} />
                All rights reserved. © getlinked Ltd.
            </div>
        </div>
    )
}

export default Footer