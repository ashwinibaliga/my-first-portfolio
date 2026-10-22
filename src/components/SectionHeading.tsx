// Reusable section heading component
interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({ label, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className="section-label">
        <span className="inline-block w-6 h-px bg-accent opacity-70" />
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
      <div className={`section-divider${centered ? ' mx-auto' : ''}`} />
      {description && (
        <p className="text-text-secondary max-w-2xl" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
          {description}
        </p>
      )}
    </div>
  )
}
