export interface BrandConfig {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  subTagline: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  availability: string;
}

export const defaultBrandConfig: BrandConfig = {
  name: "ZYNTAVERSE TECHNOLOGIES",
  shortName: "ZYNTAVERSE",
  role: "Full-Stack Technology Partner • From Idea to Scale",
  tagline: "INNOVATE • BUILD • SCALE",
  subTagline: "Smart technology. Real solutions. Lasting impact.",
  description:
    "We build innovative digital solutions that help businesses grow, operate smarter and stay ahead in a digital world.",
  location: "Mumbai, India | Global",
  email: "zyntaversetechnologies@gmail.com",
  phone: "+91 7992153750",
  whatsapp: "+91 7992153750",
  linkedin: "https://in.linkedin.com/in/krishnayadav0218",
  github: "https://github.com/krishnayadav0218",
  portfolioUrl: "https://krishna-portfolio0218.vercel.app/",
  availability: "Available for Q4 Enterprise & Startup Projects",
};

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  accent: "cyan" | "purple" | "magenta" | "blue";
}

export const statsData: StatItem[] = [
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "High-performance production systems delivered globally",
    accent: "cyan",
  },
  {
    id: "clients",
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Fast-growing startups, agencies & enterprise brands",
    accent: "purple",
  },
  {
    id: "experience",
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Full-stack development, AI & cloud architecture",
    accent: "magenta",
  },
  {
    id: "commitment",
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Security-first, on-time delivery & ongoing support",
    accent: "blue",
  },
];

export interface AboutPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  accent: string;
}

