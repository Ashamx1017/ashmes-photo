import { useReveal } from '../hooks/useReveal'

export default function Travel() {
  const ref = useReveal()
  const base = import.meta.env.BASE_URL

  const trips = [
    {
      img: `${base}travel/微信图片_20260802195824_115_1365.jpg`,
      date: '2023.10',
      desc: '第一次去到海边。\n（福建/平潭）',
    },
    {
      img: `${base}travel/Clipboard_Screenshot.png`,
      date: '2024.3',
      desc: '总之，两晚三天远远不够。\n（台北/台湾）',
    },
    {
      img: `${base}travel/8d6c2f03de98d5af5d5e645414abf442.JPG`,
      date: '2026.01',
      desc: '一次愉快的拍摄，认识了许多新朋友。\n（湖南/长沙）',
    },
    {
      img: `${base}travel/Clipboard_Screenshot-1.png`,
      date: '2025.11',
      desc: '那真的是一家阳光明媚的旅馆。它和Cinestill完美搭配。\n（云南/大理）',
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
