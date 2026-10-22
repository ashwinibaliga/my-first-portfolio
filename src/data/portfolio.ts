// ─── Portfolio Data ──────────────────────────────────────────────────────────
// This is the single source of truth for all content displayed on the site.
// Update values here to reflect any changes in personal details, projects, or links.

export const person = {
  name: 'Ashwini Baliga',
  firstName: 'Ashwini',
  role: 'CSE-AIML Student · Aspiring Developer',
  tagline: 'Curious by nature. Building with code. Exploring what\'s possible.',
  intro:
    "I'm Ashwini Baliga, a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning. I enjoy exploring technology, learning new things, building web experiences, and finding ways to solve real-world problems. Outside technology, I enjoy reading books and travelling with friends.",
  education: {
    institution: 'AJ Institute of Engineering and Technology',
    branch: 'Computer Science and Engineering — Artificial Intelligence and Machine Learning (CSE-AIML)',
    // Graduation year, GPA, and completion status are not provided and have not been added.
  },
} as const

export const contact = {
  email: 'ashwinibaliga08@gmail.com',
  github: 'https://github.com/ashwinibaliga',
  linkedin: 'https://www.linkedin.com/in/ashwini-baliga-bb48b3416/',
  // Phone number and other contact details were not provided.
} as const

// ─── Skills ─────────────────────────────────────────────────────────────────

export interface SkillCategory {
  label: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend Development',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    label: 'Programming Languages',
    icon: 'Code2',
    skills: ['C', 'Java', 'Python'],
  },
  {
    label: 'Design & Creative Tools',
    icon: 'Palette',
    skills: ['Canva'],
  },
  {
    label: 'Development Focus',
    icon: 'Monitor',
    skills: ['Frontend Development'],
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  name: string
  event: string
  description: string
  techStack: string[]
  type: string
  highlight?: boolean
  repoUrl?: string    // Not provided — do not fabricate
  demoUrl?: string    // Not provided — do not fabricate
}

export const projects: Project[] = [
  {
    id: 'hackace',
    name: 'HackAce 2.0',
    event: 'HackAce Hackathon',
    description:
      'Built a smart team-finding experience to help students connect with potential teammates for hackathons.',
    techStack: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    type: 'Hackathon Project',
    highlight: true,
    // repoUrl and demoUrl not provided — links intentionally omitted.
  },
  {
    id: 'hacknima',
    name: 'Hacknima 2.0',
    event: 'Hacknima Hackathon',
    description:
      'Developed a user-friendly filtering and search experience for the ACE app, making it easier for users to find relevant information.',
    techStack: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    type: 'Hackathon Project',
    // repoUrl and demoUrl not provided — links intentionally omitted.
  },
]

// ─── Achievements ─────────────────────────────────────────────────────────────

export interface Achievement {
  id: string
  event: string
  result: string
  resultLabel: string
  highlight?: boolean
  icon: string
}

export const achievements: Achievement[] = [
  {
    id: 'hackace-win',
    event: 'HackAce',
    result: 'Winner',
    resultLabel: '🏆 Winner',
    highlight: true,
    icon: 'Trophy',
  },
  {
    id: 'hacknima-short',
    event: 'Hacknima',
    result: 'Shortlisted',
    resultLabel: '⭐ Shortlisted',
    icon: 'Star',
  },
  {
    id: 'hackroberfest-short',
    event: 'Hackroberfest',
    result: 'Shortlisted',
    resultLabel: '⭐ Shortlisted',
    icon: 'Star',
  },
]

// ─── Experience & Extracurricular ─────────────────────────────────────────────

export interface Experience {
  id: string
  title: string
  description: string
  type: 'Volunteering' | 'Extracurricular'
  icon: string
  // Specific organizations, dates, and quantified outcomes were not provided.
}

export const experiences: Experience[] = [
  {
    id: 'placement-vol',
    title: 'Placement Volunteering',
    description:
      'Participated as a placement volunteer on two occasions, supporting the placement coordination process at the institution.',
    type: 'Volunteering',
    icon: 'HandHelping',
  },
  {
    id: 'cultural-coord',
    title: 'Cultural Coordinator',
    description:
      'Served as a cultural coordinator, helping organise and manage cultural events and activities.',
    type: 'Extracurricular',
    icon: 'Music',
  },
]

// ─── Learning ─────────────────────────────────────────────────────────────────

export interface LearningItem {
  id: string
  title: string
  note: string
}

export const learningItems: LearningItem[] = [
  {
    id: 'ai-courses',
    title: 'AI Courses',
    note: 'Completed AI-related courses. Specific course titles, providers, and credentials are pending confirmation.',
  },
]

// ─── Resume ───────────────────────────────────────────────────────────────────
// The resume file has not been provided.
// Set resumeAvailable to true and update resumePath when the real file is added.
export const resume = {
  available: false,
  path: '/assets/Ashwini_Baliga_Resume.pdf',
  // When adding the resume: place the PDF at public/assets/Ashwini_Baliga_Resume.pdf
  // and set available to true.
} as const
