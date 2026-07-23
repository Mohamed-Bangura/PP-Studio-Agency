# PP Studio Agency Website

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-7A1F3D?style=flat-square&logo=vercel)](https://ppstudioagency.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-7A1F3D?style=flat-square)](LICENSE)

Premium frontend web development agency website built with HTML5, CSS3, and vanilla JavaScript. Features a light-dark hybrid design theme with burgundy accent, smooth scroll animations, responsive layouts, and a Web3Forms-powered contact form.

## Description

A clean, professional 6-page website for PP Studio Agency showcasing frontend web development services.

## Live Demo

**🌐 [ppstudioagency.vercel.app](https://ppstudioagency.vercel.app/)**

## Tech Stack

- **HTML5** — Semantic markup, accessibility features (skip-to-content, ARIA labels, keyboard navigation)
- **CSS3** — Custom properties (CSS variables), Flexbox, CSS Grid, responsive breakpoints (1024px, 768px, 576px, 400px)
- **Vanilla JavaScript ES6** — IntersectionObserver scroll animations, FAQ accordion, mobile hamburger menu, smooth scroll, scroll-to-top
- **Google Fonts** — Inter (body) + Space Grotesk (headings)
- **Font Awesome 6.5.1** — Icon library (CDN)
- **Web3Forms** — Contact form backend API

## Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero with background image, about preview, services grid, why choose us, process timeline, featured projects, testimonials, CTA |
| **About** (`about.html`) | Agency intro, mission & vision, core values |
| **Services** (`services.html`) | 7 frontend services with feature lists |
| **Portfolio** (`portfolio.html`) | Project showcase with images and live demo links |
| **Pricing** (`pricing.html`) | Starter ($30), Business ($80), Premium (Custom) packages |
| **Contact** (`contact.html`) | Contact form + FAQ accordion section |

## Features

- Light-dark hybrid theme (off-white body, dark hero/footer/CTA sections)
- Burgundy accent color (`#7A1F3D`)
- Fully responsive (1024px, 768px, 576px, 400px breakpoints)
- IntersectionObserver scroll-triggered fade-in animations
- FAQ accordion with keyboard support (`Enter`/`Space`)
- Smooth scroll navigation
- Mobile hamburger menu with overlay
- Scroll-to-top button
- Web3Forms contact form with real-time validation
- SEO-optimized (Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, robots.txt)
- Accessibility (skip-to-content, ARIA labels, focus styles, semantic HTML)
- Social media links (GitHub, LinkedIn, Twitter)
- Google Analytics placeholder ready

## Project Structure

```
PP-Studio-Agency/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── pricing.html            # Pricing page
├── contact.html            # Contact page
├── css/
│   ├── style.css           # Main stylesheet (light-dark hybrid theme)
│   └── responsive.css      # Responsive breakpoints
├── js/
│   ├── main.js             # Navigation, animations, FAQ, scroll effects
│   └── contact.js          # Web3Forms integration + form validation
├── assets/
│   ├── favicon/            # Favicon files (ico, png, apple-touch-icon)
│   ├── images/
│   │   ├── logo/           # PP Studio Agency logo
│   │   ├── hero/           # Hero background image
│   │   ├── about/          # About preview image
│   │   ├── projects/       # Project screenshots
│   │   └── testimonials/   # Client profile photos
├── robots.txt              # SEO crawl instructions
├── sitemap.xml             # XML sitemap for search engines
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohamed-Bangura/PP-Studio-Agency.git
   ```

2. **Open in browser**
   - Open `index.html` in your web browser
   - Navigate through pages using the navigation menu

3. **Customize Google Analytics** (optional)
   - Replace `G-XXXXXXXXXX` in `index.html` with your actual Google Analytics Measurement ID

## Deployment

This site is deployed on **Vercel**. To deploy your own instance:

1. Fork or clone this repository
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Set the **Root Directory** to `PP-Studio-Agency` (if cloning the full repo)
4. Vercel will auto-detect the static HTML project
5. Click **Deploy**

Your live URL will be: `https://your-project.vercel.app`

## Author

**PP Studio Agency** — Premium Frontend Web Development Agency

## License

© 2026 PP Studio Agency. All rights reserved.
