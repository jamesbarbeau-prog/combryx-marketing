'use client'
import { useState } from 'react'
import Link from 'next/link'
import ProductApp, { type ScreenKey } from '@/components/product/ProductApp'

const steps: { n: string; time: string; actor: string; title: string; desc: string; outcome: string; screen: ScreenKey; color: string }[] = [
  { n:'01', time:'7:00 AM', actor:'Warranty Manager, office', screen:'dashboard', color:'#2563EB',
    title:'Good morning. Your dashboard is already up to date.',
    desc:'Open items, deadlines, BRP windows, RFCs and spend, across every community and tower. No chasing a spreadsheet to find out what happened yesterday.',
    outcome:'214 open items · 18 due in 7 days · 3 RFCs filed, all in one view' },
  { n:'02', time:'9:00 AM', actor:'Warranty Coordinator', screen:'homes', color:'#7C3AED',
    title:'A Tarion form comes in. The items create themselves.',
    desc:'Import the form and every item lands on the right home. AI triage reads each one and says whether it looks covered, cosmetic, or needs a site visit before you take a position.',
    outcome:'11 items created from one form · triage notes on each · owner and stage already linked' },
  { n:'03', time:'10:30 AM', actor:'Work orders, dispatch', screen:'orders', color:'#16A34A',
    title:'Dispatch the work. See it move.',
    desc:'Each item becomes a work order for the right trade, with the home, priority and schedule attached. Move it from New to Done and the item and cost ledger update with it.',
    outcome:'Trade, home, priority and cost on one card · nothing lives in an email thread' },
  { n:'04', time:'11:45 AM', actor:'Warranty Manager', screen:'deadlines', color:'#DC2626',
    title:'An RFC lands on Day 42. The clock is already counted.',
    desc:'When a homeowner requests conciliation, the 30-day pre-conciliation period is added to the 120-day builder response period, and you see the days left for that home right away.',
    outcome:'150-day window tracked automatically · every date counted down per home' },
  { n:'05', time:'2:30 PM', actor:'Conciliation Manager (add-on)', screen:'conciliation', color:'#D97706',
    title:'Tarion calls. The whole file is ready.',
    desc:'Cases run from inspection booked to CAR, with cycles, cash offers, releases and evidence in one place. Export the builder comments package when it is time to respond.',
    outcome:'Case timeline, offers and evidence together · builder comments package in one click' },
  { n:'06', time:'4:00 PM', actor:'Design Centre (add-on, coming)', screen:'design', color:'#4338CA',
    title:'Close the loop on what the owner chose.',
    desc:'Owner selections are signed online, with every upgrade and credit recorded and a site instruction list built from the final choices, so what is built matches what was sold.',
    outcome:'Signed selection record per home · upgrade and credit ledger · site instructions' },
]

