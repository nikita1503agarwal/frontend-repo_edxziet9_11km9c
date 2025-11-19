export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-900/80 backdrop-blur-md p-8 md:p-10 text-center shadow-[0_20px_60px_rgba(234,179,8,0.12)]">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Summarize a repo — Free</h3>
          <p className="mt-3 text-zinc-300/90">Drop a GitHub URL and we’ll generate a high‑level overview and content ideas.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="url" required placeholder="https://github.com/owner/repo" className="flex-1 rounded-lg border border-zinc-700/80 bg-zinc-900/60 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
            <button type="submit" className="rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-zinc-900 font-semibold px-5 py-3 shadow-[0_12px_40px_rgba(234,179,8,0.35)] hover:shadow-[0_12px_56px_rgba(234,179,8,0.55)]">Summarize</button>
          </form>
          <p className="mt-3 text-xs text-zinc-400">No credit card required</p>
        </div>
      </div>
    </section>
  )
}
