# QA Engineer Homework – Maddox AI

This repository contains the end-to-end tests for the sample web application provided by Maddox AI as part of the interview homework.

## ✅ Tech Stack
- [Playwright](https://playwright.dev/) – E2E testing framework
- Node.js (v18 or higher)
- CI/CD compatible (GitHub Actions ready)

---

## 🧪 What’s Covered

### ✅ Test 1: Login Flow
- Valid login redirects the user to the home screen.
- Invalid login shows an appropriate error message.

### ✅ Test 2: Counter Functionality
- Increment button increases the counter value.
- Decrement button decreases the counter value.
- Reset button resets the counter to 0.

### ✅ Test 3: Logout Functionality
- Clicking "Logout" brings the user back to the login screen.
- The test confirms that after logout, the login form is visible again.
- Note: Direct access to `/home` after logout does not redirect, but renders a blank page – handled and explained in the test file.

---

##  How to Run

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Start the dev server in a separate terminal
npm run dev

# Run all tests
npx playwright test