import { HightLightedprojects } from "./components/pages/home/hightlighted-projects";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <HightLightedprojects />
      <KnownTechs />
      <WorkExperience />
    </>
  )
}
