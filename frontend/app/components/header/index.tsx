'use client'

import Link from 'next/link'
import { NavItem } from '@/app/components/header/nav-item'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    // {
    //     label: 'Projetos',
    //     href: '/projects'
    // },
    {
        label: 'Currículo',
        href: '/curriculo-Alefe.pdf'
    }
];

export const Header = () => {
    return (
        <motion.header 
            className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                <Link href="/">
                    {/* <Image
                        width={58}
                        height={49}
                        src="images/logo.svg"
                        alt="Logo" /> */}
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => (
                        <NavItem key={item.label} {...item}/>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
};
