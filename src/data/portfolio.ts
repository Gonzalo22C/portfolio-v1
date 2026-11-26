export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: string; // "01", "02", "03"
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  link?: string;
  github?: string;
  accentColor?: string; // Tailwind class for mock UI accent
}

export interface ValueMetric {
  value: string;
  unit?: string;
  label: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Métricas", href: "#metrics" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

// ─── Identity ─────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Gonzalo Córdova",
  title: "Senior Software Engineer",
  role: "Arquitecto de Sistemas & Diseño de Producto",
  location: "Madrid, España · Remoto Global",
  timezone: "UTC+1",
  availability: "Disponible Q1 2026",
  headline: "Productos digitales de alto impacto técnico y estético.",
  subheadline:
    "Especialista en arquitectura de sistemas escalables e interfaces de alta precisión. Trabajo en la intersección entre ingeniería robusta y experiencia sensorial pulida.",
  email: "gonzalo@example.com",
  bio: "Más de 7 años diseñando y construyendo software de alto rendimiento para empresas de tecnología e instituciones financieras. Enfoque pragmático: cada decisión técnica se mide en latencia, mantenibilidad y valor de negocio.",
};

// ─── Value Metrics ────────────────────────────────────────────────────────────

export const valueMetrics: ValueMetric[] = [
  {
    value: "7+",
    label: "Años de experiencia",
    description: "Construyendo software de producción a escala enterprise.",
  },
  {
    value: "< 50",
    unit: "ms",
    label: "Latencia objetivo",
    description: "Estándar de rendimiento que mantengo en cada capa de la aplicación.",
  },
  {
    value: "99.9",
    unit: "%",
    label: "Uptime garantizado",
    description: "Sistemas críticos diseñados con resiliencia y redundancia desde el inicio.",
  },
  {
    value: "12",
    label: "Proyectos en producción",
    description: "Entregados puntualmente con cero incidentes críticos post-lanzamiento.",
  },
];

// ─── Capabilities ─────────────────────────────────────────────────────────────

export const capabilities: Capability[] = [
  {
    title: "Arquitectura de Sistemas",
    description:
      "Diseño de APIs, microservicios y pipelines de datos con un enfoque pragmático y orientado a la escala real del negocio.",
  },
  {
    title: "Interfaces de Alta Precisión",
    description:
      "Componentes accesibles, animaciones a 60fps y sistemas de diseño con tokens semánticos y coherencia estética milimétrica.",
  },
  {
    title: "Liderazgo Técnico",
    description:
      "Definición de estándares de código, mentoring de equipos junior/mid y toma de decisiones técnicas bajo restricciones de tiempo real.",
  },
];

export const techStack = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Rust",
  "Framer Motion",
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "aura-os",
    index: "01",
    title: "Aura OS Cloud",
    category: "Plataforma de Infraestructura",
    description:
      "Sistema de orquestación de microservicios con telemetría en tiempo real y dashboard operacional para equipos de ingeniería distribuidos.",
    problem:
      "Un equipo de 40 ingenieros operaba 60+ microservicios sin visibilidad unificada, causando MTTR de 4 horas promedio en incidentes.",
    solution:
      "Dashboard de telemetría centralizado con alertas predictivas basadas en percentiles P95/P99 y sistema de runbooks automatizados.",
    impact: "Reducción del MTTR de 4h a 18 minutos. Tiempo de onboarding de nuevos ingenieros: de 3 semanas a 4 días.",
    tags: ["Next.js", "TypeScript", "WebSockets", "ClickHouse", "Tailwind CSS"],
    accentColor: "#1D4ED8",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "chronos-engine",
    index: "02",
    title: "Chronos Engine",
    category: "Motor de Análisis Financiero",
    description:
      "Motor de alta concurrencia para procesamiento de series temporales financieras con predicción de volatilidad y reporting regulatorio automatizado.",
    problem:
      "Los sistemas heredados procesaban batches diarios en 6 horas, generando datos obsoletos que bloqueaban decisiones de riesgo intradiarias.",
    solution:
      "Pipeline de streaming en tiempo real con Kafka + Rust para el motor analítico y capa de visualización React para traders y analistas.",
    impact: "Procesamiento de 250k eventos/seg. Latencia de señales de riesgo: de 6h (batch) a 340ms (streaming).",
    tags: ["Rust", "React", "Apache Kafka", "PostgreSQL", "TimescaleDB"],
    accentColor: "#0E0E10",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "vesper-ds",
    index: "03",
    title: "Vesper Design System",
    category: "Sistema de Diseño Multi-Marca",
    description:
      "Sistema de diseño basado en tokens semánticos para tres marcas de un holding retail, con 180+ componentes accesibles y documentación interactiva.",
    problem:
      "Tres equipos de producto desarrollaban interfaces inconsistentes, generando un 35% de tiempo extra en QA y fricción constante con el equipo de marca.",
    solution:
      "Design token layer con Figma como fuente de verdad, build automatizado de tokens y librería de componentes con storybook y tests de accesibilidad WCAG 2.1 AA.",
    impact:
      "Reducción del 60% en tiempo de QA de UI. Consistency score de 94% en auditorías de marca. Adoptado por 5 equipos en 3 meses.",
    tags: ["TypeScript", "Storybook", "Figma Tokens", "Framer Motion", "WCAG 2.1 AA"],
    accentColor: "#1D4ED8",
    link: "https://example.com",
    github: "https://github.com",
  },
];
