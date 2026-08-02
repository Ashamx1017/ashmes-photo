import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

export default function Contact() {
  const ref = useReveal()
  const [showQR, setShowQR] = useState(false)

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
            <button className="contact-btn" onClick={() => setShowQR(true)}>
              点击这里联系我
            </button>
            <p className="contact-desc">
              无论是合作委托、照片拍摄咨询，还是<br/>
              类似的事情，为什么不一起试试呢？欢迎随时联系我。<br/>
              期待您的垂询。
            </p>
            <p className="contact-business">
              商业合作 / 活动拍摄请直接联系，详情面议。
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

      {showQR && (
        <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <button className="qr-modal-close" onClick={() => setShowQR(false)} aria-label="关闭">×</button>
            <img src={`${BASE}wechat-qr.jpg`} alt="微信二维码" className="qr-modal-img" />
            <p className="qr-modal-tip">扫码添加微信</p>
            <p className="qr-modal-note">请注明「拍摄咨询」</p>
          </div>
        </div>
      )}
    </section>
  )
}