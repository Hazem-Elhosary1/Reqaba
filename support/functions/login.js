import { getNI, getLButton, getSystemManager, getMunicipalityDirector, getInspectionManager } from '../selectors/elementSelectors';

export function login() {
    cy.visit("http://10.105.196.12:7002/dashboard/auth/login");
    getNI().type("1000012345"); // رقم هوية صحيح
    getLButton().click();
    cy.wait(4000);

    cy.get("body").then(($body) => {
        if ($body.find("#SystemManager-btn").length > 0) {
            getSystemManager().click();
        } else if ($body.find("#MunicipalityDirector-btn").length) {
            getMunicipalityDirector().click();
        } else if ($body.find("#InspectionManager-btn").length) {
            getInspectionManager().click();
        } else {
            cy.log("خطأ: لم يتم العثور على أي صلاحيات.");
        }
    });
}