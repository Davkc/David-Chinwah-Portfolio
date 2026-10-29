import { useEffect, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, ExternalLink, Github, Linkedin, MapPin, Menu, Moon, Sun, X } from 'lucide-react'
import { education, experience, figmaProject, profile, projects, skills } from './data'

const nav = [{ label: 'About', id: 'about' }, { label: 'Work', id: 'work' }, { label: 'Experience', id: 'experience' }, { label: 'Skills', id: 'skills' }, { label: 'Contact', id: 'contact' }]

function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* Theme still works for this visit. */ }
  }, [dark])

  useEffect(() => {
    const sections = nav.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    const reveals = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) }
    }), { threshold: 0.12 })
    reveals.forEach((el) => revealObserver.observe(el))
    return () => { observer.disconnect(); revealObserver.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Main navigation">
        <a href="#home" className="wordmark" onClick={closeMenu} aria-label="David Chinwah, home">DC<span>.</span></a>
        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {nav.map(({ label, id }) => <a key={id} className={active === id ? 'nav-link active' : 'nav-link'} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-email" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={14} /></a>
        </div>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} onClick={() => setDark(!dark)}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </nav>
    </header>

    <main id="main">
      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-name">DAVID CHINWAH</span><span className="eyebrow-divider">/</span><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-divider">/</span> DFW, TEXAS</div>
          <h1 id="hero-title">Building useful<br />software for a <span className="serif-accent">smarter</span> world<span className="accent-period">.</span></h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-copy">I bring software engineering and hands-on AI evaluation together to build thoughtful, reliable digital experiences.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View projects <ArrowDownRight size={16} /></a>
            <a className="button button-secondary" href={profile.cv} download>Download CV <ArrowDown size={15} /></a>
            <a className="button button-text" href="#contact">Contact me <ArrowRight size={15} /></a>
          </div>
          <div className="hero-bottom"><span className="hero-caption">SOFTWARE ENGINEERING × HUMAN-CENTERED AI</span><a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card card-code"><span className="code-dot" /><span className="code-dot" /><span className="code-dot" /><div className="code-lines"><i /><i /><i /><i /><i /></div></div>
          <div className="art-center"><span className="center-mark">DC</span><span className="center-star">✳</span></div>
          <div className="art-card card-ai"><span className="ai-spark">✳</span><span>human<br />+ machine</span></div>
          <span className="art-label label-top">DESIGN WITH INTENT</span><span className="art-label label-bottom">BUILT FOR PEOPLE</span>
        </div>
      </section>

      <section className="about section-pad" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="section-label reveal"><span>01</span><span className="label-line" /> ABOUT</div>
          <div className="about-body reveal"><p className="overline">A LITTLE ABOUT ME</p><h2 id="about-title">Curious by nature.<br /><span className="serif-accent">Intentional</span> by design.</h2><p className="about-copy">{profile.bio}</p><div className="about-meta"><span><MapPin size={15} /> {profile.location}</span><span><Code2 size={15} /> React · TypeScript · AI</span></div></div>
          <div className="about-aside reveal"><div className="aside-index">01 <span>/ 04</span></div><p>Engineering that pairs the precision of code with a clear understanding of how people—and models—actually think.</p><a href="#experience" className="text-link">Explore my experience <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="work section-pad" id="work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head reveal"><div><div className="section-label"><span>02</span><span className="label-line" /> SELECTED WORK</div><p className="overline">IDEAS, MADE INTERACTIVE</p><h2 id="work-title">A few things I’ve <span className="serif-accent">built.</span></h2></div><p className="section-note">A mix of AI-powered tools and thoughtful, user-first web experiences.</p></div>
          <div className="project-list">{projects.map((project) => <article className="project-card reveal" key={project.number}>
            <div className="project-visual"><img src={project.image} alt={project.alt} loading="lazy" /><span className="visual-index">PROJECT / {project.number}</span></div>
            <div className="project-content"><div className="project-topline"><span className="project-category">{project.category}</span><span className="project-number">{project.number}</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
              <div className="case-study"><div><span className="case-label">THE PROBLEM</span><p>{project.problem}</p></div><div><span className="case-label">WHAT I BUILT</span><p>{project.built}</p></div><div><span className="case-label">STACK</span><div className="tag-list">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></div>
              <div className="project-links"><a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a><a className="button button-secondary" href={project.code} target="_blank" rel="noreferrer">View code <Github size={15} /></a></div>
            </div>
          </article>)}</div>
          <div className="more-work reveal"><span className="more-label">MORE WORK</span><div><h3>{figmaProject.name}</h3><p>{figmaProject.description}</p></div><a className="icon-link" href={figmaProject.url} target="_blank" rel="noreferrer" aria-label="View Sukulu Figma project"><ArrowUpRight size={19} /></a></div>
        </div>
      </section>

      <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
        <div className="container exp-grid"><div className="exp-intro reveal"><div className="section-label"><span>03</span><span className="label-line" /> EXPERIENCE</div><p className="overline">WORK THAT SHAPES MY PERSPECTIVE</p><h2 id="experience-title">A foundation in <span className="serif-accent">quality.</span></h2><p>Four years of evaluating, refining and improving AI systems—now paired with a growing practice in software engineering.</p><div className="exp-stat"><span className="stat-number">4<span>+</span></span><span className="stat-copy">YEARS IN AI<br />TRAINING & EVALUATION</span></div></div>
          <div className="timeline">{experience.map((job, i) => <article className="timeline-item reveal" key={`${job.company}-${job.role}`}><div className="timeline-marker"><span className={i === 0 ? 'marker-dot current' : 'marker-dot'} /></div><div className="timeline-content"><div className="timeline-meta"><span>{job.date}</span>{job.placeholder && <span className="placeholder-flag">DETAILS NEEDED</span>}</div><h3>{job.role}</h3><p className="company">{job.company}</p><p className={job.placeholder ? 'job-description placeholder-copy' : 'job-description'}>{job.description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="skills section-pad" id="skills" aria-labelledby="skills-title">
        <div className="container"><div className="section-head reveal"><div><div className="section-label"><span>04</span><span className="label-line" /> TOOLKIT</div><p className="overline">WHAT I BRING TO THE TABLE</p><h2 id="skills-title">Skills & <span className="serif-accent">tools.</span></h2></div><p className="section-note">A practical toolkit across building, evaluating and shaping digital products.</p></div>
          <div className="skills-grid">{skills.map((group) => <article className="skill-card reveal" key={group.group}><span className="skill-index">{String(skills.indexOf(group) + 1).padStart(2, '0')}</span><h3>{group.group}</h3><ul>{group.items.map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul></article>)}</div>
          <div className="education reveal"><div className="edu-heading"><span className="case-label">EDUCATION & CERTIFICATION</span><span className="edu-icon">✳</span></div>{education.map((item) => <div className="edu-row" key={item.degree}><div><h3>{item.degree}</h3><p>{item.school}</p></div><span>{item.date}</span></div>)}</div>
        </div>
      </section>

      <section className="contact section-pad" id="contact" aria-labelledby="contact-title"><div className="container contact-inner reveal"><div className="contact-orbit" aria-hidden="true">✳</div><div className="section-label"><span>05</span><span className="label-line" /> GET IN TOUCH</div><p className="overline">HAVE A GOOD ONE IN MIND?</p><h2 id="contact-title">Let’s build something<br /><span className="serif-accent">meaningful.</span></h2><p className="contact-copy">I’m open to software engineering and AI-focused roles. If the work sounds interesting, I’d love to hear about it.</p><a className="button button-light" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={16} /></a><div className="contact-details"><a href={`mailto:${profile.email}`}>{profile.email}</a><span className="contact-sep">·</span><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><span className="contact-sep">·</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a href="#home" className="wordmark footer-mark">DC<span>.</span></a><span>Designed & built with care by David Chinwah</span><span>© {new Date().getFullYear()} · DFW, TX</span><div className="footer-social"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a></div></div></footer>
  </>
}

export default App
