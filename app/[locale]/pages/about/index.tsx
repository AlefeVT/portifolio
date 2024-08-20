import { useTranslations } from 'next-intl';
import { Button } from '../../components/button';

export const AboutSection = () => {
  const t = useTranslations('About');

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-[#141414] w-full sm:h-[35rem] h-full px-10 sm:px-0 pt-10 sm:pt-0 pb-10 sm:pb-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-white">
        {t('title')}
      </h1>
      <p className="text-justify text-base sm:text-lg dark:text-gray-300 mt-6 leading-relaxed max-w-4xl ">
        {t('description1')}
      </p>
      <p className="text-justify text-md sm:text-lg dark:text-gray-300 mt-6 leading-relaxed max-w-4xl ">
        {t('description2')}
      </p>
      <p className="text-justify text-md sm:text-lg dark:text-gray-300 mt-6 leading-relaxed max-w-4xl ">
        {t('description3')}
      </p>
      <a href="https://drive.google.com/file/d/1n5e4UWESwQ_EDD6yBcq4bPMBk_t4RWGg/view?usp=sharing">
        <Button className="mt-6 sm:mt-12">{t('button')}</Button>
      </a>
    </div>
  );
};
