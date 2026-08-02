import { useReveal } from '../hooks/useReveal'

export default function Social() {
  const ref = useReveal()

  const items = [
    {
      img: `${import.meta.env.BASE_URL}social/CXR05880.jpg`,
      link: 'https://v.douyin.com/sfNWJYzfXVI/',
    },
    {
      img: `${import.meta.env.BASE_URL}social/douyin-2.jpg`,
      link: 'https://v.douyin.com/Bkz0xkyaJ64/',
    },
    {
      img: `${import.meta.env.BASE_URL}social/Clipboard_Screenshot.png`,
      link: 'https://v.douyin.com/mWAclOR5pO8/',
    },
    {
      img: `${import.meta.env.BASE_URL}social/Clipboard_Screenshot_water.png`,
      link: 'https://v.douyin.com/T1o8iMvJIqI/',
    },
    {
      img: `${import.meta.env.BASE_URL}social/52bc569dacc7fe94c0c48711032b027f.jpg`,
      link: 'https://v.douyin.com/Fd_ab0ImsMs/',
    },
    {
      img: `${import.meta.env.BASE_URL}social/Clipboard_Screenshot-1.png`,
      link: 'https://v.douyin.com/B0gBKQ8PI2Q/',
    },
  ]

  return (
    <section className="section social" ref={ref}>
      <div className="container">
        <div className="social-header reveal">
          <h2>社交媒体</h2>
          <span className="social-sub">Social Media</span>
        </div>
        <div className="social-grid reveal">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={item.img} alt={`社交媒体 ${i + 1}`} loading="lazy" />
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
