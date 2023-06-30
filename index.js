import { startBrowser } from "./browser.js";
import { pageController } from "./pageController.js";

let browserInstance = startBrowser();
// Pass the browser instance to scraper controller
pageController(browserInstance);
