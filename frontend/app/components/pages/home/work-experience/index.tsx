'use client'

import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem1 } from './experience1-item'
import { ExperienceItem2 } from './experience2-item'
import { motion } from 'framer-motion'

export const WorkExperience = () => {
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência Profissional" />
                <motion.p 
                    className="text-gray-400 mt-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                Aqui está minha jornada profissional, onde cada posição desempenhada representa um capítulo emocionante da minha carreira, cada um contribuindo para o meu crescimento pessoal e profissional.
                </motion.p>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceItem1 />
                <ExperienceItem2 />
            </div>
        </section>
    )
}