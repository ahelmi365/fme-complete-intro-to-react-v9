```
npm i -D prettier
```

```
npm install -D eslint@9.9.1 eslint-config-prettier@9.1.0 globals@15.9.0
```

- Add this to scripts in `package.json`:
-

```json
"format": "prettier --write \"src/**/*.{js,jsx,ts, tsx,scss,css,html}\""
```

- Add `.gitignore` file:

```
.DS_Store
node_modules/
dist/.env
coverage/
.vscode/

```

- create a file called 'eslint.config.mjs' in the project root folder
- Add the following in the 'eslint.config.mjs' file:

```js
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  reactPlugin.configs.flat["*jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
```

- Add this to scripts in `package.json`:

```json
"lint": "eslint",
```

```
npm i -D eslint-plugin-react@7.37.1
```

- You can install this [ESLLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Install Vite:

```
npm install -D vite@5.4.2 @vitejs/plugin-react@4.3.1
```

- Create vite.config.js
- add this to vite config:

```js
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

-- install react and react-dom

```
npm install react@18.3.1 react-dom@18.3.1
```

- Maybe run:

```
npm audit fix
```

- Install TanStack Router

```
npm install @tanstack/react-router@1.65.0
```

```
npm install -D @tanstack/router-plugin@1.65.0 @tanstack/router-devtools@1.65.0
```

- Install TansStack Query

```
npm i @tanstack/react-query@5.59.13
```

```
npm i -D @tanstack/react-query-devtools@5.59.13 @tanstack/eslint-plugin-query@5.59.7

```

- vitest

```
npm install -D vitest@2.1.3 @testing-library/react@16.0.1 happy-dom@15.7.4
```
