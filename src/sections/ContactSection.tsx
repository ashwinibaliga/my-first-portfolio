import { useState, FormEvent } from 'react'
import { Mail, Send, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import SectionHeading from '../components/SectionHeading'
import { contact } from '../data/portfolio'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    // ──────────────────────────────────────────────────────────────────────────
    // This is a frontend-only contact form. There is no backend server.
    // Submitting opens the visitor's email client with the message pre-filled.
    // No data is silently sent to any server.
    // ──────────────────────────────────────────────────────────────────────────
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Ashwini,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputStyle = (field: keyof FormErrors) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--bg-secondary)',
    border: `1.5px solid ${errors[field] ? '#EF4444' : 'var(--border)'}`,
    borderRadius: '0.625rem',
    color: 'var(--text-main)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  } as React.CSSProperties)

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Ambient */}
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          bottom: '-100px',
          right: '-100px',
        }}
        aria-hidden="true"
      />

      <div className="max-content relative z-10">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Have a question, project idea, or just want to say hello? Feel free to reach out."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — links */}
          <div className="flex flex-col gap-6">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              The best way to reach me is via email. I'm also reachable on LinkedIn and GitHub.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  href: `mailto:${contact.email}`,
                  icon: Mail,
                  label: 'Email',
                  value: contact.email,
                  external: false,
                },
                {
                  href: contact.github,
                  icon: GithubIcon,
                  label: 'GitHub',
                  value: 'github.com/ashwinibaliga',
                  external: true,
                },
                {
                  href: contact.linkedin,
                  icon: LinkedinIcon,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/ashwini-baliga-bb48b3416',
                  external: true,
                },
              ].map(({ href, icon: Icon, label, value, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={`${label}: ${value}${external ? ' (opens in new tab)' : ''}`}
                  className="card flex items-center gap-4 p-4 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)' }}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="card p-7">
            {/* Disclaimer banner */}
            <div
              className="flex items-start gap-3 p-3 rounded-lg mb-6 text-sm"
              style={{
                background: 'rgba(167,139,250,0.08)',
                border: '1px solid rgba(167,139,250,0.2)',
                color: 'var(--text-secondary)',
              }}
              role="note"
            >
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <span>
                <strong style={{ color: 'var(--text-main)' }}>How this works:</strong> Submitting opens your email client
                with the message pre-filled. No data is sent to any server automatically.
              </span>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)' }}
                >
                  <Mail size={26} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: 'var(--text-main)' }}>
                  Email client opened!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                  Your email app should have opened with the message pre-filled. If not, please email{' '}
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {contact.email}
                  </a>{' '}
                  directly.
                </p>
                <button
                  className="btn-secondary text-sm"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-main)' }}>
                      Your Name <span aria-hidden="true" style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      style={inputStyle('name')}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-xs mt-1" style={{ color: '#EF4444' }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-main)' }}>
                      Your Email <span aria-hidden="true" style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      style={inputStyle('email')}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-xs mt-1" style={{ color: '#EF4444' }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-main)' }}>
                      Message <span aria-hidden="true" style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hello Ashwini, I'd like to…"
                      style={{ ...inputStyle('message'), resize: 'vertical', fontFamily: 'inherit' }}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-xs mt-1" style={{ color: '#EF4444' }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary justify-center"
                  >
                    <Send size={16} aria-hidden="true" />
                    Open Email Client
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
