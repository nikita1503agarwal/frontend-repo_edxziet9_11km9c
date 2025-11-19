export default function Demo() {
  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">See the studio in action</h2>
            <p className="mt-4 text-zinc-300/90 max-w-xl">
              Explore a live walkthrough of summarizing a complex GitHub repo, generating architecture docs, and publishing a social-ready thread — all in one flow.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-300/90">
              <li className="flex gap-3"><span className="text-amber-400">•</span> Clone or link any repo</li>
              <li className="flex gap-3"><span className="text-amber-400">•</span> Understand code and dependencies</li>
              <li className="flex gap-3"><span className="text-amber-400">•</span> Generate docs, briefs, and threads</li>
              <li className="flex gap-3"><span className="text-amber-400">•</span> Publish to socials in one click</li>
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 backdrop-blur-md shadow-2xl">
            <div className="aspect-video">
              <video className="w-full h-full object-cover" src="/demo.mp4" autoPlay loop muted playsInline poster="/demo-poster.jpg" />
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
