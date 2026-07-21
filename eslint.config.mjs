export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    ignores: [
      'node_modules/**',
      'build/**',
      'dist/**',
      'public/**',
      'src/@fake-db/db/**',
      'src/app/main/documentation/material-ui-components/components/**',
      'src/app/main/documentation/third-party-components/**/examples/**',
    ],
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
