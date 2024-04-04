import React, { useState } from "react";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import testimonial1 from '../assets/testimonial1.jpeg';
import testimonial2 from '../assets/testimonial2.jpeg';
import testimonial3 from '../assets/testimonial3.jpeg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Jaspreet Bhamra',
            photo: testimonial1, // Placeholder photo URL
            content: '“: The property consultant app has transformed my business operations. Its user-friendly interface ensures a hassle-free experience, even for those with limited tech proficiency. Notably reliable, the app\'s stability and speed contribute to efficient daily tasks, allowing me to respond promptly to client needs.”',
        },
        {
            id: 2,
            name: 'Saurab Jain',
            photo: testimonial2, // Placeholder photo URL
            content: '“I\'ve been using the property consultant app for my business, and I must say it has greatly simplified my workflow. The user interface is clean and intuitive, making it easy to navigate even for someone like me who isn\'t very tech-savvy”',
        },
        {
            id: 3,
            name: 'Sidhartha Tyagi',
            photo: testimonial3, // Placeholder photo URL
            content: '“The property listings are comprehensive and well-organized, making it easy to find relevant options for my clients. The app\'s search functionality is robust, allowing me to filter properties based on specific criteria, saving me valuable time.”',
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container mx-auto lg:px-10 px-5 my-28">
            <p className="flex items-center justify-center gap-2 text-[#5178e8]">
                <LiaCommentsSolid className="text-3xl font-bold" />
                <span className="text-lg font-semibold tracking-wider">
                    FEEDBACKS
                </span>
            </p>
            <p className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-3xl mx-auto my-10 font-medium">
                What people are <br /> talking about.
            </p>

            <div className="relative bg-transparent">
                <div className="max-w-5xl mx-auto relative overflow-hidden testimonial-container">
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                        <button onClick={prevTestimonial} className="bg-transparent text-gray-500 rounded-full p-2 focus:outline-none hover:bg-gray-200 transition duration-300">
                            <FaChevronLeft className="h-8 w-8" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <button onClick={nextTestimonial} className="bg-transparent text-gray-500 rounded-full p-2 focus:outline-none hover:bg-gray-200 transition duration-300">
                            <FaChevronRight className="h-8 w-8" />
                        </button>
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <div className="bg-white rounded-lg p-6 testimonial-content px-10">
                            <p className="lg:text-2xl text-xl grey text-center min-h-[180px]">{testimonials[currentTestimonial].content}</p>
                            <div className="flex items-start justify-center my-4">
                                <img src={testimonials[currentTestimonial].photo} alt={testimonials[currentTestimonial].name} className="w-10 rounded-full" />
                                <p className="text-lg ml-4 grey">{testimonials[currentTestimonial].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
