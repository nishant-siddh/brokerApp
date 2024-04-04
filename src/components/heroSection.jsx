import React from "react";
import bgArt from "../assets/Artwork.png";
import heroPhone from "../assets/heroPhone.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <div className="heroContainer">
        <div className="container mx-auto lg:px-10 px-5 flex gap-5 lg:flex-row flex-col-reverse lg:justify-between lg:h-full lg:mt-[180px] mt-[140px]">
          <div className="lg:w-[50%] w-full flex flex-col md:gap-8 gap-6 z-10 lg:px-2 my-24 px-5">
            <h1 className="darkBlue lg:text-4xl text-3xl text-center lg:text-left font-medium tracking-wide">
              1# India’s First Social Media Platform for Realtors & Property
              Consultant
            </h1>
            <p className="md:text-[23px] text-lg grey text-center lg:text-left leading-8">
              Introducing the No.1 Social Media Platform for Realtors & Property
              Consultants - BrokerApp, meticulously crafted for the exclusive
              use of real estate brokers and developers, empowering your
              business with unparalleled efficiency.
            </p>
            <div className="flex gap-5 flex-wrap lg:justify-start justify-center my-4">
              <div className="gradientBoxContainerLeftRight w-[fit-content]">
                <button className="gradient-box-leftRight flex gap-3 items-center justify-center">
                  <span>
                    <FaGooglePlay className="text-3xl text-[#1c80c2]" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="grey">Get it on</span>
                    <span className="text-2xl font-semibold darkBlue">
                      Google Play
                    </span>
                  </div>
                </button>
              </div>
              <div className="gradientBoxContainerLeftRight w-[fit-content]">
                <button className="gradient-box-leftRight flex gap-3 items-center justify-center">
                  <span>
                    <FaApple className="text-3xl text-[#1c80c2]" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="grey">Get it on</span>
                    <span className="text-2xl font-semibold darkBlue">
                      Apple Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] w-full flex lg:justify-end justify-center">
            <div className="absolute top-0 lg:-right-40 z-0">
              <img
                src={bgArt}
                alt=""
                className="md:h-auto h-[100vh] w-[100%]"
              />
            </div>
            <img
              src={heroPhone}
              alt=""
              className="sm:w-auto w-[250px] Shadow z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
