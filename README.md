# Playwright tests for https://demoqa.com website

# Quick Start

### Install Dependencies

`npm install`

### Install browsers

`npx playwright install`

# Run Tests

All the UI tests for demoqa.com are present in folder : e2e/ui
All the API tests are present in file : e2e/api/DemoQA.test.ts

To Run with Chromium 

`npm run chromiumtest`


## To View Report

`npx playwright show-report`

## List all test titles

`npx playwright test --list`

---

## File Structure

    .
    ├── data                    # Test Data
    ├── node_modules            # Dependencies
    ├── e2e                     # Project
    │   ├── api                 # API Tests
    │   ├── ui                  # UI Tests
    |── pages                   # Page object classes of a demoq website
    ├── lib                     # Fixtures and Base Classes
    ├── package.json            # Project metadata
    ├── package-lock.json       # Describes dependency tree
    ├── playwright.config.ts    # Playwright test configuration
    └── README.md               # This file
