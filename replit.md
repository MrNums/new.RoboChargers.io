# RoboChargers Team Website

## Overview

This is a full-stack web application for a competitive robotics team (FRC 3005 RoboChargers). The application features a modern React frontend with a Node.js/Express backend, built to showcase the team's robots, achievements, team members, and provide information about their robotics programs.

## System Architecture

The application is now a static site with no backend dependencies:

- **Frontend**: React with TypeScript, Vite build system
- **Data**: Static data files in TypeScript (no database)
- **Styling**: TailwindCSS with shadcn/ui components
- **Deployment**: Static hosting ready (Netlify, Vercel, GitHub Pages)

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **UI Components**: Radix UI primitives with shadcn/ui
- **Styling**: TailwindCSS with custom design system
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions

### Data Layer
- **Data Storage**: Static TypeScript files in `client/src/lib/data.ts`
- **Content Types**: Blog posts, robots, events, sponsors, gallery images
- **Updates**: Direct file editing with version control

## Data Flow

1. **Static Data**: React components import data directly from TypeScript files
2. **Client-side Routing**: Wouter handles navigation without server requests
3. **Immediate Loading**: No API calls or database queries needed
4. **Static Assets**: Images and media served directly from CDN

## External Dependencies

### Core Dependencies
- **UI Framework**: Radix UI component primitives
- **Validation**: Zod for schema validation (forms only)
- **Image Processing**: Sharp for image optimization
- **Development**: Replit-specific plugins and tooling
- **No Server Dependencies**: No database, authentication, or backend services

## Deployment Strategy

### Build Process
1. **Static Build**: Vite builds React app to `dist/public`
2. **Asset Optimization**: Images and CSS automatically optimized
3. **No Backend**: Pure static files ready for CDN deployment

### Environment Configuration
- **Development**: Vite development server with hot reload
- **Production**: Static files served from any web server or CDN
- **No Environment Variables**: No secrets or configuration needed

### Custom Domain Deployment
**User Preference**: Deploy with custom domain instead of default .replit.app domain

For custom domain deployment on Replit:
1. Deploy the application using Replit Deployments
2. In the deployment settings, configure custom domain
3. Update DNS records to point to Replit's servers
4. SSL/TLS certificates are handled automatically by Replit

### Scripts
- `vite dev --port 5000`: Development server with hot reload
- `vite build`: Production build for static deployment
- `vite preview`: Preview production build locally

## Changelog
- July 03, 2025. Initial setup
- July 03, 2025. Added Stats page with rainbow animated award borders and easter egg celebrations
- July 18, 2025. Security patch: Upgraded Vite from 5.4.14 to 5.4.15 (CVE-2025-30208)
- July 18, 2025. Enhanced hero section: updated robot image to RelayVrooom.png, improved text, added glow effects and background pan animation
- July 18, 2025. Added animated blue/yellow borders to program cards with 8-second subtle animation cycles
- July 18, 2025. Fixed DOM validation errors: removed nested anchor tags, added celebration throttling, improved easter egg cleanup
- July 26, 2025. Data management improvements: restructured blog posts and events to use ascending chronological order with automatic ID generation
- July 26, 2025. Blog system completion: created full blog functionality with individual post pages, fixed Recent Updates display, added comprehensive blog navigation
- July 27, 2025. Static site conversion: removed all server dependencies, eliminated database requirements, converted to pure static hosting for free deployment
- July 27, 2025. FTC data cleanup: updated FTC teams to real team numbers with simple names - Team 13537 (Red), Team 13542 (Blue), Team 13552 (Pink), removed fake placeholder data

## User Preferences

Preferred communication style: Simple, everyday language.
Deployment preference: Custom domain instead of default .replit.app domain