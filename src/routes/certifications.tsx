import { createFileRoute } from '@tanstack/react-router'
import { CertificationsSection, ContactTeaser } from '@/components/portfolio/sections'
import { pageHead } from '@/components/portfolio/data'

export const Route = createFileRoute('/certifications')({
  head: () => pageHead('Certifications — Yasvand A K', 'Certifications of Yasvand A K in deep learning, IoT, MongoDB, Java programming, and ML with AI applications.', '/certifications'),
  component: Page,
})
function Page() { return <><CertificationsSection full/><ContactTeaser/></> }
