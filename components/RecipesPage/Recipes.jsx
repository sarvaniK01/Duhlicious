
// components
import Navbar from "../CoreComponents/Navbar";
import HeroElement from "../CoreComponents/HeroElement";
import TopRecipes from "./TopRecipes";
import SearchByCategory from "./SearchByCategory";
import Footer from "../CoreComponents/Footer"

const Recipes = () => {
    return (
        <>
            <Navbar />
            <HeroElement
                hBg="bg-recipePageBg"
                hImage="/RecipesPage/sideImage.webp"
                hTitle="Recipes"
                hDescription="Welcome to our recipe page, your go-to 
                destination for culinary inspiration! Explore our diverse 
                collection of mouthwatering recipes, carefully curated to 
                suit every taste and occasion. Each recipe is thoughtfully 
                crafted with clear instructions and vibrant visuals, ensuring 
                your culinary creations are nothing short of spectacular. 
                Let's cook up something extraordinary together!"
            />
            <TopRecipes />
            <SearchByCategory />
            <Footer />
        </>
    )
}

export default Recipes