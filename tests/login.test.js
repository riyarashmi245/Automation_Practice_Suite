import { test, expect } from '@playwright/test';
import loginData from '../data/loginData.json';

// Basic login data-driven test
for (const data of loginData) {
  test(`Login test for ${data.email}`, async ({ page }) => {
    await page.goto('https://demo.haroldwaste.com/');

    // Locators
    const emailInput = page.locator("//input[@name='email']");
    const passwordInput = page.locator("//input[@name='password']");
    const signInButton = page.locator("//button[@data-test-id='signin']");
    const dashboardTitle = page.locator("//div[contains(text(),'Purchase & Opportunity list')]");

    // Actions
    await emailInput.fill(data.email);
    await passwordInput.fill(data.password);
    await signInButton.click();

    // Validation
    if (data.expectedResult === "success") {
      await expect(dashboardTitle).toBeVisible();
    } else {
      await expect(page.locator("text=Invalid credentials")).toBeVisible();
    }
  });
}