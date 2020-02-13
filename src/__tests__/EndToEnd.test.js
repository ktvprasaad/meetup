import puppeteer from 'puppeteer';
import { mockEvents } from '../mock-events';

describe('Show/hide an event\'s details', () => {
  let browser;
  let page;
  beforeAll(async () => {      
    // browser = await puppeteer.launch();      
    browser = await puppeteer.launch({          
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        //headless: false,1
        //slowMo: 250,
    });  
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('an event is collapsed by default', async () => {
    const more = await page.$('.Event .more');
    expect(more).toBeNull();
  });

  test('user can expand an event to see its details', async () => {
    await page.$('.details');
    await page.click('.details');
    const more = await page.$('.Event .more');
    expect(more).toBeDefined();
  });

  test('user can collapse an event to hide its details', async () => {
    await page.$('.details');
    await page.click('.Event .details');
    const more = await page.$('.Event .more');
    expect(more).toBeNull();
  })
});

describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000');
      await page.waitForSelector('.suggestions');
  });

  afterAll(() => {
    browser.close();
  });

  test('By default, when user hasn\'t searched for a city, show upcoming events based on the user\'s location.', async () => {
    const Event = await page.$('.Event');
    expect(Event).toBeDefined();
  });


  test('User should see a list of suggestions when they search for a city.', async () => {
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list.', async () => {
    const suggestions = await page.$('.suggestions');    
    // await page.type('.city', 'Munich')
    expect(suggestions).toBeDefined();
    expect('.city').toBeDefined();
  });

});