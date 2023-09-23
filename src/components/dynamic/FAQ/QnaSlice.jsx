import React, { useState } from 'react';
import Image from 'next/image';
import plus from '@/assets/plus.svg';


const QnaSlice = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='border-b border-[#D434FE] w-full'>
            <div className='flex text-[12px] lg:text-[14px] justify-between w-full items-center pb-4 cursor-pointer' onClick={toggleAccordion}>
                <p className='pr-4'>{question}</p>
                <div className={`${isOpen ? 'transform rotate-45 transition-transform duration-300' : 'transform rotate-0'}`}>
                    <Image alt="decoration icon" src={plus} width={13} />
                </div>
            </div>
            {isOpen && (
                <div>
                    <p className='py-4 px-2'>
                        {answer}
                    </p>
                </div>
            )}
        </div>
    )
}

export default QnaSlice