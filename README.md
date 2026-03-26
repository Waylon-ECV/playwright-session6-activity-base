# Playwright Starter — Hands-On Activity

A starter project for building a Playwright automation suite as a team.  
Target site: **[automationexercise.com](https://automationexercise.com)**

---

## Objectives

- Write Playwright tests using the **Page Object Model (POM)** pattern
- Collaborate on a shared GitHub repository
- Practice core Git workflows: branching, committing, pushing, and pull requests

---

## Project Structure

```
playwright-starter/
├── pages/                  # Page Object Models (one file per page)
│   ├── BasePage.js         ← complete — shared nav helpers
│   ├── HomePage.js         ← skeleton — implement this
│   ├── LoginPage.js        ← skeleton — implement this
│   ├── ProductsPage.js     ← skeleton — implement this
│   ├── CartPage.js         ← skeleton — implement this
│   └── ContactPage.js      ← skeleton — implement this
├── tests/                  # Test spec files (one file per feature)
│   ├── navigation.spec.js  ← complete — use as a reference example
│   ├── home.spec.js        ← skeleton — implement this
│   ├── products.spec.js    ← skeleton — implement this
│   ├── cart.spec.js        ← skeleton — implement this
│   ├── login.spec.js       ← skeleton — implement this
│   └── contact.spec.js     ← skeleton — implement this
├── playwright.config.js
└── package.json
```

Each skeleton file contains `TODO` comments and hints to guide your implementation.  
Use `navigation.spec.js` as a working reference for structure and syntax.

---

## Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd playwright-starter

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install chromium

# 4. Run the example tests to verify setup
npx playwright test tests/navigation.spec.js --reporter=list
```

---

## Running Tests

```bash
# Run all tests
npm test

# Run a single file
npx playwright test tests/home.spec.js

# Run with browser visible
npm run test:headed

# Open interactive UI mode
npm run test:ui

# View HTML report after a run
npm run report
```

---

## Git Workflow — Team Collaboration Guide

Follow these steps for every feature or test file you work on.

### 1. Always start from an up-to-date main

```bash
git checkout main
git pull origin main
```

### 2. Create a feature branch

Name your branch clearly so others know what you're working on.

```bash
# Pattern: feature/<your-name>-<what-you-are-doing>
git checkout -b feature/jane-home-page-tests
```

### 3. Make your changes

Implement the page object and/or test file assigned to you.  
Keep changes focused — one feature or test file per branch.

### 4. Stage and commit your work

```bash
# Check what changed
git status

# Stage specific files (preferred over git add .)
git add pages/HomePage.js tests/home.spec.js

# Write a clear, descriptive commit message
git commit -m "feat: implement HomePage POM and home page tests"
```

**Good commit message examples:**
```
feat: implement CartPage locators and methods
feat: add cart tests for add/remove item flows
fix: correct selector for subscribe success message
```

### 5. Push your branch to GitHub

```bash
git push origin feature/jane-home-page-tests
```

### 6. Open a Pull Request (PR)

1. Go to the repo on GitHub
2. Click **"Compare & pull request"** on your branch
3. Fill in the PR title and description — explain what you implemented
4. Request a teammate as a reviewer
5. Wait for approval before merging

### 7. After your PR is merged

```bash
# Switch back to main and pull the latest
git checkout main
git pull origin main

# Delete your local feature branch (optional, keeps things tidy)
git branch -d feature/jane-home-page-tests
```

---

## Branch Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| New feature / test | `feature/<name>-<description>` | `feature/john-login-tests` |
| Bug fix | `fix/<name>-<description>` | `fix/jane-cart-selector` |

---

## Team Task Assignment

Divide the skeleton files among team members so everyone works on a different branch:

| File | Assigned To |
|------|-------------|
| `pages/HomePage.js` + `tests/home.spec.js` | Team Member 1 |
| `pages/LoginPage.js` + `tests/login.spec.js` | Team Member 2 |
| `pages/ProductsPage.js` + `tests/products.spec.js` | Team Member 3 |
| `pages/CartPage.js` + `tests/cart.spec.js` | Team Member 4 |
| `pages/ContactPage.js` + `tests/contact.spec.js` | Team Member 5 |

---

## Tips

- Read the `TODO` comments in each file carefully before writing code
- Study `navigation.spec.js` and `BasePage.js` — they show the expected patterns
- Run your tests locally before pushing: `npx playwright test tests/<your-file>.spec.js`
- Keep PRs small and focused — one feature per PR makes reviews easier
- If you get a merge conflict, talk to your teammate before resolving it
