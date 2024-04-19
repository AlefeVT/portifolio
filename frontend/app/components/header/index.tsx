'use client'
import Link from "next/link";
import { NavItem } from "@/app/components/header/nav-item";

import { particles } from '../../../particlesjs-config.json'

const NAV_ITENS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    },
    {
        label: 'Currículo',
        href: '/curriculo.pdf'
    }
]

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    {/* <Image
                        width={58}
                        height={49}
                        src="images/logo.svg"
                        alt="Logo" /> */}
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                {NAV_ITENS.map(item => (
                    <NavItem {...item}/>
                ))}
            </nav>
            </div>


        </header>
    )
}
