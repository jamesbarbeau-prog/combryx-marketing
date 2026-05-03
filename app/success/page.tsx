import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome to Combryx',
  robots: { index: false },
}

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-14 bg-gradient-to-b from-[#1a1a1a] to-black relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.05]"/>
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="w-20 h-20 bg-cb-gold mx-auto mb-8 flex items-center justify-center" style={{ clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', boxShadow:'0 0 48px rgba(255,184,0,0.4)' }}>
          <span className="text-black text-3xl font-bold">✦</span>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-4">You&apos;re in the hive.</div>
        <h1 className="font-display text-[clamp(48px,7vw,80px)] leading-[0.95] tracking-[0.04em] text-cb-white mb-5">
          WELCOME TO<br/><span className="text-cb-gold">COMBRYX.</span>
        </h1>
        <p className="text-cb-muted text-base leading-relaxed mb-8">
          Your request has been received. A member of our team will be in touch at <strong className="text-cb-white">hello@combryx.com</strong> within one business day to get your account set up and your first community running.
        </p>
        <div className="bg-cb-dark2 border border-[rgba(255,184,0,0.2)] rounded-xl p-6 mb-8 text-left">
          <div className="font-mono text-[9px] uppercase tracking-widest text-cb-gold font-semibold mb-4">What happens next</div>
          {['We confirm your plan and community count','We set up your account and send login credentials','You\'re running warranty cases within 2 hours','Your Tarion deadlines initialize from your first PDI'].map((s, i) => (
            <div key={s} className="flex gap-3 text-[13px] text-cb-muted py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0">
              <span className="text-cb-gold font-mono text-[11px] flex-shrink-0 mt-0.5">{String(i+1).padStart(2,'0')}</span>{s}
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="inline-flex bg-cb-gold text-black font-mono text-[11px] font-semibold uppercase tracking-widest px-7 py-3.5 rounded-md no-underline hover:bg-cb-gold2 transition-all">
            Back to Homepage
          </Link>
          <Link href="mailto:hello@combryx.com" className="inline-flex bg-transparent text-cb-muted font-mono text-[11px] uppercase tracking-widest px-7 py-3.5 rounded-md border border-[rgba(255,255,255,0.12)] no-underline hover:text-cb-white hover:border-[rgba(255,255,255,0.3)] transition-all">
            Email Us Directly
          </Link>
        </div>
      </div>
    </section>
  )
}
