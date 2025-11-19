export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(234,179,8,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
        <p className="mt-3 text-center text-zinc-300/90">Start free. Upgrade when you’re shipping content.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 flex flex-col">
            <h3 className="text-white text-xl font-semibold">Free</h3>
            <p className="mt-1 text-zinc-400">For trying the basics</p>
            <div className="mt-6 text-4xl font-bold text-white">$0</div>
            <ul className="mt-6 space-y-2 text-zinc-300/90">
              <li>• 3 repo summaries / month</li>
              <li>• Basic doc generation</li>
              <li>• Community support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-100 px-4 py-2 hover:bg-zinc-900">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-amber-300/30 bg-zinc-900/70 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(234,179,8,0.15)]">
            <div className="absolute -top-3 right-6 text-xs text-zinc-900 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 px-2 py-0.5 rounded-full font-semibold">Popular</div>
            <h3 className="text-white text-xl font-semibold">Pro</h3>
            <p className="mt-1 text-zinc-400">For indie devs & teams</p>
            <div className="mt-6 text-4xl font-bold text-white">$19</div>
            <ul className="mt-6 space-y-2 text-zinc-300/90">
              <li>• Unlimited summaries</li>
              <li>• Advanced content studio</li>
              <li>• Social publishing</li>
              <li>• Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-zinc-900 font-semibold px-4 py-2 shadow-[0_8px_24px_rgba(234,179,8,0.35)] hover:shadow-[0_8px_32px_rgba(234,179,8,0.55)]">Upgrade to Pro</a>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 flex flex-col">
            <h3 className="text-white text-xl font-semibold">Team</h3>
            <p className="mt-1 text-zinc-400">For orgs that ship content</p>
            <div className="mt-6 text-4xl font-bold text-white">$49</div>
            <ul className="mt-6 space-y-2 text-zinc-300/90">
              <li>• Seats & permissions</li>
              <li>• Custom templates</li>
              <li>• SSO</li>
              <li>• SLA</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-100 px-4 py-2 hover:bg-zinc-900">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
