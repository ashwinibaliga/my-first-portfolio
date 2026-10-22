import { Trophy, Star, Award } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { achievements } from '../data/portfolio'

const ICON_MAP: Record<string, React.FC<{ size?: number; 'aria-hidden'?: 'true'; className?: string }>> = {
  Trophy,
  Star,
  Award,
}

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-padding relative overflow-hidden"
      aria-labelledby="achievements-heading"
    >
      {/* Subtle ambient glow */}
      <div
        className="glow-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />

      <div className="max-content relative z-10">
        <SectionHeading
          label="Achievements"
          title="Hackathon Results"
          description="Competed in multiple hackathons, demonstrating teamwork, rapid prototyping, and frontend skills."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map(achievement => {
            const Icon = ICON_MAP[achievement.icon] ?? Award
            const isWinner = achievement.highlight

            return (
              <div
                key={achievement.id}
                className="card p-6 flex flex-col gap-4 relative overflow-hidden text-center"
                style={isWinner ? { borderColor: 'rgba(167,139,250,0.4)' } : {}}
              >
                {isWinner && (
                  <>
                    {/* Top gradient line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(90deg, transparent, #A78BFA, transparent)' }}
                      aria-hidden="true"
                    />
                    {/* Glow backdrop */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)' }}
                      aria-hidden="true"
                    />
                  </>
                )}

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: isWinner
                        ? 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(139,92,246,0.15))'
                        : 'var(--accent-glow)',
                      color: 'var(--accent-primary)',
                      border: isWinner ? '1px solid rgba(167,139,250,0.4)' : '1px solid rgba(167,139,250,0.15)',
                    }}
                  >
                    <Icon
                      size={26}
                      aria-hidden="true"
                      className={isWinner ? 'drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]' : ''}
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-main)' }}>
                      {achievement.event}
                    </h3>
                    <p
                      className="font-semibold mt-1 text-sm"
                      style={{ color: isWinner ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
                    >
                      {achievement.resultLabel}
                    </p>
                  </div>

                  {isWinner && (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Smart team-finder for hackathon participants
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
