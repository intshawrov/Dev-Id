import type { FormEvent } from 'react'
import { FaPaperPlane } from 'react-icons/fa6'
import { CONTACT_INFO, PROFILE, SOCIALS } from '../data/portfolio'
import Reveal from './ui/Reveal'
import Section, { SectionHeading } from './ui/Section'

const INPUT_CLASS =
  'w-full rounded-xl border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30'

export default function Contact() {
  /** No backend — compose the message into a mailto: link. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    const mailto = `mailto:${PROFILE.contactEmail}?subject=${encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    form.reset()
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Get In"
        accent="Touch"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Info cards */}
        <div className="space-y-4 lg:col-span-2">
          {CONTACT_INFO.map((info, index) => {
            const Icon = info.icon
            return (
              <Reveal key={info.label} delay={index * 80}>
                <a
                  href={info.href}
                  target={info.href.includes('maps') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-5 transition hover:border-brand-500/40 hover:bg-ink-800/60"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600/40 to-accent-400/30">
                    <Icon size={19} className="text-brand-300" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-slate-500">
                      {info.label}
                    </span>
                    <span className="mt-0.5 block truncate font-medium text-white">
                      {info.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            )
          })}

          <Reveal delay={240}>
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-brand-500/40 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={120} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-ink-900/60 p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-400">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-400">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className={INPUT_CLASS}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-sm text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  className={INPUT_CLASS}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40 sm:w-auto sm:px-8"
            >
              <FaPaperPlane size={15} />
              Send Message
            </button>
            <p className="mt-3 text-xs text-slate-500">
              This form opens your email client with a pre-filled message — no
              backend required.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
