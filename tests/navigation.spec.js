import { test, expect } from "@playwright/test";
import { Buttons } from "../pages/buttons";

test.describe("go to Applifting homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test("Navigation", async ({ page }) => {
    
    const button = new Buttons(page);

    await button.navigationByFooterSection();

    await page.goBack();
    await button.navigationByProductsAndServiceSection();
   
  });



});



