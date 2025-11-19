import { Brain, Languages, Send } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Summarize',
    desc: 'Ingest repos, map architecture, and generate clear, concise overviews in seconds.',
  },
  {
    icon: Languages,
    title: 'Multi‑language',
    desc: 'Understands JavaScript, Python, Go, Rust, and more — mix monorepos with ease.',
  },
  {
    icon: Send,
    title: 'Publish to socials',
    desc: 'Turn insights into posts and threads. Ship to X, LinkedIn, and dev blogs.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(234,179,8,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-amber-300/30 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400/90 to-yellow-500/90 text-zinc-900 flex items-center justify-center shadow-[0_10px_30px_rgba(234,179,8,0.35)] group-hover:shadow-[0_14px_40px_rgba(234,179,8,0.55)] transition-shadow">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-zinc-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
