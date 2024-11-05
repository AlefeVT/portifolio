'use client';

import { useState, useEffect } from 'react';
import { EducationItem } from './education-item';
import { ExperienceItem } from './experience-item';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { useTranslations, useLocale } from 'next-intl';
import { loadEducationData, loadExperienceData } from './loadData';

interface EducationItemProps {
  logo: string;
  institution: string;
  course: string;
  date: string;
  description: string;
  link: string;
  technologies: string[];
}

interface ExperienceItemProps {
  logo: string;
  institution: string;
  course: string;
  date: string;
  description: string;
  link: string;
  technologies: string[];
}

export const EducationExperience = () => {
  const t = useTranslations('EducationExperience');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('education');
  const [educationItems, setEducationItems] = useState<EducationItemProps[]>(
    []
  );
  const [experienceItems, setExperienceItems] = useState<ExperienceItemProps[]>(
    []
  );

  useEffect(() => {
    async function loadData() {
      if (locale) {
        try {
          const educationData = await loadEducationData(locale);
          const experienceData = await loadExperienceData(locale);
          setEducationItems(educationData);
          setExperienceItems(experienceData);
        } catch (error) {
          console.error('Failed to load data:', error);
        }
      }
    }
    loadData();
  }, [locale]);

  return (
    <div className="w-full lg:pt-6 pb-8">
      <div className="text-center pb-10">
        <h1 className="text-2xl md:text-3xl font-bold">{t('title')}</h1>
      </div>
      <div className="container md:py-4 flex justify-center gap-4">
        <button
          onClick={() => setActiveTab('education')}
          className={`flex text-xl gap-x-2 py-2 px-4 ${activeTab === 'education' ? 'text-cyan-700 dark:text-cyan-400' : 'text-black dark:text-white'} rounded-md`}
        >
          <FaGraduationCap className="text-xl md:text-2xl" />
          {t('education')}
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`flex text-xl gap-x-2 py-2 px-4 ${activeTab === 'experience' ? 'text-cyan-700 dark:text-cyan-400' : 'text-black dark:text-white'} rounded-md p-3`}
        >
          <MdOutlineWorkHistory className="text-xl md:text-2xl" />
          {t('experience')}
        </button>
      </div>

      {activeTab === 'education' && (
        <section className="container py-6 md:py-16 flex gap-16 md:gap-4 lg:gap-16 flex-col md:flex-row">
          <div className="max-w-[420px]">
            <h1 className="text-3xl font-medium text-center md:text-left">
              {t('education-title')}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-6">
              {t('education-description')}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {educationItems.map((item, index) => (
              <EducationItem
                key={index}
                logo={item.logo}
                institution={item.institution}
                course={item.course}
                date={item.date}
                description={item.description}
                link={item.link}
                technologies={item.technologies}
              />
            ))}
          </div>
        </section>
      )}

      {activeTab === 'experience' && (
        <section className="container py-6 md:py-16 flex gap-16 md:gap-4 lg:gap-16 flex-col md:flex-row">
          <div className="max-w-[420px]">
            <h1 className="text-3xl font-medium text-center md:text-left">
              {t('experience-title')}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-6">
              {t('experience-description')}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {experienceItems.map((item, index) => (
              <ExperienceItem
                key={index}
                logo={item.logo}
                institution={item.institution}
                course={item.course}
                date={item.date}
                description={item.description}
                link={item.link}
                technologies={item.technologies}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
