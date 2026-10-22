import { BrainCircuit, BookOpen } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function LearningSection() {
  return (
    <section
      id="learning"
      className="section-padding"
      aria-labelledby="learning-heading"
    >
      <div className="max-content">
        <SectionHeading
          label="Learning"
          title="Courses & AI Learning"
          description="Continuously expanding knowledge in Artificial Intelligence and emerging technologies."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {/* AI Courses card */}
          <div className="card p-6 flex flex-col gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)' }}
            >
              <BrainCircuit size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-base" style={{ color: 'var(--text-main)' }}>
                AI Courses
              </h3>
              <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Completed AI-related courses covering foundational and applied concepts in Artificial Intelligence and Machine Learning.
              </p>
              <p className="text-xs mt-3 italic" style={{ color: 'var(--text-muted)' }}>
                Specific course titles, providers, and credentials are being gathered and will be updated here.
              </p>
            </div>
          </div>

          {/* Continuous learning card */}
          <div className="card p-6 flex flex-col gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)' }}
            >
              <BookOpen size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-base" style={{ color: 'var(--text-main)' }}>
                Continuous Learning
              </h3>
              <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Actively exploring frontend development, AI/ML concepts, and new technologies through self-study, courses, and hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
