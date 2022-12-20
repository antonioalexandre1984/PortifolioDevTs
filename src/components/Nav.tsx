import { Link } from 'react-scroll';
import { navigation } from '../data';

export function Nav() {
    return (
        <nav >
            <ul className='flex space-x-8 capitalize text-[15px]'>
                {navigation.map((item, index) => {
                    return (
                        <li key={index} className='text-white hover:text-accent cursor-pointer' >
                            <Link
                                to={item.href}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                duration={500}
                                className='transition-all duration-300'
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}