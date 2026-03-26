const BasePage = require('./BasePage');

/**
 * HomePage
 * Covers: https://automationexercise.com/
 *
 * TODO: Define locators and methods for the home page.
 *
 * Suggested locators to add:
 *   - Featured product cards       → '.features_items .product-image-wrapper'
 *   - Add to cart button           → '.add-to-cart'
 *   - Cart modal                   → '#cartModal'
 *   - Continue shopping button     → '.close-modal'
 *   - View cart link in modal      → '#cartModal a[href="/view_cart"]'
 *   - Subscribe email input        → '#susbscribe_email'
 *   - Subscribe button             → '#subscribe'
 *   - Subscribe success message    → '#success-subscribe'
 *   - Category accordion links     → 'a[href="#Women"]', 'a[href="#Men"]', etc.
 *   - Brand links                  → 'a[href="/brand_products/Polo"]', etc.
 *
 * Suggested methods to implement:
 *   - goto()
 *   - getFeaturedProductCount()
 *   - addProductToCartByIndex(index)
 *   - continueShoppingFromModal()
 *   - viewCartFromModal()
 *   - subscribe(email)
 *   - expandCategory(categoryName)
 *   - clickBrand(brandName)
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // TODO: Define your locators here
    // Example:
    // this.featuredProducts = page.locator('.features_items .product-image-wrapper');
  }

  async goto() {
    await this.navigate('/');
  }

  // TODO: Implement methods
}

module.exports = HomePage;
