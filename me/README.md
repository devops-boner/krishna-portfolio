# Krishna Pankhania — Portfolio

This is a production-ready portfolio website for **Krishna Pankhania**, showcasing projects in AI/ML, generative models, and modern web development.

## Architecture & Aesthetic Direction
This portfolio uses a **Refined Brutalism / Architectural** design language.
The layout leans on a strict grid, monochrome palette, and bold typography to reflect the structure and precision behind machine learning systems and engineering workflows. Subtle 3D motion and micro-interactions keep the experience modern without unnecessary visual noise.

The site is built as a highly-performant single-page application:
- **Core Framework**: React + TypeScript via Vite
- **Styling**: Vanilla CSS with layout and typography utilities
- **Animation**: GSAP and Lenis (smooth scrolling & scroll-based reveals)
- **3D Render**: Three.js + React Three Fiber (abstract icosahedron for technical depth)

## Setup & Deployment

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```
   This outputs a static build to the `dist/` folder.

4. **Deploy** (any static host):
   - **Vercel**: Connect the repo or run `vercel --prod` from the project root.
   - **Netlify**: Point the site to the `dist/` directory or drag and drop it in the UI.
