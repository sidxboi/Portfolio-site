# Portfolio Application

## Overview

This is a modern frontend-only portfolio application built for Sidhant Ranjan Medhi, showcasing his work as a Computer Science & Engineering student. The application features a sleek, dark-themed design with interactive elements, floating particles, smooth scrolling navigation, and 3D effects. It serves as both a personal portfolio and a demonstration of modern web development skills. Designed for easy deployment to platforms like Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.
Architecture preference: Frontend-only for easy deployment without backend dependencies.

## System Architecture

The application follows a modern frontend-only architecture optimized for static deployment:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming and 3D effects
- **UI Components**: Shadcn/ui component library built on Radix UI primitives (minimal usage)
- **Build Tool**: Vite for fast development and optimized production builds
- **Animations**: CSS-based 3D transforms, floating particles, and smooth scroll effects
- **Deployment**: Optimized for static hosting platforms like Vercel

### Development Architecture
- **Language**: TypeScript for type safety
- **Development Server**: Vite dev server for fast development experience
- **Hot Module Replacement**: Enabled for rapid development
- **Asset Management**: Support for attached assets through Vite aliases
- **No Backend Dependencies**: Pure client-side application

## Key Components

### Application Components
1. **Navigation**: Floating navigation bar with smooth scrolling to sections and active section highlighting
2. **Hero Section**: Animated introduction with gradient text effects and 3D floating elements
3. **About Section**: Personal background and key achievements with interactive cards
4. **Skills Section**: Interactive skill bars with categories (Frontend, Backend, AI/ML) and animations
5. **Projects Section**: Portfolio showcase with 3D hover effects, technology tags, and external links
6. **Experience Section**: Timeline-based work and education history with alternating layout
7. **Contact Section**: Contact information display with working social media buttons (no form)
8. **Footer**: Social media links and copyright information
9. **Floating Particles**: Background animation system for enhanced visual appeal

### UI System
- **Design System**: Dark theme with navy background and accent colors
- **Component Library**: Comprehensive UI components (buttons, forms, dialogs, etc.)
- **Animations**: CSS animations and transitions for enhanced user experience
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Data Flow

### Component Interaction Flow
1. **Component Rendering**: React components render with TypeScript type safety
2. **Navigation**: Smooth scroll behavior with active section detection
3. **User Interactions**: Click handlers for navigation, social links, and external project links
4. **Visual Effects**: CSS animations, 3D transforms, and particle system management

### Content Management
- **Static Content**: All portfolio data hardcoded in components for reliability
- **External Links**: Direct links to GitHub repositories, LinkedIn, and email
- **Asset Handling**: Vite-based asset management with alias support

## External Dependencies

### Core Dependencies
- **UI Framework**: Minimal Radix UI components for tooltips
- **Styling**: Tailwind CSS for utility-first styling and 3D effects
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite for fast builds and development server
- **Type Checking**: TypeScript compiler with strict configuration
- **CSS Processing**: PostCSS and Tailwind CSS processing

### Optional Integrations
- **Replit Integration**: Development environment optimizations for Replit
- **Error Handling**: Runtime error overlay for development

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite builds optimized static assets for deployment
2. **Asset Optimization**: CSS and JavaScript minification and optimization
3. **Type Checking**: Full TypeScript compilation check before deployment
4. **Static Generation**: All assets bundled for static hosting

### Deployment Platforms
- **Vercel**: Optimized for static deployment with automatic builds
- **Netlify**: Alternative static hosting platform
- **GitHub Pages**: Free hosting option for static sites
- **Any Static Host**: Compatible with any static file hosting service

### Build Output
- **Static Assets**: All files output to `/dist/public` directory
- **No Server Required**: Pure client-side application
- **CDN Compatible**: Optimized for content delivery networks

### Performance Features
- **Code Splitting**: Automatic code splitting by Vite
- **Asset Optimization**: Image and CSS optimization
- **Tree Shaking**: Unused code elimination
- **Modern Build**: ES modules and modern JavaScript features

## Recent Changes

### January 26, 2025
- Fixed Vite host blocking issue by adding allowedHosts configuration in server/index.ts
- Added support for Replit development environment domains to prevent host blocking errors
- Configured server to accept connections from Replit preview domains (.replit.dev)
- Fixed navigation bar overlapping main title by adding proper top padding (pt-20 md:pt-24) to hero section
- Ensured proper spacing between fixed navigation and hero content