# PP Studio Agency

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?style=flat&logo=vercel)](https://ppstudioagency.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**PP Studio Agency** is a premium frontend web development agency website — a 6-page, fully responsive brand showcase built with vanilla HTML5, CSS3, and JavaScript. The site features a light-dark hybrid theme with burgundy accent, scroll-triggered animations, and a Web3Forms-powered contact form.

🌐 **Live Site:** [https://ppstudioagency.vercel.app](https://ppstudioagency.vercel.app)

---

## Description

A clean, professional 6-page website for PP Studio Agency showcasing frontend web development services. Features a light-dark hybrid design theme with burgundy accent, smooth scroll animations, responsive layouts, and a Web3Forms-powered contact form.

## Tech Stack

- **HTML5** — Semantic markup, SEO meta tags, Open Graph / Twitter Cards
- **CSS3** — Custom properties (CSS variables), Flexbox, CSS Grid, responsive breakpoints
- **JavaScript ES6** — IntersectionObserver animations, FAQ accordion, hamburger menu, smooth scroll, scroll-to-top
- **Google Fonts** — Inter (body) + Space Grotesk (headings)
- **Font Awesome 6.5.1** — Icon library (CDN)
- **Web3Forms** — Serverless contact form backend

## Project Structure

```
PP-Studio-Agency/
├── index.html              # Home page
├── about.html              # About / Mission & Vision
├── services.html           # Services overview
├── portfolio.html          # Project showcase
├── pricing.html            # Pricing packages
├── contact.html            # Contact form + FAQ
│
├── css/
│   ├── style.css           # Main styles (light-dark hybrid theme)
│   └── responsive.css      # Responsive breakpoints (1024px / 768px / 576px / 400px)
│
├── js/
│   ├── main.js             # Navigation, animations, FAQ, scroll-to-top
│   └── contact.js          # Web3Forms validation & submission
│
├── assets/
│   ├── favicon/            # Favicon set (ico, 16x16, 32x32, apple-touch-icon)
│   └── images/
│       ├── logo/           # Brand logo (light + dark variants)
│       ├── hero/           # Hero background image
│       ├── about/          # About section image
│       ├── projects/       # Portfolio project screenshots
│       └── testimonials/   # Client testimonial profile photos
│
├── robots.txt              # Search engine crawl rules
├── sitemap.xml             # XML sitemap for SEO
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## Pages

| Page | File | Highlights |
|------|------|------------|
| **Home** | `index.html` | Hero with background image, about preview, services grid, why choose us, process timeline, featured projects, testimonials, CTA |
| **About** | `about.html` | Agency intro, who we are, mission & vision, core values |
| **Services** | `services.html` | 7 frontend services: Business Websites, Portfolio Websites, Landing Pages, Restaurant Websites, School & Educational Websites, Church Websites, Responsive Website Redesign |
| **Portfolio** | `portfolio.html` | Project showcase with images and live demo links |
| **Pricing** | `pricing.html` | Starter ($30), Business ($80), Premium (Custom) packages |
| **Contact** | `contact.html` | Contact form (Web3Forms) + FAQ accordion section |

## Features

- **Light-Dark Hybrid Theme** — Off-white body sections, dark hero/footer/CTA sections for visual contrast
- **Burgundy Accent Color** — `#7A1F3D` throughout all interactive elements and branding
- **Fully Responsive** — 4 breakpoints: 1024px, 768px, 576px, 400px
- **Scroll-Triggered Animations** — IntersectionObserver fade-in on all content sections
- **FAQ Accordion** — Keyboard-accessible, ARIA attributes, smooth expand/collapse
- **Mobile Hamburger Menu** — Slide-out navigation with overlay click-to-close
- **Smooth Scroll Navigation** — Anchor link scrolling with header offset
- **Scroll-to-Top Button** — Appears after 500px scroll, smooth scroll back to top
- **Web3Forms Contact Form** — Client-side validation + async submission with loading state
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, robots.txt
- **Accessibility** — Skip-to-content link, ARIA labels, keyboard navigation, focus states
- **Performance** — Lazy-loaded images, optimized assets, minimal dependencies

## Getting Started

### Option 1: Open Directly
```bash
# Clone the repository
git clone https://github.com/Mohamed-Bangura/PP-Studio-Agency.git

# Open the project
cd PP-Studio-Agency

# Open index.html in your browser
start index.html
```

### Option 2: Local Development Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deployment

This site is deployed on **Vercel**:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Set the root directory to `PP-Studio-Agency/`
4. Deploy — zero configuration required (static HTML site)

### Environment Variables (Contact Form)
No environment variables are needed. The Web3Forms access key is embedded in `js/contact.js`.

## SEO & Analytics

- **Google Analytics** — Placeholder ID `G-XXXXXXXXXX` in `index.html`. Replace with your actual Measurement ID before going live.
- **Sitemap** — `sitemap.xml` updated with all 6 pages
- **Robots.txt** — Allows all crawlers, includes sitemap reference
- **Structured Data** — JSON-LD for Organization and WebSite schema

## Author

**PP Studio Agency** — Modern frontend development agency crafting responsive, high-performance websites.

- Website: [https://ppstudioagency.vercel.app](https://ppstudioagency.vercel.app)
- GitHub: [@ppstudioagency](https://github.com/ppstudioagency)
- LinkedIn: [PP Studio Agency](https://linkedin.com/company/ppstudioagency)

## License

© 2026 PP Studio Agency. All rights reserved.
