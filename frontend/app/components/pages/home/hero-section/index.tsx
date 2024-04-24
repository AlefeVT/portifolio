'use client'

import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandGmail } from 'react-icons/tb'
import { motion } from 'framer-motion'


const MOCK_CONTACTS = [
    {
        url: 'https://github.com/AlefeVT',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/alefevianat/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://gmail.com.br',
        icon: <TbBrandGmail />
    },
]

const techBadges = [
    "Javascript",
    "Typescript",
    "PHP",
    "SQL",
    "Bootstrap",
    "Tailwind",
    "Next.js",
    "React.js",
    "Jquery",
    "Nest.js"
];

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[725px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[100px]">
            <div className="container flex items-start justify-center flex-col-reverse lg:flex-row">
                <motion.div
                    className="w-full lg:max-w-[1140px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >

                    <h2 className="text-sm font-medium">OI, EU SOU ALEFE</h2>
                    <h1 className="text-7xl font-bold">FULL STACK DEVELOPER</h1>


                    <div className="lg:w-[680px]">
                        <p className="text-gray-400 my-6 text-sm sm:text-base">
                            TENHO 19 ANOS SOU DESENVOLVEDOR FULL STACK COM FOCO EM FRONT-END COM MAIS DE 1 ANO DE EXPERIENCIA TRABALHANDO COM AS TECNOLOGIAS ABAIXO
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[440px]">
                        {techBadges.map((tech, index) => (
                            <TechBadge 
                                key={index} 
                                name={tech} 
                                initial={{ opacity: 0, scale: 0 }} 
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                            />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">

                        Entre em contato
                        <HiArrowNarrowRight size={18} />

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}