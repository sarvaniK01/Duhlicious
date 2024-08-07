import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
    return (
        <Link href={link} alt={link} className="mx-auto" id="dButton">
            <button type="button" className="insideButton w-[200px] h-[68px] lg:w-[150px] lg:h-[45px] xl:w-[220px] xl:h-[73px] bg-orange text-white font-lora font-medium text-2xl lg:text-lg xl:text-2xl rounded-xl">
                {text}
            </button>
            <div className="duhliciousButtonIcon scale-100 lg:scale-75 xl:scale-100 lg:left-[24%] lg:top-[55%] xl:left-[34%] xl:top-[65%]"></div>
        </Link>
    )
}

export default Button;