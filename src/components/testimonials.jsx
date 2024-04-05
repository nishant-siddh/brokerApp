import React, { useState } from "react";
import { LiaCommentsSolid } from "react-icons/lia";
import testimonial1 from "../assets/testimonial1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const testimonials = [
        {
            id: 1,
            name: "Jaspreet Bhamra",
            photo: testimonial1, // Placeholder photo URL
            content:
                "“: The property consultant app has transformed my business operations. Its user-friendly interface ensures a hassle-free experience, even for those with limited tech proficiency. Notably reliable, the app's stability and speed contribute to efficient daily tasks, allowing me to respond promptly to client needs.”",
        },
        {
            id: 2,
            name: "Saurab Jain",
            photo: testimonial2, // Placeholder photo URL
            content:
                "“I've been using the property consultant app for my business, and I must say it has greatly simplified my workflow. The user interface is clean and intuitive, making it easy to navigate even for someone like me who isn't very tech-savvy”",
        },
        {
            id: 3,
            name: "Sidhartha Tyagi",
            photo: testimonial3, // Placeholder photo URL
            content:
                "“The property listings are comprehensive and well-organized, making it easy to find relevant options for my clients. The app's search functionality is robust, allowing me to filter properties based on specific criteria, saving me valuable time.”",
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="container mx-auto lg:px-10 px-5 sm:my-28 my-20">
            <p className="flex items-center justify-center gap-2 text-[#5178e8]">
                <LiaCommentsSolid className="text-3xl font-bold" />
                <span className="text-lg font-semibold tracking-wider">FEEDBACKS</span>
            </p>
            <p className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-3xl mx-auto my-10 font-medium">
                What people are <br /> talking about.
            </p>

            <Slider {...settings} className='w-full'>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="mx-auto max-w-full w-full">
                        <div className="bg-white rounded-lg p-6 testimonial-content px-10">
                            <p className="lg:text-2xl text-xl grey text-center mb-10">
                                {testimonial.content}
                            </p>
                            <div className="flex items-start justify-center">
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-10 rounded-full"
                                />
                                <p className="text-lg ml-4 grey">{testimonial.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
