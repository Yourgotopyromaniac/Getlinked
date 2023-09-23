import React from 'react'
import Image from 'next/image'
import bigbulb from '@/assets/bigbulb.webp'
import arrow from '@/assets/arrow.png'
import starpurple from '@/assets/starpurple.png'
import { motion } from 'framer-motion'

const Intro = () => {
    return (
        <section id='overview' className='w-full relative py-20 bg-[#140D27] border-b border-[#ffffff29] flex items-center justify-center'>

            <div className='w-[75%] flex flex-col lg:flex-row items-center gap-20 justify-between'>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5}} viewport={{ once: true }} className='relative'>
                    <Image alt="decoration icon" className='z-[1] relative' src={bigbulb} width={400} />
                    <Image alt="decoration icon" className='absolute w-[30px] lg:w-[50px] -rotate-[60deg] lg:right-0 right-[45%] -bottom-10 z-0' src={arrow} />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5, delay: 0.4}} viewport={{ once: true }} className='flex flex-col gap-6 w-full text-center lg:text-start lg:items-start items-center lg:w-1/2'>
                    <h1 className='lg:text-[32px] text-[20px] font-clash font-bold'>Introduction to getlinked <span className='text-[#D434FE] block'>tech Hackathon 1.0</span></h1>
                    <p className='lg:text-[14px] text-[13px] font-montserrat'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you&apos;re a coding genius, a
                        design maverick, or a concept wizard, you&apos;ll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that&apos;s what we&apos;re all about!</p>
                </motion.div>
            </div>

            <Image alt="decoration icon" className='absolute top-60 left-20 w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
            <Image alt="decoration icon" className='absolute top-60 right-32 w-[20px] lg:w-[30px] animate-pulse duration-500' src={starpurple} />

        </section>
    )
}

export default Intro