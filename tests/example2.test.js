const pupperteer = require('puppeteer')

describe('First test', () => {
    it('should launch the browser', async function(){
        const browser = await pupperteer.launch({
            headless:false, 
            slowMo: 500,
            devtools: false,
        })
        const page =await browser.newPage()
        await page.goto('http://example.com/')
        await page.waitForSelector('h1')
        await page.goto('http://dev.to/')
        await page.waitForSelector('#top-bar')
        await page.goBack()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.waitForSelector('#top-bar')
        await browser.close()
    })
});