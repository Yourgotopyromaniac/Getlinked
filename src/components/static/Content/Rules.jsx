import React from 'react'
import Image from 'next/image'
import lensflare from '@/assets/lensflarefull.webp'
import lensflareright from '@/assets/lensflareright.png'
import sittinglady from '@/assets/sittinglady.webp'
import ellipse from '@/assets/ellipse.svg'
import starwhite from '@/assets/starwhite.png'
import { motion } from 'framer-motion'

const Rules = () => {
    return (
        <section className='w-full py-10 border-b border-[#ffffff29] flex items-center justify-center relative'>
            <div className='w-[85%] relative z-[1] flex flex-col lg:flex-row-reverse items-center justify-between'>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5}} viewport={{ once: true }} className='relative'>
                    <Image alt="decoration icon" className='relative z-[1]' src={sittinglady} width={600} />
                    <Image alt="decoration icon" className='absolute lg:opacity-100 opacity-0 right-24 top-20 z-0' src={ellipse} />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5, delay : 0.4}} viewport={{ once: true }} className='flex flex-col items-center lg:items-start lg:text-start text-center gap-6 w-full lg:w-1/2'>
                    <h1 className='lg:text-[32px] text-[20px] w-[80%] font-clash font-bold'>Rules and <span className='text-[#D434FE] block'>Guidelines</span></h1>
                    <p className='lg:text-[14px] text-[13px] font-montserrat'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you&apos;re a coding genius, a
                        design maverick, or a concept wizard, you&apos;ll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that&apos;s what we&apos;re all about!</p>
                </motion.div>
            </div>
            <div className='absolute rotate-180 z-[0] mix-blend-soft-light -top-48 -left-52 lensflare'>
                <Image alt="decoration icon" src={lensflare} priority />
            </div>
            <div className='absolute z-[0] mix-blend-soft-light top-0 right-0 lensflare'>
                <Image alt="decoration icon" src={lensflareright} />
            </div>

            <Image alt="decoration icon" className='absolute top-40 left-80 w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
            <Image alt="decoration icon" className='absolute top-[70%] left-[50%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
        </section>
    )
}

export default Rules