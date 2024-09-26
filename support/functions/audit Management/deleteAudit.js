export function deleteAudit() {
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(1) > .btn').click();

    cy.get('body').then(($body) => {
        cy.wait(2000);
        if ($body.find('.ng-clear-wrapper').length > 0) {
            cy.wrap($body).find('.ng-clear-wrapper').should('be.visible').click();
        } else {
            cy.get('.ng-clear-wrapper').click()
        }
    });
    cy.screenshot()

    cy.get('#submitBtn').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(3) > .btn').click();
    cy.get('#removeAudit > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000)
    cy.screenshot()
}