export default function RSVP() {
  return (
    <section
      id="rsvp"
      style={{
        position: 'relative',
        padding: '5rem 2rem',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{
        fontFamily: "'Anton SC', sans-serif",
        fontSize: 'clamp(2rem,5vw,4rem)',
        color: '#8B0040',
        textAlign: 'center',
        marginBottom: '2.5rem',
        textShadow: '2px 3px 0 rgba(255,255,255,.3)',
        letterSpacing: '.06em',
      }}>
        RSVP ✦
      </h2>

      <div style={{
        width: '100%',
        maxWidth: '660px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(139,0,64,.25)',
        border: '2px solid rgba(255,31,143,.25)',
      }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScviWJG1iGTFBhmgRQHiCJOBxYX26vlq7p7o67PujLEBMg8ug/viewform?embedded=true"
          width="100%"
          height="1168"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ display: 'block' }}
          title="RSVP Form"
        >
          Cargando…
        </iframe>
      </div>
    </section>
  )
}
