import React from "react";
import Image from "next/image";

// components
import Heading from "../CoreComponents/Heading"

// images
import img1 from "../../public/About/whatToExpect/w1.webp";
import img2 from "../../public/About/whatToExpect/w2.webp";
import img3 from "../../public/About/whatToExpect/w3.webp";
import img4 from "../../public/About/whatToExpect/w4.webp";

const WhatToExpect = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-20 lg:px-24 lg:py-28">
                <Heading
                    text="What to Expect From Us"
                    color="text-orange" 
                />
                <ol className="mt-14 lg:mt-20 text-black font-lora font-regular text-xl lg:text-2xl list-decimal mx-auto w-[80%] lg:w-[70%]">
                    <li className="mb-10">
                        Dive into our diverse collection of original recipes
                        spanning from classic comfort foods to innovative culinary creations.
                    </li>
                    <li className="mb-10">
                        Clear instructions and helpful tips ensure every dish is achievable, regardless of your skill level.
                    </li>
                    <li className="mb-10">
                        Discover new flavors, cooking techniques, and meal ideas to elevate your kitchen repertoire.
                    </li>
                    <li>
                        Prepare for tantalizing aromas, mouthwatering flavors, and endless culinary inspiration at your fingertips. Happy Cooking!&quot;
                    </li>
                </ol>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mx-auto mt-14 gap-y-10 lg:gap-y-0 md:gap-x-4 lg:mt-20">
                    <Image src={img1} alt="w1" className="mx-auto w-[85%] lg:w-[100%] xl:w-[85%] rounded-2xl"/>
                    <Image src={img2} alt="w2" className="mx-auto w-[85%] lg:w-[100%] xl:w-[85%] rounded-2xl" />
                    <Image src={img3} alt="w3" className="mx-auto w-[85%] lg:w-[100%] xl:w-[85%] rounded-2xl" />
                    <Image src={img4} alt="w4" className="mx-auto w-[85%] lg:w-[100%] xl:w-[85%] rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

export default WhatToExpect;