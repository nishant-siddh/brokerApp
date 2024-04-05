import React from 'react'
import logo from '../assets/logo.svg'
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
                    <img src={logo} alt="" className='w-20 -ml-5' />
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
                    <ul className='flex flex-col gap-5 list2'>
                        <li>
                            <NavLink to='https://twitter.com/brokerappdotcom' className='flex items-center gap-2 text-xl w-fit' >
                                <FaTwitter className='text-[#81dfff]' />
                                <span className='grey cursor-pointer'>Twitter</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='https://www.facebook.com/brokerappofficial' className='flex items-center gap-2 text-xl w-fit' >
                                <FaFacebook className='text-[#88b6fe]' />
                                <span className='grey cursor-pointer'>Facebook</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='https://www.linkedin.com/company/brokerappofficial' className='flex items-center gap-2 text-xl w-fit' >
                                <FaLinkedin className='text-[#ac9dfc]' />
                                <span className='grey cursor-pointer'>Linkedin</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='https://www.linkedin.com/company/brokerappofficial' className='flex items-center gap-2 text-xl w-fit' >
                                <CiInstagram className='grey' />
                                <span className='grey cursor-pointer'>Instagram</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex flex-col lg:gap-16 gap-5'>
                    <span className='darkBlue text-lg font-bold tracking-wider'>Explore</span>
                    <ul className='flex flex-col gap-5 list'>
                        <li className='flex items-center gap-2 text-xl w-fit'>
                            <span className='grey cursor-pointer'>Terms & Conditions</span>
                        </li>
                        <li className='flex items-center gap-2 text-xl w-fit'>
                            <NavLink to='privacy-policy' >
                                <span className='grey cursor-pointer'>Privacy Policy</span>
                            </NavLink>
                        </li>
                        <li className='flex items-center gap-2 text-xl w-fit'>
                            <span className='grey cursor-pointer'>Help Center</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer