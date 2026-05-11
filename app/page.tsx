import type { Metadata } from 'next'
import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import LifecycleSVG from '@/components/LifecycleSVG'
import ModuleCards from '@/components/ModuleCards'
import KnowledgeGap from '@/components/KnowledgeGap'
import OutcomeStats from '@/components/OutcomeStats'

export const metadata: Metadata = {
  title: 'Combryx — Built for Ontario Builders | Tarion Warranty ERP',
  description: 'Modular construction ERP for Ontario homebuilders. Tarion-compliant warranty management, field app, and AI-powered tools. Built by a Tarion insider. Start from $149/community.',
  alternates: { canonical: 'https://combryx.com' },
}

const modules = [
  { letter:'E', color:'#FFB800', badge:'Base — Always Included', name:'Warranty & Asset Management', desc:'Complete Tarion-compliant warranty case management. PDI sign-off, work orders, scheduling, AI triage, and the Defence Vault — the only conciliation-ready audit package in Canadian builder software.', features:['Tarion CSS form schedule tracking (Day 41, 183, 366 auto-submissions)','PDI digital sign-off with homeowner signature + PDF','Defence Vault — Tarion conciliation-ready export','AI triage classifies cases and drafts responses','Lex Structura — OBC Part 9 and CPG regulatory answers'], field:'Tech mode · PDI mode · Assessment mode' },
  { letter:'B', color:'#06b6d4', badge:'Add-on Module', name:'Financial Ledger', desc:'Job costing, PO management, invoice OCR, and lender draw packages — all connected to your warranty and construction data.', features:['Real-time job costing by community and cost code','Invoice OCR — AI extracts, matches to POs automatically','Lender draw packages auto-assembled on phase sign-off','CapEx vs OpEx auto-classification','Budget vs actual alerts at 80% and 95%'], field:'Material orders · Budget visibility' },
  { letter:'C', color:'#3b82f6', badge:'Add-on Module', name:'Build & Field Ops', desc:'CPM scheduling, phase gate management, and sub-trade sign-offs from the field. When a super signs off a phase on site, the draw request assembles itself in the office.', features:['Dynamic CPM Gantt — drag to reschedule, cascade updates','Phase gate sign-off from field app — photo required','Sub-trade digital sign-off via shareable link (no install needed)','Material order requests → PM approval queue','Safety observation log with escalation'], field:'Phase sign-off · Safety · Orders' },
  { letter:'D', color:'#a855f7', badge:'Add-on Module', name:'Sales, Leasing & Storage', desc:'APS generation, design studio, locker/parking assignment — and the Smart Handover. When a unit is sold, automated cascades fire across every connected module.', features:['APS generation with e-signature (DocuSign / Dropbox Sign)','Design studio — buyers select finishes via their portal','Visual site plan — units colour-coded by status','Locker + parking auto-assign by proximity algorithm','Smart Handover: unit sold cascade fires automatically'], field:'Sales pipeline visibility' },
  { letter:'A', color:'#ef4444', badge:'Add-on Module', name:'Land & Pre-Con', desc:'Land acquisition pipeline, AI pro-forma modelling, live zoning API, and permit tracking. When a permit is approved it automatically unlocks the corresponding construction phase.', features:['Land acquisition pipeline from MLS look to close','AI-assisted pro-forma from comparable project data','Municipal zoning API — permitted uses, density, setbacks','Permit tracker — approved permits unlock build phases'], field:'Permit status visibility' },
  { letter:'F', color:'#10b981', badge:'Add-on Module', name:'IoT & Security', desc:'Smart lock integration, digital key issuance, and sensor monitoring. Unit closed — trade keys revoked automatically, homeowner access provisioned. Moisture spike — warranty case created before the homeowner calls.', features:['Salto / Latch smart lock integration','Time-bound digital keys for trades, visitors, inspectors','Moisture + temperature sensor monitoring per unit','Sensor alert → warranty case auto-created + trade dispatched','Amenity booking → key auto-issued for booking window'], field:'Sensor alerts · Key management' },
]

