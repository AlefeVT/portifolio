import { ReactNode } from 'react';

type RoundedCardsProps = {
  icon: ReactNode;
  link: string;
};

export const RoundedCards = ({ icon, link }: RoundedCardsProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 dark:bg-transparent border
            border-cyan-400 dark:border-white hover:opacity-60 dark:hover:bg-white/20 transition-all duration-300 ease-in-out"
    >
      {icon}
    </a>
  );
};
