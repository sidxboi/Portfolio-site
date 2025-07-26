# Sidhant Ranjan Medhi - Portfolio

A modern, frontend-only portfolio website showcasing web development skills with 3D effects, smooth animations, and an elegant dark theme.

## 🚀 Features

- **Modern Design**: Dark theme with glass morphism effects and gradient accents
- **3D Interactions**: Floating elements, hover effects, and smooth transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Sections**: Animated skills bars, project showcases, and contact information
- **Performance Optimized**: Built with Vite for fast loading and optimal performance

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS animations
- **Build Tool**: Vite
- **UI Components**: Minimal Radix UI components
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel and other static hosting platforms

## 📦 Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx vite --port 5000
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## 🏗️ Building for Production

Build the static files:
```bash
npx vite build
```

The built files will be in `dist/public/` directory.

## 🚀 Deploy to Vercel

### Option 1: Direct Upload
1. Run `npx vite build` to create the build
2. Upload the `dist/public/` folder contents to Vercel

### Option 2: Git Integration
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect the repository to Vercel
3. Vercel will automatically use the `vercel.json` configuration:
   - Build command: `npx vite build`
   - Output directory: `dist/public`

### Option 3: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the deployment prompts

## 📁 Project Structure

```
├── client/                 # React application source
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
│   └── index.html          # HTML template
├── attached_assets/        # Static assets (resume, etc.)
├── dist/public/           # Build output (after npm run build)
├── vercel.json            # Vercel deployment configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

The portfolio uses CSS custom properties for theming. Update colors in `client/src/index.css`:

```css
:root {
  --navy: hsl(240, 43%, 7%);
  --indigo: hsl(239, 84%, 67%);
  --emerald: hsl(160, 84%, 39%);
  --purple: hsl(258, 84%, 67%);
  --amber: hsl(43, 96%, 56%);
}
```

## 📝 Content Updates

Update personal information in the respective component files:
- Contact info: `client/src/components/Contact.tsx`
- Projects: `client/src/components/Projects.tsx`
- Experience: `client/src/components/Experience.tsx`
- Skills: `client/src/components/Skills.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sidhant Ranjan Medhi