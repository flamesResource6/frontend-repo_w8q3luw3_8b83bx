import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Core Stack',
    items: ['Python', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Django'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'SQLite', 'MySQL'],
  },
  {
    title: 'Design & Tools',
    items: ['Figma', 'Adobe XD', 'Canva', 'Miro', 'Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter', 'Render', 'Vercel'],
  },
  {
    title: 'Soft Skills',
    items: ['Leadership', 'Team Management', 'Problem-Solving', 'Rapid Development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-12">Technical Universe</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white/90">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
