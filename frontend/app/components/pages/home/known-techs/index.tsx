'use client'

import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"
import { HorizontalDivider } from "@/app/components/devider/horizontal"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript } from "react-icons/si"
import { FaPhp } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { DiJqueryLogo } from "react-icons/di"
import { motion } from 'framer-motion'

export const KnownTechs = () => {
    const knownTechs = [
        {
            icon: <IoLogoJavascript />,
            name: 'Javascript.js',
            startDate: '2022-01-01'
        },
        {
            icon: <SiTypescript />,
            name: 'Typescript.js',
            startDate: '2023-01-01'
        },
        {
            icon: <FaPhp />,
            name: 'PHP',
            startDate: '2023-01-01'
        },
        {
            icon: <BsFiletypeSql />,
            name: 'SQL',
            startDate: '2022-01-01'
        },
        {
            icon: <FaReact />,
            name: 'React.js',
            startDate: '2022-01-01'
        },
        {
            icon: <DiJqueryLogo />,
            name: 'Jquery',
            startDate: '2022-01-01'
        },
        {
            icon: <TbBrandNextjs />,
            name: 'Next.js',
            startDate: '2023-01-01'
        }
    ];

    return (
        <section className="container py-2">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {knownTechs.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.15, delay: index * 0.1 }}
                    >
                        <KnownTech tech={tech} />

                    </motion.div>

                ))}
            </div>
            <HorizontalDivider className="mb-2" />
        </section>
    )
}
