import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import SectorAccordion from '@/components/SectorAccordion'

export const metadata: Metadata = {
  title: 'Platform — Warranty Management for Low-Rise and High-Rise Builders',
  description: 'What Combryx includes: warranty management for low-rise and high-rise, the Conciliation Manager add-on, and the Design Centre add-on (coming). Built for the warranty department only.',
  alternates: { canonical: 'https://combryx.com/platform' },
}

const sectors = [
  { n:'01', color:'#FFB800', tag:'Combryx Warranty — Base', title:'The warranty department, start to finish.', sub:'Homes · Tarion import · Items · Work orders · POs · Aging',
    features:[
      { icon:'🏠', title:'Sites, Homes & Owners', body:'Communities and towers, lots and suites, civic addresses, enrolment numbers, owners and contacts. Search by name, address, lot or unit. Bring it all in from QDef or a spreadsheet.' },
      { icon:'📥', title:'Tarion Form Import', body:'Import a Tarion warranty form and every line becomes an item on the home, with its deadlines. Repeats from an earlier form are flagged, not duplicated. Automatic sync through the Tarion API is coming.' },
      { icon:'🔧', title:'Work Orders & Trades', body:'Assign warranted items to a trade or an internal technician. Trades get the work order by email. Track status, completion and after photos against each item.' },
      { icon:'💰', title:'POs & Warranty Ledger', body:'PO requests, approvals and a log per trade and per home. Warranty spend and back-charges roll up by home, site and trade, and export to QuickBooks or a spreadsheet.' },
    ],
    ai:'AI triage rates each item for warranty risk, suggests the CPG or OBC reference and drafts inspector notes. A person confirms every decision.' },
  { n:'02', color:'#f97316', tag:'Low-Rise & High-Rise', title:'Lots, suites and common elements in one system.', sub:'Freehold · Townhomes · Towers · Suites · Common elements',
    features:[
      { icon:'🏡', title:'Freehold & Townhome Communities', body:'Every lot carries its forms, items, deadlines, trades and documents. The portfolio view shows each community at a glance.' },
      { icon:'🏢', title:'Towers & Suites', body:'High-rise is built in, not bolted on. Suites are tracked by tower, floor and unit with the same forms, deadlines and work orders as a freehold lot.' },
      { icon:'🏛', title:'Common Elements', body:'Common elements follow their own Tarion process with the condominium corporation as the owner. The Conciliation Manager switches between freehold and common elements.' },
      { icon:'📧', title:'Aging Emails per Site', body:'Every site\'s coordinators receive a weekly email of aging items for that site. Set the recipients once in settings and it runs on its own.' },
    ],
    ai:'Aging, overdue and deadline reports are built from live data per site, trade and coordinator — no manual export.' },
  { n:'03', color:'#a855f7', tag:'Conciliation Manager — Add-on · Managers Only', title:'Built for the conciliation room.', sub:'Cases · Cycles · CARs · Cash offers · Builder comments · Coming to Combryx',
    features:[
      { icon:'📋', title:'Case Stages & Timers', body:'Each case moves from inspection booked, to assessed, to CAR received, to the 30-day timer. Tarion\'s own deadlines sit on a per-case timeline.' },
      { icon:'🔁', title:'Cycles & CARs', body:'Every re-inspection is its own cycle with its own CAR, assessment and clock, so nothing from one inspection gets mixed into another.' },
      { icon:'💵', title:'Cash Offers & Releases', body:'Prepare, track and record cash offers and releases against the items they cover.' },
      { icon:'🛡', title:'Builder Comments Package', body:'One document for the inspection: your comment and your chargeability exception for each item, with the evidence attached, ready to print or email.' },
    ],
    ai:'A management control centre shows every active conciliation by community. Only users with the manager role can see this add-on.' },
  { n:'04', color:'#3b82f6', tag:'QCI & PDI — Coming', title:'Catch it before close, not after.', sub:'Pre-close assessments · Deficiencies · Wrong or missing materials · Handover',
    features:[
      { icon:'🔎', title:'QCI Assessment', body:'Warranty walks the home before delivery and logs deficiencies and wrong or missing materials against the home.' },
      { icon:'📝', title:'PDI', body:'The pre-delivery inspection recorded per home, with photos per item.' },
      { icon:'🏗', title:'Hand-off to Construction', body:'QCI and PDI items go to the construction team to resolve before close and handover.' },
      { icon:'➡️', title:'Carries into Warranty', body:'Anything still open at handover stays on the home\'s record and carries into warranty, so the history is never lost.' },
    ],
    ai:'On the roadmap. With the Design Centre add-on, the QCI can check the owner\'s signed selections room by room.' },
  { n:'05', color:'#14b8a6', tag:'Owner & Trade Portals — Coming', title:'Scheduling without the phone tag.', sub:'Owner link · Trade link · Scheduling · Sign-off',
    features:[
      { icon:'🔗', title:'A Link for Every Owner', body:'Each owner gets a private link to their items, status and photos. No account to create.' },
      { icon:'📅', title:'Scheduling', body:'Owner and trade agree a date through their links. Every offer, acceptance, refusal and missed appointment is logged.' },
      { icon:'👷', title:'Trade Link — No Login', body:'Trades tap done, scheduled with a date, or not scheduled, straight from the email.' },
      { icon:'✍️', title:'Owner Sign-off', body:'The owner signs off completed work against the after photos, stored on the item.' },
    ],
    ai:'On the roadmap. The access and contact record builds itself as appointments are offered and kept or missed.' },
  { n:'06', color:'#22c55e', tag:'Design Centre — Add-on · Coming', title:'Owners choose online. Sales confirms in person.', sub:'Selections · Signed record · Site instructions · 360 records · AI walk-through',
    features:[
      { icon:'🎨', title:'Owner Selections', body:'At purchase, owners go through their options in the portal, with features and trade-offs explained, and sign a selection. The sales centre visit confirms it against real samples.' },
      { icon:'🧾', title:'Site Instructions & Ledger', body:'Final selections produce the site instruction list and a ledger of upgrades and credits for your main build and sales system.' },
      { icon:'📷', title:'360 Stage Records', body:'A 360 record of every home at each stage from framing to close. Warranty gets a copy to look behind the walls when investigating an issue.' },
      { icon:'🔍', title:'AI Walk-Through', body:'At QCI, the camera checks each room against the owner\'s signed selections and flags correct, missing or wrong. A person confirms each flag.' },
    ],
    ai:'On the roadmap. Selections stay on the home\'s record, so warranty can see exactly what was chosen years later.' },
]

