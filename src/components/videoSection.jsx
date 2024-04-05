import React from "react";
import videoImg from "../assets/videoImg.jpg";
import { GoDeviceCameraVideo } from "react-icons/go";
import { CiPlay1 } from "react-icons/ci";

const VideoSection = () => {
    return (
        <div id="about-us" className="container mx-auto lg:px-10 px-1 my-20">
            <div className="lg:w-[80%] w-[90%] gradientBg flex items-center gap-4 relative Shadow lg:py-16 py-0 scroll-py-48 xl:px-20 px-10 lg:mx-0 mx-auto">
                <div className="lg:w-[60%] w-[100%] lg:mt-0 mt-44 sm:mt-44 lg:block flex flex-col items-center pb-10 lg:pb-0">
                    <div className="flex gap-2 items-center text-white font-semibold lg:text-lg text-base">
                        <GoDeviceCameraVideo className="sm:text-xl text-2xl" />
                        <p className="text-center lg:text-start">
                            YOUR NETWORK IS YOUR NET-WORTH
                        </p>
                    </div>
                    <h1 className="text-white lg:text-5xl md:text-4xl text-3xl font-medium tracking-wide text-center lg:text-start">
                        BrokerApp is a fast and secure app that was built for both Android
                        and iOS platforms.
                    </h1>
                    <button className="whiteButtonContainer">
                        <span>Get Started</span>
                    </button>
                </div>
                <div className="">
                    <div className="absolute lg:-right-1/2 right-1/2 translate-x-1/2 lg:-translate-x-1/2 lg:top-1/2 top-0 -translate-y-1/2">
                        <div className='bg-[#017dc5] rounded-full w-fit p-3 absolute lg:top-1/2 top-[100%] lg:-left-10 left-1/2 -translate-y-2/4 lg:translate-x-0 -translate-x-2/4'>
                            <div className='bg-white w-fit p-5 rounded-full hover:scale-150 transition-all'>
                                <CiPlay1 />
                            </div>
                        </div>
                        <img src={videoImg} alt="" className='xl:w-[30rem] lg:w-[25rem] curveBorder Shadow' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;

// lg:-right-[30%] left-1/2 lg:top-1/2 top-0 -translate-y-2/4 lg:translate-x-[30%] -translate-x-2/4
