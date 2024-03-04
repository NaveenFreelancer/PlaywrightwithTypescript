import test from '../../lib/BaseTest';

test.describe('Verify Elements', async () => {

    test.beforeEach(async ({ homePage, leftNavigations }, testInfo) => {
        console.log(`Running ${testInfo.title}`);
        await test.step(`Launch Application`, async () => {
            await homePage.launchURL();
        });

        await test.step(`Navigate to Elements Page`, async () => {
            await homePage.navigateToElementsPage();
        });

        await test.step(`Navigate to Elements Page`, async () => {
            await leftNavigations.navigateToWebTablesPage();
        });
    });

    test(`Verify newly Added Row(Table)`, async ({ webTablesPage }) => {

        await test.step(`Add New Row`, async () => {
            await webTablesPage.addNewRow();
        });

        await test.step(`Verify data for New Row`, async () => {
            await webTablesPage.verifyNewRow();
        });
    });

    test(`Verify Editing Row`, async ({ webTablesPage }) => {

        await test.step(`Edit 2nd(Alden) Row`, async () => {
            await webTablesPage.editRow();
        });

        await test.step(`Verify data for Editied Row`, async () => {
            await webTablesPage.verifyEditiedRow();
        });
    });


});

