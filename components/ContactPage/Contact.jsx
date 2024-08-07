"use client"
import React from "react";

// components
import Navbar from "../CoreComponents/Navbar";
import HeroElement from "../CoreComponents/HeroElement";
import ContactForm from "./ContactForm";
import Footer from "../CoreComponents/Footer";

const Contact = () => {
    return (
        <>
            <Navbar />
            <HeroElement 
                hBg="bg-contactUsBg"
                hImage="/ContactUs/sideImage.png"
                hTitle="Contact Us"
                hDescription="Have a burning culinary question, 
                suggestion, craving a particular recipe or just 
                want to say hello? We'd love to hear from you! 
                Drop us a message using the form below or connect 
                with us on social media. Our team is here to help 
                and eager to engage with a foodie. Let's connect and 
                cook up something delicious together!"
            />
            <ContactForm />
            <div className="w-full bg-orange/60 h-2"></div>
            <Footer />
        </>
    )
}

export default Contact;