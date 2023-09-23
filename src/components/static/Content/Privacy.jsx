import React from 'react'
import Image from 'next/image'
import privacy from '@/assets/lock.webp'
import lock from '@/assets/lock.svg'
import listicon from '@/assets/listicon.svg'
import lensflare from '@/assets/lensflarefull.webp'
import CustomButton from '@/components/dynamic/CustomButton'
import starwhite from '@/assets/starwhite.png'
import starpurple from '@/assets/starpurple.png'
import { motion } from 'framer-motion'

const Privacy = () => {
    return (
        <section className='w-full py-40 relative flex items-center justify-center'>
            <div className='w-[80%] relative z-[1] flex flex-col-reverse lg:flex-row-reverse gap-48 items-center justify-between'>

            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5}} viewport={{ once: true }} className='relative w-full lg:w-[50%]'>
                    <Image alt="lock icon" className='absolute -top-28 lg:-top-48 z-0 right-0 lg:right-0' src={lock} width={400} />
                    <Image alt="illustration - man on padlock" className='z-5 transform lg:scale-150 scale-100 relative' src={privacy} />
                    <Image alt="decoration icon" className='absolute z-[3] bottom-[20%] right-[-8%] w-[15px] lg:w-[15px] animate-pulse duration-200' src={starwhite} />
                    <Image alt="decoration icon" className='absolute z-[3] bottom-[20%] left-[-8%] w-[15px] lg:w-[15px] animate-pulse duration-200' src={starwhite} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[8%] left-[-40%] w-[10px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[10%] right-[25%] w-[15px] lg:w-[15px] animate-pulse duration-500' src={starwhite} />
            </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes', duration: 0.5, delay: 0.4}} viewport={{ once: true }} className='flex flex-col lg:items-start text-center lg:text-start items-center gap-12 w-full lg:w-[80%] relative'>

                    <h1 className='lg:text-[32px] text-[20px] w-full lg:w-[80%] font-clash font-bold'>Privacy Policy and<span className='text-[#D434FE] block'>Terms</span>
                        <p className='text-[13px] lg:text-[14px] w-full lg:w-[80%] text-[#FFFFFFBF] mt-2 font-normal font-montserrat block'>Last updated on September 12, 2023</p>
                    </h1>
                    <p className='text-[13px] lg:text-[14px] w-full lg:w-[80%] font-montserrat leading-6'>Below are our privacy & policy, which outline a lot of goodies.
                        it&apos;s our aim to always take of our participant
                    </p>
                    <div className='border border-[#D434FE] rounded-[5px] flex justify-center  items-center'>
                        <div className='lg:w-[80%] w-[90%] flex flex-col items-start gap-12  py-16'>
                            <p className='lg:text-[14px] text-[12px]  font-montserrat leading-7'>At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose,
                                and safeguard your data when you participate in our tech
                                hackathon event. By participating in our event, you consent
                                to the practices described in this policy.</p>

                            <div className='flex flex-col items-start text-start gap-8'>
                                <h1 className='font-montserrat  font-bold leading-8 text-[13px] lg:text-[16px] text-[#D434FE]'>Licensing Policy
                                    <p className='text-[12px] lg:text-[14px] text-[#FFF]  font-montserrat block'>Here are terms of our Standard License:</p></h1>

                                <ul className='leading-7 text-[12px] lg:text-[14px]  text-[#FFF] flex flex-col gap-8 font-montserrat'>
                                    <li className='relative flex items-start gap-4'>
                                        <Image alt="decoration icon" className='mt-2' src={listicon} />
                                        The Standard License grants you a non-exclusive right to
                                        navigate and register for our event

                                    </li>

                                    <li className='relative flex items-start gap-4'>
                                        <Image alt="decoration icon" className='mt-2' src={listicon} />
                                        You are licensed to use the item available at any free source
                                        sites, for your project developement
                                    </li>
                                </ul>

                                <div className='self-center'>
                                    <CustomButton ButtonText={'Read More'} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image alt="decoration icon" className='absolute z-[3] top-[-3%] left-[70%] w-[10px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[75%] left-[-10%] w-[10px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                </motion.div>
            </div>

            <div className='absolute rotate-180 z-[0] mix-blend-soft-light top-96 -left-60'>
                <Image alt="decoration icon" src={lensflare} priority />
            </div>
        </section>
    )
}

export default Privacy