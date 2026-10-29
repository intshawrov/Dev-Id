import type { IconType } from 'react-icons'
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa6'
import { EDUCATION, EXPERIENCE } from '../data/portfolio'
import type { TimelineItem } from '../types'
import Reveal from './ui/Reveal'
import Section, { SectionHeading } from './ui/Section'

function TimelineColumn({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: IconType
  items: TimelineItem[]
}) {
  return (
    <div>
      <h3 className="mb-8 flex items-center gap-3 font-display text-xl font-semibold text-white">
        <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5">
          <Icon size={17} className="text-brand-300" />
        </span>
        {title}
      </h3>

      <div className="relative space-y-10 border-l border-white/10 pl-7">
        {items.map((item, index) => (
          <Reveal key={`${item.title}-${item.period}`} delay={index * 100}>
            <div className="relative">
              <span className="absolute -left-[35px] top-1 size-3.5 rounded-full bg-brand-500 ring-4 ring-brand-500/25" />
              <h4 className="font-display font-semibold text-white">{item.title}</h4>
              <p className="mt-1 text-sm text-brand-300/90">{item.org}</p>
              <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                {item.period}
              </span>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="list-disc text-sm leading-relaxed text-slate-400 marker:text-brand-500"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
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
        description="My journey as a developer so far — where I've worked and what I've studied."
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
        <TimelineColumn title="Experience" icon={FaBriefcase} items={EXPERIENCE} />
        <TimelineColumn title="Education" icon={FaGraduationCap} items={EDUCATION} />
      </div>

      <Reveal className="mt-14 text-center">
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
