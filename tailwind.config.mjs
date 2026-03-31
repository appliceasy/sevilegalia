import typography from '@tailwindcss/typography';

/**
 * Paleta basada en referencias de marca:
 * - Petrol / teal institucional: #07404E (primario)
 * - Verde bosque: #0a2e24 → #145c46 → #1b7a5d (acentos y profundidad)
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          /** Petrol / midnight teal — cabecera, pie, titulares sobre claro */
          DEFAULT: '#07404E',
          /** Verde bosque muy oscuro — degradados, contraste */
          dark: '#0a2e24',
          /** Petrol algo más claro — hovers sobre superficies primary */
          muted: '#0a5568',
        },
        accent: {
          /** Verde bosque medio — CTAs, enlaces, bullets */
          DEFAULT: '#145c46',
          /** Verde esmeralda profundo — hovers en botones */
          soft: '#1b7a5d',
          /** Mismo tono que primary.dark — bordes / énfasis oscuros */
          deep: '#0a2e24',
          /** Verde salvia claro — texto de hover sobre fondos oscuros */
          highlight: '#c5e3d7',
        },
        neutral: {
          surface: '#F4F8F7',
          border: '#D8E8E4',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        /** Degradado sutil alineado con la muestra “forest green” */
        'brand-gradient':
          'linear-gradient(135deg, #0a2e24 0%, #07404E 42%, #0d5f4f 100%)',
        'brand-gradient-horizontal': 'linear-gradient(90deg, #07404E 0%, #145c46 55%, #1b7a5d 100%)',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(7, 64, 78, 0.12)',
      },
    },
  },
  plugins: [typography],
};
