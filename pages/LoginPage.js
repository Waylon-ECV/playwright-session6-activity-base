const BasePage = require('./BasePage');

/**
 * LoginPage
 * Covers: https://automationexercise.com/login
 *
 * TODO: Define locators and methods for the login/signup page.
 *
 * Suggested locators to add:
 *   Login form:
 *     - Email input      → '[data-qa="login-email"]'
 *     - Password input   → '[data-qa="login-password"]'
 *     - Login button     → '[data-qa="login-button"]'
 *     - Error message    → 'p:has-text("Your email or password is incorrect!")'
 *
 *   Signup form:
 *     - Name input       → '[data-qa="signup-name"]'
 *     - Email input      → '[data-qa="signup-email"]'
 *     - Signup button    → '[data-qa="signup-button"]'
 *     - Error message    → 'p:has-text("Email Address already exist!")'
 *
 * Suggested methods to implement:
 *   - goto()
 *   - login(email, password)
 *   - signup(name, email)
 *   - isLoginErrorVisible()
 *   - isSignupErrorVisible()
 */
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    // TODO: Define your locators here
  }

  async goto() {
    await this.navigate('/login');
  }

  // TODO: Implement methods
}

module.exports = LoginPage;
