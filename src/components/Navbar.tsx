import { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { NAV_LINKS } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'resume', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1260px] items-center justify-between px-4 sm:px-6 md:h-20">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-400 font-display text-lg font-bold text-white">
            S
          </span>
          <span className="font-display text-lg font-semibold text-white">
            Shawrov<span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40 md:inline-block"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          menuOpen ? 'max-h-96 border-t' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-brand-600 px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
