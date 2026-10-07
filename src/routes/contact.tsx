import { createFileRoute } from '@tanstack/react-router'
import { ContactSection } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/contact')({
  head: () => pageHead('Contact — Yasvand A K', 'Connect with Yasvand A K for AI, machine learning, computer vision, and collaborative projects.', '/contact'),
  component: Page,
})
function Page() { return <><ContactSection/></> }
