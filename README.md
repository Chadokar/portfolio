# 3D Animated Portfolio

A modern, interactive portfolio website built with React, featuring 3D animations, smooth scrolling, and responsive design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80)

## Features

- 🎨 Interactive 3D animations
- 📱 Fully responsive design
- 🎭 Smooth transitions and hover effects
- 🎯 GSAP-powered scroll animations
- 🌈 Dynamic background effects
- 🧭 Animated navigation
- ⚡ Built with performance in mind

## Tech Stack

- React
- TypeScript
- Framer Motion
- GSAP
- Tailwind CSS
- Vite
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── sections/      # Page sections
├── hooks/             # Custom React hooks
└── lib/            # Utility functions
```

## Key Components

- `AnimatedBackground`: Creates an interactive gradient background
- `Card3D`: Reusable 3D card component with hover effects
- `Section`: Animated section component with scroll triggers
- `Navbar`: Responsive navigation with smooth scrolling

## Customization

### Changing Colors

The color scheme can be modified in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Modifying Animations

Animation settings can be adjusted in the respective component files:

- Background animations: `src/hooks/useBgAnimation.tsx`
- Scroll animations: `src/components/Section.tsx`
- Hover effects: `src/components/ui/Card3D.tsx`

## Performance Optimization

- Lazy loading of images and components
- Optimized animations using GSAP
- Tailwind CSS purging unused styles
- TypeScript for better code quality

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- UI components inspired by modern design trends
