import NavLayout from '@/components/dynamic/NavLayout'
import React from 'react'
import Image from 'next/image'
import lensflare from '@/assets/lensflarefull.webp'
import starpurple from '@/assets/starpurple.png'
import starwhite from '@/assets/starwhite.png'
import insta from '@/assets/insta.svg'
import facebook from '@/assets/facebook.svg'
import twitter from '@/assets/twitter.svg'
import linkedin from '@/assets/linkedin.svg'
import ContactForm from '@/components/dynamic/auth/ContactForm'
import backbutton from '@/assets/backbutton.svg'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='text-white relative overflow-x-hidden'>
            <div className='hidden lg:block w-full'>
                <NavLayout />
            </div>
            <div className='lg:hidden flex absolute left-[10%] top-[5%] z-50'>
                <Link href={'/'} >
                    <Image src={backbutton} alt='back button' />
                </Link>
            </div>
            <section className='w-full py-20 overflow-hidden relative flex items-center justify-center'>
                <div className='lg:w-[85%] w-[100%] relative z-[1] flex flex-col lg:flex-row gap-48 items-center justify-between'>
                    <div className='relative py-0 flex flex-col items-start gap-6 font-montserrat text-[16px]'>
                        <h1 className='text-[#D434FE] hidden lg:flex font-clash text-[20px] font-semibold lg:text-[32px] '>Get In Touch</h1>
                        <p className='w-[50%] hidden lg:flex'>Contact Information</p>
                        <p className='w-[40%] hidden lg:flex' >27,Alara Street
                            Yaba 100012
                            Lagos State
                        </p>
                        <p className='hidden lg:flex'>Call Us : 07067981819</p>
                        <p className='w-[70%] hidden lg:flex'>we are open from Monday-Friday 08:00am - 05:00pm</p>

                        <div className='flex flex-col gap-2 items-center lg:items-start lg:relative fixed bottom-[5%] left-[50%] transform -translate-x-1/2'>
                            <p className='text-montserrat text-[16px] text-[#D434FE]'>Share on</p>
                            <div className='flex gap-6 font-normal items-center'>
                                <Image alt="decoration icon" src={insta} />
                                <Image alt="decoration icon" src={twitter} />
                                <Image alt="decoration icon" src={facebook} />
                                <Image alt="decoration icon" src={linkedin} />
                            </div>
                        </div>


                        <Image alt="decoration icon" className='absolute z-[3] top-[-15%] left-[5%] w-[15px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />

                    </div>
                    <div className='rounded-[12px] relative w-full lg:w-[60%] py-14 flex items-start lg:items-center justify-center form-bg'>
                        <div className='w-[80%] flex flex-col items-start gap-4 font-montserrat'>
                            <h1 className='text-[#D434FE] font-clash absolute -top-[30%] lg:relative  text-[20px] font-semibold'>Questions or Need Assistance?</h1>
                            <h1 className='text-[#D434FE] font-clash absolute -top-[20%] lg:relative capitalize text-[20px] font-semibold'>Let us Know about it</h1>
                            <p className='text-[12px] lg:hidden absolute w-[70%] top-[-10%]'>Email us below to any question related
                                to our event</p>
                            <ContactForm />
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

export default Contact