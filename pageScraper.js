import dotenv from "dotenv";
dotenv.config();

export const pageScraper = async (browser) => {
    const url = process.env.URL;
    let page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1024 });
    console.log(`Navigating to ${url}...`);
    await page.goto(url);

    await page.waitForSelector(
        "#main-wrapper .max-width-container .subcategory-carousel.lohp-row .slider-package"
    );
    let urls = await page.$$eval(".slick-track > div", (links) => {
        return links;
    });
    console.log(urls);

    // await browser.close();
};
