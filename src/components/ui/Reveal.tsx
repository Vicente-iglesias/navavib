import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className = '', delay = 0, y = 48 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (reducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 })
      return
    }

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      },
    )

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [delay, reducedMotion, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
