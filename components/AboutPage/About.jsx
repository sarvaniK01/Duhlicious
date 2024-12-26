import React from "react";

// components
import Navbar from "../CoreComponents/Navbar";
import HeroElement from "../CoreComponents/HeroElement";
import WhatToExpect from "./WhatToExpect";
import GoalsAndObjectives from "./GoalsAndObjectives";
import AboutContact from "./AboutContact";
import Footer from "../CoreComponents/Footer";
import OrangeDivider from "../CoreComponents/OrangeDivider";

const About = () => {
    return (
        <div className="">
            <Navbar />
            <HeroElement 
                hBg="bg-aboutBg"
                hImage="/About/sideImage.webp"
                hTitle="About Us"
                hDescription="Welcome to Duhlicious, your recipe haven! 
                We're devoted to sharing global flavors and inspiring cooks 
                of all levels. Explore new tastes, techniques, and culinary 
                adventures with us. Whether you're a seasoned chef or a kitchen 
                novice, find mouthwatering dishes, helpful tips, and culinary magic 
                here. Join us on this flavorful journey!"
            />
            <WhatToExpect />
            <GoalsAndObjectives />
            <AboutContact />
            <OrangeDivider />
            <Footer />
        </div>
    )
}

export default About;