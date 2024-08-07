import React from "react";

// components
import Heading from "../CoreComponents/Heading";

const GoalsAndObjectives = () => {
    return (
        <div className="bg-goalsAndObjectivesBg bg-no-repeat bg-cover">
            <div className="container mx-auto px-6 py-20 lg:px-24 lg:py-28">
                <Heading text="Goals & Objectives" color="text-white" />
                <ol className="mt-14 lg:mt-32 flex flex-col gap-y-16 text-white list-decimal font-playfairDisplay text-2xl lg:text-3xl w-[80%] lg:w-[90%] 3xl:w-[70%] mx-auto">
                    <li>
                        <p className="font-semibold">
                            Enhance User Experience:
                        </p>
                        <p className="font-lora text-xl lg:text-2xl font-regular mt-3 lg:mt-6">
                            We are dedicated to continuously improving the user experience
                            on our website, making it easier for visitors to navigate, search for recipes,
                            and interact with our content. We value user feedback and actively seek ways
                            to enhance the functionality and usability of our platform.
                        </p>
                    </li>

                    <li>
                        <p className="font-semibold">
                            Promote Healthy and Sustainable Eating:
                        </p>
                        <p className="font-lora text-xl lg:text-2xl font-regular mt-3 lg:mt-6">
                            We aim to promote healthy and sustainable eating habits by offering
                            nutritious recipes made with fresh, seasonal ingredients whenever possible.
                            We believe in the importance of mindful eating and strive to provide resources
                            and information to support our audience in making informed food choices.
                        </p>
                    </li>

                    <li>
                        <p className="font-semibold">
                            Promote Cultural Diversity:
                        </p>
                        <p className="font-lora text-xl lg:text-2xl font-regular mt-3 lg:mt-6">
                            Celebrating the rich tapestry of global cuisines and promoting cultural
                            appreciation through our recipe selection is a fundamental objective.
                            We aim to showcase dishes from around the world, honoring diverse traditions and flavors.
                        </p>
                    </li>

                    <li>
                        <p className="font-semibold">
                            Empower Home Cooks: 
                        </p>
                        <p className="font-lora text-xl lg:text-2xl font-regular mt-3 lg:mt-6">
                            Our overarching objective is to empower home cooks to unleash their culinary creativity,
                            build confidence in the kitchen, and create memorable dining experiences for themselves
                            and their loved ones through the joy of cooking.
                        </p>
                    </li>

                    <li>
                        <p className="font-semibold">
                            Cultivate Brand Loyalty:
                        </p>
                        <p className="font-lora text-xl lg:text-2xl font-regular mt-3 lg:mt-6">
                            Build trust and loyalty among users by consistently delivering high-quality content,
                            engaging with our community, and providing exceptional customer support.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default GoalsAndObjectives