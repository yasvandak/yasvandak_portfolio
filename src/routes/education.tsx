import { createFileRoute } from '@tanstack/react-router'
import { EducationSection, LanguagesSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/education')({
  head: () => pageHead('Education — Yasvand A K', 'Academic background of Yasvand A K, B.Tech AI & Data Science, Kongunadu College of Engineering & Technology, 2023–2027.', '/education'),
  component: Page,
})
function Page() { return <><EducationSection full/><LanguagesSection/><ContactTeaser/></> }
