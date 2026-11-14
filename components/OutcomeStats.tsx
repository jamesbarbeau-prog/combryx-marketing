'use client'

const stats = [
  { n:'$30k+', label:'Average cost of a lost Tarion conciliation', sub:'Defence Vault eliminates this risk' },
  { n:'150', label:'Days total builder repair time (120 + 30 BRP)', sub:'Builder Guardian tracks both periods automatically' },
  { n:'Day 41', label:'When the new Tarion clock actually starts', sub:'Not Day 30 — most software still gets this wrong' },
  { n:'0', label:'Other warranty platforms founded by Tarion insiders', sub:'This background cannot be replicated' },
]

export default function OutcomeStats() {
  return (
    <div style={{ background:'#F1F3F6', borderTop:'1px solid rgba(15,23,42,0.1)', borderBottom:'1px solid rgba(15,23,42,0.1)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {stats.map((s, i) => (
          <div key={s.n} style={{
            padding:'28px 20px',
            borderRight: '1px solid rgba(15,23,42,0.1)',
            borderBottom: '1px solid rgba(15,23,42,0.1)',
          }}>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(28px,3.5vw,48px)', letterSpacing:'0.04em', color:'#EA580C', lineHeight:1, marginBottom:8 }}>{s.n}</div>
            <div style={{ fontSize:13, fontWeight:600, color:'#334155', lineHeight:1.4, marginBottom:6 }}>{s.label}</div>
            <div style={{ fontSize:11, color:'#64748B', lineHeight:1.5, fontFamily:"'Fira Code',monospace" }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
