import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  optimizeDeps: {
    exclude: ["tree-sitter-typescript"],
  },
  build: {
    rollupOptions: {
      external: ["tree-sitter-typescript"],
    },
  },
});
