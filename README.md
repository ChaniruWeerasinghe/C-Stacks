# C-Stacks

A curated showcase of digital experiences, interactive web tools, and premium interfaces — all built and maintained by Chaniru Weerasinghe.

The site features two sections: **Web Tools**, a collection of utility applications, and **Websites & Experiences**, a portfolio of client sites and passion projects. Projects are displayed in auto-scrolling infinite carousels with live preview thumbnails and neon-themed cards.

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 16 (App Router)           |
| Language    | TypeScript                        |
| Styling     | Tailwind CSS v4                   |
| Animation   | Framer Motion                     |
| Icons       | Lucide React, React Icons         |
| Font        | Geist Sans / Geist Mono           |

---

## Project Structure

```
c-stacks/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page (Web Tools + Websites sections)
│   └── globals.css         # Global styles
├── components/
│   ├── InfiniteCarousel.tsx  # Auto-scrolling draggable carousel
│   ├── NeonCard.tsx          # Project card with live preview thumbnail
│   ├── Footer.tsx            # Site footer
│   └── SocialLinks.tsx       # Social icon links
├── data/
│   └── projects.ts         # All project entries (webTools + websites arrays)
└── public/
    ├── bg.png              # Background image
    └── Social-Preview.png  # Open Graph / Twitter card image
```

---

## Adding a Project

All projects are defined in [`data/projects.ts`](./data/projects.ts). Each entry follows the `Project` interface:

```ts
interface Project {
  id: string;           // Unique ID, e.g. "wt-9" or "ws-13"
  eyebrow: string;      // Category label shown above the title
  title: string;        // Project name
  description: string;  // Short one-line description
  link: string;         // Live URL
  themeColor: string;   // Hex color — drives the neon glow and accent
  usePlaceholder?: boolean; // Optional — shows a styled fallback instead of a screenshot
}
```

Add new entries to either the `webTools` or `websites` array depending on the project type.

Live preview thumbnails are fetched automatically via the WordPress mshots service using the project's `link`. Set `usePlaceholder: true` for projects where a screenshot isn't available or suitable.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Build for production:

```bash
npm run build
```

---

## Deployment

The site is statically generated and can be deployed to any static hosting provider or edge platform. The recommended approach is Vercel, which integrates directly with the Next.js App Router.

---

## Author

Developed by [Chaniru Weerasinghe](https://github.com/ChaniruWeerasinghe)
