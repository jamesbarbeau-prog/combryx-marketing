import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About — Built by the Trade, for the Trade',
  description: 'The story behind Combryx. Built by a carpenter who worked inside Tarion and five Ontario builders — and documented every gap no other software developer could see.',
  alternates: { canonical: 'https://combryx.com/about' },
}

const timeline = [
  { era:'Early', tag:'Trade Foundation', title:'Carpenter — High-End Renovations', desc:'Started on the tools. Built the foundational understanding of how construction works from the ground up — materials, methods, timelines, and the human cost of poor documentation.' },
  { era:'Growth', tag:'Scale', title:'Construction Management — Major Ontario Builders', desc:'Moved from the trade into management for large Ontario builders. Supervised sites, managed sub-trades. Saw exactly how decisions made in the office affect what happens on the site.' },
  { era:'Inside', tag:'The Turning Point', title:'Inspector & Supervisor — Tarion Warranty Framework', desc:'Joined the Tarion warranty operation as an inspector and supervisor. Processed claims. Ran inspections. Sat in conciliation rooms. Understood what documentation wins claims — and what loses them.' },
  { era:'Research', tag:'Field Research', title:'Management Roles — 5 Ontario Builders', desc:'Spent years working inside five different Ontario builders at the management level. Documented every gap, every workaround, every shadow system in Excel. This became the product roadmap.' },
  { era:'Now', tag:'The Build', title:'Combryx — Built from the Inside Out', desc:'Everything learned across those phases went into the design of Combryx. Not a generic ERP with Tarion fields added. A system built specifically around Ontario\'s homebuilding workflow and the real gaps found inside five actual builders.' },
]

