# Frontend Test

## Deployment Status

Production: ✅ Online (Vercel)

## 🌐 Live Demo

You can view the working application here:

[element-drawer-kappa.vercel.app](https://element-drawer-kappa.vercel.app/)

Dynamic element drawer that converts semicolon-delimited specs into a Material UI form rendered on a responsive grid.

## Features

- Live parser for semicolon specs with per-line validation feedback.
- Grid layout driven by declared row and column positions.
- Reusable UI building blocks (`ConfigInput`, `FieldGrid`, `FieldGridItem`) with controlled form state.
- Sample configuration bootstrapped via `SAMPLE_INPUT` to demo supported field types.

## Tech Stack

- React 18 + TypeScript 4.4
- Create React App 5 (`react-scripts`) + CRACO 7
- Material UI 6 + Emotion
- `@fontsource/roboto` typography presets

## Prerequisites

- Node.js ≥ 18 (recommended)
- npm ≥ 8

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   The app opens at http://localhost:3000 with hot reload enabled.

3. Build for production:

   ```bash
   npm run build
   ```

   The optimized output is generated inside `build/`.

## Available Scripts

```bash
npm start   # run the app in development mode (CRACO + CRA)
npm run build   # bundle the app for production
npm test   # execute CRA's test runner in watch mode
npm run eject   # expose the underlying CRA configuration
```

## Project Structure

- `src/App.tsx` – orchestrates configuration input, parsing, and grid rendering.
- `src/constants` – shared constants including the default `SAMPLE_INPUT`.
- `src/types` – enums and interfaces for drawer fields and parse results.
- `src/ui/components` – composite inputs such as `ConfigInput`.
- `src/ui/containers` – layout-level components (`FieldGrid`).
- `src/ui/elements` – leaf UI elements (`FieldGridItem`, `EmptyGridMessage`).
- `src/utils` – parsing logic and layout helpers.
- `src/styles.css` – base styling for the app shell.

Aliases defined in `craco.config.js` (`@`, `@/ui`, `@/types`, `@/constants`, `@/utils`, …) make imports like `@/ui/components` possible.

## Notes

- Input rows must follow `row;column;label;type;payload`; invalid lines surface detailed errors below the editor.
- `FieldGrid` automatically adjusts to the highest `columnNumber` to maintain alignment.
- Field values persist while the parsed schema stays stable and reset when a line changes the generated field set.
