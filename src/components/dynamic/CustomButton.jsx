import React from 'react'
import { motion } from 'framer-motion'

const CustomButton = ({ButtonText}) => {
  return (
    <div className='lg:w-44 lg:h-14 w-24 h-8 rounded-[4px] font-montserrat text-[12px] lg:text-[16px] button-gradient flex justify-center items-center'>
        <motion.button whileHover={{backgroundColor:'#150e28' }} style={{ backgroundColor: 'transparent'}} className='lg:w-[10.8rem] lg:h-[3.3rem] w-[94px] h-[30px] rounded-[4px] transition-all duration-500 delay-100' >{ButtonText}</motion.button>
    </div>
  )
}

export default CustomButton