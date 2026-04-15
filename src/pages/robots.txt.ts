import type { APIRoute } from 'astro';

export const prerender = true;

/** robots.txt: permite rastreo general y bots de OpenAI; enlaza al sitemap. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? '';
  const base = import.meta.env.BASE_URL;
  const sitemapPath =
    base === '/' ? '/sitemap-index.xml' : `${base.replace(/\/$/, '')}/sitemap-index.xml`;
  const sitemapUrl = origin ? new URL(sitemapPath, `${origin}/`).href : sitemapPath;

  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
