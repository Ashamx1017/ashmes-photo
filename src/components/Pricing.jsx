import { useReveal } from '../hooks/useReveal'

export default function Pricing() {
  const ref = useReveal()

  const plans = [
    {
      name: '轻写真',
      subtitle: '日常记录 / 形象照',
      price: '¥599',
      duration: '约 1.5 小时',
      features: ['精修 9 张', '含前期策划沟通', '送有效原片', '1 个拍摄场景', '线上选片', '交付周期 7 天'],
    },
    {
      name: '故事集',
      subtitle: '个人写真 / 情侣纪念 / 闺蜜合拍',
      price: '¥999',
      duration: '约 3 小时',
      features: ['精修 25 张', '含前期策划沟通', '送有效原片', '2 个拍摄场景', '交付周期 10 天', '花絮赠送', '可加印相册'],
      featured: true,
    },
    {
      name: '全记录',
      subtitle: '个人纪实 / 旅拍 / 家庭',
      price: '¥1,680',
      duration: '全天 / 或分两次拍摄',
      features: ['精修 40 张', '含前期策划沟通', '送有效原片', '拍摄场景不限', '交付周期 20 天', '花絮赠送', '赠送精美排版相册'],
    },
  ]

  return (
    <section className="section pricing" id="pricing" ref={ref}>
      <div className="container">
        <div className="pricing-header reveal">
          <p className="section-label">套餐定价</p>
          <h2 className="pricing-title">选择适合你的方案</h2>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card reveal ${plan.featured ? 'pricing-card-featured' : ''}`} key={i}>
              {plan.featured && <span className="pricing-badge">最受欢迎</span>}
              <h3 className="pricing-name">{plan.name}</h3>
              {plan.subtitle && <p className="pricing-subtitle">{plan.subtitle}</p>}
              <p className="pricing-price">{plan.price}</p>
              <p className="pricing-duration">{plan.duration}</p>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button className="pricing-btn" onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}>
                咨询预约
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
