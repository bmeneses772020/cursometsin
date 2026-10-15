# Metodología de la Investigación para Docentes y Futuros Tutores de Tesis y Proyectos de Grado

Curso de autogestión para docentes en formación metodológica y futuros tutores de tesis y proyectos de grado, construido con React + Vite — misma plantilla que APA 7 y Expresión Escrita y Comprensión Lectora.

Incluye 7 módulos y 45 lecciones (texto, video, cuestionarios, listas de chequeo y actividades prácticas con retroalimentación), referencias en APA 7 al final de las lecturas, página de ventas con QR/transferencia y candado de código de acceso.

## Módulos

1. Enfoques de investigación: de las visiones del mundo a las rutas
2. Del tema al problema, y del problema a los objetivos
3. Revisión de la literatura y marco teórico
4. Diseño de la investigación: del alcance al diseño
5. Población, muestra, instrumentos y rigor
6. Análisis de datos y reporte de resultados
7. Tutoría de tesis y proyectos de grado: retroalimentación, ética y evaluación

**Lógica de la secuencia:** de la idea a la ejecución (enfoque → qué investigar → qué se sabe → cómo responder → con quién y con qué → qué hacer con los datos → cómo orientar a otros).

## Antes de publicar: revisa estos datos

- `src/Landing.jsx`, bloque `CONFIG`: mismos datos de pago y contacto que los otros cursos. Revísalos por si algo cambió.
- `src/Gate.jsx`: el código de acceso por defecto es `TUTORES-OCTUBRE2026`. Puedes cambiarlo o agregar más códigos en `VALID_CODES`. El código es visible para quien sepa leer el código fuente del sitio; es un candado simple, no seguridad bancaria.
- Los **videos** (lecciones `l1-4`, `l2-3`, `l3-3`, `l4-3`, `l5-4`, `l6-3` y `l7-4`) están como campos para pegar un enlace de YouTube. Mientras no pegues uno, el estudiante verá el espacio vacío.

## Sobre las fuentes (contenido confiable)

Cada lectura cita sus fuentes en el texto y las lista en APA 7 al final. Los datos bibliográficos (autores, año, revista, volumen, páginas y DOI) de los artículos se comprobaron en las fichas de la revista, el editor o un repositorio institucional. Aun así:

- Los **libros** (Hernández-Sampieri & Mendoza, 2018; Creswell & Creswell, 2018; Booth et al., 2016; Anderson & Krathwohl, 2001) se verificaron por catálogos de bibliotecas y librerías, no por la editorial, y lo que se les atribuye está al nivel de sus propios resúmenes y de su contenido conocido. Si vas a citar páginas concretas, consulta el libro.
- Para los artículos, la comprobación en línea cubrió la ficha bibliográfica; el contenido atribuido corresponde al propósito declarado en el título y el resumen. Antes de usar el curso en una publicación, revisa las lecturas contra las fuentes originales.
- En *The craft of research* (Booth et al., 2016) los catálogos consultados solo listan a Booth y Colomb; la lista completa de autores de la 4.ª edición no pudo confirmarse en línea. Compárala con tu ejemplar.
- **Sin DOI en la referencia:** Messick (1995), Alvesson y Sandberg (2011) y Merino Tejedor (2016, sin páginas finales), porque no pudieron comprobarse en línea.
- Etikan et al. (2016): la página del editor indica publicación en línea en 2015; se cita con el año del volumen 5(1), 2016. Verifícalo si lo vas a publicar.
- Los principios del valor p (ASA), los tres movimientos de Booth et al., los ítems de COREQ y PRISMA 2020 y las fases del análisis temático se resumen según sus fuentes; compáralos con los documentos originales.
- El curso ofrece **criterios generales**: el reglamento de trabajos de grado de cada universidad prevalece sobre cualquier recomendación del curso. Los criterios prácticos propios del curso se señalan como tales en el texto.

## Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior.

## Cómo correrlo en tu computadora

```
npm install
npm run dev
```

## Cómo publicarlo en internet (gratis)

1. Sube **el contenido** de esta carpeta a un repositorio de GitHub **nuevo** (por ejemplo, `tutores-tfg`), sin mezclarlo con los repositorios de los otros cursos. No subas `node_modules` ni `dist`.
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub, "Add New Project" → importa el repositorio nuevo.
3. Deja la configuración automática y haz clic en "Deploy".
4. Copia el enlace que te da Vercel y pídele a Claude que actualice la tarjeta de este curso en tu vitrina **Ficha Cursos**.

## Actividades prácticas

Las 7 actividades prácticas (una por módulo) se completan en línea, con guardado automático, y se descargan como PDF desde `public/actividad-practica-modulo1.pdf` a `public/actividad-practica-modulo7.pdf`.

### Retroalimentación: cómo sabe el estudiante si acertó

- En los ejercicios de elección (`"choice-items"`), cada ítem lleva `correct` (índice de la opción correcta, desde 0) y `explanation`. Al responder todos aparece **"Revisar mis respuestas"**, que marca en verde lo correcto y en rojo lo incorrecto, con la explicación debajo. **"Intentar de nuevo"** reinicia el ejercicio.
- En los ejercicios abiertos (`"prompts"` y `"source-compare"`), cada pregunta lleva `sample` (respuesta modelo). Aparece **"Ver respuesta modelo"** para que el estudiante compare su redacción, sin marcarla como correcta o incorrecta.

## Autora

Msc. Betty Meneses Ayllón

## Modo Educación Continua (sin cobro)

Este curso también puede usarse dentro de la página **Cursos Educación Continua** (https://portalformacontinuasin.vercel.app/). Cuando el participante entra desde esa página (dirección terminada en `?ec=1`), no ve el precio ni el pago: solo la pantalla de código de acceso. El código para los talleres es `EDUCON-METODOLOGIA` (se cambia en `src/Gate.jsx`, lista `VALID_CODES`). Al completar el 100 % de las lecciones, aparece el botón «Volver y desbloquear el siguiente». La dirección de la página de Educación Continua se configura en `HUB_URL` de `src/ec.js`.
