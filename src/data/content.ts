
import { LucideIcon, Code, Server, Database, Layout, Brain, Terminal, Shield, Award, Users } from 'lucide-react';

export const personalInfo = {
  name: "Michel Cano",
  role: "Python Developer & Backend Developer",
  email: "bmichelcano@gmail.com",
  location: "Mexico City, Mexico",
  bio: "I build production systems that eliminate manual work and scale with real-world complexity.",
  summary: "Python Developer and Backend Developer with 4 years of experience building production systems for government institutions. Built a full victim registry system (Django, PostgreSQL, Celery, Docker) serving 500+ cases/year with 95% time reduction. Automated document generation, inter-agency coordination via Google APIs, and deployed an AI agent for natural language database querying. Creator of legismex, an open-source library (67 modules, PyPI) for legislative data extraction. Built end-to-end data pipelines with Airflow, AWS, Terraform, and medallion architecture.",
  social: {
    linkedin: "https://www.linkedin.com/in/michel-cano-hernández",
    github: "https://github.com/lehcimhdz",
    email: "mailto:bmichelcano@gmail.com"
  }
};

export const skills = [
  {
    category: "Backend & Data Engineering",
    items: ["Python", "SQL (PostgreSQL)", "Django REST Framework", "FastAPI", "Celery", "Redis", "Apache Airflow", "pandas", "ETL Pipelines", "Medallion Architecture", "Pydantic", "Jinja2"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (S3, RDS, EC2, Lambda)", "GCP (Compute Engine, Cloud Run)", "Terraform", "Docker & Docker Compose", "Nginx", "GitHub Actions CI/CD", "Linux / Ubuntu Server", "Cloudflare Tunnel"]
  },
  {
    category: "Frontend & Tools",
    items: ["React 19", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "Vite", "Git", "pytest", "BeautifulSoup", "Playwright"]
  }
];

export const experience = [
  {
    company: "Comisión Ejecutiva de Atención a Víctimas de la Ciudad de México (CEAVI)",
    role: "Python Developer & Data Engineer",
    period: "October 2024 – Present",
    description: "Designed and built the agency's core victim registry system from scratch, serving 500+ cases annually.",
    achievements: [
      "Built Django REST API with PostgreSQL (field-level encryption), Celery + Redis for async processing, and a vanilla JS SPA (19 views, 5,400+ lines) deployed via Docker Compose (5 services) and Nginx.",
      "Built document generation engine (895 lines) processing ODT templates via ZIP extraction, XML manipulation, Jinja2 rendering, and LibreOffice headless PDF conversion — reduced API response time from 30-45s to <200ms.",
      "Integrated Google APIs (Drive, Sheets, Gmail) with OAuth2 for inter-agency document sharing and automated email notifications.",
      "Deployed OpenClaw AI agent on Ubuntu Server connected to Telegram, enabling managers to query the victim registry in natural language.",
      "Created interactive Chart.js dashboard for statistical analysis of victim demographics, crime types, and temporal trends.",
      "Impact: Reduced case processing time by 95% (2 hours → 5 minutes), eliminated manual document generation entirely."
    ]
  },
  {
    company: "Comisión Ejecutiva de Atención a Víctimas de la Ciudad de México (CEAVI)",
    role: "Python Developer — Automation, ETL & Data Analysis",
    period: "April 2022 – October 2024",
    description: "Eliminated 80% of administrative overhead through Python automation pipelines processing 500+ cases annually.",
    achievements: [
      "Built end-to-end document pipeline: CSV data → Word templates (docxtpl) → PDF → Google Drive → Gmail drafts with attachments. Processed 100+ documents monthly without manual intervention.",
      "Built geospatial intelligence system for missing persons using GeoPandas, Folium, and CDMX shapefiles. Generated 3 interactive maps layered with Social Development Index (IDSM) across 16 alcaldías.",
      "Integrated 5 Google services (Drive, Sheets, Gmail, Calendar) into unified automation workflow with OAuth2, rate limiting, and token refresh.",
      "Wrote 15+ ETL scripts for data migration and QA: foreign key validation, duplicate detection, orphan cleanup, date normalization, and Google Sheets sync.",
      "Developed WhatsApp notification system for appointment reminders with automated Google Calendar event creation for 50+ stakeholders monthly."
    ]
  },
  {
    company: "Espacio Político S.A.S.",
    role: "Legislative Data Monitor",
    period: "April 2021 – November 2021",
    description: "Tracked legislative activity for fintech, e-commerce, and mobility clients.",
    achievements: [
      "Monitored 1,500+ legislative initiatives across 8 months, capturing 71 structured data points per initiative.",
      "Tracked bill text, authors, voting records, and regulatory timelines for compliance reporting.",
      "Systematized unstructured legislative data into structured datasets for executive dashboards."
    ]
  },
  {
    company: "Secretaría de Economía México",
    role: "Trade Analysis Intern",
    period: "July 2019 – January 2020",
    description: "Analyzed international trade data to support bilateral policy decisions.",
    achievements: [
      "Analyzed bilateral trade flows between Mexico and Pacific Alliance countries (Brazil, Colombia, Chile, Peru).",
      "Built Excel-based data models supporting policy recommendations for senior officials."
    ]
  }
];

export const projects = [
  {
    title: "global-trade-aws",
    description: "Production-grade pipeline extracting all UN Comtrade API endpoints to an S3 data lake. 8 Airflow DAGs, medallion architecture (Bronze→Silver→Gold), dbt models, 7-check data validation suite, Slack alerting, 433 tests, and full Terraform IaC (S3, IAM, VPC, Glue, Athena, MWAA).",
    tags: ["Apache Airflow", "AWS", "Terraform", "dbt", "pandas", "Parquet", "CI/CD"],
    link: "https://github.com/lehcimhdz/global-trade-aws"
  },
  {
    title: "legismex",
    description: "Open-source Python library providing programmatic access to Mexico's legislative data across 67 modules (Congress, Senate, DOF, 25+ state legislatures). 12,500+ LOC, 86 tests, daily automated health monitor via GitHub Actions. Published on PyPI.",
    tags: ["Python", "httpx", "Pydantic", "Playwright", "BeautifulSoup", "PyPI", "CI/CD"],
    link: "https://github.com/lehcimhdz/legismex"
  },
  {
    title: "pipeline-legismex-aws",
    description: "End-to-end data pipeline using legismex as source, orchestrated with Apache Airflow on AWS. 5 extraction DAGs (20+ Mexican states with TaskGroups), 2 Silver transformation DAGs, 1 Gold unification DAG. Terraform provisioning RDS PostgreSQL.",
    tags: ["Apache Airflow", "AWS", "Terraform", "pandas", "Parquet", "NDJSON"],
    link: "https://github.com/lehcimhdz/pipeline-legismex-aws"
  },
  {
    title: "DiplomaticU",
    description: "EdTech platform for Mexico's Foreign Service exam preparation. Full-stack app with React 19, TypeScript, Supabase (PostgreSQL), and Tailwind CSS. 14 pages, 19 components, 4 custom hooks, complete auth system, gamification engine, and 10-table database schema.",
    tags: ["React 19", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    link: "https://diplomaticu.netlify.app/"
  },
  {
    title: "Homo Politicus",
    description: "Turn-based political & economic strategy simulator in C++. Player governs a country with Cobb-Douglas GDP model, dynamic labor markets, central bank autonomy, legislative processes, human rights index, and geopolitical events. 2,150 LOC with documented mathematical models.",
    tags: ["C++", "Game Simulation", "Economics", "Mathematics"],
    link: "#"
  }
];

export const education = [
  {
    school: "Universidad Abierta y a Distancia de México (UnADM)",
    degree: "B.S. Mathematics",
    year: "2026 – Present"
  },
  {
    school: "Universidad Nacional Autónoma de México (UNAM, FES Acatlán)",
    degree: "B.A. International Relations",
    year: "2015 – 2019"
  }
];

export const certifications = [
  "Data Engineer Associate — DataCamp, 2026",
  "Data Scientist Associate — DataCamp, 2025",
  "Python Data Associate — DataCamp, 2025",
  "Diploma in Data Science — Interactive Museum of Economics, 2022"
];
