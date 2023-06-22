import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc';
import react from '@vitejs/plugin-react';

const isWebContainer = globalThis.process?.versions?.webcontainer;

export default defineConfig({
  plugins: [
    isWebContainer
      ? react()
      : reactSWC(),
  ],
})
