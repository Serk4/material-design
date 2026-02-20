# MUI Theme Gallery

A comprehensive Single Page Application (SPA) showcasing MUI's powerful theming system and React components. Features 7 beautiful themes, interactive electronic parts catalog with drag-and-drop, and circuit board explorer.

![Material UI](https://img.shields.io/badge/Material--UI-7-0081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-16%2B-green.svg?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-19-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/vite-7.3-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## 🌐 Live Demo

**[View Live Application](https://material-design-ten.vercel.app/)**

The application is deployed on Vercel and showcases MUI's theming capabilities, component library, and interactive features including drag-and-drop catalog and circuit board explorer.

## 📸 Screenshot

![MUI Theme Gallery](assets/demo-preview.png)
_Main application interface showcasing MUI components with theme selector and dark/light mode toggle_

## 🎬 Demo

![MUI Theme Demo](assets/drag-drop-demo.gif)
_Interactive demonstration of theme switching, drag-and-drop, and component features_

## Features

- 🎨 **7 Beautiful Themes** - Material, Indigo & Amber, Slate & Cyan, Ella, Ocean, Forest, Sunset
- 🔄 **Live Theme Switching** - Instantly change themes via dropdown selector
- 🌓 **Dark/Light Mode Toggle** - All themes support both light and dark modes
- 🎭 **MUI Component Showcase** - Comprehensive display of MUI's React components
- 📱 **Responsive Design** - Fully responsive layout using CSS Grid and MUI breakpoints
- ⚡ **Fast Development** - Powered by Vite for instant HMR
- 🎨 **Design Token System** - Demonstrates MUI's flexible theming architecture
- 📦 **Electronic Parts Catalog** - Interactive product catalog with detailed specifications
- 🔄 **Drag & Drop** - Reorder catalog items in both list and grid views
- 📋 **Dual Display Modes** - Switch between List and Grid views with navigation tabs
- 💬 **Modal Details** - Click-to-view detailed product information
- 🏷️ **Order Management** - Automatic order number updates during reordering
- 🔌 **Interactive Circuit Board Explorer** - Visual circuit board with clickable components
- 🎯 **Component Highlighting** - Select components to highlight on circuit board with golden glow
- 📊 **Multi-Board Selection** - Choose between different circuit board designs

## 🎨 Theme System

This showcase features MUI's powerful theming capabilities with 7 carefully crafted themes:

### Available Themes

1. **Material** (Default) - Classic MUI styling with blue and red palette
2. **Indigo & Amber** - Professional indigo with vibrant amber accents
3. **Slate & Cyan** - Modern gray-slate with fresh cyan highlights
4. **Ella** - Soft feminine pink and purple with rounded corners
5. **Ocean** - Cool blues and teals for refreshing interfaces
6. **Forest** - Natural greens and earth tones
7. **Sunset** - Warm oranges and reds for energetic designs

### Theme Features

- **Live Switching**: Change themes instantly via dropdown in the AppBar
- **Dark/Light Support**: All themes work in both light and dark modes
- **Component Customization**: Each theme includes custom styling for cards, buttons, and more
- **Typography Scales**: Unique font families and hierarchies per theme
- **Design Tokens**: Demonstrates MUI's systematic approach to design consistency
- **Extensible Architecture**: Easy to add new themes by extending the theme system

### Implementation

Themes are centrally managed in `src/themes/index.js` using MUI's `createTheme` API:

```javascript
const customTheme = createCustomTheme(selectedTheme, isDarkMode)
```

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite 7** - Next generation frontend tooling
- **Material-UI v7** - Comprehensive React component library
- **Emotion** - CSS-in-JS styling solution
- **@hello-pangea/dnd** - Beautiful drag and drop for lists

## 🚀 Deployment

The application is deployed on **Vercel** with automatic deployments from the main branch.

- **Live URL:** https://material-design-ten.vercel.app/
- **Platform:** Vercel
- **Auto-deploy:** ✅ Connected to GitHub repository

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
│   ├── themes/
│   │   └── index.js                   # Theme system with 7 themes
│   ├── components/
│   │   ├── FeatureShowcaseCard.jsx    # Feature card component
│   │   ├── ColorPaletteDisplay.jsx    # Color palette component
│   │   ├── ListDisplay.jsx            # Electronic parts list view with drag-drop
│   │   ├── GridDisplay.jsx            # Electronic parts grid view with drag-drop
│   │   └── CircuitBoardDisplay.jsx    # Interactive circuit board explorer
│   ├── data/
│   │   ├── productsData.json          # Electronic parts catalog data
│   │   └── circuitBoardsData.json     # Circuit board and component data
│   ├── MaterialShowcase.jsx           # Main app component with navigation
│   └── main.jsx                       # Application entry point
├── index.html                         # HTML template
├── vite.config.js                     # Vite configuration
└── package.json                       # Project dependencies
```

## Components

### MaterialShowcase

The main application component featuring:

- AppBar with theme selector dropdown and dark/light toggle
- Welcome section highlighting MUI's theming philosophy
- Theme status display showing current theme and mode
- Navigation tabs for different showcase sections
- Showcase mode: Feature cards grid, color palette, interactive components
- Display Components mode: Electronic parts catalog with list/grid toggle
- Interactive Display mode: Circuit board explorer with component highlighting

### Electronic Parts Catalog

**ListDisplay & GridDisplay Components:**

- Display electronic parts with order numbers and names
- Drag-and-drop reordering functionality
- Click-to-view detailed product modals
- Responsive grid layout (1-4 columns based on screen size)
- Compatible widgets and specifications display

**Data Structure:**

- 10 electronic parts including Arduino, Raspberry Pi, sensors, motors
- Order numbers, descriptions, pricing, stock levels
- Technical specifications and compatible widgets arrays
- JSON-based data structure mimicking database fetch

### Interactive Circuit Board Explorer

**CircuitBoardDisplay Component:**

- Visual SVG-based circuit board with realistic green PCB design
- Clickable electronic components with highlighting effects
- Component selection from sidebar list with type-specific icons
- Real-time component details display with specifications
- Multi-board selection between different circuit designs

**Circuit Board Features:**

- **LED Controller Board** - 7 components including resistors, LEDs, buttons, capacitors, and timer IC
- **Sensor Interface Board** - 9 components including op-amps, sensors, transistors, and connectors
- **Golden highlighting** effect when components are selected
- **Component positioning** with X,Y coordinate tracking
- **Type-based color coding** for different component categories

### FeatureShowcaseCard

Reusable card component with hover effects and action buttons.

### ColorPaletteDisplay

Visual display of the current theme's color palette with all theme colors.

## Usage

### Theme Switching

- Use the **Theme dropdown** in the AppBar to select from 7 available themes
- Toggle between **Dark/Light modes** using the theme toggle switch
- Changes apply instantly across all components
- Current theme and mode are displayed in the welcome section

### Navigation

- **Showcase Tab**: View the original Material Design component demonstrations
- **Display Components Tab**: Access the electronic parts catalog
- **Interactive Display Tab**: Explore interactive circuit boards with component highlighting
- Switch between List and Grid views using the toggle buttons

### Drag & Drop

- Drag items by their drag handle (≡ icon) to reorder
- Order numbers automatically update after reordering
- Works in both List and Grid display modes

### Product Details

- Click any product item to view detailed specifications
- Modal dialogs show pricing, stock, technical specs, and compatible widgets
- Responsive layout adapts to screen size

### Interactive Circuit Board

- Select circuit board from dropdown menu (LED Controller or Sensor Interface)
- Click components on the circuit board or in the component list to highlight
- View detailed component information in the right panel
- Components display with realistic colors and positioning on green PCB
- Golden glow effect indicates selected components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
