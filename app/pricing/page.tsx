import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pricing — Modular, Per-Community, No Lock-In',
  description: 'Combryx pricing: Warranty Core $149/community/month, Builder Suite $349, Enterprise $549. No setup fee, cancel anytime, full data export free.',
  alternates: { canonical: 'https://combryx.com/pricing' },
}

const plans = [
  { tag:'Entry — Small Builders', name:'Warranty Core', price:'$149', period:'per community / month', tagline:'Replace QDef, your Excel tracker, and the filing cabinet on day one.',
    color:'#FFB800', featured:false, plan:'warranty', cta:'Start Warranty Core',
    items:['Full warranty case management','Tarion 30-day, 1yr, 2yr, MSD deadline tracking','Work order scheduling + tech assignment','PDI digital sign-off + PDF generation','Defence Vault + conciliation prep export','AI triage + OBC/CPG answers (Lex Structura)','Field app — tech, PDI, assessment modes','Tarion XML import · Unlimited users · Unlimited cases'],
    addons:['Financial Ledger — add for $79/community/mo','Build Ops — add for $79/community/mo'] },
  { tag:'Most Popular — Growing Teams', name:'Builder Suite', price:'$349', period:'per community / month · 4 modules', tagline:'Construction lifecycle from phase gate to lender draw — connected.',
    color:'#FFB800', featured:true, plan:'builder', cta:'Start Builder Suite',
    items:['Everything in Warranty Core','Financial Ledger — job costing, POs, invoice OCR','Lender draw packages — auto-assembled on phase sign-off','Build & Field Ops — Gantt, phase gates, subtrade sign-off','Sales module — APS, design studio, storage map','Smart Handover — unit sold cascade fires automatically','Full field app — all 13 screens, all roles','Financial Ghost AI — invoice classification'],
    addons:['Pre-Con + IoT — add for $99/community/mo'] },
  { tag:'Enterprise — Full Lifecycle', name:'Enterprise Stack', price:'$549', period:'per community / month · all 6 modules', tagline:'Land purchase to warranty expiry. Every module. Every role.',
    color:'#FFB800', featured:false, plan:'enterprise', cta:'Start Enterprise Stack',
    items:['Everything in Builder Suite','Land & Pre-Con — pipeline, pro-forma, zoning API','Permit tracking — approved permit unlocks phase','IoT & Security — Salto/Latch smart lock integration','Sensor monitoring — moisture/temp → auto warranty case','Property management tickets + tenant comms','All 14 field app screens · All 9 roles','Priority support — dedicated onboarding rep'],
    addons:[] },
]

