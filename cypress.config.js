const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "viewportWidth": 1920,   // Set the desired width in pixels
  "viewportHeight": 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  video:true, 
  env: {
    apiUrl : "https://localhost:8000"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'junit',
    reporterOptions: {
    mochaFile: 'results/oms-test-result-[hash].xml',
    toConsole: 'true'
  },
  },
  retries: {
    runMode: 1,
    openMode: 0,
  }
});
