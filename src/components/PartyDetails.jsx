import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SPARKLES = ['✦','✧','✦','✧','✦']

export default function PartyDetails() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .12 })

  const item = (delay) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: .7, delay, ease: [.22,1,.36,1] },
  })

  return (
    <section
      id="details"
      ref={ref}
      style={{
        position: 'relative',
        padding: '5rem 2rem',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Bokeh */}
      {[
        { left:'6%',  top:'20%', color:'#FF1F8F' },
        { right:'8%', top:'15%', color:'#FF8FC8' },
        { left:'50%', bottom:'8%', color:'#C2185B' },
      ].map((b, i) => (
        <div key={i} style={{
          position:'absolute', width:220, height:220, borderRadius:'50%',
          background: b.color, filter:'blur(90px)', opacity:.25,
          left:b.left, right:b.right, top:b.top, bottom:b.bottom,
          animation:`bokeh ${10+i*2}s ease-in-out infinite`,
          animationDelay:`${i*1.5}s`,
          pointerEvents:'none',
        }}/>
      ))}

      {SPARKLES.map((s, i) => (
        <div key={i} style={{
          position:'absolute',
          left: `${[8,92,18,82,50][i]}%`,
          top:  `${[15,25,75,70,8][i]}%`,
          fontSize: `${[1.4,1,1.6,1.1,.9][i]}rem`,
          color:'#FFB3D9', opacity:.45,
          animation:`float-up ${3.5+i*.4}s ease-in-out infinite`,
          animationDelay:`${i*.3}s`,
          pointerEvents:'none',
        }}>{s}</div>
      ))}

      <div style={{ maxWidth:'760px', margin:'0 auto', position:'relative', zIndex:2 }}>

        <motion.h2 {...item(0)} style={{
          fontFamily:"'Anton SC',sans-serif",
          fontSize:'clamp(2rem,5vw,4rem)',
          color:'#8B0040',
          textAlign:'center',
          marginBottom:'2rem',
          transform:'rotate(-1.5deg)',
          display:'block',
          textShadow:'2px 3px 0 rgba(255,255,255,.3)',
        }}>
          THE DETAILS
        </motion.h2>

        {/* Contenedor rosa fuerte */}
        <motion.div {...item(.1)} style={{
          background: '#C2185B',
          borderRadius: '20px',
          padding: '2.5rem 2rem',
          boxShadow: '0 8px 40px rgba(139,0,64,.3)',
        }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>

            {/* FECHA */}
            <motion.div {...item(.2)} style={{ display:'flex', alignItems:'baseline', gap:'1.2rem', borderBottom:'1px solid rgba(255,255,255,.2)', paddingBottom:'1.8rem' }}>
              <span style={{
                fontFamily:"'Space Grotesk',sans-serif",
                fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.25em', color:'#FFB3D9',
                textTransform:'uppercase', flexShrink:0, paddingTop:'.25rem',
              }}>Cuándo</span>
              <div>
                <p style={{
                  fontFamily:"'Anton SC',sans-serif",
                  fontSize:'clamp(2.2rem,5.5vw,4.4rem)',
                  color:'#fff', lineHeight:.9,
                  textShadow:'3px 4px 0 rgba(0,0,0,.2)',
                }}>??? ✦ ???</p>
                <p style={{
                  fontFamily:"'Caveat',cursive",
                  fontSize:'1.1rem', fontWeight:700,
                  color:'#FFB3D9', marginTop:'.45rem',
                }}>top secret — coming soon</p>
              </div>
            </motion.div>

            {/* HORA */}
            <motion.div {...item(.32)} style={{ display:'flex', alignItems:'baseline', gap:'1.2rem', borderBottom:'1px solid rgba(255,255,255,.2)', paddingBottom:'1.8rem' }}>
              <span style={{
                fontFamily:"'Space Grotesk',sans-serif",
                fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.25em', color:'#FFB3D9',
                textTransform:'uppercase', flexShrink:0, paddingTop:'.25rem',
              }}>Hora</span>
              <div>
                <p style={{
                  fontFamily:"'Anton SC',sans-serif",
                  fontSize:'clamp(2.2rem,5.5vw,4.4rem)',
                  color:'#fff', lineHeight:.9,
                  textShadow:'3px 4px 0 rgba(0,0,0,.2)',
                }}>??? ✦ ???</p>
                <p style={{
                  fontFamily:"'Caveat',cursive",
                  fontSize:'1.1rem', fontWeight:700,
                  color:'#FFB3D9', marginTop:'.45rem',
                }}>la hora también es un misterio</p>
              </div>
            </motion.div>

            {/* LUGAR */}
            <motion.div {...item(.44)} style={{ display:'flex', alignItems:'baseline', gap:'1.2rem' }}>
              <span style={{
                fontFamily:"'Space Grotesk',sans-serif",
                fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.25em', color:'#FFB3D9',
                textTransform:'uppercase', flexShrink:0, paddingTop:'.25rem',
              }}>Dónde</span>
              <div>
                <p style={{
                  fontFamily:"'Anton SC',sans-serif",
                  fontSize:'clamp(2.2rem,5.5vw,4.4rem)',
                  color:'#fff', lineHeight:.9,
                  textShadow:'3px 4px 0 rgba(0,0,0,.2)',
                }}>??? ✦ ???</p>
                <p style={{
                  fontFamily:"'Caveat',cursive",
                  fontSize:'1.1rem', fontWeight:700,
                  color:'#FFB3D9', marginTop:'.45rem',
                }}>ubicación clasificada — stay tuned</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
