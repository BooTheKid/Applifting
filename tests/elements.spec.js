import { test, expect } from "@playwright/test";
import { Elements } from "../pages/basic";

test.describe("go to Applifting homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test("Elements on the page", async ({ page }) => {
    
    const element = new Elements(page);

    await element.companyNameIsVisible();
    await element.companyViseIsVisible();
    await element.companyWorksAreVisible();
   
  });



});
