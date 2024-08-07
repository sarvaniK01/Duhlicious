import React from "react";

// data
import categoryData from "../../data/homepageCategories.json";

// components
import Heading from "../CoreComponents/Heading";
import CategoriesCard from "../Cards/CategoriesCard"

const SearchByCategory = () => {
    return (
        <section className="bg-searchByCategoryBg bg-no-repeat bg-cover">
            <div className="container mx-auto px-6 py-20 lg:px-24 lg:py-28">
                <Heading
                    text="Search by category"
                    color="text-white"
                />
                
                {/* Mobile */}
                <div className="lg:hidden">
                    <div className="gridContainer flex pt-12">
                        {
                            categoryData.map((category) => {
                                return (
                                    <div key={category.id} className="gridItem2">
                                        <CategoriesCard
                                            link={category.link}
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
                <div className="hidden lg:flex mt-14 gridContainer">
                    {
                        categoryData.map((category) => {
                            return (
                                <div key={category.id} className="gridItem">
                                    <CategoriesCard
                                        link={category.link}
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
        </section>
    )
}

export default SearchByCategory;