import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { Theme } from '../App'
import ThemeToggle from './ThemeToggle'
import { resume } from '../data/portfolio'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      // Determine active section via IntersectionObserver alternative (scroll position)
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const handleNavClick = useCallback((href: string) => {
    closeMenu()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      // Offset for sticky nav (approx 72px)
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [closeMenu])

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(var(--bg-main-raw, 11,11,18), 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg-main) 90%, transparent)' : 'transparent',
        }}
      >
        <nav
          className="max-content flex items-center justify-between gap-4 px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="font-bold text-lg tracking-tight gradient-text"
            onClick={e => { e.preventDefault(); handleNavClick('#hero') }}
            aria-label="Ashwini Baliga — back to top"
          >
            AB
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => { e.preventDefault(); handleNavClick(href) }}
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150"
                    style={{
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--accent-glow)' : 'transparent',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {resume.available ? (
              <a
                href={resume.path}
                download
                className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
              >
                Resume
              </a>
            ) : null}

            {/* Hamburger — mobile */}
            <button
              className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-main)',
                cursor: 'pointer',
              }}
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
            className="md:hidden px-6 pb-4 flex flex-col gap-1"
            style={{
              background: 'color-mix(in srgb, var(--bg-secondary) 96%, transparent)',
              borderTop: '1px solid var(--border)',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={href}
                  href={href}
                  onClick={e => { e.preventDefault(); handleNavClick(href) }}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                    background: isActive ? 'var(--accent-glow)' : 'transparent',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </a>
              )
            })}
            {resume.available && (
              <a
                href={resume.path}
                download
                className="btn-primary mt-2 text-sm justify-center"
              >
                Download Resume
              </a>
            )}
          </div>
        )}
      </header>
    </>
  )
}
