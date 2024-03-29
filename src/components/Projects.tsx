import { useEffect, useState } from 'react'
import { projectsNav, projectsData } from '../data'
import { Project } from './Project'

export interface IProject {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
}

export function Projects() {

    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => { return project.category.toLowerCase() === item.name; });
            setProjects(newProjects);
        };
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    return (
        <div>
            <nav className="mb-12 max-w-xl mx-auto">
                <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
                    {projectsNav.map((item, index) => (
                        <li
                            onClick={(e) => handleClick(e, index)}
                            key={index}
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
                {
                    projects.map((item) => (
                        <Project key={item.id} item={item} />
                    ))
                }
            </section>
        </div>
    )
}