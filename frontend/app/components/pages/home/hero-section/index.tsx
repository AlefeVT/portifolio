import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandGmail } from 'react-icons/tb'


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

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[100px]">
            <div className="container flex items-start justify-center flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[1140px]">

                    <h2 className="text-sm font-medium">OI, EU SOU ALEFE</h2>
                    <h1 className="text-7xl font-bold">FULL STACK DEVELOPER</h1>


                    <div className="lg:w-[680px]">
                        <p className="text-gray-400 my-6 text-sm sm:text-base">
                            TENHO 19 ANOS SOU DESENVOLVEDOR FULL STACK COM FOCO EM FRONT-END COM MAIS DE 1 ANO DE EXPERIENCIA TRABALHANDO COM AS TECNOLOGIAS ABAIXO
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[440px]">
                        <TechBadge name="Javascript" />
                        <TechBadge name="Typescript" />
                        <TechBadge name="PHP" />
                        <TechBadge name="SQL" />
                        <TechBadge name="Bootstrap" />
                        <TechBadge name="Tailwind" />
                        <TechBadge name="Next.js" />
                        <TechBadge name="React.js" />
                        <TechBadge name="Jquery" />
                        <TechBadge name="Nest.js" />
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
                </div>


                {/* <Image
                    width={400}
                    height={480}
                    src="/images/profile_avt.jpg"
                    alt="Foto de perfil de Alefe Viana Teixeira"
                    className="w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                /> */}
            </div>
        </section>
    )
}