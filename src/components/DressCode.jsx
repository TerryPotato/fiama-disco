import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ImageAutoSlider } from './ui/ImageAutoSlider'

const SPARKLES = [
  { x:'7%',  y:'18%', size:'1.5rem', delay:0   },
  { x:'93%', y:'28%', size:'1.1rem', delay:.5  },
  { x:'14%', y:'78%', size:'1.8rem', delay:.3  },
  { x:'86%', y:'72%', size:'1.2rem', delay:.8  },
  { x:'50%', y:'8%',  size:'1rem',   delay:.2  },
  { x:'28%', y:'90%', size:'1.4rem', delay:.6  },
]

export default function DressCode() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:.12 })

  return (
    <section
      ref={ref}
      id="dress-code"
      style={{
        position: 'relative',
        padding: '5rem 0 5rem',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <div key={i} style={{
          position:'absolute', left:s.x, top:s.y,
          fontSize:s.size, color:'#fff', opacity:.7,
          animation:`float-up ${3+i*.4}s ease-in-out infinite`,
          animationDelay:`${s.delay}s`,
          pointerEvents:'none',
        }}>✦</div>
      ))}

      {/* Título */}
      <motion.div
        initial={{ opacity:0, y:50 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:.7 }}
        style={{ textAlign:'center', marginBottom:'3rem', position:'relative', zIndex:2, padding:'0 2rem' }}
      >
        <h2
          style={{
            fontFamily:"'Anton SC',sans-serif",
            fontSize:'clamp(2.5rem, 7vw, 5.5rem)',
            color:'#fff',
            display:'inline-block',
            transform:'rotate(-2.5deg)',
            lineHeight:1,
            textShadow:'3px 4px 0 #8B0040',
          }}
        >
          THE VIBE ✦
        </h2>
        <svg viewBox="0 0 400 20" style={{ display:'block', margin:'-.3rem auto 0', width:'min(400px,90%)', transform:'rotate(-1deg)' }}>
          <path d="M10 10 Q100 16 200 8 Q300 2 390 12" stroke="#8B0040" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7"/>
        </svg>
        <p style={{ fontFamily:"'Bagel Fat One',cursive", fontSize:'1.1rem', color:'#8B0040', marginTop:'.8rem', opacity:.8 }}>
          dress to impress — Y2K looks only, no jeans!
        </p>
        <a
          href="https://pin.it/6KYl3iP1P"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.45rem',
            marginTop: '1rem',
            padding: '.45rem 1.1rem',
            background: '#E60023',
            borderRadius: '999px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '.82rem',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '.04em',
            boxShadow: '2px 3px 0 #8B0000',
            transition: 'transform .15s, box-shadow .15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='3px 5px 0 #8B0000' }}
          onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)';   e.currentTarget.style.boxShadow='2px 3px 0 #8B0000' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
          Ver tablero de inspo
        </a>
      </motion.div>

      {/* Slider */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:.8, delay:.3 }}
        style={{ position:'relative', zIndex:2 }}
      >
        <ImageAutoSlider speed={32} />
      </motion.div>
    </section>
  )
}
