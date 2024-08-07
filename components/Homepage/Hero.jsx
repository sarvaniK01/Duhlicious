import React from "react"

// components
import Button from "@/components/CoreComponents/Button";

const Hero = () => {
    return (
        <section className="bg-homePageHeroBg bg-no-repeat bg-cover h-screen">
            {/* Mobile */}
            <div className="lg:hidden py-5 px-6 md:py-7 md:px-12 lg:px-16 absolute mt-20 top-[50%] -translate-y-1/2 text-white flex flex-col -z-1">
                <p className="mx-auto font-playfairDisplay font-semibold text-5xl lg:text-3xl text-center">
                    Hello
                </p>
                <p className="mx-auto font-playfairDisplay font-semibold text-5xl text-center">
                    Dear Foodie!
                </p>
                <p className="mx-auto font-playfairDisplay font-semibold text-5xl pt-5 text-center">
                    We&apos;re Duhlicious
                </p>
                <p className="mx-auto font-lora font-medium text-2xl text-center pt-12 pb-14">
                    Looking for some quick recipes or want to make a new dish for lunch? You&apos;ve arrived to the right place!!
                </p>
                <Button
                    link="/recipes"
                    text="Recipes"
                />
            </div>

            {/* Desktop */}
            <div className="hidden lg:block container mx-auto absolute my-10 xl:my-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-24">
                <div className="text-white">
                    <p className="mx-auto font-playfairDisplay font-semibold text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-center">
                        Hello Dear Foodie!
                    </p>
                    <p className="mx-auto font-playfairDisplay font-semibold text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl pt-4 xl:pt-5 text-center">
                        We&apos;re Duhlicious
                    </p>
                    <p className="mx-auto font-lora font-medium text-lg xl:text-xl 3xl:text-2xl w-[50%] xl:w-[35%] text-center pt-8 xl:pt-10 2xl:pt-12">
                        Looking for some quick recipes or want to make a new dish for lunch? You&apos;ve arrived to the right place!!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
