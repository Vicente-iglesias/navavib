import { projects } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function Work() {
  return (
    <section id="trabajo" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Proyectos seleccionados
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Una muestra de trabajos recientes. Sustituye estas imágenes y textos con tus proyectos reales.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,8,0.8),transparent_50%)]" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
