import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'Javascript.js',
                    startDate: '2022-01-01'
                }} />

                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'Typescript.js',
                    startDate: '2023-01-01'
                }} />

                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'PHP',
                    startDate: '2023-01-01'
                }} />

                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'SQL',
                    startDate: '2022-01-01'
                }} />

                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'React.js',
                    startDate: '2022-01-01'
                }} />

                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'Jquery',
                    startDate: '2022-01-01'
                }} />

            </div>
        </section>
    )
}