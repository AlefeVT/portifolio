import Image from 'next/image';
import { TechBadge } from '../../components/tech-badge';
import { useTranslations } from 'next-intl';

interface ExperienceItemProps {
  logo: string;
  institution: string;
  course: string;
  date: string;
  description: string;
  link: string;
  technologies: string[];
}

export const ExperienceItem = ({
  logo,
  institution,
  course,
  date,
  description,
  link,
  technologies,
}: ExperienceItemProps) => {
  const t = useTranslations('Experience');

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className=" rounded-full border border-gray-500 p-0.5">
          <Image
            src={logo}
            width={40}
            height={40}
            alt={`Logo da ${institution}`}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={link}
            target="_blank"
            className=" text-gray-600 dark:text-gray-500 hover:text-cyan-500 transition-colors"
          >
            @{institution}
          </a>
          <h4 className="dark:text-gray-300 text-gray-900">{course}</h4>
          <span className="text-gray-600 dark:text-gray-500">{date}</span>
          <p className="text-gray-600 dark:text-gray-500">{description}</p>
          <p className="dark:text-gray-400 text-sm mb-3 mt-6 font-semibold">
            {t('text')}
          </p>
          <div className="flex gap-y-3 gap-x-3 flex-wrap lg:max-w-[550px] mb-8">
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
