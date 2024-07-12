

[![Playwright](https://img.shields.io/badge/Playwright-1.45.0-blue)](https://playwright.dev/)
[![Allure](https://img.shields.io/badge/Allure-2.29.0-blue)](https://docs.qameta.io/allure/)
[![Node](https://img.shields.io/badge/Node-20.14.0-green)](https://nodejs.org/en/)
[![Npm](https://img.shields.io/badge/Npm-10.8.1-green)](https://www.npmjs.com/)
[![Facker](https://img.shields.io/badge/Facker-blue)](https://https://fakerjs.dev/)

# Introduction

This repository contains automation tests that are part of interview task for Applifting. Because I was asked to write test for prod https://applifting.io/ I evoid perfomance and security tests, also test for form validation missing approving to not send mock date.

# Test and reports

I have implemented essential tests for page navigation functionality, form functionality, and tests to verify the existence of elements on the page.

I have configured two types of reports: the first is a Playwright HTML report that sends test steps upon test failures, and the second is an Allure report. The Allure report is set up to provide trend history for the last 10 test runs, execution times, and test suite summaries.

These tests are integrated to run via GitHub Pages and GitHub Actions. You can access the latest Allure report for Applifting in this repository under Actions > Pages Build and Deployment or here [https://github.com/BooTheKid/Applifting/actions/runs/9907278427]


# CI/CD

CI/CD building with Git Actions, build is automaticaly run on every pull request, scheduler option was disabled



# Dependencies

playwright

```bash
npm init playwright@latest
```

allure for playwright

```bash
npm i -D allure-playwright
```

facker library

```bash
npm install --save-dev @faker-js/faker
```


