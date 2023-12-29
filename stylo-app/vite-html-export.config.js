import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    rollupOptions: {
      input: {
        htmlExport: fileURLToPath(
          new URL("./htmlExport.html", import.meta.url)
        ),
      },
    },
  },
});
