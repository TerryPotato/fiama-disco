import ticket from '../assets/ticket.png'
import { ContainerScroll } from './ui/ContainerScrollAnimation'

export default function CartelScroll() {
  return (
    <div id="invitation" style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)', overflow: 'hidden' }}>
      <ContainerScroll
        titleComponent={
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '.75rem',
            fontWeight: 700,
            letterSpacing: '.2em',
            color: '#8B0040',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            opacity: .8,
          }}>
            ✦ Scroll down ✦
          </p>
        }
      >
        {/* Ticket image + download button */}
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={ticket}
            alt="Fiama's Birthday Disco — ticket"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
            draggable={false}
          />
          {/* Download button — bottom-right overlay */}
          <a
            href={ticket}
            download="fiamas-disco-ticket.png"
            style={{
              position: 'absolute',
              bottom: '1.2rem',
              right: '1.2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.45rem',
              padding: '.55rem 1.2rem',
              background: '#FF1F8F',
              border: '2px solid rgba(255,255,255,.3)',
              borderRadius: '999px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '.82rem',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '.04em',
              boxShadow: '2px 3px 0 #8B0040, 0 8px 24px rgba(0,0,0,.4)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              transition: 'transform .15s, box-shadow .15s',
              zIndex: 10,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '3px 5px 0 #8B0040, 0 12px 28px rgba(0,0,0,.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';   e.currentTarget.style.boxShadow = '2px 3px 0 #8B0040, 0 8px 24px rgba(0,0,0,.4)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar ticket
          </a>
        </div>
      </ContainerScroll>
    </div>
  )
}
