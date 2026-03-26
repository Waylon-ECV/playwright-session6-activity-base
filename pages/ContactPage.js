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
    // TODO: Define your locators here
  }

  async goto() {
    await this.navigate('/contact_us');
  }

  // TODO: Implement methods
}

module.exports = ContactPage;
