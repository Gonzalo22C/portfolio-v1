# CONTEXTO Y ARQUITECTURA - PORTAFOLIO (EDICIÓN EJECUTIVA CLARA)

## 1. Dirección de Arte: "Executive Editorial Minimalism"
- **Concepto:** Estética ejecutiva de alta gama, quirúrgica, minimalista clara (inspirada en papel editorial "Bone/Off-White", tipografía suiza de alto contraste y estructura modular tipo Spyglass/Fugitive)[cite: 13, 14].
- **Anti-IA Genérica (REGLA ESTRICTA):** Prohibido usar gradientes morados/azules neón, brillos baratos, bordes brillantes RGB o tarjetas saturadas. Todo debe respirar autoridad, silencio visual, espacio negativo generoso y precisión milimétrica.
- **Paleta de Colores Formal:**
  - Fondo principal: `#F7F6F2` (Blanco hueso / papel mate cálido, cero blanco quemado `#FFFFFF` puro en el lienzo).
  - Superficies / Tarjetas: `#FFFFFF` o `#F0EFEA` con bordes ultra finos de `1px solid rgba(17, 17, 17, 0.08)`.
  - Contraste Alto (Bloques de impacto): `#0E0E10` (Negro tinta profundo) para secciones clave o tarjetas destacadas (como en el ritmo visual de Spyglass)[cite: 14].
  - Texto primario: `#111111` (Negro carbón editorial).
  - Texto secundario: `#5C5C60` (Gris pizarra ejecutivo).
  - Acento único: `#1D4ED8` (Azul cobalto corporativo/técnico, usado solo en estados activos o detalles mínimos).

## 2. Componentes Clave y Comportamiento
- **Navbar Flotante (Píldora Compacta):**
  - Debe ser **compacta en ancho** (`w-fit`, padding ajustado, nada de barras largas estiradas) pero con **mayor presencia vertical y efecto Glassmorphism marcado** (`bg-white/65 backdrop-blur-2xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]`).
- **Fondo Parallax con Scroll:**
  - Capa fija/parallax detrás del Hero conectada a `/bg-texture.webp` que se desplaza suavemente con el scroll (`useScroll` + `useTransform` de Framer Motion) con opacidad muy sutil (`opacity-15` o `20`) para dar textura sin ensuciar la lectura.
- **Hero Full-Screen (`min-h-screen`):**
  - Avatar Apple (`/avatar.png`) enmarcado con sobriedad ejecutiva + titular tipográfico fuerte (jerarquía editorial) + propuesta de valor directa en 2 líneas.
- **Animaciones Ligeras (Cero videos pesados por ahora):**
  - Micro-interacciones suaves de entrada (`opacity` + `y: 16 -> 0`), transiciones limpias sin rebotes exagerados. Nada de videos en autoplay por ahora; usar placeholders arquitectónicos limpios o maquetas de interfaz estáticas de alta calidad para los proyectos.

## 3. Separación de Responsabilidades (Arquitectura Modular)
Cada sección debe ser un componente aislado y enfocado en una sola tarea:
1. `Navbar.tsx`: Navegación rápida tipo cápsula compacta.
2. `Hero.tsx`: Identidad, `/avatar.png`, propuesta de valor ejecutiva y fondo parallax `/bg-texture.webp`.
3. `ValueMetrics.tsx` (o `About.tsx`): Credenciales, enfoque de trabajo y capacidades clave en grid limpio.
4. `Projects.tsx`: Casos de estudio con estructura tipo "01 / 02 / 03" (inspirado en el layout alternado de Spyglass)[cite: 14], enfocados en problema, solución e impacto (sin videos aún).
5. `ContactFooter.tsx`: Cierre limpio de alto contraste con formulario directo a Gmail.