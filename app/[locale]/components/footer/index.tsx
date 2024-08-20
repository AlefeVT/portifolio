import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { RoundedCards } from "./roudendCards";
import { useTranslations } from "next-intl";

const socialMediaIcons = [
    {
        icon: <FiGithub className="text-white w-6 h-6" />,
        link: "https://github.com/AlefeVT",
    },
    {
        icon: <FaLinkedinIn className="text-white w-6 h-6" />,
        link: "https://www.linkedin.com/in/alefevianat/",
    },
    {
        icon: <MdMarkEmailRead className="text-white w-6 h-6" />,
        link: "mailto:alefevt@gmail.com",
    }
]

export const Footer = () => {

    const t = useTranslations("Footer");

    return (
        <footer className="h-full w-full bg-gray-200 dark:bg-gray-800/85 p-10">
            <div className="flex flex-col justify-center items-center text-center h-full space-y-2">
                <div className="flex space-x-4 pb-2">
                    {socialMediaIcons.map((item, index) => (
                        <RoundedCards
                            key={index}
                            icon={item.icon}
                            link={item.link}
                        />
                    ))}
                </div>
                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
            </div>
        </footer>
    );
}
