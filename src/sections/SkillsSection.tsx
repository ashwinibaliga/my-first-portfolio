import { Layout, Code2, Palette, Monitor } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/portfolio'

const ICON_MAP: Record<string, React.FC<{ size?: number; 'aria-hidden'?: 'true' }>> = {
  Layout,
  Code2,
  Palette,
  Monitor,
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="max-content">
        <SectionHeading
          label="Skills"
          title="What I Work With"
          description="A focused set of technologies and tools I use to build frontend experiences."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ label, icon, skills }) => {
            const Icon = ICON_MAP[icon] ?? Code2
            return (
              <div key={label} className="card p-6 flex flex-col gap-4">
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)' }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight" style={{ color: 'var(--text-main)' }}>
                    {label}
                  </h3>
                </div>

                {/* Skill chips */}
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {skills.map(skill => (
                    <li key={skill}>
                      <span className="tech-badge">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Skills are presented as areas of knowledge, not formal proficiency ratings.
        </p>
      </div>
    </section>
  )
}
