# Cloudflare Pages Deployment Guide

This guide explains how to deploy each app in this Turborepo monorepo to Cloudflare Pages using subdomains.

## Overview

| App | Domain | Cloudflare Project Name |
|-----|--------|------------------------|
| public-site | fundedyouth.org | fundedyouth-public-site |

## Setup Instructions

### 1. Connect Repository to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click **Create a project** → **Connect to Git**
3. Select your GitHub repository: `fy-turborepo-vite-shadcn-ui`
4. You'll create a **separate Cloudflare Pages project for each app**

---

### 2. App Configuration

#### public-site (Main Domain)

**Cloudflare Pages Settings:**

| Setting | Value |
|---------|-------|
| Project name | `fundedyouth-public-site` |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `pnpm --filter public-site build` |
| Build output directory | `apps/public-site/dist` |
| Root directory | `/` (leave empty) |

**Custom Domain:**
- Add `fundedyouth.org` and `www.fundedyouth.org`

---

## Step-by-Step: Creating a Project

1. Cloudflare Dashboard → Pages → **Create a project**
2. Connect to Git → Select `fy-turborepo-vite-shadcn-ui`
3. Configure build settings:
   - **Project name:** `fundedyouth-public-site`
   - **Production branch:** `main`
   - **Framework preset:** `Vite`
   - **Build command:** `pnpm --filter public-site build`
   - **Build output directory:** `apps/public-site/dist`
4. Click **Save and Deploy**

---

## Custom Domains Setup

1. Go to your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `fundedyouth.org`
4. Cloudflare will auto-configure DNS (since domain is on Cloudflare)
5. Repeat for `www.fundedyouth.org`

---

## Build Commands Reference

```bash
# public-site
pnpm --filter public-site build

# Generic pattern for any app
pnpm --filter <app-name> build
```

---

## Troubleshooting

### Caching Issues
To clear cache and rebuild:
1. Go to project → **Deployments**
2. Click **Retry deployment** with "Clear cache and retry" option

### Dependencies Not Installing
Cloudflare Pages runs `pnpm install` automatically. If dependencies fail, check that `pnpm-lock.yaml` is committed to the repo.

---

## Preview Deployments

Each push to a non-production branch creates a preview deployment:
- Preview URL format: `<branch>.<project-name>.pages.dev`
- Example: `feature-hero.fundedyouth-public-site.pages.dev`

---

## Deployment Triggers

By default, Cloudflare rebuilds on every push to the connected branch. To optimize:

1. Go to project **Settings → Builds & deployments**
2. Under **Branch deployments**, configure which branches trigger builds
3. Consider using **Build watch paths** to only rebuild when specific app files change:
   ```
   apps/public-site/**
   packages/**
   functions/**
   ```

---

## Cloudflare Pages Functions (Monorepo)

### Important: Functions Location

When using Cloudflare Pages with a monorepo where **Root directory is empty**, the `functions` folder **must be at the repository root**, not inside the app directory.

```
/functions/                    ← Repository root (where Cloudflare looks)
  └── api/
      ├── eventbrite/
      │   └── [[path]].ts      ← Eventbrite API proxy
      └── sponsor.ts           ← Sponsor form handler
```

**Why?** Cloudflare Pages looks for the `functions` folder relative to the configured Root directory. Since our Root directory is empty (repo root), functions must be at `/functions/`, not `/apps/public-site/functions/`.

### Current Functions

| Function | Path | Purpose |
|----------|------|---------|
| Eventbrite Proxy | `/api/eventbrite/*` | Proxies requests to Eventbrite API with authentication |
| Sponsor Form | `/api/sponsor` | Handles corporate sponsor form submissions |

### Environment Variables

Functions require environment variables configured in Cloudflare Pages:

1. Go to project **Settings → Environment variables**
2. Add the following variables for **Production** and **Preview**:

| Variable | Description |
|----------|-------------|
| `EVENTBRITE_PRIVATE_TOKEN` | Eventbrite API private token |
| `RESEND_API_KEY` | Resend email API key (for sponsor form) |
| `SPONSOR_EMAIL_RECIPIENTS` | Comma-separated email recipients |

### Local Development

During local development with `pnpm --filter public-site dev`, the Vite dev server proxy handles API requests (configured in `vite.config.ts`). The repo root `functions` folder is only used by Cloudflare Pages in production.

### Adding New Functions

1. Create the function file in `/functions/api/` at the repo root
2. For catch-all routes, use `[[path]].ts` naming convention
3. Add any required environment variables in Cloudflare Pages dashboard
4. Commit and push to trigger redeployment
