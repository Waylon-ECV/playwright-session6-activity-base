/**
 * Products Page Tests
 *
 * TODO: Implement tests for the products page (https://automationexercise.com/products)
 * and the product detail page (https://automationexercise.com/product_details/:id).
 *
 * Suggested test cases — Products listing:
 *   - Products page loads and URL contains /products
 *   - Product list is displayed (count > 0)
 *   - Searching for "Top" returns results
 *   - Searching for a nonsense term returns 0 results
 *   - Clicking "View Product" navigates to the product detail page
 *   - Adding a product to cart shows the cart modal
 *
 * Suggested test cases — Product detail:
 *   - Product detail page loads for product ID 1
 *   - Product name is displayed
 *   - Product price contains "Rs."
 *   - Quantity input defaults to 1
 *   - Changing quantity and adding to cart works
 *   - Review form is visible
 *   - Submitting a review shows a success message
 *
 * HINT: Import and use the ProductsPage page object.
 *   const ProductsPage = require('../pages/ProductsPage');
 */

const { test, expect } = require('@playwright/test');

test.describe('Products Page', () => {
  // TODO: Add beforeEach to navigate to /products

  // TODO: Write your tests here
});

test.describe('Product Detail Page', () => {
  // TODO: Add beforeEach to navigate to /product_details/1

  // TODO: Write your tests here
});
