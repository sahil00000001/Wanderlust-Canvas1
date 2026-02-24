# Replit.md

## Overview

LumiereTravel is a luxury travel agency website built as a full-stack application with a React frontend and Express backend. The site showcases travel packages, destinations, tours, special deals, blog posts, and testimonials. Currently, the frontend is **fully static** — it uses hardcoded mock data and does not make any API calls. The backend exists as scaffolding but has no active API routes. The app is branded with a luxurious travel palette (Sky Blue, Ocean Teal, Sunset Orange) and uses Outfit + DM Sans fonts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with CSS variables for theming, custom travel-themed color palette defined in `client/src/index.css`
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **Animations**: Framer Motion for page transitions, scroll-triggered animations, and micro-interactions
- **State Management**: TanStack React Query (configured but not actively used since the app is static)
- **Data**: All content comes from hardcoded mock data in `client/src/lib/mock-data.ts` — travel packages, destinations, testimonials
- **Images**: Unsplash URLs for all travel imagery
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Pages
- `/` — Home (Hero, Featured Packages, Destinations, Special Deals, Testimonials)
- `/destinations` — Destination listings
- `/tours` — Tour package listings
- `/deals` — Special deals and flash sales
- `/blog` — Travel blog posts
- 404 — Custom not-found page

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (via tsx)
- **Server Entry**: `server/index.ts` creates an HTTP server, registers routes, and serves static files or Vite dev middleware
- **Routes**: `server/routes.ts` — currently empty, no API endpoints registered
- **Storage**: `server/storage.ts` — defines an `IStorage` interface and `MemStorage` in-memory implementation for users (not actively used)
- **Dev Mode**: Vite dev server runs as middleware with HMR via `server/vite.ts`
- **Production**: Static files served from `dist/public` via `server/static.ts`

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: `shared/schema.ts` defines a `users` table (id, username, password) with Zod validation via drizzle-zod
- **Config**: `drizzle.config.ts` reads `DATABASE_URL` environment variable
- **Migrations**: Output to `./migrations` directory
- **Push Command**: `npm run db:push` uses drizzle-kit to push schema to database
- **Note**: The database is set up but not actively used by the application yet. Session storage support exists via `connect-pg-simple` in dependencies.

### Build Process
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles `server/index.ts` to `dist/index.cjs`, externalizing most deps except a curated allowlist
- **Scripts**: `npm run dev` for development, `npm run build` for production build, `npm start` for production server

### Shared Code
- `shared/schema.ts` — Database schema and Zod types shared between frontend and backend
- `shared/routes.ts` — API route definitions with Zod schemas (scaffolded but not actively used)

## External Dependencies

### Core Services
- **PostgreSQL** — Database (required by Drizzle config, needs `DATABASE_URL` env var)
- **Unsplash** — External image CDN for all travel photography (no API key needed, direct image URLs)
- **Google Fonts** — DM Sans, Outfit, Fira Code, Geist Mono fonts loaded via CDN

### Key NPM Packages
- **Frontend**: React, Wouter, Framer Motion, TanStack React Query, shadcn/ui (Radix UI primitives), Tailwind CSS, Embla Carousel, Recharts, react-day-picker, react-hook-form, Zod
- **Backend**: Express 5, Drizzle ORM, drizzle-zod, connect-pg-simple, express-session, passport, passport-local
- **Build**: Vite, esbuild, tsx, TypeScript
- **Replit-specific**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`