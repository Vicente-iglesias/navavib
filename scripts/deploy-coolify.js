/**
 * Crea la app "navavib" en Coolify vía API.
 *
 * Uso (PowerShell):
 *   $env:COOLIFY_URL="https://tu-panel-coolify.com"
 *   $env:COOLIFY_TOKEN="tu-token-de-coolify"
 *   node scripts/deploy-coolify.js
 */

const COOLIFY_URL = process.env.COOLIFY_URL?.replace(/\/$/, '')
const COOLIFY_TOKEN = process.env.COOLIFY_TOKEN
const COOLIFY_DESTINATION_UUID = process.env.COOLIFY_DESTINATION_UUID
const GIT_REPOSITORY = process.env.GIT_REPOSITORY || 'https://github.com/navavib/navavib'
const APP_NAME = process.env.APP_NAME || 'navavib'

const API = `${COOLIFY_URL || ''}/api/v1`

async function request(method, path, body = null, { allowFail = false } = {}) {
  const url = path.startsWith('http') ? path : `${API}${path}`
  const opts = {
    method,
    headers: {
      Authorization: `Bearer ${COOLIFY_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }
  if (body && (method === 'POST' || method === 'PUT')) opts.body = JSON.stringify(body)
  const res = await fetch(url, opts)
  const text = await res.text()
  if (!res.ok) {
    if (allowFail) return null
    throw new Error(`${res.status} ${res.statusText}: ${text}`)
  }
  return text ? JSON.parse(text) : null
}

async function main() {
  if (!COOLIFY_URL || !COOLIFY_TOKEN) {
    console.error(`
Faltan variables de entorno.

  $env:COOLIFY_URL="https://tu-panel-coolify.com"
  $env:COOLIFY_TOKEN="tu-api-token"
  node scripts/deploy-coolify.js
`)
    process.exit(1)
  }

  console.log('Conectando a Coolify...\n')

  const [projects, servers] = await Promise.all([
    request('GET', '/projects'),
    request('GET', '/servers'),
  ])

  if (!projects?.length || !servers?.length) {
    console.error('No hay proyectos o servidores en Coolify.')
    process.exit(1)
  }

  const project = projects[0]
  const server = servers[0]

  let envs = await request('GET', `/projects/${project.uuid}/environments`, null, { allowFail: true })
  if (!Array.isArray(envs)) envs = []
  const env = envs[0] || { name: 'production', uuid: '' }

  let destination_uuid = COOLIFY_DESTINATION_UUID
  if (!destination_uuid) {
    const destByServer = await request('GET', `/servers/${server.uuid}/destinations`, null, { allowFail: true })
    if (Array.isArray(destByServer) && destByServer.length) {
      destination_uuid = destByServer[0].uuid
    }
  }

  const body = {
    project_uuid: project.uuid,
    server_uuid: server.uuid,
    environment_name: env.name,
    environment_uuid: env.uuid || '',
    git_repository: GIT_REPOSITORY,
    git_branch: 'main',
    build_pack: 'dockerfile',
    name: APP_NAME,
    description: 'Landing navavib.com — diseño y desarrollo IA',
    ports_exposes: '80',
    instant_deploy: true,
    is_auto_deploy_enabled: true,
    is_force_https_enabled: true,
  }
  if (destination_uuid) body.destination_uuid = destination_uuid

  try {
    const result = await request('POST', '/applications/public', body)
    console.log(`App "${APP_NAME}" creada en Coolify.`)
    if (result?.uuid) console.log('UUID:', result.uuid)
    console.log('\nAsigna el dominio navavib.com en el panel y pulsa Deploy.')
  } catch (e) {
    console.error('Error:', e.message)
    process.exit(1)
  }
}

main()
