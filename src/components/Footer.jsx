import DiscoBall from './DiscoBall'

export default function Footer() {
  return (
    <footer style={{
      background: '#1a0018',
      padding: '2.5rem 2rem',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Divisor rosa */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, #FF1F8F 30%, #FF8FC8 50%, #FF1F8F 70%, transparent 100%)',
      }} />

      <div style={{ animation: 'spin-slow 14s linear infinite', marginTop: '.5rem' }}>
        <DiscoBall size={44} glowColor="#FF8FC8" />
      </div>

      <p style={{
        fontFamily: "'Anton SC', sans-serif",
        fontSize: 'clamp(1.1rem,3vw,1.5rem)',
        color: '#FF8FC8',
        letterSpacing: '.08em',
        textAlign: 'center',
      }}>
        ✦ NO TE LO PIERDAS ✦
      </p>

      <p style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '1.2rem', color: 'rgba(255,180,210,.85)',
        fontWeight: 700, textAlign: 'center',
      }}>
        "See you on the dance floor, babes"
      </p>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem',
        borderTop: '1px solid rgba(255,255,255,.08)',
        paddingTop: '1rem', marginTop: '.25rem', width: '100%', maxWidth: '420px',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '.75rem', fontWeight: 700, letterSpacing: '.12em',
          color: 'rgba(255,143,200,.6)', textTransform: 'uppercase', textAlign: 'center',
        }}>
          Recuerda confirmar tu asistencia
        </p>
        <a href="#rsvp" style={{
          fontFamily: "'Anton SC', sans-serif",
          fontSize: '.85rem', letterSpacing: '.1em',
          color: '#FF1F8F', textDecoration: 'none',
        }}>RSVP ✦</a>
      </div>

      <p style={{
        fontFamily: "'Space Grotesk'", fontSize: '.6rem',
        color: 'rgba(255,255,255,.15)', marginTop: '.25rem', letterSpacing: '.08em',
        textAlign: 'center',
      }}>
        Made with 💕 for Fiama · 2025
      </p>
    </footer>
  )
}
