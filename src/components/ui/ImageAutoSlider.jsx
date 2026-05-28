import React from 'react'

import img1  from '../../assets/dress code/1.jpg'
import img2  from '../../assets/dress code/2.jpg'
import img3  from '../../assets/dress code/3.jpg'
import img4  from '../../assets/dress code/4.jpg'
import img5  from '../../assets/dress code/5.jpg'
import img6  from '../../assets/dress code/6.jpg'
import img7  from '../../assets/dress code/7.jpg'
import img8  from '../../assets/dress code/8.jpg'
import img9  from '../../assets/dress code/9.jpg'
import img10 from '../../assets/dress code/10.jpg'
import img11 from '../../assets/dress code/11.jpg'
import img12 from '../../assets/dress code/12.jpg'
import img13 from '../../assets/dress code/13.jpg'
import img14 from '../../assets/dress code/14.jpg'
import img15 from '../../assets/dress code/15.jpg'
import img16 from '../../assets/dress code/16.jpg'
import img17 from '../../assets/dress code/17.jpg'
import img18 from '../../assets/dress code/18.jpg'

const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const IMAGES = shuffle([
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
])

function Lightbox({ src, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,0,24,.92)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out',
        animation: 'lb-in .2s ease',
      }}
    >
      <style>{`
        @keyframes lb-in { from { opacity:0; } to { opacity:1; } }
        @keyframes lb-img-in { from { transform:scale(.88); opacity:0; } to { transform:scale(1); opacity:1; } }
      `}</style>
      <img
        src={src}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '90vh',
          objectFit: 'contain', borderRadius: '12px',
          boxShadow: '0 0 60px rgba(255,31,143,.4), 0 20px 60px rgba(0,0,0,.7)',
          border: '2px solid rgba(255,31,143,.5)',
          animation: 'lb-img-in .25s ease',
          cursor: 'default',
        }}
        alt="Vibe inspo"
      />
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '1.2rem', right: '1.4rem',
          background: 'rgba(255,31,143,.25)', border: '1px solid rgba(255,31,143,.5)',
          borderRadius: '50%', width: '40px', height: '40px',
          color: '#fff', fontSize: '1.2rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        aria-label="Cerrar"
      >✕</button>
    </div>
  )
}

export function ImageAutoSlider({ speed = 36 }) {
  const [lightbox, setLightbox] = React.useState(null)
  const doubled = [...IMAGES, ...IMAGES]

  return (
    <>
      <style>{`
        @keyframes slider-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slider-track { animation: slider-scroll ${speed}s linear infinite; }
        .slider-track:hover { animation-play-state: paused; }
        .slider-mask {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .slider-item { transition: transform .3s ease, box-shadow .3s ease; cursor: zoom-in; }
        .slider-item:hover { transform: scale(1.04); box-shadow: 0 12px 40px rgba(255,31,143,.55); }
      `}</style>

      <div className="slider-mask w-full overflow-hidden">
        <div className="slider-track flex gap-5 w-max">
          {doubled.map((src, i) => (
            <div
              key={i}
              className="slider-item flex-shrink-0 rounded-xl overflow-hidden"
              style={{
                width: '240px', height: '360px',
                border: '2px solid rgba(255,31,143,.35)',
                boxShadow: '0 4px 20px rgba(0,0,0,.4)',
              }}
              onClick={() => setLightbox(IMAGES[i % IMAGES.length])}
            >
              <img
                src={src}
                alt={`Vibe inspo ${(i % IMAGES.length) + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </>
  )
}
