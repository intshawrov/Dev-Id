import { useEffect, useState } from 'react'

/**
 * Tracks which page section currently crosses the middle of the
 * viewport, for highlighting the active navbar link.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A narrow band around the viewport middle keeps the highlight stable.
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [ids])

  return active
}
