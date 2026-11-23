export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  previewGradient: string;
  link?: string;
  github?: string;
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export const personalInfo = {
  name: "Alex Rivera",
  role: "Senior Software Engineer & Product Architect",
  location: "Madrid / Remoto Global",
  timezone: "UTC+1",
  status: "Disponible para proyectos selectos",
  headline: "Arquitectura digital de alta precisión.",
  subheadline: "Diseño sistemas escalables e interfaces fluidas con devoción milimétrica por el detalle y el rendimiento.",
};

export const techStack = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Framer Motion",
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Aura OS Cloud",
    description: "Plataforma de orquestación de microservicios con telemetría en tiempo real y UI inspirada en sistemas operativos espaciales.",
    tags: ["Next.js", "TypeScript", "Tailwind", "WebSockets"],
    metrics: "Latencia < 15ms",
    previewGradient: "from-blue-600/20 via-sky-500/10 to-transparent",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "project-2",
    title: "Chronos Engine",
    description: "Motor analítico de alta concurrencia para procesamiento de series temporales financieras y predicción de volatilidad.",
    tags: ["Rust", "React", "PostgreSQL", "Apache Kafka"],
    metrics: "250k req/seg",
    previewGradient: "from-cyan-500/20 via-indigo-500/10 to-transparent",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "project-3",
    title: "Vesper Design System",
    description: "Sistema de diseño multi-marca basado en tokens semánticos, componentes accesibles y micro-interacciones a 60fps.",
    tags: ["TypeScript", "Framer Motion", "Tailwind CSS", "Storybook"],
    metrics: "100% Accesible",
    previewGradient: "from-violet-500/20 via-blue-500/10 to-transparent",
    link: "https://example.com",
    github: "https://github.com",
  },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "X (Twitter)", href: "https://x.com", icon: "twitter" },
  { name: "Email", href: "mailto:alex@example.com", icon: "mail" },
];
