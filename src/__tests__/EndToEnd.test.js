import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    const puppeteer = require('puppeteer');
    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch({   
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    
        await page.waitForSelector('.Event', { timeout: 300000 });
    
        const more = await page.$('.Event .more');
        expect(more).toBeNull();
        browser.close();
      });

});
// jest.setTimeout(6000);
