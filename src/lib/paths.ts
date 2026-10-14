const BASE = import.meta.env.BASE_URL

export function withBase(path: string) {
  if (path.startsWith('http') || path.startsWith('mailto:')) return path
  if (path.startsWith('#')) return `${BASE}${path}`
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${BASE}${clean}`
}

export function appPath(pathname = window.location.pathname) {
  const prefix = BASE.replace(/\/+$/, '')
  let path = pathname
  if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) {
    path = path.slice(prefix.length) || '/'
  }
  return path.replace(/\/+$/, '') || '/'
}

export function isHomePath(pathname = window.location.pathname) {
  return appPath(pathname) === '/'
}
