import React from "react";
import { CiMail } from "react-icons/ci";
import artwork from '../assets/Artwork.png'

const ContactForm = () => {
    return (
        <div id="contact-us" className="relative">
            <div className="container mx-auto lg:px-10 px-5 my-32 z-20 relative">
                <div className="gradientBg">
                    <div className="bg-white curveBorder">
                        <div className="flex flex-col py-10">
                            <p className="flex items-center justify-center gap-2 text-[#5178e8]">
                                <CiMail className="text-3xl font-bolder" />
                                <span className="text-lg font-semibold tracking-wider">
                                    CONTACT US
                                </span>
                            </p>
                            <p className="text-center lg:text-5xl sm:text-4xl text-4xl mx-auto my-5 font-medium">
                                Write message
                            </p>
                        </div>

                        <form className="lg:p-20 p-10 -mt-10">
                            <div class="relative z-0 w-full mb-10 group">
                                <input type="text" name="floating_fullName" id="floating_fullName" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_fullName" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div class="relative z-0 w-full mb-10 group">
                                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div class="relative z-0 w-full mb-10 group">
                                <input type="text" name="message" id="floating_message" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_message" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                            </div>
                            <div>
                                <button type="submit" class="curveBorder text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ width: '100%' }}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            {/* <div className="rotate-[50deg] absolute top-0 z-10">
                <img src={artwork} alt="" />
            </div> */}
        </div>

    );
};

export default ContactForm;
