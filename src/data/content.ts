
import { LucideIcon, Code, Server, Database, Layout, Brain, Terminal, Shield, Award, Users } from 'lucide-react';

export const personalInfo = {
  name: "Michel Cano",
  role: "Data Engineer",
  email: "bmichelcano@gmail.com",
  location: "Mexico City, Mexico",
  bio: "I build robust data pipelines and systems that eliminate manual work.",
  summary: "Data Engineer with 3+ years of experience transforming manual workflows into automated, scalable systems. I specialize in building ETL pipelines, optimizing database architectures, and integrating complex APIs to centralize critical institutional data.",
  social: {
    linkedin: "https://www.linkedin.com/in/michel-cano-hernández-5a0474225",
    github: "https://github.com/lehcimhdz",
    email: "mailto:bmichelcano@gmail.com"
  }
};

export const skills = [
  {
    category: "Data Engineering & Automation",
    items: ["Python", "SQL (PostgreSQL)", "ETL Pipelines", "Pandas/NumPy", "Data Modeling", "Google Cloud APIs", "Web Scraping"]
  },
  {
    category: "Backend Engineering",
    items: ["Django REST Framework", "Docker & Orchestration", "Nginx", "Linux", "API Design", "System Architecture"]
  },
  {
    category: "Frontend & Tools",
    items: ["JavaScript (ES6+)", "Git/GitHub", "Chart.js", "Bash Scripting", "CI/CD Concepts"]
  }
];

export const experience = [
  {
    company: "Comisión Ejecutiva de Atención a Víctimas de la Ciudad de México",
    role: "Data Engineer & Backend Developer",
    period: "October 2024 - Present",
    description: "Architected the central victim registry system, handling sensitive data for the entire agency.",
    achievements: [
      "Designed and implemented a relational database schema (PostgreSQL) to centralize scattered victim data.",
      "Built reliable ETL pipelines to sync legacy data with the new system.",
      "Developed a concurrency-safe logic for auto-generating government folios (CEAVI/RELOVI format).",
      "Automated document generation (ODT to PDF) processing thousands of files without manual intervention.",
      "Orchestrated the entire data platform using Docker Compose and Nginx."
    ]
  },
  {
    company: "Comisión Ejecutiva de Atención a Víctimas de la Ciudad de México",
    role: "Python Automation Engineer",
    period: "April 2022 - October 2024",
    description: "Eliminated 80% of manual data entry through Python-based automation pipelines.",
    achievements: [
      "Built data ingestion pipelines using Pandas to validate and clean victim registry data.",
      "Automated the synchronization of local datasets with Google Sheets for real-time reporting.",
      "Developed scripts to batch-process 500+ legal cases annually, reducing error rates to near zero.",
      "Integrated Google Calendar and Gmail APIs to automate stakeholder communication workflows."
    ]
  },
  {
    company: "Espacio Político S.A.S.",
    role: "Legislative Data Analyst",
    period: "April 2021 - November 2021",
    description: " systematized unstructured legislative data for fintech clients.",
    achievements: [
      "Developed tracking systems to categorize and analyze high volumes of legislative bills.",
      "Monitored official gazettes to update compliance databases in real-time.",
      "Transformed complex regulatory text into structured data for executive dashboards."
    ]
  },
  {
    company: "Secretaría de Economía México",
    role: "Economic Data Analyst",
    period: "July 2019 - January 2020",
    description: "Analyzed international trade datasets to support policy decisions.",
    achievements: [
      "Modeled bilateral trade data flows between Mexico and Pacific Alliance countries.",
      "Cleaned and processed macroeconomic datasets for high-level reporting."
    ]
  }
];

export const projects = [
  {
    title: "Centralized Victim Data Platform",
    description: "A production-grade data system replacing disparate spreadsheets. Features robust data validation, concurrency control, and automated backups.",
    tags: ["PostgreSQL", "Django", "Docker", "Data Modeling"],
    link: "#"
  },
  {
    title: "Document Generation Pipeline",
    description: "An automated pipeline transforming structured data into thousands of legal documents (PDFs), reducing processing time from weeks to minutes.",
    tags: ["Python", "ETL", "Jinja2", "LibreOffice Headless"],
    link: "#"
  },
  {
    title: "Legislative Data Tracker",
    description: "System to ingest, parse, and categorize unstructured legislative text data for real-time compliance monitoring.",
    tags: ["Data Scraping", "NLP Concepts", "Unstructured Data"],
    link: "#"
  }
];

export const education = [
  {
    school: "Universidad Abierta y a Distancia de México (UnADM)",
    degree: "Bachelor's Degree, Mathematics",
    year: "Jan 2026 (Expected)"
  },
  {
    school: "Facultad de Estudios Superiores Acatlán",
    degree: "Bachelor's Degree, International Relations",
    year: "2015 - 2019"
  }
];

export const certifications = [
  "Python Data Associate",
  "Data Science Diploma",
  "Data Scientist Associate"
];
