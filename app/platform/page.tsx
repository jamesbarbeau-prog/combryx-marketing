import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import SectorAccordion from '@/components/SectorAccordion'

export const metadata: Metadata = {
  title: 'Platform — Land Acquisition, High-Rise, Rental, Condo Corp & Property Management',
  description: 'From the land deal to year seven. Combryx covers every stage — high-rise, low-rise, rental portfolio, condo corp, and property management. One system.',
  alternates: { canonical: 'https://combryx.com/platform' },
}

const sectors = [
  { n:'01', color:'#ef4444', tag:'Land & Pre-Construction', title:'From first look at a parcel to shovel in the ground.', sub:'Acquisition pipeline · Pro-forma · Zoning · Permits · Entitlements',
    features:[
      { icon:'📊', title:'AI-Assisted Pro-Forma Modelling', body:'Build acquisition scenarios with AI-suggested cost assumptions drawn from comparable projects in your portfolio. Hard costs per sq ft, soft costs, financing, sales revenue — assembled in minutes. PDF formatted for lender packages.' },
      { icon:'🗺', title:'Live Zoning Intelligence', body:'Municipal zoning API queries per address — permitted uses, density, setbacks, height restrictions, OPA applications. No more calling the planning department for basic lookups.' },
      { icon:'📋', title:'Permit Tracker → Phase Unlock', body:'Every active permit — status, submission date, inspections passed, outstanding items. When a permit is approved, it automatically unlocks the corresponding construction phase. No manual trigger.' },
      { icon:'🤝', title:'Deal Pipeline & Due Diligence', body:'Active land acquisitions tracked from first contact through close. MLS comparables, due diligence checklists, key dates, and assigned team members — all in one record.' },
    ],
    ai:'AI pulls comparable project costs from your existing portfolio to pre-populate pro-forma assumptions. Permit approval fires the Build Ops phase unlock automatically.' },
  { n:'02', color:'#f97316', tag:'Low-Rise Homebuilding', title:'Track builders, freehold communities, townhomes — with Tarion at the core.', sub:'CPM scheduling · Phase gates · Sub-trade management · Warranty · PDI',
    features:[
      { icon:'📅', title:'Dynamic CPM Schedule — Phase-by-Phase', body:'Gantt chart per lot. Drag to reschedule and dependencies cascade automatically. Site super signs off phases from the field app — no paper, no call back to the office.' },
      { icon:'⚖️', title:'Tarion Warranty — Built for Ontario Low-Rise', body:'All four statutory windows initialized from PDI sign-off. BRP deadlines tracked with escalating alerts. Defence Vault assembled automatically. Conciliation prep that shows up ready.' },
      { icon:'🔧', title:'Sub-Trade Digital Sign-Off', body:'Trades receive a shareable link — no app install required. View scope, confirm completion, upload as-built photos, apply digital signature. Phase gate cannot close until all sign-offs are in.' },
      { icon:'💰', title:'Lender Draw — Auto-Assembled on Phase Close', body:'When a phase is signed off, the lender draw request auto-assembles: completion evidence, gate photos, sub-trade sign-offs. Finance coordinator reviews and submits.' },
    ],
    ai:'Phase gate closed on site → draw request assembled in office automatically. Tarion deadlines initialized from PDI completion to the minute.' },
  { n:'03', color:'#3b82f6', tag:'High-Rise & Mixed-Use Development', title:'Mid-rise condos, towers, mixed-use — APS through PDI through condo registration.', sub:'Sales pipeline · APS generation · Design studio · Storage assignment · Condo handoff',
    features:[
      { icon:'📝', title:'APS Generation & Digital Execution', body:'Agreement of Purchase and Sale generated from unit and buyer data. Digital signature via DocuSign or Dropbox Sign. On execution, the unit.sold event fires — revenue recorded, storage assigned, design studio unlocked for the buyer.' },
      { icon:'🎨', title:'Design Studio — Buyer Selects Their Own Finishes', body:'Buyers log into their portal and select flooring, cabinets, fixtures, and colours from your pre-set options. Upgrade pricing built in. Selections locked at cutoff date. Trade packages auto-generated.' },
      { icon:'🅿', title:'Locker & Parking Auto-Assignment', body:'Visual site plan shows all storage units colour-coded by status. Proximity algorithm assigns the closest locker and parking space to the buyer\'s floor and elevator bank.' },
      { icon:'🔑', title:'Smart Handover — Unit Closes, Everything Reacts', body:'PDI signed → Tarion clocks start. Trade keys revoked automatically. Homeowner provisioned to smart lock, locker, and parking. Revenue confirmed in financial ledger. All from a single signed PDI.' },
    ],
    ai:'Unit sold → revenue line, storage assignment, and welcome email fire simultaneously. Unit closed → trade keys revoke, buyer access provisions, Tarion clocks initialize — one event, no manual steps.' },
  { n:'04', color:'#a855f7', tag:'Condominium Corporation', title:'After the builder turns over the building — the corporation runs on the same platform.', sub:'Common elements · Board reporting · Reserve fund · Amenity management · Owner portal',
    features:[
      { icon:'🏗', title:'Common Element Maintenance & Tracking', body:'Every common area tracked as a managed asset. Maintenance schedules, inspection records, vendor contracts, and work order history all in one place. Nothing falls through the cracks.' },
      { icon:'📊', title:'Reserve Fund Planning & AI Forecasting', body:'Current reserve fund balance, contribution schedule, and expenditure projections tracked in real time. AI models capital replacement timelines based on asset age and condition scores. Board reports generated automatically.' },
      { icon:'🎟', title:'Owner Portal & Amenity Booking', body:'Owners book amenities through the portal. On booking confirmation, the IoT module auto-issues a time-bound digital key for that space and time. No key fob hand-off. No coordinator required.' },
      { icon:'⚖', title:'Board Meeting Packages — Auto-Generated', body:'Monthly and quarterly board packages assembled automatically from live operational data: maintenance activity, financial summary, open complaints, reserve fund status.' },
    ],
    ai:'AI flags capital assets approaching end-of-life and schedules preventive maintenance before failure. Reserve fund shortfall projections trigger board alerts at 18-month and 6-month thresholds.' },
  { n:'05', color:'#14b8a6', tag:'Rental Portfolio', title:'Purpose-built rental, investor-owned portfolios, and mixed tenure buildings.', sub:'Lease management · Tenant portal · RTA compliance · Maintenance · Vacancy tracking',
    features:[
      { icon:'📄', title:'Lease Management & RTA Compliance', body:'Digital lease agreements generated and e-signed. Ontario RTA notice periods and rent increase guidelines tracked automatically. Lease renewal alerts at 90, 60, and 30 days. N-form notices managed from within the platform.' },
      { icon:'💬', title:'Tenant Portal & Communications', body:'Tenants submit maintenance requests, view their lease, pay rent, and communicate with property management — all from their portal. Every interaction is logged and timestamped.' },
      { icon:'📉', title:'Vacancy Tracking & Financial Performance', body:'Vacancy rate per building, per unit type, and across the portfolio. Rental income actual vs. projected. Operating expense breakdown. AI flags underperforming units and suggests market-rate adjustments.' },
      { icon:'🔧', title:'Maintenance Requests → Trade Dispatch', body:'Tenant submits a request. Property manager categorizes by urgency, assigns trade, trade gets push notification. Tenant auto-notified of dispatch. Status tracked to resolution.' },
    ],
    ai:'AI classifies incoming maintenance requests by urgency — water issues escalated automatically. Rent increase analysis suggests optimal timing per unit based on RTA rules and local market data.' },
  { n:'06', color:'#22c55e', tag:'Property Management Operations', title:'The full PM operation — tickets, vendors, financials, reporting — AI-powered, field-first.', sub:'Ticket management · Vendor performance · Financial reporting · AI dispatch · IoT monitoring',
    features:[
      { icon:'🎫', title:'Ticket Management — From the Truck', body:'Property manager receives a complaint call. Opens the app. Logs ticket in 60 seconds — property, unit, category, voice description, urgency. Assigns trade with one tap. Tenant auto-notified by SMS.' },
      { icon:'🏭', title:'Vendor Management & Performance Tracking', body:'Every vendor contract, insurance certificate, and trade assignment logged. Response time tracked per vendor. AI flags underperforming vendors and suggests alternatives from your roster.' },
      { icon:'📈', title:'AI-Powered Financial Reporting', body:'Operating income, maintenance spend, vendor costs, and capital expenditures tracked by property and portfolio. Monthly owner reports generated automatically. Ask the AI natural language questions about your financials.' },
      { icon:'📡', title:'IoT Sensor Monitoring — Proactive, Not Reactive', body:'Moisture, temperature, and HVAC sensors feed live data into the PM dashboard. When a reading exceeds threshold, a maintenance ticket is created and the best available plumber dispatched — before the tenant knows.' },
    ],
    ai:'Incoming tenant complaint → auto-classified → trade auto-dispatched if urgent → tenant auto-SMS\'d with ETA. Sensor spike → ticket created → plumber dispatched → PM notified. All before anyone calls.' },
]

