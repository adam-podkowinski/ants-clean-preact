import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "/ants-clean-page/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
});
