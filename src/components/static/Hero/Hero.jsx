import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import Typed from 'typed.js'
import stroke from '@/assets/stroke.svg'
import HeroText from './HeroText'
import HeroImages from './HeroImages'
import lensflare from '@/assets/lensflarefull.webp'
import starwhite from '@/assets/starwhite.png'
import { motion } from 'framer-motion'



const Hero = () => {
    useEffect(() => {
        const options = {
            strings: ['Igniting a Revolution in'],
            typeSpeed: 50,
            backSpeed: 25,
            showCursor: true,
            cursorChar: '',
        };

        const typed = new Typed('.typed-text', options);
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className='w-full relative py-10 pb-0 flex items-center justify-center border-y border-[#ffffff29]'>

            <div className='w-full flex flex-col gap-10 lg:gap-28 items-center relative z-[1]'>
                <h1 className='font-montserrat text-[16px] lg:text-[32px] relative lg:-right-60 italic font-bold'><span className='typed-text'></span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'keyframes',  delay: 2, duration: 1 }} className='relative'> HR Innovation
                        <Image alt="decoration icon" className='absolute -bottom-4 -right-4' src={stroke} />
                    </motion.span>
                </h1>

                <div className='lg:w-[85%] w-full flex flex-col lg:flex-row text-center lg:text-start justify-between items-center'>
                    <HeroText />
                    <HeroImages />
                </div>
            </div>

            <div className='absolute rotate-180 z-[0] mix-blend-soft-light top-12 left-10 lg:top-[-40%] lg:left-[-10%] '>
                <Image alt="decoration icon" src={lensflare} priority width={1200} />
            </div>

            <Image alt="decoration icon" className='absolute top-24 left-36 w-[20px] lg:w-[30px] animate-pulse duration-500' src={starwhite} />
            <Image alt="decoration icon" className='absolute top-40 left-[48rem] w-[20px] lg:[30px] animate-pulse duration-700' src={starwhite} />
            <Image alt="decoration icon" className='absolute top-[35rem] left-[30rem] w-[20px] lg:[30px] animate-pulse duration-300' src={starwhite} />
        </div>
    )
}

export default Hero