# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo monorepo with shared shadcn/ui components. It uses pnpm workspaces and supports Tailwind 4.

**Prerequisites:**
- Node.js >=20
- pnpm >=10

## Common Commands

```bash
# Install dependencies
pnpm install

# Build all apps and packages
pnpm build

# Run all apps in development mode
pnpm dev

# Lint all packages
pnpm lint

# Format code
pnpm format

# Add a new shadcn/ui component to the shared package
pnpm ui <component-name>
# Example: pnpm ui card
```

### Working with Individual Apps

Apps are in the `apps/` directory. Each Vite app has these scripts:

```bash
# Run a specific app
pnpm --filter <app-name> dev

# Build a specific app
pnpm --filter <app-name> build

# Example:
pnpm --filter timesheet dev
```

## Architecture

### Monorepo Structure

This is a Turborepo monorepo with the following workspace organization:

- **apps/**: Individual applications (Vite-based React apps)
- **packages/**: Shared packages used across apps
  - `@repo/ui`: Shared shadcn/ui components library
  - `@repo/eslint-config`: Shared ESLint configuration
  - `@repo/typescript-config`: Shared TypeScript configuration

### Shared UI Package (`@repo/ui`)

The `packages/ui` package is the central component library:

- **Location**: `packages/ui/`
- **Structure**:
  - `src/components/`: shadcn/ui components
  - `src/hooks/`: Shared React hooks
  - `src/lib/`: Utility functions
  - `src/styles/`: Global CSS (Tailwind 4)
- **Exports**: Components, hooks, lib utilities, and global CSS are exported via package.json exports field
- **shadcn/ui Config**: Uses "new-york" style with RSC support
- **Adding Components**: Run `pnpm ui <component-name>` from root to add shadcn components to the shared package

### App Architecture

Apps consume the shared UI package:

```typescript
import { Button } from "@repo/ui/components/button";
import { cn } from "@repo/ui/lib/utils";
import "@repo/ui/globals.css";
```

Each app is a standalone Vite + React application that can be developed and deployed independently.

### Tailwind Configuration

This repo uses **Tailwind 4** (configured in `@repo/ui`). Apps import the global CSS from `@repo/ui/globals.css` which includes Tailwind directives.

### Turborepo Tasks

Defined in `turbo.json`:

- **build**: Builds with dependency graph (`^build` means build dependencies first)
- **dev**: Persistent development mode (no cache)
- **lint**: Lints with dependency order
- **check-types**: Type checking with dependency order

## Development Workflow

1. Install dependencies: `pnpm install`
2. Add shadcn/ui components to shared package: `pnpm ui <component-name>`
3. Use components in apps via `@repo/ui/components/*`
4. Run all apps: `pnpm dev`
5. Run specific app: `pnpm --filter <app-name> dev`
