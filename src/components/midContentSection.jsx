import React from "react";
import HeroSection from "./heroSection";
import Testimonials from "./testimonials";
import VideoSection from "./videoSection";
import ContactFormSection from "./contactFormSection";
import AppFeaturesSection from "./appFeaturesSection";

const MidContentSection = () => {
    return (
        <>
            <HeroSection />
            <AppFeaturesSection />
            <Testimonials />
            <VideoSection />
            <ContactFormSection />
        </>
    )
};

export default MidContentSection;
