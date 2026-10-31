export const profile = {
  name: 'David Chinwah',
  title: 'Software Engineer | AI Training & LLM Evaluation Specialist',
  location: 'Dallas–Fort Worth, TX',
  email: 'davidchinwah8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-chinwah',
  github: 'https://github.com/Davkc',
  cv: '/David-Chinwah-CV.pdf',
  bio: 'Software engineering graduate (A.A.S., Dallas College) who builds full-stack React and TypeScript applications with LLM integrations, backed by four-plus years of hands-on AI training, data annotation and language-model evaluation. Experienced in RLHF preference assessment, edge-case analysis and quality benchmarking. Interested in fintech and enterprise software. Open to software engineering and AI-focused roles.',
}

export const projects = [
  {
    number: '01', title: 'CV AI Tailor', category: 'AI · PRODUCTIVITY', summary: 'A sharper, more relevant application—tailored to every role.',
    problem: 'Adapting a résumé to each job can be repetitive and make it hard to see which requirements are missing.',
    built: 'An AI-powered workflow that analyzes a job description, rewrites résumé content, and surfaces a live match score with keyword gaps.',
    stack: ['React', 'TypeScript', 'LLM API'], live: 'https://REPLACE-WITH-LIVE-URL.com', code: 'https://github.com/Davkc/REPLACE-REPO',
    image: '/images/cv-ai-tailor.svg', alt: 'Placeholder for a screenshot of the CV AI Tailor job match and keyword analysis interface.',
  },
  {
    number: '02', title: 'Home Health Services', category: 'WEB DESIGN · HEALTHCARE', summary: 'A welcoming digital front door for home healthcare.',
    problem: 'People looking for care need to quickly understand available services and feel confident taking the next step.',
    built: 'A responsive provider website with clear service pages and an appointment-booking flow, designed around a warm, trustworthy experience.',
    stack: ['React', 'Responsive design', 'UI/UX'], live: 'https://REPLACE-WITH-LIVE-URL.com', code: 'https://github.com/Davkc/REPLACE-REPO',
    image: '/images/home-health-services.svg', alt: 'Placeholder for a screenshot of the Home Health Services website.',
  },
  {
    number: '03', title: 'Habit Flow', category: 'WEB APP · WELLNESS', summary: 'Small daily actions, made visible over time.',
    problem: 'Habit builders need a lightweight way to track consistency and understand how routines add up.',
    built: 'A habit-tracking app with streaks, a calendar heatmap, and daily check-in analytics, built from reusable components.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'], live: 'https://REPLACE-WITH-LIVE-URL.com', code: 'https://github.com/Davkc/REPLACE-REPO',
    image: '/images/habit-flow.svg', alt: 'Placeholder for a screenshot of the Habit Flow tracker and calendar heatmap.',
  },
]

export const experience = [
  { role: 'AI Research Contractor', company: 'Handshake AI Solutions', date: 'Nov 2025 – Jan 2026', description: 'Evaluated and refined LLM outputs, authored original prompts to test model behavior across interactive, visual and adaptive scenarios, and benchmarked responses against quality standards.' },
  { role: 'AI Training Specialist', company: 'Toloka AI', date: 'Oct 2023 – Nov 2024', description: 'Judged relevance, clarity and factual correctness of AI responses; sustained a 98% quality rating and identified edge cases that shaped model guidelines.' },
  { role: 'Senior Data Annotation Technician', company: 'AI Data Solutions Inc.', date: 'Jan 2022 – Jun 2023', description: 'Labeled LLM datasets for reasoning, summarization and instruction adherence; ranked among the top 5% of annotators and documented labeling rationale for engineers.' },
  { role: 'Data Annotation Technician', company: 'Global Tech Services', date: 'May 2021 – Nov 2021', description: '[ADD ACCURATE DESCRIPTION]', placeholder: true },
]

export const education = [
  { degree: 'Associate Degree, Software Engineering', school: 'Dallas College · Richland Campus', date: 'May 2026' },
  { degree: 'Pre-Apprenticeship Program (PAP)', school: 'InfoTech Academy Online', date: '2026' },
]

export const skills = [
  { group: 'SOFTWARE', items: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'LLM API Integration', 'Supabase'] },
  { group: 'AI & EVALUATION', items: ['Data Labeling', 'RLHF Preference Assessment', 'Language-Model Assessment', 'Content Moderation', 'Inter-Rater Reliability'] },
  { group: 'DESIGN & TOOLS', items: ['Figma', 'Adobe Creative Suite', 'Miro', 'Google Workspace', 'Excel'] },
]

export const figmaProject = { name: 'Sukulu', description: 'African EdTech platform design system · gamified challenges, token rewards & leaderboards', url: 'https://www.figma.com/REPLACE-WITH-PROJECT-LINK' }


projects.push({
  number: '04', title: 'Tug of Words', category: 'REAL-TIME GAME · MULTIPLAYER', summary: 'A fast word battle where every correct answer moves the line.',
  problem: 'Multiplayer word games need quick rounds, simple invites, and enough variety to keep every match lively.',
  built: 'A room-based, server-authoritative tug-of-war with balanced teams, practice bots, streak freezes, chaotic word twists, rematches, and live player stats.',
  stack: ['Node.js', 'WebSockets', 'Express', 'JavaScript'], live: 'https://tug-of-words-xffo.onrender.com', code: 'https://github.com/Davkc/Tug-of-Words',
  image: '/images/tug-of-words-card.svg', alt: 'Tug of Words rope and flag graphic with red and blue team colors.',
})
