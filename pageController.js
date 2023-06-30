// pageController.js controls your scraping process.
// It uses the browser instance to control the pageScraper.js file,which is where all the scraping scripts execute

import { pageScraper } from "./pageScraper.js";

const scrapeAll = async (browserInstance) => {
    let browser;
    try {
        browser = await browserInstance;
        await pageScraper(browser);
    } catch (error) {
        console.log("Could not resolve the browser instance => ", error);
    }
};

export const pageController = (browserInstance) => scrapeAll(browserInstance);
