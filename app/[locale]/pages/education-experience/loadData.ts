export async function loadEducationData(locale: string) {
    const educationData = await import(`../../../../dictionaries/${locale}/education.json`);
    return educationData.default;
}

export async function loadExperienceData(locale: string) {
    const experienceData = await import(`../../../../dictionaries/${locale}/experience.json`);
    return experienceData.default;
}
