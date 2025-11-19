import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-zinc-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-yellow-500 via-amber-400 to-amber-600 shadow-[0_0_32px_rgba(234,179,8,0.35)]" />
              <span className="text-lg font-semibold tracking-tight text-white">Tibeb</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#demo">Demo</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-zinc-300 hover:text-white text-sm">Sign in</a>
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-zinc-900 font-semibold px-4 py-2 shadow-[0_8px_24px_rgba(234,179,8,0.35)] hover:shadow-[0_8px_32px_rgba(234,179,8,0.55)] transition-shadow">
                Summarize a repo — Free
              </a>
            </div>

            <button className="md:hidden text-zinc-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-zinc-800/80 px-6 py-4 space-y-3">
              <a href="#features" onClick={() => setOpen(false)} className="block text-zinc-200/80">Features</a>
              <a href="#demo" onClick={() => setOpen(false)} className="block text-zinc-200/80">Demo</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="block text-zinc-200/80">Pricing</a>
              <a href="#cta" onClick={() => setOpen(false)} className="block mt-2 rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-zinc-900 font-semibold px-4 py-2 text-center">Summarize a repo — Free</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
