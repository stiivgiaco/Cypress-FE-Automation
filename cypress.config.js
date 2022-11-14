const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    chromeWebSecurity: false
  } 
})