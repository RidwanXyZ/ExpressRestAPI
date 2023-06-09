const p = require('puppeteer')

const init = async( ) => {
    try{
        const browser = await p.launch({
            headless: false
        })
        const page = await browser.newPage()
        await page.goto('https://google.com')


        await browser.close()
    } catch(e){
        throw new Error(e)
    }
}

init()