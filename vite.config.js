import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const jsxInJavaScript = {
  name: 'jsx-in-javascript',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.includes('/src/') || !id.endsWith('.js')) {
      return null;
    }

    return transformWithOxc(code, id, {
      lang: 'jsx',
      jsx: {
        runtime: 'automatic',
      },
    });
  },
};

export default defineConfig({
  plugins: [jsxInJavaScript, react()],
  optimizeDeps: {
    // The legacy source uses JSX in .js files, which Vite's dependency scanner
    // parses before plugin transforms run. Dependencies are optimized on demand.
    noDiscovery: true,
    // react-i18next imports this legacy CommonJS package. Explicitly optimize
    // its CommonJS entry so Vite does not select its broken ESM build.
    include: [
      'html-parse-stringify',
      'axios',
      'axios-mock-adapter',
      'cssjanus',
      'history',
      'hoist-non-react-statics',
      'js-cookie',
      'jss',
      'jss-plugin-extend',
      'jss-rtl',
      'keycode',
      'lodash',
      'lodash/isEqual',
      'mobile-detect',
      'moment',
      'perfect-scrollbar',
      'prop-types',
      'qs',
      'react',
      'react-autosuggest',
      'react-dom',
      'react-dom/client',
      'react-hook-form',
      'react-is',
      'react-popper',
      'react-redux',
      'react-router-dom',
      'react-swipeable',
      'react-swipeable-views',
      'redux-logger',
      'tiny-case',
      'use-sync-external-store/shim',
      'yup',
    ],
  },
  resolve: {
    alias: {
      '@ks': path.resolve(rootDir, 'src/@ks'),
      '@fuse': path.resolve(rootDir, 'src/@fuse'),
      '@history': path.resolve(rootDir, 'src/@history'),
      '@lodash': path.resolve(rootDir, 'src/@lodash'),
      '@mock-api': path.resolve(rootDir, 'src/@mock-api'),
      src: path.resolve(rootDir, 'src'),
      'app/store': path.resolve(rootDir, 'src/app/store'),
      'app/shared-components': path.resolve(rootDir, 'src/app/shared-components'),
      'app/configs': path.resolve(rootDir, 'src/app/configs'),
      'app/theme-layouts': path.resolve(rootDir, 'src/app/theme-layouts'),
      'app/AppContext': path.resolve(rootDir, 'src/app/AppContext'),
      'html-parse-stringify': path.resolve(
        rootDir,
        'node_modules/html-parse-stringify/dist/html-parse-stringify.js'
      ),
      'react-is': path.resolve(rootDir, 'node_modules/react-is'),
    },
  },
});
