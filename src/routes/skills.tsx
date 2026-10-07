import { createFileRoute } from '@tanstack/react-router'
import { SkillsSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/skills')({
  head: () => pageHead('Skills — Yasvand A K', 'Explore Yasvand A K’s skills in Python, Java, SQL, Power BI, machine learning, computer vision, and image processing.', '/skills'),
  component: Page,
})
function Page() { return <><SkillsSection full/><ContactTeaser/></> }
