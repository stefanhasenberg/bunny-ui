/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const isStorybook = process.env.STORYBOOK_ENV?.trim() === 'storybook';

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"]
  },
  plugins: [react({
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
      external: !isStorybook ? ['react', 'react-dom', ...Object.keys(peerDependencies)] : [],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
});