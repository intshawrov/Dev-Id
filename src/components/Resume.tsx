import type { IconType } from 'react-icons'
import { FaDownload, FaBriefcase } from 'react-icons/fa6'
import { EXPERIENCE } from '../data/portfolio'
import type { TimelineItem } from '../types'
import Reveal from './ui/Reveal'
import Section, { SectionHeading } from './ui/Section'

function ExperienceCard({
  item,
  icon: Icon,
}: {
  item: TimelineItem
  icon: IconType
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-ink-800/60">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
        <Icon size={17} className="text-brand-300" />
      </span>
      <div className="min-w-0">
        <h4 className="font-display font-semibold text-white">{item.title}</h4>
        <p className="mt-0.5 text-sm text-brand-300/90">{item.org}</p>
        <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">
          {item.period}
        </span>
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Career"
        title="My"
        accent="Resume"
        description="A quick snapshot of my journey — the full story is in the resume."
      />

      <div className="mx-auto max-w-2xl space-y-4">
        {EXPERIENCE.map((item, index) => (
          <Reveal key={`${item.title}-${item.period}`} delay={index * 100}>
            <ExperienceCard item={item} icon={FaBriefcase} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40"
        >
          <FaDownload size={16} />
          Download Resume
        </a>
      </Reveal>
    </Section>
  )
}
