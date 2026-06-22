import { useEffect, useState } from 'react'
import { navLinks, site } from '../../data/content'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const scrollPosition = window.scrollY + window.innerHeight * 0.35
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          current = id
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border/60 bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-20">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
          >
            Hablemos
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-bg/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base text-muted transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="inline-flex w-fit items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
            >
              Hablemos
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
