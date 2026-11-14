import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import IconTile from '@/components/Icon'

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
  { icon:'Wrench', title:'Rooted in Real Experience', body:'Every feature in Combryx exists because of a real problem observed on a real job site or in a real Tarion conciliation room — not because a product manager thought it sounded useful.' },
  { icon:'Unlock', title:'Fully Tailored. Never Locked.', body:'You should not have to reshape your business to fit the software. Buy the warranty system and only the add-ons you need. Custom workflows available at a transparent rate. Full data export free, always.' },
  { icon:'Receipt', title:'Accessible Innovation.', body:'The major builder platforms cost $10,000–$40,000 to implement. Combryx is priced per community, per month — you pay for what you actually use. No setup fee.' },
  { icon:'LifeBuoy', title:'Knowledgeable Support.', body:'When you contact Combryx support, you\'re talking to someone who understands Ontario warranty law, has been on a job site, and can give you the right answer. Same-day response.' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end pt-14 bg-gradient-to-b from-white to-cb-dark1 overflow-hidden">
        <div className="absolute inset-0 hex-pattern animate-hex-drift opacity-[0.06]"/>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" style={{ background:'radial-gradient(ellipse,rgba(217,119,6,0.05) 0%,transparent 70%)' }}/>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-5 flex items-center gap-3">
              <span style={{ display:"inline-block", width:32, height:1, background:"#D97706", opacity:0.6 }}/>Founded on the job site. Forged in the warranty room.
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
              <div key={n} className={`flex gap-5 items-start p-5 rounded-lg border ${n==='05' ? 'border-[rgba(217,119,6,0.3)] bg-[rgba(217,119,6,0.06)]' : 'border-[rgba(15,23,42,0.1)] bg-cb-dark2'}`}>
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
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cb-dim pt-2 border-t border-[rgba(15,23,42,0.1)]">The Gap</div>
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
              <span style={{ display:"inline-block", width:20, height:1, background:"#D97706", opacity:0.6 }}/>The Journey
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.04em] text-cb-white">From carpenter to<br/><span className="text-cb-gold">construction software</span> founder.</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.era} delay={i * 80} className="grid grid-cols-[80px_20px_1fr] gap-0 gap-x-6 pb-12 last:pb-0">
                <div className="font-mono text-[11px] text-cb-dim text-right pt-1">{t.era}</div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cb-gold flex-shrink-0 mt-1.5" style={{ boxShadow:'0 0 0 4px rgba(217,119,6,0.15)' }}/>
                  {i < timeline.length - 1 && <div className="flex-1 w-px bg-gradient-to-b from-cb-gold to-[rgba(15,23,42,0.1)] mt-1.5"/>}
                </div>
                <div className="pb-2">
                  <div className="inline-block font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded mb-2 font-semibold bg-[rgba(217,119,6,0.1)] text-cb-gold">{t.tag}</div>
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
          <div className="grid md:grid-cols-2 gap-px bg-[rgba(15,23,42,0.1)] rounded-xl overflow-hidden border border-[rgba(15,23,42,0.1)]">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80} className="bg-cb-dark1 p-10 relative overflow-hidden hover:bg-cb-dark2 transition-colors">
                <div className="absolute bottom-2 right-4 font-display text-8xl opacity-[0.04] text-cb-white leading-none">{String(i+1).padStart(2,'0')}</div>
                <span className="block mb-5"><IconTile name={v.icon} /></span>
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


      {/* ── THE BALANCE EQUATION ── */}
      <section style={{ background:'#F1F3F6', padding:'96px 0', position:'relative', overflow:'hidden' }}>
        {/* hex grid bg */}
        <div style={{ position:'absolute', inset:0, opacity:0.04, backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92'%3E%3Cpolygon points='40,2 78,22 78,70 40,90 2,70 2,22' fill='none' stroke='%23FFB800' stroke-width='0.8'/%3E%3C/svg%3E")`, backgroundSize:'80px 92px' }}/>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 48px', position:'relative', zIndex:1 }}>

          {/* header */}
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#D97706', marginBottom:14, display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
              <span style={{ width:32, height:1, background:'#D97706', opacity:0.6, display:'inline-block' }}/>
              The Combryx Formula
              <span style={{ width:32, height:1, background:'#D97706', opacity:0.6, display:'inline-block' }}/>
            </div>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(40px,6vw,80px)', letterSpacing:'0.04em', lineHeight:0.95, color:'#0F172A', marginBottom:20 }}>
              Every builder asks <span style={{ color:'#D97706' }}>Why.</span><br/>Combryx is <span style={{ color:'#D97706' }}>x.</span>
            </h2>
            <p style={{ fontSize:16, color:'#475569', lineHeight:1.8, maxWidth:600, margin:'0 auto' }}>
              Every builder using old software is asking the same questions — Why is this late? Why did we lose that conciliation? Where is the signed PDI? Other systems were built by people who never lived those questions. Combryx was built by someone who did. x is the answer. Combryx is x.
            </p>
          </div>

          {/* THE SCALE SVG */}
          <div style={{ display:'flex', justifyContent:'center', marginBottom:72 }}>
            <svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", maxWidth:780 }}>

              {/* Equation at top */}
              <text x="350" y="28" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#D97706">Every Builder WHY + Combryx = x</text>
              <text x="350" y="48" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#475569">x = the answer every builder is still waiting for</text>

              {/* Corner labels */}
              <text x="60" y="68" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569">THE BOARDROOM</text>
              <text x="60" y="80" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#64748B">Wants answers (x)</text>
              <text x="640" y="68" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569">THE SITE</text>
              <text x="640" y="80" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#64748B">Living the Whys</text>

              {/* Connecting lines from X circle to beam */}
              <line x1="290" y1="155" x2="220" y2="248" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 3"/>
              <line x1="410" y1="155" x2="480" y2="248" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 3"/>
              {/* Lines to corners */}
              <line x1="285" y1="110" x2="100" y2="80" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.18" strokeDasharray="3 3"/>
              <line x1="415" y1="110" x2="600" y2="80" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.18" strokeDasharray="3 3"/>

              {/* X = COMBRYX circle */}
              <circle cx="350" cy="120" r="58" fill="#FFFFFF" stroke="#D97706" strokeWidth="2"/>
              <circle cx="350" cy="120" r="50" fill="#F1F3F6" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.3"/>
              <text x="350" y="110" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="50" letterSpacing="0.04em" fill="#D97706">X</text>
              <text x="350" y="132" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#D97706" letterSpacing="0.12em">= COMBRYX</text>

              {/* Balance beam */}
              <rect x="100" y="248" width="500" height="9" rx="4" fill="#D97706" fillOpacity="0.65"/>
              {/* Pivot */}
              <circle cx="350" cy="252" r="11" fill="#D97706"/>
              <circle cx="350" cy="252" r="5" fill="#F1F3F6"/>
              {/* Fulcrum stem */}
              <rect x="343" y="261" width="14" height="80" fill="#D97706" fillOpacity="0.65" rx="2"/>
              {/* Base triangle */}
              <polygon points="350,341 322,378 378,378" fill="#D97706" fillOpacity="0.8"/>

              {/* LEFT CHAIN */}
              {[0,1,2,3].map((i) => (
                <rect key={i} x={156} y={257+i*11} width="7" height="7" rx="1" fill="#D97706" fillOpacity="0.35"/>
              ))}
              {/* RIGHT CHAIN */}
              {[0,1,2,3].map((i) => (
                <rect key={i} x={538} y={257+i*11} width="7" height="7" rx="1" fill="#D97706" fillOpacity="0.35"/>
              ))}

              {/* LEFT PAN */}
              <ellipse cx="160" cy="305" rx="80" ry="13" fill="#1a1200" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.7"/>
              <rect x="80" y="292" width="160" height="13" rx="2" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" strokeOpacity="0.4"/>

              {/* LEFT WHY ITEMS — above the pan, well clear */}
              <text x="160" y="218" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#0F172A" opacity="0.9">Why did we lose that conciliation?</text>
              <text x="160" y="234" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#334155" opacity="0.8">Why did nobody track the BRP?</text>
              <text x="160" y="249" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#334155" opacity="0.7">Where is the signed PDI?</text>
              <text x="160" y="263" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569" opacity="0.6">Why was that deadline missed?</text>

              {/* LEFT PAN LABELS — below pan */}
              <text x="160" y="330" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="14" letterSpacing="0.1em" fill="#DC2626">EVERY BUILDER WHY</text>
              <text x="160" y="346" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569">What other systems leave unanswered</text>

              {/* RIGHT PAN */}
              <ellipse cx="540" cy="305" rx="80" ry="13" fill="#001a08" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.7"/>
              <rect x="460" y="292" width="160" height="13" rx="2" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" strokeOpacity="0.4"/>

              {/* RIGHT ANSWER ITEMS — above the pan, well clear */}
              <text x="540" y="218" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#0F172A" opacity="0.9">Defence Vault — conciliation ready</text>
              <text x="540" y="234" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#334155" opacity="0.8">Day 41 BRP tracked automatically</text>
              <text x="540" y="249" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#334155" opacity="0.7">PDI signed, vaulted, timestamped</text>
              <text x="540" y="263" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569" opacity="0.6">Deadline tracked — alert sent early</text>

              {/* RIGHT PAN LABELS — below pan */}
              <text x="540" y="330" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="14" letterSpacing="0.1em" fill="#15803D">X = COMBRYX</text>
              <text x="540" y="346" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569">Built by someone who lived every Why</text>

            </svg>
          </div>

          {/* three column explainer */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3, background:'rgba(15,23,42,0.1)', borderRadius:14, overflow:'hidden', border:'1px solid rgba(15,23,42,0.1)' }}>
            {[
              {
                icon:'x',
                title:'x is the Missing Piece',
                body:"In math we do not guess what x is. We isolate it. We strip away the noise until only the truth remains. The Whys pile up on one side — late trades, missing money, no paper trail. Combryx is the weight that balances the scale.",
              },
              {
                icon:'=',
                title:'Combryx is the Equal Sign',
                body:'Without an equal sign, an equation is just noise. The CEO has goals. The supervisor has dirt. Without the intersection — without Combryx — they are two parallel lines moving in the same direction but never actually talking to each other.',
              },
              {
                icon:'✕',
                title:'x Marks the Intersection',
                body:'In geometry, x is where two lines meet. Line A: the high-level goals, the dollars, the boardroom. Line B: the hands-on reality, the site, the trade. Combryx is the intersection. That is where the business actually works.',
              },
            ].map((c, i) => (
              <div key={i} style={{ background:'#F1F3F6', padding:'32px 28px' }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:40, letterSpacing:'0.04em', color:'#D97706', marginBottom:14, lineHeight:1 }}>{c.icon}</div>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:20, letterSpacing:'0.04em', color:'#0F172A', marginBottom:12, lineHeight:1.1 }}>{c.title}</div>
                <p style={{ fontSize:13, color:'#475569', lineHeight:1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* The pitch quote */}
          <div style={{ marginTop:48, background:'#F1F3F6', border:'1px solid rgba(217,119,6,0.2)', borderRadius:12, padding:'40px 48px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(22px,3vw,36px)', letterSpacing:'0.04em', color:'#0F172A', lineHeight:1.2, marginBottom:16 }}>
              &ldquo;Every Ontario builder using old software is asking WHY.<br/><span style={{ color:'#D97706' }}>Combryx is x. The answer they have been waiting for.</span><br/>Built by someone who lived every single one of those WHYs.&rdquo;
            </div>
            <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.16em', color:'#64748B' }}>
              Combryx — Former Tarion · 5 Ontario Builders · Built from the inside out
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-cb-dark1 py-24 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-5">Ready to work with a team that actually knows this industry?</div>
            <h2 className="font-display text-[clamp(40px,6vw,72px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-6">We aren&apos;t just<br/>building <span className="text-cb-gold">software.</span></h2>
            <p className="text-cb-muted text-base leading-relaxed mb-10">We&apos;re building the infrastructure for a more efficient Ontario construction industry. One that stops losing Tarion conciliations it should win.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/pricing" className="inline-flex bg-cb-gold text-white font-mono text-[11px] font-semibold uppercase tracking-widest px-8 py-4 rounded-md no-underline hover:bg-cb-gold2 transition-all" style={{ boxShadow:'0 0 24px rgba(217,119,6,0.3)' }}>
                Start with Combryx Warranty →
              </Link>
              <Link href="mailto:demo@combryx.com" className="btn-ghost">
                Book a Demo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
