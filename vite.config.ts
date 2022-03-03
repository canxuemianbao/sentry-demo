import { defineConfig } from "vite";
import type { ViteSentryPluginOptions } from "vite-plugin-sentry";
import viteSentry from "vite-plugin-sentry";
import react from "@vitejs/plugin-react";

/*
	Configure sentry plugin
*/
const sentryConfig: ViteSentryPluginOptions = {
  url: "https://***@sentry.automizely.org",
  authToken: "***",
  org: "sentry",
  project: "admin-aftership-com",
  release: "1.0",
  deploy: {
    env: "development",
  },
  setCommits: {
    auto: true,
  },
  sourceMaps: {
    include: ["./dist/assets"],
    ignore: ["node_modules"],
    urlPrefix: "~/assets",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSentry(sentryConfig)],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: "sentry_[name].js",
      },
    },
  },
});
