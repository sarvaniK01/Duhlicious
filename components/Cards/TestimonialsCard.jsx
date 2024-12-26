import Link from "next/link";
import Image from "next/image";

// images
import leftQuotations from "../../public/icons/left-quotations.svg";
import rightQuotations from "../../public/icons/right quotations.svg";

const TestimonialsCard = ({tId, tDesc, tImage, tName, tRecipes, tRecipeName }) => {
    return (
        <div>
            {/* Mobile */}
            <div className="lg:hidden relative h-[750px] z-20 my-7 mx-auto">
                {/* above div */}
                <div className="testimonialDiv1 bg-white z-40 px-6 py-10 h-[480px] rounded-2xl flex flex-col justify-between">
                    <div className="relative">
                        <Image src={leftQuotations} alt='left-quotations' className="absolute left-0 -top-5" />
                    </div>
                    <p className="font-lora font-medium w-[75%] text-center mx-auto py-7 text-sm md:text-lg">
                        {tDesc}
                    </p>
                    <div className="relative">
                        <Image src={rightQuotations} alt='left-quotations' className="absolute right-0 -bottom-5" />
                    </div>
                </div>

                {/* user image */}
                <div className="userImage">
                    <img src={tImage} alt={`${tName}-image`} className="absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-[65%] z-30" />
                </div>

                {/* below div */}
                <div className="testimonialDiv2 bg-transparent z-10 absolute -bottom-20 px-10 py-20 rounded-2xl w-[100%] h-[420px] flex flex-col justify-between">
                    <p className="font-playfairDisplay font-bold text-2xl text-black text-center mt-14">
                        {tName}
                    </p>
                    <div className="grid grid-cols-2 mx-auto gap-x-5 gap-y-5 py-5">
                        {
                            tRecipes.map((tRecipe, key) => {
                                return (
                                    <Link key={key} href={tRecipe.recipeLink} target="_blank" className="testimonialRecipeImage">
                                        <img src={tRecipe.recipeImage} alt="recipe" className="w-[85px]" />
                                        <p className="text-white bg-black rounded-full font-bold px-2 py-2 font-lora text-xs w-[85px] mx-auto text-center hidden testimonialRecipeName">{tRecipe.recipeName}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block relative w-[520px] 2xl:w-[540px] h-[750px] z-20 testimonialCard mt-7 2xl:mx-auto 3xl:mx-5">
                {/* above div */}
                <div className="testimonialDiv1 bg-white z-40 px-10 py-10 rounded-2xl h-[375px] flex flex-col justify-between">
                    <div className="relative">
                        <Image src={leftQuotations} alt='left-quotations' className="absolute left-0 -top-5" />
                    </div>
                    <p className="font-lora font-medium w-[80%] mx-auto text-center">
                        {tDesc}
                    </p>
                    <div className="relative">
                        <Image src={rightQuotations} alt='left-quotations' className=" absolute right-0 -bottom-5" />
                    </div>
                </div>

                {/* user image */}
                <div className="userImage">
                    <img src={tImage} alt={`${tName}-image`} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30" />
                </div>

                {/* below div */}
                <div className="testimonialDiv2 bg-transparent z-10 absolute bottom-10 px-10 py-16 rounded-2xl w-[100%] h-[375px] flex flex-col justify-between">
                    <p className="font-playfairDisplay font-bold text-3xl text-black text-center mt-14">
                        {tName}
                    </p>
                    <div className="flex flex-row justify-between">
                        {
                            tRecipes.map((tRecipe, key) => {
                                return (
                                    <Link key={key} href={tRecipe.recipeLink} target="_blank" className="testimonialRecipeImage">
                                        <img src={tRecipe.recipeImage} alt="recipe" className="w-[100px] h-[100px] 2xl:w-[115px] 2xl:h-[115px] innerImage" />
                                        <p className="text-white bg-black rounded-full font-bold px-1.5 py-2.5 font-lora text-xs 2xl:text-[14.5px] w-[100px] 2xl:w-[115px] mx-auto text-center hidden testimonialRecipeName">{tRecipe.recipeName}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TestimonialsCard;