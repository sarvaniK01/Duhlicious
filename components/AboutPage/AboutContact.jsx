import React from "react";

// components
import Button from "../CoreComponents/Button"

const AboutContact = () => {
    return (
        <div className="container mx-auto py-20 px-7 lg:px-24">
            <div className="bg-contactUsBg bg-no-repeat bg-cover py-28 rounded-3xl">
                <div className="flex flex-col justify-center text-center">
                    <p className="mx-auto font-playfairDisplay text-white w-[80%] lg:w-full text-5xl lg:text-6xl font-bold">
                        We&apos;d Love to Hear From You
                    </p>
                    <p className="my-12 w-[85%] lg:w-[65%] mx-auto text-white font-lora font-medium text-xl lg:text-2xl">
                        Reach Out for Recipe Requests, Collaboration Inquiries, or Just to Say Hello.
                        Drop Us a Line and Let&apos;s Spice Things Up Together!
                    </p>
                    <Button
                        text="Contact Us"
                        link="/"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutContact