import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const heroImages = [
  { src: '/hero-picnic.jpg', alt: '野餐' },
  { src: '/hero-1.jpg', alt: '逆光人像' },
  { src: '/hero-portrait.jpg', alt: '人像' },
  { src: '/hero-2.jpg', alt: '民族风' },
  { src: '/hero-3.jpg', alt: '夕阳羊群' },
]

export default function Hero() {
  const ref = useReveal()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" ref={ref}>
      <div className="hero-image-frame reveal">
        <div className="hero-image-stage">
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`hero-image ${i === current ? 'active' : ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="hero-indicators">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`hero-indicator ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`切换到第 ${i + 1} 张`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-meta">
        <p className="hero-meta-desc reveal">
          Chen Shisan / Portrait Photographer / Film and Digital / Mood and Story and more...
        </p>
        <div className="hero-meta-tags">
          <button className="hero-tag-link reveal" onClick={() => {
            const el = document.getElementById('works')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}>
            <span>all view</span>
          </button>
        </div>
      </div>
    </section>
  )
}
