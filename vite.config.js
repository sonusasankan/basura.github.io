import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Use the project root as the source directory
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html' // Specify your main HTML file as the entry point
      }
    }
  }
});