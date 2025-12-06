import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ['front-restaurante-alforno-production.up.railway.app'],
    port: process.env.PORT || 4173,
    host: true
  }

});
