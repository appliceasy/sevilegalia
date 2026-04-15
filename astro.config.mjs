import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const [githubOwner = '', githubRepo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserPagesRepo = githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;
const repoBase = githubRepo ? `/${githubRepo}/` : '/';

const site =
  process.env.SITE_URL ||
  (githubOwner ? `https://${githubOwner}.github.io` : 'https://www.ejemplo-despacho.es');

const base =
  process.env.BASE_PATH ||
  (isGitHubActions && githubRepo && !isUserPagesRepo ? repoBase : '/');

/**
 * Configuración de Astro para sitio estático (sin servidor).
 * @see https://docs.astro.build/en/reference/configuration-reference/
 */
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  redirects: {
    '/despacho': '/sobre-nosotros',
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
