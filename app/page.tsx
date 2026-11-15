import type { Metadata } from 'next'
import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import ModuleCards from '@/components/ModuleCards'
import KnowledgeGap from '@/components/KnowledgeGap'
import OutcomeStats from '@/components/OutcomeStats'
import StageGallery from '@/components/StageGallery'

export const metadata: Metadata = {
  title: 'Builder Guardian — Warranty Management for Ontario Builders | Tarion',
  description: 'Warranty management software for Ontario homebuilders, low-rise and high-rise. Tarion form import, deadlines, AI triage, work orders and a Conciliation Manager add-on. Built by a Tarion insider. From $129/community.',
  alternates: { canonical: 'https://combryx.com' },
}

const tarionItems = [
  { n:'41', label:'Initial Form (Day 41)', sub:'Auto-submits Day 41 · BRP: 120 days', desc:'CPP / PDI signature starts the Tarion clock. Homeowner adds deficiencies Days 1–40. Form auto-submits Day 41 — no manual filing required. Builder gets 120-day BRP, with a 30-day pre-conciliation BRP if RFC is requested, for up to 150 days total.' },
  { n:'1', label:'Year — Initial & Mid-Year Forms', sub:'OBC violations · Structural · BRP 120+30 days', desc:'Initial form auto-submits Day 41. Builder gets 120-day BRP, then a 30-day pre-conciliation BRP if the homeowner requests conciliation — 150 days total. Builder Guardian tracks both periods and the homeowner RFC status.' },
  { n:'2', label:'Year Distribution', sub:'Water · MEP systems', desc:'Water penetration, electrical, plumbing, heating. Full case history per period per lot.' },
  { n:'7', label:'Year MSD', sub:'Major Structural Defects', desc:'Highest-risk window. Lex Structura flags RFC risk cases with OBC structural citations attached.' },
]

const pricing = [
  { tag:'Base — Start Here', name:'Builder Guardian Warranty', price:'$129', period:'per community or tower / month', tagline:'Replace QDef, your Excel tracker, and the filing cabinet.', featured:true, plan:'warranty', cta:'Start Builder Guardian Warranty', href:'/pricing?plan=warranty',
    items:['Sites, towers, lots, suites and owner records','Tarion form import — items created automatically','Statutory deadline and BRP tracking per home','AI triage + OBC/CPG answers (Lex Structura)','Work orders to trades and technicians','PO approvals + warranty cost ledger','Aging reports + automatic weekly emails per site','QDef import · Excel/PDF export · Unlimited users'],
    locked:['Coming: Tarion API sync · owner portal · QCI & PDI · offline field app'] },
  { tag:'Add-on — Managers Only', name:'Conciliation Manager', price:'+$199', period:'per builder / month', tagline:'Walk into every Tarion conciliation with the whole file in order.', featured:false, plan:'conciliation', cta:'Add Conciliation Manager', href:'/pricing?plan=conciliation',
    items:['Cases tracked from inspection booked to CAR','Inspection cycles, CARs and deadline timers','Cash offers and releases','Builder comments package with evidence attached','Management control centre by community','Freehold and common elements (high-rise)','Visible to managers only'],
    locked:['Coming: now being built into Builder Guardian'] },
  { tag:'Add-on — Coming', name:'Design Centre', price:'Coming', period:'priced at launch', tagline:'Owners choose and sign their selections online before the sales centre visit.', featured:false, plan:'design', cta:'Join the Waitlist', href:'/demo#waitlist',
    items:['Owner selections in the portal, every option explained','Signed selection record per home','Site instruction list from the final choices','Upgrade and credit ledger for your build system','360 tours and stage records, framing to close','AI walk-through checks selections at QCI'],
    locked:[] },
]

