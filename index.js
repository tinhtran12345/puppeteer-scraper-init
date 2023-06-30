import { startBrowser } from "./src/browser.js";
import { pageController } from "./src/pageController.js";

let browserInstance = startBrowser();
// Pass the browser instance to scraper controller
pageController(browserInstance);
