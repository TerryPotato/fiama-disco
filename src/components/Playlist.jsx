import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TRACKS = [
  { n:'01', title:'Toxic',           artist:'Britney Spears'   },
  { n:'02', title:"Sk8er Boi",       artist:'Avril Lavigne'    },
  { n:'03', title:'Dirrty',          artist:'Christina Aguilera'},
  { n:'04', title:'Hollaback Girl',  artist:'Gwen Stefani'     },
  { n:'05', title:'Tik Tok',         artist:'Kesha'            },
  { n:'06', title:"Don't Cha",       artist:'Pussycat Dolls'   },
  { n:'07', title:'S&M',             artist:'Rihanna'          },
  { n:'08', title:'Just Dance',      artist:'Lady Gaga'        },
  { n:'09', title:'Promiscuous',     artist:'Nelly Furtado'    },
  { n:'10', title:'Crazy In Love',   artist:'Beyoncé'          },
]

function SimpleCD() {
  return (
    <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
      {/* Glow suave de fondo */}
      <div style={{
        position:'absolute', width:'260px', height:'260px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(255,143,200,.35) 0%, transparent 70%)',
      }}/>
      {/* Disco */}
      <div style={{
        width:'230px', height:'230px', borderRadius:'50%',
        background:'linear-gradient(135deg, #FF8FC8 0%, #9C27FF 40%, #C2185B 70%, #FF8FC8 100%)',
        animation:'cd-spin 10s linear infinite',
        position:'relative',
        boxShadow:'0 6px 24px rgba(0,0,0,.5)',
      }}>
        {/* Anillos */}
        <div style={{ position:'absolute', inset:'18px', borderRadius:'50%', border:'2px solid rgba(255,255,255,.25)' }}/>
        <div style={{ position:'absolute', inset:'40px', borderRadius:'50%', border:'1px solid rgba(255,255,255,.15)' }}/>
        <div style={{ position:'absolute', inset:'60px', borderRadius:'50%', border:'1px solid rgba(255,255,255,.1)' }}/>
        {/* Hoyo central */}
        <div style={{
          position:'absolute', inset:0, borderRadius:'50%',
          background:'radial-gradient(circle, #1a0018 0%, #2a0030 15%, transparent 28%)',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <div style={{ width:'26px', height:'26px', borderRadius:'50%', background:'#0a0010', border:'2px solid rgba(255,255,255,.2)' }}/>
        </div>
        {/* Brillo suave */}
        <div style={{
          position:'absolute', inset:0, borderRadius:'50%',
          background:'linear-gradient(135deg, rgba(255,255,255,.3) 0%, transparent 50%)',
          pointerEvents:'none',
        }}/>
      </div>
    </div>
  )
}

export default function Playlist() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:.12 })

  return (
    <section
      ref={ref}
      style={{
        id:'playlist',
        position:'relative',
        padding:'5rem 2rem',
        background:'linear-gradient(180deg, #8B0040 0%, #C2185B 50%, #FF1F8F 100%)',
        overflow:'hidden',
      }}
    >
      {/* Bokeh */}
      {[{l:'5%',t:'20%',c:'#FF8FC8'},{r:'8%',b:'15%',c:'#FFB3D9'}].map((b,i)=>(
        <div key={i} style={{
          position:'absolute', width:240, height:240, borderRadius:'50%',
          background:b.c, filter:'blur(90px)', opacity:.2,
          left:b.l, right:b.r, top:b.t, bottom:b.b,
        }}/>
      ))}

      <motion.h2
        initial={{ opacity:0, y:40 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:.7 }}
        style={{
          fontFamily:"'Anton SC',sans-serif",
          fontSize:'clamp(2rem,5vw,4rem)',
          color:'#fff',
          textAlign:'center',
          marginBottom:'3rem',
          display:'block',
          textShadow:'2px 3px 0 rgba(0,0,0,.25)',
        }}
      >
        THE SOUNDTRACK
      </motion.h2>

      <div style={{
        display:'flex', gap:'3rem', alignItems:'center',
        justifyContent:'center', maxWidth:'900px',
        margin:'0 auto', flexWrap:'wrap',
      }}>
        {/* CD */}
        <motion.div
          initial={{ opacity:0, scale:.6, rotate:-20 }}
          animate={inView ? { opacity:1, scale:1, rotate:0 } : {}}
          transition={{ duration:.9, type:'spring', damping:14 }}
        >
          <SimpleCD />
        </motion.div>

        {/* Tracklist */}
        <motion.div
          initial={{ opacity:0, x:60 }}
          animate={inView ? { opacity:1, x:0 } : {}}
          transition={{ duration:.8, delay:.3 }}
          style={{
            background:'#FFFFF8',
            borderRadius:'4px',
            padding:'1.5rem 1.5rem 1.5rem 2.2rem',
            minWidth:'280px', maxWidth:'360px', flexGrow:1,
            boxShadow:'4px 5px 0 rgba(0,0,0,.2)',
            backgroundImage:'repeating-linear-gradient(transparent, transparent 31px, #c8d8ff 31px, #c8d8ff 33px)',
            backgroundPositionY:'1.5rem',
            position:'relative',
          }}
        >
          <div style={{ position:'absolute', left:'2.5rem', top:0, bottom:0, borderLeft:'2px solid rgba(215,38,56,.3)', pointerEvents:'none' }}/>
          <p style={{ fontFamily:"'Caveat',cursive", fontSize:'1.2rem', color:'#D72638', fontWeight:700, marginBottom:'.8rem', paddingLeft:'.5rem' }}>
            Party Playlist 🎵
          </p>
          <ol style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.25rem' }}>
            {TRACKS.map((t,i)=>(
              <motion.li
                key={i}
                initial={{ opacity:0, x:20 }}
                animate={inView ? { opacity:1, x:0 } : {}}
                transition={{ duration:.4, delay:.4+i*.05 }}
                style={{ display:'flex', alignItems:'center', gap:'.6rem', paddingLeft:'.5rem' }}
              >
                <span style={{
                  width:'20px', height:'20px', borderRadius:'50%', flexShrink:0,
                  background:'#FF8FC8',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'.5rem', fontFamily:"'Space Grotesk'", fontWeight:700, color:'#fff',
                }}>{t.n}</span>
                <div style={{ lineHeight:1.3 }}>
                  <span style={{ fontFamily:"'Space Grotesk'", fontSize:'.8rem', fontWeight:700, color:'#111' }}>{t.title}</span>
                  <span style={{ fontFamily:"'Space Grotesk'", fontSize:'.7rem', color:'#666', marginLeft:'.4rem' }}>— {t.artist}</span>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
