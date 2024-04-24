'use client'

import Image from 'next/image'
import { TechBadge } from '../../../../tech-badge'
import { motion } from 'framer-motion'

const techBadges = [
    "React.js",
    "Node.js",
    "Tailwind",
    "Axios",
    "Prisma",
    "Express",
    "Chart.js"
];


export const ProjectCard_SGC = () => {
    const animProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    }
    return (
        <motion.div
            className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Image
                    width={420}
                    height={304}
                    src="/images/sgc.jpg"
                    alt="Thumbnail do projeto de gerenciamento de contratos"
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>

            <div className="flex-1 lg:py-[18px]">
                <motion.h3
                    className="flex items-center gap-3 font-medium text-lg text-gray-50"
                    {...animProps}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    Sistema de Gerenciamento de Contratos
                </motion.h3>

                <motion.p
                    className="text-gray-400 my-6"
                    {...animProps}
                    transition={{ duration: 0.2, delay: 0.3 }}
                >
                    Sistema de gerenciamento de contratos que está sendo desenvolvido por mim, no qual irei utilizá-lo como TCC da faculdade. A ideia é desenvolver um sistema que gerencie contratos de vendas para prestadores de serviços, mas pretendo escalá-lo para um sistema de contabilidade web completo. Algumas das tecnologias utilizadas logo abaixo.
                </motion.p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
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

                {/* <Link href="/projects/ouvidoria">
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link> */}
            </div>
        </motion.div>
    )
}