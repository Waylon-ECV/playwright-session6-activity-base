const BasePage = require('./BasePage');

/**
 * CartPage
 * Covers: https://automationexercise.com/view_cart
 *
 * TODO: Define locators and methods for the cart page.
 *
 * Suggested locators to add:
 *   - Cart item rows        → '#cart_info_table tbody tr'
 *   - Item name             → 'td.cart_description h4 a'
 *   - Item price            → 'td.cart_price p'
 *   - Item quantity         → 'td.cart_quantity button'
 *   - Item total            → 'td.cart_total p'
 *   - Delete buttons        → '.cart_quantity_delete'
 *   - Empty cart message    → 'b:has-text("Cart is empty!")'
 *   - Proceed to checkout   → '.check_out'
 *
 * Suggested methods to implement:
 *   - goto()
 *   - getCartItemCount()
 *   - getCartItemName(index)
 *   - getCartItemQuantity(index)
 *   - removeItem(index)
 *   - isCartEmpty()
 *   - proceedToCheckout()
 */
class CartPage extends BasePage {
  constructor(page) {
    super(page);
    // TODO: Define your locators here
  }

  async goto() {
    await this.navigate('/view_cart');
  }

  // TODO: Implement methods
}

module.exports = CartPage;
