import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import axios from 'axios';
import Image from 'next/image';
import checkmark from '@/assets/checkmark.png'
import modalsuccess from '@/assets/modalsuccess.webp'
import starwhite from '@/assets/starwhite.png'
import starpurple from '@/assets/starpurple.png'




const RegistrationForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const [userData, setUserData] = useState({

        email: "",
        phone_number: "",
        team_name: "",
        group_size: 0,
        project_topic: "",
        category: "",
        privacy_policy_accepted: false,
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = () => {
            const categoryUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/categories-list`;

            axios
                .get(categoryUrl, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    setCategories(response.data)
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        console.log(categories);
    }, [categories])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

    };

    const handleCheckBoxChange = (e) => {
        const { name, checked } = e.target;
        setUserData({ ...userData, [name]: checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const registrationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/registration`;
        axios
            .post(registrationUrl, userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
                setIsModalOpen(true)
            })
            .catch((error) => {
                console.error("Error Registering User:", error);
            });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-wrap flex-col lg:flex-row items-center w-full gap-8 font-montserrat text-[12px]"
        >
            <div className="flex flex-col items-start gap-3">
                <label>Team&apos;s name</label>
                <input
                    type="text"
                    name="team_name"
                    value={userData.team_name}
                    onChange={handleInputChange}
                    placeholder="Enter the name of your group"
                    className="input-bg p-6 pl-2 w-72 lg:w-60 h-12"
                />
            </div>

            <div className="flex flex-col items-start gap-3">
                <label>Phone</label>
                <input
                    type="text"
                    name="phone_number"
                    value={userData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="input-bg p-6 pl-2 w-72 lg:w-60 h-12"
                />
            </div>

            <div className="flex flex-col items-start gap-3">
                <label>Email</label>
                <input
                    type="tel"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="input-bg p-6 pl-2 w-72 lg:w-60 h-12"
                />
            </div>

            <div className="flex flex-col items-start gap-3">
                <label>Project Topic</label>
                <input
                    type="text"
                    name="project_topic"
                    value={userData.project_topic}
                    onChange={handleInputChange}
                    placeholder="What is your group project topic"
                    className="input-bg p-6 pl-2 w-72 lg:w-60 h-12"
                />
            </div>


            <div className='w-72 lg:w-[520px] flex flex-row items-end justify-between'>
                <div className="flex flex-col items-start gap-5">
                    <label>Category</label>
                    <Suspense fallback={<div>Loading categories...</div>}>
                        <select
                            name="category"
                            value={userData.category}
                            onChange={handleInputChange}
                            className="p-6 py-4 pl-2 w-36 lg:w-60 bg-[#1c162f] rounded-[4px] outline-[#D434FE] border text text-white"
                        >
                            <option value="default" >Select your category</option>
                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))}

                        </select>
                    </Suspense>

                </div>

                <div className="flex flex-col items-start gap-3">
                    <label>Group Size</label>
                    <select
                        name="group_size"
                        value={userData.group_size}
                        onChange={handleInputChange}
                        className="p-6 py-4 pl-2 w-28 lg:w-60 bg-[#1c162f] rounded-[4px] outline-[#D434FE] border text text-white"
                    >
                        <option value="default" disabled >Select</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>


            <span className="self-start text-12px text-[#FF26B9]">
                Please review your registration details before submitting
            </span>

            <div className="flex gap-2 items-center self-start">
                <input
                    type="checkbox"
                    name="privacy_policy_accepted"
                    className='custom-checkbox'
                    checked={userData.privacy_policy_accepted}
                    onChange={handleCheckBoxChange}
                />
                <span className="text-[12px]">I agree with the event terms and conditions and privacy policy</span>
            </div>

            <div className="lg:h-14 w-full h-10 rounded-[4px] font-montserrat text-[12px] lg:text-[16px] button-gradient flex justify-center items-center">
                <motion.button
                    whileHover={{ backgroundColor: '#150e28' }}
                    style={{ backgroundColor: 'transparent' }}
                    className="lg:w-[99%] lg:h-[3.3rem] w-[99%] h-[36px] rounded-[4px] transition-all duration-500 delay-100"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Register Now
                </motion.button>
            </div>

            {isModalOpen && (<div onClick={handleModalClose} className='fixed z-[1500] top-0 left-0 w-screen h-screen flex items-center bg-[#150E28ED]  justify-center'>
                <div className='border border-[#D434FE] relative z-[1501] text-center bg-transparent flex flex-col items-center py-10 gap-4 w-[80%] lg:w-[50%]'>
                    <div className='relative flex items-center w-full mb-8'>
                        <Image src={checkmark} alt='modal success' width={200} />
                        <Image src={modalsuccess} className='absolute right-0' alt='modal success' width={300} />
                    </div>
                    <h1 className='font-montserrat font-semibold w-[60%] lg:text-[16px]'>Congratulations
                        you have successfully
                        Registered!</h1>
                    <p className='text-[12px] lg:text-[14px] w-[60%]'>Yes, it was easy and you did it!
                        check your mail box for next step</p>

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
    );
};

export default RegistrationForm;
