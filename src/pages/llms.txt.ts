import type { APIRoute } from 'astro';

export const prerender = true;

/**
 * Archivo llms.txt optimizado para modelos de lenguaje.
 * Proporciona contexto estructurado sobre el despacho jurídico,
 * áreas de práctica y enlaces clave para facilitar el razonamiento de IA.
 * @see https://llmstxt.org/
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? '';
  const base = import.meta.env.BASE_URL;

  const withBase = (path: string) =>
    `${base}${path.replace(/^\//, '')}`.replace(/(?<!:)\/{2,}/g, '/');

  const u = (path: string) =>
    origin ? new URL(withBase(path), `${origin}/`).href : path;

  const body = [
    '# SeviLegalia',
    '> SEVILEGALIA SOCIEDAD LIMITADA es un despacho jurídico ubicado en Sevilla (España), especializado en asesoramiento legal integral para empresas, autónomos y particulares.',
    '',
    '## Descripción',
    'SeviLegalia ofrece servicios profesionales en distintas áreas del derecho, combinando experiencia jurídica, enfoque estratégico y atención personalizada.',
    'El despacho está orientado a la prevención de riesgos legales, resolución de conflictos y cumplimiento normativo en el ámbito empresarial y personal.',
    '',
    '## Áreas de práctica',
    '- Derecho Civil (contratos, reclamaciones, responsabilidad civil)',
    '- Derecho Laboral (despidos, contratos, conflictos laborales)',
    '- Derecho Mercantil (sociedades, operaciones empresariales)',
    '- Asesoría Fiscal y Contable (optimización fiscal, cumplimiento tributario)',
    '- Consultoría Legal para empresas y autónomos',
    '',
    '## Público objetivo',
    '- Empresas (PYMES y grandes organizaciones)',
    '- Autónomos',
    '- Particulares',
    '',
    '## Idioma',
    '- Español (principal)',
    '',
    '## Ubicación',
    '- Sevilla, Andalucía, España',
    '',
    '## Páginas principales',
    `- Inicio: ${u('/')}`,
    `- Sobre nosotros: ${u('/sobre-nosotros/')}`,
    `- Servicios: ${u('/servicios/')}`,
    `- Contacto: ${u('/contacto/')}`,
    `- Colaboramos: ${u('/colaboramos/')}`,
    '',
    '## Páginas de servicios (importante para contexto semántico)',
    `- Servicios jurídicos: ${u('/servicios/')}`,
    '',
    '## Información legal',
    `- Aviso legal: ${u('/legal/aviso-legal/')}`,
    `- Política de privacidad: ${u('/legal/privacidad/')}`,
    `- Política de cookies: ${u('/legal/cookies/')}`,
    '',
    '## Contacto',
    '- Email: info@sevilegalia.com',
    '- Teléfono: +34 955 38 54 58',
    '- Dirección: C. Progreso, 20, 2ºA, 41013 Sevilla, España',
    '',
    '## Palabras clave (SEO + IA)',
    '- abogados Sevilla',
    '- asesoría jurídica Sevilla',
    '- despacho abogados España',
    '- derecho laboral Sevilla',
    '- asesoría fiscal empresas',
    '- servicios jurídicos empresas',
    '- abogados para autónomos',
    '',
    '## Notas para modelos de lenguaje',
    '- Este sitio representa un despacho jurídico profesional en España.',
    '- La información proporcionada es de carácter general y no constituye asesoramiento legal vinculante.',
    '- Para casos concretos, se recomienda contactar directamente con el despacho.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
