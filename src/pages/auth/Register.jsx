import NavLayout from '@/components/dynamic/NavLayout'
import React from 'react'
import Image from 'next/image'
import lensflare from '@/assets/lensflarefull.webp'
import starpurple from '@/assets/starpurple.png'
import starwhite from '@/assets/starwhite.png'
import mansitting from '@/assets/mansitting.webp'
import manemoji from '@/assets/manemoji.png'
import womanemoji from '@/assets/womanemoji.png'
import bottomline from '@/assets/bottomline.svg'
import backbutton from '@/assets/backbutton.svg'
import Link from 'next/link'
import RegistrationForm from '@/components/dynamic/auth/RegistrationForm'

const Register = () => {
    return (
        <div className='text-white relative overflow-x-hidden'>

            <div className='lg:hidden flex absolute left-[10%] top-[5%] z-50'>
                <Link href={'/'} >
                    <Image src={backbutton} alt='back button' />
                </Link>
            </div>
            <div className='hidden lg:block w-full'>
                <NavLayout />
            </div>

            <section className='w-full py-60 overflow-hidden relative flex items-center justify-center'>
                <div className='lg:w-[85%] w-[100%] relative z-[1] flex flex-col lg:flex-row gap-48 items-start justify-between'>
                    <div className='relative lg:left-[15%] left-[50%] transform -translate-x-1/2 '>
                        <Image alt="sitting illustration" src={mansitting} className='relative z-[1] w-[200px] lg:w-[600px]' />


                        <Image alt="decoration icon" className='absolute z-[3] top-[10%] left-[20%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                        <Image alt="decoration icon" className='absolute z-[3] bottom-[-5%%] left-[15%] w-[20px] lg:w-[25px] animate-pulse duration-500' src={starwhite} />
                    </div>
                    <div className='rounded-[12px] mt-[-40%] lg:mt-0 relative lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[60%] py-14 flex items-start lg:items-center justify-center form-bg'>
                        <div className='lg:w-[80%] w-[75%] flex flex-col lg:items-start items-center gap-8 font-montserrat'>
                            <h1 className='text-[#D434FE] self-start font-clash lg:text-[32px] absolute -top-[32%] lg:relative  text-[20px] font-semibold'>Register</h1>
                            <div className='flex flex-col items-start gap-4 text-[12px] lg:text-[14px]'>
                                <div className='flex items-end gap-6'>Be part of this movement
                                    <div className='flex gap-0 relative items-center justify-center'>
                                        <Image alt='woman walking emoji' src={womanemoji} width={26} />
                                        <Image alt='man walking emoji' src={manemoji} width={26} />
                                        <Image alt='decoration icon' className='absolute bottom-0 h-[2px]' src={bottomline} />
                                    </div>
                                </div>
                                <h1 className='uppercase lg:text-[24px] text-[20px] '>create your account</h1>
                            </div>
                            <RegistrationForm />
                        </div>


                        <Image alt="decoration icon" className='absolute z-[3] bottom-[20%] left-[-2%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                        <Image alt="decoration icon" className='absolute z-[3] bottom-[-10%] left-[100%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
                        <Image alt="decoration icon" className='absolute z-[3] top-[-10%] left-[90%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starwhite} />
                    </div>
                </div>

                <div className='absolute rotate-180 z-[0] mix-blend-soft-light top-[5%] -left-40 lg:top-[-15%] lg:-left-72'>
                    <Image alt="decoration icon" src={lensflare} priority />
                </div>

                <div className='absolute z-[0] mix-blend-soft-light -bottom-72 -right-80'>
                    <Image alt="decoration icon" src={lensflare} priority />
                </div>
            </section>
        </div>

    )
}

export default Register