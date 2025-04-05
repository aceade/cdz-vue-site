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
        stories: resolve(__dirname, "stories.html"),
        cruagh: resolve(__dirname, "cruagh.html"),
        detention: resolve(__dirname, "detention.html"),
        evictor: resolve(__dirname, "evictor.html"),
        recordings: resolve(__dirname, "recordings.html"),
        spycrabs: resolve(__dirname, "spycrabs.html"),
        about: resolve(__dirname, "about.html"),
        fitow: resolve(__dirname, "fitow.html")
      }
    }
  }
})
