import { useReveal } from '../hooks/useReveal'

export default function Works() {
  const ref = useReveal()

  const works = [
    {
      img: `${import.meta.env.BASE_URL}works/(52).jpg`,
      title: '一碗面',
      tag: '街拍 | 2025',
      desc: '她靠在门框上吃泡面,门里头亮着灯。风吹过来,带着点味精的香味。她歪头往里看了一眼,我也跟着看了一眼——什么都没有,就亮着。快门按下去的时候,我想,这才是夏天该有的样子。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/DSC04561.jpg`,
      title: '灯下',
      tag: '人像 | 2025',
      desc: '她又坐了那个老位置,趴着,灯把整张脸照亮。墙上那些杯子是她一只只攒回来的,我数过,数到一半就忘了。有回问她最喜欢哪只,她没答,只是笑。大概她也不在意哪一只,在意的是攒的时候去过的地方。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/DSC03037.jpg`,
      title: '叶隙的光',
      tag: '人像 | 2025',
      desc: '太阳从树叶缝里漏下来,落在她脸上。她闭着眼,像在听什么。我举着相机等了一会儿。等什么呢,也说不清。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/CXR08533.jpg`,
      title: '雪山脚',
      tag: '旅拍 | 2025',
      desc: '她在雪山脚下站着,马在旁边低头吃草。风把头发吹乱了,她也不管。我们谁都没说话。照片洗出来,我才看见她眼睛里全是雪的反光。',
    },
    {
      img: `${import.meta.env.BASE_URL}works/CXR09371.jpg`,
      title: '挑杯子',
      tag: '街拍 | 2025',
      desc: '她在巷口蹲了很久,看地上摆的一排杯子。我问挑好了没,她说再看看。摊主都懒得理我们了。最后她拿起一只,不算好看,但握在手里刚好。',
    },
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
                <img src={w.img} alt={w.title} loading="lazy" />
              </div>
              <div className="works-item-meta">
                <span className="works-item-num">0{i + 1}</span>
                <h3 className="works-item-title">{w.title}</h3>
                <span className="works-item-tag">{w.tag}</span>
              </div>
              <p className="works-item-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
