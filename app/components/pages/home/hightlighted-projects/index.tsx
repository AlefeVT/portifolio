import { HiArrowNarrowRight } from "react-icons/hi"
import { HorizontalDivider } from "../../../devider/horizontal"
import { Link } from "../../../link"
import { SectionTitle } from "../../../section-title"
import { ProjectCard } from "./project-card"

export const HightLightedprojects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                <ProjectCard />
                <HorizontalDivider className="my-16" />
                <ProjectCard />
                <HorizontalDivider className="my-16" />

                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex">
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>
            </div>
        </section>
    )
}