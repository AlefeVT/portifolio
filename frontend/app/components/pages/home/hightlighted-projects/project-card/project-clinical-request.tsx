import Image from "next/image"
import { TechBadge } from "../../../../tech-badge"
import { Link } from "../../../../link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard_CR = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="/images/sgc.jpg"
                    alt="Thumbnail do projeto ouvidoria"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    Sistema de Solicitações Clinicas
                </h3>

                <p className="text-gray-400 my-6">
                    Sistema de gerenciamento de contratos que está sendo desenvolvido por mim, no qual irei utilizá-lo como TCC da faculdade. A ideia é desenvolver um sistema que gerencie contratos de vendas para prestadores de serviços, mas pretendo escalá-lo para um sistema de contabilidade web completo. Algumas das tecnologias utilizadas logo abaixo.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="React.js" />
                    <TechBadge name="Node.js" />
                    <TechBadge name="Tailwind" />
                    <TechBadge name="Axios" />
                    <TechBadge name="Prisma" />
                    <TechBadge name="Express" />
                    <TechBadge name="Chart.js" />
                </div>

                <Link href="/projects/ouvidoria">
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}