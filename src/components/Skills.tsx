import { SKILLS } from '../data/portfolio'
import type { Skill } from '../types'
import Reveal from './ui/Reveal'
import Section, { SectionHeading } from './ui/Section'
import TechAnimation from './TechAnimation'

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon

  return (
    <Reveal delay={index * 50} className="h-full">
      <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-900/60 px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:bg-ink-800/70 hover:shadow-lg hover:shadow-brand-600/10">
        <span className="grid size-14 place-items-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110">
          <Icon size={28} className={skill.color} />
        </span>
        <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
          {skill.name}
        </span>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      className="isolate"
      background={
        <>
          {/* Deep navy base */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#050a15]" />
          {/* Fine dot grid */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:24px_24px]"
          />
          {/* Soft cyan glow behind the animation */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_50%_45%,rgba(34,211,238,0.14),transparent_70%)]"
          />
          {/* Vignette that darkens the edges */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,6,14,0.6)_100%)]"
          />
        </>
      }
    >
      <SectionHeading
        eyebrow="Skills"
        title="My Tech"
        accent="Stack"
        description="The tools and technologies I use to bring ideas to life on the web."
      />

      {/* <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {SKILLS.map((skill, index) => (
          <SkillTile key={skill.name} skill={skill} index={index} />
        ))}
      </div> */}
      <TechAnimation />

      <Reveal className="mt-8 text-center text-sm text-slate-500">
        ...and always adding more to the list.
      </Reveal>
    </Section>
  )
}
