# Publicar navavib.com en Coolify

## Requisitos previos

- Repositorio GitHub con este código (rama `main`).
- Panel Coolify con acceso API o configuración manual.
- DNS de `navavib.com` apuntando al servidor Coolify.

## Opción rápida (script API)

**PowerShell:**

```powershell
$env:COOLIFY_URL="https://tu-panel-coolify.com"
$env:COOLIFY_TOKEN="tu-api-token"
node scripts/deploy-coolify.js
```

Si el servidor tiene varios destinos:

```powershell
$env:COOLIFY_DESTINATION_UUID="uuid-del-destino"
node scripts/deploy-coolify.js
```

## Opción manual en el panel

1. **New Resource** → **Application**.
2. **Source**: GitHub → repo `navavib/navavib` (o el nombre que uses).
3. **Branch**: `main`.
4. **Build Pack**: **Dockerfile**.
5. **Domains**: `navavib.com` (y opcionalmente `www.navavib.com`).
6. **Deploy**.

## Build local

```powershell
npm install
npm run dev      # desarrollo
npm run build    # producción → dist/
npm run preview  # previsualizar build
```

## Sustituir contenido placeholder

| Asset | Ruta | Notas |
|-------|------|-------|
| Vídeo scroll | `public/video/hero-scroll.mp4` | MP4 H.264, 10–15 s, comprimido |
| Poster vídeo | `public/images/video-poster.svg` | Sustituir por imagen real |
| OG image | `public/images/og-cover.svg` | 1200×630 recomendado |
| Textos | `src/data/content.ts` | Copy, email, proyectos |
| Proyectos | `src/data/content.ts` → `projects` | Imágenes Unsplash → tus assets |

## nginx

El `Dockerfile` usa `nginx.conf` con:

- Gzip para JS/CSS
- Cache largo en `/assets/`
- SPA fallback (`try_files` → `index.html`)
