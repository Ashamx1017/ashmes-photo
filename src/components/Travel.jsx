import { useReveal } from '../hooks/useReveal'

export default function Travel() {
  const ref = useReveal()

  const trips = [
    {
      img: 'https://images.unsplash.com/photo-1500521270688-4ed176d1404e?w=800&q=85',
      date: '2025.04',
      desc: '在哲学之道买的樱花明信片。',
    },
    {
      img: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=800&q=85',
      date: '2025.02',
      desc: '结论，两晚三天远远不够。 （台北/台湾）',
    },
    {
      img: 'https://images.unsplash.com/photo-1507498480-f9a4f7b1e2fa?w=800&q=85',
      date: '2025.01',
      desc: '在令人心驰神往的杂货天堂购物。 （台北/台湾）',
    },
    {
      img: 'https://images.unsplash.com/photo-1488554733961-5865f17abd2d?w=800&q=85',
      date: '2024.12',
      desc: '我和最好的朋友时隔三年九个月的第一次出国旅行，就会在当地集合。 （台北/台湾）',
    },
  ]

  return (
    <section className="section travel" id="travel" ref={ref}>
      <div className="container">
        <div className="travel-header reveal">
          <h2>旅行日记</h2>
          <span className="travel-sub">一个有趣的旅行日记更新</span>
        </div>
        <div className="travel-grid reveal">
          {trips.map((t, i) => (
            <div className="travel-item" key={i}>
              <div className="travel-item-img">
                <img src={t.img} alt={`travel ${i + 1}`} loading="lazy" />
              </div>
              <p className="travel-date">{t.date}</p>
              <p className="travel-desc">{t.desc}</p>
            </div>
          ))}
        </div>
        <a className="travel-view-all reveal" href="#travel">全视角</a>
      </div>
    </section>
  )
}