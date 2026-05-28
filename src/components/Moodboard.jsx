import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Warp } from '@paper-design/shaders-react'
import vibe1 from '../assets/vibe/1.jpg'
import vibe2 from '../assets/vibe/2.jpg'
import vibe3 from '../assets/vibe/3.jpg'
import vibe4 from '../assets/vibe/4.jpg'
import vibe5 from '../assets/vibe/5.jpg'
import vibe6 from '../assets/vibe/6.jpg'
import vibe7 from '../assets/vibe/7.jpg'

const TILES = [
  { src:vibe1, treatment:'polaroid', caption:'main character energy', rotate:-3, span:'tall' },
  { src:vibe2, treatment:'washi',    rotate:2,  span:'wide'   },
  { gradient:'linear-gradient(135deg,#FF8FC8,#9C27FF)', treatment:'sticker', label:'GLITTER PUNK', rotate:-2, span:'square' },
  { src:vibe3, treatment:'magazine', rotate:3,  span:'square' },
  { src:vibe4, treatment:'polaroid', caption:'disco season',          rotate:-4, span:'tall' },
  { src:vibe5, treatment:'washi',    rotate:2,  span:'wide'   },
  { gradient:'linear-gradient(135deg,#1a0030,#FF1F8F)', treatment:'sticker', label:'Y2K FOREVER', rotate:-2, span:'square' },
  { src:vibe6, treatment:'magazine', rotate:-3, span:'square' },
  { src:vibe7, treatment:'polaroid', caption:'pure vibe',             rotate:3,  span:'tall' },
  { gradient:'linear-gradient(135deg,#9C27FF,#FF1F8F)', treatment:'washi', rotate:-1, span:'square' },
]

const FLOAT_LABELS = [
  { text:'POP POWER',     x:'10%', y:'22%', rot:-7  },
  { text:'GEN-Z ICONS',  x:'70%', y:'13%', rot:5   },
  { text:'STAGE SHINE',  x:'4%',  y:'72%', rot:-4  },
  { text:'GLITTER PUNKS',x:'66%', y:'82%', rot:4   },
]

function PolaroidTile({ children, caption, rotate }) {
  return (
    <div
      style={{ background:'#fff', padding:'10px 10px 30px', borderRadius:'2px', transform:`rotate(${rotate}deg)`, boxShadow:'3px 5px 14px rgba(0,0,0,.45)', transition:'transform .3s, box-shadow .3s', cursor:'pointer' }}
      onMouseEnter={e => { e.currentTarget.style.transform='rotate(0deg) scale(1.04)'; e.currentTarget.style.boxShadow='6px 10px 24px rgba(0,0,0,.6)' }}
      onMouseLeave={e => { e.currentTarget.style.transform=`rotate(${rotate}deg)`; e.currentTarget.style.boxShadow='3px 5px 14px rgba(0,0,0,.45)' }}
    >
      {children}
      {caption && <p style={{ fontFamily:"'Caveat',cursive", fontSize:'1rem', color:'#333', textAlign:'center', marginTop:'4px', fontWeight:700 }}>{caption}</p>}
    </div>
  )
}

function WashiTile({ children, rotate }) {
  return (
    <div style={{ position:'relative', transform:`rotate(${rotate}deg)`, transition:'transform .3s', cursor:'pointer' }}
      onMouseEnter={e => e.currentTarget.style.transform='rotate(0deg) scale(1.04)'}
      onMouseLeave={e => e.currentTarget.style.transform=`rotate(${rotate}deg)`}
    >
      {children}
      {[{top:'-6px',left:'20%',rot:-20,color:'#FF8FC8'},{top:'-6px',right:'15%',rot:15,color:'#9C27FF'}].map((w,i)=>(
        <div key={i} style={{ position:'absolute', width:'44px', height:'13px', background:w.color, opacity:.7, transform:`rotate(${w.rot}deg)`, top:w.top, left:w.left, right:w.right, borderRadius:'2px' }}/>
      ))}
    </div>
  )
}

function StickerTile({ children, label, rotate }) {
  return (
    <div
      style={{ position:'relative', transform:`rotate(${rotate}deg)`, clipPath:'polygon(5% 0%,95% 0%,100% 5%,100% 95%,95% 100%,5% 100%,0% 95%,0% 5%)', boxShadow:'3px 4px 0 #C2185B, 0 10px 24px rgba(0,0,0,.35)', transition:'transform .3s', cursor:'pointer' }}
      onMouseEnter={e=>e.currentTarget.style.transform='rotate(0deg) scale(1.04)'}
      onMouseLeave={e=>e.currentTarget.style.transform=`rotate(${rotate}deg)`}
    >
      {children}
      {label && (
        <div style={{ position:'absolute', bottom:'8px', left:'50%', transform:'translateX(-50%) rotate(-2deg)', background:'#FF1F8F', padding:'2px 10px', borderRadius:'2px', fontFamily:"'Bagel Fat One',cursive", fontSize:'.7rem', color:'#fff', whiteSpace:'nowrap', boxShadow:'2px 2px 0 #8B0040' }}>
          {label}
        </div>
      )}
    </div>
  )
}

