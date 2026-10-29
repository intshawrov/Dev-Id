import { PROJECTS } from '../data/portfolio'
import type { Project } from '../types'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import Reveal from './ui/Reveal'
import Section, { SectionHeading } from './ui/Section'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon

  return (
    <Reveal delay={index * 100} className="h-full">
      <article className="group grid overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 transition-all duration-300 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-600/15 md:grid-cols-2">
        {/* Visual side */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
          className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-400/20 via-emerald-500/10 to-transparent px-4 py-[30px] md:h-auto md:min-h-72 md:border-r md:border-white/10 md:p-[30px]"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Icon
              size={64}
              className="text-white/90 transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </a>

        {/* Content side */}
        <div className="flex flex-col justify-center p-6 md:p-10">
          <h3 className="font-display text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40"
            >
              Live Demo
              <FaArrowUpRightFromSquare size={12} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              <FaGithub size={17} />
              View Code
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured"
        accent="Projects"
        description="Real projects I've built — from idea to deployed product."
      />

      <div className="grid gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
