# FundedYouth Platform

A monorepo for [FundedYouth.org](https://fundedyouth.org) - a nonprofit empowering youth with access to industrial manufacturing tools, STEAM educational services, and on-demand manufacturing certification programs.

## Project Overview

FundedYouth's mission is to solve for limited resources in education by providing hands-on learning experiences in 3D printing, 3D modeling, coding, electronics, and product development.

## Tech Stack

- **Monorepo:** [Turborepo](https://turbo.build/repo)
- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS 4 + [shadcn/ui](https://ui.shadcn.com)
- **Deployment:** Cloudflare Pages
- **Package Manager:** pnpm

## Repository Structure

```
├── apps/
│   ├── public-site/        # Main FundedYouth.org website
│   ├── _concept/           # Design concepts and experiments
│   └── __template_vite/    # Vite app template
├── packages/
│   ├── ui/                 # Shared shadcn/ui components (@repo/ui)
│   ├── eslint-config/      # Shared ESLint configuration
│   └── typescript-config/  # Shared TypeScript configuration
├── functions/              # Cloudflare Pages Functions (API routes)
│   └── api/
│       ├── eventbrite/     # Eventbrite API proxy
│       └── sponsor.ts      # Sponsor form handler
└── turbo.json              # Turborepo configuration
```

## Apps

### public-site
The main FundedYouth.org website featuring:
- **Classes** - Eventbrite-integrated class listings
- **Catalog** - Course curriculum and learning pathways
- **Volunteer** - Volunteer registration
- **Donate** - Donation options
- **Sponsor** - Corporate sponsorship information
- **Store** - Merchandise and products
- **Impact** - Organization impact and achievements

**Live:** [fundedyouth.org](https://fundedyouth.org) | **Preview:** [fundedyouth-public.pages.dev](https://fundedyouth-public.pages.dev)

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v10+

## Getting Started

```bash
# Install dependencies
pnpm install

# Run all apps in development mode
pnpm dev

# Run a specific app
pnpm --filter public-site dev

# Build all apps
pnpm build

# Lint all packages
pnpm lint
```

## Adding UI Components

This repo uses [shadcn/ui](https://ui.shadcn.com) components shared across all apps via `@repo/ui`.

```bash
# Add a new component to the shared UI package
pnpm ui <component-name>

# Examples
pnpm ui button
pnpm ui card
pnpm ui dialog
```

## Using Shared Components

Import components from the shared package in any app:

```tsx
import { Button } from "@repo/ui/components/button";
import { Card } from "@repo/ui/components/card";
import { cn } from "@repo/ui/lib/utils";
import "@repo/ui/styles/globals.css";
```

## Deployment

Apps are deployed to Cloudflare Pages. See [CLOUDFLARE.md](./CLOUDFLARE.md) for detailed deployment instructions.

**Key points:**
- Build command: `pnpm --filter <app-name> build`
- Cloudflare Pages Functions must be at repo root (`/functions/`)
- Environment variables are configured in Cloudflare dashboard

## Environment Variables

### public-site

| Variable | Location | Description |
|----------|----------|-------------|
| `VITE_EVENTBRITE_ORGANIZATION_ID` | `.env` | Eventbrite org ID (client-side) |
| `EVENTBRITE_PRIVATE_TOKEN` | Cloudflare | Eventbrite API token (server-side) |
| `RESEND_API_KEY` | Cloudflare | Email service API key |

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `pnpm lint` and `pnpm build` to verify
4. Submit a pull request

## License

Private - FundedYouth.org
