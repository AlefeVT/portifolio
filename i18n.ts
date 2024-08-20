import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['pt', 'en'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    const messages = {
        ...(await import(`./dictionaries/${locale}/messages.json`)).default,
        ...(await import(`./dictionaries/${locale}/experience.json`)).default,
        ...(await import(`./dictionaries/${locale}/education.json`)).default,
        ...(await import(`./dictionaries/${locale}/project.json`)).default
    };

    return {
        messages
    };
});