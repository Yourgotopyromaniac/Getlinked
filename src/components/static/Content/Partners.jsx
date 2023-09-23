import React from 'react'
import Image from 'next/image'
import partners from '@/assets/partners.svg'
import lensflare from '@/assets/lensflarefull.webp'
import starwhite from '@/assets/starwhite.png'
import starpurple from '@/assets/starpurple.png'
import { motion } from 'framer-motion'

const Partners = () => {
  return (
    <section className='flex relative w-full py-20 items-center justify-center border-b border-[#ffffff29]'>
      <div className='w-[85%] relative z-[1] flex flex-col items-center gap-16'>
        <div className='text-center flex flex-col items-center gap-4 w-full lg:w-[70%]'>
          <h1 className='font-clash text-[20px] lg:text-[32px] font-bold'>Partners and Sponsors</h1>
          <p className='text-[13px] lg:text-[14px] font-montserrat leading-7 w-full lg:w-[80%]'>Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors</p>
        </div>

        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ type: 'keyframes',  duration: 0.3 }} viewport={{ once: true }} className='flex relative items-center justify-center border px-10 lg:py-36 py-14 border-[#D434FE] rounded-[5px] w-full'>
          <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1}} transition={{ type: 'keyframes',  duration: 0.5, delay: 0.6}} viewport={{once: true}}>
            <Image alt="partners" src={partners} />
          </motion.div>
          <Image alt="decoration icon" className='absolute z-[3] top-[17%] right-[40%] w-[15px] lg:w-[20px] animate-pulse duration-200' src={starpurple} />
          <Image alt="decoration icon" className='absolute z-[3] top-[-5%] left-[10%] w-[15px] lg:w-[25px] animate-pulse duration-500' src={starpurple} />
          <Image alt="decoration icon" className='absolute z-[3] bottom-[17%] right-[40%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
        </motion.div>
      </div>

      <div className='absolute rotate-180 z-[0] mix-blend-soft-light top-0 -left-60'>
        <Image alt="decoration icon" src={lensflare} priority />
      </div>

      <div className='absolute z-[0] mix-blend-soft-light -bottom-72 -right-80'>
        <Image alt="decoration icon" src={lensflare} priority />
      </div>

    </section>
  )
}

export default Partners