import { useReveal } from '../hooks/useReveal'

export default function Social() {
  const ref = useReveal()

  const items = [
    'https://images.unsplash.com/photo-1490474822-6464-14ee6934d43a?w=500&q=80',
    'https://images.unsplash.com/photo-1507563833786-cfcbe99a8d56?w=500&q=80',
    'https://images.unsplash.com/photo-1455213901c61a4c83b3a4f7c?w=500&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
    'https://images.unsplash.com/photo-1511285560929-5b129ac20c57?w=500&q=80',
    'https://images.unsplash.com/photo-1500521270688-4ed176d1404e?w=500&q=80',
    'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=500&q=80',
    'https://images.unsplash.com/photo-1507498480-f9a4f7b1e2fa?w=500&q=80',
    'https://images.unsplash.com/photo-1488554733961-5865f17abd2d?w=500&q=80',
    'https://images.unsplash.com/photo-1496122616780-9f3f1e0f1d33?w=500&q=80',
    'https://images.unsplash.com/photo-1454162535304-5b1e9e6e1c12?w=500&q=80',
  ]

  return (
    <section className="section social" ref={ref}>
      <div className="container">
        <div className="social-header reveal">
          <h2>douyin</h2>
          <span className="social-sub">douyin</span>
        </div>
        <div className="social-grid reveal">
          {items.map((src, i) => (
            <a
              key={i}
              href="https://v.douyin.com/ZqV-bMH9neg/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={src} alt={`douyin ${i + 1}`} loading="lazy" />
              <div className="social-item-overlay">
                <span>点击观看</span>
              </div>
            </a>
          ))}
        </div>
        <a className="social-follow reveal" href="https://v.douyin.com/ZqV-bMH9neg/" target="_blank" rel="noopener noreferrer">
          关注 @Ashmes
</a>
      </div>
    </section>
  )
}