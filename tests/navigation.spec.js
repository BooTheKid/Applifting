import { test, expect } from "@playwright/test";
import { Buttons } from "../pages/buttons";

test.describe("Test navigation on the site", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test("@category: Navigation", async ({ page }) => {
    
    const button = new Buttons(page);

    await button.navigationByFooterSection();

    await page.goBack();
    await button.navigationByProductsAndServiceSection();
   
  });



});



