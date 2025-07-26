# Vercel Deployment Guide

## Quick Deployment Steps

### Option 1: Download and Deploy to Vercel (Recommended)

1. **Download the project folder from Replit**
   - Click on the three dots menu in the file panel
   - Select "Download as ZIP"
   - Extract the ZIP file on your local machine

2. **Build the project locally**
   ```bash
   npm install
   npx vite build
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub, GitLab, or Bitbucket
   - Click "New Project"
   - Upload the project folder or connect your Git repository
   - Vercel will automatically detect the configuration from `vercel.json`

### Option 2: Git Repository Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from your Git repository
   - Vercel will use the `vercel.json` configuration automatically

### Option 3: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## Project Configuration

The project is already configured with `vercel.json`:

- **Build Command**: `npx vite build`
- **Output Directory**: `dist/public`
- **Framework**: Vite (React)
- **SPA Routing**: Configured for single-page application

## Build Verification

To test the build locally:
```bash
npx vite build
npx vite preview
```

## Deployment URLs

After deployment, your portfolio will be available at:
- Production: `https://your-project-name.vercel.app`
- Custom domain can be configured in Vercel dashboard

## Environment Notes

- The project is 100% frontend-only (no backend required)
- All dependencies are optimized for static deployment
- Build output is in `dist/public/` directory
- Ready for CDN deployment with optimized assets

## Troubleshooting

If you encounter issues:

1. **Build fails**: Run `npm install` and `npx vite build` locally first
2. **Routing issues**: The `vercel.json` includes SPA routing configuration
3. **Asset loading**: All assets are optimized and bundled by Vite

Your portfolio is now ready for production deployment! 🚀