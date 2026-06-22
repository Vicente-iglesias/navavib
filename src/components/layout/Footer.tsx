import { site } from '../../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
            LinkedIn
          </a>
          <a href="https://github.com/navavib" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="transition hover:text-foreground">
            {site.email}
          </a>
        </div>

        <p className="text-sm text-muted">© {year} {site.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
