import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from 'react-icons/fa6'

import {
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import bazarDorImg from '../assets/bazar-dor.png'
import fitLogImg from '../assets/fit-log.png'
import type {
  ContactInfo,
  Highlight,
  InfoPoint,
  NavLink,
  Project,
  Skill,
  Social,
  Stat,
  TimelineItem,
} from '../types'

/* ------------------------------------------------------------------ */
/*  All of the text/links below are template placeholders —            */
/*  edit them to match your real details.                              */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'Shawrov',
  role: 'Frontend Developer',
  tagline:
    'I design and build fast, accessible, pixel-perfect web interfaces with React, TypeScript and Tailwind CSS — turning ideas into delightful products.',
  contactEmail: 'shawrov@example.com',
}

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const SOCIALS: Social[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
]

export const STATS: Stat[] = [
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
]

export const ABOUT_INFO: InfoPoint[] = [
  { label: 'Name', value: 'Shawrov' },
  { label: 'Email', value: 'shawrov@example.com' },
  { label: 'Location', value: 'Dhaka, Bangladesh' },
  { label: 'Availability', value: 'Open to work' },
]

export const ABOUT_HIGHLIGHTS: Highlight[] = [
  { label: 'Responsive, mobile-first UI' },
  { label: 'Clean, typed, maintainable code' },
  { label: 'API integration & state management' },
  { label: 'Accessibility & performance tuning' },
]

export const SKILLS: Skill[] = [
  { name: 'React', color: 'text-cyan-300', icon: SiReact },
  { name: 'TypeScript', color: 'text-brand-400', icon: SiTypescript },
  { name: 'JavaScript', color: 'text-yellow-300', icon: SiJavascript },
  { name: 'Tailwind CSS', color: 'text-sky-300', icon: SiTailwindcss },
  { name: 'Next.js', color: 'text-slate-200', icon: SiNextdotjs },
  { name: 'Express.js', color: 'text-emerald-400', icon: SiExpress },
  { name: 'MongoDB', color: 'text-green-400', icon: SiMongodb },
  { name: 'Vite', color: 'text-violet-400', icon: SiVite },
  { name: 'Git & GitHub', color: 'text-rose-400', icon: SiGit },
  { name: 'Figma', color: 'text-fuchsia-400', icon: SiFigma },
]

export const PROJECTS: Project[] = [
  {
    title: 'Bazar Dor',
    description:
      'Explores the latest prices of essential products in Bangladesh — daily market rates, category-based browsing and price-change tracking, secured with email and Google authentication.',
    tech: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Better Auth'],
    image: bazarDorImg,
    gradient: 'from-emerald-500 to-green-400',
    icon: FaGithub,
    liveUrl: 'https://bazar-dor-intdev.vercel.app/',
    githubUrl: 'https://github.com/intshawrov/Bazar-dor',
  },
  {
  title: 'Fit Log',
  description:
    'A fitness tracking web application that allows users to explore exercises, view detailed workout instructions, create personalized workout plans, and save exercises for later.',
  tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  image: fitLogImg,
  gradient: 'from-orange-500 to-red-400',
  icon: FaGithub,
  liveUrl: 'https://fit-log-lake-five.vercel.app/',
  githubUrl: 'https://github.com/intshawrov/Fit-log',
},
]

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Frontend Developer',
    org: 'Freelance',
    period: '2024 — Present',
    points: [
      'Built responsive client sites and dashboards with React and Tailwind CSS.',
      'Improved load times with code-splitting, lazy loading and asset optimization.',
    ],
  },
  {
    title: 'Web Development Intern',
    org: 'Tech Institute — Remote',
    period: '2023 — 2024',
    points: [
      'Contributed reusable components to a shared component library.',
      'Practiced Git workflow with feature branches and pull-request reviews.',
    ],
  },
]

export const EDUCATION: TimelineItem[] = [
  {
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Ujancha High School, Bancharampur',
    period: '2022 — 2024',
    points: ['Science group — focused on mathematics and computer studies.'],
  },
  {
    title: 'Self-taught Frontend Development',
    org: 'Online courses & open source',
    period: '2023 — Present',
    points: [
      'Completed structured coursework on JavaScript, TypeScript and React.',
      'Learned by building real projects and reading open-source code.',
    ],
  },
]

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: 'Email',
    value: 'shawrov@example.com',
    icon: FaEnvelope,
    href: 'mailto:shawrov@example.com',
  },
  {
    label: 'Phone',
    value: '+880 1XXX-XXXXXX',
    icon: FaPhone,
    href: 'tel:+8801000000000',
  },
  {
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    icon: FaLocationDot,
    href: 'https://maps.google.com/?q=Dhaka',
  },
]