const freedomPillars = [
  { n:'01', icon:'🔓', title:'No Commitment. Ever.', body:'Month-to-month. No annual lock-in required. No cancellation fees. No 90-day notice periods. Cancel from your account settings — billing stops that month. We don\'t make leaving complicated because we want customers who are getting value, not customers who are trapped.' },
  { n:'02', icon:'📤', title:'Your Data. Your Export.', body:'Everything you put into Combryx, you can take out — in full, anytime, in standard formats. Cases, homeowner records, photos, PDI documents, financial records, work orders, and the complete audit trail. One click. No export fee. No support ticket. No waiting period.' },
  { n:'03', icon:'🛠️', title:'Custom Built. On Demand.', body:'No builder operates exactly the same way. Custom reports, integrations with your existing accounting software, specific Tarion form formats, or a completely new field workflow — all available at transparent hourly rates. No minimum commitment, no agency markup. Custom features become permanent parts of your account.' },
]

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 px-8 text-center bg-gradient-to-b from-[#1a1a1a] to-black overflow-hidden">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.06]"/>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" style={{ background:'radial-gradient(ellipse,rgba(255,184,0,0.06) 0%,transparent 70%)' }}/>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-5 flex items-center justify-center gap-3">
            <span style={{ display:"inline-block", width:32, height:1, background:"#FFB800", opacity:0.6 }}/>Simple Pricing
          </div>
          <h1 className="animate-fade-up anim-d1 font-display text-[clamp(48px,7vw,88px)] leading-[0.95] tracking-[0.04em] text-cb-white mb-5">
            NO SETUP FEES.<br/>NO LOCKED CONTRACTS.<br/><span className="text-cb-gold">NO SURPRISES.</span>
          </h1>
          <p className="animate-fade-up anim-d2 text-lg text-cb-muted leading-relaxed max-w-xl mx-auto">
            Priced per community, per month. Field app always included. Cancel anytime. Full data export free forever.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-cb-dark2 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
            {plans.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}
                className={`p-9 relative ${p.featured ? 'bg-cb-dark1 border-2 border-cb-gold -mx-px z-10 rounded-2xl shadow-gold' : 'bg-cb-dark1'}`}>
                {p.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-cb-gold text-black font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-lg whitespace-nowrap">
                    ✦ Most Popular
                  </div>
                )}
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-cb-dim mb-3">{p.tag}</div>
                <div className={`font-display text-2xl tracking-[0.04em] mb-2 ${p.featured ? 'text-cb-gold' : 'text-cb-white'}`}>{p.name}</div>
                <p className="text-cb-muted text-sm leading-relaxed mb-7">{p.tagline}</p>
                <div className="mb-7 pb-6 border-b border-[rgba(255,255,255,0.07)]">
                  <div className={`font-display text-[52px] tracking-[0.04em] leading-none mb-1 ${p.featured ? 'text-cb-gold' : 'text-cb-white'}`}>{p.price}</div>
                  <div className="font-mono text-[10px] text-cb-dim">{p.period}</div>
                </div>
                <div className="flex flex-col gap-2.5 mb-6">
                  {p.items.map(item => (
                    <div key={item} className="flex gap-2.5 text-[13px] text-cb-muted items-start">
                      <span className={`flex-shrink-0 mt-0.5 font-bold text-[11px] ${p.featured ? 'text-cb-gold' : 'text-green-400'}`}>✓</span>{item}
                    </div>
                  ))}
                  {p.addons.map(item => (
                    <div key={item} className="flex gap-2.5 text-[12px] text-cb-dim items-start">
                      <span className="flex-shrink-0 mt-0.5 text-[11px]">○</span>{item}
                    </div>
                  ))}
                </div>
                <Link href={`/success?plan=${p.plan}`}
                  className={p.featured ? 'btn-gold' : ''}
                  style={p.featured ? { display:'block', textAlign:'center' } : {
                    display:'block', textAlign:'center',
                    fontFamily:"'Fira Code',monospace", fontSize:11,
                    fontWeight:600, letterSpacing:'0.1em',
                    textTransform:'uppercase', padding:'16px',
                    borderRadius:8, textDecoration:'none',
                    background:'#1a1a1a', color:'#FFB800',
                    border:'1px solid rgba(255,184,0,0.3)',
                    transition:'all 0.2s',
                  }}>
                  {p.cta} →
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10 px-4">
            <p className="text-cb-muted text-sm leading-relaxed">
              <strong className="text-cb-silver">Volume discounts:</strong> 5+ communities — 15% off &nbsp;·&nbsp; 10+ — 25% off &nbsp;·&nbsp; 20+ — contact us for custom pricing<br/>
              All plans include <strong className="text-cb-white">unlimited users</strong> · <strong className="text-cb-white">unlimited cases</strong> · <strong className="text-cb-white">unlimited storage</strong> · <strong className="text-cb-white">field app</strong> · <strong className="text-cb-white">$0 exit fee forever</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FREEDOM SECTION */}
      <section className="bg-black py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>How We Do Business</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">We don&apos;t hold your data hostage.<br/>We don&apos;t lock you in.<br/><span className="text-cb-gold">We just have to be better every month.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">Most software companies make leaving painful on purpose. That&apos;s not a business model — it&apos;s a trap. Combryx works differently. If we&apos;re not earning your subscription every month, you should leave. We think that pressure makes us build a better product.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden mb-14">
            {freedomPillars.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80} className="bg-cb-dark2 p-9 relative overflow-hidden hover:bg-cb-dark3 transition-colors">
                <div className="absolute bottom-2 right-3 font-display text-8xl opacity-[0.05] text-cb-white leading-none">{p.n}</div>
                <span className="text-3xl block mb-5">{p.icon}</span>
                <h3 className="font-display text-xl tracking-[0.04em] text-cb-white mb-3">{p.title}</h3>
                <p className="text-cb-muted text-[13px] leading-relaxed">{p.body}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* The Guarantee */}
          <ScrollReveal className="bg-cb-dark2 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10">
                <div className="font-mono text-[9px] uppercase tracking-widest text-cb-gold font-semibold mb-5">The Combryx Guarantee</div>
                <blockquote className="font-display text-[clamp(18px,2.5vw,28px)] tracking-[0.02em] text-cb-white leading-[1.2] mb-5">
                  &ldquo;We are probably the most knowledgeable, most accessible, and most customizable construction software you will ever deal with. We answer the phone. We know what we&apos;re talking about. And we build what you need.&rdquo;
                </blockquote>
                <div className="font-mono text-[9px] uppercase tracking-widest text-cb-dim">Combryx — Former Tarion · 5 Ontario Builders · Built from the inside out</div>
              </div>
              <div className="p-8 border-l border-[rgba(255,255,255,0.06)] flex flex-col gap-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-cb-dim mb-2">What that actually means</div>
                <p className="text-cb-muted text-sm leading-relaxed mb-4">When you email support at Combryx, you&apos;re talking to someone who understands warranty law, has been on a job site, and can give you the right answer — not a chatbot reading from a help article.</p>
                <div className="grid grid-cols-2 gap-2">
                  {[['Same day','Support response'],['On demand','Custom development'],['Full','Data export any time'],['$0','Exit fee, forever']].map(([n,l]) => (
                    <div key={l} className="p-4 rounded-lg border border-[rgba(255,184,0,0.2)] bg-[rgba(255,184,0,0.06)] text-center">
                      <div className="font-display text-xl text-cb-gold tracking-[0.04em] leading-none mb-1">{n}</div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-cb-dim">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cb-dark1 py-20 px-8 text-center">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-5">READY TO<br/><span className="text-cb-gold">START?</span></h2>
            <p className="text-cb-muted text-base mb-8">Start with Warranty Core. Running in two hours. $0 setup. Cancel anytime.</p>
            <div className="flex gap-3 justify-center flex-wrap mb-6">
              <Link href="/success?plan=warranty" className="btn-gold">
                Start Warranty Core →
              </Link>
              <Link href="mailto:demo@combryx.com" className="btn-ghost">
                Book a 20-Min Demo
              </Link>
            </div>
            <div className="flex gap-5 justify-center flex-wrap">
              {['No setup fee','Cancel anytime','Full data export free','Ontario-specific','ONHWPA compliant'].map(t => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-widest text-cb-dim flex items-center gap-1.5">
                  <span className="text-cb-gold text-[9px]">✓</span>{t}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
