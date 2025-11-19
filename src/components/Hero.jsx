import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center">
      {/* Nebula background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-zinc-900/50 backdrop-blur-md px-3 py-1 text-amber-200/90 text-xs mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Live AI for GitHub repos
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
            Understand any repo in minutes.
            <br />
            Turn code into clear stories.
            <br />
            Create content that shines.
          </h1>

          <p className="mt-6 text-lg text-zinc-300/90 max-w-2xl">
            Tibeb is your AI-powered GitHub repo summarizer and content studio. Explore architecture, generate docs, and publish posts across platforms.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-zinc-900 font-semibold px-5 py-3 shadow-[0_12px_40px_rgba(234,179,8,0.35)] hover:shadow-[0_12px_56px_rgba(234,179,8,0.55)] transition-shadow">
              Summarize a repo — Free
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-100 px-5 py-3 hover:bg-zinc-900">
              Watch demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
