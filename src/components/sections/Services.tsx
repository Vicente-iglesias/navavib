import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const gridRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || reducedMotion) return

    const cards = grid.querySelectorAll('[data-service-card]')
    const animation = gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    )

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [reducedMotion])

  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Servicios</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Lo que puedo construir contigo
          </h2>
        </Reveal>

        <div ref={gridRef} className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              data-service-card
              className="group rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:border-accent/40 hover:bg-surface-elevated"
            >
              <span className="text-3xl text-accent">{service.icon}</span>
              <h3 className="font-display mt-6 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-accent to-accent-cyan transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
