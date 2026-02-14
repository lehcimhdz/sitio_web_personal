
# Data Engineer Portfolio 🚀

![CI/CD Pipeline](https://github.com/lehcimhdz/sitio_web_personal/actions/workflows/ci.yml/badge.svg)
![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)

A high-performance, SEO-optimized personal website designed to showcase Data Engineering skills, built with the Modern Data Stack aesthetic in mind.

**Live Demo:** [https://michel-cano.netlify.app/](https://michel-cano.netlify.app/)

---

## 🏗 Architecture & Tech Stack

This project goes beyond a simple HTML/CSS portfolio. It represents a production-ready frontend application with robust engineering practices.

| Category | Technology | Usage |
|----------|------------|-------|
| **Core** | ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Framework & Type Safety |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Utility-first styling & Animations |
| **Testing** | ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white) ![RTL](https://img.shields.io/badge/Testing_Library-E33332?style=flat&logo=testing-library&logoColor=white) | Unit & Smoke Tests |
| **CI/CD** | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) | Automated Linting, Testing & Building |
| **Performance** | **Next.js Dynamic Imports** | Lazy loading for 95+ Mobile Score |

---

## ⚡ Key Features

1.  **Orchestrated Data Flow UI**:
    *   Custom CSS-only background animation simulating data pipelines.
    *   Optimized for performance (GPU accelerated, no main-thread blocking JS for background).

2.  **Engineering-Grade Quality**:
    *   **CI/CD Pipeline**: Every commit is automatically linted, tested, and built.
    *   **Testing**: Includes unit tests for core components.
    *   **Strict TypeScript**: No `any` types allowed in core logic.

3.  **SEO & Performance**:
    *   **100% SEO Score**: Implements JSON-LD Structured Data for "Person" schema.
    *   **Lazy Loading**: Components below the fold are loaded dynamically.
    *   **Responsive**: Mobile-first design approach.

---

## 🛠 Installation & Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/lehcimhdz/sitio_web_personal.git
cd sitio_web_personal
npm install
```

Run the development server:

```bash
npm run dev
# Open http://localhost:3000
```

Run tests:

```bash
npm test
# OR watch mode
npm run test:watch
```

---

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with Metadata
│   ├── page.tsx          # Homepage with Lazy Loading
│   ├── globals.css       # Tailwind & Custom Theme
│   └── sitemap.ts        # Dynamic Sitemap Generation
├── components/           # React Components
│   ├── DataFlowBackground.tsx  # Orthogonal Pipeline Animation
│   ├── Hero.tsx          # Main Landing Section
│   ├── Skills.tsx        # Tech Stack Grid
│   └── ...
├── data/                 # Data Layer
│   └── content.ts        # Centralized Content (CV, Projects)
└── ...
```

---

## 📮 Contact

**Michel Cano** - Data Engineer
*   **LinkedIn**: [Connect](https://www.linkedin.com/in/michel-cano-hernández-5a0474225)
*   **Email**: bmichelcano@gmail.com

---
*Built with code, data, and precision.*
