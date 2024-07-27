import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kwallet/",
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This allows external connections
    port: 5173, // Your desired port number
  },
});
