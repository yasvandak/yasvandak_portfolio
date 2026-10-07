import { useEffect, useState, type ReactNode } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { MotionConfig } from 'framer-motion'
import { ArrowUpRight, Menu, X, Code2, FileText, MoonStar, SunMedium } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from './data'

const THEME_STORAGE_KEY = 'yasvand-theme'

type ThemeMode = 'light' | 'dark'

function GitHubIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return <img src="/icons/github-mark.svg" alt="GitHub" width={size} height={size} className={className} loading="lazy" decoding="async" />
}

function LinkedInIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return <img src="/icons/linkedin-mark.svg" alt="LinkedIn" width={size} height={size} className={className} loading="lazy" decoding="async" />
}

const links = [
  { name: 'Home', to: '/' }, { name: 'About', to: '/about' }, { name: 'Skills', to: '/skills' }, { name: 'Experience', to: '/experience' }, { name: 'Projects', to: '/projects' }, { name: 'Achievements', to: '/achievements' }, { name: 'Certifications', to: '/certifications' }, { name: 'Contact', to: '/contact' },
] as const
export function PortfolioShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<ThemeMode>('light')
  const pathname = useRouterState({ select: s => s.location.pathname })

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    const preferredTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferredTheme)
    document.documentElement.classList.toggle('dark', preferredTheme === 'dark')
    document.documentElement.style.colorScheme = preferredTheme
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    document.documentElement.style.colorScheme = nextTheme
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  }

  return <MotionConfig reducedMotion="user">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-primary text-primary-foreground p-3">Skip to content</a>
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-container flex h-full items-center justify-between gap-3 sm:gap-5">
        <Link to="/" aria-label="Yasvand home" className="wordmark"><Code2 size={24} strokeWidth={2.3} className="brand-icon" />YASVAND<span className="text-primary">.</span></Link>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">{links.map(link => <Link key={link.to} to={link.to} className={`nav-link ${pathname === link.to ? 'active' : ''}`} aria-current={pathname === link.to ? 'page' : undefined}>{link.name}</Link>)}</nav>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <Button asChild variant="ghost" size="icon" className="hidden xl:inline-flex" aria-label="Download résumé"><a href="/Yasvand-AK-Resume.pdf" download><FileText size={18} /></a></Button>
          <Button type="button" variant="ghost" size="icon" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme}>
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </Button>
          <Button asChild variant="ghost" size="icon" className="inline-flex" aria-label="GitHub profile"><a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon size={16} /></a></Button>
          <Button asChild variant="ghost" size="icon" className="inline-flex" aria-label="LinkedIn profile"><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={16} /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav">{links.map(link => <Link key={link.to} to={link.to} className={pathname === link.to ? 'text-primary' : 'text-muted-foreground'}>{link.name}</Link>)}</nav>}
    </header>
    <main id="main-content">{children}</main>
    <footer className="footer"><div className="site-container flex flex-wrap items-center justify-between gap-5">
      <div><Link to="/" className="font-semibold text-sm">YASVAND<span className="text-primary">.</span></Link><p className="text-xs text-muted-foreground mt-2">Building with curiosity. Solving with intelligence.</p></div>
      <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} Yasvand A K</p>
      <div className="flex items-center gap-4 text-muted-foreground"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={16}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={16}/></a><Link to="/contact" className="flex items-center gap-2 text-xs">Let’s connect <ArrowUpRight size={14}/></Link></div>
    </div></footer>
  </MotionConfig>
}
