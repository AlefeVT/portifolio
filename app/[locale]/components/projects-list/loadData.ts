export async function loadProjectData(locale: string) {
    const projectData = await import(`../../../../dictionaries/${locale}/project.json`);
    return projectData.default;
}
