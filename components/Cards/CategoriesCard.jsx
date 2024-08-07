import Link from "next/link";

const CategoriesCard = ({ link, textColor, title1, title2, image}) => {
    return (
        <div className="w-full xl:w-fit cardHover cursor-pointer">
            {/* <Link href={link} alt={`${title1}-link`}>
                <img src={image} alt={`${title1}-link`} className="mx-auto cardImageHover xl:w-[90%] 3xl:w-full"/>
                <div className={`${textColor} mt-8 w-fit text-center font-playfairDisplay font-semibold text-2xl 2xl:text-3xl mx-auto`}>
                    <p>{title1}</p>
                    <p>{title2}</p>
                </div>
            </Link> */}
            <img src={image} alt={`${title1}-link`} className="mx-auto cardImageHover xl:w-[90%] 3xl:w-full" />
            <div className={`${textColor} mt-8 w-fit text-center font-playfairDisplay font-semibold text-2xl 2xl:text-3xl mx-auto`}>
                <p>{title1}</p>
                <p>{title2}</p>
            </div>
        </div>
    )
}

export default CategoriesCard;