import { login } from '../../support/functions/login';
import { addNewAudit } from '../../support/functions/audit Management/audit';
import { deleteAudit } from '../../support/functions/audit Management/deleteAudit';
import { ViewAudit } from '../../support/functions/audit Management/viewAudit';
import { addMainInspectionItem } from '../../support/functions/inspection Item/Main-Inspection-item';
import { deleteMainInspectionItem } from '../../support/functions/inspection Item/Delete-Inspection-item';
import { editMainInspectionItem } from '../../support/functions/inspection Item/Edit-Insoection-item';
import { addSubInspectionItem } from '../../support/functions/Sub-inspection item/Add Sub-inspection item';
import { deleteMainInspectionItem2 } from '../../support/functions/inspection Item/Delete-Inspection-item';

describe("System Manager", () => {
    beforeEach("Login First", () => {
        login();
    });

    it("Add New Audit", () => {
        addNewAudit();
    });

    it('View Audit', () => {
        ViewAudit();
    });

    it("Delete Audit", () => {
        deleteAudit();
    });
});

describe("Main Inspection Items Management", () => {
    let inspectionItemData;

    beforeEach("Login First and Navigate", () => {
        login();
        cy.get('[href="/dashboard/admin/main-inespection"]').click();
    });

    it("Add New Main Inspection Item", () => {
        inspectionItemData = addMainInspectionItem();
    });

    it('Delete Main Inspection Item', () => {
        if (inspectionItemData) {
            deleteMainInspectionItem(inspectionItemData.randomNum);
        }
    });
    it("Add New Main Inspection Item", () => {
        inspectionItemData = addMainInspectionItem();
    });
    it('Edit main inspection Item', () => {
        editMainInspectionItem();
    });
    it('Delete deActive Main Inspection Item ', () => {
        deleteMainInspectionItem2();

    });
    it("Add New Main Inspection Item", () => {
        inspectionItemData = addMainInspectionItem();
    });

});
describe('Sub inspection item', () => {
    beforeEach("Login First", () => {
        login();
        cy.get('[href="/dashboard/admin/main-inespection"]').click();

    });
    it('Add sub inspection item', () => {
        addSubInspectionItem();
    });
});