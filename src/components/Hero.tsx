import bannerImg from '../assets/banner.png'
import { PROFILE, SOCIALS, STATS } from '../data/portfolio'
import type { Skill } from '../types'
import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaArrowDown, FaArrowRight, FaDownload } from 'react-icons/fa6'
import Reveal from './ui/Reveal'

const FLOATING_CHIPS: Array<{ label: string; icon: Skill['icon']; className: string }> = [
  { label: 'React', icon: SiReact, className: 'left-0 top-8 animate-float' },
  {
    label: 'TypeScript',
    icon: SiTypescript,
    className: 'right-0 bottom-16 animate-float-slow',
  },
  { label: 'Tailwind', icon: SiTailwindcss, className: 'right-6 top-10 animate-float-slow' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 size-96 rounded-full bg-brand-600/20 blur-[140px] animate-glow-pulse"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 size-80 rounded-full bg-accent-400/10 blur-[120px] animate-glow-pulse"
      />

      <div className="mx-auto grid w-full max-w-[1260px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left: intro */}
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance work
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m {PROFILE.name}
              <span className="mt-2 block text-gradient">{PROFILE.role}.</span>
            </h1>

            <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
              {PROFILE.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40"
              >
                View Projects
                <FaArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-brand-400/50 hover:text-white"
              >
                <FaDownload size={15} />
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-brand-500/40 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>

            {/* Stats */}
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-white md:text-3xl">
                    <span className="text-gradient">{stat.value}</span>
                  </dd>
                  <dd className="mt-1 text-xs text-slate-500 md:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Right: portrait */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-full bg-brand-600/25 blur-[100px] animate-glow-pulse"
          />
          <div className="animate-float-slow relative rounded-3xl bg-gradient-to-br from-brand-500/60 via-white/10 to-accent-400/60 p-1 shadow-2xl shadow-brand-600/20">
            <img
              src={bannerImg}
              alt={`Portrait of ${PROFILE.name}`}
              className="aspect-[4/5] w-full rounded-[calc(1.5rem-4px)] object-cover object-top"
            />
          </div>

          {/* Floating tech chips */}
          {FLOATING_CHIPS.map((chip) => {
            const Icon = chip.icon
            return (
              <div
                key={chip.label}
                className={`absolute z-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/85 px-4 py-3 shadow-xl backdrop-blur ${chip.className}`}
              >
                <Icon size={20} className="text-brand-300" />
                <span className="text-sm font-semibold text-white">{chip.label}</span>
              </div>
            )
          })}
        </Reveal>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-white md:block"
      >
        <FaArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
