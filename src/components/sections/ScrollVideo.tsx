import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Reveal } from '../ui/Reveal'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function ScrollVideo() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const video = videoRef.current
    if (!section || !pin || !video) return

    let scrollTrigger: ScrollTrigger | undefined

    const setup = () => {
      if (reducedMotion || !video.duration || Number.isNaN(video.duration)) {
        video.currentTime = 0
        return
      }

      scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: pin,
        scrub: true,
        onUpdate: (self) => {
          video.currentTime = self.progress * video.duration
        },
      })
    }

    if (video.readyState >= 1) {
      setup()
    } else {
      video.addEventListener('loadedmetadata', setup, { once: true })
    }

    return () => {
      video.removeEventListener('loadedmetadata', setup)
      scrollTrigger?.kill()
    }
  }, [reducedMotion])

  return (
    <section ref={sectionRef} id="experiencia" className="relative bg-bg">
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent-cyan">Experiencia</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Cada scroll cuenta una historia
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Interacciones inmersivas que conectan diseño, tecnología e inteligencia artificial
            en una sola narrativa visual.
          </p>
        </Reveal>
      </div>

      <div ref={pinRef} className="relative mt-16 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative mx-auto h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/video/hero-scroll.mp4"
            poster="/images/video-poster.webp"
            muted
            playsInline
            preload="auto"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,8,0.6),transparent_40%)]" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent-cyan">Scroll para explorar</p>
              <p className="font-display mt-1 text-lg font-semibold">Flujo de trabajo con IA</p>
            </div>
            {!reducedMotion && (
              <div className="hidden rounded-full border border-border bg-bg/60 px-4 py-2 text-xs text-muted backdrop-blur-sm md:block">
                Arrastra el scroll ↓
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
