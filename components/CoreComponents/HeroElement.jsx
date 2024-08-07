import "../../app/globals.css";
import React from "react";

// components
import Navbar from "./Navbar";

const HeroElement = ({hBg, hImage, hTitle, hDescription}) => {
    return (
        <section className={`${hBg} bg-no-repeat bg-cover h-screen`}>
            <div className="container absolute mt-24 mb-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col flex-col-reverse md:flex-row justify-between gap-y-10 md:gap-y-0 md:gap-x-10 lg:gap-x-20 z-1">
                <img src={hImage} alt={`${hTitle}-img`} className="w-[85%] md:w-[45%] md:h-[45%] md:my-auto xl:w-[40%] 2xl:w-[35%] mx-auto lg:mx-0"/>
                <div className="my-auto text-white text-center md:text-left flex flex-col gap-y-5 lg:gap-y-10">
                    <h1 className="font-playfairDisplay font-bold text-5xl xl:text-6xl 2xl:text-7xl">{hTitle}</h1>
                    <p className="font-lora font-regular text-lg lg:text-xl 3xl:text-2xl">{hDescription}</p>
                </div>
            </div>
        </section>
    )
}

export default HeroElement;
