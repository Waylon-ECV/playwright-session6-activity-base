/**
 * BasePage
 * All page objects extend this class.
 * It holds shared navigation helpers available on every page.
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
  }

  async getTitle() {
    return this.page.title();
  }

  // --- Nav bar helpers ---

  async clickHome() {
    await this.page.locator('a[href="/"]').first().click();
  }

  async clickProducts() {
    await this.page.locator('.shop-menu a[href="/products"]').click();
  }

  async clickCart() {
    await this.page.locator('.shop-menu a[href="/view_cart"]').click();
  }

  async clickSignupLogin() {
    await this.page.locator('a[href="/login"]').click();
  }

  async clickContactUs() {
    await this.page.locator('a[href="/contact_us"]').click();
  }
}

module.exports = BasePage;
