import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import Image from 'next/image';
import modalsuccess from '@/assets/modalsuccess.webp'
import checkmark from '@/assets/checkmark.png'
import starwhite from '@/assets/starwhite.png'
import starpurple from '@/assets/starpurple.png'

const ContactForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const [formData, setFormData] = useState({
        first_name: "",
        email: "",
        message: "",
        phone_number: "",
    })

    const [sendLoading, setSendLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendLoading(true);

        try {
            const contactUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/contact-form`;
            const response = await axios.post(
                contactUrl,
                {
                    email: formData.email,
                    phone_number: formData.phone_number,
                    first_name: formData.first_name,
                    message: formData.message,
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );
            setSendLoading(false);
            setIsModalOpen(true);
            console.log(response.data)

            setFormData({
                first_name: "",
                email: "",
                phone_number: "",
                message: "",
            });
        } catch (error) {
            alert("could not submit your form, please try again")
        }
    };

    return (
        <form className='flex flex-col items-center w-full gap-8 font-montserrat text-[12px]'>

            <input
                type="text"
                name="first_name"
                placeholder="Name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="input-bg p-6 pl-2 w-full h-12"
            />

            <input
                type="email"
                name="email"
                placeholder="Mail"
                value={formData.email}
                onChange={handleInputChange}
                className="input-bg p-6 pl-2 w-full h-12"
            />

            <input
                type="number"
                name="phone_number"
                placeholder="Mail"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="input-bg p-6 pl-2 w-full h-12"
            />

            <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="input-bg p-6 pb-28 pl-2 w-full h-12"
            />

            <select className='text-white bg-[#150E28]'>
                <option value="1">hiooooooo</option>
            </select>


            <div className='lg:w-44 lg:h-14 w-24 h-8 rounded-[4px] font-montserrat text-[12px] lg:text-[16px] button-gradient flex justify-center items-center'>
                <motion.button type="submit" onClick={handleSubmit} whileHover={{ backgroundColor: '#150e28' }} style={{ backgroundColor: 'transparent' }} className='lg:w-[10.8rem] lg:h-[3.3rem] w-[94px] h-[30px] rounded-[4px] transition-all duration-500 delay-100' >submit</motion.button>
            </div>

            {isModalOpen && (<div onClick={handleModalClose} className='fixed z-[1500] top-0 left-0 w-screen h-screen flex items-center bg-[#150E28ED]  justify-center'>
                <div className='border border-[#D434FE] relative z-[1501] text-center bg-transparent flex flex-col items-center py-14 gap-4 w-[80%] lg:w-[50%]'>
                    <div className='relative flex items-center w-full mb-8'>
                        <Image src={checkmark} alt='modal success' width={200} />
                        <Image src={modalsuccess} className='absolute right-0' alt='modal success' width={300} />
                    </div>

                    <h1 className='font-montserrat font-semibold w-[60%] lg:text-[16px]'>We&apos;ve received your message! We&apos;ll get back to you soon</h1>
                    <p className='text-[12px] lg:text-[14px] w-[60%]'>Thank you for reaching out.</p>

                    <div className="lg:h-14 w-[70%] h-10 rounded-[4px] font-montserrat text-[12px] lg:text-[16px] button-gradient flex justify-center items-center">
                        <motion.button
                            whileHover={{ backgroundColor: '#150e28' }}
                            style={{ backgroundColor: 'transparent' }}
                            className="lg:w-[99%] lg:h-[3.3rem] w-[99%] h-[36px] rounded-[4px] transition-all duration-500 delay-100"
                        >
                            Back
                        </motion.button>
                    </div>

                    <Image alt="decoration icon" className='absolute z-[3] top-[-5%] right-[-5%] w-[10px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                    <Image alt="decoration icon" className='absolute z-[3] bottom-[5%] right-[5%] w-[10px] lg:w-[20px] animate-pulse duration-500' src={starpurple} />
                    <Image alt="decoration icon" className='absolute z-[3] top-[35%] left-[10%] w-[15px] lg:w-[15px] animate-pulse duration-500' src={starwhite} />
                </div>
            </div>
            )}


        </form>
    )
}

export default ContactForm