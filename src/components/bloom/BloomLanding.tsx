import type { ReactNode } from 'react'
import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Download,
  Menu,
  Sparkles,
  Wand2,
  X,
} from 'lucide-react'
import {
  navLinks,
  processSteps,
  projects,
  services,
  site,
} from '@/data/content'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
      {children}
    </span>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-white/50">{children}</p>
  )
}

export function BloomLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const featuredProject = projects[0]

  return (
    <div className="relative">
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="relative z-10">
        {/* Hero */}
        <div className="flex min-h-screen flex-col lg:flex-row">
          <div className="relative flex min-h-screen w-full flex-col lg:w-[52%]">
            <div
              className="liquid-glass-strong absolute inset-4 rounded-3xl lg:inset-6"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-screen flex-col px-8 py-8 lg:px-12 lg:py-10">
              <header className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                  <img src="/favicon.svg" alt="" width={32} height={32} className="h-8 w-8" />
                  <span className="text-2xl font-semibold tracking-tighter text-white">
                    {site.name.toLowerCase()}
                    <span className="text-white/60">.</span>
                  </span>
                </a>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                    aria-expanded={menuOpen}
                  >
                    {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    Menú
                  </button>
                  {menuOpen && (
                    <nav className="liquid-glass-strong absolute right-0 top-full z-20 mt-2 min-w-44 rounded-2xl p-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-xl px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  )}
                </div>
              </header>

              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <img
                  src="/favicon.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="mb-8 h-20 w-20"
                />

                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/50">
                  Diseñador &amp; desarrollador IA
                </p>

                <h1 className="max-w-xl text-5xl tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                  Diseño y código
                  <br />
                  <em className="text-white/80">potenciados por IA</em>
                </h1>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 lg:text-base">
                  {site.tagline}. Experiencias digitales de alto impacto — desde la interfaz
                  hasta el código.
                </p>

                <a
                  href="#contacto"
                  className="liquid-glass-strong mt-10 flex items-center gap-3 rounded-full px-6 py-3 text-sm text-white transition-transform hover:scale-105 active:scale-95"
                >
                  Hablemos
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    <Download className="h-3.5 w-3.5" />
                  </span>
                </a>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {services.map((service) => (
                    <a
                      key={service.title}
                      href="#servicios"
                      className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80 transition-transform hover:scale-105"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>

              <footer className="pb-2">
                <SectionLabel>Diseño visionario</SectionLabel>
                <p className="mt-3 max-w-md text-lg text-white/80">
                  <span className="font-display">Creo experiencias que </span>
                  <span className="font-serif italic">trascienden lo convencional.</span>
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="h-px flex-1 bg-white/20" />
                  <span className="text-xs tracking-widest text-white/60">{site.name}</span>
                  <span className="h-px flex-1 bg-white/20" />
                </div>
              </footer>
            </div>
          </div>

          <div className="relative hidden min-h-screen w-[48%] flex-col p-8 lg:flex lg:p-10">
            <div className="flex items-center justify-end gap-3">
              <div className="liquid-glass flex items-center gap-1 rounded-full p-1.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-white transition-colors hover:scale-105 hover:text-white/80"
                >
                  <IconCircle>
                    <LinkedinIcon className="h-3.5 w-3.5" />
                  </IconCircle>
                </a>
                <a
                  href="https://github.com/navavib"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-white transition-colors hover:scale-105 hover:text-white/80"
                >
                  <IconCircle>
                    <GithubIcon className="h-3.5 w-3.5" />
                  </IconCircle>
                </a>
                <a
                  href="#trabajo"
                  aria-label="Ver trabajo"
                  className="text-white transition-colors hover:scale-105 hover:text-white/80"
                >
                  <IconCircle>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </IconCircle>
                </a>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105"
              >
                Contacto
                <IconCircle>
                  <Sparkles className="h-3.5 w-3.5" />
                </IconCircle>
              </a>
            </div>

            <div className="mt-8 flex justify-end">
              <div className="liquid-glass w-56 rounded-2xl p-5 transition-transform hover:scale-105">
                <h3 className="text-sm font-medium text-white">¿Tienes un proyecto?</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  Cuéntame tu idea y exploremos cómo la IA puede acelerar el camino sin perder
                  calidad.
                </p>
                <a
                  href="#contacto"
                  className="mt-4 inline-block text-xs text-white/80 underline-offset-2 hover:text-white hover:underline"
                >
                  Ir a contacto →
                </a>
              </div>
            </div>

            <div className="mt-auto" id="servicios">
              <div className="liquid-glass rounded-[2.5rem] p-4">
                <div className="grid grid-cols-2 gap-3">
                  {services.slice(0, 2).map((service) => (
                    <div
                      key={service.title}
                      className="liquid-glass rounded-3xl p-5 transition-transform hover:scale-105"
                    >
                      <IconCircle>
                        {service.title.includes('Diseño') ? (
                          <Wand2 className="h-3.5 w-3.5" />
                        ) : (
                          <BookOpen className="h-3.5 w-3.5" />
                        )}
                      </IconCircle>
                      <h4 className="mt-4 text-sm font-medium text-white">{service.title}</h4>
                      <p className="mt-1 text-xs text-white/60">{service.description}</p>
                    </div>
                  ))}
                </div>

                <div className="liquid-glass mt-3 flex items-center gap-4 rounded-3xl p-4 transition-transform hover:scale-105">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={96}
                    height={64}
                    className="h-16 w-24 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-white">{featuredProject.title}</h4>
                    <p className="mt-1 text-xs text-white/60">
                      {featuredProject.tags.join(' · ')}
                    </p>
                  </div>
                  <a
                    href="#trabajo"
                    aria-label="Ver portfolio"
                    className="liquid-glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg text-white transition-transform hover:scale-105"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll sections — mobile + full content */}
        <div className="px-4 pb-16 pt-4 lg:px-10">
          <section id="servicios-mobile" className="liquid-glass-strong mx-auto max-w-6xl rounded-3xl p-8 lg:hidden">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="mt-3 text-3xl font-medium text-white">Lo que puedo construir contigo</h2>
            <div className="mt-8 grid gap-4">
              {services.map((service) => (
                <div key={service.title} className="liquid-glass rounded-2xl p-5">
                  <span className="text-lg text-white/80">{service.icon}</span>
                  <h3 className="mt-3 text-base font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="proceso"
            className="liquid-glass-strong mx-auto mt-6 max-w-6xl rounded-3xl p-8 lg:mt-10"
          >
            <SectionLabel>Proceso</SectionLabel>
            <h2 className="mt-3 text-3xl font-medium text-white">Cómo trabajo</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="liquid-glass rounded-2xl p-5">
                  <span className="text-xs font-medium text-white/50">{step.step}</span>
                  <h3 className="mt-2 text-base font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="trabajo"
            className="liquid-glass-strong mx-auto mt-6 max-w-6xl rounded-3xl p-8 lg:mt-10"
          >
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-3 text-3xl font-medium text-white">Proyectos seleccionados</h2>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              Una muestra de trabajos recientes. Sustituye estas imágenes y textos con tus
              proyectos reales.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="liquid-glass overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-medium text-white">{project.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="liquid-glass rounded-full px-3 py-1 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contacto"
            className="liquid-glass-strong mx-auto mt-6 max-w-6xl rounded-3xl p-8 lg:mt-10"
          >
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-3 max-w-xl text-3xl font-medium text-white">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/60">
              Cuéntame tu idea y exploremos cómo la IA puede acelerar el camino sin perder el
              detalle que marca la diferencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="liquid-glass-strong flex items-center gap-3 rounded-full px-6 py-3 text-sm text-white transition-transform hover:scale-105"
              >
                {site.email}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white/80 transition-transform hover:scale-105"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/navavib"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white/80 transition-transform hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </section>

          <footer className="mx-auto mt-8 max-w-6xl text-center text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}. {site.tagline}.
          </footer>
        </div>
      </div>
    </div>
  )
}
