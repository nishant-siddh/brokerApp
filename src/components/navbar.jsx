import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false);
    // const [activeSection, setActiveSection] = useState("");

    const changeBackground = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    const sections = [
        "home",
        "app-features",
        "about-us",
        "contact-us"
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Find the section in view based on scroll position
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
                }
                return false;
            });

            // Set the active section
            setActiveSection(currentSection || "");
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    function handleSectionScroll() {
        setMenuIcon(false)

    }

    return (
        <nav
            className={`fixed w-[100%] top-0 flex justify-center h-[130px] z-50 transition duration-300 ${isScrolled ? "bg-white Shadow" : "bg-transparent"
                } `}
        >
            <div className={`container mx-auto lg:px-11 px-5 flex justify-between items-center ${menuIcon ? 'navigationBar active' : 'navigationBar'}`}>
                <div>
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Broker app logo"
                            className="w-28 -ml-5 logoWithShadow cursor-pointer"
                        />
                    </NavLink>
                </div>
                <div>
                    <ul className="navigationList list hidden lg:flex gap-9 grey font-semibold text-[1.3rem] tracking-wide">
                        <img src={logo} alt="" className="lg:hidden block w-24 -ml-5 mb-10" />
                        {sections.map((section) => (
                            <>
                                <a href={`/bapp/#${section}`} className="nav-link" onClick={handleSectionScroll}>
                                    <li
                                        key={section}
                                        // className={`cursor-pointer capitalize hover:text-[#EA7846] ${activeSection === section && "text-[#EA7846]"}`}
                                    className={`cursor-pointer capitalize`}
                                    >
                                        {section.replace("-", " ")}
                                    </li>
                                </a>
                            </>
                        ))}
                        <div className="flex items-center gap-4 lg:hidden absolute bottom-10">
                            <span>Follow</span>
                            <div className="group">
                                <span className="w-fit block bg-white p-3 rounded-full group-hover:bg-[#ff92f2]">
                                    <FaTwitter className="text-[#81dfff] text-xl group-hover:text-white" />
                                </span>
                            </div>
                            <div className="group">
                                <span className="w-fit block bg-white p-3 rounded-full group-hover:bg-[#ff92f2]">
                                    <FaFacebook className="text-[#81dfff] text-xl group-hover:text-white" />
                                </span>
                            </div>
                            <div className="group">
                                <span className="w-fit block bg-white p-3 rounded-full group-hover:bg-[#ff92f2]">
                                    <FaLinkedin className="text-[#81dfff] text-xl group-hover:text-white" />
                                </span>
                            </div>
                            <div className="group">
                                <span className="w-fit block bg-white p-3 rounded-full group-hover:bg-[#ff92f2]">
                                    <CiInstagram className="text-[#81dfff] text-xl group-hover:text-white" />
                                </span>
                            </div>
                        </div>
                    </ul>
                    <div className="mobileMenuBtn">
                        <RxHamburgerMenu className="mobileMenuIcon openMenuIcon text-3xl" onClick={() => setMenuIcon(true)} />
                        <span className="mobileMenuIcon closeMenuOutline bg-white p-2 rounded-full" onClick={() => setMenuIcon(false)} >
                            <RxCross2 className=" text-xl" />
                        </span>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navigation;
