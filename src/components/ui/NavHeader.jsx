import React from 'react'
import { useScroll } from './use-scroll'
import { MenuToggleIcon } from './menu-toggle-icon'
import logo from '../../assets/logo.png'

const LINKS = [
  { label: 'Invitation', href: '#invitation' },
  { label: 'Details',    href: '#details'    },
  { label: 'The Vibe',   href: '#dress-code' },
  { label: 'Countdown',  href: '#countdown'  },
]

function handleNav(e, href) {
  e.preventDefault()
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  if (id === 'invitation') {
    // Center the container in the viewport → scrollYProgress = 0.5 (flat zone)
    const elTop = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: elTop + el.offsetHeight / 2 - window.innerHeight / 2, behavior: 'smooth' })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function NavHeader() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/*
        Outer wrapper: siempre full-width y fixed.
        Se encarga solo del posicionamiento vertical y del padding lateral.
        Cuando scrolled, añade padding para que el inner "flote" separado de los bordes.
      */}
      <div style={{
        position: 'fixed',
        top: scrolled && !open ? '12px' : '0',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: scrolled && !open ? '0 1rem' : '0',
        transition: 'top .4s ease, padding .4s ease',
        pointerEvents: 'none',
      }}>
        {/*
          Inner pill: aquí están el fondo, el blur, el border-radius y el ancho máximo.
          La transición de max-width + border-radius crea el efecto "se ovalan las esquinas y flota".
        */}
        <header style={{
          width: '100%',
          maxWidth: scrolled && !open ? '960px' : '100%',
          background: open
            ? 'rgba(139, 0, 64, 0.97)'
            : scrolled
              ? 'rgba(255, 31, 143, 0.28)'
              : 'rgba(255, 143, 200, 0.10)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: scrolled && !open ? '14px' : '0px',
          border: '1px solid',
          borderColor: scrolled && !open
            ? 'rgba(255, 31, 143, .35)'
            : open
              ? 'transparent'
              : 'rgba(255, 31, 143, .15)',
          boxShadow: scrolled && !open
            ? '0 4px 28px rgba(0,0,0,.3), 0 1px 0 rgba(255,255,255,.05) inset'
            : 'none',
          transition: 'max-width .4s ease, border-radius .4s ease, background .35s ease, box-shadow .4s ease, border-color .35s ease',
          pointerEvents: 'all',
        }}>
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled && !open ? '0 1rem' : '0 1.5rem',
            height: scrolled && !open ? '48px' : '56px',
            transition: 'height .4s ease, padding .4s ease',
          }}>

            {/* Logo */}
            <a href="#" onClick={close} style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
              <img
                src={logo}
                alt="Fiama's Disco"
                style={{
                  height: scrolled && !open ? '28px' : '32px',
                  width: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(1px 1px 0 rgba(0,0,0,.3))',
                  transition: 'height .4s ease',
                }}
              />
            </a>

            {/* Desktop links */}
            <div style={{ display:'flex', alignItems:'center', gap:'.25rem' }}
              className="hidden md:flex"
            >
              {LINKS.map(link => (
                <NavLink key={link.label} href={link.href} onClick={e => handleNav(e, link.href)}>{link.label}</NavLink>
              ))}
              <RSVPButton />
            </div>

            {/* Hamburger mobile */}
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              style={{
                display:'flex', alignItems:'center', justifyContent:'center',
                width:'40px', height:'40px',
                background:'rgba(255,255,255,.12)',
                border:'1px solid rgba(255,255,255,.25)',
                borderRadius:'8px',
                cursor:'pointer',
                color:'#fff',
                flexShrink:0,
              }}
              className="md:hidden"
            >
              <MenuToggleIcon open={open} style={{ width:'20px', height:'20px' }} duration={300} />
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile overlay */}
      <div
        style={{
          position:'fixed',
          top:'56px', left:0, right:0, bottom:0,
          background:'rgba(139, 0, 64, 0.97)',
          backdropFilter:'blur(18px)',
          WebkitBackdropFilter:'blur(18px)',
          zIndex:999,
          display:'flex', flexDirection:'column',
          padding:'1.5rem',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          transition:'opacity .25s ease, transform .25s ease',
        }}
        className="md:hidden"
      >
        {LINKS.map(link => (
          <a key={link.label} href={link.href}
            onClick={e => { handleNav(e, link.href); close() }}
            style={{
              fontFamily:"'Space Grotesk', sans-serif",
              fontSize:'1.15rem', fontWeight:600,
              color:'#fff', textDecoration:'none',
              padding:'1rem 0',
              borderBottom:'1px solid rgba(255,255,255,.12)',
              letterSpacing:'.04em',
            }}
          >{link.label}</a>
        ))}
        <a href="#rsvp" onClick={close}
          style={{
            fontFamily:"'Anton SC', sans-serif",
            fontSize:'1.4rem',
            color:'#FF8FC8',
            textDecoration:'none',
            padding:'1rem 0',
            letterSpacing:'.06em',
          }}
        >RSVP ✦</a>
      </div>
    </>
  )
}

function NavLink({ href, onClick, children }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <a href={href} onClick={onClick}
      style={{
        fontFamily:"'Space Grotesk', sans-serif",
        fontSize:'.85rem', fontWeight:600,
        color:'#fff', textDecoration:'none',
        padding:'.4rem .85rem', borderRadius:'6px',
        background: hovered ? 'rgba(255,255,255,.14)' : 'transparent',
        transition:'background .2s',
        letterSpacing:'.02em',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >{children}</a>
  )
}

function RSVPButton() {
  const [hovered, setHovered] = React.useState(false)
  return (
    <a href="#rsvp"
      style={{
        fontFamily:"'Anton SC', sans-serif",
        fontSize:'.9rem', letterSpacing:'.06em',
        color:'#fff', textDecoration:'none',
        padding:'.45rem 1.3rem', borderRadius:'6px',
        background:'#FF1F8F',
        boxShadow: hovered ? '2px 4px 0 #8B0040' : '2px 3px 0 #8B0040',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        transition:'transform .15s, box-shadow .15s',
        marginLeft:'.5rem',
        display:'inline-block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >RSVP</a>
  )
}
