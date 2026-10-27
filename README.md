# Scout Des Cèdres – Groupe Saint Jean Marc Website

Official website for **Scout Des Cèdres - Groupe Saint Jean Marc** (Founded May 5, 1977, Byblos, Lebanon).

Built with **Astro** and **Tailwind CSS**. Designed with an authentic, organic scout aesthetic (cedar green, campfire gold, warm paper canvas) avoiding generic AI templates.

---

## 🌲 Features

- **Home Page (`/`):** Hero with scout mosaic, 49-year history highlight, 3-unit overview, meeting callout banner, upcoming camps, photo teaser, interactive parent FAQ accordion, and WhatsApp contact card.
- **Sections Page (`/sections`):**
  - Gramiz & Zahrat (Ages 4–11)
  - Kochefe & Mourchidet (Ages 11–16)
  - Jouwele & Mounjidet (Ages 16–24)
- **Leadership Tree (`/leadership`):** Visual hierarchical tree with connecting branches (Chef de Groupe & Chaplain $\to$ Group Council $\to$ Unit Branch Chefs & Assistants).
- **Events & Camps (`/events`):** Calendar of annual spring camp, feast day celebration, coastline cleanup, and grand summer camp, plus parent packing notes.
- **Album-Style Gallery (`/gallery`):** Category filters with responsive photo album grid and an interactive, full-screen lightbox modal (with keyboard arrows & escape closing).
- **Weekly Meeting Details:** Highlighted every Saturday from 3:00 PM – 4:30 PM near Antoch Saint Jean Marc UNESCO Se7a.
- **WhatsApp Integration:** Direct click-to-chat buttons with pre-filled scout inquiry messages.

---

## 🛠️ Quick Start

```bash
# Install dependencies (already installed)
npm install

# Start local development server
npm run dev

# Build production static site
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 How to Update Content (No HTML knowledge needed)

All content is organized in clean TypeScript/JSON files inside `src/data/`:

- `src/data/siteConfig.ts`: Change the group phone number, WhatsApp message, email, meeting times, and parish coordinates.
- `src/data/sections.ts`: Edit section descriptions, mottos, and activities.
- `src/data/leadership.ts`: Update names and roles in the visual hierarchy tree.
- `src/data/events.ts`: Add or modify upcoming camps, dates, and locations.
- `src/data/faq.ts`: Add or revise questions and answers for parents.
- `src/data/gallery.ts`: Add new photo URLs, album categories, and captions.

---

## 🚀 Free Hosting & Deployment

This project generates pure static HTML and can be hosted for **$0/month** on:
- **Cloudflare Pages:** Connect your GitHub repo, Framework preset: `Astro`, Build command: `npm run build`, Output directory: `dist`.
- **GitHub Pages:** Enable GitHub Actions with Astro template.
- **Netlify / Vercel:** 1-click import.
