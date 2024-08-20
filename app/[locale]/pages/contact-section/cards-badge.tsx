import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

type CardsBadgeProps = {
    icon: ReactNode;
    title: string;
    subtitle: string;
    action: string;
    link: string;
}

export const CardsBadge = ({ icon, title, subtitle, action, link }: CardsBadgeProps) => {
    return (
        <div className="bg-gray-200/70 dark:bg-gray-800/85 p-6 rounded-lg w-[290px]">
            <div className="text-5xl text-cyan-400 flex justify-center">
                {icon}
            </div>
            <div className="">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <a href={link} className="flex justify-center items-center space-x-1 group">
                    <h4 className="transition-all group-hover:text-cyan-400">{action}</h4>
                    <IoIosArrowForward className="transition-all group-hover:text-cyan-400" />
                </a>
            </div>

        </div>
    )
}