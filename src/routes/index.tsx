import { createFileRoute } from "@tanstack/react-router";
import { Hero, SkillRibbon, ProjectsSection, AboutSection, SkillsSection, ExperienceSection, AchievementsSection, CertificationsSection, EducationSection, LanguagesSection, ContactTeaser } from '@/components/portfolio/sections';
import { pageHead } from '@/components/portfolio/data';
export const Route = createFileRoute("/")({
  head: () => pageHead('Yasvand A K | AI & Data Science Student', 'Portfolio of Yasvand A K, an Artificial Intelligence & Data Science student focused on machine learning, computer vision, and practical AI solutions.', '/'),
  component: Index,
});

function Index() {
  return <><Hero/><SkillRibbon/><ProjectsSection/><AboutSection/><SkillsSection/><ExperienceSection/><AchievementsSection/><CertificationsSection/><EducationSection/><LanguagesSection/><ContactTeaser/></>;
}
