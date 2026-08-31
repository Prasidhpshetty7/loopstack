# myholymolysonnetweb

A **Next.js 16** animation-heavy marketing & landing site built by **Prasidh P Shetty**.

Every motion is spring-based (`@react-spring/web`), text animation runs through
`spring-text-engine`, scrolling is smoothed with Lenis, styling is Tailwind
v4, and a rem-based adaptive grid scales the design across every viewport.

---

## Getting started

This project uses **Next.js 16** with spring-based animations, Tailwind v4, and TypeScript.

### Prerequisites

- **Node.js 20.19+** (Node 22.13+ or 24 LTS recommended)
- **Yarn** package manager

### Installation

1. **Install dependencies**
   ```bash
   yarn install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env and set NEXT_PUBLIC_SITE_URL
   ```

3. **Run development server**
   ```bash
   yarn dev
   # Open http://localhost:3000
   ```

| Script | Purpose |
|--------|---------|
| `yarn dev` | Development server |
| `yarn build` | Production build |
| `yarn start` | Serve the production build |
| `yarn lint` | ESLint |

## 🚀 Deploy to Vercel

The fastest path to production — Next.js is Vercel's home framework, so the
defaults Just Work.

**Quick start**: See [`VERCEL_QUICKSTART.md`](./VERCEL_QUICKSTART.md) for 3-step deployment.

**Full guide**: See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for comprehensive instructions including:
- CLI and dashboard deployment methods
- Environment variable configuration
- Custom domain setup
- Troubleshooting and monitoring
- Performance optimization tips

### TL;DR

```bash
# Option 1: Dashboard (easiest)
# Go to vercel.com/new, import your GitHub repo, click Deploy

# Option 2: CLI
npm i -g vercel@latest
vercel login
vercel --prod
```

The project includes `vercel.json` with optimized headers and caching, plus `.vercelignore` to keep deployments lean

## 📖 Documentation

Full project documentation lives in the **`obsidian/`** Obsidian vault — open
that folder in [Obsidian](https://obsidian.md) for detailed architecture, conventions, and workflows.

Start at [`obsidian/README.md`](./obsidian/README.md).

---

## 📄 License

MIT License - Copyright (c) 2024 Prasidh P Shetty

See [LICENSE.md](./LICENSE.md) for details.

---

## 🙏 Acknowledgments

Built on the [next16-claude-starter](https://github.com/textura-agency/next16-claude-starter) template by [Textura](https://textura.agency).
