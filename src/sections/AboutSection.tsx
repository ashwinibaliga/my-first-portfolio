import { GraduationCap, BookOpen, MapPin, Code2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { person } from '../data/portfolio'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: person.education.institution,
    sub: person.education.branch,
  },
  {
    icon: Code2,
    label: 'Focus',
    value: 'Frontend Development',
    sub: 'React · JavaScript · HTML/CSS',
  },
  {
    icon: BookOpen,
    label: 'Interests',
    value: 'Technology & Learning',
    sub: 'AI/ML · Web · Problem Solving',
  },
  {
    icon: MapPin,
    label: 'Beyond Code',
    value: 'Reading & Travelling',
    sub: 'Books · Adventures with friends',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-content">
        <SectionHeading
          label="About Me"
          title="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: '1.8' }}>
              {person.intro}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: '1.8' }}>
              Currently pursuing{' '}
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>
                Computer Science and Engineering — Artificial Intelligence and Machine Learning
              </span>{' '}
              at{' '}
              <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>
                {person.education.institution}
              </span>
              , I'm continually growing my skills, participating in hackathons, and building projects
              that translate ideas into working web experiences.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="card p-5 flex flex-col gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)' }}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </p>
                  <p className="font-semibold text-sm mt-0.5" style={{ color: 'var(--text-main)' }}>
                    {value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
