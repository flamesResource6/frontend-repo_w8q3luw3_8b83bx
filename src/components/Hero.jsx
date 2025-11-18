import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-40 pb-24 grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to internships & freelance
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
              Futuristic experiences by
              <span className="block bg-gradient-to-br from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Hemen Bhasin
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/70">
              I design and build fast, elegant, and intelligent interfaces. A blend of creative direction and robust engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 px-[2px] py-[2px]">
                <span className="block rounded-[10px] bg-slate-950 px-6 py-2.5 text-white hover:bg-slate-900 transition-colors">View Projects</span>
              </a>
              <a href="#contact" className="rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-white/90 hover:bg-white/20 transition-colors">Contact</a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <dl className="grid grid-cols-2 gap-4 text-white/80">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/50">Email</dt>
                  <dd className="mt-1"><a className="hover:text-white" href="mailto:hemenbhasin@gmail.com">hemenbhasin@gmail.com</a></dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/50">Phone</dt>
                  <dd className="mt-1"><a className="hover:text-white" href="tel:+917710597386">+91 77105 97386</a></dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/50">Location</dt>
                  <dd className="mt-1">Bhopal, MP</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/50">Profiles</dt>
                  <dd className="mt-1 flex gap-3">
                    <a className="hover:text-white underline" href="https://www.linkedin.com/in/hemen-bhasin/" target="_blank">LinkedIn</a>
                    <a className="hover:text-white underline" href="https://github.com/HemenBhasin" target="_blank">GitHub</a>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </section>
  )
}
