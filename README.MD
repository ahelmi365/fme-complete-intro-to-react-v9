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

- create a file called 'eslint.config.mjs' in the project root folder
- Add the following in the 'eslint.config.mjs' file:

```js
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
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
  },
  prettier,
];
```

- Add this to scripts in `package.json`:

```json
"lint": "eslint",
```

- You can install this [ESLLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
