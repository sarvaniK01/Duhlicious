'use client'
import React from 'react'
import Image from 'next/image';

// libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
import tData from "../../data/homepageTestimonials.json"

// components
import Heading from "../CoreComponents/Heading";
import TestimonialsCard from "../Cards/TestimonialsCard";

// images
import leftArrow from "../../public/icons/testimonialLeftArrow.svg";
import rightArrow from "../../public/icons/testimonialRightArrow.svg";

function SampleWhiteArrow(props) {
    const { style, onClick, arrow, className2 } = props;
    return (
        <div
            className={`${className2} hidden`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <Image src={arrow} alt={`${arrow}`} />
        </div>
    );
}

const Testimonials = () => {
    var settings = {
        infinite: true,
        speed: 700,
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleWhiteArrow arrow={rightArrow} className2="w-fit absolute right-[-7%] top-[48%]" />,
        prevArrow: <SampleWhiteArrow arrow={leftArrow} className2="w-fit absolute left-[-7%] top-[48%]" />,
        className: ' mx-auto',
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <SampleWhiteArrow arrow={rightArrow} className2="w-fit absolute right-[-6%] top-[48%]" />,
                    prevArrow: <SampleWhiteArrow arrow={leftArrow} className2="w-fit absolute left-[-6%] top-[48%]" />,
                }
            },
        ]
    };

    return (
        <section className="bg-white" id="testimonials">
            <div className="container mx-auto py-20 px-6 lg:py-28 lg:px-24">
                <div className="xl:w-[30%] mx-auto">
                    <Heading text="Word On The Internet" color="text-orange" />
                </div>
                {/* Mobile */}
                <div className="mt-20 2xl:hidden grid grid-cols-1 xl:grid-cols-2 gap-y-24 lg:gap-y-12 mx-auto md:mx-20 md:my-12 lg:mx-0 lg:my-0 lg:mt-12">
                        {
                            tData.map((item) => {
                                return (
                                    <div key={item.id} className='mx-auto'>
                                        <TestimonialsCard
                                            tId={item.id}
                                            tDesc={item.userDescription}
                                            tImage={item.userImage}
                                            tName={item.userName}
                                            tRecipes={item.userRecipes}
                                        />
                                    </div>

                                )
                            })
                        }
                </div>

                {/* Desktop */}
                <div className="hidden 2xl:block mt-20 2xl:px-20 3xl:px-40">
                    <Slider
                        {...settings}
                    >
                        {
                            tData.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <TestimonialsCard
                                            tId={item.id}
                                            tDesc={item.userDescription}
                                            tImage={item.userImage}
                                            tName={item.userName}
                                            tRecipes={item.userRecipes}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    
                </div>
            </div>
        </section>
    )
}

export default Testimonials;