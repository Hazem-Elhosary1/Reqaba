/// <reference  types= "cypress" /> 
export function ViewAudit() {
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(5) > .btn').click();
    cy.get('.fw-bold').contains('بيانات الرقابة');
    cy.get('.row');
    cy.get(':nth-child(1) > .mb-3 > h6');
    cy.get(':nth-child(2) > .mb-3 > h6');
    cy.get('.form-label');
    cy.get('.my-4 > .mb-2');
    cy.get('section.mb-2 > .mb-3')
        .should('be.visible');
    cy.screenshot();
}