import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy({ targets: "last 4 versions, > 0.5%" }), checker({ typescript: true })],
  server: {
    open: true,
    port: 3000
  },
  build: {
    outDir: "build"
  }
});
