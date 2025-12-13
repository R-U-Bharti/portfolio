// index.js
export const servicesData = [
  {
    title: "Frontend Engineering",
    description:
      "I build fast, scalable, and enterprise-grade frontend applications using React.js, Next.js, and TypeScript. My focus is on clean architecture, responsiveness, performance, and modern UI/UX.",
    items: [
      { title: "React & Next.js Development", description: "(SSR/SSG, App Router, SEO, Performance)" },
      { title: "State & Data Management", description: "(Redux Toolkit, React Query)" },
      { title: "UI/UX & Animations", description: "(GSAP, Framer Motion, R3F, Tailwind, ShadCN)" },
    ],
  },
  {
    title: "Backend & API Integrations",
    description:
      "Secure and scalable backend systems that power real-time apps, dashboards, and enterprise workflows—built using Node.js, Express, and optimized databases.",
    items: [
      { title: "REST APIs & WebSocket", description: "(Real-time data, High-performance APIs)" },
      { title: "Databases", description: "(PostgreSQL, MongoDB, MySQL, Firebase)" },
      { title: "Authentication & Security", description: "(RBAC, OAuth, JWT, Input Validation)" },
    ],
  },
  {
    title: "DevOps, Cloud & Automation",
    description:
      "Streamlined deployments and efficient cloud workflows using CI/CD, Docker, and Kubernetes—built for reliability and scale.",
    items: [
      { title: "CI/CD Pipelines", description: "(GitHub Actions, Jenkins, Docker Builds)" },
      { title: "Cloud Platforms", description: "(AWS Services, Linux/Nginx Deployments)" },
      { title: "Monitoring & Logging", description: "(Performance, Security & Debug Tools)" },
    ],
  },
  {
    title: "AI Tools & Automation",
    description:
      "I integrate AI-driven tools and LLMs into products to boost automation, productivity, and user experience. I also leverage AI in development workflows to speed up delivery.",
    items: [
      { title: "LLM Integrations", description: "(OpenAI, Claude, Custom Chatbots, API Automation)" },
      { title: "AI-Augmented Development", description: "(Cursor, Trae, Warp, Windsurf)" },
      { title: "Intelligent Features", description: "(Content generation, Smart search, Data insights)" },
    ],
  },
  {
    title: "System Design & Architecture",
    description:
      "Scalable system design for dashboards, SaaS tools, IoT platforms, and enterprise apps with strong focus on performance, modularity, and maintainability.",
    items: [
      { title: "Modular Architecture", description: "(Reusable UI, Clean Code, Design Patterns)" },
      { title: "Optimization & Refactoring", description: "(Speed, Security, Maintainability)" },
      { title: "Team Collaboration", description: "(Agile, Code Reviews, Documentation)" },
    ],
  },
];


export const projects = [
  {
    id: 1,
    name: "Vahan Shakti – Fleet Management Platform",
    description:
      "A large-scale fleet management system serving 30,000+ users with real-time GPS tracking, automated workflows, RBAC, and optimized performance.",
    href: "",
    image: "/assets/projects/vahan-shakti.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Redux Toolkit" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "PostgreSQL" },
    ],
  },
  {
    id: 2,
    name: "Property Tax Management System",
    description:
      "A government digital service platform for 50,000+ citizens featuring multi-level RBAC, secure workflows, dashboards, and improved performance.",
    href: "",
    image: "/assets/projects/property-tax.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Redux Toolkit" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MySQL" },
    ],
  },
  {
    id: 3,
    name: "Real-time IoT Monitoring Platform",
    description:
      "A real-time dashboard system built for 10,000+ IoT devices, featuring WebSockets, live updates, and intelligent data visualization.",
    href: "",
    image: "/assets/projects/iot-monitoring.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "WebSocket" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 4,
    name: "SaaS Workflow Management Platform",
    description:
      "A scalable SaaS tool developed using React Query and React.js to improve workflow efficiency by 60% with fast API interaction.",
    href: "",
    image: "/assets/projects/saas-platform.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "React Query" },
      { id: 3, name: "Docker" },
      { id: 4, name: "CI/CD" },
    ],
  },
  {
    id: 5,
    name: "Digital Citizen Services Portal",
    description:
      "A suite of government portals with dashboards, verification layers, and secure workflows improving efficiency by 30%.",
    href: "",
    image: "/assets/projects/citizen-services.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Redux Toolkit" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "High-Performance UI Animation Suite",
    description:
      "A collection of interactive UI modules using GSAP, Framer Motion, and Three.js that deliver advanced visual experiences.",
    href: "",
    image: "/assets/projects/animations.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "GSAP" },
      { id: 2, name: "Framer Motion" },
      { id: 3, name: "React Three Fiber" },
      { id: 4, name: "Next.js" },
    ],
  },
];

export const socials = [
  { name: "Whatsapp", href: "https://wa.me/918340441298" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kumar-r-u-bharti" },
  { name: "Phone", href: "tel:+918340441298" },
  { name: "GitHub", href: "https://github.com/R-U-Bharti" },
];