const faqs = [
  { q:'Can I migrate from QDef without losing my data?', a:'Yes. Builder Guardian Warranty includes a QDef import. Your communities, lots, homeowner records, and open items come across, and we provide a migration guide and email support throughout.' },
  { q:'Does Builder Guardian replace my construction or sales software?', a:'No. Builder Guardian is built for the warranty department only. It takes lots and owners from the system you already use, by spreadsheet import or API, and sends warranty data back out by export.' },
  { q:'Do I need the add-ons?', a:'No. Builder Guardian Warranty is a complete product on its own. The Conciliation Manager is an add-on for managers. The Design Centre is a separate add-on that is still being built.' },
  { q:'Does it handle high-rise?', a:'Yes. Towers and suites sit alongside communities and lots, and the Conciliation Manager switches between freehold and common elements.' },
  { q:'What if I want to leave? What happens to my data?', a:'Full data export in CSV, Excel, and PDF — anytime, free, no ticket, no waiting period. Data retained 90 days after cancellation. We don\'t make leaving hard. That\'s a deliberate policy.' },
  { q:'Is Builder Guardian built specifically for Ontario?', a:'Built from the ground up for Ontario\'s homebuilding ecosystem — by someone who worked inside Tarion and inside five Ontario builders. Not a US platform with Canadian checkboxes. The statutory warranty deadlines, CPG tolerances, and ONHWPA obligations are the foundation.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-14 overflow-hidden bg-gradient-to-b from-white to-cb-dark1">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.07]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background:'radial-gradient(ellipse,rgba(217,119,6,0.06) 0%,transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/banner-1400.jpg" srcSet="/brand/banner-1400.jpg 1400w, /brand/banner.jpg 2172w" sizes="(min-width:1280px) 1100px, 100vw" width={1400} height={467} alt="Builder Guardian. Build, manage, protect. Warranty, Design Center and Conciliation Manager." className="w-full h-auto rounded-xl block" style={{ boxShadow:'0 24px 48px rgba(15,23,42,0.18)' }} />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center flex-1 px-4 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto w-full">
          <div className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-cb-gold opacity-60" />
            Built for Ontario Builders · Tarion Compliant · ONHWPA Ready
          </div>

          <h1 className="animate-fade-up anim-d1 font-display text-[clamp(56px,9vw,120px)] leading-[0.93] tracking-[0.04em] text-cb-white mb-6">
            THE WARRANTY<br/>SYSTEM ONTARIO<br/><span className="text-cb-gold text-glow-gold">BUILDERS</span><br/>ACTUALLY NEED.
          </h1>

          <p className="animate-fade-up anim-d2 text-lg text-cb-muted leading-relaxed max-w-xl mb-10">
            <strong className="text-cb-white font-semibold">Built by a carpenter who worked inside Tarion — and inside five Ontario builders.</strong> Every feature exists because of a real gap found on a real job site. One department. One system. It works beside the construction and sales software you already use.
          </p>

          <div className="animate-fade-up anim-d3" style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:48 }}>
            <Link href="/pricing" className="btn-gold">
              Start with Builder Guardian Warranty →
            </Link>
            <Link href="/platform" className="btn-ghost">
              See What&apos;s Included
            </Link>
          </div>

          <div className="animate-fade-up anim-d4" style={{ display:'flex', gap:40, flexWrap:'wrap', borderTop:'1px solid rgba(15,23,42,0.1)', paddingTop:32, width:'100%' }}>
            {[['100%','Tarion Form Compatible'],['2','Optional Add-ons'],['$0','Setup Fee'],['2','Low-Rise + High-Rise'],['35+','Years in the Trade']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:30, letterSpacing:'0.04em', color:'#D97706', lineHeight:1, marginBottom:4 }}>{n}</div>
                <div style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <StageGallery />

      {/* ── THE GAP ── */}
      <section className="bg-cb-dark1 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <ScrollReveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
              <span className="w-5 h-px bg-cb-gold opacity-60"/>Why Builder Guardian Exists
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-8">
              Every builder software company<br/>learned Tarion from the outside.<br/><span className="text-cb-gold">We didn&apos;t.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(217,119,6,0.08)] border border-[rgba(217,119,6,0.1)] rounded-xl overflow-hidden">
            <ScrollReveal className="bg-cb-dark2 p-10">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-red-600 font-semibold mb-4">What every other system gets wrong</div>
              <div className="font-display text-2xl text-cb-white mb-6">Good software. Built by people who never sat inside the process.</div>
              <div className="flex flex-col gap-4">
                {['They read the Tarion handbook. We processed the claims, ran the inspections, and sat in the conciliation rooms.','They track deadlines. We know what happens when you miss one by a single day — and built every alert around that exact consequence.','They built for general construction. We built for Ontario\'s specific statutory obligations under ONHWPA.','Systems designed by software engineers who have never set foot on a job site or navigated an OBC compliance issue.'].map(t => (
                  <div key={t} className="flex gap-3 text-sm text-cb-muted leading-relaxed">
                    <span className="text-red-600 flex-shrink-0 mt-0.5">✗</span>{t}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="bg-[rgba(217,119,6,0.04)] border-l border-[rgba(217,119,6,0.15)] p-10">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-cb-gold font-semibold mb-4">The Builder Guardian difference</div>
              <div className="font-display text-2xl text-cb-white mb-6">Built by someone who knows what you&apos;re actually up against.</div>
              <div className="flex flex-col gap-4">
                {['Founder worked inside Tarion — not reading the guidelines, processing them and understanding the intent behind every rule.','5 Ontario builders worked in before building this — every gap found, every workaround documented, then eliminated.','Lex Structura AI loaded with OBC Part 9, CPG, ONHWPA, and Registrar Bulletins — answers like a trained adjudicator.','Defence Vault designed knowing exactly how Tarion conciliation unfolds. Not guessed. Experienced.'].map(t => (
                  <div key={t} className="flex gap-3 text-sm text-cb-muted leading-relaxed">
                    <span className="text-cb-gold flex-shrink-0 mt-0.5">✓</span>{t}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ModuleCards />

      <OutcomeStats />

      {/* ── TARION ── */}
      <section id="tarion" className="bg-cb-dark1 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
              <span className="w-5 h-px bg-cb-gold opacity-60"/>Tarion &amp; ONHWPA Compliance
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">The only system that knows<br/>how <span className="text-cb-gold">the new CSS actually works.</span></h2>
            <p className="text-cb-muted text-base leading-relaxed max-w-xl mb-12">We didn&apos;t bolt on Tarion compliance as an afterthought. It&apos;s the foundation. Every deadline, every form, every statutory obligation — tracked automatically from the moment a unit closes.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              {tarionItems.map((t, i) => (
                <ScrollReveal key={t.n} delay={i * 80} className="bg-cb-dark2 border border-[rgba(217,119,6,0.12)] rounded-xl p-6">
                  <div className="flex gap-5 items-start">
                    <div className="font-display text-5xl text-cb-gold leading-none flex-shrink-0 tracking-[0.04em]">{t.n}</div>
                    <div>
                      <div className="font-body text-[15px] font-bold text-cb-white mb-1">{t.label}</div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-cb-dim mb-2">{t.sub}</div>
                      <p className="text-cb-muted text-[13px] leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200} className="bg-cb-dark2 border border-[rgba(217,119,6,0.2)] rounded-xl overflow-hidden">
              <div className="bg-[rgba(217,119,6,0.08)] border-b border-[rgba(217,119,6,0.15)] px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-cb-gold font-semibold uppercase tracking-widest">Bayview Heights — Unit Deadlines</span>
                <span className="font-mono text-[9px] text-cb-dim">Live · Auto-updated</span>
              </div>
              {[['Unit 804 — Initial Form (Day 41)','Jun 3, 2026','In BRP','#15803D','rgba(34,197,94,0.12)'],
                ['Unit 512 — Mid-Year Form','May 14, 2026','BRP Day 108','#D97706','rgba(217,119,6,0.12)'],
                ['Unit 301 — 2-Year','Apr 28, 2026','Expired','#dc2626','rgba(220,38,38,0.12)'],
                ['Unit 215 — Year-End Form','Jul 22, 2026','BRP Active','#15803D','rgba(34,197,94,0.12)'],
                ['Unit 119 — 7-Year MSD','Aug 30, 2028','2.3 yrs','#15803D','rgba(34,197,94,0.12)']].map(([name,date,status,c,bg]) => (
                <div key={name} className="px-6 py-4 border-b border-[rgba(15,23,42,0.1)] flex items-center justify-between gap-4 last:border-0">
                  <div>
                    <div className="font-body text-sm font-semibold text-cb-white">{name}</div>
                    <div className="font-mono text-[10px] text-cb-dim">{date}</div>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md flex-shrink-0" style={{ color:c, background:bg }}>{status}</span>
                </div>
              ))}
              <div className="px-6 py-4 bg-[rgba(15,23,42,0.04)] border-t border-[rgba(15,23,42,0.1)]">
                {['Tarion conciliation request (RFC) tracking','QDef import — migrate in one afternoon','ONHWPA statutory obligation tracking','OBC Part 9 AI answers (Lex Structura)'].map(t => (
                  <div key={t} className="flex gap-2 text-[12px] text-cb-muted py-1">
                    <span className="text-cb-gold text-[10px] flex-shrink-0 mt-0.5">→</span>{t}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <KnowledgeGap />

            {/* ── PRICING ── */}
      <section id="pricing" className="bg-cb-dark2 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal className="text-center mb-14">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center justify-center gap-3">
              <span className="w-5 h-px bg-cb-gold opacity-60"/>Simple Pricing
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">No setup fees. No locked contracts.<br/><span className="text-cb-gold">No surprises.</span></h2>
            <p className="text-cb-muted text-base max-w-lg mx-auto">Priced per community or tower, per month. Unlimited users. Full data export always free. Cancel anytime.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-[rgba(15,23,42,0.1)] rounded-xl overflow-hidden border border-[rgba(15,23,42,0.1)]">
            {pricing.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}
                className={`p-9 relative ${p.featured ? 'bg-cb-dark1 border-2 border-cb-gold -mx-px z-10 rounded-xl' : 'bg-cb-dark1'}`}>
                {p.featured && <div className="absolute -top-px left-6 bg-cb-gold text-white font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-md">Start Here</div>}
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-cb-dim mb-3">{p.tag}</div>
                <div className={`font-display text-2xl tracking-[0.04em] mb-2 ${p.featured ? 'text-cb-gold' : 'text-cb-white'}`}>{p.name}</div>
                <p className="text-cb-muted text-sm leading-relaxed mb-6">{p.tagline}</p>
                <div className="mb-6 pb-5 border-b border-[rgba(15,23,42,0.1)]">
                  <div className={`font-display text-5xl tracking-[0.04em] leading-none mb-1 ${p.featured ? 'text-cb-gold' : 'text-cb-white'}`}>{p.price}</div>
                  <div className="font-mono text-[10px] text-cb-dim">{p.period}</div>
                </div>
                <div className="flex flex-col gap-2.5 mb-8">
                  {p.items.map(item => (
                    <div key={item} className="flex gap-2.5 text-[13px] text-cb-muted">
                      <span className={`flex-shrink-0 mt-0.5 text-[11px] font-bold ${p.featured ? 'text-cb-gold' : 'text-green-700'}`}>✓</span>{item}
                    </div>
                  ))}
                  {p.locked.map(item => (
                    <div key={item} className="flex gap-2.5 text-[12px] text-cb-dim">
                      <span className="flex-shrink-0 mt-0.5 text-[11px]">○</span>{item}
                    </div>
                  ))}
                </div>
                <Link href={p.href}
                  className={`block text-center font-mono text-[11px] font-semibold uppercase tracking-widest py-3.5 rounded-md transition-all no-underline ${p.featured ? 'bg-cb-gold text-white hover:bg-cb-gold2' : 'bg-cb-dark3 text-cb-gold border border-[rgba(217,119,6,0.3)] hover:bg-cb-gold hover:text-white'}`}>
                  {p.cta} →
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <p className="text-cb-muted text-sm">Volume discounts: 5+ communities — 15% off · 10+ — 25% off · 20+ — contact us<br/>
            All plans: unlimited users · unlimited cases · full data export · <strong className="text-cb-white">$0 exit fee, forever</strong></p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cb-dark1 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto w-full">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
              <span className="w-5 h-px bg-cb-gold opacity-60"/>FAQ
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.04em] text-cb-white">Everything you need to know<br/>before you switch.</h2>
          </ScrollReveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-cb-dark1 py-20 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]" style={{ background:'radial-gradient(ellipse,rgba(217,119,6,0.05) 0%,transparent 70%)' }}/>
        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-5">The warranty system founded by a Tarion insider</div>
            <h2 className="font-display text-[clamp(48px,8vw,96px)] tracking-[0.04em] leading-[0.95] text-cb-white mb-6">
              BUILT FROM<br/>THE <span className="text-cb-gold">INSIDE.</span>
            </h2>
            <p className="text-cb-muted text-base leading-relaxed mb-10">Five builders. One warranty authority. Every gap documented and eliminated. Start with Builder Guardian Warranty — no setup fee, no locked contract.</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
              <Link href="/pricing" className="btn-gold">
                Start with Builder Guardian Warranty
              </Link>
              <Link href="mailto:demo@combryx.com" className="btn-ghost">
                Book a 20-Min Demo
              </Link>
            </div>
            <div className="flex gap-6 justify-center flex-wrap">
              {['No setup fee','Cancel anytime','Full data export free','Custom dev on demand','Same-day support','ONHWPA compliant'].map(t => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-widest text-cb-dim flex items-center gap-1.5">
                  <span className="text-cb-gold text-[9px]">✓</span>{t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
