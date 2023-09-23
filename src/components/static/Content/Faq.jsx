import React from 'react'
import Image from 'next/image'
import manthonk from '@/assets/manthink.webp'
import starpurple from '@/assets/starpurple.png'
import starwhite from '@/assets/starwhite.png'
import Accordion from '../../dynamic/FAQ/Accordion'
import qm1 from '@/assets/qm1.png'
import qm2 from '@/assets/qm2.png'
import { motion } from 'framer-motion'

const Faq = () => {
    return (
        <section id='faq' className='w-full py-32 border-b border-[#ffffff29] flex items-center justify-center'>
            <div className='w-[85%] gap-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-between'>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes',  duration: 0.5 }} viewport={{ once: true }} className='relative'>
                    <Image alt="decoration icon" src={manthonk} className='relative z-[1]' width={600} />
                    <Image alt="decoration icon" className='absolute w-[25px] lg:w-[40px] left-[10%] -top-[6%] z-[2]' src={qm1} />
                    <Image alt="decoration icon" className='absolute w-[30px] lg:w-[50px] left-[30%] -top-[16%] z-[2]' src={qm2} />
                    <Image alt="decoration icon" className='absolute w-[25px] lg:w-[40px] left-[60%] -top-[6%] z-[2]' src={qm1} />


                    <Image alt="decoration icon" className='absolute z-[3] top-[10%] left-[20%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[-10%] left-[50%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[45%] left-[8%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
                    <Image alt="decoration icon" className='absolute z-[3] bottom-[-5%%] right-[15%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5, delay: 0.4}} viewport={{ once: true }} className='flex flex-col gap-8 w-full text-center relative lg:text-start lg:items-start items-center lg:w-1/2'>
                    <Image alt="decoration icon" className='absolute z-[3] top-[-10%] left-[-3%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starpurple} />
                    <h1 className='lg:text-[32px] text-[20px] w-[80%] font-clash font-bold'>Frequently Asked<span className='text-[#D434FE] block'>Questions</span></h1>
                    <p className='text-[12px] lg:text-[14px] w-[80%] font-montserrat font-bold'>We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0
                    </p>
                    <Accordion />
                </motion.div>
            </div>
        </section>
    )
}

export default Faq