import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Works() {
  const ref = useReveal()

  const works = [
    {
      img: 'https://images.unsplash.com/photo-1490474822-6464-14ee6934d43a?w=1600&q=85',
      title: '黄昏的告白',
      tag: '人像 | 2025',
      desc: '夕阳将最后的温柔洒向她的侧脸。那一刻风停了，世界安静得只剩快门声。我想记住的不是她的样子，而是她看着远方时眼里那种淡淡的期待。',
    },
    {
      img: 'https://images.unsplash.com/photo-1507563833786-cfcbe99a8d56?w=1600&q=85',
      title: '海边的人',
      tag: '胶片 | 2025',
      desc: '他说想拍一组有距离感的照片。我们去了海边，风很大，他站在礁石上看着海浪一遍遍涌来。胶片的颗粒感让一切变得像记忆——不那么清晰，却格外真实。',
    },
    {
      img: 'https://images.unsplash.com/photo-1455213901c61a4c83b3a4f7c?w=1600&q=85',
      title: '老街的光',
      tag: '街拍 | 2024',
      desc: '下午四点的老街，光从屋檐的缝隙里漏下来，在地面上画出一条条金线。她走过去的时候，影子被拉得很长。我按下快门的时候想，有些美就是转瞬即逝的。',
    },
    {
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=85',
      title: '冬日的窗',
      tag: '人像 | 2024',
      desc: '冬天的光是最好的滤镜。她坐在窗边，暖阳透过纱帘打在她身上，整个人像被包裹在一层柔和的琥珀色里。不需要任何修图，那一刻本身就已经是一幅画。',
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