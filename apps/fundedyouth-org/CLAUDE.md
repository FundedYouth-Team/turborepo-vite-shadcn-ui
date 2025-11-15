# CLAUDE.md

Quick reference for the educational website microservice within this Turborepo.

## Service Info

**Purpose**: TinkerCAD-inspired STEM/makerspace public website
**Stack**: React + Vite + React Router v6 + Tailwind CSS + shadcn/ui
**Type**: Public-facing, static content (no auth, no database)

## Commands

```bash
# Replace [service-name] with actual app name
pnpm --filter [service-name] dev         # Development
pnpm --filter [service-name] build       # Production build
pnpm --filter [service-name] check-types # Type check
pnpm --filter [service-name] lint        # Lint
```

## Structure

```
src/
├── components/
│   ├── layout/    # Header, Footer, Navigation
│   ├── sections/  # Hero, Services, Classes sections
│   ├── cards/     # ServiceCard, ClassCard
│   └── forms/     # ContactForm, NewsletterSignup
├── pages/         # Home, Services, Classes, About, Contact
├── assets/        # Images, icons
├── App.tsx        # Router setup
└── main.tsx       # Entry point
```

**Path alias**: `@/` → `src/`

## Routing

**React Router v6** setup in `App.tsx`:

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/classes" element={<Classes />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```

## Design Requirements

**TinkerCAD Inspiration:**

- Bright, inviting colors (blues, oranges, greens)
- Playful yet professional
- Clean UI with generous whitespace
- STEM/educational aesthetic
- High contrast (WCAG AA minimum)

**Responsive Breakpoints** (mobile-first):

- Mobile: default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- XL: `xl:` (1280px)

## Component Patterns

### Page Layout

All pages use this structure:

```typescript
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1">{/* page content */}</main>
  <Footer />
</div>
```

### Card Grid

For services/classes listings:

```typescript
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map(item => <Card key={item.id} {...item} />)}
  </div>
</div>
```

### Forms

Simple validation, accessible labels:

```typescript
<form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" required />
  </div>
  <Button type="submit">Submit</Button>
</form>
```

## Import from Shared UI

```typescript
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { cn } from "@repo/ui/lib/utils";
import "@repo/ui/globals.css";
```

## Rules & Conventions

**ALWAYS:**

- Build mobile-first, then scale up
- Use semantic HTML (`<nav>`, `<main>`, `<section>`)
- Include ARIA labels for accessibility
- Keep components loosely coupled and single-purpose
- Use TypeScript interfaces for props
- Test across all breakpoints

**NEVER:**

- Skip accessibility features
- Use inline styles (use Tailwind)
- Create components > 150 lines (split them)
- Hardcode content that might change (use props/config)

## Pages Overview

1. **Home** - Hero, featured services, upcoming classes, newsletter
2. **Services** - Grid of service cards with descriptions
3. **Classes** - Workshop listings with schedules
4. **About** - Facility info, team, mission
5. **Contact** - Contact form, location, hours

## Forms

**Contact Form**: name, email, message (all required)
**Newsletter**: email only
**Note**: Backend integration needed for submission handling

## Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] Keyboard navigation works
- [ ] Color contrast WCAG AA
- [ ] Alt text on all images
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Focus indicators visible
- [ ] Form labels properly associated

## Quick Tasks

**Add page**: Create in `pages/` → Add route to `App.tsx` → Update Header nav
**Add component**: Create in `components/{category}/` → Define TS interface → Export
**Add shadcn component**: Run `pnpm ui <name>` from monorepo root

## Gotchas

- Forms have no backend - show user feedback but don't send anywhere yet
- All content is static - no CMS or database
- Images go in `assets/` - optimize before adding
- React Router uses browser routing (not hash)
- Shared UI uses Tailwind 4 - check compatibility if using custom CSS
