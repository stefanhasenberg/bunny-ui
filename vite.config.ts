/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import path, { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import createExternal from 'vite-plugin-external';
import { fileURLToPath } from 'node:url';
import { peerDependencies } from './package.json';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const isStorybook = process.env.STORYBOOK_ENV?.trim() === 'storybook';

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"]
  },
  plugins: [createExternal({
    externals: !isStorybook ? {
      react: 'React',
      'react-dom': 'ReactDOM'
    } : {}
  }), react({
      jsxRuntime: 'automatic',
    }), babel(), dts({
    insertTypesEntry: true,
    rollupTypes: true,
    tsconfigPath: resolve(__dirname, 'tsconfig.json')
  })],
  build: {
    lib: {
      entry: {
        page: resolve(__dirname, 'src/components/page/index.ts'),
        images: resolve(__dirname, 'src/components/images/index.ts'),
        form: resolve(__dirname, 'src/components/form/index.ts'),
      },
      name: 'BunnyUI',
      formats: ['es'],
      fileName: format => `bunny-ui.${format}.js`
    },
    rollupOptions: {
      external: !isStorybook ? ['react', 'react-dom', ...Object.keys(peerDependencies)] : []
    }
  }
});