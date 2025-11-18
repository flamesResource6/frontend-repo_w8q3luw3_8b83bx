import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let’s build something remarkable</h2>
            <p className="mt-4 text-white/70">Email, call, or connect on socials. I respond fast.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a href="mailto:hemenbhasin@gmail.com" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">Email</p>
                <p className="mt-1 text-lg">hemenbhasin@gmail.com</p>
              </a>
              <a href="tel:+917710597386" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">Phone</p>
                <p className="mt-1 text-lg">+91 77105 97386</p>
              </a>
              <a href="https://www.linkedin.com/in/hemen-bhasin/" target="_blank" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">LinkedIn</p>
                <p className="mt-1 text-lg underline">/hemen-bhasin</p>
              </a>
              <a href="https://github.com/HemenBhasin" target="_blank" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">GitHub</p>
                <p className="mt-1 text-lg underline">/HemenBhasin</p>
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/60">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-white outline-none focus:border-white/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-white/60">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-white outline-none focus:border-white/30" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs text-white/60">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-white outline-none focus:border-white/30" placeholder="Tell me about your project..." />
            </div>
            <button className="mt-4 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-2.5 text-white">
              Send Message
            </button>
            <p className="mt-3 text-xs text-white/50">This demo form doesn’t send email. Use the contact cards to reach me instantly.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
