import { useReveal } from '../hooks/useReveal'

export default function Pricing() {
  const ref = useReveal()

  const plans = [
    {
      name: '基础版',
      price: '¥599',
      duration: '约 1.5 小时',
      features: ['精修 9 张', '原片全送', '1 个拍摄场景', '线上选片', '交付周期 7 天'],
    },
    {
      name: '高级版',
      price: '¥999',
      duration: '约 3 小时',
      features: ['精修 25 张', '原片全送', '2 个拍摄场景', '线上选片', '交付周期 10 天', '可加印相册'],
      featured: true,
    },
    {
      name: '写真集',
      price: '¥1,680',
      duration: '全天 / 或分两次拍摄',
      features: ['精修 36 张', '原片全送', '拍摄场景不限', '线上选片', '交付周期 20 天', '赠送精美排版相册'],
    },
    {
      name: '商业 / 活动',
      price: '面议',
      duration: '按项目定制',
      features: ['精修数量面议', '交付周期面议', '原片全送', '团队协作', '商业授权', '线上选片'],
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
              {plan.featured && <span className="pricing-badge">推荐</span>}
              <h3 className="pricing-name">{plan.name}</h3>
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
