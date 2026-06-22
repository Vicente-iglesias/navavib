export const site = {
  name: 'Navavib',
  tagline: 'Diseño y desarrollo potenciados por IA',
  email: 'hola@navavib.com',
  url: 'https://navavib.com',
} as const

export const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const services = [
  {
    title: 'Diseño UI/UX',
    description:
      'Interfaces memorables con sistemas de diseño coherentes, prototipos interactivos y experiencias centradas en el usuario.',
    icon: '◈',
    image: '/images/services/ui-ux.png',
  },
  {
    title: 'Desarrollo web & app',
    description:
      'Aplicaciones rápidas, accesibles y escalables con las tecnologías modernas que tu producto necesita.',
    icon: '⬡',
    image: '/images/services/dev.png',
  },
  {
    title: 'Integración IA',
    description:
      'Copilots, automatizaciones y workflows inteligentes que amplifican tu equipo sin complicar tu stack.',
    icon: '◎',
    image: '/images/services/ai.png',
  },
] as const

export const processSteps = [
  {
    step: '01',
    title: 'Descubrir',
    description: 'Entiendo tu negocio, usuarios y objetivos para definir el problema correcto.',
  },
  {
    step: '02',
    title: 'Diseñar',
    description: 'Prototipos visuales y flujos validados antes de escribir una línea de código.',
  },
  {
    step: '03',
    title: 'Construir',
    description: 'Desarrollo iterativo con IA como acelerador, no como atajo de calidad.',
  },
  {
    step: '04',
    title: 'Iterar',
    description: 'Métricas, feedback y mejora continua para que el producto evolucione contigo.',
  },
] as const

export const projects = [
  {
    title: 'Dashboard SaaS',
    tags: ['UI/UX', 'React', 'IA'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'App móvil fintech',
    tags: ['Mobile', 'Design System'],
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Plataforma e-commerce',
    tags: ['Next.js', 'E-commerce'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Copilot interno',
    tags: ['IA', 'Automatización'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
] as const
