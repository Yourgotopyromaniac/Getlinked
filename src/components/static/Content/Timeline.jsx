import React from 'react'
import { motion } from 'framer-motion'
import starpurple from '@/assets/starpurple.png'
import starwhite from '@/assets/starwhite.png'
import Image from 'next/image'

const Timeline = () => {
    return (
        <section id='timeline' className='flex relative w-full py-32 items-center justify-center border-b border-[#ffffff29]'>
            <div className='w-[100%] relative z-[1] flex flex-col items-center gap-56'>
                <div className='text-center flex flex-col items-center gap-4 w-full lg:w-[70%]'>
                    <h1 className='font-clash text-[20px] lg:text-[32px] font-bold'>Timeline</h1>
                    <p className='text-[13px] lg:text-[14px] font-montserrat leading-7 w-full lg:w-[50%]'>Here is the breakdown of the time we anticipate
                        using for the upcoming event.</p>
                </div>

                <div className='relative flex flex-col items-center w-[80%] pl-10 lg:pl-0 lg:w-[90%] gap-16 lg:gap-32 font-montserrat'>

                    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} viewport={{ once: true }} className='flex lg:flex-row flex-col lg:items-center items-start w-full gap-4 lg:gap-8 lg:justify-around'>
                        <div className='flex flex-col gap-2 lg:gap-2 items-start lg:items-end leading-6 w-[90%] lg:w-[35%] text-start lg:text-end'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold relative'>Hackathon Announcement
                                <Image alt="decoration icon" className='absolute z-[3] top-[-600%] left-[0%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                            </h1>
                            <p className='lg:text-[14px] text-[12px]'>The getlinked tech hackathon 1.0 is formally announced
                                to the general public and teams begin to get ready to register</p>
                        </div>

                        <div className='w-[90%] lg:w-[35%] flex items-center justify-start'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>November 18, 2023</h1>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} viewport={{ once: true }} className='flex lg:flex-row-reverse flex-col lg:items-center items-start w-full gap-4 lg:gap-8 lg:justify-around'>
                        <div className='flex flex-col gap-2 lg:gap-6 items-start  leading-6 w-[90%] lg:w-[35%]'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>Teams Registration begins</h1>
                            <p className='lg:text-[14px] text-[12px]'>Interested teams can now show their interest in the
                                getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>

                        <div className='w-[90%] lg:w-[35%] flex items-center justify-start lg:justify-end'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>November 18, 2023</h1>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} viewport={{ once: true }} className='flex lg:flex-row flex-col lg:items-center items-start w-full gap-4 lg:gap-8 lg:justify-around'>
                        <div className='flex flex-col gap-2 lg:gap-6 items-start lg:items-end text-start lg:text-end leading-6 w-[90%] lg:w-[35%]'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>Teams Registration ends</h1>
                            <p className='lg:text-[14px] text-[12px]'>Interested Participants are no longer Allowed to
                                register</p>
                        </div>

                        <div className='w-[90%] lg:w-[35%] flex items-center justify-start'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold relative'>November 18, 2023
                                <Image alt="decoration icon" className='absolute z-[3] top-[-100%] right-[-80%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} viewport={{ once: true }} className='flex lg:flex-row-reverse flex-col lg:items-center items-start w-full gap-4 lg:gap-8 lg:justify-around'>
                        <div className='flex flex-col gap-2 lg:gap-6 items-start leading-6 w-[90%] lg:w-[35%]'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>Announcement of the accepted teams
                                and ideas</h1>
                            <p className='lg:text-[14px] text-[12px]'>All teams whom idea has been accepted into getlinked tech
                                hackathon 1.0 2023 are formally announced</p>
                        </div>

                        <div className='w-[90%] lg:w-[35%] flex items-center justify-start lg:justify-end'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>November 18, 2023</h1>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} viewport={{ once: true }} className='flex lg:flex-row flex-col lg:items-center items-start w-full gap-4 lg:gap-8 lg:justify-around'>
                        <div className='flex flex-col gap-2 lg:gap-6 items-start lg:items-end lg:text-end text-start leading-6 w-[90%] lg:w-[35%]'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>Getlinked Hackathon 1.0 Offically Begins</h1>
                            <p className='lg:text-[14px] text-[12px]'>Accepted teams can now proceed to build their
                                ground breaking skill driven solutions</p>
                        </div>

                        <div className='w-[90%] lg:w-[35%] flex items-center justify-start'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>November 18, 2023</h1>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} viewport={{ once: true }} className='flex lg:flex-row-reverse flex-col lg:items-center items-start w-full gap-4 lg:gap-8 lg:justify-around'>
                        <div className='flex flex-col gap-2 lg:gap-6 items-start leading-6 w-[90%] lg:w-[35%]'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>Demo Day</h1>
                            <p className='lg:text-[14px] text-[12px]'>Teams get the opportunity to pitch their projects to judges.
                                The winner of the hackathon will also be announced on
                                this day</p>
                        </div>

                        <div className='w-[90%] lg:w-[35%] flex items-center justify-start lg:justify-end'>
                            <h1 className='text-[#D434FE] lg:text-[24px] text-[12px] font-bold'>November 18, 2023</h1>
                        </div>
                    </motion.div>
                    <div className='absolute lg:left-[50%] lg:transform lg:-translate-x-1/2 left-[-8%] top-[1%] lg:top-[-10%] h-[100%] lg:h-[110%] flex flex-col items-center gap-0 text-[12px] lg:text-[24px] text-white font-montserrat font-bold'>
                        <motion.div initial={{scaleY: 0}} whileInView={{scaleY: 1}} transition={{duration: 0.5}} viewport={{once: true}}  className='w-[4px] h-[7%] lg:h-[11.5%] origin-top bg-[#D434FE]'></motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}} viewport={{once: true}} className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] my-2 rounded-[50%] flex items-center justify-center list-gradient'>1</motion.div>
                        <motion.div initial={{scaleY: 0}} whileInView={{scaleY: 1}} transition={{duration: 0.5}} viewport={{once: true}}  className='w-[4px] lg:h-[12%] h-[15%] origin-top bg-[#D434FE]'></motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}} viewport={{once: true}} className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] my-2 rounded-[50%] flex items-center justify-center list-gradient'>2</motion.div>
                        <motion.div initial={{scaleY: 0}} whileInView={{scaleY: 1}} transition={{duration: 0.5}} viewport={{once: true}}  className='w-[4px] h-[11.5%] bg-[#D434FE] origin-top'></motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}} viewport={{once: true}} className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] my-2 rounded-[50%] flex items-center justify-center list-gradient'>3</motion.div>
                        <motion.div initial={{scaleY: 0}} whileInView={{scaleY: 1}} transition={{duration: 0.5}} viewport={{once: true}}  className='w-[4px] lg:h-[12%] h-[15.5%] bg-[#D434FE] origin-top'></motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}} viewport={{once: true}} className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] my-2 rounded-[50%] flex items-center justify-center list-gradient'>4</motion.div>
                        <motion.div initial={{scaleY: 0}} whileInView={{scaleY: 1}} transition={{duration: 0.5}} viewport={{once: true}}  className='w-[4px] h-[11.5%] bg-[#D434FE] origin-top'></motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5,duration: 0.5}} viewport={{once: true}} className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] my-2 rounded-[50%] flex items-center justify-center list-gradient'>5</motion.div>
                        <motion.div initial={{scaleY: 0}} whileInView={{scaleY: 1}} transition={{duration: 0.5}} viewport={{once: true}}  className='w-[4px] h-[14.5%] bg-[#D434FE] origin-top'></motion.div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}} viewport={{once: true}} className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] my-2 rounded-[50%] flex items-center justify-center list-gradient'>6</motion.div>
                    </div>
                </div>
            </div>

            <Image alt="decoration icon" className='absolute z-[3] bottom-[8%] left-[10%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />

        </section>

    )
}

export default Timeline