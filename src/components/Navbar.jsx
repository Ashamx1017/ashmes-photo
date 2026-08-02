import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: '关于', target: 'about' },
    { label: '工作', target: 'works' },
    { label: '照片', target: 'photography' },
    { label: '旅行', target: 'travel' },
    { label: '联系方式', target: 'contact', accent: true },
  ]

  const handleClick = (target) => {
    setMenuOpen(false)
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <h1 className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ashmes<span className="nav-logo-dot"></span>
          </h1>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.target}>
                <button
                  className={item.accent ? 'nav-contact' : ''}
                  onClick={() => handleClick(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        {navItems.map((item) => (
          <button key={item.target} onClick={() => handleClick(item.target)}>
            {item.label}
          </button>
        ))}
      </div>
    </>
  )
}