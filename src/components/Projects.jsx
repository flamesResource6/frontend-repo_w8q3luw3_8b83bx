import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'VivaQ - AI Powered Quiz Platform',
    live: 'https://vivaq.vercel.app/',
    repo: 'https://github.com/HemenBhasin/VivaQ',
    points: [
      'Generates dynamic quizzes with Gemini AI; auto-grades and tracks analytics',
      'Role-based dashboards with real-time submissions and score history',
      'Secure Firebase auth, Framer Motion animations, Tailwind responsive UI',
    ],
    tech: ['React', 'Firebase', 'MongoDB', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Semanticanalyse - Aspect-based Sentiment',
    live: 'https://semanticanalyze.streamlit.app/',
    repo: 'https://github.com/HemenBhasin/Semanticalyze',
    points: [
      'Context-aware sentiment analysis with spaCy, NLTK, Transformers',
      'Aspect-based insights with confidence scoring and mixed sentiment handling',
      'Streamlit UI with sentence-transformers embeddings',
    ],
    tech: ['Python', 'spaCy', 'NLTK', 'HuggingFace', 'Streamlit'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(168,85,247,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Signature Builds</h2>
          <a href="https://github.com/HemenBhasin" target="_blank" className="text-white/70 hover:text-white">View GitHub</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white/90">{p.title}</h3>
                <div className="flex gap-2">
                  <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} target="_blank" className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                {p.points.map(pt => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-fuchsia-500/10 via-violet-400/10 to-cyan-300/10" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
