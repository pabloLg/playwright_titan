import {Control} from '../util/Control.js';

exports.HomePage = class HomePage {

    constructor(page) {

        this.page = page  
        this.control = new Control();     
        this.focushometab = this.page.locator("//*[@data-focused='focused' and @data-testid='main-menu-item-Home']")
 
    }

    async appIsInFavorites(app){
        let locator = '//*[@id="favourite-apps"]/div[@data-testid="'+app+'"]'      
        return locator
    }

    async appRemovedFavorites(app){
        let locator = "//*[@data-focused='focused' and @data-testid='"+app+"']"
        return locator
        
    }

    async moveToFavoriteApp(app) { 
        
        let locator = "//*[@data-focused='focused' and @data-testid='"+app+"']"
        do {
            await this.control.move(this.page,'ArrowRight',1);
        }while(! await this.page.locator(locator).isVisible())        

    }

    async removeFormFavorites(){
        await this.page.keyboard.down('Enter');
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.up('Enter');
        await this.page.waitForTimeout(1000);      
        await this.page.keyboard.press('ArrowDown', { delay: 1000 });
        await this.page.keyboard.press('Enter', { delay: 1000 });
        await this.page.waitForTimeout(1000);     

    }

    async moveToTabPage(tab) { 
        
        let locator = "//*[@data-focused='focused' and @data-testid='main-menu-item-" +tab+ "']" 
        do {
            await this.control.move(this.page,'ArrowUp',1);                      
        }while(await this.focushometab.count() != 1) 

        do {
            await this.control.move(this.page,'ArrowRight',1);                   
        }while(await this.page.locator(locator).count() != 1)    
             
        await this.page.keyboard.press('Enter');
       
    }

    async moveToSearchTab(){
        let locator = "//*[@data-focused='focused' and @data-testid='main-menu-item-Search']" 
        do {
            await this.control.move(this.page,'ArrowUp',1);                      
        }while(await this.focushometab.count() != 1) 
        
        
        do {
            await this.control.move(this.page,'ArrowLeft',1);                   
        }while(await this.page.locator(locator).count() != 1)   

        await this.page.waitForTimeout(1000);         
        await this.page.keyboard.press('Enter', { delay: 500 });
        await this.page.waitForTimeout(1000); 
    }
 

}