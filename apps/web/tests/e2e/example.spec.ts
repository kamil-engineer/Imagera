import { test, expect } from "@playwright/test";

test("homepage has link to about page", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const link = page.getByRole("link", { name: /about/i });

  await expect(link).toBeVisible();

  await link.click();

  await expect(page).toHaveURL("http://localhost:5173/about");
});
