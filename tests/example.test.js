const pupperteer = require('puppeteer')
const expect = require('chai').expect

describe('First test', () => {
    it('should launch the browser', async function(){
        const browser = await pupperteer.launch({
            headless:false, 
            slowMo: 500,
            devtools: false,
        })
        const page =await browser.newPage()
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.waitForSelector('#searchTerm')
        await page.type('#searchTerm', 'Hello World')
        await page.keyboard.press('Enter', {delay: 10})
        await page.waitFor(5000)
        await browser.close()
    })
});