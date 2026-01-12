# Quick Start Guide

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   The app will automatically open at `http://localhost:5173`

## What You'll See

1. **Hero Section** - Beautiful animated introduction with floating hearts and butterflies
2. **Story Section** - Scroll down to see your story revealed with smooth animations
3. **Love Animation** - Click anywhere to create floating emoji particles
4. **Memory Section** - Watch romantic thoughts type out automatically
5. **Proposal Section** - Click either button to see the celebration!

## Customization Tips

### Change Text Content
- Edit `src/components/HeroSection.jsx` for the hero message
- Edit `src/components/StorySection.jsx` for the story cards
- Edit `src/components/MemorySection.jsx` for the typing quotes
- Edit `src/components/ProposalSection.jsx` for the proposal message

### Change Colors
- Look for `background: linear-gradient(...)` in CSS files
- Modify the color values to match your preference
- Example: Change `#667eea` to your favorite color hex code

### Adjust Animation Speed
- In CSS files, find `animation-duration` properties
- Lower values = faster animations
- Higher values = slower animations

### Change Fonts
- Edit `index.html` to change Google Fonts imports
- Update `font-family` in CSS files

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service.

## Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use the `dist` folder contents
- **Any static host**: Upload the `dist` folder

---

Enjoy creating something beautiful! ❤️

