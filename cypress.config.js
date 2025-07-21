const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
  },
  e2e: {
    //baseUrl: "http://localhost:3000",
    baseUrl: "https://bugbank.netlify.app/",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },

});
