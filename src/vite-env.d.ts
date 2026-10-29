/**
 * Client-facing environment variables (Vite exposes only VITE_* prefixed
 * vars to the app at build time). Vercel injects the same vars if you add
 * them under Project Settings -> Environment Variables.
 */
interface ImportMetaEnv {
  /** Public contact email shown across the site. */
  readonly VITE_CONTACT_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
