import { expect } from '@playwright/test';

async function navigateToSectionByIcon(page, iconTestId, firstOptionText) {
    const iconLocator = page.locator(`[data-testid=${iconTestId}]`).first();
    const firstOption = page.locator(`//a[contains(text(),'${firstOptionText}')]`).first();
    const newPageTitle = page.locator(`//div[contains(text(),'${firstOptionText}')]`).first();
    await iconLocator.click();
    await firstOption.click();
    await expect(newPageTitle).toBeVisible();
  }

  async function loginDashboard(page,email, password, expectedResult = "success") {
    await page.goto('https://demo.haroldwaste.com/');
        // Locators
        const emailInput = page.locator("//input[@name='email']");
        const passwordInput = page.locator("//input[@name='password']");
        const signInButton = page.locator("//button[@data-test-id='signin']");
        const dashboardTitle = page.locator("//div[contains(text(),'Purchase & Opportunity list')]");
        const invalidCredPopup = page.locator("//div[@data-test-id='toaster-message']");
    
        // Actions
        await emailInput.fill(email);
        await passwordInput.fill(password);
        await signInButton.click();
    
        // Validation
        if (expectedResult === "success") {
          await expect(dashboardTitle).toBeVisible();
        } else {
          await expect(invalidCredPopup).toBeVisible();
        }
  }

  async function logoutDashboard(page) {
              // Locators
              const arrowButton = page.locator('[data-testid="ChevronRightIcon"]').first();
              const logoutButton = page.locator("//li[@data-test-id='header-logout']");
              const loginPageTitle = page.locator("//p[text()='Log in']");
          
              // Actions
              await arrowButton.click();
              await logoutButton.click();
          
              // Validation
                await expect(loginPageTitle).toBeVisible();
  }
  
  export{navigateToSectionByIcon,loginDashboard,logoutDashboard};