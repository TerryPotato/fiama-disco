import { motion } from 'framer-motion'
import cartel from '../assets/collage cartel.png'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#FFB3D9',
      }}
    >
      {/* Bokeh ambient glow behind the image */}
      {[
        { w: 320, h: 320, x: '-5%',  y: '10%',  color: '#FF8FC8' },
        { w: 260, h: 260, x: '80%',  y: '5%',   color: '#9C27FF' },
        { w: 280, h: 280, x: '70%',  y: '60%',  color: '#FF1F8F' },
        { w: 200, h: 200, x: '-2%',  y: '65%',  color: '#FFB3D9' },
      ].map((b, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: b.x, top: b.y,
          width: b.w, height: b.h,
          borderRadius: '50%',
          background: b.color,
          filter: 'blur(80px)',
          opacity: .35,
          animation: `bokeh ${9 + i * 1.8}s ease-in-out infinite`,
          animationDelay: `${i * 1.2}s`,
          zIndex: 0,
        }} />
      ))}

      {/* Main image */}
      <motion.img
        src={cartel}
        alt="This Way to the Britney's Birthday Disco"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1400px',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* Top fade — blends into the image from above */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, #FFB3D9 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Bottom vignette — blends into the next dark section */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '180px',
        background: 'linear-gradient(to top, #2D0A4E 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Scroll hint */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '1.8rem',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.4rem',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span style={{
          fontFamily: "'Space Grotesk'",
          fontSize: '.65rem',
          fontWeight: 700,
          letterSpacing: '.18em',
          color: 'rgba(255,255,255,.75)',
          textTransform: 'uppercase',
          textShadow: '0 1px 4px rgba(0,0,0,.4)',
        }}>Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 0v16M2 10l6 8 6-8" stroke="rgba(255,255,255,.75)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </motion.div>
    </section>
  )
}
