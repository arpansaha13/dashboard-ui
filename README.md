# Dashboard Assignment

A modern, responsive dashboard built with React and TailwindCSS. Features dark mode, real-time charts, and a modular component system.

## Features

- Fully responsive design that works on all devices
- Dark/Light theme switcher
- Interactive charts using Recharts
- Paginated tables
- Modular components
- Redux-based state management

## Tech Stack

- React 19
- TypeScript
- Redux Toolkit
- TailwindCSS 4
- Headless UI
- React Router v7
- Recharts
- Vite 7

## Prerequisites

This project was built with:

```bash
node v22.12.0
pnpm v10.14.0
```

## Local Dev Server

1. Clone the repo
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the dev server:
   ```bash
   pnpm dev
   ```
4. Open http://localhost:5173 in your browser

## Design Decisions

- **Component Structure**: Used modular components with TypeScript interfaces for better type safety and reusability
- **Styling**: Chose TailwindCSS for rapid development and consistent design system
- **State Management**: Redux Toolkit for global state (theme, panel states) and local state with hooks where appropriate
- **Accessibility**: Added ARIA attributes throughout for better screen reader support
- **Performance**: Used `useMemo` and `useCallback` where beneficial for performance optimization

## Challenges Faced

1. **Table Checkbox Selection** - For implementing checkbox state across entire table, I have used a custom hook over the native JS Set for managing selection state.

2. **Responsive Layout** - For making panels work on mobile, I have converted the side panels to drawers using Headless UI.

3. **Dark Mode** - I have used a global parent class "dark" to indicate that dark mode is active and applied dark mode styles using TailwindCSS and stored the dark mode state in Redux for dynamic behaviours.

4. **Type Safety** - For maintaining strict type safety in React components I have used interfaces for props for every component.
