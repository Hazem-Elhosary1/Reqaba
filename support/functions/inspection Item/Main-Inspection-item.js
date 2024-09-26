/// <reference types="cypress" />

export function addMainInspectionItem() {
    const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const InspectionItem = `بند اوتوميشن - ${randomNum}`;

    cy.get('#addNewUser').should('be.visible').click();
    cy.get('#name').type(InspectionItem);
    cy.get('#closeBtn').contains('إلغاء').should('be.visible');
    cy.get('#submitBtn').contains('إضافة').should('be.visible').click();
    cy.wait(1000);
    cy.screenshot();

    return { InspectionItem, randomNum };
}