import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BrainCircuit, ScanEye, Code2, Database, BarChart3, Cpu, MapPin, Briefcase, Mail, Phone, Trophy, Medal, Award, GraduationCap, Languages, Users, Lightbulb, Check, Send, CalendarDays, Leaf, Terminal, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import neuralImage from '@/assets/neural-field.jpg'
import { profile, projects, certifications, type Project } from './data'

function GitHubIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return <img src="/icons/github-mark.svg" alt="GitHub" width={size} height={size} className={className} />
}

function LinkedInIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return <img src="/icons/linkedin-mark.svg" alt="LinkedIn" width={size} height={size} className={className} />
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
export function SectionHeading({ kicker, title, description, h1 = false }: { kicker: string; title: string; description?: string; h1?: boolean }) {
  return <div><p className="section-kicker">{kicker}</p>{h1 ? <h1 className="section-title">{title}</h1> : <h2 className="section-title">{title}</h2>}{description && <p className="section-description">{description}</p>}</div>
}
export function Hero() {
  const reduced = useReducedMotion()
  return <section className="hero">
    <motion.img initial={false} animate={reduced ? {} : { scale: [1, 1.015, 1], x: [0, -3, 0] }} transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }} src={neuralImage} width={1920} height={1024} alt="" fetchPriority="high" loading="eager" decoding="async" className="hero-image" />
    <div className="site-container hero-content"><Reveal>
      <div className="status-badge"><span className="status-dot"/>AI & Data Science Student <span className="text-primary">•</span> 2023–2027</div>
      <p className="hero-name">Hi, I’m Yasvand A K <span className="text-primary">↗</span></p>
      <h1 className="hero-title">Building Intelligent<br className="hidden sm:block"/> Solutions for<br className="hidden sm:block"/> <span className="text-primary">Real-World Problems.</span></h1>
      <p className="hero-copy">AI & Data Science student passionate about machine learning, computer vision, and building practical AI solutions.</p>
      <div className="flex flex-wrap items-center gap-3 mt-7"><Button asChild size="lg" className="h-11 px-5 text-xs"><Link to="/projects">View Projects <ArrowUpRight/></Link></Button><Button asChild variant="outline" size="lg" className="h-11 px-5 text-xs"><a href="/Yasvand-AK-Resume.pdf" download>Download Resume <ArrowUpRight/></a></Button><Button asChild variant="outline" size="lg" className="h-11 px-5 text-xs"><Link to="/contact">Contact Me <ArrowRight/></Link></Button><span className="mx-1 h-6 border-l border-border hidden sm:block"/><Button asChild variant="ghost" size="icon" aria-label="GitHub profile" title="GitHub"><a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon size={18}/></a></Button><Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile" title="LinkedIn"><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={18}/></a></Button></div>
      <p className="hero-meta"><MapPin size={12}/> Trichy, Tamil Nadu, India <span className="mx-2 text-border">/</span> <span className="flex items-center gap-2"><span className="status-dot"/>Learning. Building. Evolving.</span></p>
    </Reveal></div>
    <div className="visual-label"><Network size={12} className="text-primary"/>NEURAL NETWORK VISUALIZATION <span className="text-primary">—</span> AI / ML</div>
  </section>
}
export function SkillRibbon() {
  return <div className="skill-ribbon"><div className="site-container skill-ribbon-inner">{[[Terminal, 'Python'], [Code2, 'Java'], [Database, 'SQL'], [BarChart3, 'Power BI'], [BrainCircuit, 'Machine Learning'], [ScanEye, 'Computer Vision']].map(([Icon, name]) => { const I = Icon as typeof Terminal; return <div key={String(name)} className="ribbon-item"><I/><span>{String(name)}</span></div> })}</div></div>
}
function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  return <motion.article whileHover={{ y: -4, scale: 1.002 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="project-card h-full flex flex-col cursor-pointer" onClick={onSelect}>
    <div className="project-art"><img src={project.image} alt={project.alt} width={1200} height={768} loading="lazy" decoding="async"/><span className="project-image-label">{project.id === 'plant' ? <Leaf size={11} className="text-primary"/> : <ScanEye size={11} className="text-cyan"/>}{project.category}</span><span className="project-number">PROJECT / {project.number}</span></div>
    <div className="project-body flex flex-col flex-1"><div className="flex gap-2 items-center mb-3"><span className={`text-[10px] flex items-center gap-1.5 ${project.id === 'plant' ? 'text-violet' : 'text-cyan'}`}><Users size={12}/>{project.role}</span>{project.achievement && <span className="text-primary text-[9px] flex items-center gap-1 ml-auto"><Trophy size={11}/>First Prize</span>}</div>
      <h3 className="project-heading">{project.title}</h3><p className="project-description">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-5">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="project-footer"><span className="text-[10px] text-muted-foreground font-mono">AI for practical impact</span><div className="flex items-center gap-2"><a href={project.github} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline" onClick={event => event.stopPropagation()}>GitHub</a><Button variant="ghost" size="sm" className="text-xs px-0 text-foreground" onClick={event => { event.stopPropagation(); onSelect() }} aria-label={`View ${project.title}`}>View Project <ArrowUpRight/></Button></div></div>
    </div>
  </motion.article>
}
export function ProjectsSection({ full = false }: { full?: boolean }) {
  const [selected, setSelected] = useState<Project | null>(null)
  return <section className="section-space"><div className="site-container"><Reveal>
    <div className="flex flex-wrap justify-between items-end gap-5 mb-9"><SectionHeading kicker="Selected work" title="Featured Projects" description="AI solutions built to solve practical problems." h1={full}/>{!full && <Button asChild variant="ghost" size="sm" className="text-xs text-muted-foreground"><Link to="/projects">Explore my work <ArrowUpRight/></Link></Button>}</div>
    <div className="grid md:grid-cols-2 gap-6">{projects.map(project => <ProjectCard key={project.id} project={project} onSelect={() => setSelected(project)}/>)}</div>
  </Reveal></div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null) }}><DialogContent className="max-w-3xl w-[calc(100%-32px)] max-h-[90dvh] overflow-y-auto p-6 sm:p-8">
      {selected && <><p className="section-kicker">Project / {selected.number} · {selected.role}</p><DialogTitle className="text-2xl leading-snug pr-4">{selected.title}</DialogTitle><DialogDescription>{selected.description}</DialogDescription><img src={selected.image} alt={selected.alt} loading="lazy" decoding="async" width={1200} height={768} className="rounded-md w-full aspect-[2.6] object-cover"/><p className="text-[10px] text-muted-foreground">Concept visualization, not a screenshot of the project.</p>
        <div className="mt-4 flex flex-wrap items-center gap-3"> <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"><GitHubIcon size={14}/> View GitHub Repository </a> </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-2">{[['Problem', selected.problem], ['Solution', selected.solution], ['My contribution', selected.contribution]].map(([heading, text]) => <div key={heading} className={heading === 'My contribution' ? 'sm:col-span-2' : ''}><h3 className="font-semibold mb-2 text-sm">{heading}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        <div><h3 className="font-semibold text-sm mb-3">Technologies & concepts</h3><div className="flex flex-wrap gap-2">{selected.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><p className="text-xs mt-3 text-muted-foreground">Specific frameworks and model architecture are not provided in the résumé.</p></div>
        <div><h3 className="font-semibold text-sm mb-3">Key features</h3><ul className="space-y-2">{selected.features.map(feature => <li key={feature} className="text-xs text-muted-foreground flex gap-2"><Check size={13} className="text-primary shrink-0"/>{feature}</li>)}</ul></div>
        {selected.achievement && <div className="sm:col-span-2 flex items-center gap-3 border-t border-border pt-5 text-primary"><Trophy size={23}/><div><h3 className="text-sm font-semibold">Achievement · First Prize</h3><p className="text-xs text-muted-foreground mt-1">AI-Powered Plant Identification and Disease Classification System</p></div></div>}</div></>}
    </DialogContent></Dialog>
  </section>
}
export function AboutSection({ full = false }: { full?: boolean }) {
  return <section className={`section-space ${!full ? 'border-t border-border' : ''}`}><div className="site-container"><Reveal className="grid md:grid-cols-[1.25fr_1fr] gap-12 lg:gap-20 items-center"><div><SectionHeading kicker="The person behind the projects" title="About Me" h1={full}/><p className="body-copy mt-6">{profile.summary}</p><div className="grid grid-cols-2 gap-3 mt-7">{[[BrainCircuit, 'AI / ML'], [ScanEye, 'Computer Vision'], [Lightbulb, 'Problem Solving'], [Users, 'Team Leadership']].map(([Icon, text]) => { const I = Icon as typeof BrainCircuit; return <div className="flex gap-3 items-center py-3 text-xs border-b border-border" key={String(text)}><I size={17} className="text-primary"/>{String(text)}</div> })}</div>{!full && <Button asChild variant="link" className="px-0 mt-5 text-xs"><Link to="/about">More about me <ArrowUpRight/></Link></Button>}</div><div><img src={neuralImage} className="about-visual" alt="Abstract interconnected neural network representing artificial intelligence" width={1920} height={1024} loading="lazy"/><p className="font-mono text-[9px] text-muted-foreground mt-3 flex justify-between"><span>CONNECTING IDEAS. BUILDING SOLUTIONS.</span><Network size={12} className="text-primary"/></p></div></Reveal></div></section>
}
export function SkillsSection({ full = false }: { full?: boolean }) {
  const groups = [{ name: 'Programming', icon: Code2, color: 'text-cyan', skills: ['Python', 'Java', 'SQL'] }, { name: 'Data & Analytics', icon: BarChart3, color: 'text-violet', skills: ['Power BI'] }, { name: 'AI / ML', icon: BrainCircuit, color: 'text-primary', skills: ['Machine Learning', 'Computer Vision', 'Image Processing'] }]
  return <section className="section-space border-t border-border"><div className="site-container"><Reveal><SectionHeading kicker="My toolkit" title="Skills & Expertise" description="The tools and concepts behind my work." h1={full}/><div className="grid md:grid-cols-3 gap-5 mt-9">{groups.map(group => <motion.div whileHover={{ y: -4 }} key={group.name} className="surface-item"><group.icon className={group.color} size={25}/><h3 className="font-medium text-lg mt-6 mb-5">{group.name}</h3><div className="flex flex-wrap gap-2">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></motion.div>)}</div></Reveal></div></section>
}
export function ExperienceSection({ full = false }: { full?: boolean }) {
  return <section className="section-space border-t border-border"><div className="site-container"><Reveal><SectionHeading kicker="Learning in the real world" title="Experience" h1={full}/><div className="grid md:grid-cols-[.65fr_1.5fr] gap-8 mt-10"><div><p className="text-primary text-sm font-mono flex gap-2 items-center"><CalendarDays size={15}/>June 2025</p><p className="text-muted-foreground text-xs mt-3 flex gap-2 items-center"><MapPin size={13}/>Chennai, Tamil Nadu</p></div><div className="timeline"><div className="timeline-entry"><p className="text-xs text-primary flex gap-2 items-center mb-3"><Briefcase size={14}/>AI Intern</p><h3 className="text-xl sm:text-2xl font-medium mb-6">Eagle Hi-Tech Softclou Pvt Ltd.</h3><ul className="space-y-4">{['Gained hands-on experience developing and evaluating AI solutions in a professional software environment while working alongside experienced engineers as part of the core AI team.', 'Collaborated with engineers to preprocess datasets, evaluate AI models, and validate model performance throughout different stages of the development lifecycle.', 'Documented internal workflows and supported project demonstrations, strengthening practical understanding of end-to-end AI pipelines.'].map(item => <li key={item} className="text-sm text-muted-foreground leading-7 flex gap-3"><span className="text-primary">—</span>{item}</li>)}</ul></div></div></div></Reveal></div></section>
}
export function AchievementsSection({ full = false }: { full?: boolean }) {
  const awards = [{ title: 'First Prize', detail: 'AI-Powered Plant Identification and Disease Classification System', icon: Trophy, color: 'text-primary', label: 'AWARD' }, { title: 'Second Prize', detail: 'Visual Drawing and Hand Tracking System', icon: Medal, color: 'text-cyan', label: 'AWARD' }, { title: 'Hackathon Participant', detail: 'VIT Chennai', icon: Code2, color: 'text-violet', label: 'HACKATHON' }, { title: 'Hackathon Participant', detail: 'SMVEC, Pondicherry', icon: Code2, color: 'text-violet', label: 'HACKATHON' }]
  return <section className="section-space border-t border-border"><div className="site-container"><Reveal><SectionHeading kicker="Milestones that matter" title="Achievements" h1={full}/><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">{awards.map(award => <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="surface-item" key={award.detail}><div className="flex justify-between gap-2"><award.icon className={award.color} size={26}/><span className="font-mono text-[8px] text-muted-foreground">{award.label}</span></div><h3 className="text-base font-medium mt-6">{award.title}</h3><p className="text-xs text-muted-foreground leading-6 mt-3">{award.detail}</p></motion.div>)}</div></Reveal></div></section>
}
export function CertificationsSection({ full = false }: { full?: boolean }) {
  return <section className="section-space border-t border-border"><div className="site-container"><Reveal><SectionHeading kicker="Continuous learning" title="Certifications" h1={full}/><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">{certifications.map((certificate, i) => <div className="surface-item flex items-start gap-4" key={certificate}><Award size={23} className={i % 2 ? 'text-violet shrink-0' : 'text-cyan shrink-0'}/><h3 className="text-sm leading-6 font-medium">{certificate}</h3></div>)}</div></Reveal></div></section>
}
export function EducationSection({ full = false }: { full?: boolean }) {
  return <section className="section-space border-t border-border"><div className="site-container"><Reveal><SectionHeading kicker="Academic foundation" title="Education" h1={full}/><div className="grid md:grid-cols-2 gap-8 mt-9"><div className="timeline"><div className="timeline-entry"><p className="text-xs font-mono text-primary mb-3">2023 – 2027</p><h3 className="text-xl leading-8 font-medium">Kongunadu College of Engineering & Technology</h3><p className="text-sm mt-4">B.Tech – Artificial Intelligence & Data Science</p><p className="text-xs text-muted-foreground flex gap-2 mt-4"><MapPin size={13}/>Trichy, Tamil Nadu</p></div></div><div className="timeline"><div className="timeline-entry"><p className="text-xs font-mono text-cyan mb-3">2020 / 2023</p><h3 className="text-xl leading-8 font-medium">Ananda Vidyalaya Matriculation Higher Secondary School</h3><p className="text-sm mt-4">12th Standard (HSC) – 2023</p><p className="text-sm mt-2">10th Standard (SSLC) – 2020</p><p className="text-xs text-muted-foreground flex gap-2 mt-4"><MapPin size={13}/>Namakkal, Tamil Nadu</p></div></div></div></Reveal></div></section>
}
export function LanguagesSection() {
  return <section className="pb-16"><div className="site-container"><Reveal><h2 className="text-lg font-medium flex items-center gap-3 mb-5"><Languages size={20} className="text-primary"/>Languages</h2><div className="flex flex-wrap gap-3">{['English', 'Tamil', 'Japanese – N5'].map(language => <div className="tag px-5 py-3 text-xs" key={language}>{language}</div>)}</div></Reveal></div></section>
}
export function ResumeSection() {
  return <section className="section-space"><div className="site-container"><Reveal>
    <SectionHeading kicker="Professional overview" title="Resume" description="AI & Data Science student with hands-on experience in machine learning, computer vision, and practical AI systems." h1 />
    <div className="grid gap-6 mt-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="surface-item p-6 sm:p-7">
        <p className="text-xs text-primary font-mono uppercase tracking-[0.2em]">Profile</p>
        <h3 className="text-2xl font-medium mt-4">Yasvand A K</h3>
        <p className="text-sm text-muted-foreground mt-3">{profile.summary}</p>
        <div className="grid sm:grid-cols-2 gap-3 mt-6">
          {[['Location', profile.location], ['Email', profile.email], ['Phone', profile.phone], ['GitHub', 'github.com/yasvandak']].map(([label, value]) => <div key={label} className="rounded-md border border-border bg-background/50 p-3"><p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">{label}</p><p className="text-sm mt-1">{value}</p></div> )}
        </div>
      </div>
      <div className="surface-item p-6 sm:p-7">
        <p className="text-xs text-primary font-mono uppercase tracking-[0.2em]">Core skills</p>
        <div className="flex flex-wrap gap-2 mt-5">{['Python', 'Java', 'SQL', 'Power BI', 'Machine Learning', 'Computer Vision', 'Image Processing', 'Deep Learning'].map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>
        <div className="mt-6 space-y-4">
          <div><p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">Education</p><p className="text-sm mt-1">B.Tech – Artificial Intelligence & Data Science</p><p className="text-xs text-muted-foreground">Kongunadu College of Engineering & Technology</p></div>
          <div><p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">Experience</p><p className="text-sm mt-1">AI Intern · Eagle Hi-Tech Softclou Pvt Ltd.</p><p className="text-xs text-muted-foreground">June 2025 · Chennai, Tamil Nadu</p></div>
        </div>
      </div>
    </div>

    <div className="grid gap-6 mt-10 lg:grid-cols-2">
      <div className="surface-item p-6 sm:p-7">
        <p className="text-xs text-primary font-mono uppercase tracking-[0.2em]">Selected projects</p>
        <div className="space-y-5 mt-5">
          {projects.map(project => <div key={project.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0"><h3 className="font-medium text-base">{project.title}</h3><p className="text-xs text-muted-foreground mt-2">{project.role}</p><p className="text-sm text-muted-foreground mt-3">{project.description}</p></div> )}
        </div>
      </div>
      <div className="surface-item p-6 sm:p-7">
        <p className="text-xs text-primary font-mono uppercase tracking-[0.2em]">Achievements & certifications</p>
        <ul className="space-y-4 mt-5 text-sm text-muted-foreground">
          <li>• First Prize – AI-Powered Plant Identification and Disease Classification System</li>
          <li>• Second Prize – Visual Drawing and Hand Tracking System</li>
          <li>• NPTEL – Internet of Things</li>
          <li>• MongoDB Basics</li>
          <li>• NVIDIA – Fundamentals of Deep Learning</li>
          <li>• Java Programming</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Button asChild><Link to="/contact">Contact me <ArrowUpRight/></Link></Button>
      <Button asChild variant="outline"><a href="/Yasvand-AK-Resume.pdf" download>Download PDF <ArrowUpRight/></a></Button>
      <Button asChild variant="outline"><a href={profile.github} target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight/></a></Button>
    </div>
  </Reveal></div></section>
}
export function ContactTeaser() {
  return <section className="contact-band section-space"><div className="site-container"><Reveal className="flex flex-wrap items-center justify-between gap-7"><div><p className="section-kicker">Have an idea? Let’s connect</p><h2 className="section-title">Let’s Build Something <span className="text-primary">Intelligent.</span></h2><p className="section-description">Interested in AI, machine learning, computer vision, or collaborative projects? Let’s connect.</p></div><Button asChild size="lg"><Link to="/contact">Get in touch <ArrowUpRight/></Link></Button></Reveal></div></section>
}
export function ContactSection() {
  const [draftReady, setDraftReady] = useState(false)
  const [draftUrl, setDraftUrl] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${String(data.get('name'))}`)}&body=${encodeURIComponent(`Name: ${String(data.get('name'))}\nEmail: ${String(data.get('email'))}\n\n${String(data.get('message'))}`)}`
    setDraftUrl(url); setDraftReady(true); window.location.href = url
  }
  return <section className="section-space"><div className="site-container"><Reveal><SectionHeading kicker="Let’s connect" title="Let’s Build Something Intelligent." description="Interested in AI, machine learning, computer vision, or collaborative projects? Let’s connect." h1/><div className="grid md:grid-cols-2 gap-12 lg:gap-24 mt-12"><div><p className="body-copy mb-7">A conversation is where the next great project begins.</p><div className="space-y-6">{[{ icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` }, { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:+91${profile.phone}` }, { icon: GitHubIcon, label: 'GitHub', value: 'github.com/yasvandak', href: profile.github }, { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/yasvandak', href: profile.linkedin }].map(item => <a key={item.label} href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 group"><span className="p-3 bg-muted rounded-md text-primary"><item.icon size={18}/></span><span><span className="text-xs text-muted-foreground block mb-1">{item.label}</span><span className="text-sm group-hover:text-primary transition-colors">{item.value}</span></span><ArrowUpRight size={15} className="text-muted-foreground ml-auto"/></a>)}</div><p className="text-xs text-muted-foreground mt-9 flex gap-2"><MapPin size={14}/>{profile.location}</p></div><form onSubmit={submit} className="space-y-5"><div><label htmlFor="contact-name" className="text-xs block mb-2">Name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" className="field"/></div><div><label htmlFor="contact-email" className="text-xs block mb-2">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className="field"/></div><div><label htmlFor="contact-message" className="text-xs block mb-2">Message</label><textarea id="contact-message" name="message" required maxLength={5000} rows={5} placeholder="Tell me what you have in mind…" className="field resize-y"/></div><p className="text-xs text-muted-foreground leading-5">This form opens a draft in your email app. Your message is not sent automatically.</p><Button type="submit" size="lg" className="w-full">Send Message <Send/></Button>{draftReady && <p role="status" className="text-xs text-primary leading-6">Your email draft is ready. Complete sending in your email app. <a href={draftUrl} className="underline">Open draft again</a> if it didn’t open.</p>}</form></div></Reveal></div></section>
}
