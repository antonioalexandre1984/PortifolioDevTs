import { TestiSlider } from "./TestiSlider";

export function Testimonials() {
    return (
        <section id='testimonials' className="section bg-tertiary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-testimonials relative before-absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
                        What i do for clients
                    </h2>
                    <p className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam
                    </p>
                </div>
                <TestiSlider />
            </div>
        </section>
    )
}