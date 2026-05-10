'use client'
const stats = [
  { n:'$30k+', label:'Average cost of a lost Tarion conciliation', sub:'Defence Vault eliminates this risk' },
  { n:'150', label:'Days total builder repair time (120 + 30 BRP)', sub:'Combryx tracks both periods automatically' },
  { n:'Day 41', label:'When the new Tarion clock actually starts', sub:'Not Day 30 — most software still gets this wrong' },
  { n:'0', label:'Other warranty platforms founded by Tarion insiders', sub:'This background cannot be replicated' },
]

export default function OutcomeStats() {
  return (
    <div style={{ background:'#000', borderTop:'1px solid rgba(255,255,255,0.04)', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
        {stats.map((s, i) => (
          <div key={s.n} style={{
            padding:'32px 28px',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            transition:'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background='rgba(255,184,0,0.03)')}
          onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(32px,3.5vw,52px)', letterSpacing:'0.04em', color:'#FFB800', lineHeight:1, marginBottom:8 }}>{s.n}</div>
            <div style={{ fontSize:13, fontWeight:600, color:'#C8C8C8', lineHeight:1.4, marginBottom:6 }}>{s.label}</div>
            <div style={{ fontSize:11, color:'#555', lineHeight:1.5, fontFamily:"'Fira Code',monospace" }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