const aiCards = [
  { chip:'Lex Structura', title:'OBC & Tarion Regulatory Intelligence', trigger:'Any warranty question or CPG dispute', body:'RAG-enabled agent loaded with OBC Part 9, Tarion CPG tolerances, ONHWPA, and current Registrar Bulletins. Specific citations — not generic answers.', outcome:'Citations. Not guesses.' },
  { chip:'Financial Ghost', title:'Invoice OCR & Cost Intelligence', trigger:'Every invoice uploaded to the system', body:'Extracts vendor, amount, date, and line items from any invoice format. Auto-matches to open POs. Classifies as CapEx or OpEx. Flags anomalies — duplicates, amounts outside expected range.', outcome:'Invoice processed in seconds. Exceptions only go to humans.' },
  { chip:'Triage Node', title:'Warranty & PM Communication Intelligence', trigger:'Every incoming homeowner or tenant submission', body:'Classifies cases by urgency, warranty category, and likely CPG classification. Drafts suggested coordinator response. For urgent PM requests auto-dispatches the fastest available certified trade.', outcome:'Right trade. Right response. Right now.' },
  { chip:'Reserve Fund AI', title:'Capital Planning & Asset Lifecycle', trigger:'Condo Corp and PM portfolios', body:'Models capital replacement timelines based on asset age, condition scores, and maintenance history. Projects reserve fund requirements at 5, 10, and 20 years. Flags shortfalls before they become crises.', outcome:'No reserve fund surprises. Ever.' },
  { chip:'Pro-Forma AI', title:'Land Acquisition & Development Analysis', trigger:'New land acquisition record created', body:'Pulls comparable project hard costs from your portfolio history to pre-populate pro-forma assumptions. Runs sensitivity analysis at ±1% rate and ±5% cost scenarios automatically.', outcome:'Pro-forma in minutes. Backed by your own data.' },
  { chip:'Portfolio Intelligence', title:'Cross-Portfolio Financial Anomaly Detection', trigger:'Daily — runs across all active properties', body:'Monitors operating costs, maintenance spend, and revenue performance across every building. Flags statistical anomalies — overspend on a vendor, maintenance spike, vacancy rate trending above comparable buildings.', outcome:'Problems surfaced before they appear on the P&L.' },
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
            <span className="w-10 h-px bg-cb-gold opacity-50"/>Combryx Platform · Full Lifecycle · Every Asset Type<span className="w-10 h-px bg-cb-gold opacity-50"/>
          </div>
          <h1 className="animate-fade-up anim-d1 font-display text-[clamp(32px,6vw,88px)] leading-[1.05] tracking-[0.04em] text-cb-white mb-5 max-w-5xl">
            <span className="block text-[0.55em] font-body font-light text-cb-muted tracking-wider mb-3">From the land deal to the 7-year warranty.</span>
            <span className="text-cb-gold">ONE SYSTEM.</span><br/>EVERY STAGE.<br/>EVERY ASSET.
          </h1>
          <p className="animate-fade-up anim-d2 text-lg text-cb-muted max-w-2xl leading-relaxed mb-10">
            <strong className="text-cb-white font-semibold">High-rise. Low-rise. Rental. Condo corp. Land acquisition. Property management.</strong> Combryx connects every stage of a real estate development lifecycle — so your operation runs on one platform.
          </p>
          {/* sector pills */}
          <div className="animate-fade-up anim-d3 flex flex-wrap gap-2 justify-center mb-10">
            {[['🏔 Land Acquisition','#ef4444'],['🏡 Low-Rise','#f97316'],['🏢 High-Rise','#3b82f6'],['🏛 Condo Corp','#a855f7'],['🏘 Rental Portfolio','#14b8a6'],['⚙ Property Mgmt','#22c55e']].map(([label, color]) => (
              <span key={label} className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border font-medium transition-all hover:-translate-y-0.5 cursor-default"
                style={{ borderColor:`${color}66`, color, background:`${color}1a` }}>{label}</span>
            ))}
          </div>
          <div className="animate-fade-up anim-d4 flex gap-3 justify-center flex-wrap">
            <Link href="/pricing" className="inline-flex bg-cb-gold text-black font-mono text-[11px] font-semibold uppercase tracking-widest px-8 py-4 rounded-md no-underline hover:bg-cb-gold2 hover:-translate-y-0.5 transition-all" style={{ boxShadow:'0 0 24px rgba(255,184,0,0.3)' }}>See Pricing & Modules →</Link>
            <Link href="#sectors" className="inline-flex bg-transparent text-cb-muted font-mono text-[11px] uppercase tracking-widest px-8 py-4 rounded-md border border-[rgba(255,255,255,0.12)] no-underline hover:text-cb-white hover:border-[rgba(255,255,255,0.3)] transition-all">Explore by Sector ↓</Link>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 md:grid-cols-6 border-t border-[rgba(255,255,255,0.06)] divide-x divide-[rgba(255,255,255,0.06)]">
          {[['6','Sectors'],['7','Lifecycle Stages'],['1','Connected Platform'],['AI','Automation'],['$0','Setup Fee'],['∞','Communities']].map(([n,l], i) => (
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
            A unit sold in High-Rise automatically starts the Tarion clock, triggers storage assignment, and feeds the building&apos;s property management system.{' '}
            <span className="text-cb-gold">One event. Every connected stage reacts.</span>
          </p>
        </div>
      </div>

      {/* SECTOR ACCORDIONS */}
      <section id="sectors" className="bg-cb-dark2 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span className="w-5 h-px bg-cb-gold opacity-60"/>By Sector</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">Built for your<br/><span className="text-cb-gold">specific operation.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">You&apos;re not a &ldquo;construction company.&rdquo; You&apos;re a low-rise track builder, a mixed-use developer, a rental portfolio owner. Combryx is built around those distinctions.</p>
          </ScrollReveal>

          <SectorAccordion sectors={sectors} />
        </div>
      </section>

      {/* AI ENGINE */}
      <section id="ai" className="bg-cb-dark1 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3"><span className="w-5 h-px bg-cb-gold opacity-60"/>The Intelligence Layer</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">AI that actually<br/><span className="text-cb-gold">understands construction.</span></h2>
            <p className="text-cb-muted text-base max-w-xl">Purpose-built automation agents trained on Ontario warranty law, construction finance, and property management operations. Every AI action is logged, auditable, and overridable.</p>
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
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center justify-center gap-3"><span className="w-5 h-px bg-cb-gold opacity-60"/>One System</div>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-4">One operator. <span className="text-cb-gold">Multiple asset types.</span><br/>Zero system switching.</h2>
            <p className="text-cb-muted text-base max-w-xl mx-auto">A developer who builds low-rise communities, operates a rental portfolio, manages several condo corps, and acquires new land — all of that lives in one Combryx account.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                {[['🏔','Land'],['🏡','Low-Rise'],['🏢','High-Rise']].map(([icon,label]) => (
                  <div key={label} className="bg-cb-dark2 border border-[rgba(255,255,255,0.06)] rounded-lg p-4 text-center hover:scale-105 transition-transform">
                    <span className="text-xl block mb-1">{icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cb-dim">{label}</span>
                  </div>
                ))}
              </div>
              <div className="text-center font-mono text-cb-dim text-sm py-1">↓ all connect to ↓</div>
              <div className="bg-[rgba(255,184,0,0.08)] border-2 border-[rgba(255,184,0,0.3)] rounded-lg p-5 text-center">
                <div className="font-display text-2xl text-cb-gold tracking-[0.08em] mb-1">COMBRYX</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-cb-gold opacity-50">One Platform · All Assets · AI-Powered</div>
              </div>
              <div className="text-center font-mono text-cb-dim text-sm py-1">↓ feeds into ↓</div>
              <div className="grid grid-cols-3 gap-2">
                {[['🏛','Condo Corp'],['🏘','Rental'],['⚙','Prop Mgmt']].map(([icon,label]) => (
                  <div key={label} className="bg-cb-dark2 border border-[rgba(255,255,255,0.06)] rounded-lg p-4 text-center hover:scale-105 transition-transform">
                    <span className="text-xl block mb-1">{icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cb-dim">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[['🔗','A unit built in your low-rise feeds its data into warranty, then into your PM system when you retain it as rental','No re-entry. The lot record, the PDI, the Tarion history — carry forward automatically.'],
                ['📊','Your CFO sees one financial picture across every asset type and every stage','Construction budget. Rental NOI. Reserve fund balance. Land spend. One dashboard.'],
                ['📱','Your field team uses one app — role determines what they see','Site super sees phases. Warranty tech sees jobs. PM sees tickets. One login for everyone.'],
                ['🤖','AI learns from your entire operation, not just one building','Pro-forma assumptions from comparable projects. Cost predictions from your own vendor data.']].map(([icon,title,desc]) => (
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
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-6">FROM<br/><span className="text-cb-gold">LAND DEAL</span><br/>TO YEAR SEVEN.</h2>
            <p className="text-cb-muted text-base leading-relaxed mb-10">35+ years in the trade. One founder who worked inside Tarion and five Ontario builders. Every gap documented. Every workflow built from experience.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/pricing" className="inline-flex bg-cb-gold text-black font-mono text-[11px] font-semibold uppercase tracking-widest px-8 py-4 rounded-md no-underline hover:bg-cb-gold2 hover:-translate-y-0.5 transition-all" style={{ boxShadow:'0 0 24px rgba(255,184,0,0.3)' }}>
                Start with Warranty Core →
              </Link>
              <Link href="mailto:demo@combryx.com" className="inline-flex bg-transparent text-cb-muted font-mono text-[11px] uppercase tracking-widest px-8 py-4 rounded-md border border-[rgba(255,255,255,0.12)] no-underline hover:text-cb-white hover:border-[rgba(255,255,255,0.3)] transition-all">
                Book a Demo
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
