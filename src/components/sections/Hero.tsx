import { Suspense, lazy } from 'react'
import { Reveal } from '../ui/Reveal'
import { useIsMobile, useReducedMotion } from '../../hooks/useReducedMotion'

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((module) => ({ default: module.HeroScene })),
)

function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(124,92,255,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,5,8,0.8))]" />
    </div>
  )
}

export function Hero() {
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  const show3d = !isMobile && !reducedMotion

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {show3d ? (
        <Suspense fallback={<HeroFallback />}>
          <div className="absolute inset-0">
            <HeroScene />
          </div>
        </Suspense>
      ) : (
        <HeroFallback />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,var(--color-bg)_95%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            Diseñador &amp; desarrollador IA
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Diseño y código{' '}
            <span className="text-gradient">potenciados por IA</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            Creo experiencias digitales de alto impacto — desde la interfaz hasta el código —
            aceleradas con inteligencia artificial sin sacrificar calidad.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="pointer-events-auto inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition hover:brightness-110 glow-accent"
            >
              Hablemos
            </a>
            <a
              href="#trabajo"
              className="pointer-events-auto inline-flex items-center rounded-full border border-border bg-surface/50 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-accent/50"
            >
              Ver trabajo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
