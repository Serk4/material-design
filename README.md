# material-design

A beautiful Single Page Application (SPA) showcasing Google's Material Design principles, built with React, Vite, and Material-UI (MUI).

## Features

- 🎨 **Material Design Components** - Comprehensive showcase of MUI components
- 🌓 **Dark/Light Theme Toggle** - Switch between themes seamlessly
- 📱 **Responsive Design** - Fully responsive layout using CSS Grid
- ⚡ **Fast Development** - Powered by Vite for instant HMR
- 🎭 **Interactive UI** - Buttons, cards, FABs, and more
- 🎨 **Color Palette** - Display of Material Design color system

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite 7** - Next generation frontend tooling
- **Material-UI v7** - Comprehensive React component library
- **Emotion** - CSS-in-JS styling solution

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Serk4/material-design.git
cd material-design
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
material-design/
├── src/
│   ├── components/
│   │   ├── FeatureShowcaseCard.jsx    # Feature card component
│   │   └── ColorPaletteDisplay.jsx    # Color palette component
│   ├── MaterialShowcase.jsx           # Main app component
│   └── main.jsx                       # Application entry point
├── index.html                         # HTML template
├── vite.config.js                     # Vite configuration
└── package.json                       # Project dependencies
```

## Components

### MaterialShowcase
The main application component featuring:
- AppBar with theme toggle
- Welcome section
- Feature cards grid
- Color palette display
- Interactive component showcase

### FeatureShowcaseCard
Reusable card component with hover effects and action buttons.

### ColorPaletteDisplay
Visual display of Material Design color palette with all theme colors.

## License

ISC

