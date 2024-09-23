import {Control} from '../util/Control.js';
exports.AppsPage = class AppsPage {

    constructor(page) {

        this.page = page       
        this.control = new Control();     
        this.focusfirstapp = this.page.locator("//*[@data-focused='focused' and @data-testid='BBC Sounds']")
        this.addFavoriteButton = this.page.locator('//*[@id="app-fav-button"]') 
        this.openButton = this.page.locator("//*[@id='app-open-button']")
    }

    async addAppToFavorite(app) { 

        let locator ="//*[@data-focused='focused' and @data-testid='"+app+"']" 
       
        do {
            await this.control.move(this.page,'ArrowDown',1);        
          
        }while(! await this.focusfirstapp.isVisible())  
       
        while(! await this.focusfirstapp.isVisible()){        
            await this.control.move(this.page,'ArrowRight',1);
        }
        await this.page.waitForLoadState();
        await this.page.keyboard.press('Enter', { delay: 1000 });   
        await this.page.waitForTimeout(1000);

        if ( ! await this.openButton.isVisible()){
            await this.page.keyboard.press('Enter', { delay: 1000 });
        }
        else{
            await this.page.keyboard.press('ArrowRight', { delay: 1000 });                  
            await this.page.keyboard.press('Enter', { delay: 1000 });
            await this.page.waitForTimeout(1000);
            await this.page.keyboard.press('ArrowLeft', { delay: 1000 });
            await this.page.keyboard.press('Enter', { delay: 1000 });
            await this.page.keyboard.press('Enter', { delay: 1000 });       
        }
             
    }   

    

}