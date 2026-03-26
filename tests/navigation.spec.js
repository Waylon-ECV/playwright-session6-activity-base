/**
 * EXAMPLE TEST FILE — Navigation
 *
 * This file is provided as a working reference.
 * Study the structure and use it as a guide when writing your own test files.
 *
 * It tests that the main navigation links route to the correct pages.
 */

const { test, expect } = require('@playwright/test');
const BasePage = require('../pages/BasePage');

test.describe('Navigation', () => {
  let basePage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.navigate('/');
  });

  test('should navigate to Products page', async ({ page }) => {
    await basePage.clickProducts();
    await expect(page).toHaveURL(/products/, { timeout: 15000 });
  });

  test('should navigate to Cart page', async ({ page }) => {
    await basePage.clickCart();
    await expect(page).toHaveURL(/view_cart/);
  });

  test('should navigate to Login page', async ({ page }) => {
    await basePage.clickSignupLogin();
    await expect(page).toHaveURL(/login/);
  });

  test('should navigate to Contact Us page', async ({ page }) => {
    await basePage.clickContactUs();
    await expect(page).toHaveURL(/contact_us/);
  });

  test('should navigate to Test Cases page', async ({ page }) => {
    await page.locator('.shop-menu a[href="/test_cases"]').click();
    await expect(page).toHaveURL(/test_cases/, { timeout: 15000 });
  });
});
