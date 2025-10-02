import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.pw.test.ts",
  timeout: 30 * 1000,
  webServer: {
    // Use dev server for fast iteration; CI will spawn it automatically.
    command: "npm run dev",
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    headless: true
  }
});
