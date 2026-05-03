import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'How It Works — Ontario Builder Warranty & ERP Software',
  description: 'See exactly how Combryx connects the field and the office. Daily workflow, before/after comparison, interactive hive, and the Tarion edge explained.',
  alternates: { canonical: 'https://combryx.com/how-it-works' },
}

const pain = [
  { n:'01', title:'Your data lives in five different places', body:'Coordinator spreadsheet. Tech WhatsApp thread. Super notepad. Homeowner file in a cabinet. When Tarion calls, finding the complete picture takes hours — and pieces are always missing.' },
  { n:'02', title:'Tarion deadlines managed by memory', body:'A missed 30-day window. A BRP that expired before anyone noticed. Statutory deadlines under ONHWPA that no one is actively tracking. These don\'t result in warnings — they result in claims you can\'t defend.' },
  { n:'03', title:'Conciliation you\'re not ready for', body:'The work was done. The issue was addressed. But when Tarion files a conciliation request, the documentation trail is scattered. Cases you should win get lost because the paper record doesn\'t tell the story the way it happened.' },
  { n:'04', title:'Software that fights your workflow', body:'Platforms built for a generic construction company in any jurisdiction — with Tarion fields added as an afterthought. You spend more time adapting your process to the software than the other way around.' },
  { n:'05', title:'The field and the office aren\'t talking', body:'A tech completes a job on site. The coordinator doesn\'t know until they call. The gap between site and office costs time every single day.' },
  { n:'06', title:'Locked in with no way out', body:'Annual contracts. Proprietary data formats. Export fees buried in the fine print. Platforms that count on switching costs to retain customers rather than building something worth staying for.' },
]

const workflow = [
  { n:'01', time:'7:00 AM', actor:'Field Tech — In the truck', title:'Opens the app. Today\'s jobs are already there.', desc:'Pre-loaded from the office the night before. Address, unit, deficiency description, homeowner name, and scheduled time — all on one screen. Tap the address and it opens in Maps. No calls to the office. No paper route sheet.', outcome:'Works offline — no signal needed in the parkade' },
  { n:'02', time:'9:15 AM', actor:'Field Tech — Unit 112', title:'Job done. Photo taken. Marked complete in 15 seconds.', desc:'Tap "Mark Complete." Camera opens. Completion photo required before confirming. Photo queued for sync. The coordinator sees it appear in their dashboard the moment the phone hits LTE on the way to the next lot.', outcome:'Coordinator notified automatically — no call needed' },
  { n:'03', time:'10:30 AM', actor:'Site Super — Walking the site', title:'Spots a defect. Logged in 30 seconds. Office has it before they get back to the trailer.', desc:'Tap the camera button. Photo first — always. Choose category from six large buttons. Voice-record or type a 10-second description. Select the lot. Submit. Draft case appears in the coordinator\'s queue for review.', outcome:'Draft case in office system before the super reaches the next lot' },
  { n:'04', time:'2:00 PM', actor:'PDI Inspector — Unit 301 closing walkthrough', title:'Room-by-room checklist. Homeowner signs on the tablet. PDF sent before they leave the unit.', desc:'Structured room-by-room inspection. Camera opens automatically on any flagged item. At the end: homeowner signs on glass. Inspector signs. PDF generated on-device, emailed to homeowner, uploaded to Defence Vault. Outstanding items become warranty cases.', outcome:'Signed legal document in the Vault before the inspector leaves the building' },
  { n:'05', time:'3:45 PM', actor:'Warranty Coordinator — Office', title:'Tarion deadline alert fires. One click to see everything needed.', desc:'The system flags a 1-Year BRP window closing in 11 days for Unit 512. The coordinator opens the lot — sees all open cases, current status, which trade is assigned, and which are at risk. Email reminders already sent to the trade.', outcome:'Proactive — not reactive. The system manages the clock, not memory.' },
  { n:'06', time:'4:58 PM', actor:'Director — Tarion calls about a conciliation', title:'Pull the Defence Vault package. One click. Walk into that room ready.', desc:'Every status change, every photo, every signed document, every homeowner communication — timestamped and organized in a single export. PDF formatted for Tarion\'s process with full timeline, CPG citations, and evidence chain. Generated in under a minute.', outcome:'Conciliation-ready package in 60 seconds — built from everything already in the system' },
]

