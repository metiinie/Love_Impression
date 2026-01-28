# For Imani ❤️ - A Love Proposal Website

A beautiful, emotionally engaging single-page React application expressing love for Imani and ending with a gentle proposal.

## Features

### 🎨 **Hero Section**
- Full-screen layout with soft gradient background
- Animated title with beating heart icon
- Poetic subtitle about love
- Floating animated hearts and butterflies

### 📖 **Story Section**
- Smooth scroll reveal animations
- Three story cards with fade-in effects:
  - When I met you
  - How you changed my world
  - Why you're special

### 💖 **Love Animation Section**
- Large beating heart in the center
- Interactive click effects that create floating emojis
- Particles (❤️ 🦋 ✨ 🌸) that rise and fade

### 💭 **Memory Section**
- Typing animation revealing romantic thoughts
- Card-style UI with glassmorphism effects
- Beautiful romantic quotes

### 💍 **Proposal Section**
- Heartfelt proposal message
- Two interactive buttons: "Yes 💖" and "Of course 😘"
- Celebration effects with confetti, hearts, and butterflies when clicked

### ✨ **Extra Touches**
- Cursor trail of tiny hearts
- Background sparkle particles
- Smooth scrolling throughout
- Fully responsive design

## Technology Stack

- **React 18** - Functional components with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom animations and keyframes
- **Google Fonts** - Playfair Display & Poppins

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx          # Hero with animated hearts/butterflies
│   ├── StorySection.jsx          # Story cards with scroll reveal
│   ├── LoveAnimationSection.jsx  # Interactive heart with click particles
│   ├── MemorySection.jsx         # Typing animation and quotes
│   ├── ProposalSection.jsx       # Final proposal with celebration
│   └── CursorTrail.jsx           # Cursor heart trail effect
├── App.jsx                       # Main app component
├── App.css                       # Global app styles
├── main.jsx                      # React entry point
└── index.css                     # Base styles
```

## How It Works

### Animations

1. **Floating Hearts & Butterflies**: Created dynamically with intervals, animated using CSS keyframes
2. **Beating Heart**: CSS animation with scale transforms
3. **Typing Effect**: JavaScript interval that reveals text character by character
4. **Scroll Reveal**: Intersection Observer API detects when sections enter viewport
5. **Click Particles**: Event handlers create emoji particles at click position
6. **Cursor Trail**: Mouse move events create small hearts that fade out

### Styling

- **Glassmorphism**: Backdrop blur effects with semi-transparent backgrounds
- **Gradient Backgrounds**: Animated gradients that shift colors
- **Responsive Design**: Uses `clamp()` for fluid typography and flexible layouts

### Interactions

- Click anywhere in the Love Animation section to create particles
- Click proposal buttons to trigger celebration effects
- Smooth scrolling between sections
- Cursor creates heart trail on mouse movement

## Customization

To personalize the content:

1. Edit the text in each component file
2. Modify colors in the CSS files (look for gradient definitions)
3. Adjust animation timings in CSS keyframes
4. Change emojis/icons throughout the components

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- No backend required - pure frontend React app
- No heavy libraries - just React and CSS
- All animations are CSS-based for performance
- Fully responsive and mobile-friendly

---

Made with ❤️ for Imani

