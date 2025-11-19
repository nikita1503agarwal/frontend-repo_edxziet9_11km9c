import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Parallax nebula glow layers */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[60vh] w-[90vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 left-10 h-[50vh] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_60%)] blur-2xl" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Demo />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-zinc-800/80 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400">© {new Date().getFullYear()} Tibeb. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#cta" className="hover:text-white">Start free</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
