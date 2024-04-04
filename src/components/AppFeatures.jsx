import React from "react";
import { CiSettings } from "react-icons/ci";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LiaUsersSolid } from "react-icons/lia";
import { RiComputerLine } from "react-icons/ri";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaSitemapSolid } from "react-icons/lia";

const AppFeatures = () => {
    return (
        <div id="app-features" className="container mx-auto lg:px-10 px-5 lg:mt-56 mt-0">
            <p className="flex items-center justify-center gap-2 text-[#5178e8]">
                <CiSettings className="text-3xl font-bolder" />
                <span className="text-lg font-semibold tracking-wider">
                    APP FEATURES
                </span>
            </p>
            <p className="text-center lg:text-7xl md:text-5xl sm:text-4xl text-4xl mx-auto my-10 font-medium">
                Get surprised by <br /> amazing features.
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 flex-grow-1">
                <div className="gradientBoxContainerTopBottom">
                    <div className="flex flex-col gap-4 gradient-box-topBottom text-center h-full">
                        <div className="lg:text-8xl md:text-7xl text-6xl darkBlue flex justify-center">
                            <LiaClipboardListSolid />
                        </div>
                        <p className="darkBlue text-2xl">Free Property Listing</p>
                        <p className="grey text-xl">
                            Unlock Your Property's Potential: Experience Hassle-Free Real
                            Estate Listing! Join Our Exclusive Platform for Free Property
                            Listings – Your Gateway to Maximum Exposure and Quick Sales
                        </p>
                    </div>
                </div>
                <div className="gradientBoxContainerTopBottom">
                    <div className="flex flex-col gap-4 gradient-box-topBottom text-center h-full">
                        <div className="lg:text-8xl md:text-7xl text-6xl darkBlue flex justify-center">
                            <LiaUsersSolid />
                        </div>
                        <p className="darkBlue text-2xl">Free Certified Leads</p>
                        <p className="grey text-xl">
                            Elevate Your Real Estate Game: Claim Your Share of Success with Free Certified Leads! Join Our Exclusive Platform for a Stream of High-Quality Leads
                        </p>
                    </div>
                </div>
                <div className="gradientBoxContainerTopBottom">
                    <div className="flex flex-col gap-4 gradient-box-topBottom text-center h-full">
                        <div className="lg:text-8xl md:text-7xl text-6xl darkBlue flex justify-center">
                            <RiComputerLine />
                        </div>
                        <p className="darkBlue text-2xl">Free Designing Assistance</p>
                        <p className="grey text-xl">
                            Unlock Free Designing Assistance for Real Estate! Transform Your Property into a Masterpiece with Our Expert Design Support. From Concept to Creation, We're Here to Make Your Vision a Reality.
                        </p>
                    </div>
                </div>
                <div className="gradientBoxContainerTopBottom">
                    <div className="flex flex-col gap-4 gradient-box-topBottom text-center h-full">
                        <div className="lg:text-8xl md:text-7xl text-6xl darkBlue flex justify-center">
                            <LiaFileInvoiceSolid />
                        </div>
                        <p className="darkBlue text-2xl">Excess to 1000+ Projects</p>
                        <p className="grey text-xl">
                            Dive into a World of Opportunity: Gain Access to 1000+ Real Estate Projects! Elevate Your Investment Portfolio with Our Exclusive Platform, Offering a Diverse Range of Projects for Every Investor.
                        </p>
                    </div>
                </div>
                <div className="gradientBoxContainerTopBottom">
                    <div className="flex flex-col gap-4 gradient-box-topBottom text-center h-full">
                        <div className="lg:text-8xl md:text-7xl text-6xl darkBlue flex justify-center">
                            <LiaCommentsSolid />
                        </div>
                        <p className="darkBlue text-2xl">Chat Globally With Brokers</p>
                        <p className="grey text-xl">
                            Chat Globally with Real Estate Brokers! Break Boundaries and Explore Endless Opportunities by Connecting with Expert Brokers Worldwide. Our Platform Facilitates Seamless Communication, Empowering You to Navigate the Global Real Estate Market.
                        </p>
                    </div>
                </div>
                <div className="gradientBoxContainerTopBottom">
                    <div className="flex flex-col gap-4 gradient-box-topBottom text-center h-full">
                        <div className="lg:text-8xl md:text-7xl text-6xl darkBlue flex justify-center">
                            <LiaSitemapSolid />
                        </div>
                        <p className="darkBlue text-2xl">Join a network of 100,000+ brokers</p>
                        <p className="grey text-xl">
                            Amplify Your Reach, Expand Your Opportunities, and Network with the Best in the Business.Elevate Your Real Estate Journey – Join the Network Where Success Multiplies, 100,000+ Strong!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppFeatures;
