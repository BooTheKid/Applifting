import { test, expect } from "@playwright/test";

export class Buttons {
    constructor(page){
        this.page = page;
        this.services  = page.getByText('Services', { exact: true });
        this.productDiscovery = page.getByRole('link', { name: 'Product discovery', exact: true });
        this.softwareDevelopment = page.getByRole('link', { name: 'Software development' });
        this.podcast = page.getByRole('link', { name: 'Podcasts' });

    }

    navigationByHeaderCategory = async () => {
    await this.services.waitFor("visible");
    await this.services.hover();
    await this.productDiscovery.waitFor("visible");
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