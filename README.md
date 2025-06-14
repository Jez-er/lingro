# React + TypeScript + Vite Template

## Project Structure and Naming Conventions

The project is organized according to the separation of concerns principle and uses clear naming rules for files and folders:

- [**src/app/**](./src/app/README.md) — application entry point, global settings, routes, and initialization.
- [**src/assets/**](./src/assets/README.md) — static assets (images, icons, etc.).
- [**src/hooks/**](./src/hooks/README.md) — custom React hooks. File names start with use (e.g., useFetch.ts).
- [**src/layout/**](./src/layout/README.md) — layout components for organizing page structure.
- [**src/pages/**](./src/pages/README.md) — application pages. Each page is a separate folder with its component and helper files.
- [**src/services/**](./src/services/README.md) — API interactions and server requests. Subfolders represent separate entities/resources.
- [**src/shared/**](./src/shared/README.md) — reusable components, UI library, and common utilities.
- [**src/stores/**](./src/stores/README.md) — global state (e.g., Zustand or Redux). Each store is a separate file or folder.
- [**src/types/**](./src/types/README.md) — global TypeScript types, interfaces, and type definitions.
- [**src/utils/**](./src/types/README.md) — helper functions and utilities. File names reflect their purpose (e.g., cn.ts for classNames).

**Naming Conventions:**

- Folders — kebab-case (e.g., shared-components).
- Component files — PascalCase (e.g., MyComponent.tsx).
- Hooks — camelCase with the use prefix (e.g., useAuth.ts).
- Types — PascalCase with I or T prefix (e.g., IUser, TPost).
- Stores — camelCase (e.g., userStore.ts).

This structure makes project navigation easier and helps new developers adapt quickly.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babel.js.org/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
	extends: [
		// Remove ...tseslint.configs.recommended and replace with this
		...tseslint.configs.recommendedTypeChecked,
		// Alternatively, use this for stricter rules
		...tseslint.configs.strictTypeChecked,
		// Optionally, add this for stylistic rules
		...tseslint.configs.stylisticTypeChecked,
	],
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
	plugins: {
		// Add the react-x and react-dom plugins
		'react-x': reactX,
		'react-dom': reactDom,
	},
	rules: {
		// other rules...
		// Enable its recommended typescript rules
		...reactX.configs['recommended-typescript'].rules,
		...reactDom.configs.recommended.rules,
	},
})
```
