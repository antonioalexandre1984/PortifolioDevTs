import { useState } from 'react'
import { navigation } from '../data'
import { XIcon } from '@heroicons/react/outline'

import { MenuAlt3Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Social } from './Social';


export function NavMobile() {
    const [isOpen, setIsOpen] = useState(false)
    //framer motion variants
    const circleVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
                duration: 0.5

            }
        },
    }
    const ulVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            }
        },
    }

    return (
        <nav className='relative'>
            {/* Menu Icon */}
            <div className='cursor-pointer text-white'>
                <MenuAlt3Icon
                    onClick={() => setIsOpen(!isOpen)}
                    className='h-8 w-8'
                />
                {/* Menu Circle */}
                <motion.div
                    variants={circleVariants}
                    initial='hidden'
                    animate={isOpen ? 'visible' : 'hidden'}
                    className='w-4 h-4 bg-accent rounded-full top-0 right-0 fixed'
                >
                </motion.div>
                <motion.ul
                    variants={ulVariants}
                    initial='hidden'
                    animate={isOpen ? 'visible' : ''}
                    className={`${isOpen ? 'right-0' : 'right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
                >
                    <div
                        onClick={() => setIsOpen(false)}
                        className=' cursor-pointer absolute top-8 right-8 text-white'
                    >
                        <XIcon className='h-8 w-8' />
                    </div>
                    {navigation.map((item, index) => {
                        return (
                            <li key={index} className='mb-8'>
                                <Link
                                    to={item.href}
                                    smooth={true}
                                    spy={true}
                                    offset={-70}
                                    duration={500}
                                    className='text-xl
                                    cursor-pointer 
                                    capitalize'
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                    <Social />
                </motion.ul>
            </div>
        </nav>
    )
}