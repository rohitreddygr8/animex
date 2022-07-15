import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import postcssPresetEnv from "postcss-preset-env";
import { Plugin } from "postcss";
export default defineConfig({
  plugins: [react(), svgr({ exportAsDefault: true, svgrOptions: { icon: true } })],
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ stage: 1 }) as Plugin],
    },
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@context": resolve(__dirname, "./src/context"),
      "@components": resolve(__dirname, "./src/components"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@utils": resolve(__dirname, "./src/utils"),
    },
  },
});
