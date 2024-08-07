"use client"
import React from "react";
import Image from "next/image";

// libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
import homepageRecipesData from "../../data/homepageRecipes.json";

// components
import Heading from "../CoreComponents/Heading";
import RecipeCard from "../Cards/RecipeCard";
import Button from "../CoreComponents/Button";
import OrangeDivider from "../CoreComponents/OrangeDivider";

// images
import rightArrowWhite from "../../public/icons/white-right-arrow.svg";
import leftArrowWhite from "../../public/icons/white-left-arrow.svg";

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

const Recipes = () => {
    var settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleWhiteArrow arrow={rightArrowWhite} className2="w-fit absolute right-[-3%] top-[40%]" />,
        prevArrow: <SampleWhiteArrow arrow={leftArrowWhite} className2="w-fit absolute left-[-3%] 3xl:left-[-2.5%] top-[40%]" />,
        className: 'mt-32',
    };

    return (
        <section className="bg-white xl:bg-homePageRecipesBg bg-cover bg-no-repeat overflow-x-hidden">
            <div className="container mx-auto py-20 px-6 md:py-28 md:px-7 lg:px-36 2xl:px-40 3xl:px-44">
                <Heading text="Recipes" color="text-orange xl:text-white" />
                {/* mobile */}
                <div className="2xl:hidden mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-y-48 md:gap-x-10 pt-40">
                        {
                            homepageRecipesData.map((recipe) => {
                                return (
                                    <div key={recipe.id} className="">
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
                    </div>
                    <div className="flex justify-between mt-20">
                        <Button text="Recipes Page" link="/recipes" />
                    </div>
                </div>
                
                {/* Desktop */}
                <div className="hidden 2xl:flex mx-auto flex-col justify-between gap-y-20">
                    <Slider
                        {...settings}
                    >
                        {
                            homepageRecipesData.map((recipe) => {
                                return (
                                    <div key={recipe.id} className="mx-5 xl:mx-[-50px] 3xl:mx-[-45px]">
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
                    <Button text="Recipes Page" link="/recipes" />
                </div>
                
            </div>
            <OrangeDivider oClass="hidden lg:block xl:hidden" />
        </section>
    )
}

export default Recipes;