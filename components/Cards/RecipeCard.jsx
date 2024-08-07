"use client"
import Image from "next/image";
import Link from "next/link";

// images
import timerIcon from "../../public/icons/timer.svg";
import servingsIcon from "../../public/icons/servings.svg";
import caloriesIcon from "../../public/icons/calories.svg";

const RecipeCard = ({ rId, rLink, rImage, rDot1, rDot2, rDot3, rName, rTime, rServings, rCalories, rCategories}) => {
    return (
        <Link key={rId} href={rLink} className="2xl:w-fit overflow-x-hidden" alt={`${rName}-link`} target="_blank">
            <div className="cardHover 2xl:w-[420px] 3xl:w-[450px] 2xl:h-[300px] recipeCardShadow bg-white mx-auto rounded-2xl px-7 py-4 relative">
                {/* difficultyDots */}
                <div className="2xl:absolute 2xl:right-5 mt-9 mx-auto 2xl:mx-0 2xl:mt-0 w-fit flex flex-row gap-2">
                        <div className={`${rDot1} bg-green w-10 h-4 rounded-2xl`} ></div>
                        <div className={`${rDot2} bg-yellow w-10 h-4 rounded-2xl`} ></div>
                        <div className={`${rDot3} bg-red w-10 h-4 rounded-2xl`} ></div>
                </div>

                {/* Heading */}
                <p className="font-lora font-medium text-2xl md:text-xl 2xl:text-2xl md:text-center lg:text-left pt-8 md:pt-4 2xl:pt-10 text-black">{rName}</p>

                {/* Minutes, Servings and Calories */}
                <div className="mt-5 2xl:mt-8 flex flex-col gap-2">
                    <div className="flex flex-row gap-5">
                        <Image src={timerIcon} alt="timer-icon" />
                        <p className="text-black my-auto font-lora font-medium">{rTime}</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Image src={servingsIcon} alt="servings-icon"/>
                        <p className="text-black my-auto font-lora font-medium">{rServings}</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Image src={caloriesIcon} alt="icon"/>
                        <p className="text-black my-auto font-lora font-medium">{rCalories}</p>
                    </div>
                </div>

                {/* Categories */}
                <div className="mt-8 flex flex-row justify-center 2xl:justify-start gap-5">
                    {
                        rCategories.map((category, key) => {
                            return (
                                <div key={key} className="bg-orange w-fit rounded-2xl px-4 py-1.5">
                                    <p className="font-lora font-medium text-white text-center text-sm md:text-xs lg:text-md w-auto">{category}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="absolute top-[-35%] right-[50%] translate-x-1/2 2xl:top-[50%] 2xl:right-[-25%] 2xl:-translate-y-1/2 2xl:translate-x-0 w-[150px] 2xl:w-[200px]">
                    <img className="cardImageHover" src={rImage} alt={`${rName}-recipe`} />
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard;