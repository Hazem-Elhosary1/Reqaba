/// <reference types="cypress" />

export function deleteMainInspectionItem(randomNum) {
    cy.get('.search > .form-control').type(randomNum.toString()).should('be.visible', "زرار البحث");
    cy.wait(2000);
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(5) > .btn').click();
    cy.get('#removeInspectionMainTerms > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.search > .form-control').clear()
    cy.wait(1000)
    cy.screenshot()
    cy.contains("تم حذف السجل بنجاح").should('be.visible')
}
export function deleteMainInspectionItem2() {
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(1) > [style="width: 100px;"] > .act-slct > .dropdown > .dropdown-menu > :nth-child(5) > .btn').click();
    cy.get('#removeInspectionMainTerms > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.contains("تم حذف السجل بنجاح").should('be.visible')
}