exports.Control = class Control {

    async move(page,direction, spaces){
        for (let i = 0; i < spaces; i++)
            await page.keyboard.press(direction, { delay: 500 });            

    }

   
}