const tarionItems = [
  { n:'41', label:'Initial Form (Day 41)', sub:'Auto-submits Day 41 · BRP: 120 days', desc:'CPP / PDI signature starts the Tarion clock. Homeowner adds deficiencies Days 1–40. Form auto-submits Day 41 — no manual filing required. Builder gets 120-day BRP, with a 30-day pre-conciliation BRP if RFC is requested, for up to 150 days total.' },
  { n:'1', label:'Year — Initial & Mid-Year Forms', sub:'OBC violations · Structural · BRP 120+30 days', desc:'Initial form auto-submits Day 41. Builder gets 120-day BRP, then a 30-day pre-conciliation BRP if the homeowner requests conciliation — 150 days total. Combryx tracks both periods and the homeowner RFC status.' },
  { n:'2', label:'Year Distribution', sub:'Water · MEP systems', desc:'Water penetration, electrical, plumbing, heating. Full case history per period per lot.' },
  { n:'7', label:'Year MSD', sub:'Major Structural Defects', desc:'Highest-risk window. Lex Structura flags RFC risk cases with OBC structural citations attached.' },
]

const pricing = [
  { tag:'Entry', name:'Warranty Core', price:'$149', period:'per community / month', tagline:'Replace QDef, your Excel tracker, and the filing cabinet on day one.', featured:false, plan:'warranty',
    items:['Full warranty case management','Tarion 30-day, 1yr, 2yr, MSD tracking','Work order scheduling + tech assignment','PDI digital sign-off + PDF generation','Defence Vault + conciliation prep export','AI triage + OBC/CPG answers (Lex Structura)','Field app — tech, PDI, assessment modes','Tarion XML import · Unlimited users'],
    locked:['Financial Ledger — add for $79/community','Build Ops — add for $79/community'] },
  { tag:'Most Popular', name:'Builder Suite', price:'$349', period:'per community / month · 4 modules included', tagline:'Construction lifecycle from phase gate to lender draw — connected.', featured:true, plan:'builder',
    items:['Everything in Warranty Core','Financial Ledger — job costing, POs, invoice OCR','Lender draw packages — auto-assembled on phase sign-off','Build & Field Ops — Gantt, phase gates, subtrade sign-off','Sales module — APS, design studio, storage map','Smart Handover — unit sold cascade fires automatically','Full field app — all 13 screens, all roles','Financial Ghost AI — invoice classification'],
    locked:['Pre-Con + IoT — add for $99/community'] },
  { tag:'Enterprise', name:'Enterprise Stack', price:'$549', period:'per community / month · all 6 modules', tagline:'Land purchase to warranty expiry. Every module. Every role.', featured:false, plan:'enterprise',
    items:['Everything in Builder Suite','Land & Pre-Con — pipeline, pro-forma, zoning API','Permit tracking — approved permit unlocks phase','IoT & Security — Salto/Latch smart lock integration','Sensor monitoring — moisture/temp → auto warranty case','Property management tickets + tenant comms','All 14 field app screens · All 9 roles','Priority support — dedicated onboarding'],
    locked:[] },
]

