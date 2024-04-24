import Image from 'next/image'

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    src="/images/sgc.jpg"
                    alt="Thumbnail do projeto de gerenciamento de contratos"
                    unoptimized
                    className="w-full h-full group-hover:scale-110 duration-500 transition-all"
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">SGC System</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">O SGC System é um sistema de controle e gerenciamento de contratos de vendas para empresas prestadoras de serviços, desenvolvido como parte do meu trabalho de conclusão de curso na faculdade de sistemas de informação.</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">React.js, Node.js, Tailwind, Axios, Prisma, Express, Chart.js</span>
            </div>
        </div>
    )
}