import { fileURLToPath, URL } from 'url';
import { resolve } from "node:path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cdz-vue-site/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        // put ALL pages you wish to build here
        main : resolve(__dirname, "index.html"),
        artwork: resolve(__dirname, "artwork.html"),
        books: resolve(__dirname, "books.html"),
        about: resolve(__dirname, "about.html"),
      }
    }
  }
})
