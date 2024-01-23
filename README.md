## Set of automated test suite using Playwright for https://www.volvocars.com/intl/v/safety/highlights page

## System Requirements
 * **Node.js v16.15.1 or greater (https://nodejs.org/)** should be installed

## How to run tests locally
 * **npx playwright install --with-deps** : Installs Platwright with dependencies and browsers according to project configuration in package.json and package-lock.json
 * **npx playwright test** : Runs the end-to-end tests in headless mode
 * **npx playwright test --headed** : Runs the end-to-end tests in browser
 * **npx playwright test --project chromium** : Runs the end-to-end tests in specific browser/browser engine
 * **npx playwright test example.spec.js** : Runs the tests in a specific file
 * **npx playwright test  --debug** : Runs the tests in debug mode
 * **npx playwright show report** : Open playwright report
 * **npx playwright test --workers 3** : Run with 3 workers in parellel

 ## PLEASE NOTE: 
 * Chromium and Webkit tests cannot be run locally due to security restrictions of webpage
 * Test work as expected on Docker in GitHub Action’s CI workflow

## How to run test-cases with the local Docker
 * **docker build -t playwright-tests .** : Builds Docker image
 * **docker run playwright-tests** : Runs the container from the built image

## How to run Playwright tests on Docker in GitHub Action’s CI workflow
 * .github/workflows/playwright.yml is a configuration file for GitHub Action’s CI workflow

## Parallel execution
Parallel execution of tests realized by **fullyParallel: true** capability in the playwright.config.js file. Every single test file will be run in parallel. 3 workers are used for CI runs according to current settings. playwright.config.js can be configured browsers and platforms according to project requirements via playwright.config.js. 

## Results Reporting
Report of the test cases/suites run is set as Html in playwright-report folder. Reporter can be set in another format in reporter capability in playwright.config.js. 

## Visual Comparison
Playwright Test includes the ability to produce and visually compare screenshots. On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference. 
When you run above for the first time it will be failed. That's because there was no golden file yet. This method took a bunch of screenshots until two consecutive screenshots matched, and saved the last screenshot to file system in .spec.js-snapshots folder. It is now ready to be added to the repository.
You can put the screenshots in the folder by yourself. 
Note: Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them.

## More information about Playwright can be find on official website https://playwright.dev/
