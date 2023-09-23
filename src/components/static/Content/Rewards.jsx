import React from 'react'
import Image from 'next/image'
import trophy from '@/assets/trophy.webp'
import rewards from '@/assets/Rewards.svg'
import lensflarefull2 from '@/assets/lensflarefull2.png'
import lensflareright from '@/assets/lensflareright.png'
import starpurple from '@/assets/starpurple.png'
import starwhite from '@/assets/starwhite.png'
import trophybg from '@/assets/trophybg.webp'

const Rewards = () => {
    return (
        <section className='w-full py-40 relative flex items-center justify-center'>
            <div className='absolute top-0 left-0 mix-blend-color-burn opacity-20 w-full h-full z-[1] '>
                <Image alt="decoration icon" className='w-full h-full' src={trophybg} />
            </div>
            <div className='w-full flex flex-col items-center relative z-[2]'>
                <div className='relative left-0 lg:left-48 text-center gap-4 flex flex-col lg:text-start items-center'>
                    <h1 className='lg:text-[32px] text-[20px] w-[80%] font-clash font-bold'>Prizes and <span className='text-[#D434FE] block'>Rewards</span></h1>
                    <p className='lg:text-[14px] text-[13px] w-[80%] mb-16 font-montserrat leading-5'>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>


                <div className='lg:w-[100%] w-[90%] flex flex-col lg:flex-row items-center gap-8'>
                    <div className='relative'>
                        <Image alt="decoration icon" src={trophy} width={1200} />
                        <Image alt="decoration icon" className='absolute z-[3] top-[0%] right-[5%] w-[15px] lg:w-[20px] animate-pulse duration-200' src={starwhite} />
                        <Image alt="decoration icon" className='absolute z-[3] top-[70%] left-[8%] w-[15px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
                    </div>

                    <div className='relative w-[90%] left-0 lg:-left-20'>
                        <Image alt="decoration icon" src={rewards} />
                        <Image alt="decoration icon" className='absolute z-[3] top-[0%] right-[5%] w-[15px] lg:w-[20px] animate-pulse duration-200' src={starwhite} />
                        <Image alt="decoration icon" className='absolute z-[3] top-[-200%] left-[70%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                        <Image alt="decoration icon" className='absolute z-[3] top-[45%] left-[8%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
                        <Image alt="decoration icon" className='absolute z-[3] bottom-[-30%] right-[25%] w-[15px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
                    </div>

                </div>
            </div>
            <div className='absolute rotate-180 z-[0] mix-blend-overlay top-0 -left-60 lensflare'>
                <Image alt="decoration icon" src={lensflarefull2} width={1200} />
            </div>
            <div className='absolute z-[0] mix-blend-soft-light top-60 lg:top-0 right-0 lensflare'>
                <Image alt="decoration icon" src={lensflareright} width={800} />
            </div>
            <Image alt="decoration icon" className='absolute z-[3] top-[10%] left-[10%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />

        </section>
    )
}

export default Rewards