const pillars = [
  { color:'#FFB800', icon:'🛡️', outcome:'The Foundation', title:'Warranty Management That Actually Works', body:'End-to-end warranty case management built around how Ontario statutory warranty actually operates. Everything timestamped, photographed, and documented automatically.', proof:['Open, track, resolve, and appeal warranty cases','Work order scheduling with auto-reminders to trades','AI triage classifies incoming cases and drafts responses','Every interaction logged — becomes evidence if needed'] },
  { color:'#ef4444', icon:'⚖️', outcome:'The Tarion Edge', title:'All Four Statutory Windows. Tracked to the Minute.', body:'30-day, 1-year, 2-year, and 7-year MSD deadlines initialized the moment a PDI is signed. Ask OBC and CPG questions — get citations back, not generic answers.', proof:['Countdown clocks start at PDI completion automatically','BRP deadline alerts at 30, 14, and 7 days','Lex Structura AI answers OBC Part 9 and CPG questions','ONHWPA statutory obligation tracking built in'] },
  { color:'#a855f7', icon:'🔐', outcome:'The Differentiator', title:'Defence Vault — Conciliation Ready. Always.', body:'Every case generates an automatic audit trail. One click exports a PDF package formatted for Tarion conciliation. Built by someone who has sat in that room and knows exactly what an adjudicator looks for.', proof:['Per-case audit trail built from day one','One-click conciliation export formatted for Tarion','CPG citations attached automatically via Lex Structura','Cases you should win — you will now win'] },
  { color:'#22c55e', icon:'📱', outcome:'The Field', title:'The App That Works Without Signal', body:'Designed for the field guy, not the office manager. Three taps max for any common task. Works offline in concrete parkades and unfinished basements. Syncs silently when signal returns.', proof:['Log a defect with a photo in under 30 seconds','PDI walkthrough with dual signature and auto-PDF','Phase sign-off from site triggers draw request in office','Role-based — tech sees jobs, PM sees everything'] },
  { color:'#06b6d4', icon:'🧩', outcome:'The Business Model', title:'Buy One Module. Grow into the Rest.', body:'Start with Warranty Core. Add Financial, Build Ops, Sales, Pre-Con, or IoT when ready — each module connects automatically to everything already running. No reinstall, no migration.', proof:['Warranty Core is a complete product on its own','Each added module creates new automated connections','Phase sign-off triggers lender draw automatically','Unit closed: keys revoked, homeowner provisioned'] },
  { color:'#f97316', icon:'🔓', outcome:'The Guarantee', title:'No Hostage. No Contract. No Exit Fee.', body:'Month-to-month. Cancel from settings. Full data export in CSV, Excel, and PDF — anytime, free. Custom development at a transparent hourly rate. If Combryx isn\'t earning your subscription, you should leave — and we make that easy.', proof:['Cancel anytime — billing stops that month','Full export always free — photos with metadata','Custom workflows and integrations on demand','Same-day support from someone who knows the trade'] },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden bg-black">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.06]"/>
        <div className="absolute inset-0" style={{ background:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.006) 3px,rgba(255,255,255,0.006) 4px)' }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px]" style={{ background:'radial-gradient(ellipse,rgba(255,184,0,0.06) 0%,transparent 70%)' }}/>
        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 py-20 text-center">
          <div className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-7 flex items-center justify-center gap-3">
            <span style={{ display:"inline-block", width:40, height:1, background:"#FFB800", opacity:0.5 }}/>Combryx · How It Works · Ontario Builders<span style={{ display:"inline-block", width:40, height:1, background:"#FFB800", opacity:0.5 }}/>
          </div>
          <h1 className="animate-fade-up anim-d1 font-display text-[clamp(56px,9vw,120px)] leading-[0.93] tracking-[0.04em] text-cb-white mb-6">
            TRADE<br/><span className="text-cb-gold text-glow-gold">LOGIC.</span><br/>MODERN<br/><span className="opacity-25">SYSTEM.</span>
          </h1>
          <p className="animate-fade-up anim-d2 text-lg text-cb-muted leading-relaxed max-w-lg mx-auto mb-10">
            <strong className="text-cb-white font-semibold">Built by a carpenter who worked for Tarion and five Ontario builders.</strong> Every feature exists because of a real problem found on a real job site.
          </p>
          <div className="animate-fade-up anim-d3 flex gap-3 justify-center flex-wrap mb-16">
            <Link href="/pricing" className="btn-gold">
              Start with Warranty Core →
            </Link>
            <Link href="#workflow" className="btn-ghost">
              See How It Works ↓
            </Link>
          </div>
          <div className="animate-fade-up anim-d4 grid grid-cols-2 md:grid-cols-4 gap-0 border border-[rgba(255,255,255,0.06)] divide-x divide-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden max-w-3xl mx-auto">
            {[['35+','Years in the trade'],['5','Ontario builders worked inside'],['1','Founder who sat inside Tarion'],['0','Competitors with this background']].map(([n,l]) => (
              <div key={l} className="py-5 px-4 text-center bg-cb-dark2">
                <div className="font-display text-3xl text-cb-gold tracking-[0.04em] leading-none mb-1">{n}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-cb-dim leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WALL OF PAIN */}
      <section className="bg-cb-dark1 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>The Problem</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">Six reasons every Ontario<br/>builder needs a <span className="text-cb-gold">better system.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">Documented across five real Ontario builders — in person, at the management level — before a single line of Combryx was written.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden">
            {pain.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 60} className="bg-cb-dark2 p-8 relative overflow-hidden hover:bg-cb-dark3 transition-colors border-t-2 border-transparent hover:border-red-500">
                <div className="absolute bottom-2 right-3 font-display text-6xl text-red-500 opacity-[0.08] leading-none">{p.n}</div>
                <div className="inline-block font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded bg-[rgba(239,68,68,0.1)] text-red-400 mb-4 font-semibold">Pain {p.n}</div>
                <h3 className="font-body text-[14px] font-bold text-cb-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-cb-muted text-[13px] leading-relaxed">{p.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-cb-dark2 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>Before vs. After</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,56px)] tracking-[0.04em] text-cb-white leading-[1.02]">What changes on <span className="text-cb-gold">day one.</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal className="bg-cb-dark1 border border-[rgba(239,68,68,0.15)] rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-[rgba(239,68,68,0.1)] border-b border-[rgba(239,68,68,0.12)]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 font-semibold">✗ Before Combryx</span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                {['Tarion deadlines tracked in a spreadsheet — or not tracked at all','PDI walkthrough on paper — signed form filed in a cabinet','Tech completion updates via text or phone call to coordinator','Conciliation prep is a scramble through multiple folders and drives','OBC and CPG questions answered by memory or internet searches','No-shows logged in a notepad, rescheduling done by phone tag','Homeowner interactions undocumented — no audit trail','Signed into a contract that charges to export your own data'].map(t => (
                  <div key={t} className="flex gap-3 text-[13px] text-cb-muted leading-relaxed">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>{t}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="bg-cb-dark1 border border-[rgba(34,197,94,0.15)] rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-[rgba(34,197,94,0.08)] border-b border-[rgba(34,197,94,0.12)]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-green-400 font-semibold">✓ With Combryx</span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                {['All four Tarion windows countdown automatically from the minute a unit closes','PDI on the tablet — homeowner signs on glass, PDF auto-emailed and vaulted','Tech taps "complete" — coordinator sees it in real time, photo in the case file','Defence Vault exports a conciliation-ready package with one click','Lex Structura answers CPG and OBC questions with specific citations','No-show tap → case updated → coordinator notified → reschedule queue','Every homeowner interaction timestamped — becomes evidence if needed','Full data export anytime, free, no ticket, no waiting period — forever'].map(t => (
                  <div key={t} className="flex gap-3 text-[13px] text-cb-muted leading-relaxed">
                    <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>{t}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="bg-cb-dark1 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>The Daily Flow</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,56px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">A day in the life.<br/><span className="text-cb-gold">Your operation, connected.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">No phone tag. No missing photos. No paper trail that disappears.</p>
          </ScrollReveal>
          <div className="flex flex-col gap-0">
            {workflow.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80} className="grid grid-cols-[80px_2px_1fr] gap-x-8 pb-12 last:pb-0">
                <div className="text-right pt-1">
                  <div className="font-display text-3xl text-cb-gold tracking-[0.04em] leading-none">{s.n}</div>
                  <div className="font-mono text-[9px] text-cb-dim mt-1">{s.time}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cb-gold flex-shrink-0 mt-2" style={{ boxShadow:'0 0 0 4px rgba(255,184,0,0.15)' }}/>
                  {i < workflow.length - 1 && <div className="flex-1 w-px bg-gradient-to-b from-cb-gold to-[rgba(255,255,255,0.06)] mt-1.5"/>}
                </div>
                <div className="bg-cb-dark2 border border-[rgba(255,255,255,0.06)] border-l-[3px] border-l-cb-gold rounded-r-lg p-6 hover:bg-cb-dark3 transition-colors">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-cb-gold font-semibold mb-2">{s.actor}</div>
                  <div className="font-body text-[15px] font-bold text-cb-white mb-3 leading-snug">{s.title}</div>
                  <p className="text-cb-muted text-[13px] leading-relaxed mb-3">{s.desc}</p>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] text-green-400 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.15)] px-3 py-1.5 rounded-md">
                    <span>→</span>{s.outcome}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE PILLARS */}
      <section id="features" className="bg-black py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>What You Get</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">Six capabilities.<br/>One <span className="text-cb-gold">connected system.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">Each capability solves a real problem found inside real Ontario builders. Not features invented in a boardroom.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60} className="bg-cb-dark1 p-8 hover:bg-cb-dark2 transition-colors" style={{ borderTop:`3px solid ${p.color}` }}>
                <span className="text-3xl block mb-4">{p.icon}</span>
                <div className="font-mono text-[9px] uppercase tracking-widest mb-2 font-semibold" style={{ color:p.color }}>{p.outcome}</div>
                <h3 className="font-body text-[15px] font-bold text-cb-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-cb-muted text-[13px] leading-relaxed mb-5">{p.body}</p>
                <div className="flex flex-col gap-1.5">
                  {p.proof.map(f => (
                    <div key={f} className="flex gap-2 text-[12px] text-cb-muted">
                      <span className="text-cb-gold flex-shrink-0 mt-0.5 text-[10px]">→</span>{f}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cb-dark2 py-20 px-8 text-center">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-6">JOIN<br/>THE <span className="text-cb-gold">HIVE.</span></h2>
            <p className="text-cb-muted text-base mb-8">Start with Warranty Core. Running in two hours. Cancel the month you decide it&apos;s not worth it. All your data comes with you — free, always.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/pricing" className="btn-gold">
                Start Warranty Core — $149/mo →
              </Link>
              <Link href="mailto:demo@combryx.com" className="btn-ghost">
                Book a 20-Min Demo
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
