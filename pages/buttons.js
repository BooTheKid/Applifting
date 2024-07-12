import { test, expect } from "@playwright/test";

export class Buttons {
    constructor(page){
        this.page = page;
        this.careers  = page.getByRole('banner').getByRole('link', { name: 'Careers' });
        this.productDiscovery = page.getByRole('link', { name: 'Product discovery', exact: true });
        this.softwareDevelopment = page.getByRole('link', { name: 'Software development' });
        this.podcast = page.getByRole('link', { name: 'Podcasts' });

    }


      navigationByHeaderCategory = async () => {

        await this.careers.click();
        await expect(this.page).toHaveURL(/.*careers/);
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