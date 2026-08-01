import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about-dot reveal">·</div>
        <div className="about-grid">
          <div className="about-left reveal">
            <h2 className="about-heading">关于我</h2>
            <p className="about-sub">about <span className="about-dash">——</span></p>
            <div className="about-paras">
              <p>
                希望通过观察与摄影，让自己的重要之人或物、以及对他人而言重要的事物更加闪耀。
              </p>
              <p>我希望自己能成为永远不忘记兴奋感的成年人。</p>
              <p>好奇心旺盛、正直且认真稳重。</p>
            </div>
          </div>
          <div className="about-right reveal">
            <a className="about-profile-link" href="#contact">
              my profile
            </a>
            <div className="about-image-square">
              <img
                src="/about-portrait.jpg"
                alt="Portrait"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
