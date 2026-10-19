import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // permite hospedar em qualquer pasta (GitHub Pages, Netlify, etc.)
});