const values = [
  { icon:'🔩', title:'Rooted in Real Experience', body:'Every feature in Combryx exists because of a real problem observed on a real job site or in a real Tarion conciliation room — not because a product manager thought it sounded useful.' },
  { icon:'🔓', title:'Fully Tailored. Never Locked.', body:'You should not have to reshape your business to fit the software. Buy the modules you need. Custom workflows available at a transparent rate. Full data export free, always.' },
  { icon:'💰', title:'Accessible Innovation.', body:'The major builder platforms cost $10,000–$40,000 to implement. Combryx is priced per community, per month — you pay for what you actually use. No setup fee.' },
  { icon:'🧠', title:'Knowledgeable Support.', body:'When you contact Combryx support, you\'re talking to someone who understands Ontario warranty law, has been on a job site, and can give you the right answer. Same-day response.' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end pt-14 bg-gradient-to-b from-[#1a1a1a] to-black overflow-hidden">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.06]"/>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" style={{ background:'radial-gradient(ellipse,rgba(255,184,0,0.05) 0%,transparent 70%)' }}/>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cb-gold opacity-60"/>Founded on the job site. Forged in the warranty room.
            </div>
            <h1 className="font-display text-[clamp(56px,8vw,100px)] leading-[0.93] tracking-[0.04em] text-cb-white mb-6">
              BUILT BY<br/>THE <span className="text-cb-gold">TRADE.</span><br/>FOR THE<br/>TRADE.
            </h1>
            <p className="text-lg text-cb-muted leading-relaxed max-w-md mb-8">
              <strong className="text-cb-white font-semibold">A carpenter who became a Tarion inspector, worked for five major Ontario builders,</strong> and saw every gap that no software company could see from the outside.
            </p>
            <blockquote className="border-l-4 border-cb-gold pl-6 text-cb-muted italic text-base leading-relaxed">
              &ldquo;Decades of trade logic, meeting the future of construction technology.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col gap-2">
            {[['01','Started with a hammer','Carpenter · High-end renovations · Trade roots'],['02','Moved into construction management','Site supervision · Major Ontario builders · Scale'],['03','Worked inside Tarion','Inspector · Warranty adjudication · Conciliation process'],['04','Documented every gap across 5 builders','Found what no software developer could see from outside'],['05','Built Combryx','Because no one else could build this exact system']].map(([n,l,s]) => (
              <div key={n} className={`flex gap-5 items-start p-5 rounded-lg border ${n==='05' ? 'border-[rgba(255,184,0,0.3)] bg-[rgba(255,184,0,0.06)]' : 'border-[rgba(255,255,255,0.06)] bg-cb-dark2'}`}>
                <div className={`font-display text-2xl tracking-[0.04em] leading-none flex-shrink-0 ${n==='05' ? 'text-cb-gold' : 'text-cb-gold opacity-60'}`}>{n}</div>
                <div>
                  <div className={`font-body text-sm font-semibold mb-0.5 ${n==='05' ? 'text-cb-white' : 'text-cb-silver'}`}>{l}</div>
                  <div className="font-mono text-[10px] text-cb-dim uppercase tracking-wider">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <div className="bg-cb-dark2 border-t-4 border-cb-gold py-16 px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[120px_1fr] gap-10 items-start">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cb-dim pt-2 border-t border-[rgba(255,255,255,0.06)]">The Gap</div>
          <blockquote className="font-display text-[clamp(22px,3.5vw,40px)] tracking-[0.02em] text-cb-white leading-[1.2]">
            &ldquo;I&apos;ve seen the landscape from every angle. The friction points that cause projects to stall, warranty claims to fail, and coordinators to drown — they all trace back to one thing: <em className="not-italic text-cb-gold">software designed by people who&apos;ve never done this work.</em>&rdquo;
          </blockquote>
        </div>
      </div>

      {/* TIMELINE */}
      <section className="bg-cb-dark1 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
              <span className="w-5 h-px bg-cb-gold opacity-60"/>The Journey
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.04em] text-cb-white">From carpenter to<br/><span className="text-cb-gold">construction software</span> founder.</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.era} delay={i * 80} className="grid grid-cols-[80px_20px_1fr] gap-0 gap-x-6 pb-12 last:pb-0">
                <div className="font-mono text-[11px] text-cb-dim text-right pt-1">{t.era}</div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cb-gold flex-shrink-0 mt-1.5" style={{ boxShadow:'0 0 0 4px rgba(255,184,0,0.15)' }}/>
                  {i < timeline.length - 1 && <div className="flex-1 w-px bg-gradient-to-b from-cb-gold to-[rgba(255,255,255,0.06)] mt-1.5"/>}
                </div>
                <div className="pb-2">
                  <div className="inline-block font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded mb-2 font-semibold bg-[rgba(255,184,0,0.1)] text-cb-gold">{t.tag}</div>
                  <div className="font-body text-[15px] font-bold text-cb-white mb-2">{t.title}</div>
                  <p className="text-cb-muted text-[13px] leading-relaxed">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cb-dark2 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="grid md:grid-cols-2 gap-12 items-end mb-14 pb-10 border-b-2 border-cb-dark4">
            <h2 className="font-display text-[clamp(32px,4vw,56px)] tracking-[0.04em] text-cb-white leading-[1.05]">What Combryx is <span className="text-cb-gold">built to be.</span></h2>
            <p className="text-cb-muted text-base leading-relaxed">These are design constraints, not marketing values. Every feature decision runs through these four commitments. If it doesn&apos;t pass, it doesn&apos;t ship.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80} className="bg-cb-dark1 p-10 relative overflow-hidden hover:bg-cb-dark2 transition-colors">
                <div className="absolute bottom-2 right-4 font-display text-8xl opacity-[0.04] text-cb-white leading-none">{String(i+1).padStart(2,'0')}</div>
                <span className="text-3xl block mb-5">{v.icon}</span>
                <h3 className="font-display text-xl tracking-[0.04em] text-cb-white mb-3">{v.title}</h3>
                <p className="text-cb-muted text-[13px] leading-relaxed">{v.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <div className="bg-cb-gold py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="border-l-4 border-black pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-black opacity-50 mb-3">The Combryx Line</div>
            <div className="font-display text-[clamp(32px,5vw,60px)] tracking-[0.04em] text-black leading-[1.05]">Built for the Trade,<br/>by the Trade.</div>
          </div>
          <div className="flex flex-col gap-3">
            {['Structure. Synergy. Strength.','Decades of trade logic. The future of construction technology.','Every cell working. Every project moving.'].map(t => (
              <div key={t} className="flex gap-4 items-start opacity-60 p-4 rounded-lg border border-black/15 hover:opacity-90 transition-opacity">
                <span className="font-mono text-[10px] text-black/50 flex-shrink-0 mt-0.5">—</span>
                <span className="font-display text-lg text-black italic">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-black py-24 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-5">Ready to work with a team that actually knows this industry?</div>
            <h2 className="font-display text-[clamp(40px,6vw,72px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-6">We aren&apos;t just<br/>building <span className="text-cb-gold">software.</span></h2>
            <p className="text-cb-muted text-base leading-relaxed mb-10">We&apos;re building the infrastructure for a more efficient Ontario construction industry. One that stops losing Tarion conciliations it should win.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/pricing" className="inline-flex bg-cb-gold text-black font-mono text-[11px] font-semibold uppercase tracking-widest px-8 py-4 rounded-md no-underline hover:bg-cb-gold2 transition-all" style={{ boxShadow:'0 0 24px rgba(255,184,0,0.3)' }}>
                Start with Warranty Core →
              </Link>
              <Link href="mailto:demo@combryx.com" className="inline-flex bg-transparent text-cb-muted font-mono text-[11px] uppercase tracking-widest px-8 py-4 rounded-md border border-[rgba(255,255,255,0.12)] no-underline hover:text-cb-white hover:border-[rgba(255,255,255,0.3)] transition-all">
                Book a Demo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
