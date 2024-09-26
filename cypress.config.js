const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: 'oza2xh',
    video: true,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'D:/Cypress/Reqaba/cypress/integration/examples/*.js',
        screenshotsFolder: "D:/Cypress/Reqaba/ScreenShot",
        experimentalStudio: false,

    },
});