const { test, expect } = require('@playwright/test');
const CartPage = require('../pages/CartPage');
const BasePage = require('../pages/BasePage');

test.describe('Cart', () => {
  let cartPage;
  let basePage;

  // Helper: add first product to cart from home page
  async function addFirstProductToCart(page) {
    await page.goto('/');
    // hover over first product to reveal the add-to-cart button
    const firstProduct = page.locator('.features_items .product-image-wrapper').first();
    await firstProduct.hover();
    await firstProduct.locator('.add-to-cart').click();
    // close modal if it appears
    const modal = page.locator('#cartModal');
    if (await modal.isVisible()) {
      await page.locator('.close-modal').click();
    }
  }

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    basePage = new BasePage(page);
  });

  test('cart page loads at /view_cart', async ({ page }) => {
    await cartPage.goto();
    await expect(page).toHaveURL(/view_cart/);
  });

  test('adding a product from home page appears in the cart', async ({ page }) => {
    await addFirstProductToCart(page);
    await cartPage.goto();
    const count = await cartPage.getCartItemCount();
    expect(count).toBeGreaterThan(0);
  });

  test('cart item displays a name', async ({ page }) => {
    await addFirstProductToCart(page);
    await cartPage.goto();
    const name = await cartPage.getCartItemName(0);
    expect(name.trim().length).toBeGreaterThan(0);
  });

  test('cart item displays a price containing "Rs."', async ({ page }) => {
    await addFirstProductToCart(page);
    await cartPage.goto();
    const price = await cartPage.itemPrices.first().innerText();
    expect(price).toContain('Rs.');
  });

  test('cart item quantity defaults to 1', async ({ page }) => {
    await addFirstProductToCart(page);
    await cartPage.goto();
    const qty = await cartPage.getCartItemQuantity(0);
    expect(qty.trim()).toBe('1');
  });

  test('adding a product with quantity 2 shows qty 2 in cart', async ({ page }) => {
    await page.goto('/products');
    await page.locator('.product-image-wrapper').first().locator('a:has-text("View Product")').click();
    await page.locator('#quantity').fill('2');
    await page.locator('button:has-text("Add to cart")').click();
    await cartPage.goto();
    const qty = await cartPage.getCartItemQuantity(0);
    expect(qty.trim()).toBe('2');
  });

  test('removing an item decreases the cart count', async ({ page }) => {
    await addFirstProductToCart(page);
    await cartPage.goto();
    const before = await cartPage.getCartItemCount();
    await cartPage.removeItem(0);
    await page.waitForTimeout(500);
    const after = await cartPage.getCartItemCount();
    expect(after).toBeLessThan(before);
  });

  test('adding two different products results in 2 cart rows', async ({ page }) => {
    await page.goto('/');
    const addButtons = page.locator('.features_items .product-image-wrapper .add-to-cart');
    await addButtons.nth(0).click();
    const modal = page.locator('#cartModal');
    if (await modal.isVisible()) await page.locator('.close-modal').click();
    await addButtons.nth(1).click();
    if (await modal.isVisible()) await page.locator('.close-modal').click();
    await cartPage.goto();
    const count = await cartPage.getCartItemCount();
    expect(count).toBe(2);
  });

  test('"Proceed to Checkout" button is visible when cart has items', async ({ page }) => {
    await addFirstProductToCart(page);
    await cartPage.goto();
    await expect(cartPage.proceedToCheckoutButton).toBeVisible();
  });
});
