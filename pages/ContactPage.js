const BasePage = require('./BasePage');

/**
 * ContactPage
 * Covers: https://automationexercise.com/contact_us
 *
 * TODO: Define locators and methods for the contact us page.
 *
 * Suggested locators to add:
 *   - Name input      → '[data-qa="name"]'
 *   - Email input     → '[data-qa="email"]'
 *   - Subject input   → '[data-qa="subject"]'
 *   - Message input   → '[data-qa="message"]'
 *   - Submit button   → '[data-qa="submit-button"]'
 *   - Success message → '.status.alert.alert-success'
 *
 * Suggested methods to implement:
 *   - goto()
 *   - fillContactForm({ name, email, subject, message })
 *   - submitForm()   ← note: accepts a browser dialog on submit
 *   - isSuccessVisible()
 */
class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.locator('[data-qa="subject"]');
    this.messageInput = page.locator('[data-qa="message"]');
    this.fileInput = page.locator('input[name="upload_file"]');
    this.submitButton = page.locator('[data-qa="submit-button"]');
    this.successMessage = page.locator('.status.alert.alert-success');
  }

  async goto() {
    await this.navigate('/contact_us');
  }

  async fillContactForm({ name, email, subject, message }) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async submitForm() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.submitButton.click();
  }

  async isSuccessVisible() {
    return this.successMessage.isVisible();
  }
}

module.exports = ContactPage;
