import { contact } from "../data";

export function Contact() {
    return (
        <section id='services' className='section bg-tertiary'>
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-contact relative before-absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
                        Contact Me!
                    </h2>
                    <p className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam
                    </p>
                </div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) => {
                            const { icon, title, description, subtitle } = item;
                            return (
                                <div key={index} className='flex flex-col lg:flex-row gap-x-4'>
                                    <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body text-xl mb-1">
                                            {title}
                                        </h4>
                                        <p className="mb-1 text-paragraph">
                                            {subtitle || description}
                                        </p>
                                        <p className="text-accent font-normal">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <form className="space-y-8
                         w-full max-w-[780px]">
                        <div className="flex gap-8">
                            <input className='input ' type='text' placeholder='Your Name' />
                            <input className='input' type='email' placeholder='Your Email' />
                        </div>
                        <input className='input' type='text' placeholder='Subject' />
                        <textarea className='textarea' placeholder='Your Message' />
                        <button className='btn btn-lg bg-accent hover:bg-secondary-hove'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}