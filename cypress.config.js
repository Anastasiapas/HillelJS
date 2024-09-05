const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    viewportWidth: 1180,
    viewportHeight: 730,
    defaultCommandTimeout: 2000,
    pageLoadTimeout: 50000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
