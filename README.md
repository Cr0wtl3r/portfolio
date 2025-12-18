# 🔴 Cr0wtl3r | Offensive Security Portfolio

[![Deploy to GitHub Pages](https://github.com/Cr0wtl3r/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Cr0wtl3r/portfolio/actions/workflows/deploy.yml)

> *"Adversarial thinking is the key to defense. To secure a system, you must first understand how to break it."*

A cybersecurity-themed portfolio website built with **Nuxt 4**, featuring a terminal-inspired "Red Team" aesthetic with glitch effects, scanlines, and a dark hacker UI.

## 🚀 Live Demo

**[https://cr0wtl3r.github.io/portfolio](https://cr0wtl3r.github.io/portfolio)**

---

## ✨ Features

- 🎨 **Red Team Aesthetic** — Dark theme with crimson accents, CRT scanlines, and glitch text effects
- 🌍 **Bilingual** — Full support for Portuguese (PT) and English (EN)
- 📄 **PDF Export** — Download CV directly from the browser
- 🔗 **GitHub Integration** — Dynamically fetches profile and repositories via GitHub API
- ⚡ **Static Generation** — Fully static, optimized for GitHub Pages
- 📱 **Responsive** — Mobile-first design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Nuxt 4](https://nuxt.com) | Vue framework with SSG |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [jsPDF](https://github.com/parallax/jsPDF) | PDF generation |
| [Lucide Icons](https://lucide.dev/) | Icon library |

---

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── app.vue              # Main application entry
│   ├── assets/css/          # Global styles (Tailwind config)
│   ├── components/          # Vue components
│   │   ├── AppHeader.vue    # Sticky terminal-style header
│   │   ├── HomeSection.vue  # Hero with glitch effect
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ...
│   └── composables/         # Reusable logic
│       ├── useContent.ts    # i18n content management
│       ├── useGithub.ts     # GitHub API integration
│       └── usePdfExport.ts  # PDF generation
├── public/                  # Static assets (favicon, robots.txt)
├── .github/workflows/       # GitHub Actions for deployment
└── nuxt.config.ts           # Nuxt configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

---

## 🌐 Deployment (GitHub Pages)

This project is configured for automatic deployment via **GitHub Actions**.

1. Push to the `main` branch
2. The workflow builds and deploys to GitHub Pages
3. Configure in **Settings > Pages > Source: GitHub Actions**

---

## 📝 License

MIT © Albino M. Santos (Cr0wtl3r)

---

<p align="center">
  <sub>Built with ❤️ and ☕ by <a href="https://github.com/cr0wtl3r">Cr0wtl3r</a></sub>
</p>
