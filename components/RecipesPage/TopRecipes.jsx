"use client"
import React from "react";
import Image from "next/image";

// libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
import recipesData from "../../data/recipepageTopRecipes.json";

// components
import Heading from "../CoreComponents/Heading";
import RecipeCard from "../Cards/RecipeCard";

// images
import rightArrow from "../../public/icons/right-arrow.svg";
import leftArrow from "../../public/icons/left-arrow.svg";

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

const TopRecipes = () => {
    var settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleWhiteArrow arrow={rightArrow} className2="w-fit absolute right-[0%] top-[45%]" />,
        prevArrow: <SampleWhiteArrow arrow={leftArrow} className2="w-fit absolute z-40 left-[0%] 3xl:left-[1%] top-[45%]" />,
        className: 'mt-32',
    };

    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 py-20 lg:px-24 lg:py-28">
                <Heading
                    text="Top Recipes"
                    color="text-orange"
                />

                {/* mobile */}
                <div className="2xl:hidden mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-y-48 md:gap-x-10 pt-40">
                        {
                            recipesData.map((recipe) => {
                                return (
                                    <div key={recipe.id} className="">
                                        <RecipeCard
                                            rId={recipe.id}
                                            rLink={recipe.recipeLink}
                                            rImage={recipe.recipeImage}
                                            rDots={recipe.difficultyDots}
                                            rName={recipe.recipeName}
                                            rTime={recipe.time}
                                            rServings={recipe.servings}
                                            rCalories={recipe.calories}
                                            rCategories={recipe.categories}
                                        />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden 2xl:flex mx-auto flex-col justify-between gap-y-20">
                    <Slider
                        {...settings}
                    >
                        {
                            recipesData.map((recipe) => {
                                return (
                                    <div key={recipe.id} className="my-10 xl:mx-[-50px] 3xl:mx-[-45px]">
                                        <RecipeCard
                                            rId={recipe.id}
                                            rLink={recipe.recipeLink}
                                            rImage={recipe.recipeImage}
                                            rDot1={recipe.dot1}
                                            rDot2={recipe.dot2}
                                            rDot3={recipe.dot3}
                                            rName={recipe.recipeName}
                                            rTime={recipe.time}
                                            rServings={recipe.servings}
                                            rCalories={recipe.calories}
                                            rCategories={recipe.categories}
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

export default TopRecipes;