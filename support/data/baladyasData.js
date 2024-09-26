export const getRandomBaladyas = (numberOfSelections) => {
    return cy.get('#baladyasIds > .ng-select-container > .ng-value-container')
        .click()
        .wait(1000)
        .get('.ng-dropdown-panel .ng-option', { timeout: 10000 })
        .should('be.visible')
        .then($options => {
            const selectedOptions = [];
            const availableOptions = $options.toArray();

            for (let i = 0; i < numberOfSelections; i++) {
                const randomIndex = Math.floor(Math.random() * availableOptions.length);
                const option = availableOptions[randomIndex];
                selectedOptions.push(option.innerText.trim());
                availableOptions.splice(randomIndex, 1);
            }

            return selectedOptions;
        });
};