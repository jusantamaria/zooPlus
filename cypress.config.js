const { defineConfig } = require("cypress");
const allureWriter = require ('@shelex/cypress-allure-plugin/writer');
const fs = require('fs');

module.exports = defineConfig({
  retries : {"runMode": 2, "openMode":0 },
    
  e2e: {
    baseUrl:'https://www.zooplus.es/',
    setupNodeEvents(on, config) {
      allureWriter (on, config);
      return config;
      // implement node event listeners here
    },
  },
});
