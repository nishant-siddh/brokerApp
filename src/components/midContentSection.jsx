import React from "react";
import HeroSection from "./heroSection";
import AppFeatures from "./appFeatures";
import Testimonials from "./testimonials";
import VideoSection from "./videoSection";
import ContactFormSection from "./contactFormSection";

const MidContentSection = () => {
    return (
        <>
            <HeroSection />
            <AppFeatures />
            <Testimonials />
            <VideoSection />
            <ContactFormSection />
        </>
    )
};

export default MidContentSection;
