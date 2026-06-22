import type { ReactNode } from 'react'
import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import {
  navLinks,
  processSteps,
  projects,
  services,
  site,
} from '@/data/content'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4'

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-white/50">{children}</p>
  )
}

export function BloomLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative">
      <div className="page-video-wrap" aria-hidden>
        <video
          className="page-video"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative z-[1]">
        {/* Hero */}
        <div className="flex min-h-screen flex-col">
          <div className="relative flex min-h-screen w-full flex-col">
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
        </div>

        {/* Scroll sections — mobile + full content */}
        <div className="px-4 pb-16 pt-4 lg:px-10">
          <section id="servicios" className="liquid-glass-strong mx-auto max-w-6xl rounded-3xl p-8">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="mt-3 text-3xl font-medium text-white">Lo que puedo construir contigo</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="service-card group flex min-h-[22rem] flex-col rounded-2xl sm:min-h-[20rem]"
                >
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/35 to-transparent"
                  />
                  <div className="relative z-[2] mt-auto p-5">
                    <h3 className="text-base font-medium text-white drop-shadow-sm">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{service.description}</p>
                  </div>
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
                <div key={step.step} className="liquid-glass-inner rounded-2xl p-5">
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
                <article key={project.title} className="liquid-glass-inner overflow-hidden rounded-2xl">
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
                          className="liquid-glass-inner rounded-full px-3 py-1 text-xs text-white/60"
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
