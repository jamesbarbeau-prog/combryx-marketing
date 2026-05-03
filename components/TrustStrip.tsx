const items = ['Tarion Compliant','ONHWPA Ready','OBC Part 9','Field App Included','No Lock-In','Full Data Export','Custom Dev On Demand','Built by the Trade','35+ Years Experience','Ontario Specific']

export default function TrustStrip() {
  const all = [...items, ...items]
  return (
    <div className="bg-cb-gold py-4 overflow-hidden">
      <div className="marquee-track inline-flex gap-0">
        {all.map((t, i) => (
          <span key={i} className="font-display text-sm tracking-[0.16em] uppercase text-black px-8">
            {t}<span className="mx-2 opacity-30 text-[8px] align-middle">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
