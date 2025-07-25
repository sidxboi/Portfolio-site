# Portfolio Application

## Overview

This is a modern full-stack portfolio application built for Sidhant Ranjan Medhi, showcasing his work as a Computer Science & Engineering student. The application features a sleek, dark-themed design with interactive elements, floating particles, and smooth scrolling navigation. It serves as both a personal portfolio and a demonstration of modern web development skills.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful API structure with `/api` prefix

### Development Architecture
- **Language**: TypeScript throughout the entire stack
- **Monorepo Structure**: Shared types and schemas between client and server
- **Development Server**: Vite dev server with Express backend integration
- **Hot Module Replacement**: Enabled for rapid development

## Key Components

### Client-Side Components
1. **Navigation**: Floating navigation bar with smooth scrolling to sections
2. **Hero Section**: Animated introduction with gradient text effects
3. **About Section**: Personal background and key achievements
4. **Skills Section**: Interactive skill bars with categories (Frontend, Backend, AI/ML)
5. **Projects Section**: Portfolio showcase with technology tags and links
6. **Experience Section**: Timeline-based work and education history
7. **Contact Section**: Interactive contact form with social media links
8. **Footer**: Additional contact information and branding

### Server-Side Components
1. **Express Server**: Main application server with middleware setup
2. **Route Handler**: Centralized route registration system
3. **Storage Interface**: Abstracted storage layer with in-memory implementation
4. **Vite Integration**: Development-time integration for SSR and HMR

### UI System
- **Design System**: Dark theme with navy background and accent colors
- **Component Library**: Comprehensive UI components (buttons, forms, dialogs, etc.)
- **Animations**: CSS animations and transitions for enhanced user experience
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Data Flow

### Client-Side Data Flow
1. **Component Rendering**: React components render with TypeScript type safety
2. **State Management**: TanStack Query handles server state and caching
3. **Form Handling**: React Hook Form with Zod validation
4. **API Communication**: Fetch-based API client with error handling

### Server-Side Data Flow
1. **Request Processing**: Express middleware handles incoming requests
2. **Route Handling**: Centralized route registration with type safety
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Response Formatting**: Consistent JSON response structure

### Database Schema
- **Users Table**: Basic user management with ID, username, and password fields
- **Schema Validation**: Drizzle-Zod integration for runtime type checking
- **Migrations**: Drizzle Kit manages database schema changes

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for serverless PostgreSQL hosting
- **UI Framework**: Radix UI for accessible component primitives
- **Validation**: Zod for runtime type validation
- **Styling**: Tailwind CSS for utility-first styling
- **Animation**: Framer Motion capabilities through CSS animations

### Development Dependencies
- **Build Tools**: Vite, ESBuild for fast builds and bundling
- **Type Checking**: TypeScript compiler with strict configuration
- **Code Quality**: PostCSS for CSS processing

### Optional Integrations
- **Replit Integration**: Development environment optimizations for Replit
- **Error Handling**: Runtime error overlay for development

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite builds optimized client-side assets
2. **Backend Build**: ESBuild bundles server code with external dependencies
3. **Asset Optimization**: CSS and JavaScript minification and optimization
4. **Type Checking**: Full TypeScript compilation check before deployment

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Security**: Secure session management with PostgreSQL storage
- **Development vs Production**: Environment-specific configurations

### Hosting Considerations
- **Static Assets**: Client build output served from `/dist/public`
- **API Endpoints**: Express server handles `/api/*` routes
- **Database**: Serverless PostgreSQL for scalable data storage
- **Session Persistence**: Database-backed sessions for user state

### Security Features
- **Environment Variables**: Sensitive configuration via environment variables
- **Session Management**: Secure session handling with database storage
- **Input Validation**: Runtime validation using Zod schemas
- **CORS Configuration**: Proper cross-origin resource sharing setup