import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { contact, person } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="section-padding py-10"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-content flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="font-bold text-base gradient-text">{person.name}</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Crafted with curiosity and code.
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            © {year} {person.name}. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ashwini's GitHub profile (opens in new tab)"
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <GithubIcon size={20} aria-hidden="true" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ashwini's LinkedIn profile (opens in new tab)"
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <LinkedinIcon size={20} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label={`Email Ashwini at ${contact.email}`}
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
