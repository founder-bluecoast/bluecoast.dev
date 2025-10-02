# Blue Coast Software Website

This is the official website for **Blue Coast Software**, built with [Astro](https://astro.build), [TailwindCSS](https://tailwindcss.com), and [MDX](https://mdxjs.com).  
The site serves as the public guild hall for our projects, journals, and long‑term craft in software.

## 🌊 Features
- **Projects** — collection of tools, games, and experiments with individual detail pages.
- **Journal** — essays, release notes, and development logs.
- **About** — philosophy, influences, and contact.
- **Responsive design** — terminal‑inspired, mobile‑friendly layout with Blue Coast brand colors.
- **Content collections** — projects and posts authored in Markdown/MDX with simple frontmatter.

## 📂 Project Structure

```text
/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # MDX collections (projects, journal)
│   ├── layouts/         # Base layouts
│   └── pages/           # Route pages (index, projects, about, etc.)
└── package.json
```

## 🛠️ Development

All commands are run from the root of the project:

| Command            | Action                                         |
| ------------------ | ---------------------------------------------- |
| `npm install`      | Install dependencies                           |
| `npm run dev`      | Start local dev server at `http://localhost:4321` |
| `npm run build`    | Build site to `./dist/`                        |
| `npm run preview`  | Preview the built site locally                 |

## 🌐 Deployment

This site is static and can be deployed anywhere that serves HTML/CSS/JS (Vercel, Netlify, Cloudflare, GitHub Pages, etc.).  
Yes — anyone can run it locally in their browser using `npm run dev`, or view it once deployed.

## 📝 Content Workflow

To add a new project, create a file at:

```
src/content/projects/my-project.mdx
```

With frontmatter like:

```md
---
title: "My Project"
summary: "One-liner about the work."
status: "alpha" # or beta/stable
date: "2025-01-01"
tags: ["tag"]
order: 0
hero: "/images/my-project/hero.png"
repo: "https://github.com/bluecoast/my-project"
---
```

Then restart the dev server. It will appear automatically on `/projects` with its own detail page.

## © Blue Coast Software

Crafted with care, leaning into retro‑futurist aesthetics and modern engineering discipline.
