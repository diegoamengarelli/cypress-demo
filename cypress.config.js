const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  reporter: 'mochawesome',
});

// cypress run --reporter mochawesome
