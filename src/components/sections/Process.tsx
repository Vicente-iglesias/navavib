import { processSteps } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function Process() {
  return (
    <section id="proceso" className="border-y border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent-cyan">Proceso</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Cómo trabajo
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-12">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <div
                  className={`relative flex flex-col gap-4 md:w-1/2 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div
                    className={`absolute top-2 hidden h-3 w-3 rounded-full bg-accent md:block ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    }`}
                  />
                  <span className="font-display text-sm font-bold text-accent">{step.step}</span>
                  <h3 className="font-display text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
