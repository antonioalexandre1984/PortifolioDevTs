import React, { useEffect, useState } from "react"
import Logo from "../assets/img/logo.svg"
import { Nav } from "./Nav"
import { NavMobile } from "./NavMobile"
import { Social } from "./Social"

export function Header() {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    }, [])

    return (
        <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className='container mx-auto h-full flex items-center justify-between'>
                {/* Logo */}
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
                <div className="hidden lg:block">
                    <Nav />
                </div>
                <div className="hidden lg:block">
                    <Social />
                </div>
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}