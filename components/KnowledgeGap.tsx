import Link from 'next/link'

const rows = [
  { feature:'Tarion CSS form schedule (post-May 2024)', us:true,  usNote:'Day 41, 183, 366 auto-submissions tracked per unit', them:false, themNote:'Most still reference the obsolete 30-day window' },
  { feature:'120-day BRP + RFC status tracking',        us:true,  usNote:'Tracks both periods + homeowner RFC simultaneously', them:false, themNote:'Generic deadline reminders only' },
  { feature:'Defence Vault — conciliation-ready export',us:true,  usNote:'CPG citations, timeline, evidence — one click', them:false, themNote:'Not available in any competing platform' },
  { feature:'Field app works offline (no signal)',       us:true,  usNote:'SQLite queue — syncs silently when signal returns', them:'partial', themNote:'Most require active internet connection' },
  { feature:'PDI digital sign-off on tablet',           us:true,  usNote:'Dual sig, photo per item, PDF generated on-device', them:'partial', themNote:'Some offer basic digital forms' },
  { feature:'Phase sign-off → lender draw auto-assembled',us:true, usNote:'Super signs on site, draw ready in office instantly', them:false, themNote:'Manual assembly in all competing systems' },
  { feature:'OBC Part 9 + CPG AI answers',              us:true,  usNote:'Lex Structura — specific citations, not generic answers', them:false, themNote:'No warranty-specific AI in market' },
  { feature:'IoT sensor → warranty case auto-created',  us:true,  usNote:'Before the homeowner calls — proactive not reactive', them:false, themNote:'No competing platform offers this' },
  { feature:'Built by someone who worked inside Tarion', us:true,  usNote:'35+ years · 5 Ontario builders · Tarion inspector', them:false, themNote:'Zero competing founders have this background' },
  { feature:'Modular — buy only what you need',         us:true,  usNote:'Start at $149/community · Add modules as you grow', them:false, themNote:'Monolithic platforms — all or nothing' },
  { feature:'$0 setup fee · Cancel anytime',            us:true,  usNote:'No contract, no exit fee, full data export free', them:false, themNote:'Most charge $5k–$40k setup + annual contracts' },
]

export default function KnowledgeGap() {
  return (
    <section style={{ background:'#0a0a0a', padding:'96px 0', borderTop:'1px solid rgba(255,184,0,0.08)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 16px' }}>

        {/* header */}
        <div style={{ marginBottom:48, maxWidth:680 }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#FFB800', marginBottom:12, display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ width:24, height:1, background:'#FFB800', opacity:0.6, display:'inline-block' }}/>
            The Knowledge Gap
          </div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,60px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#F5F5F5', marginBottom:16 }}>
            Not a feature comparison.<br/>A <span style={{ color:'#FFB800' }}>knowledge gap.</span>
          </h2>
          <p style={{ fontSize:15, color:'#888', lineHeight:1.75 }}>
            Other platforms are built by great developers who read the Tarion handbook. Combryx is built by someone who processed the claims, ran the inspections, and sat in the conciliation rooms. That gap cannot be closed by any company that never worked inside a builder or a warranty authority.
          </p>
        </div>

        {/* table */}
        <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.06)', borderRadius:12, overflow:'hidden' }}>

          {/* table header */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0,1fr))', background:'#000', overflowX:'auto', borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'0' }}>
            <div style={{ padding:'14px 20px', fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#444' }}>Capability</div>
            <div style={{ padding:'14px 20px', fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#FFB800', borderLeft:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,184,0,0.04)' }}>✦ Combryx</div>
            <div style={{ padding:'14px 20px', fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#444', borderLeft:'1px solid rgba(255,255,255,0.06)' }}>Other Platforms</div>
          </div>

          {rows.map((r, i) => (
            <div key={r.feature} style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0,1fr))', borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              {/* feature name */}
              <div style={{ padding:'14px 20px', fontSize:13, fontWeight:600, color:'#C8C8C8', display:'flex', alignItems:'center' }}>{r.feature}</div>

              {/* Combryx */}
              <div style={{ padding:'14px 20px', borderLeft:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,184,0,0.03)', display:'flex', flexDirection:'column', justifyContent:'center', gap:3 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ color:'#22c55e', fontSize:15, fontWeight:700, flexShrink:0 }}>✓</span>
                  <span style={{ fontSize:12, color:'#888', lineHeight:1.5 }}>{r.usNote}</span>
                </div>
              </div>

              {/* Others */}
              <div style={{ padding:'14px 20px', borderLeft:'1px solid rgba(255,255,255,0.06)', display:'flex', flexDirection:'column', justifyContent:'center', gap:3 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ color: r.them === 'partial' ? '#d97706' : '#dc2626', fontSize:13, flexShrink:0 }}>
                    {r.them === true ? '✓' : r.them === 'partial' ? '~' : '✗'}
                  </span>
                  <span style={{ fontSize:12, color:'#555', lineHeight:1.5 }}>{r.themNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div style={{ marginTop:28, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <p style={{ fontSize:12, color:'#444', fontFamily:"'Fira Code',monospace" }}>
            ~ Partial implementation &nbsp;·&nbsp; ✗ Not available &nbsp;·&nbsp; ✓ Fully implemented
          </p>
          <Link href="/pricing" style={{
            background:'#FFB800', color:'#000',
            fontFamily:"'Fira Code',monospace", fontSize:11, fontWeight:600,
            letterSpacing:'0.1em', textTransform:'uppercase',
            padding:'12px 24px', borderRadius:6, textDecoration:'none',
            transition:'all 0.2s',
          }}>
            Start Free — $149/community →
          </Link>
        </div>
      </div>
    </section>
  )
}
