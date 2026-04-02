# 🍽️ Bistro — Restaurant Landing Page

A practice recreation of the [Bistro template by Shadcn Studio](https://shadcnstudio.com/preview/templates/shadcn-astro-bistro-landing-page), built to learn Astro, React Islands, Embla Carousel and Tailwind CSS v4.


**[Live Demo →](https://bistro-9qq.pages.dev/)**

![Bistro Preview](/public/bistro-preview.png)

---

## Tech Stack

- **[Astro](https://astro.build/)** — static site framework
- **[React](https://react.dev/)** — interactive islands (carousel, mobile menu)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling
- **[shadcn/ui](https://ui.shadcn.com/)** — UI components
- **[Embla Carousel](https://www.embla-carousel.com/)** — synchronized sliders
- **[Lucide React](https://lucide.dev/)** — icons
- **Cloudflare Pages** — deployment

---

## Features

- Synchronized hero carousel (main image, thumbnails, testimonials)
- Autoplay with manual override
- Active nav link highlight on scroll
- Dark / light mode toggle
- Mobile responsive with hamburger menu
- Optimized images via Astro Image
- SEO meta tags

---

## Sections

| Section | Description |
|---------|-------------|
| Hero | Synchronized carousel with dishes and testimonials |
| Popular Dishes | Grid of featured menu items |
| About Us | Chef story with stats |
| Testimonials | Customer reviews carousel |
| New Items | Latest menu additions |
| Contact | Info cards with opening hours, address, email, phone |
| Offers | Promotional image grid |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
src/
  components/
    common/       # Reusable components (DishCard, MenuCard...)
    islands/      # React interactive components (HeroSlider, MobileMenu...)
    sections/     # Page sections (Hero, Navbar, Footer...)
    ui/           # shadcn/ui components
  data/           # Static data (heroSlides, menuItems, testimonials...)
  layouts/        # Layout.astro with SEO meta tags
  pages/          # index.astro
  styles/         # global.css with theme variables
public/
  images/         # Hero carousel images
  authors/        # Avatar images
```

---

## License

MIT