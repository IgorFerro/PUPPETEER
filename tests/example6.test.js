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
        await page.waitForSelector('#signin_button')
        await page.click('#signin_button')
        await page.waitFor(()=> !document.querySelector('#signin_button'))
        await page.waitForSelector('#signin_button', {hidden: true, timeout: 3000})
        await browser.close()
    })
});