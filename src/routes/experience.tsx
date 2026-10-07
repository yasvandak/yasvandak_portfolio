import { createFileRoute } from '@tanstack/react-router'
import { ExperienceSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/experience')({
  head: () => pageHead('Experience — Yasvand A K', 'AI internship experience of Yasvand A K at Eagle Hi-Tech Softclou Pvt Ltd., Chennai, in June 2025.', '/experience'),
  component: Page,
})
function Page() { return <><ExperienceSection full/><ContactTeaser/></> }
