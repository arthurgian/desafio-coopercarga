import eslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['node_modules/', 'dist/'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': eslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
];