const faqs = [
  { q:'Can I migrate from QDef without losing my data?', a:'Yes. Combryx includes a Tarion XML and QDef CSV import on the Warranty Core plan. Your communities, lots, homeowner records, and open cases migrate in one afternoon. We provide a migration guide and email support throughout.' },
  { q:'Do I need to buy all modules?', a:'Absolutely not. Warranty Core is a complete standalone product. When you add a module, your existing data connects automatically — no reinstall, no migration, no retraining.' },
  { q:'What if I want to leave? What happens to my data?', a:'Full data export in CSV, Excel, and PDF — anytime, free, no ticket, no waiting period. Data retained 90 days after cancellation. We don\'t make leaving hard. That\'s a deliberate policy.' },
  { q:'Can Combryx be customized for how my company operates?', a:'Yes. Custom workflows, integrations (Sage, QuickBooks, Yardi), and reports available at a transparent hourly rate. Quoted before any work starts. Custom features become permanent parts of your account.' },
  { q:'Is Combryx built specifically for Ontario?', a:'Built from the ground up for Ontario\'s homebuilding ecosystem — by someone who worked inside Tarion and inside five Ontario builders. Not a US platform with Canadian checkboxes. The statutory warranty deadlines, CPG tolerances, and ONHWPA obligations are the foundation.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-14 overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.07]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background:'radial-gradient(ellipse,rgba(255,184,0,0.06) 0%,transparent 70%)' }} />

        <div className="relative z-10 flex flex-col items-start justify-center flex-1 px-4 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto w-full">
          <div className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-cb-gold opacity-60" />
            Built for Ontario Builders · Tarion Compliant · ONHWPA Ready
          </div>

          <h1 className="animate-fade-up anim-d1 font-display text-[clamp(56px,9vw,120px)] leading-[0.93] tracking-[0.04em] text-cb-white mb-6">
            THE ERP<br/>ONTARIO<br/><span className="text-cb-gold text-glow-gold">BUILDERS</span><br/>ACTUALLY NEED.
          </h1>

          <p className="animate-fade-up anim-d2 text-lg text-cb-muted leading-relaxed max-w-xl mb-10">
            <strong className="text-cb-white font-semibold">Built by a carpenter who worked inside Tarion — and inside five Ontario builders.</strong> Every feature exists because of a real gap found on a real job site. Buy what you need. Add modules as you grow.
          </p>

          <div className="animate-fade-up anim-d3" style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:48 }}>
            <Link href="/pricing" className="btn-gold">
              Start with Warranty Core →
            </Link>
            <Link href="/platform" className="btn-ghost">
              View All Modules
            </Link>
          </div>

          <div className="animate-fade-up anim-d4" style={{ display:'flex', gap:40, flexWrap:'wrap', borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:32, width:'100%' }}>
            {[['100%','Tarion Form Compatible'],['6','Modular Add-ons'],['$0','Setup Fee'],['APK','Android Field App'],['35+','Years in the Trade']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:30, letterSpacing:'0.04em', color:'#FFB800', lineHeight:1, marginBottom:4 }}>{n}</div>
                <div style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#444444' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ── THE GAP ── */}
      <section className="bg-cb-dark1 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <ScrollReveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
              <span className="w-5 h-px bg-cb-gold opacity-60"/>Why Combryx Exists
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-8">
              Every builder software company<br/>learned Tarion from the outside.<br/><span className="text-cb-gold">We didn&apos;t.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,184,0,0.08)] border border-[rgba(255,184,0,0.1)] rounded-xl overflow-hidden">
            <ScrollReveal className="bg-cb-dark2 p-10">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-red-400 font-semibold mb-4">What every other system gets wrong</div>
              <div className="font-display text-2xl text-cb-white mb-6">Good software. Built by people who never sat inside the process.</div>
              <div className="flex flex-col gap-4">
                {['They read the Tarion handbook. We processed the claims, ran the inspections, and sat in the conciliation rooms.','They track deadlines. We know what happens when you miss one by a single day — and built every alert around that exact consequence.','They built for general construction. We built for Ontario\'s specific statutory obligations under ONHWPA.','Systems designed by software engineers who have never set foot on a job site or navigated an OBC compliance issue.'].map(t => (
                  <div key={t} className="flex gap-3 text-sm text-cb-muted leading-relaxed">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>{t}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="bg-[rgba(255,184,0,0.04)] border-l border-[rgba(255,184,0,0.15)] p-10">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-cb-gold font-semibold mb-4">The Combryx difference</div>
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

      <LifecycleSVG />

      <ModuleCards />

      <OutcomeStats />

      {/* ── TARION ── */}
      <section id="tarion" className="bg-black py-16 px-4 md:px-8">
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
                <ScrollReveal key={t.n} delay={i * 80} className="bg-cb-dark2 border border-[rgba(255,184,0,0.12)] rounded-xl p-6">
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

            <ScrollReveal delay={200} className="bg-cb-dark2 border border-[rgba(255,184,0,0.2)] rounded-xl overflow-hidden">
              <div className="bg-[rgba(255,184,0,0.08)] border-b border-[rgba(255,184,0,0.15)] px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-cb-gold font-semibold uppercase tracking-widest">Bayview Heights — Unit Deadlines</span>
                <span className="font-mono text-[9px] text-cb-dim">Live · Auto-updated</span>
              </div>
              {[['Unit 804 — Initial Form (Day 41)','Jun 3, 2026','In BRP','#22c55e','rgba(34,197,94,0.12)'],
                ['Unit 512 — Mid-Year Form','May 14, 2026','BRP Day 108','#d97706','rgba(217,119,6,0.12)'],
                ['Unit 301 — 2-Year','Apr 28, 2026','Expired','#dc2626','rgba(220,38,38,0.12)'],
                ['Unit 215 — Year-End Form','Jul 22, 2026','BRP Active','#22c55e','rgba(34,197,94,0.12)'],
                ['Unit 119 — 7-Year MSD','Aug 30, 2028','2.3 yrs','#22c55e','rgba(34,197,94,0.12)']].map(([name,date,status,c,bg]) => (
                <div key={name} className="px-6 py-4 border-b border-[rgba(255,255,255,0.04)] flex items-center justify-between gap-4 last:border-0">
                  <div>
                    <div className="font-body text-sm font-semibold text-cb-white">{name}</div>
                    <div className="font-mono text-[10px] text-cb-dim">{date}</div>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md flex-shrink-0" style={{ color:c, background:bg }}>{status}</span>
                </div>
              ))}
              <div className="px-6 py-4 bg-[rgba(255,255,255,0.02)] border-t border-[rgba(255,255,255,0.04)]">
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
            <p className="text-cb-muted text-base max-w-lg mx-auto">Priced per community, per month. Field app always included. Full data export always free. Cancel anytime.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
            {pricing.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}
                className={`p-9 relative ${p.featured ? 'bg-cb-dark1 border-2 border-cb-gold -mx-px z-10 rounded-xl' : 'bg-cb-dark1'}`}>
                {p.featured && <div className="absolute -top-px left-6 bg-cb-gold text-black font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-md">Most Popular</div>}
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-cb-dim mb-3">{p.tag}</div>
                <div className={`font-display text-2xl tracking-[0.04em] mb-2 ${p.featured ? 'text-cb-gold' : 'text-cb-white'}`}>{p.name}</div>
                <p className="text-cb-muted text-sm leading-relaxed mb-6">{p.tagline}</p>
                <div className="mb-6 pb-5 border-b border-[rgba(255,255,255,0.07)]">
                  <div className={`font-display text-5xl tracking-[0.04em] leading-none mb-1 ${p.featured ? 'text-cb-gold' : 'text-cb-white'}`}>{p.price}</div>
                  <div className="font-mono text-[10px] text-cb-dim">{p.period}</div>
                </div>
                <div className="flex flex-col gap-2.5 mb-8">
                  {p.items.map(item => (
                    <div key={item} className="flex gap-2.5 text-[13px] text-cb-muted">
                      <span className={`flex-shrink-0 mt-0.5 text-[11px] font-bold ${p.featured ? 'text-cb-gold' : 'text-green-400'}`}>✓</span>{item}
                    </div>
                  ))}
                  {p.locked.map(item => (
                    <div key={item} className="flex gap-2.5 text-[12px] text-cb-dim">
                      <span className="flex-shrink-0 mt-0.5 text-[11px]">○</span>{item}
                    </div>
                  ))}
                </div>
                <Link href={`/pricing?plan=${p.plan}`}
                  className={`block text-center font-mono text-[11px] font-semibold uppercase tracking-widest py-3.5 rounded-md transition-all no-underline ${p.featured ? 'bg-cb-gold text-black hover:bg-cb-gold2' : 'bg-cb-dark3 text-cb-gold border border-[rgba(255,184,0,0.3)] hover:bg-cb-gold hover:text-black'}`}>
                  Start {p.name} →
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <p className="text-cb-muted text-sm">Volume discounts: 5+ communities — 15% off · 10+ — 25% off · 20+ — contact us<br/>
            All plans: unlimited users · unlimited cases · full data export · field app included · <strong className="text-cb-white">$0 exit fee, forever</strong></p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-black py-16 px-4 md:px-8">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]" style={{ background:'radial-gradient(ellipse,rgba(255,184,0,0.05) 0%,transparent 70%)' }}/>
        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-5">The only builder ERP founded by a Tarion insider</div>
            <h2 className="font-display text-[clamp(48px,8vw,96px)] tracking-[0.04em] leading-[0.95] text-cb-white mb-6">
              BUILT FROM<br/>THE <span className="text-cb-gold">INSIDE.</span>
            </h2>
            <p className="text-cb-muted text-base leading-relaxed mb-10">Five builders. One warranty authority. Every gap documented and eliminated. Start with Warranty Core — running on day one, no setup fee, no locked contract.</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
              <Link href="/pricing" className="btn-gold">
                Start Free Trial — Warranty Core
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
