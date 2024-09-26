/// <reference types="cypress" />
export function editMainInspectionItem() {
    const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const InspectionItem = `بند اوتوميشن - ${ randomNum } معدل`;
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(1) > .btn').click();
    cy.get('#name').clear()
        .type(InspectionItem);
    // cy.get('.ng-select-container').click();

    // cy.get('.ng-dropdown-panel .ng-option').should('be.visible');

    // cy.get('.ng-dropdown-panel .ng-option').each(($ele) => {
    //     if ($ele.text().trim() === 'غير مفعل') {
    //         cy.wrap($ele).click();
    //     }
    // });
    cy.get('#submitBtn').click()
    cy.wait(1000)
}