export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Hemen Bhasin. Crafted with React & Tailwind.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="mailto:hemenbhasin@gmail.com" className="hover:text-white">Email</a>
            <a href="https://www.linkedin.com/in/hemen-bhasin/" target="_blank" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com/HemenBhasin" target="_blank" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
