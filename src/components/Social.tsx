import { social } from '../data';

export function Social() {
    return (
        <ul className="flex space-x-6">
            {social.map((item, index) => (
                <li className='flex justify-center items-center text-accent' key={index}>
                    <a className='text-base' href={item.href}>
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}