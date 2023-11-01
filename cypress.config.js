const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries : {"runMode": 2, "openMode":0 },
    
  e2e: {
    baseUrl:'https://www.zooplus.es/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
