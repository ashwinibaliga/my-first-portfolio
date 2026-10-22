import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-content">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          description="Hackathon projects built with React and Vite, focused on solving practical problems for students."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
