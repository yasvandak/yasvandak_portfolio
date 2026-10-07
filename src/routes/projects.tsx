import { createFileRoute } from '@tanstack/react-router'
import { ProjectsSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/projects')({
  head: () => pageHead('Featured Projects — Yasvand A K', 'Explore Yasvand A K’s AI surveillance and plant identification and disease classification projects.', '/projects'),
  component: Page,
})
function Page() { return <><ProjectsSection full/><ContactTeaser/></> }
