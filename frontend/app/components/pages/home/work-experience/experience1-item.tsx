'use client'

import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const ExperienceItem1 = () => {

    const techBadges = [
        "PHP",
        "SQL",
        "Bootstrap",
        "Jquery"
    ];

    return (
        <motion.div 
            className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 50}}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/logo_sitcon.png"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa Sitcon Tecnologia da informação"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="https://www.linkedin.com/company/sitconsistemas/mycompany/"
                        target="_blank"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @Sitcon Tecnologia Da Informação
                    </a>
                    <h4 className="text-gray-300">Desenvolvedor Full Stack php</h4>
                    <span className="text-gray-500">jan 2024 * O momento * (4 meses)</span>
                    <p className="text-gray-400">Colaboração no desenvolvimento do sistema Iconsortio, utilizando PHP.
                        Contribuição em um projeto presente em mais de 17 estados do Brasil, proporcionando uma visão detalhada
                        sobre trabalhar em um software robusto.
                        Participação na criação de novos menus, manutenção de funcionalidades existentes e reescrita de partes do
                        sistema utilizando tecnologias mais avançadas, visando melhorias e facilitação do suporte.
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
                    Competências
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                {techBadges.map((tech, index) => (
                    <TechBadge 
                    key={index} 
                    name={tech} 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                    />
                ))}
                </div>
            </div>
        </motion.div>
    )
}