import Image from "next/image";
import { TechBadge } from "../../../../tech-badge";
import { Link } from "../../../../link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                    width={420} 
                    height={304} 
                    src="/images/ouvidoria.jpg"
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
                    Ouvidoria
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio, amet officiis atque quidem commodi praesentium ut dolore autem beatae totam. Maxime repellat, enim cumque, et adipisci ratione ducimus magni eum quisquam temporibus veniam doloremque, dolorem laudantium? Sed ipsum iste laudantium quas perferendis officiis. Ut perspiciatis fugiat et rem molestiae!
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                </div>

                <Link href="/projects/ouvidoria">
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}