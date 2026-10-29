import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Extra transition delay in milliseconds, for staggered cards. */
  delay?: number
}

/**
 * Fade-and-rise scroll animation. Children animate in the first time
 * they enter the viewport; respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
