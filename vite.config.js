import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@assets": path.resolve(__dirname, "./public/assets"),
      "@utils": path.resolve(__dirname, "./src/utils/index.js"),
      "@allServices": path.resolve(__dirname, "./src/services/"),
      "@reduxStore": path.resolve(__dirname, "./src/store/index.js"),
    },
  },
  plugins: [react()],
});
