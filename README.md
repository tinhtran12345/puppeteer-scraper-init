# puppeteer-scraper-init

## Setup project: npm i puppeteer

## Note that:
Puppeteer has a .launch() method that launches an instance of a browsers. This method returns a Promise, so you have to  make sure
the Promise resolves by using a .then or await block
Note that: method .launch() method takes a JSON parameter with several values:
+ headless: false: means the browser will run with an interface so you can watch your script execute, while true means the browser
 will run in headless mode. Note that if you want to deploy your scraper to the cloud, set headless back to true
+ ignoreHTTPSErrors - true allows you to visit websites that aren’t hosted over a secure HTTPS protocol and ignore any HTTPS-related errors.

## File structure
src:
--browser.js
--pageController.js
--pageScraper.js
index.js

