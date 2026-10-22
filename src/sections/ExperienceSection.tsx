import { HandHelping, Music } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/portfolio'

const ICON_MAP: Record<string, React.FC<{ size?: number; 'aria-hidden'?: 'true' }>> = {
  HandHelping,
  Music,
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-content">
        <SectionHeading
          label="Experience"
          title="Involvement & Activities"
          description="Extracurricular involvement beyond the classroom."
        />

        <div className="flex flex-col gap-0" role="list">
          {experiences.map((exp, idx) => {
            const Icon = ICON_MAP[exp.icon] ?? HandHelping
            const isLast = idx === experiences.length - 1

            return (
              <div
                key={exp.id}
                role="listitem"
                className="flex gap-5 relative"
              >
                {/* Timeline line */}
                {!isLast && (
                  <div
                    className="absolute left-5 top-10 bottom-0 w-px"
                    style={{ background: 'var(--border)' }}
                    aria-hidden="true"
                  />
                )}

                {/* Icon node */}
                <div className="flex-shrink-0 z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mt-1"
                    style={{
                      background: 'var(--accent-glow)',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(167,139,250,0.25)',
                    }}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className={`card p-5 flex-1 ${!isLast ? 'mb-5' : ''}`}>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 className="font-semibold text-base" style={{ color: 'var(--text-main)' }}>
                      {exp.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: 'var(--accent-glow)',
                        color: 'var(--accent-primary)',
                        border: '1px solid rgba(167,139,250,0.2)',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {exp.description}
                  </p>
                  <p className="text-xs mt-2 italic" style={{ color: 'var(--text-muted)' }}>
                    AJ Institute of Engineering and Technology
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
