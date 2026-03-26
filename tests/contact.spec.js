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

test.describe('Contact Us', () => {
  // TODO: Add beforeEach to navigate to /contact_us

  // TODO: Write your tests here
});
