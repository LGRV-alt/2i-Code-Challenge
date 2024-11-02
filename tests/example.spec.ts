import { test, expect } from "@playwright/test";

// Test block
test.describe("Test the page inputs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:5501/index.html");
    await expect(
      page.getByRole("heading", { name: "Code Challenge - Secret Number" })
    ).toBeVisible();
    await expect(page.getByText("Enter a number between 1 - 10")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Guess number 0 of" })
    ).toBeVisible();
  });

  test("Check results update on guess", async ({ page }) => {
    await page.getByRole("spinbutton").click();
    await page.getByRole("spinbutton").fill("5");
    await page.getByRole("button", { name: "Enter Guess" }).click();
    await expect(
      page.getByText("Enter a number between 1 - 10")
    ).not.toBeVisible();
  });

  test("Check number validation", async ({ page }) => {
    await page.getByRole("spinbutton").click();
    await page.getByRole("spinbutton").fill("11");
    await page.getByRole("button", { name: "Enter Guess" }).click();
    await expect(
      page.getByText("Number needs to be in range of 1-10")
    ).toBeVisible();
  });
});
