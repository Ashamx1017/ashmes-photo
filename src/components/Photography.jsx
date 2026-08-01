import { useReveal } from '../hooks/useReveal'

const base = import.meta.env.BASE_URL

export default function Photography() {
  const ref = useReveal()

  const photos = [
    `${base}photo-1.jpg`,
    `${base}photo-2.jpg`,
    `${base}photo-3.jpg`,
  ]

  return (
    <section className="section photography" id="photography" ref={ref}>
      <div className="container">
        <div className="photo-top reveal">
          <div className="photo-divider" />
          <h2 className="photo-title">拍照</h2>
        </div>

        <p className="photo-en-label reveal" style={{ display: 'none' }}>photograph</p>

        <div className="photo-cards reveal">
          <p className="photo-en-tag">photograph</p>
          {photos.map((src, i) => (
            <div className="photo-card" key={i}>
              <div className="photo-card-img">
                <img src={src} alt={`photo ${i + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="photo-footer reveal">
          <p className="photo-desc">
            我用<span className="highlight">胶片</span>和<span className="highlight">数码相机</span>拍照。<br/>
            我专注于拍摄<span className="highlight">光线、故事氛围</span>，以及传达日常生活四季和旅行的作品。<br/>
            欢迎随时咨询：旅游景点或住宿的推广项目，或特殊的家庭 / 个人 / 合照拍摄。
          </p>
          <a className="photo-more-link" href="#contact">view more</a>
        </div>
      </div>
    </section>
  )
}