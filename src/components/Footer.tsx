import { SOCIALS } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-[1260px] px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-400 font-display text-base font-bold text-white">
              S
            </span>
            <span className="font-display font-semibold text-white">
              Shaw<span className="text-gradient">rov</span>
            </span>
          </a>

          {/* Quick links */}
          {/* <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul> */}

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-brand-500/40 hover:text-white"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <p>
            © {year} Shawrov. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
