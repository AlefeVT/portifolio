import { HorizontalDivider } from '../../../devider/horizontal'
import { SectionTitle } from '../../../section-title'
import { ProjectCard_SGC } from './project-card/project-sgc'

export const HightLightedprojects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                <ProjectCard_SGC />
                <HorizontalDivider className="my-16" />
            </div>
        </section>
    )
}