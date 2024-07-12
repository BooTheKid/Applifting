import { test, expect } from "@playwright/test";
import { Elements } from "../pages/basic";

test.describe("Validate Elements on the Main Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test("@category: Elements on the page", async ({ page }) => {
    
    const element = new Elements(page);

    await element.companyNameIsVisible();
    await element.companyViseIsVisible();
    await element.companyWorksAreVisible();
   
  });



});
