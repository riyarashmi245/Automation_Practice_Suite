import { test, expect } from '@playwright/test';

// Basic dashboard navigation test

test('Dashboard navigation', async ({ page }) => {
  await page.goto('https://demo.haroldwaste.com/');

  // Login first
  await page.locator("//input[@name='email']").fill('qa@julesai.com');
  await page.locator("//input[@name='password']").fill('QaJULES2023!');
  await page.locator("//button[@data-test-id='signin']").click();

  // Navigate to different sections
  const sections = [
    { name: 'Purchase List', xpath: "//a[text()='Purchase List']" },
    { name: 'Opportunity', xpath: "//a[text()='Opportunity']" }
  ];

  for (const section of sections) {
    await page.locator(section.xpath).click();
    await expect(page).toHaveURL(new RegExp(section.name.toLowerCase().replace(' ', '')));
  }
});
