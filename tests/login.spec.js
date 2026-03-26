/**
 * Login / Signup Tests
 *
 * TODO: Implement tests for the login page (https://automationexercise.com/login).
 *
 * Suggested test cases:
 *   - Login page loads at /login
 *   - Login form fields are visible (email, password, button)
 *   - Signup form fields are visible (name, email, button)
 *   - Logging in with invalid credentials shows an error message
 *   - Submitting an empty login form triggers browser validation
 *   - Signing up with an already-registered email shows an error
 *   - Signing up with a new unique email navigates to /signup
 *   - "Login to your account" heading is visible
 *   - "New User Signup!" heading is visible
 *
 * HINT: Import and use the LoginPage page object.
 *   const LoginPage = require('../pages/LoginPage');
 *
 * HINT: Use a timestamp to generate a unique email for signup tests:
 *   const uniqueEmail = `testuser_${Date.now()}@example.com`;
 */

const { test, expect } = require('@playwright/test');

test.describe('Login / Signup', () => {
  // TODO: Add beforeEach to navigate to /login

  // TODO: Write your tests here
});
