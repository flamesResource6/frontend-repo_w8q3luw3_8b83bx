import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-12">Education</h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xl font-semibold text-white/90">Vellore Institute of Technology</p>
              <p className="text-white/60">B.Tech in Computer Science</p>
              <p className="text-white/50 text-sm mt-1">Bhopal, Madhya Pradesh</p>
            </div>
            <div className="text-white/70">Sept 2023 - 2027</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
