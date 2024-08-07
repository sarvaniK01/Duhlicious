"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// libraries
import { AnimatePresence, motion } from "framer-motion";

// images
import logo from "../../public/Navbar/logo.svg"
import downArrow1 from "../../public/icons/menu-icon1.svg";
import downArrow2 from "../../public/icons/menu-icon2.svg";


const Navbar = () => {    
    const [open, setOpen] = useState(false)
    const menuVars = {
        initial: {
            y: '-100vh',
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }

    function disable() {
        document.querySelector('.scrollable').addEventListener('wheel', preventScroll);
    }

    function enable() {
        document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);
    }

    return (
        <div className="scrollable relative">
            {/* Mobile & tablet */}
            <nav className='xl:hidden w-full absolute py-5 px-6 md:py-7 md:px-12 lg:px-16 flex flex-row justify-between z-10 mobileNav'>
                <Image src={logo} alt='logo' className='w-[100px]' />
                <div className='my-auto'>
                    <div onClick={() => {
                        setOpen(true);
                        disable()
                    }}>
                        <Image src={downArrow1} alt='menu-icon' className={`${open ? 'hidden' : 'block'}`} />
                    </div>
                    <div onClick={() => {
                        setOpen(false);
                        enable()
                    }}>
                        <Image src={downArrow2} alt='close-icon' className={`${open ? 'block' : 'hidden'}`} />
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            variants={menuVars}
                            initial={{ opacity: 0, y: -100 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ type: "backOut", stiffness: 100 }}
                        >
                            <div className={`relative flex flex-col bg-homePageHeroBgMobile bg-no-repeat bg-cover h-screen bg-white w-full z-10 gap-y-12 justify-center w-full font-semibold text-white`}>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 font-playfairDisplay text-2xl gap-y-10 md:gap-y-14 lg:gap-x-14 justify-center mx-auto w-fit lg:mt-14 text-2xl md:text-4xl lg:text-2xl'>
                                    {/* Home */}
                                    <Link href="/" className="my-auto" onClick={() => {
                                        setOpen(false)
                                        enable()
                                    }}>
                                        <div className="hover:bg-orange mx-auto lg:mx-0 transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                                            <li>Home</li>
                                        </div>
                                    </Link>

                                    {/* About */}
                                    <Link href="/about" className="my-auto" onClick={() => {
                                        setOpen(false)
                                        enable()
                                    }}>
                                        <div className="hover:bg-orange mx-auto lg:mx-0 transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                                            <li>About</li>
                                        </div>
                                    </Link>

                                    {/* Categories */}
                                    <Link href="/#categories" className="my-auto" onClick={() => {
                                        setOpen(false)
                                        enable()
                                    }}>
                                        <div className="hover:bg-orange mx-auto lg:mx-0 transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                                            <li>Categories</li>
                                        </div>
                                    </Link>

                                    {/* Recipes */}
                                    <Link href="/recipes" className="my-auto" onClick={() => {
                                        setOpen(false)
                                        enable()
                                    }}>
                                        <div className="hover:bg-orange mx-auto lg:mx-0 transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                                            <li>Recipes</li>
                                        </div>
                                    </Link>

                                    {/* Testimonials */}
                                    <Link href="/#testimonials" className="my-auto" onClick={() => {
                                        setOpen(false)
                                        enable()
                                    }}>
                                        <div className="hover:bg-orange mx-auto lg:mx-0 transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                                            <li>Testimonials</li>
                                        </div>
                                    </Link>

                                    {/* Contact */}
                                    <Link href="/contact" className="my-auto" onClick={() => {
                                        setOpen(false)
                                        enable()
                                    }}>
                                        <div className="hover:bg-orange mx-auto lg:mx-0 transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                                            <li>Contact</li>
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            {/* Desktop */}
            <nav className="hidden xl:block absolute left-[50%] -translate-x-1/2 w-full container mx-auto bg-transparent py-8 px-7 xl:py-10 xl:px-24 2xl:py-14 2xl:px-24 font-playfairDisplay font-semibold text-white text-xl 2xl:text-2xl">
                <ul className="flex flex-row justify-between w-full">
                    {/* Home */}
                    <Link href="/" className="my-auto">
                        <div className="hover:bg-orange transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                            <li>Home</li>
                        </div>
                    </Link>

                    {/* About */}
                    <Link href="/about" className="my-auto">
                        <div className="hover:bg-orange transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                            <li>About</li>
                        </div>
                    </Link>

                    {/* Categories */}
                    <Link href="/#categories" className="my-auto">
                        <div className="hover:bg-orange transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                            <li>Categories</li>
                        </div>
                    </Link>

                    {/* Logo */}
                    <Link href="/">
                        <Image src={logo} alt="duhlicious-logo" className="w-[105px] 2xl:w-auto" />
                    </Link>

                    {/* Recipes */}
                    <Link href="/recipes" className="my-auto">
                        <div className="hover:bg-orange transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                            <li>Recipes</li>
                        </div>
                    </Link>

                    {/* Testimonials */}
                    <Link href="/#testimonials" className="my-auto">
                        <div className="hover:bg-orange transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                            <li>Testimonials</li>
                        </div>
                    </Link>

                    {/* Contact */}
                    <Link href="/contact" className="my-auto">
                        <div className="hover:bg-orange transition-all duration-300 ease-in delay-400 w-fit rounded-2xl py-2 px-4">
                            <li>Contact</li>
                        </div>
                    </Link>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar;

