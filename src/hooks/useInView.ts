import { useEffect, useRef, useState } from 'react'

/**
 * Observes an element and reports when it enters the viewport.
 * Disconnects after the first intersection (reveals only once).
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
