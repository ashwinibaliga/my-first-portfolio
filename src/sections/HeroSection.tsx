import { ChevronDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { contact, person, resume } from '../data/portfolio'

function handleScroll(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

// Animated decorative background — pure CSS, no heavy library
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large ambient orbs */}
      <div
        className="glow-orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          top: '-200px',
          right: '-100px',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)',
          bottom: '-100px',
          left: '-80px',
        }}
      />
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.18,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 20%, transparent 100%)',
        }}
      />
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding"
      aria-labelledby="hero-heading"
      style={{ paddingTop: '7rem' }}
    >
      <HeroBg />

      <div className="max-content relative z-10 flex flex-col gap-6 max-w-3xl">
        {/* Eyebrow */}
        <p className="section-label">
          CSE-AIML Student · Aspiring Developer
        </p>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="font-bold leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: 'var(--text-main)' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Ashwini&nbsp;Baliga.</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg font-medium"
          style={{ color: 'var(--accent-primary)', letterSpacing: '0.01em' }}
        >
          {person.tagline}
        </p>

        {/* Short intro */}
        <p
          className="max-w-xl"
          style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: '1.75' }}
        >
          I'm a frontend-focused CS student specialising in AI &amp; ML, passionate about building
          clean web experiences and solving real-world problems through code.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={() => handleScroll('#projects')}
            className="btn-primary"
          >
            Explore My Work
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-secondary"
          >
            Get in Touch
          </button>
          {resume.available && (
            <a
              href={resume.path}
              download
              className="btn-secondary"
              aria-label="Download Ashwini's resume PDF"
            >
              Download Resume
            </a>
          )}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ashwini's GitHub profile (opens in new tab)"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <GithubIcon size={20} aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ashwini's LinkedIn profile (opens in new tab)"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <LinkedinIcon size={20} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label={`Email Ashwini at ${contact.email}`}
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Mail size={20} aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity"
        style={{ color: 'var(--accent-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} aria-hidden="true" className="animate-bounce" />
      </button>
    </section>
  )
}
