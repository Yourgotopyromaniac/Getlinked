import React from 'react'
import Image from 'next/image'
import manandwoman from '@/assets/manandwoman.webp'
import CustomButton from '../../dynamic/CustomButton'
import lensflare from '@/assets/lensflarefull.webp'
import starwhite from '@/assets/starwhite.png'
import starpurple from '@/assets/starpurple.png'
import ellipse from '@/assets/ellipse.svg'
import { motion } from 'framer-motion'



const Judge = () => {
    return (
        <section className='w-full relative py-20 border-b border-[#ffffff29] flex items-center justify-center'>
            <div className='w-[85%] relative z-[1] flex lg:flex-row flex-col items-center justify-between'>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes',  duration: 0.5 }} viewport={{ once: true }} className='relative'>
                    <Image alt="decoration icon" className='relative z-[1]' src={manandwoman} width={600} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[-25%] left-[20%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starpurple} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[48%] left-[60%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
                    <Image alt="decoration icon" className='absolute lg:opacity-100 opacity-0 left-16 -top-10 z-0' src={ellipse} />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'keyframes',  duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className='flex flex-col lg:text-start text-center lg:items-start items-center gap-6 w-full lg:w-1/2 font-bold'>
                    <h1 className='lg:text-[32px] text-[20px] w-[80%] font-clash'>Judging Criteria <span className='text-[#D434FE] block'>Key attributes</span></h1>
                    <p className='lg:text-[14px] text-[12px] font-montserrat'><span className='text-[#D434FE]'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world problem in a novel
                        way or introduces innovative features.</p>
                    <p className='lg:text-[14px] text-[13px] font-montserrat'><span className='text-[#D434FE]'>Functionality:</span> Assess how well the solution works. Does it perform its
                        intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.</p>
                    <p className='lg:text-[14px] text-[13px] font-montserrat'><span className='text-[#D434FE]'>Impact and Relevance:</span> Determine the potential impact of the solution
                        in the real world. Does it address a significant problem, and is it relevant
                        to the target audience? Judges would assess the potential social,
                        economic, or environmental benefits.</p>
                    <p className='lg:text-[14px] text-[13px] font-montserrat'><span className='text-[#D434FE]'>Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                        Judges would consider the complexity of the code, the use of advanced
                        technologies or algorithms, and the scalability of the solution.</p>
                    <p className='lg:text-[14px] text-[13px] font-montserrat'><span className='text-[#D434FE]'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                        to the rules and guidelines of the hackathon, including deadlines, use of
                        specific technologies or APIs, and any other competition-specific requirements.</p>

                    <CustomButton ButtonText={'Read More'} />
                </motion.div>
            </div>

            <div className='absolute rotate-180 z-[0] mix-blend-soft-light top-20 -left-60'>
                <Image alt="decoration icon" src={lensflare} priority width={1200} />

            </div>

            <div className='absolute z-[0] mix-blend-soft-light -bottom-80 -right-80'>
                <Image alt="decoration icon" src={lensflare} priority />
            </div>


            <Image alt="decoration icon" className='absolute bottom-[10%] left-[45%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
        </section>
    )
}

export default Judge