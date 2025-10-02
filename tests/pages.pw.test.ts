import { test, expect } from "@playwright/test";

test("home page has hero text", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await expect(page.locator("text=Guild Hall")).toBeVisible();
});

test("projects page lists HearthLedger card (sample)", async ({ page }) => {
  await page.goto("http://localhost:4321/projects");
  await expect(page.locator("a >> text=HearthLedger")).toBeVisible();
});
