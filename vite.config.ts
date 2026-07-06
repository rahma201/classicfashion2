import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const rawPort = env.PORT || process.env.PORT || "5173";
  const port = Number(rawPort);
  const basePath = env.BASE_PATH || process.env.BASE_PATH || "/";

  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "src", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port: Number.isNaN(port) || port <= 0 ? 5173 : port,
      strictPort: false,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port: Number.isNaN(port) || port <= 0 ? 4173 : port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
