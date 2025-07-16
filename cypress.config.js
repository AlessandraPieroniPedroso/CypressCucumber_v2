const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    specPattern: [
      "cypress/e2e/*.feature",
      "cypress/servicoAPI/*.feature"
    ],
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    cucumber: {
      stepDefinitions: [
        "cypress/support/step_definitions/**/*.js",
        "cypress/support/step_definitions_servico/**/*.js"
      ]
    }
  }
  

});

