import type { IconType } from 'react-icons'

export interface NavLink {
  id: string
  label: string
}

export interface Social {
  label: string
  href: string
  icon: IconType
}

export interface Stat {
  value: string
  label: string
}

export interface InfoPoint {
  label: string
  value: string
}

export interface Highlight {
  label: string
}

export interface Skill {
  name: string
  color: string
  icon: IconType
}

export interface Project {
  title: string
  description: string
  tech: string[]
  /** Real screenshot/asset; falls back to a gradient + icon if omitted. */
  image?: string
  gradient: string
  icon: IconType
  liveUrl: string
  githubUrl: string
}

export interface TimelineItem {
  title: string
  org: string
  period: string
  points: string[]
}

export interface ContactInfo {
  label: string
  value: string
  icon: IconType
  href: string
}
