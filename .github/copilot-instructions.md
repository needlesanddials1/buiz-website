# AI Coding Agent Instructions for `buiz-website`

## Project Overview
This project is a React-based web application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It includes several components and styles for building a business-oriented website. The application is structured to support modular development and follows common React conventions.

### Key Directories and Files
- **`src/`**: Contains the main application code.
  - **`App.tsx`**: Entry point for the React application.
  - **`components/`**: Houses reusable UI components such as `Hero`, `Footer`, `FAQ`, and `CostScale`.
  - **`index.tsx`**: Renders the React app into the DOM.
- **`public/`**: Contains static assets like `index.html` and images.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Lists dependencies and scripts.

## Developer Workflows

### Running the Application
- Use `npm start` to run the app in development mode. The app will be available at [http://localhost:3000](http://localhost:3000).

### Testing
- Run `npm test` to launch the test runner in interactive watch mode. Tests are written using Jest and React Testing Library.

### Building for Production
- Use `npm run build` to create an optimized production build in the `build/` directory.

### Linting and Formatting
- Ensure code quality by running `npm run lint` (if configured) or using an integrated linter in your editor.

## Project-Specific Conventions

### Component Structure
- Each component has its own `.tsx` file and an accompanying `.css` file for styles.
- Components are located in the `src/components/` directory.
- Example: `Hero.tsx` and `Hero.css` define the `Hero` component.

### TypeScript
- The project uses TypeScript for type safety. Type definitions are located inline with the code.
- Use `react-app-env.d.ts` for global type declarations.

### Styling
- CSS files are co-located with their respective components.
- Follow BEM (Block Element Modifier) naming conventions for class names.

## External Dependencies
- **React**: Core library for building the UI.
- **React Testing Library**: For writing unit tests.
- **TypeScript**: For static type checking.

## Integration Points
- The app does not currently include backend integration. All data is either hardcoded or managed locally within the app.

## Notes for AI Agents
- Focus on maintaining modularity when adding new components.
- Follow the existing patterns for component structure and styling.
- Ensure TypeScript types are correctly defined for new code.
- When modifying `App.tsx`, ensure changes align with the overall app structure and routing (if applicable).

## Examples
### Adding a New Component
1. Create a new `.tsx` file in `src/components/`.
2. Add a corresponding `.css` file for styles.
3. Import and use the component in `App.tsx` or another parent component.

### Writing a Test
1. Add a new test file (e.g., `ComponentName.test.tsx`) in the same directory as the component.
2. Use React Testing Library to write tests.

---
This document is a living guide. Update it as the project evolves.