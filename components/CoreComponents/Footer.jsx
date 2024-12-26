import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import footerLogo from "../../public/Footer/footer-logo.svg"
import twitterLogo from "../../public/Footer/twitter.svg"
import facebookLogo from "../../public/Footer/facebook.svg"
import instagramLogo from "../../public/Footer/instagram.svg"
import youtubeLogo from "../../public/Footer/youtube.svg"
import pinterestLogo from "../../public/Footer/pinterest.svg";
import emailLogo from "../../public/Footer/email.svg";

const Footer = () => {
    return (
        <footer className="">
            {/* Mobile */}
            <div className="lg:hidden flex flex-col justify-center gap-y-36 py-32 px-12">
                {/* top div */}
                <div className="flex flex-col">
                    <Link href="/">
                        <Image src={footerLogo} alt="footer-logo" className="w-[60%] md:w-[25%] mx-auto" />
                    </Link>
                    <div className="font-lora text-center text-xl font-medium text-black mt-5">
                        <p>For any queries</p>
                        <p>Write a mail to us at:</p>
                        <Link href="/" target="_blank" className="hover:underline">
                            <p>queries@duhlicious.com</p>
                        </Link>
                    </div>
                </div>

                {/* middle div */}
                <div className="grid grid-cols-2 gap-20 my-auto mx-auto">
                    <Link href="/" target="_blank">
                        <Image src={twitterLogo} alt="twitter-logo" className="w-[55px] h-[55px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                    </Link>
                    <Link href="/" target="_blank">
                        <Image src={facebookLogo} alt="facebook-logo" className="w-[55px] h-[55px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                    </Link>
                    <Link href="/" target="_blank">
                        <Image src={instagramLogo} alt="instagram-logo" className="w-[55px] h-[55px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                    </Link>
                    <Link href="/" target="_blank">
                        <Image src={youtubeLogo} alt="youtube-logo" className="w-[65px] h-[65px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                    </Link>
                    <Link href="/" target="_blank">
                        <Image src={pinterestLogo} alt="pinterest-logo" className="w-[55px] h-[55px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                    </Link>
                    <Link href="/" target="_blank">
                        <Image src={emailLogo} alt="email-logo" className="w-[55px] h-[55px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                    </Link>
                </div>

                {/* bottom div */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 my-auto mx-auto text-center">
                    <Link href="/">
                        <p className="font-playfairDisplay font-semibold text-black text-2xl xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                            Home
                        </p>
                    </Link>
                    
                    <Link href="/about">
                        <p className="font-playfairDisplay font-semibold text-black text-2xl xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                            About
                        </p>
                    </Link>

                    <Link href="/#categories">
                        <p className="font-playfairDisplay font-semibold text-black text-2xl xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                            Categories
                        </p>
                    </Link>

                    <Link href="/recipes">
                        <p className="font-playfairDisplay font-semibold text-black text-2xl xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                            Recipes
                        </p>
                    </Link>
                    
                    <Link href="/#testimonials">
                        <p className="font-playfairDisplay font-semibold text-black text-2xl lg:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                            Testimonials
                        </p>
                    </Link>
                    
                    <Link href="/contact">
                        <p className="font-playfairDisplay font-semibold text-black text-2xl lg:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                            Contact
                        </p>
                    </Link>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block bg-white pt-40 pb-24 px-24">
                <div className="container mx-auto">
                    <div className="flex flex-row justify-between">
                        {/* left div */}
                        <div className="basis-1/4">
                            <Link href="/">
                                <Image src={footerLogo} alt="footer-logo" className="w-[50%]" />
                            </Link>
                            <div className="font-lora font-medium text-black mt-5 3xl:text-2xl">
                                <p>For any queries</p>
                                <p>Write a mail to us at:</p>
                                <Link href="/" target="_blank" className="hover:underline">
                                    <p>queries@duhlicious.com</p>
                                </Link>
                            </div>
                        </div>

                        {/* center div */}
                        <div className="grid grid-cols-3 gap-14 xl:gap-20 my-auto basis-1/4">
                            <Link href="/" target="_blank">
                                <Image src={twitterLogo} alt="twitter-logo" className="w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] 3xl:w-[60px] 3xl:h-[60px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                            </Link>
                            <Link href="/" target="_blank">
                                <Image src={facebookLogo} alt="facebook-logo" className="w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] 3xl:w-[60px] 3xl:h-[60px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                            </Link>
                            <Link href="/" target="_blank">
                                <Image src={instagramLogo} alt="instagram-logo" className="w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] 3xl:w-[60px] 3xl:h-[60px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                            </Link>
                            <Link href="/" target="_blank">
                                <Image src={youtubeLogo} alt="youtube-logo" className="w-[50px] h-[50px] xl:w-[65px] xl:h-[65px] 3xl:w-[70px] 3xl:h-[70px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                            </Link>
                            <Link href="/" target="_blank">
                                <Image src={pinterestLogo} alt="pinterest-logo" className="w-[50px] h-[50px] xl:w-[55px] xl:h-[55px] 3xl:w-[60px] 3xl:h-[60px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                            </Link>
                            <Link href="/" target="_blank">
                                <Image src={emailLogo} alt="email-logo" className="w-[50px] h-[50px] xl:w-[55px] xl:h-[55px] 3xl:w-[60px] 3xl:h-[60px] hover:scale-110 transition-all duration-300 ease-in delay-400" />
                            </Link>
                        </div>

                        {/* right div */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-8 xl:gap-x-14 xl:gap-y-16 my-auto basis-1/4">
                            <Link href="/">
                                <p className="font-playfairDisplay font-semibold text-black text-xl xl:text-2xl 3xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                                    Home
                                </p>
                            </Link>
                            <Link href="/recipes">
                                <p className="font-playfairDisplay font-semibold text-black text-xl xl:text-2xl 3xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                                    Recipes
                                </p>
                            </Link>
                            <Link href="/about">
                                <p className="font-playfairDisplay font-semibold text-black text-xl xl:text-2xl 3xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                                    About
                                </p>
                            </Link>
                            <Link href="/#testimonials">
                                <p className="font-playfairDisplay font-semibold text-black text-xl xl:text-2xl 3xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                                    Testimonials
                                </p>
                            </Link>
                            <Link href="/#categories">
                                <p className="font-playfairDisplay font-semibold text-black text-xl xl:text-2xl 3xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                                    Categories
                                </p>
                            </Link>
                            <Link href="/contact">
                                <p className="font-playfairDisplay font-semibold text-black text-xl xl:text-2xl 3xl:text-3xl hover:scale-105 hover:text-orange transition-all duration-300 ease-in delay-400">
                                    Contact
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-orange/90 py-4">
                <p className="text-center font-playfairDisplay font-medium text-white text-xl">©Duhlicious, 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;