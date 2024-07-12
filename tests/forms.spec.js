import { test, expect } from "@playwright/test";
import { Forms } from "../pages/forms";

test.describe("go to Applifting homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test("Get In Touch", async ({ page }) => {
    
    const form = new Forms(page);

    await form.getInTouch();
   
  });



});
