export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Go Dark When Your Cloud Provider Suspends You
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CloudGuard Alerts detects account suspensions via distributed API health checks and instantly fires backup alerts through email, SMS, Slack, and webhooks — even when your primary infrastructure is completely down.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get CloudGuard for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No lock-in.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Distributed Monitoring', desc: 'Agents across multiple cloud regions detect suspensions independently.' },
            { icon: '⚡', title: 'Instant Multi-Channel Alerts', desc: 'Email, SMS, Slack, and webhooks fire the moment a suspension is detected.' },
            { icon: '🛡️', title: 'Resilient by Design', desc: 'Backup infrastructure stays online even when your primary cloud goes dark.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$19<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitoring agents on 3+ cloud providers',
              'Email, SMS, Slack & webhook alerts',
              'API health checks every 60 seconds',
              'Suspension history & audit log',
              'Unlimited team members',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it detect a suspension if my cloud is down?',
              a: 'Our monitoring agents run on separate cloud providers (AWS, GCP, Azure, etc.). If your primary provider suspends your account, agents on other providers detect the failure and trigger alerts independently.'
            },
            {
              q: 'Which alert channels are supported?',
              a: 'Email, SMS (via Twilio), Slack (via webhook), and any custom HTTP webhook endpoint. You can configure multiple recipients per channel.'
            },
            {
              q: 'How quickly will I be notified?',
              a: 'Health checks run every 60 seconds. Once a suspension is confirmed (3 consecutive failures to avoid false positives), alerts fire within 3 minutes of the event.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} CloudGuard Alerts. All rights reserved.
      </footer>
    </main>
  )
}
