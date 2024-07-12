# Applifting

[![Playwright](https://img.shields.io/badge/Playwright-1.45.0-blue)](https://playwright.dev/)
[![Allure](https://img.shields.io/badge/Allure-2.29.0-blue)](https://docs.qameta.io/allure/)
[![Node](https://img.shields.io/badge/Node-20.14.0-green)](https://nodejs.org/en/)
[![Npm](https://img.shields.io/badge/Npm-10.8.1-green)](https://www.npmjs.com/)
[![Facker](https://img.shields.io/badge/Facke-blue)](https://https://fakerjs.dev/)

# Introduction

This one of iterview task for Applifting. I create automation tests for 

# CI/CD

CI/CD building with Git Actions, build is automaticaly run on every pull request and at 17:55 every day

# Tests

Objectives:

- Validate the critical functionalities of the e-commerce platform.
- Ensure that the user can perform end-to-end operations, such as browsing products, adding them to the cart, and completing a purchase.
- Verify the stability and reliability of the application through automated tests.

Test Scope:

- Functional Testing
- End-to-End Testing

# Instalation

```bash
npm init playwright@latest
```

Check the installation by running the following command:

```bash
npx playwright --version
```

Run all tests in headless mode:

```bash
npm test
```

Run all tests in headed mode:

```bash
npm run test:headed
```

### Reporting

To generate the allure report, run the following command:

```bash
npm run generate:allure:report
```

To open the allure report, run the following command:

```bash

npm run open:allure:report
```
