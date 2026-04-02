

export const personalInfo = {
  name: "Michel Cano",
  role: "Python Developer & Data Engineer",
  email: "bmichelcano@gmail.com",
  location: "Mexico City, Mexico",
  bio: "I build production systems that eliminate manual work and scale with real-world complexity.",
  summary: "Python Developer and Data Engineer with 5 years of experience building production systems for government institutions. Built a victim registry serving 500+ cases/year (Django, Celery, PostgreSQL, Docker) with 95% time reduction. Creator of 2 open-source libraries published on PyPI: legismex (67 modules) and open-data-mexico (async CKAN client with FastAPI server). Built production-grade data pipelines with Airflow, PySpark, dbt, and AWS provisioned with modularized Terraform. 600+ automated tests across projects.",
  social: {
    linkedin: "https://www.linkedin.com/in/michel-cano-hern%C3%A1ndez-backend-python",
    github: "https://github.com/lehcimhdz",
    email: "mailto:bmichelcano@gmail.com"
  }
};

export const skills = [
  {
    category: "Backend & Data Engineering",
    items: ["Python", "Django REST Framework", "FastAPI", "SQLAlchemy", "Alembic", "Celery", "Redis", "Pydantic", "Apache Airflow", "PySpark", "dbt", "pandas", "Parquet", "boto3", "medallion architecture"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (S3, RDS, EC2, ElastiCache, Secrets Manager, IAM, Glue, Athena, CloudWatch, MWAA)", "Terraform (modularized)", "Docker & Docker Compose", "PostgreSQL", "Nginx", "Cloudflare Tunnel", "GitHub Actions CI/CD", "Linux / Ubuntu Server"]
  },
  {
    category: "Frontend & Testing",
    items: ["React 19", "TypeScript", "Tailwind CSS", "Supabase", "pytest (600+ tests)", "moto", "unittest.mock", "Sentry", "Prometheus", "pre-commit (ruff, black, mypy)", "BeautifulSoup", "Playwright"]
  }
];

export const experience = [
  {
    company: "Comisión Ejecutiva de Atención a Víctimas de la Ciudad de México (CEAVI)",
    role: "Python Developer & Data Engineer",
    period: "October 2024 – Present",
    description: "Designed and built the agency's core victim registry system from scratch, serving 500+ cases annually.",
    achievements: [
      "Built victim registry system from scratch: Django REST API, PostgreSQL (field-level encryption), Celery + Redis (3 priority queues, exponential backoff), Docker Compose (5 services), Nginx, Cloudflare Tunnel. 500+ cases/year, 95% time reduction.",
      "Built document generation engine (895 LOC): ODT → ZIP/XML → Jinja2 rendering → LibreOffice headless PDF — migrated to async Celery tasks, reducing API response from 30-45s to <200ms.",
      "Deployed 9 Airflow DAGs for operational observability: CURP/RFC/email/phone normalization, integrity checks, Celery error audit, DB maintenance (ANALYZE + index optimization). Running on Ubuntu Server 24/7.",
      "Deployed OpenClaw AI agent on Ubuntu Server + Telegram, enabling non-technical managers to query the victim registry in natural language.",
      "Integrated Google APIs (Drive, Sheets, Gmail, Calendar) with OAuth2. Automated backups: pg_dump → gzip → Google Drive with 30-day rotation.",
      "Created interactive Chart.js dashboard for statistical analysis of victim demographics, crime types, and temporal trends."
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
    description: "Production-grade pipeline extracting all UN Comtrade API endpoints to an S3 data lake. 8 Airflow DAGs with CeleryExecutor, medallion architecture (Bronze→Silver→Gold), dbt models, 7-check data quality validation suite, Slack alerting, 633 tests, and full Terraform IaC (S3, IAM, VPC, Glue, Athena, MWAA).",
    tags: ["Apache Airflow", "AWS", "Terraform", "dbt", "PySpark", "Parquet", "CI/CD"],
    link: "https://github.com/lehcimhdz/global-trade-aws"
  },
  {
    title: "legismex",
    description: "Open-source Python library providing programmatic access to Mexico's legislative data across 67 modules (Congress, Senate, DOF, 25+ state legislatures). 12,500+ LOC, 86 test modules, daily automated health monitor via GitHub Actions. Published on PyPI. MIT license.",
    tags: ["Python", "httpx", "Pydantic", "Playwright", "BeautifulSoup", "PyPI", "CI/CD"],
    link: "https://github.com/lehcimhdz/legismex"
  },
  {
    title: "open-data-mexico",
    description: "Async Python client for datos.gob.mx (CKAN): 28 categories, 5,000+ datasets, 184 organizations. httpx async with connection pooling, Pydantic v2 models, in-memory TTL cache, retry with exponential backoff. Includes optional FastAPI REST server. 66 tests, 87% coverage. Published on PyPI.",
    tags: ["Python", "httpx", "FastAPI", "Pydantic", "asyncio", "PyPI", "CKAN"],
    link: "https://github.com/lehcimhdz/open-data-mexico-api"
  },
  {
    title: "mex-open-data ecosystem",
    description: "End-to-end data platform for Mexican government open data (5 repos). Airflow 2.9 pipeline (3 DAGs with smart skip — reduces runtime from 4h to 25min) → S3 Hive-partitioned data lake → FastAPI backend (SQLAlchemy, Alembic, API key auth, Celery, Prometheus) + PySpark analytics. Terraform modularized into 5 modules with native .tftest.hcl tests. 170+ tests across repos.",
    tags: ["Apache Airflow", "AWS", "FastAPI", "PySpark", "Terraform", "SQLAlchemy", "dbt"],
    link: "https://github.com/lehcimhdz/mex-open-data-pipeline"
  },
  {
    title: "DiplomaticU",
    description: "EdTech platform for Mexico's Foreign Service exam preparation. Full-stack app with React 19, TypeScript, Supabase (PostgreSQL), and Tailwind CSS. 14 pages, 19 components, 4 custom hooks, complete auth system, gamification engine, and 10-table database schema.",
    tags: ["React 19", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    link: "https://diplomaticu.netlify.app/"
  },
  {
    title: "Homo Politicus",
    description: "Turn-based political & economic strategy simulator in C++17. Player governs a country with Cobb-Douglas GDP model, dynamic labor markets, central bank autonomy, legislative processes, human rights index, and geopolitical events. 185+ variables, documented mathematical models.",
    tags: ["C++17", "Game Simulation", "Economics", "Mathematics"],
    link: "https://github.com/lehcimhdz/homo-politicus"
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
