const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://katalon-demo-cura.herokuapp.com/",
  },
});