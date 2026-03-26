const BasePage = require('./BasePage');

/**
 * ProductsPage
 * Covers: https://automationexercise.com/products
 *
 * TODO: Define locators and methods for the products listing page.
 *
 * Suggested locators to add:
 *   - Search input          → '#search_product'
 *   - Search button         → '#submit_search'
 *   - Product cards         → '.product-image-wrapper'
 *   - Searched results title → 'h2.title:has-text("Searched Products")'
 *
 * Suggested methods to implement:
 *   - goto()
 *   - searchProduct(term)
 *   - getProductCount()
 *   - clickViewProduct(index)
 *   - addToCartByIndex(index)
 *   - getProductNameByIndex(index)
 */
class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    // TODO: Define your locators here
  }

  async goto() {
    await this.navigate('/products');
  }

  // TODO: Implement methods
}

module.exports = ProductsPage;
