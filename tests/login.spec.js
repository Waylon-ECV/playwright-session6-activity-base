const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login / Signup', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('login page loads at /login', async ({ page }) => {
    await expect(page).toHaveURL(/login/);
  });

  test('"Login to your account" heading is visible', async ({ page }) => {
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();
  });

  test('"New User Signup!" heading is visible', async ({ page }) => {
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  });

  test('login form fields are visible', async () => {
    await expect(loginPage.loginEmail).toBeVisible();
    await expect(loginPage.loginPassword).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('signup form fields are visible', async () => {
    await expect(loginPage.signupName).toBeVisible();
    await expect(loginPage.signupEmail).toBeVisible();
    await expect(loginPage.signupButton).toBeVisible();
  });

  test('login with invalid credentials shows error', async () => {
    await loginPage.login('invalid@example.com', 'wrongpassword');
    await expect(loginPage.loginError).toBeVisible();
  });

  test('signup with already-registered email shows error', async () => {
    await loginPage.signup('Test User', 'test@example.com');
    await expect(loginPage.signupError).toBeVisible();
  });

  test('signup with new unique email navigates to /signup', async ({ page }) => {
    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    await loginPage.signup('Test User', uniqueEmail);
    await expect(page).toHaveURL(/signup/);
  });
});
