import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[1px]">
                <div className="h-full w-full rounded-lg bg-slate-900 group-hover:bg-slate-800 transition-colors" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight">Hemen Bhasin</p>
                <p className="text-xs text-white/60">Developer • Designer • Builder</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="https://github.com/HemenBhasin" target="_blank" className="text-white/70 hover:text-white"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/hemen-bhasin/" target="_blank" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/HemenBhasin" target="_blank" className="text-white/70 hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/hemen-bhasin/" target="_blank" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
