import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'coverage', '.vite']),
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    extends: [js.configs.recommended, eslintConfigPrettier],

    rules: {
      // React
      ...(react.configs.recommended?.rules ?? {}),

      // Hooks
      ...(reactHooks.configs['recommended-latest']?.rules ?? {}),

      // React Refresh (vite)
      ...(reactRefresh.configs.vite?.rules ?? {}),

      // Tes règles perso
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
    },

    // détection automatique de la version de React
    settings: { react: { version: 'detect' } },
  },
])
