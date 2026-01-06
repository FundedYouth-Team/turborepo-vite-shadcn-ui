import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
      },
    },
    css: {
      postcss: path.resolve(__dirname, "./postcss.config.mjs"),
    },
    server: {
      proxy: {
        "/api/blog": {
          target: "https://fundedyouth.org",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/blog/, "/blog"),
        },
        "/api/eventbrite": {
          target: "https://www.eventbriteapi.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/eventbrite/, ""),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader(
                "Authorization",
                `Bearer ${env.EVENTBRITE_PRIVATE_TOKEN}`
              );
            });
          },
        },
      },
    },
  };
});
