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
- **Alérgenos**: cada plato lleva los números de alérgeno (leyenda al final de la carta). Se hizo en dos pasadas: primero se leyeron los iconos del PDF original a alta resolución; después se comparó cada alérgeno detectado con el texto de la descripción de cada plato (por ejemplo, si aparece "queso" se añade Lácteos, "huevo" añade Huevo, "nueces" añade Frutos de cáscara, "atún/anchoas" añade Pescado, "gambas" añade Crustáceos, etc.), y se corrigieron 11 platos donde el icono original no coincidía con el ingrediente descrito (César, Ensalada valenciana, Ensalada Bello Rincón, Sobrasada, Piadina de pollo, Pizza Bello Rincón, Parmigiana, Pizza Napoli, Jamón York, el bocadillo de Sepia, y Gambas rebozadas, que llevaba el icono de Moluscos en vez de Crustáceos). Aun así, **recomendamos que alguien del restaurante haga una última revisión contra la carta física o las fichas de proveedores antes de publicarla**: es información de seguridad alimentaria, y algunos alérgenos (como la soja en embutidos, o los sulfitos en salsas) dependen del proveedor concreto de cada ingrediente y no siempre son detectables por texto.
- **Precios**: si cambian, se editan directamente en `index.html` (cada plato es una línea `<li class="dish">`).

## Notas técnicas

- Tipografías: Fraunces (títulos) y Manrope (texto), cargadas desde Google Fonts.
- El logo se extrajo de tu PDF en dos versiones: el emblema circular (para el menú de navegación / favicon) y el rótulo completo (para la portada), ambas en PNG y WebP.
- La página respeta `prefers-reduced-motion` y tiene estados de foco visibles para navegación por teclado.
- No usa cookies ni analítica.
