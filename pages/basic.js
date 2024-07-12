
export class Elements {
    constructor(page){
        this.page = page;
        this.companyName = page.locator('.w-\\[120px\\]');
        this.companyVise = page.getByText('Apps fuelledby trust');
        this.ourWork = page.getByRole('heading', { name: 'Our Work' });
        this.firstWork = page.getByRole('link', { name: 'George Locker Providing' });
    }

    companyNameIsVisible = async () => {
    await this.companyName.waitFor("visible");
};

companyViseIsVisible = async () => {
    await this.companyVise.waitFor("visible")
};

companyWorksAreVisible = async () => {
    await this.ourWork.waitFor("visible");
    await this.firstWork.waitFor("visible");
} 

}