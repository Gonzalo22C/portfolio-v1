# CONTEXTO Y REGLAS DE DISEÑO - PORTAFOLIO

## 1. Concepto Visual & Dirección de Arte
- **Estilo:** Minimalismo futurista / Apple VisionOS & macOS Aesthetic. Alta calidad técnica, cero ruido visual, baja carga cognitiva.
- **Anti-genérico:** Prohibido usar gradientes neón baratos, sombras pesadas de colores o layouts saturados. Usar precisión tipográfica, micro-bordes de 1px con opacidad sutil (`border-white/10`), desenfoques limpios (`backdrop-blur-xl`) y mucho aire (espacio negativo).
- **Paleta:**
  - Fondo base: `#070709` (Negro espacial profundo).
  - Superficies Glass: `rgba(255, 255, 255, 0.03)` con borde `rgba(255, 255, 255, 0.08)`.
  - Texto primario: `#F5F5F7` (Blanco Apple).
  - Texto secundario: `#86868B` (Gris titanio).
  - Acento único: `#0A84FF` (Azul sistema Apple) usado con extrema moderación.

## 2. Stack Técnico
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (`framer-motion`)
- Lucide React (`lucide-react`)

## 3. Estructura de Secciones (Single Page)
1. **Preloader:** Cortina minimalista de 1.1s con saludo/nombre que se desliza hacia arriba.
2. **Navbar Flotante:** Píldora centrada fija arriba (`top-6`), efecto vidrio esmerilado, enlaces limpios (Inicio, Proyectos, Stack, Contacto) + indicador activo suave.
3. **Hero Full-Screen (`min-h-screen`):** Ocupa el 100% de la pantalla inicial. Centrado perfecto: espacio para Avatar/Memoji estilo Apple con halo sutil, titular con jerarquía fuerte, subtítulo corto y un indicador minimalista de scroll abajo.
4. **Bento Grid (Sobre mí & Stack):** 3 a 4 tarjetas asimétricas estilo vidrio con enfoque técnico, ubicación y tecnologías clave.
5. **Proyectos (Showcase):** Tarjetas limpias con contenedor de video/preview en bucle automático (`autoplay muted loop`), título, descripción breve y tags.
6. **Footer / Contact Expansivo:** Sección final que al entrar en viewport se expande suavemente en ancho/escala hacia los bordes de la pantalla, con formulario minimalista directo a Gmail (vía Web3Forms).