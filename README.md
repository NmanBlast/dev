# NmanBlast — Portfolio Minecraft Java

Web completa en español e inglés con el diseño oscuro y violeta, imágenes optimizadas, servicios, proyectos y contacto por Discord: **NmanBlast**.

Esta es la versión actual, con las etiquetas sobre las imágenes ya retiradas.

## Subir a GitHub

1. Descomprime este ZIP en tu ordenador.
2. Crea un repositorio en tu cuenta, por ejemplo `nmanblast-dev`.
3. En el repositorio, usa **Add file → Upload files**.
4. Arrastra todos los archivos y la carpeta `assets` del paquete, conservando la estructura. Sube el contenido descomprimido, no el ZIP.
5. Guarda los cambios con un commit. `index.html` debe quedar en la raíz del repositorio.

Para conectar después con Cloudflare Pages, el repositorio puede ser público o privado.

## Publicar con Cloudflare Pages

Conecta el repositorio desde **Workers & Pages → Create application → Pages**.

| Ajuste | Valor |
| --- | --- |
| Rama de producción | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory | Vacío, la raíz del repositorio |

La web es HTML, CSS y JavaScript estáticos. No requiere instalar dependencias ni ejecutar un compilador.

Cuando termine el despliegue, comprueba la dirección `pages.dev` que te indique Cloudflare. Después añade tu subdominio en **Custom domains**. `dev.voidtime.es` es la propuesta; puedes elegir otro.

Añade el dominio en Cloudflare Pages antes de crear el CNAME que te indique el asistente. Solo cambia el registro del subdominio elegido; no necesitas tocar la web principal, el correo ni la conexión de Minecraft.

## Si eliges GitHub Pages

Configura la publicación desde la rama `main` y la carpeta raíz del repositorio en **Settings → Pages**. El archivo `.nojekyll` evita el procesamiento de Jekyll.

Para un dominio propio, primero indícalo en **Custom domain** y después configura el registro DNS que señale GitHub. Incluyo `CNAME.example` como referencia; no tiene efecto hasta que decidas configurarlo. Revisa las condiciones de uso de GitHub Pages para el uso comercial que vayas a darle.

## Archivos que puedes editar

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura y textos en español |
| `style.css` | Diseño, colores y adaptación a pantalla pequeña |
| `app.js` | Textos en inglés, cambio de idioma, detalles y formulario |
| `assets/` | Nueve variantes WebP de las tres ilustraciones |
| `favicon.svg` | Icono de la web |

Al cambiar textos, actualiza tanto el español de `index.html` como las entradas correspondientes del objeto `en` en `app.js`. Los detalles de proyectos también tienen sus textos en `app.js`.

Las imágenes utilizan rutas relativas y varias resoluciones para que el navegador elija el tamaño adecuado. Si cambias nombres de archivos en `assets/`, actualiza también sus referencias y `srcset` en `index.html` y las referencias del diálogo en `app.js`.

## Contacto y formulario

El formulario prepara un mensaje para copiarlo y enviarlo manualmente por Discord. No envía correos ni almacena consultas. El botón de Discord abre la aplicación web; el visitante debe añadir al usuario NmanBlast.

Para cambiar el usuario, revisa `index.html`, la función del botón de copia en `app.js` y los textos en ambos idiomas.

## Ver la web en tu ordenador

Abre `index.html` en tu navegador. Si tienes Python instalado, también puedes abrir una terminal en esta carpeta, ejecutar `python -m http.server 8000` y visitar `http://localhost:8000`.

La web usa Google Fonts si hay conexión y dispone de fuentes alternativas. Guardar el idioma funciona cuando el navegador permite almacenamiento local; la copia al portapapeles tiene una alternativa para navegadores que no exponen la API moderna.

## Documentación de referencia

- Subir archivos a GitHub: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- HTML estático en Cloudflare Pages: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Dominios personalizados en Cloudflare Pages: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Condiciones y límites de GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

Exportación preparada el 23 de noviembre de 2026.
