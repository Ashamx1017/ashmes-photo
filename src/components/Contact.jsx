import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  const navItems = [
    { label: '关于', target: 'about' },
    { label: '工作', target: 'work' },
    { label: '照片', target: 'photography' },
    { label: '旅行', target: 'travel' },
  ]

  const scrollTo = (target) => {
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          <h2 className="contact-title reveal">联系方式</h2>

          <div className="contact-card reveal">
            <button className="contact-btn" onClick={() => window.location.href = 'mailto:hello@asmax.photo'}>
              点击这里联系我们
            </button>
            <p className="contact-desc">
              无论是合作委托、照片拍摄咨询，还是<br/>
              类似的事情，为什么不一起试试呢？欢迎随时联系我。<br/>
              期待您的垂询。
            </p>
          </div>

          <div className="contact-bottom reveal">
            <div className="contact-logo">A</div>
            <div className="contact-nav">
              <ul className="contact-nav-list">
                {navItems.map((item) => (
                  <li key={item.target}>
                    <button onClick={() => scrollTo(item.target)}>{item.label}</button>
                  </li>
                ))}
              </ul>
              <div className="contact-social">
                <a href="https://v.douyin.com/ZqV-bMH9neg/" target="_blank" rel="noopener noreferrer">抖音</a>
                <span>/</span>
                <a href="https://www.xiaohongshu.com" target="_blank" rel="noopener noreferrer">小红书</a>
                <span>/</span>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-copyright reveal">
            <span>版权所有 © 2025 Ashmes Photo. 保留所有权利。</span>
          </div>
        </div>
      </div>
    </section>
  )
}