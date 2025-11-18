import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name')?.toString() || '',
      email: form.get('email')?.toString() || '',
      message: form.get('message')?.toString() || '',
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.detail || 'Failed to send message')
      }
      setStatus({ type: 'success', msg: 'Message sent successfully. I\'ll get back to you soon!' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Something went wrong. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let’s build something remarkable</h2>
            <p className="mt-4 text-white/70">Email or connect on socials. I respond fast.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a href="mailto:hemenbhasin@gmail.com" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">Email</p>
                <p className="mt-1 text-lg">hemenbhasin@gmail.com</p>
              </a>
              <a href="https://www.linkedin.com/in/hemen-bhasin/" target="_blank" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">LinkedIn</p>
                <p className="mt-1 text-lg underline">/hemen-bhasin</p>
              </a>
              <a href="https://github.com/HemenBhasin" target="_blank" className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-widest text-white/50">GitHub</p>
                <p className="mt-1 text-lg underline">/HemenBhasin</p>
              </a>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80">
                <p className="text-xs uppercase tracking-widest text-white/50">Location</p>
                <p className="mt-1 text-lg">Patiala, Punjab</p>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/60">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-white outline-none focus:border-white/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-white/60">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-white outline-none focus:border-white/30" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs text-white/60">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-white outline-none focus:border-white/30" placeholder="Tell me about your project..." />
            </div>
            <button disabled={loading} className="mt-4 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-2.5 text-white disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {status.msg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
