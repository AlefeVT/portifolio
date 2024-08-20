import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPhp,
  FaPython,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFastapi,
  SiFastify,
  SiShadcnui,
  SiExpress,
} from 'react-icons/si';
import { TechBadge } from './skillsBadge';
import { useTranslations } from 'next-intl';

const frontEndSkills = [
  { name: 'HTML5', Icon: FaHtml5, bgColor: 'bg-red-500' },
  { name: 'CSS3', Icon: FaCss3Alt, bgColor: 'bg-blue-500' },
  { name: 'JAVASCRIPT', Icon: FaJs, bgColor: 'bg-yellow-500' },
  { name: 'TYPESCRIPT', Icon: SiTypescript, bgColor: 'bg-blue-600' },
  { name: 'REACT', Icon: FaReact, bgColor: 'bg-blue-400' },
  { name: 'NEXT.JS', Icon: SiNextdotjs, bgColor: 'bg-gray-900' },
  { name: 'TAILWIND CSS', Icon: SiTailwindcss, bgColor: 'bg-teal-500' },
  { name: 'BOOTSTRAP', Icon: SiBootstrap, bgColor: 'bg-purple-600' },
  { name: 'REDUX', Icon: SiRedux, bgColor: 'bg-purple-700' },
  { name: 'SHADCN/UI', Icon: SiShadcnui, bgColor: 'bg-black' },
];

const backEndSkills = [
  { name: 'NODE.JS', Icon: FaNodeJs, bgColor: 'bg-green-600' },
  { name: 'JAVASCRIPT', Icon: FaJs, bgColor: 'bg-yellow-500' },
  { name: 'TYPESCRIPT', Icon: SiTypescript, bgColor: 'bg-blue-600' },
  { name: 'EXPRESS.JS', Icon: SiExpress, bgColor: 'bg-gray-800' },
  { name: 'MYSQL', Icon: SiMysql, bgColor: 'bg-blue-700' },
  { name: 'POSTGRESQL', Icon: SiPostgresql, bgColor: 'bg-blue-600' },
  { name: 'MONGODB', Icon: SiMongodb, bgColor: 'bg-green-600' },
  { name: 'PRISMA', Icon: SiPrisma, bgColor: 'bg-blue-900' },
  { name: 'DOCKER', Icon: FaDocker, bgColor: 'bg-blue-500' },
  { name: 'PHP', Icon: FaPhp, bgColor: 'bg-purple-700' },
  { name: 'PYTHON', Icon: FaPython, bgColor: 'bg-yellow-500' },
];

export const SkillsSection = () => {
  const t = useTranslations('Skills');

  return (
    <div className="bg-white dark:bg-black w-full h-auto lg:h-[32rem] text-center pt-10">
      <h1 className="text-2xl lg:text-3xl font-bold pb-4 lg:pb-0">
        {t('title')}
      </h1>
      <div className="container flex md:flex-row flex-col justify-center items-center h-full gap-x-20 pb-10 gap-y-6 md:gap-y-0">
        <div className="w-full lg:w-1/3 md:1/2 h-auto lg:h-[22rem] xl:h-[20rem] bg-gray-200 dark:bg-gray-800/85 rounded-3xl pt-6 pb-12">
          <h1 className="text-xl lg:text-2xl font-bold">Front-End</h1>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            {frontEndSkills.map((skill) => (
              <TechBadge key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:1/2 h-auto lg:h-[22rem] xl:h-[20rem] bg-gray-200 dark:bg-gray-800/85 rounded-3xl pt-6 pb-12">
          <h1 className="text-xl lg:text-2xl font-bold">Back-End</h1>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            {backEndSkills.map((skill) => (
              <TechBadge key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