export const aboutPillars: AboutPillar[] = [
  {
    id: "fullstack",
    title: "Web & App Engineering",
    subtitle: "End-to-End Modern Digital Systems",
    description:
      "Architecting high-throughput React/Next.js platforms and cross-platform mobile apps with enterprise microservices and secure distributed databases.",
    metrics: "99.9% Uptime • <100ms API Latency",
    accent: "#00F0FF",
  },
  {
    id: "ai",
    title: "AI & Autonomous Systems",
    subtitle: "Custom Copilots, LLMs & Intelligent Bots",
    description:
      "Deploying proprietary RAG systems, AI customer automation, predictive models, and self-learning pipelines that transform operations and multiply team productivity.",
    metrics: "3.5x Efficiency Lift • 24/7 AI Automation",
    accent: "#8B5CF6",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps Architecture",
    subtitle: "High-Availability Multi-Cloud Infrastructure",
    description:
      "Dockerized containerization, AWS serverless pipelines, automated CI/CD releases, and bank-grade security protocols ensuring zero downtime.",
    metrics: "Zero-Downtime Releases • Bank-Grade Security",
    accent: "#38BDF8",
  },
  {
    id: "analytics",
    title: "Data Analytics & BI",
    subtitle: "Executive Dashboards & Predictive Telemetry",
    description:
      "Transforming complex operational datasets into interactive Power BI, Tableau, and custom web dashboards that drive data-backed executive decisions.",
    metrics: "10M+ Rows Handled • Real-Time KPI Sync",
    accent: "#EC4899",
  },
  {
    id: "problemsolving",
    title: "Startup & MVP Incubation",
    subtitle: "Idea to Launch-Ready Product",
    description:
      "Empowering founders with rapid sprint prototyping, scalable architectures, and investor-ready digital infrastructure built to scale seamlessly.",
    metrics: "Idea → MVP in 2–4 Weeks • Scale Ready",
    accent: "#10B981",
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  accentColor: string;
  glowClass: string;
  iconType:
    | "fullstack"
    | "uiux"
    | "custom-software"
    | "mvp"
    | "cloud"
    | "cybersecurity"
    | "mobile"
    | "api"
    | "ai"
    | "data"
    | "arvr"
    | "consulting";
  deliverables: string[];
  technologies: string[];
  timeline: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-app-development",
    number: "01",
    title: "Web & App Development",
    shortDescription:
      "Custom websites and apps built for growth and performance.",
    fullDescription:
      "Engineering blazing-fast, responsive web applications and scalable digital platforms built with Next.js, React, and Node.js. Tailored for maximum conversion, speed, and reliability.",
    accentColor: "#00F0FF",
    glowClass: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconType: "fullstack",
    deliverables: [
      "Custom Full-Stack Web Applications & SaaS",
      "Progressive Web Apps (PWA) & Responsive Portals",
      "Interactive 3D WebGL & High-Conversion Sites",
      "SEO, Core Web Vitals & Edge Cloud Optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    timeline: "3 – 6 Weeks",
  },
  {
    id: "uiux-design-branding",
    number: "02",
    title: "UI/UX Design & Branding",
    shortDescription:
      "Interfaces and identities that users love and businesses remember.",
    fullDescription:
      "Crafting world-class design systems, futuristic glassmorphic UI, and seamless user experiences. We combine human psychology with motion design to maximize engagement and brand prestige.",
    accentColor: "#EC4899",
    glowClass: "from-pink-500/20 via-purple-500/10 to-transparent",
    iconType: "uiux",
    deliverables: [
      "Brand Identity, Logo & Design Language",
      "Interactive High-Fidelity Figma Prototypes",
      "Comprehensive UI Component Systems",
      "Conversion Rate & User Flow Optimization",
    ],
    technologies: ["Figma", "Design Systems", "Tailwind CSS", "Motion UI"],
    timeline: "2 – 4 Weeks",
  },
  {
    id: "custom-software-development",
    number: "03",
    title: "Custom Software Development",
    shortDescription:
      "Powerful, scalable tools built around the way your team works.",
    fullDescription:
      "Tailor-made internal business tools, customized ERP/CRM suites, enterprise inventory engines, and automated backends designed specifically to eliminate friction in your workflow.",
    accentColor: "#8B5CF6",
    glowClass: "from-purple-500/20 via-indigo-500/10 to-transparent",
    iconType: "custom-software",
    deliverables: [
      "Bespoke Enterprise Resource Planning (ERP)",
      "Custom Client Relationship Portals (CRM)",
      "Automated Invoicing & Operational Engines",
      "Role-Based Access Control (RBAC) Architecture",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MySQL", "Docker"],
    timeline: "4 – 8 Weeks",
  },
  {
    id: "mvp-development-startups",
    number: "04",
    title: "MVP Development for Startups",
    shortDescription:
      "From idea to launch-ready product faster and smarter.",
    fullDescription:
      "Helping innovative founders bring their vision to market with lean, investor-ready MVPs. We engineer rapid, scalable architectures so you launch on time and validate fast.",
    accentColor: "#10B981",
    glowClass: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconType: "mvp",
    deliverables: [
      "Rapid Agile Sprint MVP in 2–4 Weeks",
      "Investor Pitch Ready Tech Demonstrators",
      "Modular Architecture Ready to Scale to Millions",
      "Integrated User Feedback & Analytics Loop",
    ],
    technologies: ["Next.js", "Node.js", "Firebase", "Supabase", "AWS"],
    timeline: "2 – 4 Weeks",
  },
  {
    id: "cloud-devops-services",
    number: "05",
    title: "Cloud & DevOps Services",
    shortDescription:
      "Scalable, secure and high-performing cloud solutions.",
    fullDescription:
      "Modern cloud architecture engineered for 99.99% uptime, zero-downtime CI/CD deployment pipelines, automated auto-scaling, container orchestration, and serverless backends.",
    accentColor: "#38BDF8",
    glowClass: "from-sky-500/20 via-cyan-500/10 to-transparent",
    iconType: "cloud",
    deliverables: [
      "AWS & Multi-Cloud Infrastructure Architecture",
      "Docker & Kubernetes Container Orchestration",
      "Automated GitHub Actions CI/CD Pipelines",
      "Serverless Microservices & Edge CDN Caching",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Firebase"],
    timeline: "2 – 5 Weeks",
  },
  {
    id: "cybersecurity-solutions",
    number: "06",
    title: "Cybersecurity Solutions",
    shortDescription:
      "Protect your data, users and business from evolving threats.",
    fullDescription:
      "Enterprise-grade security audits, zero-trust authentication, automated vulnerability scanning, end-to-end data encryption, and GDPR/data compliance safeguards for your platforms.",
    accentColor: "#F43F5E",
    glowClass: "from-rose-500/20 via-pink-500/10 to-transparent",
    iconType: "cybersecurity",
    deliverables: [
      "Zero-Trust Authentication & OAuth2 / JWT Security",
      "Vulnerability Assessment & Code Penetration Audits",
      "End-to-End Encryption & Cloud Security Hardening",
      "Web Application Firewall (WAF) & DDoS Protection",
    ],
    technologies: ["OAuth 2.0", "SSL/TLS", "JWT", "Security Auditing", "AWS WAF"],
    timeline: "2 – 4 Weeks",
  },
  {
    id: "mobile-app-development",
    number: "07",
    title: "Mobile App Development",
    shortDescription:
      "Native & cross-platform apps for iOS and Android.",
    fullDescription:
      "Crafting smooth, high-fidelity mobile experiences that delight users. Using Flutter and React Native, we deliver 60fps performance with single-codebase efficiency across iOS and Android.",
    accentColor: "#06B6D4",
    glowClass: "from-cyan-500/20 via-teal-500/10 to-transparent",
    iconType: "mobile",
    deliverables: [
      "Flutter Cross-Platform iOS & Android Apps",
      "React Native High-Performance Applications",
      "Real-Time Push Notifications & Offline Sync",
      "App Store & Google Play Store Launch Publishing",
    ],
    technologies: ["Flutter", "Dart", "React Native", "Firebase", "Node.js"],
    timeline: "4 – 8 Weeks",
  },
  {
    id: "api-development-integration",
    number: "08",
    title: "API Development & Integration",
    shortDescription:
      "Connect systems, streamline workflows, boost efficiency.",
    fullDescription:
      "Designing sub-millisecond RESTful and GraphQL APIs, seamless payment gateway integrations, webhooks, and third-party CRM/ERP connectors that make your software ecosystem click together.",
    accentColor: "#F59E0B",
    glowClass: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconType: "api",
    deliverables: [
      "Ultra-Fast RESTful & GraphQL Microservice APIs",
      "Stripe, Razorpay, PayPal Payment Gateways",
      "Third-Party CRM, ERP & WhatsApp Business APIs",
      "Comprehensive Swagger / OpenAPI Documentation",
    ],
    technologies: ["Node.js", "Express", "Python FastAPI", "GraphQL", "Postman"],
    timeline: "2 – 4 Weeks",
  },
  {
    id: "chatbot-ai-solutions",
    number: "09",
    title: "Chatbot & AI Solutions",
    shortDescription:
      "Smart automation for better customer experiences.",
    fullDescription:
      "Harness the power of generative AI with custom RAG chatbots, WhatsApp automated support agents, intelligent semantic search engines, and automated AI lead qualification systems.",
    accentColor: "#A855F7",
    glowClass: "from-purple-500/20 via-pink-500/10 to-transparent",
    iconType: "ai",
    deliverables: [
      "Custom Enterprise RAG Knowledge Copilots",
      "24/7 Intelligent WhatsApp & Web Support Chatbots",
      "Autonomous Multi-Agent AI Workflow Pipelines",
      "Sentiment Analysis, Lead Scoring & Auto-Routing",
    ],
    technologies: ["Python", "OpenAI / Gemini", "LangChain", "Vector DBs", "FastAPI"],
    timeline: "3 – 6 Weeks",
  },
  {
    id: "data-analytics-bi",
    number: "10",
    title: "Data Analytics & Business Intelligence",
    shortDescription:
      "Turn data into actionable insights.",
    fullDescription:
      "Transforming complex business datasets into crystal-clear visual intelligence. We engineer automated ETL data pipelines and interactive executive dashboards that uncover revenue opportunities.",
    accentColor: "#0284C7",
    glowClass: "from-sky-500/20 via-blue-500/10 to-transparent",
    iconType: "data",
    deliverables: [
      "Interactive Power BI & Tableau Executive Dashboards",
      "Automated SQL & Python Data Warehousing / ETL",
      "Custom Real-Time Web Telemetry Visualizations",
      "Customer Lifetime Value & Revenue Forecasting",
    ],
    technologies: ["Python", "SQL", "Power BI", "Tableau", "MongoDB", "MySQL"],
    timeline: "2 – 5 Weeks",
  },
  {
    id: "ar-vr-development",
    number: "11",
    title: "AR/VR Development",
    shortDescription:
      "Immersive experiences for a smarter tomorrow.",
    fullDescription:
      "Pushing the boundaries of the digital web with interactive 3D WebGL scenes, virtual product showrooms, Augmented Reality previewers, and spatial interactive brand experiences.",
    accentColor: "#EC4899",
    glowClass: "from-pink-500/20 via-purple-500/10 to-transparent",
    iconType: "arvr",
    deliverables: [
      "Web-Based 3D Interactive Spatial Portals",
      "360° Augmented Reality Product Showrooms",
      "Interactive 3D Architectural Visualizations",
      "Gamified Brand Micro-Experiences",
    ],
    technologies: ["Three.js", "React Three Fiber", "WebXR", "GLSL", "Blender"],
    timeline: "3 – 7 Weeks",
  },
  {
    id: "it-consulting-digital-transformation",
    number: "12",
    title: "IT Consulting & Digital Transformation",
    shortDescription:
      "Strategy, technology and support for long-term success.",
    fullDescription:
      "Guiding businesses through technology modernizations, legacy cloud migrations, technical architecture assessments, and long-term digital roadmaps designed for lasting competitive advantage.",
    accentColor: "#00F0FF",
    glowClass: "from-cyan-500/20 via-indigo-500/10 to-transparent",
    iconType: "consulting",
    deliverables: [
      "Legacy Codebase Modernization & Cloud Migration",
      "Enterprise Tech Stack Auditing & Cost Optimization",
      "Engineering Team Advisory & Technical Roadmapping",
      "Dedicated Fractional CTO & Architecture Partnership",
    ],
    technologies: ["Cloud Strategy", "Enterprise Agile", "Microservices", "Security Auditing"],
    timeline: "Ongoing / Retainer",
  },
];

export const additionalServices = [
  { name: "E-commerce Solutions", category: "Development", icon: "ShoppingCart" },
  { name: "CMS Development (WordPress, Shopify & more)", category: "Development", icon: "Layout" },
  { name: "Content Writing & Strategy", category: "Marketing & Content", icon: "FileText" },
  { name: "SEO & Digital Marketing", category: "Marketing & Content", icon: "Search" },
  { name: "Social Media Management", category: "Marketing & Content", icon: "Share2" },
  { name: "Website Redesign", category: "Design", icon: "RefreshCw" },
  { name: "Landing Page Design", category: "Design", icon: "Smartphone" },
  { name: "Product Prototyping", category: "Design", icon: "Box" },
  { name: "Domain & Hosting Solutions", category: "Infrastructure", icon: "Server" },
  { name: "Technical Documentation", category: "Consulting", icon: "BookOpen" },
  { name: "Maintenance & Support", category: "Support", icon: "LifeBuoy" },
  { name: "Performance Optimization", category: "Development", icon: "Zap" },
  { name: "Third-party Integrations", category: "Integration", icon: "Layers" },
  { name: "Technical Staff Augmentation", category: "Consulting", icon: "Users" },
  { name: "Business Automation", category: "Automation", icon: "Workflow" },
  { name: "SaaS Development", category: "Development", icon: "Cloud" },
  { name: "Migration & Upgradation", category: "Infrastructure", icon: "ArrowUpRight" },
  { name: "Backup & Disaster Recovery", category: "Infrastructure", icon: "Shield" },
  { name: "Training & Workshops", category: "Consulting", icon: "GraduationCap" },
  { name: "IT Infrastructure Setup", category: "Infrastructure", icon: "HardDrive" },
  { name: "Graphic Design", category: "Design", icon: "Image" },
  { name: "Video Editing & Animation", category: "Media", icon: "Video" },
  { name: "UI/UX Audit & Consulting", category: "Design", icon: "CheckCircle" },
  { name: "Custom API Solutions", category: "Development", icon: "Code2" },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "AI & ML" | "Data & BI" | "Full-Stack";
  tagline: string;
  description: string;
  technologies: string[];
  metrics: string[];
  accentColor: string;
  visualType: "ai-game" | "analytics-bi" | "erp-system" | "ai-chatbot" | "ecommerce-3d" | "portfolio-3d";
  githubUrl: string;
  liveUrl: string;
  architectureHighlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "ai-self-learning-game",
    title: "AI Game / Self-Learning AI",
    category: "AI & ML",
    tagline: "Deep Reinforcement Learning Arena & Neural Visualizer",
    description:
      "An interactive self-learning AI simulation where autonomous neural agents learn complex navigation and strategy in real time using Deep Q-Learning and genetic evolution algorithms.",
    technologies: ["Python", "Machine Learning", "React", "Three.js", "TypeScript"],
    metrics: ["120 FPS Neural Sim", "98.4% Win-Rate Convergence", "Live Policy Heatmap"],
    accentColor: "#00F0FF",
    visualType: "ai-game",
    githubUrl: "https://github.com/zyntaverse/neuro-arena-rl",
    liveUrl: "#demo-ai-game",
    architectureHighlights: [
      "Real-time WebSocket bridge streaming tensor weights & reward curves at 60Hz",
      "3D WebGL neural network topology inspector showing active synapse firing",
      "Customizable reward shaping, epsilon-decay controls, and multi-agent tournament mode",
    ],
  },
  {
    id: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    category: "Data & BI",
    tagline: "Enterprise Predictive BI & Telemetry Command Center",
    description:
      "A high-density executive analytics platform aggregating multi-channel revenue, supply chain telemetry, and ML-driven anomaly detection with interactive drill-downs.",
    technologies: ["Python", "SQL", "React", "Next.js", "Power BI", "Tableau"],
    metrics: ["15M+ Events/Day", "<180ms Query Speed", "Automated Anomaly Alerts"],
    accentColor: "#8B5CF6",
    visualType: "analytics-bi",
    githubUrl: "https://github.com/zyntaverse/pulse-analytics-bi",
    liveUrl: "#demo-analytics",
    architectureHighlights: [
      "Columnar SQL aggregation engine with automated hourly forecasting models",
      "Interactive cohort retention matrices, geospatial revenue maps, and KPI variance alerts",
      "One-click executive PDF/CSV export and embedded Power BI / Tableau bridge",
    ],
  },
  {
    id: "business-management-system",
    title: "Business Management System",
    category: "Full-Stack",
    tagline: "Unified Multi-Tenant ERP, CRM & Operations Suite",
    description:
      "Comprehensive enterprise resource planning platform combining client pipelines, automated invoicing, inventory tracking, role-based access control, and team analytics.",
    technologies: ["Next.js", "Node.js", "Express", "MySQL", "Docker", "AWS"],
    metrics: ["45+ Active Teams", "Zero-Downtime RBAC", "Automated Billing Engine"],
    accentColor: "#3B82F6",
    visualType: "erp-system",
    githubUrl: "https://github.com/zyntaverse/nexus-erp-suite",
    liveUrl: "#demo-erp",
    architectureHighlights: [
      "Strict multi-tenant SQL isolation with granular Role-Based Access Control (RBAC)",
      "Automated recurring invoice generation, webhook reconciliation, and audit logging",
      "Real-time Kanban resource allocation and department utilization telemetry",
    ],
  },
  {
    id: "ai-chatbot-copilot",
    title: "Enterprise AI Chatbot",
    category: "AI & ML",
    tagline: "Multi-Agent RAG Knowledge Copilot & WhatsApp Support Engine",
    description:
      "Enterprise conversational AI platform with semantic vector retrieval over company documentation, APIs, and catalogs—complete with live tool-calling and WhatsApp integration.",
    technologies: ["Python", "AI", "React", "Next.js", "MongoDB", "Node.js"],
    metrics: ["94% Auto-Resolution", "0.7s First-Token TTFT", "Verified Citations"],
    accentColor: "#EC4899",
    visualType: "ai-chatbot",
    githubUrl: "https://github.com/zyntaverse/aether-rag-copilot",
    liveUrl: "#demo-chatbot",
    architectureHighlights: [
      "Hybrid semantic + keyword vector search with deterministic citation grounding",
      "Live tool-calling engine capable of querying inventory and booking calendar appointments",
      "Seamless escalation to live WhatsApp support agents with complete chat context",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "High-Conversion E-commerce Platform",
    category: "Full-Stack",
    tagline: "High-Speed Headless Commerce & 3D Interactive Product Studio",
    description:
      "Next-generation digital storefront featuring interactive 3D product inspection, instant AI personalized recommendations, sub-second edge checkout, and live inventory sync.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    metrics: ["+45% Conversion Lift", "99 Lighthouse Score", "Instant Edge Checkout"],
    accentColor: "#10B981",
    visualType: "ecommerce-3d",
    githubUrl: "https://github.com/zyntaverse/hyperion-commerce-3d",
    liveUrl: "#demo-ecommerce",
    architectureHighlights: [
      "Interactive 360° 3D product customizer with real-time material and lighting swaps",
      "Optimistic cart state, payment gateway reconciliation, and live inventory locking",
      "AI-driven product recommendations boosting average order value",
    ],
  },
  {
    id: "portfolio-business-website",
    title: "3D Spatial Business Flagship",
    category: "Full-Stack",
    tagline: "Futuristic 3D Spatial Experience & Business Conversion Engine",
    description:
      "Bespoke interactive 3D business flagship blending React Three Fiber spatial scenes, glassmorphic UI architecture, physics-driven micro-interactions, and instant lead capture.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "React"],
    metrics: ["60 FPS Spatial WebGL", "100% Mobile Scannable", "3.8x Lead Engagement"],
    accentColor: "#06B6D4",
    visualType: "portfolio-3d",
    githubUrl: "https://github.com/zyntaverse/business-website",
    liveUrl: "#home",
    architectureHighlights: [
      "Interactive React Three Fiber workstation, holographic QR contact matrix, and tech clouds",
      "Hardware-accelerated glassmorphism cards with mouse-tracking 3D tilt & glare",
      "Adaptive mobile scene simplification preserving 60fps across all devices",
    ],
  },
];

export interface TechNode {
  id: string;
  name: string;
  category: "Frontend" | "Backend & DB" | "AI & Data" | "Cloud & DevOps";
  color: string;
  level: string;
  description: string;
  connections: string[];
}

export const techStackData: TechNode[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    color: "#00F0FF",
    level: "Expert",
    description: "Component architecture, custom hooks, concurrent UI & R3F spatial rendering",
    connections: ["nextjs", "javascript", "html", "css", "nodejs"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    color: "#F8FAFC",
    level: "Expert",
    description: "App Router, Server Actions, SSR/ISR, Edge middleware & full-stack web apps",
    connections: ["react", "javascript", "nodejs", "aws", "firebase"],
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Frontend",
    color: "#38BDF8",
    level: "Expert",
    description: "Cross-platform iOS and Android native apps with 60fps custom UI animations",
    connections: ["react", "nodejs", "firebase"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    color: "#FACC15",
    level: "Expert",
    description: "ES2024+, asynchronous engines, WebGL/Canvas APIs & high-performance DOM",
    connections: ["react", "nextjs", "nodejs", "html", "css"],
  },
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    color: "#FB923C",
    level: "Expert",
    description: "Semantic architecture, WCAG accessibility, SEO structure & modern Web APIs",
    connections: ["css", "javascript", "react"],
  },
  {
    id: "css",
    name: "CSS / Tailwind",
    category: "Frontend",
    color: "#38BDF8",
    level: "Expert",
    description: "Tailwind CSS, 3D transforms, glassmorphism, shaders & responsive grid systems",
    connections: ["html", "javascript", "react"],
  },
  {
    id: "python",
    name: "Python",
    category: "AI & Data",
    color: "#3B82F6",
    level: "Expert",
    description: "AI/ML pipelines, FastAPI microservices, data engineering & automation",
    connections: ["ml", "ai", "sql", "powerbi", "tableau", "aws"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend & DB",
    color: "#22C55E",
    level: "Expert",
    description: "Event-driven microservices, WebSockets, streams & high-concurrency APIs",
    connections: ["express", "javascript", "mongodb", "mysql", "docker"],
  },
  {
    id: "express",
    name: "Express",
    category: "Backend & DB",
    color: "#94A3B8",
    level: "Expert",
    description: "RESTful API gateways, JWT security middleware, rate-limiting & webhook routers",
    connections: ["nodejs", "mongodb", "mysql", "docker"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "Backend & DB",
    color: "#06B6D4",
    level: "Expert",
    description: "Complex analytical queries, window functions, indexing & schema optimization",
    connections: ["mysql", "python", "powerbi", "tableau"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Backend & DB",
    color: "#10B981",
    level: "Expert",
    description: "Document modeling, aggregation pipelines, vector search & distributed clusters",
    connections: ["nodejs", "express", "nextjs", "ai"],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Backend & DB",
    color: "#0284C7",
    level: "Expert",
    description: "ACID relational transactions, replication, stored procedures & high-load tuning",
    connections: ["sql", "nodejs", "express"],
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "AI & Data",
    color: "#F59E0B",
    level: "Expert",
    description: "DAX modeling, Power Query ETL, executive KPI dashboards & enterprise reporting",
    connections: ["sql", "python", "tableau", "mysql"],
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "AI & Data",
    color: "#60A5FA",
    level: "Advanced",
    description: "Interactive visual storytelling, geospatial analytics & business intelligence",
    connections: ["sql", "python", "powerbi"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    color: "#0EA5E9",
    level: "Advanced",
    description: "Multi-stage containerization, Docker Compose orchestration & reproducible deploys",
    connections: ["aws", "nodejs", "python"],
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud & DevOps",
    color: "#FBBF24",
    level: "Advanced",
    description: "EC2, S3, Lambda serverless, RDS, CloudFront CDN & scalable cloud architecture",
    connections: ["docker", "nodejs", "python", "nextjs"],
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud & DevOps",
    color: "#F59E0B",
    level: "Expert",
    description: "Real-time Firestore, Auth, Cloud Functions & instant global web hosting",
    connections: ["react", "nextjs", "flutter"],
  },
  {
    id: "ai",
    name: "Chatbot & AI",
    category: "AI & Data",
    color: "#8B5CF6",
    level: "Expert",
    description: "LLM orchestration, RAG architectures, autonomous agents & multimodal intelligence",
    connections: ["python", "nextjs", "nodejs", "mongodb"],
  },
];

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  duration: string;
  accent: string;
}

export const workProcessData: ProcessStage[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Business & Technical Audit",
    description:
      "Deep-dive discovery into your business model, target users, operational bottlenecks, and measurable ROI objectives.",
    deliverable: "Requirements Brief & Solution Roadmap",
    duration: "Days 1–3",
    accent: "#00F0FF",
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "System Architecture & Strategy",
    description:
      "Blueprinting database schemas, API contracts, AI/data pipelines, tech stack selection, and milestone delivery sprints.",
    deliverable: "Technical Architecture Spec & Sprint Plan",
    duration: "Days 4–6",
    accent: "#38BDF8",
  },
  {
    step: "03",
    title: "Design",
    subtitle: "UI/UX & Interactive Prototyping",
    description:
      "Crafting high-conversion glassmorphic interfaces, interactive prototypes, responsive layouts, and design tokens.",
    deliverable: "Interactive Prototypes & Design System",
    duration: "Week 2",
    accent: "#8B5CF6",
  },
  {
    step: "04",
    title: "Develop",
    subtitle: "Full-Stack & AI Engineering",
    description:
      "Writing clean, modular TypeScript, Next.js, and Python code—building responsive frontends, secure APIs, and intelligent engines.",
    deliverable: "Production Codebase & Staging Preview",
    duration: "Weeks 2–5",
    accent: "#EC4899",
  },
  {
    step: "05",
    title: "Test",
    subtitle: "QA, Security & Performance",
    description:
      "Rigorous end-to-end testing, security audits, Core Web Vitals optimization, and cross-device testing across iOS, Android, and Desktop.",
    deliverable: "99+ Performance & Security Audit",
    duration: "Week 6",
    accent: "#10B981",
  },
  {
    step: "06",
    title: "Launch",
    subtitle: "Zero-Downtime Cloud Deployment",
    description:
      "Automated CI/CD deployment to AWS/Vercel/Docker with SSL, custom domains, CDN edge caching, and live telemetry monitoring.",
    deliverable: "Live Production System & Handover",
    duration: "Launch Day",
    accent: "#F59E0B",
  },
  {
    step: "07",
    title: "Support",
    subtitle: "Continuous Support & Growth",
    description:
      "Continuous performance monitoring, feature expansion, AI fine-tuning, and dedicated long-term technical partnership.",
    deliverable: "SLA Warranty & Dedicated Maintenance",
    duration: "Ongoing",
    accent: "#00F0FF",
  },
];

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  accentColor: string;
  highlights: string[];
}

export const whyMeData: WhyChooseItem[] = [
  {
    id: "end-to-end-solutions",
    number: "01",
    title: "End-to-End Solutions",
    subtitle: "From Planning to Launch and Beyond",
    description:
      "We handle every phase of your digital evolution—from initial architectural concept and UI/UX design to high-throughput cloud infrastructure and 24/7 post-launch maintenance.",
    metricLabel: "Execution Scope",
    metricValue: "100% Full-Cycle",
    accentColor: "#00F0FF",
    highlights: [
      "Discovery, wireframing, development & deployment",
      "Seamless integration between web, mobile & cloud",
      "Single accountable technology partner for everything",
    ],
  },
  {
    id: "expert-team",
    number: "02",
    title: "Expert Team",
    subtitle: "Skilled Professionals, Passionate About Innovation",
    description:
      "Our team brings deep engineering mastery across React/Next.js, Python AI/ML, cloud DevOps, and high-performance databases to deliver resilient software.",
    metricLabel: "Engineering Standard",
    metricValue: "Top 1% Quality",
    accentColor: "#8B5CF6",
    highlights: [
      "Modern tech stack: Next.js, Python, Flutter, AWS",
      "Production-tested patterns & enterprise clean code",
      "Continuous innovation in AI automation & 3D Web",
    ],
  },
  {
    id: "secure-reliable",
    number: "03",
    title: "Secure & Reliable",
    subtitle: "Security-First Approach with Best Industry Practices",
    description:
      "Every architecture is fortified with zero-trust authentication, robust data encryption, automated backup routines, and rigorous compliance to protect your enterprise assets.",
    metricLabel: "Security & Uptime",
    metricValue: "99.9% Uptime",
    accentColor: "#EC4899",
    highlights: [
      "Zero-Trust OAuth2, JWT & strict data encryption",
      "Automated backups & disaster recovery readiness",
      "OWASP top-10 security compliant codebases",
    ],
  },
  {
    id: "results-driven",
    number: "04",
    title: "Results Driven",
    subtitle: "We Focus on Measurable Results That Drive Real Business Growth",
    description:
      "We do not write code for code's sake. Every feature, micro-interaction, and AI workflow is engineered to lower operational costs, accelerate sales, and boost user retention.",
    metricLabel: "Business Impact",
    metricValue: "Measurable ROI",
    accentColor: "#10B981",
    highlights: [
      "Conversion-optimized user flows & fast load times",
      "Actionable analytics & data telemetry built-in",
      "Accelerated time-to-market for fast validation",
    ],
  },
  {
    id: "on-time-support",
    number: "05",
    title: "On-time Support",
    subtitle: "Continuous Support and Maintenance to Keep You Ahead",
    description:
      "Our partnership doesn't stop at deployment. We offer proactive performance monitoring, continuous bug tracking, feature enhancements, and rapid emergency support.",
    metricLabel: "SLA Response",
    metricValue: "< 1 Hr Priority",
    accentColor: "#F59E0B",
    highlights: [
      "Direct WhatsApp and dedicated support line",
      "Proactive server health & security patch management",
      "Ongoing feature upgrades as your business grows",
    ],
  },
];
