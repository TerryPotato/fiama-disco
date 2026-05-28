import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function VaultIntro() {
  const [phase, setPhase] = useState('show') // 'show' | 'open' | 'done'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('open'), 1500)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (phase === 'open') {
      const t2 = setTimeout(() => setPhase('done'), 1050)
      return () => clearTimeout(t2)
    }
  }, [phase])

  if (phase === 'done') return null

  const opening = phase === 'open'

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      pointerEvents: 'none',
    }}>
      {/* Top panel */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '50%',
        background: '#FF1F8F',
        transform: opening ? 'translateY(-100%)' : 'translateY(0)',
        transition: opening ? 'transform 0.9s cubic-bezier(0.76,0,0.24,1)' : 'none',
      }} />

      {/* Bottom panel */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '50%',
        background: '#FF1F8F',
        transform: opening ? 'translateY(100%)' : 'translateY(0)',
        transition: opening ? 'transform 0.9s cubic-bezier(0.76,0,0.24,1)' : 'none',
      }} />

      {/* Logo */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        opacity: opening ? 0 : 1,
        transition: opening ? 'opacity 0.25s ease' : 'opacity 0.5s ease',
      }}>
        <img
          src={logo}
          alt="Fiama's Disco"
          style={{
            width: 'clamp(180px, 30vw, 320px)',
            filter: 'drop-shadow(0 6px 32px rgba(0,0,0,.35))',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}
