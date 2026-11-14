const items = [
  'Tarion Compliant','ONHWPA Ready','OBC Part 9','Low-Rise & High-Rise',
  'No Lock-In','Full Data Export','Custom Dev On Demand','Built by the Trade',
  '35+ Years Experience','Ontario Specific',
]

export default function TrustStrip() {
  const all = [...items, ...items]
  return (
    <div style={{ background:'#FFB800', padding:'16px 0', overflow:'hidden' }}>
      <div className="marquee-track" style={{ display:'inline-flex', gap:0 }}>
        {all.map((t, i) => (
          <span key={i} style={{
            fontFamily:"'Bebas Neue',sans-serif",
            fontSize:13,
            letterSpacing:'0.16em',
            textTransform:'uppercase',
            color:'#000000',
            padding:'0 32px',
            whiteSpace:'nowrap',
          }}>
            {t}
            <span style={{ fontSize:7, opacity:0.3, margin:'0 4px', verticalAlign:'middle' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
