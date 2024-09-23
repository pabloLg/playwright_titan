import {Control} from '../util/Control.js';
exports.SearchPage = class SearchPage {

    constructor(page) {

        this.page = page;
        this.control = new Control();  
    }

    async searchCategory(category) { 
        let locator = "//*[@data-focused='focused' and @data-testid='main-menu-item-" + category +"']"
        do {
            await this.control.move(this.page,'ArrowDown',1);       
          
        }while(! await this.page.locator(locator).count() != 1)   
        await this.page.keyboard.press('Enter', { delay: 1000 });
        await this.page.waitForTimeout(1000);  

    }
    
    async verifySearchResult(cattegory){
        let locator = "//*[contains(text(),'"+cattegory+ "')]"
        return locator
        
    }
}