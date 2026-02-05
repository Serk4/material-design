# Material Design - Prime Rhythm Oscillator

An interactive web application showcasing Material Design principles through mathematical pattern visualization.

## Overview

The Prime Rhythm Oscillator uses Euclidean algorithms and prime number theory to generate and visualize rhythmic patterns on a circular canvas. This demonstrates Material Design concepts including:

- **Elevation & Depth**: Layered UI with subtle shadows and transparency
- **Motion**: Smooth transitions and interactive controls
- **Color**: Gradient-based color schemes with meaningful contrast
- **Typography**: Clear hierarchy and readable text styling
- **Interactive Components**: Sliders, buttons with hover/active states

## Features

- **Interactive Canvas**: Visual representation of mathematical rhythm patterns
- **Real-time Controls**: 
  - Prime Multiplier (2-23)
  - Cycle Iterations (8-64)
  - Phase Offset (0-360°)
  - Amplitude Scale (10-100%)
- **Pattern Generation**: Randomize parameters for unique patterns
- **Pattern Analysis**: Live metrics showing unique positions and density factor

## Usage

Open `index.html` in a web browser. Use the sliders to adjust parameters and observe how the rhythm pattern changes in real-time. Click "Generate Pattern" for random configurations or "Reset Parameters" to return to defaults.

## Algorithm

The application uses a Euclidean distribution algorithm where beats are placed at positions calculated by `(iteration × prime) mod cycles`, creating mathematically interesting patterns based on number theory.
