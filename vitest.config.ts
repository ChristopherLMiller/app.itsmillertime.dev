import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@fixtures": path.resolve(__dirname, "fixtures"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
