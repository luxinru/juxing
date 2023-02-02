import { fileURLToPath, URL } from "node:url";
import pxtovw from "postcss-px-to-viewport";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 1920,
  viewportUnit: "vw",
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [loder_pxtovw],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
