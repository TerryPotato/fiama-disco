export default function DiscoBall({ size = 200, glowColor = '#FF1F8F', style = {}, className = '' }) {
  const id = `db-${size}`
  const cols = 10
  const rows = 10
  const cellW = 100 / cols
  const cellH = 100 / rows

  const facetColors = [
    'rgba(255,255,255,0.55)',
    'rgba(200,200,220,0.45)',
    'rgba(255,180,210,0.50)',
    'rgba(150,150,170,0.40)',
    'rgba(255,220,240,0.50)',
    'rgba(180,180,200,0.35)',
    'rgba(255,200,220,0.45)',
    'rgba(120,120,140,0.40)',
    'rgba(255,255,255,0.60)',
    'rgba(210,180,220,0.40)',
  ]

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        position: 'relative',
        background: 'radial-gradient(circle at 38% 30%, #f0f0f5 0%, #b0b0c0 30%, #606070 60%, #303040 100%)',
        boxShadow: `0 0 ${size*0.15}px ${glowColor}, 0 0 ${size*0.3}px rgba(255,31,143,.5), 0 0 ${size*0.5}px rgba(255,31,143,.25)`,
        ...style,
      }}
    >
      <svg
        style={{ position:'absolute', inset:0, borderRadius:'50%', overflow:'hidden' }}
        width="100%" height="100%" viewBox="0 0 100 100"
      >
        <defs>
          <clipPath id={`clip-${id}`}><circle cx="50" cy="50" r="50"/></clipPath>
          <radialGradient id={`base-${id}`} cx="38%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".9"/>
            <stop offset="30%" stopColor="#ccccdd" stopOpacity=".6"/>
            <stop offset="70%" stopColor="#606070" stopOpacity=".4"/>
            <stop offset="100%" stopColor="#202030" stopOpacity=".8"/>
          </radialGradient>
        </defs>
        <g clipPath={`url(#clip-${id})`}>
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols }, (_, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * cellW + 0.4}
                y={r * cellH + 0.4}
                width={cellW - 0.8}
                height={cellH - 0.8}
                rx="0.3"
                fill={facetColors[(r * 3 + c * 7) % facetColors.length]}
              />
            ))
          )}
          {/* Grid lines */}
          {Array.from({ length: cols + 1 }, (_, i) => (
            <line key={`v${i}`} x1={i * cellW} y1="0" x2={i * cellW} y2="100" stroke="rgba(0,0,0,.35)" strokeWidth=".6"/>
          ))}
          {Array.from({ length: rows + 1 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * cellH} x2="100" y2={i * cellH} stroke="rgba(0,0,0,.35)" strokeWidth=".6"/>
          ))}
          {/* Shading overlay */}
          <circle cx="50" cy="50" r="50" fill={`url(#base-${id})`}/>
          {/* Primary specular */}
          <ellipse cx="36" cy="28" rx="14" ry="9" fill="rgba(255,255,255,.85)"/>
          {/* Secondary specular */}
          <ellipse cx="66" cy="68" rx="7" ry="5" fill="rgba(255,200,220,.45)"/>
          {/* Rim light */}
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
        </g>
      </svg>
    </div>
  )
}
