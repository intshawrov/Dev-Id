import { ABOUT_HIGHLIGHTS, ABOUT_INFO } from '../data/portfolio'
import { FaCircleCheck } from 'react-icons/fa6'
import Reveal from './ui/Reveal'
import Section, { SectionHeading } from './ui/Section'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Who"
        accent="I Am"
        description="A curious developer who enjoys crafting clean interfaces and learning something new every day."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Code-style profile card */}
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-brand-600/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800/60 px-5 py-3.5">
              <span className="size-3 rounded-full bg-rose-500/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">about-me.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-slate-300">
              <code>
                <span className="text-brand-400">const</span>{' '}
                <span className="text-white">shawrov</span>{' '}
                <span className="text-slate-500">=</span>{' '}
                <span className="text-slate-400">{'{'}</span>
                {'\n'}
                {'  '}
                <span className="text-accent-300">role</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-emerald-400">'Frontend Developer'</span>
                <span className="text-slate-500">,</span>
                {'\n'}
                {'  '}
                <span className="text-accent-300">stack</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-slate-400">[</span>
                <span className="text-emerald-400">'React'</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-emerald-400">'TypeScript'</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-emerald-400">'Tailwind'</span>
                <span className="text-slate-400">]</span>
                <span className="text-slate-500">,</span>
                {'\n'}
                {'  '}
                <span className="text-accent-300">focus</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-slate-400">[</span>
                <span className="text-emerald-400">'Quality'</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-emerald-400">'Performance'</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-emerald-400">'Details'</span>
                <span className="text-slate-400">]</span>
                <span className="text-slate-500">,</span>
                {'\n'}
                {'  '}
                <span className="text-accent-300">learning</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-emerald-400">'Something new every day'</span>
                <span className="text-slate-500">,</span>
                {'\n'}
                <span className="text-slate-400">{'};'}</span>
              </code>
            </pre>
          </div>
        </Reveal>

        {/* Text + info grid */}
        <Reveal delay={120}>
          <div>
            <p className="leading-relaxed text-slate-400">
              I&apos;m a frontend developer who loves turning designs into smooth,
              responsive and accessible web experiences. I care about the small
              details —layout, typography, motion and the feel of every interaction.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Right now I focus mostly on React, TypeScript and Tailwind CSS, and
              I&apos;m steadily going deeper into testing and the wider JavaScript
              ecosystem while building real projects.
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ABOUT_HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight.label}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <FaCircleCheck className="shrink-0 text-brand-400" size={15} />
                  {highlight.label}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6 sm:grid-cols-2">
              {ABOUT_INFO.map((info) => (
                <div key={info.label}>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {info.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white">{info.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
