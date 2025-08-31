import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default defineConfig(
  mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        environment: "jsdom",
        setupFiles: "./src/tests/setupTests.ts",
        coverage: {
          provider: "v8",
          include: ["./src/**/*.{js,jsx,ts,tsx}"],
          exclude: [
            "./src/**/*.test.{js,jsx,ts,tsx}",
            "./src/**/*.spec.{js,jsx,ts,tsx}",
            "./src/index.{js,jsx,ts,tsx}",
            "./src/tests/setupTests.{js,ts}",
            "./src/**/*.d.ts",
          ],
          thresholds: {
            statements: 80,
            branches: 50,
            functions: 50,
            lines: 50,
          },
          reporter: ["html", "text"],
        },
        globals: true,
      },
    })
  )
);
