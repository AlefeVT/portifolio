import { IconType } from 'react-icons';

type TechBadgeProps = {
    name: string;
    Icon?: IconType;
}

export const TechBadge = ({ name, Icon }: TechBadgeProps) => {
    return (
        <span className="flex items-center text-cyan-200 dark:text-cyan-400 bg-cyan-700/80 dark:bg-cyan-900/80 text-sm py-1 px-3 rounded-lg">
            {Icon && <Icon className="mr-2" />}
            {name}
        </span>
    )
}
