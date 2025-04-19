// vite.config.js (Simplified for Vercel/Netlify root deployment)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: '/', // Default is '/', so you can often omit this line entirely
  plugins: [react()],
});
