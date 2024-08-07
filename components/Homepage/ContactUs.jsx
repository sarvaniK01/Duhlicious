
// components
import Button from "../CoreComponents/Button"

const HomepageContactUs = () => {
    return (
        <section className="bg-contactUsBg bg-no-repeat bg-cover">
            <div className="container mx-auto px-6 py-32 lg:py-40 lg:px-24">
                <div className="flex flex-col justify-center text-center">
                    <p className="lg:w-[50%] mx-auto font-playfairDisplay text-white text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                        We&apos;d Love to Hear From You
                    </p>
                    <p className="my-12 lg:w-[65%] mx-auto text-white font-lora font-medium text-xl md:text-lg lg:text-xl xl:text-2xl">
                        Reach Out for Recipe Requests, Collaboration Inquiries, or Just to Say Hello.
                        Drop Us a Line and Let&apos;s Spice Things Up Together!
                    </p>
                    <Button
                        text="Contact Us"
                        link="/contact"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomepageContactUs