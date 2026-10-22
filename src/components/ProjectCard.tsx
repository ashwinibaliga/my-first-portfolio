import { Project } from '../data/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, techStack, type, highlight } = project

  return (
    <article
      className="card p-6 flex flex-col gap-4 relative overflow-hidden"
      aria-label={`Project: ${name}`}
    >
      {/* Highlight glow accent */}
      {highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, #A78BFA, #8B5CF6, transparent)' }}
          aria-hidden="true"
        />
      )}

      {/* Project type badge */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="tech-badge text-xs">{type}</span>
        {highlight && (
          <span
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(167,139,250,0.15)', color: '#A78BFA', border: '1px solid rgba(167,139,250,0.3)' }}
          >
            🏆 HackAce Winner
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold"
        style={{ color: 'var(--text-main)' }}
      >
        {name}
      </h3>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.65' }}>
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {techStack.map(tech => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {/* No repo/demo links — URLs not provided. Keeping card CTA-free intentionally. */}
      <p
        className="text-xs mt-1"
        style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}
      >
        Project details available on request.
      </p>
    </article>
  )
}
