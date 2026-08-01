import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const items = el.querySelectorAll('.reveal')
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.08}s`
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
