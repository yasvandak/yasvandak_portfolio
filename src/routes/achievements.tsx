import { createFileRoute } from '@tanstack/react-router'
import { AchievementsSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/achievements')({
  head: () => pageHead('Achievements — Yasvand A K', 'Project awards and hackathon participation of Yasvand A K, including a first prize in AI-powered plant identification.', '/achievements'),
  component: Page,
})
function Page() { return <><AchievementsSection full/><ContactTeaser/></> }
