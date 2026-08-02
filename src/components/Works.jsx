import { useReveal } from '../hooks/useReveal'

export default function Works() {
  const ref = useReveal()

  // 顺序打乱:横图分散在首尾(位置 1 / 位置 10),8 张竖图穿插中间
  // 原序:1=1.jpg(竖) / 2=微信图片(竖) / 3=CXR02806(横) / 4=CXR06535(竖) /
  //      5=CXR07323(竖) / 6=CXR08288(横) / 7=DSC00297(竖) / 8=DSC02982(竖) /
  //      9=IMG_6907(竖) / 10=R0001718(竖)
  // 新序:[3, 7, 2, 10, 5, 1, 8, 4, 9, 6] → 横图在 #1 和 #10
  const works = [
    { img: `${import.meta.env.BASE_URL}works/CXR02806.jpg` },
    { img: `${import.meta.env.BASE_URL}works/DSC00297.jpg` },
    { img: `${import.meta.env.BASE_URL}works/微信图片_20260618203506_1210_999.jpg` },
    { img: `${import.meta.env.BASE_URL}works/R0001718.jpg` },
    { img: `${import.meta.env.BASE_URL}works/CXR07323.jpg` },
    { img: `${import.meta.env.BASE_URL}works/1.jpg` },
    { img: `${import.meta.env.BASE_URL}works/DSC02982.jpg` },
    { img: `${import.meta.env.BASE_URL}works/CXR06535.jpg` },
    { img: `${import.meta.env.BASE_URL}works/IMG_6907.jpg` },
    { img: `${import.meta.env.BASE_URL}works/CXR08288.jpg` },
  ]

  return (
    <section className="section works" id="work" ref={ref}>
      <div className="container">
        <div className="works-header reveal">
          <h2>我的作品</h2>
        </div>
        <div className="works-masonry reveal">
          {works.map((w, i) => (
            <div className="works-item" key={i}>
              <div className="works-item-img-wrap">
                <img src={w.img} alt="" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
