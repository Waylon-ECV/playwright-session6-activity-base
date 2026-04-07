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
    this.testData = {
      name: 'Test User',
      email: 'testuser@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.',
    };
  }

  async goto() {
    await this.navigate('/contact_us');
  }

  async fillContactForm({ name, email, subject, message }) {
    const fields = [
      { locator: this.nameInput, value: name },
      { locator: this.emailInput, value: email },
      { locator: this.subjectInput, value: subject },
      { locator: this.messageInput, value: message },
    ];

    for (const { locator, value } of fields) {
      await locator.fill(value);
    }
  }

  async submitForm() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.submitButton.click();
  }

  async submitContactForm({ name, email, subject, message }) {
    await this.fillContactForm({ name, email, subject, message });
    await this.submitForm();
  }

  async submitAndGoHome({ name, email, subject, message }) {
    await this.submitContactForm({ name, email, subject, message });
    await this.clickHome();
  }

}

module.exports = ContactPage;
