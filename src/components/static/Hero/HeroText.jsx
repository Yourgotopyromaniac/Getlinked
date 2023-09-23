import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import chain from '@/assets/chain.png'
import spark from '@/assets/spark.svg'
import bulb from '@/assets/bulb.svg'
import Countdown from '../../dynamic/Countdown'
import { motion } from 'framer-motion'


const HeroText = () => {
    return (
        <div className='w-full font-clash lg:w-[60%] pt-10  pb-96 lg:py-20 lg:pt-0 relative z-10'>
            <div className='w-full flex flex-col gap-4 lg:gap-10 lg:items-start items-center leading-snug'>
                <h1 className='font-bold relative text-[32px] lg:text-7xl '>getLinked Tech
                    <span className='block'>
                        <span className='flex items-center gap-2'>
                            Hackathon <span className='text-[#D434FE]'>1.0 </span>
                            <div className='inline-flex items-center'>
                                <Image alt="decoration icon" className='lg:w-14 w-8' src={chain} />
                                <Image alt="decoration icon" className='lg:w-14 w-8' src={spark} />
                            </div>
                        </span>
                    </span>

                    <Image alt="decoration icon" className='lg:w-12 w-8 absolute -top-[40%] right-[14%]' src={bulb} />

                </h1>
                <p className='text-[13px] lg:text-[20px]  leading-8 w-3/4'>Participate in getlinked tech Hackathon 2023 stand
                    a chance to win a Big prize</p>
                <Link href={'/auth/Register'}>
                    <div className='lg:w-44 lg:h-14 w-36 h-10 rounded-[4px] font-montserrat text-[12px] lg:text-[16px] button-gradient flex justify-center items-center'>
                        <motion.button whileHover={{ backgroundColor: '#150e28' }} style={{ backgroundColor: 'transparent' }} className='lg:w-[10.8rem] lg:h-[3.3rem] w-[140px] h-[36px] rounded-[4px] transition-all duration-500 delay-100' >Register</motion.button>
                    </div>
                </Link>
                <Countdown />
            </div>

        </div>
    )
}

export default HeroText