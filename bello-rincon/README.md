# Bello Rincón — sitio web

Sitio web de una sola página para el restaurante **Bello Rincón** (Bar · Cafetería · Tapería · Pizzeria), generado a partir del logo y la carta del local. Es HTML/CSS/JS puro, sin frameworks ni build: se puede subir tal cual.

## Estructura

```
index.html        página única con logo, carta completa e info de contacto
css/style.css      estilos
js/script.js       navegación activa entre categorías de la carta
img/               logo en varios tamaños (webp + png, con favicon)
```

## Publicar de prueba en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público) y sube el contenido de esta carpeta a la raíz del repositorio (no dentro de una subcarpeta), por ejemplo:
   ```
   git init
   git add .
   git commit -m "Sitio Bello Rincón"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
2. En GitHub, ve a **Settings → Pages**.
3. En "Build and deployment", elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guarda. En un par de minutos tendrás la web en `https://TU-USUARIO.github.io/TU-REPO/`.

## Cuando compres el dominio

Con Pages ya funcionando, en **Settings → Pages → Custom domain** añade tu dominio (por ejemplo `bellorincon.com`). GitHub te indicará los registros DNS (A/ALIAS o CNAME) que debes crear en tu proveedor de hosting/dominio. Marca también "Enforce HTTPS" una vez el DNS esté propagado.

## Cosas que te recomiendo revisar antes de darlo por definitivo

Están marcadas con `<!-- TODO -->` dentro de `index.html`, pero en resumen:

- **Dirección exacta**: no la incluí porque no la tenía; el botón "Cómo llegar" ahora mismo abre una búsqueda genérica en Google Maps por el nombre del restaurante. Cuando tengas el enlace exacto de Google Maps del local, sustitúyelo (hay dos sitios: en la sección "Visítanos" y en la barra inferior fija de móvil).
- **Horario**: el que aparece es un horario de ejemplo. Ajusta los días y horas reales en la sección "Visítanos".
- **Teléfono**: ya está puesto el que aparece en la carta (960 523 416), usado como enlace de llamada directa.
- **Alérgenos**: la carta original tenía iconos de alérgenos por plato que no he podido reproducir de forma fiable a partir del PDF, así que añadí un aviso genérico pidiendo que se consulte con el personal. Si quieres, puedo añadir la tabla de alérgenos completa si me pasas el detalle plato por plato.
- **Precios**: si cambian, se editan directamente en `index.html` (cada plato es una línea `<li class="dish">`).

## Notas técnicas

- Tipografías: Fraunces (títulos) y Manrope (texto), cargadas desde Google Fonts.
- El logo se extrajo de tu PDF en dos versiones: el emblema circular (para el menú de navegación / favicon) y el rótulo completo (para la portada), ambas en PNG y WebP.
- La página respeta `prefers-reduced-motion` y tiene estados de foco visibles para navegación por teclado.
- No usa cookies ni analítica.
