# Bella — Salão de Beleza, Carcavelos

## Project Overview

Professional hair salon website template targeting **Carcavelos & Linha de Cascais**, Portugal. Part of a freelance web dev business building templates for local service businesses. This is the fourth template after a restaurant (Koya's Bistro), mechanic (Revicar), and plumber (AquaFix).

**Live URL:** TBD (Vercel)
**Brand:** Bella — Salão de Beleza
**Target client:** Hair salons and beauty studios in Carcavelos/Cascais area
**Business model:** €500 build (€250 upfront) + €50/month maintenance

## Market Context

Carcavelos e Parede has 42+ registered salons (cabeleireiros). Most rely on Treatwell, Instagram, or word-of-mouth — very few have their own professional website. Competitors like Weslleyys Hair, Espaço Escher, M Hair Design, and Castelar are well-reviewed but have zero or basic web presence. Common services across the area: corte feminino/masculino, coloração, madeixas, alisamento, brushing, manicure, extensões, tratamentos capilares. Popular brands used: Kérastase, L'Oréal Professionnel, Truss Professional, Keune Haircosmetics. A clean, modern site with online booking would immediately differentiate any salon in this market.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via @tailwindcss/postcss)
- **Hosting:** Vercel
- **Fonts:** Inter (body) + Playfair Display (headings/brand) via Google Fonts CDN
- **Context:** use context7 for up to date documentation

## Color System

Warm rose/cream palette — elegance, femininity, warmth without being overly pink.

| Token     | Hex     | Usage                     |
| --------- | ------- | ------------------------- |
| cream-50  | #fdf8f5 | Page background, lightest |
| cream-100 | #f9efe8 | Section alternating bg    |
| cream-200 | #f0e0d3 | Card backgrounds          |
| cream-300 | #e2cbb8 | Borders, dividers         |
| rose-900  | #4a2032 | Primary text, headings    |
| rose-800  | #6b2e4a | Secondary headings        |
| rose-700  | #8a3d5c | Body text emphasis        |
| rose-500  | #c06080 | Accent, highlights        |
| rose-400  | #d4849e | Icons, secondary accents  |
| gold-600  | #b8860b | Premium accent, CTAs      |
| gold-500  | #d4a017 | Hover states, stars       |
| gold-400  | #e8c547 | Subtle highlights         |

## Project Structure

```files
salon-site/
├── app/
│   ├── globals.css              # Theme, custom colors, animations
│   ├── layout.tsx               # Root layout (html/body)
│   ├── [locale]/
│   │   ├── layout.tsx           # Locale layout (metadata, JSON-LD)
│   │   └── page.tsx             # Page composition (all sections)
│   └── components/
│       ├── Navbar/Navbar.tsx
│       ├── HeroContent/HeroContent.tsx
│       ├── About/About.tsx
│       ├── Services/Services.tsx
│       ├── Pricing/Pricing.tsx
│       ├── Gallery/Gallery.tsx
│       ├── Reviews/Reviews.tsx
│       ├── Team/Team.tsx
│       ├── Contact/Contact.tsx
│       ├── Footer/Footer.tsx
│       └── BookingBar/BookingBar.tsx
├── dictionaries/
│   ├── en.json
│   └── pt.json
├── i18n-config.ts
├── get-dictionary.ts
├── proxy.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Architecture Rules

### Components

- One component per file, one folder per component
- All components are `"use client"` unless purely presentational
- Props type defined inline above component, named `Props`
- Dictionary type defined inline, matching dictionary keys exactly
- Every component receives its dict slice — never the whole dictionary

### i18n

- Default locale: `pt` (Portuguese)
- All user-facing text lives in dictionaries, never hardcoded
- Dictionary keys are flat within each section (no deep nesting)
- When adding a section, update BOTH en.json and pt.json simultaneously

### Styling

- Custom colors defined in `globals.css` under `@theme inline`
- Use cream-_for backgrounds, rose-_ for text/headings, gold-\* for CTAs/accents
- Font: Playfair Display for headings/brand (`style={{ fontFamily: "'Playfair Display', serif" }}`)
- Font: Inter for body text (loaded via globals.css Google Fonts import)
- Mobile-first: base styles → sm: → md: → lg:
- No arbitrary values when a theme token exists
- This is a LIGHT theme — unlike the plumber/mechanic dark templates

### Animations

- IntersectionObserver for scroll-triggered fade-ins
- Staggered delays via inline `transitionDelay` style
- Subtle, elegant transitions — no aggressive pulsing or urgency effects
- Hover effects on gallery images (scale, overlay)
- Smooth reveal for pricing cards

### SEO

- JSON-LD schema type: `"HairSalon"` (schema.org subtype of HealthAndBeautyBusiness)
- `areaServed`: Carcavelos, Parede, Cascais, Estoril, São Domingos de Rana, Oeiras
- Full OpenGraph + Twitter card meta per locale
- Portuguese keywords targeting "cabeleireiro carcavelos", "salão de beleza cascais", "coloração", "madeixas"

## Section Build Order

1. ⬜ Navbar — sticky, elegant, booking CTA, language toggle
2. ⬜ Hero — brand name, tagline, booking CTA, atmospheric background
3. ⬜ About — salon story, team photo placeholder, philosophy
4. ⬜ Services — categorized services (Hair, Color, Treatments, Beauty)
5. ⬜ Pricing — tiered pricing table with categories
6. ⬜ Gallery — before/after or portfolio grid with lightbox
7. ⬜ Team — stylist cards with name, role, specialties
8. ⬜ Reviews — customer testimonials with star ratings
9. ⬜ Contact — form + Google Maps + WhatsApp + phone + hours
10. ⬜ Footer — links, copyright (dynamic year), Instagram feed placeholder
11. ⬜ BookingBar — sticky mobile bottom bar with "Marcar Agora" CTA

## Design Principles (Hair Salon-specific)

### Vibe: Elegant & Inviting

- **Light, airy palette** — cream backgrounds, rose text, gold accents. This is NOT a dark theme.
- **Editorial typography** — Playfair Display gives a magazine/luxury feel without being pretentious
- **Whitespace is key** — let the design breathe, salon sites should feel calm and refined
- **Photography-forward** — large image placeholders for hero, gallery, team. The site should be designed to look stunning once real photos are added.

### Content Strategy

- **Booking is the primary CTA** — every section should funnel toward "Marcar Agora" (Book Now)
- **Pricing transparency** — Portuguese clients want to see prices before visiting. Display them clearly.
- **Team showcase** — salons are personal businesses. Clients choose stylists, not just salons.
- **Social proof** — reviews and gallery are critical. Show the work, show happy clients.
- **Brands matter** — mention professional product lines (Kérastase, L'Oréal Pro, etc.) as trust signals
- **Instagram integration** — salon clients are visual. Link/embed Instagram heavily.

### What Makes This Different From Other Templates

| Aspect         | Plumber (AquaFix)   | Mechanic (Revicar)  | Salon (Bella)              |
| -------------- | ------------------- | ------------------- | -------------------------- |
| Theme          | Dark (navy)         | Dark (red/charcoal) | Light (cream/rose)         |
| Primary CTA    | Phone call          | Phone call          | Book appointment           |
| Urgency level  | High (emergency)    | Medium (breakdown)  | Low (appointment)          |
| Hero focus     | Phone number huge   | Trust + services    | Atmosphere + brand         |
| Unique section | Areas coverage      | Brand logos         | Pricing table + Gallery    |
| Typography     | Oswald (bold)       | Oswald (bold)       | Playfair Display (elegant) |
| Tone           | Professional/urgent | Technical/reliable  | Warm/luxurious             |

## Workflow

When building a new section:

1. Create component file in `app/components/[Name]/[Name].tsx`
2. Define the dict type matching planned dictionary keys
3. Add dictionary entries to BOTH pt.json AND en.json
4. Import and add component to `page.tsx`
5. Test both `/pt` and `/en` routes
6. Check mobile (375px) and desktop (1440px)

## Phone / Contact Info (Demo)

- Phone: +351 912 345 678
- WhatsApp: same number
- Address: Rua Example 123, Carcavelos, 2775-000
- Google Maps coords: 38.6883, -9.3350
- Hours: Terça–Sábado 9h–19h (closed Sunday & Monday — typical for Portuguese salons)

## Demo Services & Pricing (Realistic for Cascais market)

### Cabelo (Hair)

- Corte Feminino — €25
- Corte Masculino — €15
- Corte Criança — €12
- Brushing — €15–€25
- Penteado / Ocasião Especial — €40+

### Cor (Color)

- Coloração Completa — €45
- Madeixas / Balayage — €65–€90
- Descoloração — €55
- Tonalização — €30
- Correção de Cor — sob consulta

### Tratamentos (Treatments)

- Hidratação Profunda — €25
- Botox Capilar — €50
- Queratina / Alisamento — €80–€120
- Tratamento Reconstrutor — €35
- Diagnóstico Capilar — grátis

### Beleza (Beauty)

- Manicure Clássica — €12
- Manicure Gel — €20
- Pedicure — €18
- Design de Sobrancelhas — €10
- Extensões de Pestanas — €45

## Demo Brand Products

- Kérastase
- L'Oréal Professionnel
- Truss Professional
- Keune Haircosmetics
- Olaplex
