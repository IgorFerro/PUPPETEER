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
        await page.goto('http://example.com/')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length)
        console.log('Text in the H1: ' + text)
        console.log('Number of P tags on the page: ' + count)
        await page.close()
    })
});