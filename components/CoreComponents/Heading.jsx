
const Heading = ({ text , color }) => {
    return (
        <p className={`${color} w-[85%] lg:w-fit mx-auto font-playfairDisplay text-5xl lg:text-5xl capitalize font-semibold text-center`}>
            {text}
        </p>
    )
}

export default Heading;