const aiCards = [
  { chip:'Lex Structura', title:'OBC & Tarion Regulatory Intelligence', trigger:'Any warranty question, CPG dispute, or deadline question', body:'Loaded with OBC Part 9, Tarion CPG tolerances, the current CSS (post-May 2024), ONHWPA, and current Registrar Bulletins. Knows the Day 41/183/366 auto-submission schedule, the 120+30 BRP structure, and how RFC timing affects the builder\'s repair window. Specific citations — not generic answers.', outcome:'Correct CSS rules. Not legacy 30-day logic.' },
  { chip:'Triage Node', title:'Warranty Item Triage', trigger:'Every imported form item', body:'Rates each item for warranty risk, suggests the likely CPG article or OBC reference, drafts inspector notes and proposes a trade. Nothing is decided by the AI alone — a person confirms or changes it.', outcome:'A head start on every item. Your call on every decision.' },
  { chip:'Selection Check · Coming', title:'AI Walk-Through at QCI', trigger:'Design Centre add-on', body:'Checks each room against the owner\'s signed selections and flags correct, missing or wrong. In development, and being proven on real homes before release.', outcome:'Wrong selections found before close.' },
]

export default function PlatformPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-between pt-14 bg-black overflow-hidden">
        {/* vertical grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'repeating-linear-gradient(90deg,transparent 0px,transparent 119px,rgba(255,255,255,0.02) 119px,rgba(255,255,255,0.02) 120px)' }}/>
        {/* scan line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cb-gold to-transparent opacity-40 animate-[scanH_8s_ease-in-out_infinite]"/>
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse at 50% 30%,rgba(255,184,0,0.05) 0%,transparent 60%)' }}/>

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-8 py-20">
          <div className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.24em] text-cb-gold mb-6 flex items-center gap-3">
            <span style={{ display:"inline-block", width:40, height:1, background:"#FFB800", opacity:0.5 }}/>Combryx Platform · Warranty Only · Low-Rise &amp; High-Rise<span style={{ display:"inline-block", width:40, height:1, background:"#FFB800", opacity:0.5 }}/>
          </div>
          <h1 className="animate-fade-up anim-d1 font-display text-[clamp(32px,6vw,88px)] leading-[1.05] tracking-[0.04em] text-cb-white mb-5 max-w-5xl">
            <span className="block text-[0.55em] font-body font-light text-cb-muted tracking-wider mb-3">From the first Tarion form to the 7-year warranty.</span>
            <span className="text-cb-gold">ONE SYSTEM.</span><br/>ONE DEPARTMENT.<br/>DONE RIGHT.
          </h1>
          <p className="animate-fade-up anim-d2 text-lg text-cb-muted max-w-2xl leading-relaxed mb-10">
            <strong className="text-cb-white font-semibold">Built for the warranty team, and only the warranty team.</strong> Combryx works beside the construction and sales software you already use. It does not try to replace it.
          </p>
          {/* sector pills */}
          <div className="animate-fade-up anim-d3 flex flex-wrap gap-2 justify-center mb-10">
            {[['🛡 Warranty','#FFB800'],['🏡 Low-Rise','#f97316'],['🏢 High-Rise','#3b82f6'],['🏛 Common Elements','#a855f7'],['⚖ Conciliation','#ef4444'],['🎨 Design Centre · Coming','#14b8a6']].map(([label, color]) => (
              <span key={label} className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border font-medium transition-all hover:-translate-y-0.5 cursor-default"
                style={{ borderColor:`${color}66`, color, background:`${color}1a` }}>{label}</span>
            ))}
          </div>
          <div className="animate-fade-up anim-d4 flex gap-3 justify-center flex-wrap">
            <Link href="/pricing" className="btn-gold">See Pricing →</Link>
            <Link href="#sectors" className="btn-ghost">See What&apos;s Included ↓</Link>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 md:grid-cols-6 border-t border-[rgba(255,255,255,0.06)] divide-x divide-[rgba(255,255,255,0.06)]">
          {[['1','Department'],['2','Add-ons'],['2','Building Types'],['AI','Triage'],['$0','Setup Fee'],['∞','Users']].map(([n,l], i) => (
            <div key={l} className="py-5 px-4 text-center bg-cb-dark2 hover:bg-cb-dark3 transition-colors">
              <div className="font-display text-2xl md:text-3xl tracking-[0.04em] leading-none mb-1"
                style={{ color:['#ef4444','#f97316','#3b82f6','#FFB800','#22c55e','#14b8a6'][i] }}>{n}</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-cb-dim">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LIFECYCLE CONNECTION STATEMENT */}
      <div className="bg-cb-dark1 py-10 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-[clamp(16px,2.5vw,26px)] tracking-[0.02em] text-cb-white leading-[1.3]">
            A Tarion form imported in the morning becomes items, deadlines and work orders by the afternoon.{' '}
            <span className="text-cb-gold">One import. Everything downstream follows.</span>
          </p>
        </div>
      </div>

      {/* SECTOR ACCORDIONS */}
      <section id="sectors" className="bg-cb-dark2 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>What&apos;s Included</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">Built for your<br/><span className="text-cb-gold">warranty department.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">You are not buying a construction suite. You are buying the system your warranty department runs on, and only the add-ons you want. Items marked Coming are on the roadmap.</p>
          </ScrollReveal>

          <SectorAccordion sectors={sectors} />
        </div>
      </section>

      {/* AI ENGINE */}
      <section id="ai" className="bg-cb-dark1 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>The Intelligence Layer</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">AI that actually<br/><span className="text-cb-gold">understands warranty.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">Purpose-built assistants loaded with Ontario warranty rules. Every AI suggestion is logged, reviewable, and confirmed by a person.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden">
            {aiCards.map((a, i) => (
              <ScrollReveal key={a.chip} delay={i * 60} className="bg-cb-dark2 p-7 relative overflow-hidden hover:bg-cb-dark3 transition-colors">
                <div className="absolute bottom-2 right-3 font-display text-7xl text-cb-gold opacity-[0.04] leading-none">AI</div>
                <div className="inline-block font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded font-semibold mb-4 bg-[rgba(255,184,0,0.1)] text-cb-gold border border-[rgba(255,184,0,0.2)]">{a.chip}</div>
                <h3 className="font-body text-[14px] font-bold text-cb-white mb-2 leading-snug">{a.title}</h3>
                <div className="flex items-center gap-2 text-[11px] text-cb-dim font-mono mb-3"><span>⚡</span>{a.trigger}</div>
                <p className="text-cb-muted text-[12px] leading-relaxed mb-3">{a.body}</p>
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cb-gold bg-[rgba(255,184,0,0.08)] border border-[rgba(255,184,0,0.15)] px-3 py-1.5 rounded-md">
                  <span>→</span>{a.outcome}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ONE SYSTEM */}
      <section id="connected" className="bg-black py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center justify-center gap-3"><span style={{ display:"inline-block", width:20, height:1, background:"#FFB800", opacity:0.6 }}/>One System</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">Works beside <span className="text-cb-gold">what you already run.</span><br/>Replaces only the spreadsheets.</h2>
            <p className="text-cb-muted text-base max-w-xl mx-auto">Lots and owners come in from your existing builder system by import or API. Warranty data goes back out by export.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                {[['🏗','Your Build System'],['📥','Tarion Forms'],['📁','QDef Data']].map(([icon,label]) => (
                  <div key={label} className="bg-cb-dark2 border border-[rgba(255,255,255,0.06)] rounded-lg p-4 text-center hover:scale-105 transition-transform">
                    <span className="text-xl block mb-1">{icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cb-dim">{label}</span>
                  </div>
                ))}
              </div>
              <div className="text-center font-mono text-cb-dim text-sm py-1">↓ all feed ↓</div>
              <div className="bg-[rgba(255,184,0,0.08)] border-2 border-[rgba(255,184,0,0.3)] rounded-lg p-5 text-center">
                <div className="font-display text-2xl text-cb-gold tracking-[0.08em] mb-1">COMBRYX</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-cb-gold opacity-50">Warranty · Conciliation · Design Centre</div>
              </div>
              <div className="text-center font-mono text-cb-dim text-sm py-1">↓ which reaches ↓</div>
              <div className="grid grid-cols-3 gap-2">
                {[['👷','Trades'],['🏠','Owners'],['📊','Exports']].map(([icon,label]) => (
                  <div key={label} className="bg-cb-dark2 border border-[rgba(255,255,255,0.06)] rounded-lg p-4 text-center hover:scale-105 transition-transform">
                    <span className="text-xl block mb-1">{icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cb-dim">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[['🔗','Your construction and sales software stays exactly where it is','Combryx takes lots and owners in by spreadsheet or API. Nobody outside warranty has to change how they work.'],
                ['📊','One warranty picture across every community and tower','Open items, aging, deadlines and cost per home, per site and per trade.'],
                ['🔒','Each person sees only what they should','Coordinators and technicians see their sites. The Conciliation Manager is visible to managers only.'],
                ['📤','Your data is always yours','Every list exports to Excel or PDF, and the whole account exports on request — free.']].map(([icon,title,desc]) => (
                <div key={title} className="flex gap-4 p-5 bg-cb-dark2 border border-[rgba(255,255,255,0.06)] rounded-lg hover:border-[rgba(255,255,255,0.12)] transition-colors">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-body text-[13px] font-bold text-cb-white mb-1.5 leading-snug">{title}</div>
                    <p className="text-cb-muted text-[12px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cb-dark2 py-20 px-8 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-6">FROM<br/><span className="text-cb-gold">FIRST FORM</span><br/>TO YEAR SEVEN.</h2>
            <p className="text-cb-muted text-base leading-relaxed mb-10">35+ years in the trade. One founder who worked inside Tarion and five Ontario builders. Every gap documented. Every workflow built from experience.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/pricing" className="btn-gold">
                Start with Combryx Warranty →
              </Link>
              <Link href="mailto:demo@combryx.com" className="btn-ghost">
                Book a Demo
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
