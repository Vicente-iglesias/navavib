import { site } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function CTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-cyan">Contacto</p>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="mt-4 text-lg text-muted">
                Cuéntame tu idea y exploremos cómo la IA puede acelerar el camino sin perder el
                detalle que marca la diferencia.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition hover:brightness-110 glow-accent"
                >
                  {site.email}
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-accent/50"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
