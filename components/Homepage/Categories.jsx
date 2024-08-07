"use client"
import React from "react";
import Image from "next/image";

// libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
import homepageCategoriesData from "../../data/homepageCategories.json"

// components
import OrangeDivider from "../CoreComponents/OrangeDivider";
import Heading from "../CoreComponents/Heading";
import CategoriesCard from "../Cards/CategoriesCard"

// images
import rightArrow from "../../public/icons/right-arrow.svg"
import leftArrow from "../../public/icons/left-arrow.svg"

function SampleArrow(props) {
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

const Categories = () => {
    var settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleArrow arrow={rightArrow} className2="w-fit absolute right-[-3%] top-[30%]"/>,
        prevArrow: <SampleArrow arrow = {leftArrow } className2 = "w-fit absolute left-[-5%] top-[30%]" />,
        className: 'mt-24 pb-12',
    };

    return (
        <section id="categories" className="bg-white">
            <OrangeDivider
                oClass="hidden xl:block" 
            />
            {/* Mobile */}
            <div className="xl:hidden px-6 py-20 lg:px-0 bg-searchByCategoryBg">
                <Heading text="Categories" color="text-white" />
                <div className="gridContainer flex pt-12">
                    {
                        homepageCategoriesData.map((category) => {
                            return (
                                <div key={category.id} className="gridItem2">
                                    <CategoriesCard
                                        // link={category.link}
                                        textColor="text-white"
                                        title1={category.title1}
                                        title2={category.title2}
                                        image={category.image}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden xl:block container mx-auto py-28 px-36 2xl:px-40 3xl:px-44">
                <Heading text="Categories" color="text-orange" />
                <Slider
                    {...settings}
                >
                    {
                        homepageCategoriesData.map((category) => {
                            return (
                                <div key={category.id}>
                                    <CategoriesCard
                                        link={category.link}
                                        textColor="text-black"
                                        title1={category.title1}
                                        title2={category.title2}
                                        image={category.image}
                                    />
                                </div>   
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Categories;