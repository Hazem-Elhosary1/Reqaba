import { getRandomBaladyas } from '../../data/baladyasData';


export function addNewAudit() {
    const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0'); // رقم عشوائى ل اسم نوع الرقابة علشان التكرار
    const bRandomNum = Math.floor(Math.random() * 9); // رقم عشوائى لعدد البلديات اللى هيختارها
    const reqabaName = `رقابة اوتوميشن - ${randomNum}`
    cy.get('#addNewAudit').should('be.visible').click();
    cy.get('#name').type(reqabaName);
    getRandomBaladyas(bRandomNum).then(selectedOptions => {
        selectedOptions.forEach(option => {
            cy.get('#baladyasIds > .ng-select-container > .ng-value-container').click(); // إعادة فتح القائمة
            cy.get('.ng-dropdown-panel .ng-option')
                .contains(option)
                .scrollIntoView()
                .should('be.visible')
                .click();
        });
    });

    cy.screenshot();
    cy.get('#submitBtn').click();
    cy.contains("تم الحفظ بنجاح").should('be.visible');
}