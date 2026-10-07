import { createFileRoute } from '@tanstack/react-router'
import { AboutSection, EducationSection, LanguagesSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/about')({
  head: () => pageHead('About Me — Yasvand A K', 'Meet Yasvand A K, an AI & Data Science undergraduate building practical machine learning and computer vision solutions.', '/about'),
  component: Page,
})
function Page() { return <><AboutSection full/><EducationSection/><LanguagesSection/><ContactTeaser/></> }
