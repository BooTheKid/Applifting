import { test, expect } from "@playwright/test";

export class Buttons {
    constructor(page){
        this.page = page;
        this.services  = page.getByText('Services', { exact: true });
        this.productDiscovery = page.getByRole('link', { name: 'Product discovery', exact: true });
        this.softwareDevelopment = page.getByRole('link', { name: 'Software development' });
        this.podcast = page.getByRole('link', { name: 'Podcasts' });

    }


    async refreshUntilServicesVisible(maxRetries = 5) {
        let retries = 0;
        while (retries < maxRetries) {
          try { 
            const isVisible = await this.services.isVisible();
            if (isVisible) {
              return; 
            } else {
              throw new Error('Services element not visible');
            }
          } catch (error) {
            retries++;
            if (retries === maxRetries) {
              throw new Error('Services element not found');
            }
            await this.page.reload();
          }
        }
      }
    
      navigationByHeaderCategory = async () => {
        await this.refreshUntilServicesVisible();
        await this.services.hover();
        await this.productDiscovery.waitFor({ state: 'visible' });
        await this.productDiscovery.click();
        await expect(this.page).toHaveURL(/.*product-discovery/);
      };
    

navigationByProductsAndServiceSection = async () => {
    await this.softwareDevelopment.click();
    await expect(this.page).toHaveURL(/.*software-development/);;
};

navigationByFooterSection = async () => {
    await this.podcast.click();
    await expect(this.page).toHaveURL(/.*podcasts/);
} 

}