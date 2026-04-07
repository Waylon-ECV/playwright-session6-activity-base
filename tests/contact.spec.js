/**
 * Contact Us Tests
 *
 * TODO: Implement tests for the contact page (https://automationexercise.com/contact_us).
 *
 * Suggested test cases:
 *   - Contact page loads at /contact_us
 *   - "Get In Touch" heading is visible
 *   - All form fields are visible (name, email, subject, message, submit)
 *   - Submitting a filled form shows a success message
 *   - Success message contains the word "Success"
 *   - File upload input is present
 *   - Clicking Home after submission navigates back to the home page
 *
 * HINT: Import and use the ContactPage page object.
 *   const ContactPage = require('../pages/ContactPage');
 *
 * HINT: The submit button triggers a browser dialog — handle it like this:
 *   page.once('dialog', dialog => dialog.accept());
 *   await submitBtn.click();
 */

const { test, expect } = require('@playwright/test');
const ContactPage = require('../pages/ContactPage');

test.describe('Contact Us', () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('contact page loads at /contact_us', async ({ page }) => {
    await expect(page).toHaveURL(/contact_us/);
  });

  test('"Get In Touch" heading is visible', async ({ page }) => {
    await expect(page.locator('h2.title.text-center').nth(1)).toContainText("Get In Touch");
  });

  test('all form fields are visible', async () => {
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.subjectInput).toBeVisible();
    await expect(contactPage.messageInput).toBeVisible();
    await expect(contactPage.submitButton).toBeVisible();
  });

  test('file upload input is present', async () => {
    await expect(contactPage.fileInput).toBeVisible();
  });

  test('submitting a filled form shows a success message', async () => {
    await contactPage.fillContactForm({
      name: 'Test User',
      email: 'testuser@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.',
    });
    await contactPage.submitForm();
    await expect(contactPage.successMessage).toBeVisible();
  });

  test('success message contains the word "Success"', async () => {
    await contactPage.fillContactForm({
      name: 'Test User',
      email: 'testuser@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.',
    });
    await contactPage.submitForm();
    await expect(contactPage.successMessage).toContainText('Success');
  });

  test('clicking Home after submission navigates back to home page', async ({ page }) => {
    await contactPage.fillContactForm({
      name: 'Test User',
      email: 'testuser@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.',
    });
    await contactPage.submitForm();
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL(/automationexercise\.com\/?$/);
  });
});
