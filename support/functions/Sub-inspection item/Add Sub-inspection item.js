export function addSubInspectionItem() {
    const randomNum = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    const randomName = `بند تفتيش فرعى اوتوميشن - ${randomNum}`;
    const randomWeight = Math.floor(Math.random() * 999);

    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(3) > .btn').click();

    cy.wait(3000);

    cy.get('#name').type(randomName);
    cy.get('#weight').type(randomWeight);

    cy.get('#riskLevelId > .ng-select-container').click();
    cy.get('.ng-dropdown-panel .ng-option')
        .then($options => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click();
        });

    const numberOfRepeats1 = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < numberOfRepeats1; i++) {
        const randomText1 = `نص إجابة نموذجية عشوائي - ${Math.random().toString(36).substring(2)}`;

        cy.get(':nth-child(6) > .row > .col-11 > app-text-input.ng-valid > .form-group > .input-container > #\\[object\\ Object\\]')
            .should('be.visible')
            .clear()
            .type(randomText1);

        cy.get(':nth-child(6) > .row > .col-1 > .btn')
            .should('be.visible')
            .click();

        //    cy.wait(1000);
    }

    const numberOfRepeats2 = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < numberOfRepeats2; i++) {
        const randomText2 = `نص اشتراط عشوائي - ${Math.random().toString(36).substring(2,300)}`;

        cy.get(':nth-child(7) > .row > .col-11 > app-text-input.ng-valid > .form-group > .input-container > #\\[object\\ Object\\]')
            .should('be.visible')
            .clear()
            .type(randomText2);

        cy.get(':nth-child(7) > .row > .col-1 > .btn')
            .should('be.visible')
            .click();

        //  cy.wait(1000);
    }

    const numberOfRepeats3 = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < numberOfRepeats3; i++) {
        cy.get('#regulationTermIds > .ng-select-container > .ng-value-container > .ng-input').click();

        cy.get('.ng-dropdown-panel .ng-option')
            .then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click();
            });

        cy.get(':nth-child(8) > .row > .col-1 > .btn')
            .should('be.visible')
            .click();

        // cy.wait(1000);
    }
    cy.get('#submitBtn').click();
    cy.contains("تم الحفظ بنجاح").should('be.visible');
}