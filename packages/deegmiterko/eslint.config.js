import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  ts.configs.recommendedTypeChecked,
  jsxA11y.flatConfigs.recommended,
  {
    settings: {
      react: { version: "19.2.6" },
    },
  },
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: `${import.meta.dirname}/tsconfig.json`,
        tsconfigRootDir: `${import.meta.dirname}`,
      },
      globals: globals.browser,
    },
    rules: {
      // 'no-console': 'warn',
      'react/no-unescaped-entities': 'off'
    },
  },
]);
