import React from 'react'
import logo from '../assets/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container mx-auto lg:px-10 px-5 pb-20'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-20 flex-grow-1'>
                <div className='w-full flex flex-col gap-8 '>
                    <img src={logo} alt="" className='w-14' />
                    <div className='grey text-2xl'>
                        <span className='font-semibold'>Registered Office</span>
                        <p className='text-xl'>6TH, OFFICE-05, UNIT NO-SB/C/61/, Sohna Bypass, M3M URBAN SECTOR 67, Gurugram, Gurugram, Haryana, 122101</p>
                    </div>
                    <div className='grey text-xl font-medium flex flex-col gap-1'>
                        <a href="mailto:contact@brokerapp.com">contact@brokerapp.com</a>
                        <a href="tel:+91 9667599743">+91 9667599743</a>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:gap-16 gap-5'>
                    <span className='darkBlue text-lg font-bold tracking-wider'>Follow</span>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-2 text-xl'>
                            <FaTwitter className='text-[#81dfff]' />
                            <span className='grey cursor-pointer'>Twitter</span>
                        </div>
                        <div className='flex items-center gap-2 text-xl'>
                            <FaFacebook className='text-[#88b6fe]' />
                            <span className='grey cursor-pointer'>Facebook</span>
                        </div>
                        <div className='flex items-center gap-2 text-xl'>
                            <FaLinkedin className='text-[#ac9dfc]' />
                            <span className='grey cursor-pointer'>Linkedin</span>
                        </div>
                        <div className='flex items-center gap-2 text-xl'>
                            <CiInstagram className='grey' />
                            <span className='grey cursor-pointer'>Instagram</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:gap-16 gap-5'>
                    <span className='darkBlue text-lg font-bold tracking-wider'>Explore</span>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-2 text-xl'>
                            <span className='grey cursor-pointer'>Terms & Conditions</span>
                        </div>
                        <NavLink to='privacy-policy' >
                            <div className='flex items-center gap-2 text-xl'>
                                <span className='grey cursor-pointer'>Privacy Policy</span>
                            </div>
                        </NavLink>
                        <div className='flex items-center gap-2 text-xl'>
                            <span className='grey cursor-pointer'>Help Center</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer