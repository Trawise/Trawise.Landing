import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split the dependencies that change on a completely different cadence
        // from our own code, so a copy tweak never invalidates a cached React.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("/react-router")) return "router";
          if (id.includes("/i18next") || id.includes("/react-i18next/")) {
            return "i18n";
          }
          if (id.includes("/react-dom/") || id.includes("/react/")) {
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
