import { skills } from '../data';

export function Skills() {
    return (
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-8 md:grid-flow-row'>
                    {skills.map((skill, index) => (
                        <div key={index} className='flex items-center justify-center'>
                            <img src={skill.image} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}