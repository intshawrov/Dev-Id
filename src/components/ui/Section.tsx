import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

/** Page section with consistent max-width container and scroll offset. */
export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  /** Accent word rendered in the gradient style. */
  accent?: string
  description?: string
}

/** Centered section title with eyebrow tag and gradient accent word. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
        {title} {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 leading-relaxed text-slate-400">{description}</p>
      ) : null}
    </Reveal>
  )
}
