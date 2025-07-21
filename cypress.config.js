const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 15000,
  e2e: {
    //baseUrl: "http://localhost:3000", //Ambiente usando nos testes locais
    baseUrl: "https://bugbank.netlify.app/", //Ambiente adcionado depois para a execução na pipeline
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
