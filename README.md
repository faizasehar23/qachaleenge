# qachaleenge
This assignment is build using javascript and this framework will be used for end-to-end automation.

## Setup
1. Install Node according to vendor instructions
2. Clone the repo
3. Run `npm Install` to install the devDependencies
4. Run `npm install cypress --save-dev`

## Run Tests
a. To open Cypress server for running tests visually run `npx cypress open`
b. To run the tests in headless mode `npx cypress run`
## Structure
a. Project staructure contains cypress/e2e folder with sub-folders.
b. helpers folder has 2 files. Constant.js will include all the constant data used in the project
while the utils.js has all the generic functions that will be used anywhere in the project.
c. Page-Objects has again 2 folders. Pages will contain files for all pages. Every page will have different file and functions related to that will be there. Seclectors will have data to find elements for interaction on every page. Every page will have different data for selectors. 
d. Specs folder will have the test. Every api has different spec with all assetions.
e. Fixtures folder will have test Data. We can store the hard coded test data. I have created testData.json file just to have a look.
f. In Screenshots folder we can add the screenshots of test results.
g. In support folder we have commands where we can write different commands and store the results to use it in different specs for different test where required. For example creating Models commands will be written in commands and the response can be used in different specs where required.
## Pros
1. This framework is designed to cover both front-end and backend testing. we dont need two different frameworks for back-end and front end testing. 
2. This is fast and reliable as compare to selenium where we have add additional waits for responses and pages to load.
3. Code Maintainability is easy. 
4. You can find the elements with in the browser running the tests.
5. Supports multiple browsers.
6. Cypress.io offers a unique debugging experience with its time-travel feature
## Cons
1. You Can not switch from one domain to another.
2. There is no multi language support.
3. Driving 2 browsers at once is not possible.

## Docker Run
1. Run this command `docker pull cypress/included:12.12.0`
2. Now execute this `docker images`
3. Now run this `docker run -it --entrypoint=cypress cypress/included:12.12.0 info`
4. Now run this `docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.12.0 -b chrome`
Note : I tried to run inside docker but i had some permission issues was't able to run that successfully. 
## Note
Inference api is returing 500 server error I have implemented it you can take a look but couldn't implemet assertions.
