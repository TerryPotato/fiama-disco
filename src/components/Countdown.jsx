import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TARGET = new Date('2025-06-28T21:00:00')

function getTimeLeft() {
  const diff = TARGET - new Date()
  if (diff <= 0) return { days:0, hrs:0, min:0, sec:0 }
  return {
    days: Math.floor(diff / 86400000),
    hrs:  Math.floor((diff % 86400000) / 3600000),
    min:  Math.floor((diff % 3600000) / 60000),
    sec:  Math.floor((diff % 60000) / 1000),
  }
}

function DigitBlock({ value, label, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity:0, y:40 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:.7, delay, type:'spring' }}
      style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.7rem' }}
    >
      <div style={{
        background: 'rgba(139, 0, 64, 0.72)',
        border: '3px solid rgba(255,31,143,.6)',
        borderRadius: '14px',
        padding: '1.8rem 2rem',
        minWidth: '120px',
        textAlign: 'center',
        boxShadow: '4px 6px 0 rgba(139,0,64,.8), 0 16px 40px rgba(0,0,0,.35)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 'clamp(3rem,6vw,5rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1,
          display: 'block',
          letterSpacing: '.04em',
          textShadow: '0 2px 12px rgba(255,31,143,.5)',
        }}>
          {String(value).padStart(2,'0')}
        </span>
      </div>
      <span style={{
        fontFamily: "'Anton SC',sans-serif",
        fontSize: '.75rem', fontWeight:400,
        letterSpacing: '.25em', color: '#8B0040',
        textTransform: 'uppercase',
        opacity: .9,
      }}>{label}</span>
    </motion.div>
  )
}

function Colon({ blink = false }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono'",
      fontSize: 'clamp(3rem,6vw,5rem)',
      color: '#8B0040',
      paddingBottom: '2.6rem',
      fontWeight: 700,
      opacity: .7,
      animation: blink ? 'digit-blink 1s step-start infinite' : 'none',
    }}>:</span>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)
  const { ref, inView } = useInView({ triggerOnce:true, threshold:.12 })

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="countdown"
      ref={ref}
      style={{
        position: 'relative',
        padding: '8rem 2rem',
        overflow: 'hidden',
        minHeight: '560px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      }}
    >

      <div style={{ position:'relative', zIndex:2, width:'100%', maxWidth:'960px', margin:'0 auto', padding: '0 2rem' }}>
        <motion.h2
          initial={{ opacity:0, y:40 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:.7 }}
          style={{
            fontFamily: "'Anton SC',sans-serif",
            fontSize: 'clamp(1.8rem,4vw,3.2rem)',
            color: '#8B0040',
            textAlign: 'center',
            marginBottom: '2.5rem',
            display: 'block',
            textShadow: '1px 2px 0 rgba(255,255,255,.4)',
            letterSpacing: '.06em',
          }}
        >
          TIME UNTIL THE DROP
        </motion.h2>

        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'.6rem', flexWrap:'nowrap' }}>
          <DigitBlock value={time.days} label="DAYS" inView={inView} delay={.2}/>
          <Colon />
          <DigitBlock value={time.hrs}  label="HRS"  inView={inView} delay={.35}/>
          <Colon blink />
          <DigitBlock value={time.min}  label="MIN"  inView={inView} delay={.5}/>
          <Colon blink />
          <DigitBlock value={time.sec}  label="SEC"  inView={inView} delay={.65}/>
        </div>
      </div>
    </section>
  )
}
