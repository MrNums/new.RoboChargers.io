# RoboChargers Team Website

## Overview

This is a full-stack web application for a competitive robotics team (FRC 3005 RoboChargers). The application features a modern React frontend with a Node.js/Express backend, built to showcase the team's robots, achievements, team members, and provide information about their robotics programs.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend:

- **Frontend**: React with TypeScript, Vite build system
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS with shadcn/ui components
- **Authentication**: Passport.js with session-based auth

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

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle with PostgreSQL dialect
- **Authentication**: Passport.js with local strategy
- **Session Management**: Express-session with configurable store
- **Development**: Hot reload with Vite integration

### Data Layer
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **ORM**: Drizzle with schema-first approach
- **Migrations**: Drizzle Kit for database management
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Authentication**: Passport.js middleware checks session authentication
3. **Route Handling**: Express routes process requests and interact with storage layer
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response**: JSON data returned to client and cached by TanStack Query

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (@neondatabase/serverless)
- **UI Framework**: Radix UI component primitives
- **Validation**: Zod for schema validation
- **Image Processing**: Sharp for image optimization
- **Development**: Replit-specific plugins and tooling

### Authentication Dependencies
- **Passport.js**: Authentication middleware
- **Express Session**: Session management
- **Crypto**: Built-in Node.js crypto for password hashing

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Requires DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

## Changelog
- July 03, 2025. Initial setup
- July 03, 2025. Added Stats page with rainbow animated award borders and easter egg celebrations

## User Preferences

Preferred communication style: Simple, everyday language.