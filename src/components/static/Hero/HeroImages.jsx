import React from 'react'
import Image from 'next/image'
import globe from '@/assets/globe.png'
import man from '@/assets/man.webp'
import lensflare from '@/assets/lensflarefull.webp'

const HeroImages = () => {
    return (
        <div className='absolute bottom-0 right-0 lg:right-10'>
            <Image alt="decoration icon" className='filter grayscale' width={600} src={man} />
            <Image alt="decoration icon" className='absolute w-[350px] animate-pulse lg:w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={globe} />
            <div className='absolute z-[0] mix-blend-soft-light top-12 left-10 lg:top-[-5%] lg:left-[10%] '>
                <Image alt="decoration icon" src={lensflare} priority width={600} />
            </div>
        </div>
    )
}

export default HeroImages