function MagazineTile({ children, rotate }) {
  return (
    <div style={{ position:'relative', transform:`rotate(${rotate}deg)`, transition:'transform .3s', cursor:'pointer' }}
      onMouseEnter={e=>e.currentTarget.style.transform='rotate(0deg) scale(1.04)'}
      onMouseLeave={e=>e.currentTarget.style.transform=`rotate(${rotate}deg)`}
    >
      {children}
    </div>
  )
}

function TileContent({ tile }) {
  const heights = { tall:'240px', wide:'140px', square:'180px' }
  const h = heights[tile.span] || '180px'
  const inner = tile.src
    ? <img src={tile.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e=>{ e.target.style.display='none'; e.target.parentElement.style.background=tile.gradient||'#FF8FC8' }}/>
    : <div style={{ width:'100%', height:'100%', background:tile.gradient }}/>
  const wrapper = <div style={{ width:'100%', height:h, overflow:'hidden' }}>{inner}</div>
  switch(tile.treatment) {
    case 'polaroid': return <PolaroidTile caption={tile.caption} rotate={tile.rotate}>{wrapper}</PolaroidTile>
    case 'washi':    return <WashiTile    rotate={tile.rotate}>{wrapper}</WashiTile>
    case 'sticker':  return <StickerTile  label={tile.label}   rotate={tile.rotate}>{wrapper}</StickerTile>
    case 'magazine': return <MagazineTile rotate={tile.rotate}>{wrapper}</MagazineTile>
    default:         return wrapper
  }
}

export default function Moodboard() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:.08 })

  return (
    <section
      ref={ref}
      style={{
        id:'moodboard',
        position:'relative',
        padding:'5rem 2rem',
        overflow:'hidden',
      }}
    >
      {/* Warp shader background */}
      <div style={{ position:'absolute', inset:0, zIndex:0 }}>
        <Warp
          style={{ width:'100%', height:'100%' }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={6}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.5}
          colors={['#EEAECA', '#94BBE9', '#FFD6E8', '#B8CFED']}
        />
      </div>
      {/* Estrellas */}
      {Array.from({length:18},(_,i)=>(
        <div key={i} style={{
          position:'absolute',
          left:`${(i*47+13)%100}%`,
          top:`${(i*31+7)%100}%`,
          fontSize:`${.5+(i%3)*.25}rem`,
          color:'#fff',
          opacity:.3+(i%4)*.05,
          animation:`float-up ${4+i*.3}s ease-in-out infinite`,
          animationDelay:`${i*.18}s`,
        }}>✦</div>
      ))}

      {/* Labels flotantes */}
      {FLOAT_LABELS.map((l,i)=>(
        <div key={i} style={{
          position:'absolute', left:l.x, top:l.y,
          fontFamily:"'Bagel Fat One',cursive",
          fontSize:'clamp(.8rem,1.4vw,1.2rem)',
          color:'#fff',
          transform:`rotate(${l.rot}deg)`,
          opacity:.75, zIndex:3, pointerEvents:'none', whiteSpace:'nowrap',
          animation:`float-up ${5+i*.5}s ease-in-out infinite`,
          animationDelay:`${i*.4}s`,
        }}>{l.text}</div>
      ))}

      <motion.h2
        initial={{ opacity:0, scale:.75, rotate:5 }}
        animate={inView ? { opacity:1, scale:1, rotate:3 } : {}}
        transition={{ duration:.8 }}
        style={{
          fontFamily:"'Anton SC',sans-serif",
          fontSize:'clamp(4rem,12vw,10rem)',
          color:'#fff',
          textAlign:'center',
          lineHeight:.85,
          marginBottom:'3rem',
          display:'block',
          position:'relative', zIndex:2,
          textShadow:'3px 4px 0 rgba(0,0,0,.25)',
        }}
      >
        THE VIBE ✦
      </motion.h2>

      <div style={{
        columns:'4 220px', columnGap:'1.5rem',
        maxWidth:'1100px', margin:'0 auto',
        position:'relative', zIndex:2,
      }}>
        {TILES.map((tile,i)=>(
          <motion.div
            key={i}
            initial={{ opacity:0, y:50 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:.6, delay:i*.08 }}
            style={{ breakInside:'avoid', marginBottom:'1.5rem' }}
          >
            <TileContent tile={tile}/>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
