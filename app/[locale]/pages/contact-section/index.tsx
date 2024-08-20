import { MdMarkEmailRead } from 'react-icons/md';
import { CardsBadge } from './cards-badge';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FormSection } from './form';
import { useTranslations } from 'next-intl';

const cards = [
  {
    icon: <MdMarkEmailRead />,
    title: 'Email',
    subtitle: 'alefevt@gmail.com',
    action: 'Escrever para mim',
    link: 'mailto:alefevt@gmail.com',
  },
  // {
  //     icon: <FaWhatsapp />,
  //     title: "Whatsapp",
  //     subtitle: "(16) 99993-6596",
  //     action: "Conversar no Whatsapp",
  //     link: "https://wa.me/5516999936596"
  // },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    subtitle: 'alefeVT',
    action: 'Conectar no LinkedIn',
    link: 'https://www.linkedin.com/in/alefevianat/',
  },
];

export const ContactSection = () => {
  const t = useTranslations('Contact');

  return (
    <div className="w-full h-auto bg-white dark:bg-black justify-center text-center pb-20 md:pt-10 pt-6">
      <div className="w-full">
        <h1 className=" text-black dark:text-white text-2xl md:text-3xl font-bold p-4">
          {t('h1')}
        </h1>
        <p className="md:text-lg text-base pb-4 md:pb-16">{t('p')}</p>
      </div>
      <div className="md:container md:grid md:grid-cols-2">
        <div className="">
          <h1 className="text-xl md:text-2xl pb-4 font-bold">
            {t('subtitle1')}
          </h1>
          <div className="flex flex-col justify-center items-center gap-y-3">
            {cards.map((card, index) => (
              <CardsBadge
                key={index}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                action={card.action}
                link={card.link}
              />
            ))}
          </div>
        </div>
        <div className="pt-4 sm:pt-0">
          <h1 className="text-xl md:text-2xl pb-4 font-bold">
            {t('subtitle2')}
          </h1>
          <div className="pt-2 lg:pt-10">
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
};
