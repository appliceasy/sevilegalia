# Sevilegalia

Web corporativa estatica desarrollada con Astro y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida se genera en `dist/`.

## Despliegue en GitHub Pages

El proyecto ya incluye el workflow `/.github/workflows/deploy.yml` para desplegar automaticamente en GitHub Pages al hacer push a `main`.

### 1. Subir el proyecto a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube este proyecto.
3. Usa la rama `main`.

### 2. Activar GitHub Pages

En GitHub:

1. Ve a `Settings` -> `Pages`.
2. En `Source`, selecciona `GitHub Actions`.

### 3. Configuracion de URLs

El proyecto soporta dos casos:

- Repositorio normal, por ejemplo `usuario/sevilegalia`:
  - el workflow construira la web con `base=/sevilegalia/`
- Repositorio de usuario, por ejemplo `usuario.github.io`:
  - la web se construira en la raiz `/`

Si usas dominio propio o quieres forzar otra configuracion, define estas variables en GitHub:

`Settings` -> `Secrets and variables` -> `Actions` -> `Variables`

- `SITE_URL`: URL publica final, por ejemplo `https://www.sevilegalia.es`
- `BASE_PATH`: normalmente `/` con dominio propio, o `/nombre-repo` en un repo normal

### 4. Variables opcionales de analitica

Puedes definir tambien estas variables de Actions:

- `PUBLIC_PLAUSIBLE_DOMAIN`
- `PUBLIC_PLAUSIBLE_SCRIPT_SRC`
- `PUBLIC_GA_MEASUREMENT_ID`

Si no defines ninguna, no se cargara analitica.

## Dominio propio

Si mas adelante conectas un dominio propio:

1. Configuralo en `Settings` -> `Pages`.
2. Añade `SITE_URL` con tu dominio real.
3. Añade `BASE_PATH=/`.

## Notas

- La web es estatica y compatible con GitHub Pages.
- No requiere backend para desplegarse.
- Si cambias el nombre del repositorio, revisa `SITE_URL` y `BASE_PATH` si los has definido manualmente.
