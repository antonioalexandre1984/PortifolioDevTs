import { IProject } from "./Projects";

interface ItemProps {
    item: IProject;
}

export function Project({ item }: ItemProps) {
    const { id, image, category, name, description } = item;
    return (
        <div key={id} className='flex flex-col items-center text-center'>
            <div className='mb-8'>
                <img src={image} className='rounded-2xl' alt='' />
            </div>
            <p className='capitalize text-accent text-sm mb-3'>
                {category}
            </p>
            <h3 className='text-2xl font font-semibold capitalize mb-3'>
                {name}
            </h3>
            <p className='text-base max-w-md'>
                {description}
            </p>
        </div>
    )
}