/* ── WAITLIST FORM ── */
function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email || !name) return
    // In production this would POST to an API route
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ textAlign:'center', padding:'48px 0' }}>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, letterSpacing:'0.04em', color:'#D97706', marginBottom:12 }}>YOU ARE IN.</div>
      <p style={{ fontSize:14, color:'#475569', marginBottom:8 }}>We will be in touch at <strong style={{ color:'#0F172A' }}>{email}</strong> when early access opens.</p>
      <p style={{ fontSize:13, color:'#64748B' }}>In the meantime — <Link href="mailto:demo@combryx.com" style={{ color:'#D97706' }}>email us directly</Link> to book a live walkthrough.</p>
    </div>
  )

  return (
    <div style={{ maxWidth:520, margin:'0 auto' }}>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div>
            <label style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B', display:'block', marginBottom:6 }}>Your Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="James Barbeau"
              style={{ width:'100%', background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:6, padding:'10px 14px', fontFamily:'monospace', fontSize:13, color:'#0F172A', outline:'none' }}/>
          </div>
          <div>
            <label style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B', display:'block', marginBottom:6 }}>Company</label>
            <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Bayview Homes"
              style={{ width:'100%', background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:6, padding:'10px 14px', fontFamily:'monospace', fontSize:13, color:'#0F172A', outline:'none' }}/>
          </div>
        </div>
        <div>
          <label style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B', display:'block', marginBottom:6 }}>Work Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@yourbuilder.com" type="email"
            style={{ width:'100%', background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:6, padding:'10px 14px', fontFamily:'monospace', fontSize:13, color:'#0F172A', outline:'none' }}/>
        </div>
        <button onClick={handleSubmit}
          style={{ background:'#D97706', color:'#000', fontFamily:"'Fira Code',monospace", fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', padding:'14px', borderRadius:7, border:'none', cursor:'pointer', boxShadow:'0 0 24px rgba(217,119,6,0.3)', marginTop:4 }}>
          Join Early Access →
        </button>
        <p style={{ textAlign:'center', fontFamily:"'Fira Code',monospace", fontSize:10, color:'#64748B', textTransform:'uppercase', letterSpacing:'0.1em' }}>
          No credit card · No commitment · First access when we launch
        </p>
      </div>
    </div>
  )
}

export default function DemoWalkthrough() {
  const [active, setActive] = useState(0)
  const s = steps[active]
  const pick = (i: number) => setActive(i)
  return (
    <div style={{ background:'#F1F3F6', minHeight:'100vh', paddingTop:56 }}>
      <div style={{ padding:'48px 20px 28px', textAlign:'center' }}>
        <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#B45309', marginBottom:12 }}>Builder Guardian · See it live</div>
        <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(40px,6vw,80px)', letterSpacing:'0.04em', lineHeight:0.95, color:'#0F172A', marginBottom:16 }}>
          A REAL WARRANTY DAY.<br/><span style={{ color:'#D97706' }}>IN THE REAL WORKSPACE.</span>
        </h1>
        <p style={{ fontSize:16, color:'#475569', lineHeight:1.75, maxWidth:600, margin:'0 auto' }}>
          This is the Builder Guardian workspace with sample data. Click through it, or follow one day from the morning dashboard to the conciliation file.
        </p>
      </div>

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 16px' }}>
        <div style={{ display:'flex', gap:8, overflowX:'auto', paddingBottom:12 }} role="tablist" aria-label="A warranty day">
          {steps.map((st, i) => (
            <button key={st.n} role="tab" aria-selected={i === active} onClick={() => pick(i)}
              style={{ flexShrink:0, background: i === active ? st.color : '#FFFFFF', color: i === active ? '#FFFFFF' : '#475569', border:`1px solid ${i === active ? st.color : '#CBD5E1'}`, borderRadius:8, padding:'9px 14px', fontFamily:"'Fira Code',monospace", fontSize:11, fontWeight:600, letterSpacing:'0.04em', cursor:'pointer' }}>
              {st.time}
            </button>
          ))}
        </div>

        <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid #CBD5E1', boxShadow:'0 24px 60px rgba(15,23,42,0.14)', background:'#FFFFFF' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 14px', background:'#E9EDF2', borderBottom:'1px solid #CBD5E1' }}>
            {['#F87171','#FBBF24','#4ADE80'].map(c => <span key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />)}
            <span style={{ flex:1, textAlign:'center', fontFamily:"'Fira Code',monospace", fontSize:11, color:'#64748B' }}>Builder Guardian · sample data</span>
          </div>
          <ProductApp screen={s.screen} onScreen={k => { const i = steps.findIndex(x => x.screen === k); if (i >= 0) pick(i) }} height={720} />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24, padding:'28px 4px 8px', alignItems:'start' }}>
          <div>
            <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.14em', color:s.color, marginBottom:8 }}>Step {s.n} · {s.time} · {s.actor}</div>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(26px,3vw,38px)', letterSpacing:'0.04em', color:'#0F172A', lineHeight:1.08, marginBottom:12 }}>{s.title}</h2>
            <p style={{ fontSize:15, color:'#475569', lineHeight:1.75 }}>{s.desc}</p>
          </div>
          <div>
            <div style={{ background:`${s.color}12`, border:`1px solid ${s.color}33`, borderRadius:10, padding:'14px 16px', fontSize:13.5, color:'#0F172A', lineHeight:1.6, marginBottom:14 }}>→ {s.outcome}</div>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={() => pick(Math.max(0, active - 1))} style={{ flex:1, background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:8, padding:'12px', fontWeight:600, fontSize:13, cursor:'pointer', color:'#475569' }}>← Previous</button>
              {active < steps.length - 1
                ? <button onClick={() => pick(active + 1)} style={{ flex:2, background:s.color, border:'none', borderRadius:8, padding:'12px', fontWeight:700, fontSize:13, color:'#FFFFFF', cursor:'pointer' }}>Next step →</button>
                : <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior:'smooth' })} style={{ flex:2, background:'#D97706', border:'none', borderRadius:8, padding:'12px', fontWeight:700, fontSize:13, color:'#FFFFFF', cursor:'pointer' }}>Join early access →</button>}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop:'1px solid rgba(15,23,42,0.1)', borderBottom:'1px solid rgba(15,23,42,0.1)', padding:'22px 20px', marginTop:28 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', fontSize:13, color:'#64748B', lineHeight:1.7 }}>
          <strong style={{ color:'#B45309' }}>What you are seeing: </strong>the real workspace interface running on sample data. The Conciliation Manager and the Design Centre are add-ons, and the Design Centre is still being built. Data connections (Tarion API, import) are being finished, so nothing here touches live Tarion systems.
        </div>
      </div>

      {/* Waitlist */}
      <div id="waitlist" style={{ background:'#F1F3F6', padding:'56px 20px' }}>
        <div style={{ maxWidth:640, margin:'0 auto', textAlign:'center' }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#D97706', marginBottom:14 }}>Early Access</div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,64px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#0F172A', marginBottom:14 }}>
            Be first in.<br/><span style={{ color:'#D97706' }}>No setup fee. Ever.</span>
          </h2>
          <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, marginBottom:36, maxWidth:440, margin:'0 auto 36px' }}>
            Early access builders get priority onboarding, direct line to the founder, and the ability to shape which features ship first. Join the waitlist.
          </p>
          <WaitlistForm />
          <div style={{ marginTop:32, display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap' }}>
            {['No credit card','Cancel anytime','Ontario-specific','Built by Tarion insider'].map(t => (
              <span key={t} style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.1em', color:'#64748B', display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ color:'#D97706', fontSize:9 }}>✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
