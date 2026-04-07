const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.itemNames = page.locator('td.cart_description h4 a');
    this.itemPrices = page.locator('td.cart_price p');
    this.itemQuantities = page.locator('td.cart_quantity button');
    this.itemTotals = page.locator('td.cart_total p');
    this.deleteButtons = page.locator('.cart_quantity_delete');
    this.emptyCartMessage = page.locator('b:has-text("Cart is empty!")');
    this.proceedToCheckoutButton = page.locator('.check_out');
  }

  async goto() {
    await this.navigate('/view_cart');
  }

  async getCartItemCount() {
    return this.cartRows.count();
  }

  async getCartItemName(index) {
    return this.itemNames.nth(index).innerText();
  }

  async getCartItemQuantity(index) {
    return this.itemQuantities.nth(index).innerText();
  }

  async removeItem(index) {
    await this.deleteButtons.nth(index).click();
  }

  async isCartEmpty() {
    return this.emptyCartMessage.isVisible();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}

module.exports = CartPage;
