import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Works() {
  const ref = useReveal()

  const works = [
    {
      img: `${import.meta.env.BASE_URL}works/CXR07724.jpg`,
      title: '旷野之风',
      tag: '胶片 | 2025',
      desc: '倾注心意，记录下“稍显特别、总是如此”的瞬间。希望拍摄者和被拍摄者都能够感受到拍摄本身是一个成为美好回忆的瞬间。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/CXR058802.jpg`,
      title: '自然的生命状态',
      tag: '人像 | 2025',
      desc: '她闭着眼，马安静地站在身旁。风吹过发梢的瞬间我按下了快门。人和生灵的相处从来不靠语言，自然本身就是最好的状态。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/CXR08593_副本.jpg`,
      title: '群山记得',
      tag: '胶片 | 2025',
      desc: '牦牛记得草原的每一场风，群山记得她们。阳光把她们镀成金色，像是被时间托举起来的一部分。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/(88)-2.jpg`,
      title: '夏天',
      tag: '人像 | 2025',
      desc: '蓝色和橙色已经把她定格成一段永远年轻的注脚，拍摄本身就是让这一刻活成了值得回忆的事。',
    },
  ]

  const [active, setActive] = useState(0)
  const total = works.length

  const next = () => setActive((active + 1) % total)
  const prev = () => setActive((active - 1 + total) % total)

  const current = works[active]

  return (
    <section className="section works" id="work" ref={ref}>
      <div className="container">
        <div className="works-header reveal">
          <h2>我的作品</h2>
        </div>

        <div className="works-carousel reveal">
          <div className="works-image-wrap">
            <img src={current.img} alt={current.title} loading="lazy" />
          </div>
          <button className="works-arrow works-arrow-left" onClick={prev} aria-label="上一个">
            ‹
          </button>
          <button className="works-arrow works-arrow-right" onClick={next} aria-label="下一个">
            ›
          </button>
        </div>

        <div className="works-meta reveal">
          <div className="works-num">
            <span>0{active + 1}</span>
            <span className="works-num-sep">/</span>
          </div>
          <div className="works-title-name">{current.title}</div>
          <div className="works-tag">{current.tag} →</div>
        </div>

        <div className="works-body reveal">
          <p className="works-desc">{current.desc}</p>
          <a className="works-view-all" href="#work">全视角</a>
        </div>
      </div>
    </section>
  )
}