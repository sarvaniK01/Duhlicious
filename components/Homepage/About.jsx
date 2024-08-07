import React from "react";
import Image from "next/image";

// components
import Heading from "../CoreComponents/Heading";
import Button from "../CoreComponents/Button";

// images
import aboutBg from "../../public/homePage/aboutUs/aboutBg.png"

const AboutUs = () => {
    return (
        <section className="bg-white relative">
            <div className="container mx-auto px-6 py-20 lg:py-28 lg:px-24">
                <Heading text="About Us" color="text-orange" />
                <div className="lg:mt-24 relative">
                    <Image src={aboutBg} alt="about-bg" className="hidden lg:block" />
                    <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-black/90 pt-14 px-3 lg:py-14 lg:px-20 lg:w-[80%] 2xl:w-[70%] 3xl:w-[55%] rounded-2xl flex flex-col justify-center">
                        <p className="text-black lg:text-white font-lora font-medium xl:text-2xl text-center mb-12">
                            Welcome to Duhlicious! We believe cooking should be delightful and hassle-free. Our website offers original recipes for every palate and skill level, from quick weeknight dinners to indulgent weekend treats. With step-by-step instructions, handy tips, and vibrant visuals, we make your culinary journey enjoyable and empowering. Say goodbye to boring meals and hello to excitement with Duhlicious!
                        </p>
                        <Button text="Know More" link="/about" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;