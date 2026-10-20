export interface BrandConfig {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  availability: string;
}

export const defaultBrandConfig: BrandConfig = {
  name: "KRISH // NEXUS",
  shortName: "KRISHNA",
  role: "Full-Stack Architect • AI & Data Systems Engineer",
  tagline: "Building Digital Experiences from Idea to Scale",
  location: "Global • Remote & On-Site Studio",
  email: "zyntaversetechnologies@gmail.com",
  phone: "+91 7992153750",
  linkedin: "https://linkedin.com/in/krish-dev",
  github: "https://github.com/krish-dev",
  portfolioUrl: "https://krishnexus.dev",
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
    label: "Projects",
    sublabel: "Production systems delivered globally",
    accent: "cyan",
  },
  {
    id: "experience",
    value: 5,
    suffix: "+",
    label: "Years Learning & Experience",
    sublabel: "Full-stack, AI & cloud architecture",
    accent: "purple",
  },
  {
    id: "clients",
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Startups, agencies & enterprise teams",
    accent: "magenta",
  },
  {
    id: "commitment",
    value: 100,
    suffix: "%",
    label: "Commitment",
    sublabel: "On-time delivery & scalable architecture",
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
    title: "Full-Stack Development",
    subtitle: "End-to-End Web & Cloud Engineering",
    description:
      "Architecting resilient React/Next.js frontends paired with high-throughput Node.js, Python, and distributed database backends.",
    metrics: "99.9% Uptime • <100ms API Latency",
    accent: "#00F0FF",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: "Executive BI & Predictive Telemetry",
    description:
      "Transforming raw operational datasets into interactive Power BI, Tableau, and custom real-time web dashboards that drive executive decisions.",
    metrics: "10M+ Rows Processed • Real-Time KPIs",
    accent: "#38BDF8",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    subtitle: "LLMs, RAG Agents & Neural Systems",
    description:
      "Integrating custom machine learning models, autonomous AI agents, semantic search, and conversational copilots into business workflows.",
    metrics: "3.4x Productivity Multiplier",
    accent: "#8B5CF6",
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Autonomous Workflow Orchestration",
    description:
      "Eliminating manual bottlenecks with intelligent data pipelines, webhook orchestrations, and custom background worker engines.",
    metrics: "70%+ Reduction in Manual Ops",
    accent: "#EC4899",
  },
  {
    id: "problemsolving",
    title: "Problem Solving",
    subtitle: "First-Principles Technical Strategy",
    description:
      "Bridging complex business challenges and modern engineering to deliver maintainable, revenue-generating digital products.",
    metrics: "Idea → MVP → Enterprise Scale",
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
  iconType: "fullstack" | "ai" | "data" | "uiux" | "backend" | "automation";
  deliverables: string[];
  technologies: string[];
  timeline: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-dev",
    number: "01",
    title: "Full-Stack Development",
    shortDescription:
      "Modern responsive websites and scalable web applications.",
    fullDescription:
      "End-to-end engineering of ultra-fast, SEO-optimized web applications and SaaS platforms. From interactive 3D spatial interfaces to multi-tenant enterprise portals built for millions of requests.",
    accentColor: "#00F0FF",
    glowClass: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconType: "fullstack",
    deliverables: [
      "Custom SaaS & Enterprise Web Applications",
      "Progressive Web Apps (PWA) & Real-Time Portals",
      "3D WebGL & Next.js High-Conversion Marketing Sites",
      "Cloud Deployment, CI/CD & Edge Optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "AWS"],
    timeline: "3 – 8 Weeks",
  },
  {
    id: "ai-ml",
    number: "02",
    title: "AI & Machine Learning",
    shortDescription:
      "AI-powered applications, automation and intelligent systems.",
    fullDescription:
      "Design and deployment of custom AI copilots, Retrieval-Augmented Generation (RAG) knowledge systems, predictive ML models, and self-learning autonomous workflows tailored to your proprietary data.",
    accentColor: "#8B5CF6",
    glowClass: "from-purple-500/20 via-indigo-500/10 to-transparent",
    iconType: "ai",
    deliverables: [
      "Custom RAG Chatbots & Enterprise AI Copilots",
      "Predictive Analytics & Deep Learning Models",
      "Computer Vision & NLP Document Processing",
      "Fine-Tuned LLM APIs & Multi-Agent Pipelines",
    ],
    technologies: ["Python", "Machine Learning", "AI", "OpenAI / Gemini", "Vector DBs", "FastAPI"],
    timeline: "4 – 10 Weeks",
  },
  {
    id: "data-analytics",
    number: "03",
    title: "Data Analytics",
    shortDescription:
      "Data analysis, dashboards, visualization and business insights.",
    fullDescription:
      "Turn fragmented business metrics into crystal-clear visual intelligence. I build automated ETL pipelines and interactive executive dashboards that surface revenue opportunities and operational risks.",
    accentColor: "#06B6D4",
    glowClass: "from-sky-500/20 via-cyan-500/10 to-transparent",
    iconType: "data",
    deliverables: [
      "Interactive Power BI & Tableau Executive Dashboards",
      "Custom Web-Based Real-Time Telemetry Visualizations",
      "Automated SQL & Python ETL Data Warehousing",
      "Customer Churn, Cohort & Revenue Forecasting",
    ],
    technologies: ["Python", "SQL", "Power BI", "Tableau", "MySQL", "MongoDB"],
    timeline: "2 – 5 Weeks",
  },
  {
    id: "uiux-design",
    number: "04",
    title: "UI/UX & Web Design",
    shortDescription:
      "Modern, responsive and conversion-focused digital experiences.",
    fullDescription:
      "Crafting high-impact design systems, futuristic glassmorphic interfaces, and frictionless user journeys that elevate brand authority and maximize visitor-to-client conversion rates.",
    accentColor: "#EC4899",
    glowClass: "from-pink-500/20 via-purple-500/10 to-transparent",
    iconType: "uiux",
    deliverables: [
      "Interactive 3D & Motion-First Interface Design",
      "Comprehensive Design Systems & Component Libraries",
      "Conversion Rate Optimization (CRO) & User Flows",
      "Responsive Mobile, Tablet & Desktop Prototyping",
    ],
    technologies: ["React", "Tailwind CSS", "Three.js", "Framer Motion", "HTML", "CSS"],
    timeline: "2 – 4 Weeks",
  },
  {
    id: "database-backend",
    number: "05",
    title: "Database & Backend",
    shortDescription:
      "Secure APIs, databases and backend architecture.",
    fullDescription:
      "Mission-critical backend engineering featuring zero-trust authentication, sub-millisecond caching, horizontally scalable microservices, and fault-tolerant relational & NoSQL database schemas.",
    accentColor: "#3B82F6",
    glowClass: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconType: "backend",
    deliverables: [
      "RESTful & GraphQL High-Concurrency APIs",
      "Relational (SQL/MySQL) & NoSQL (MongoDB) Modeling",
      "Dockerized Microservices & Cloud Infrastructure",
      "OAuth2, JWT, RBAC Security & Payment Integrations",
    ],
    technologies: ["Node.js", "Express", "Java", "SQL", "MongoDB", "MySQL", "Docker", "Firebase"],
    timeline: "3 – 6 Weeks",
  },
  {
    id: "business-automation",
    number: "06",
    title: "Business Automation",
    shortDescription:
      "Automate repetitive business processes using modern technology.",
    fullDescription:
      "Replace hours of manual spreadsheet work, repetitive data entry, and disconnected CRM updates with custom autonomous software agents, scheduled jobs, and seamless API integrations.",
    accentColor: "#10B981",
    glowClass: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconType: "automation",
    deliverables: [
      "Custom CRM, ERP & Billing Workflow Sync",
      "Automated Report Generation & Email Dispatchers",
      "Intelligent Web Scrapers & Market Monitors",
      "AI-Triggered Customer Onboarding & Ticketing",
    ],
    technologies: ["Python", "Node.js", "AWS", "Docker", "AI", "SQL"],
    timeline: "1 – 4 Weeks",
  },
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
    githubUrl: "https://github.com/krish-dev/neuro-arena-rl",
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
    githubUrl: "https://github.com/krish-dev/pulse-analytics-bi",
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
    githubUrl: "https://github.com/krish-dev/nexus-erp-suite",
    liveUrl: "#demo-erp",
    architectureHighlights: [
      "Strict multi-tenant SQL isolation with granular Role-Based Access Control (RBAC)",
      "Automated recurring invoice generation, webhook reconciliation, and audit logging",
      "Real-time Kanban resource allocation and department utilization telemetry",
    ],
  },
  {
    id: "ai-chatbot-copilot",
    title: "AI Chatbot",
    category: "AI & ML",
    tagline: "Multi-Agent RAG Knowledge Copilot & Support Engine",
    description:
      "Enterprise conversational AI platform with semantic vector retrieval over PDFs, SQL databases, and docs—complete with source citations, function calling, and human handoff.",
    technologies: ["Python", "AI", "React", "Next.js", "MongoDB", "Node.js"],
    metrics: ["92% Auto-Resolution", "0.8s First-Token TTFT", "Verified Citations"],
    accentColor: "#EC4899",
    visualType: "ai-chatbot",
    githubUrl: "https://github.com/krish-dev/aether-rag-copilot",
    liveUrl: "#demo-chatbot",
    architectureHighlights: [
      "Hybrid semantic + keyword vector search with deterministic citation grounding",
      "Live tool-calling engine capable of querying SQL databases and booking calendar slots",
      "Sentiment analysis guardrails and seamless escalation to live support agents",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Website",
    category: "Full-Stack",
    tagline: "High-Conversion Headless Commerce & 3D Product Studio",
    description:
      "Next-generation digital storefront featuring interactive 3D product inspection, instant AI personalized recommendations, sub-second edge checkout, and real-time inventory sync.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    metrics: ["+42% Conversion Lift", "99 Lighthouse Score", "Instant Edge Checkout"],
    accentColor: "#10B981",
    visualType: "ecommerce-3d",
    githubUrl: "https://github.com/krish-dev/hyperion-commerce-3d",
    liveUrl: "#demo-ecommerce",
    architectureHighlights: [
      "Interactive 360° 3D product customizer with real-time material and lighting swaps",
      "Optimistic cart state, Stripe/webhook order state machine, and live inventory locking",
      "AI-driven 'Complete the Setup' recommendation engine boosting average order value",
    ],
  },
  {
    id: "portfolio-business-website",
    title: "Portfolio / Business Website",
    category: "Full-Stack",
    tagline: "Futuristic 3D Spatial Agency & Personal Brand Platform",
    description:
      "Bespoke interactive 3D business flagship blending React Three Fiber spatial scenes, glassmorphic UI architecture, physics-driven micro-interactions, and lead capture.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "React"],
    metrics: ["60 FPS Spatial WebGL", "100% Responsive 3D", "3.8x Lead Engagement"],
    accentColor: "#06B6D4",
    visualType: "portfolio-3d",
    githubUrl: "https://github.com/krish-dev/nexus-3d-business",
    liveUrl: "#home",
    architectureHighlights: [
      "Custom procedural React Three Fiber workstation, neural tech cloud, and 3D QR matrix",
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
    name: "CSS",
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
    id: "java",
    name: "Java",
    category: "Backend & DB",
    color: "#F43F5E",
    level: "Advanced",
    description: "Object-oriented enterprise backend systems, multithreading & scalable APIs",
    connections: ["sql", "mysql", "docker", "aws"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "Backend & DB",
    color: "#06B6D4",
    level: "Expert",
    description: "Complex analytical queries, window functions, indexing & schema optimization",
    connections: ["mysql", "python", "powerbi", "tableau", "java"],
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
    connections: ["sql", "nodejs", "java", "express"],
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
    id: "git",
    name: "Git",
    category: "Cloud & DevOps",
    color: "#F97316",
    level: "Expert",
    description: "Distributed version control, branching strategies, rebasing & release workflows",
    connections: ["github", "docker", "aws"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "Cloud & DevOps",
    color: "#A855F7",
    level: "Expert",
    description: "GitHub Actions CI/CD pipelines, automated testing, code review & security scans",
    connections: ["git", "docker", "aws", "nextjs"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    color: "#0EA5E9",
    level: "Advanced",
    description: "Multi-stage containerization, Docker Compose orchestration & reproducible deploys",
    connections: ["aws", "nodejs", "python", "github"],
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud & DevOps",
    color: "#FBBF24",
    level: "Advanced",
    description: "EC2, S3, Lambda serverless, RDS, CloudFront CDN & scalable cloud architecture",
    connections: ["docker", "nodejs", "python", "nextjs", "github"],
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud & DevOps",
    color: "#F59E0B",
    level: "Expert",
    description: "Real-time Firestore, Auth, Cloud Functions & instant global web hosting",
    connections: ["react", "nextjs", "javascript"],
  },
  {
    id: "ml",
    name: "Machine Learning",
    category: "AI & Data",
    color: "#EC4899",
    level: "Advanced",
    description: "Supervised/unsupervised models, reinforcement learning, feature engineering & predictive AI",
    connections: ["python", "ai", "sql"],
  },
  {
    id: "ai",
    name: "AI",
    category: "AI & Data",
    color: "#8B5CF6",
    level: "Expert",
    description: "LLM orchestration, RAG architectures, autonomous agents & multimodal intelligence",
    connections: ["python", "ml", "nextjs", "nodejs", "mongodb"],
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
    deliverable: "Requirements Brief & Opportunity Matrix",
    duration: "Days 1–3",
    accent: "#00F0FF",
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "System Architecture & Roadmap",
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
      "Crafting high-conversion glassmorphic interfaces, 3D spatial interactions, responsive layouts, and design tokens.",
    deliverable: "Interactive Wireframes & Design System",
    duration: "Week 2",
    accent: "#8B5CF6",
  },
  {
    step: "04",
    title: "Develop",
    subtitle: "Full-Stack & AI Engineering",
    description:
      "Writing clean, modular TypeScript/Python code—building responsive frontends, secure APIs, and intelligent AI/data engines.",
    deliverable: "Production-Grade Codebase & Staging Builds",
    duration: "Weeks 2–5",
    accent: "#EC4899",
  },
  {
    step: "05",
    title: "Test",
    subtitle: "QA, Security & Performance",
    description:
      "Rigorous end-to-end testing, SQL/API load profiling, Lighthouse Core Web Vitals optimization, and cross-device validation.",
    deliverable: "99+ Performance & Security Audit Report",
    duration: "Week 6",
    accent: "#10B981",
  },
  {
    step: "06",
    title: "Launch",
    subtitle: "Zero-Downtime Cloud Deployment",
    description:
      "Automated CI/CD deployment to AWS/Vercel/Docker with SSL, custom domains, CDN edge caching, and live telemetry monitoring.",
    deliverable: "Live Production System & Documentation",
    duration: "Launch Day",
    accent: "#F59E0B",
  },
  {
    step: "07",
    title: "Support",
    subtitle: "Scale, Iterate & Optimize",
    description:
      "Continuous performance monitoring, feature expansion, AI model fine-tuning, and dedicated long-term technical partnership.",
    deliverable: "SLA Monitoring & Growth Roadmap",
    duration: "Ongoing",
    accent: "#00F0FF",
  },
];

export interface WhyMeItem {
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

export const whyMeData: WhyMeItem[] = [
  {
    id: "business-focused",
    number: "01",
    title: "Business-Focused Solutions",
    subtitle: "Engineering Tied Directly to Revenue & Efficiency",
    description:
      "I don't just write code in isolation—every architectural decision, UI flow, and AI workflow is engineered to increase conversions, reduce operational costs, and accelerate your business growth.",
    metricLabel: "Client ROI Focus",
    metricValue: "100% Goal-Aligned",
    accentColor: "#00F0FF",
    highlights: [
      "Conversion-optimized UX & clear value hierarchy",
      "Data-backed decisions with built-in KPI tracking",
      "Direct communication without agency middlemen",
    ],
  },
  {
    id: "modern-technology",
    number: "02",
    title: "Modern Technology",
    subtitle: "Next-Gen Stack Built for Speed & Intelligence",
    description:
      "Leveraging the latest production-proven ecosystem—React, Next.js, TypeScript, Python AI agents, Three.js WebGL, and cloud-native infrastructure—to keep your business ahead of competitors.",
    metricLabel: "Core Web Vitals",
    metricValue: "99+ Performance",
    accentColor: "#8B5CF6",
    highlights: [
      "Full-stack TypeScript + Python AI/ML synergy",
      "Hardware-accelerated 3D & spatial web capabilities",
      "Cloud-native Docker & AWS deployment readiness",
    ],
  },
  {
    id: "clean-scalable-code",
    number: "03",
    title: "Clean & Scalable Code",
    subtitle: "Modular Architecture That Grows With You",
    description:
      "Built with strict type safety, clean domain separation, comprehensive documentation, and optimized database queries so your platform effortlessly scales from 100 to 1,000,000+ users.",
    metricLabel: "Code Maintainability",
    metricValue: "Enterprise Grade",
    accentColor: "#EC4899",
    highlights: [
      "Strict TypeScript typing & modular component design",
      "Secure APIs with RBAC, validation & rate limiting",
      "Zero vendor lock-in—you own 100% of the repository",
    ],
  },
  {
    id: "long-term-support",
    number: "04",
    title: "Long-Term Support",
    subtitle: "A Dedicated Technical Partner After Launch",
    description:
      "Launch is just the beginning. I provide comprehensive documentation, team walkthroughs, proactive security updates, and ongoing feature scaling as your business evolves.",
    metricLabel: "Partner Retention",
    metricValue: "96% Repeat Clients",
    accentColor: "#10B981",
    highlights: [
      "Post-launch SLA warranty & rapid response support",
      "Video walkthroughs & full technical documentation",
      "Seamless scaling for new features & AI upgrades",
    ],
  },
];
