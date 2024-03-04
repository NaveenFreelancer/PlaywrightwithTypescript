import test from '../../lib/BaseTest';
test(`Verify Drag and Drop`, async ({ homePage, leftNavigations, droppablePage }) => {

    await test.step(`Launch Application`, async () => {
        await homePage.launchURL();
    });

    await test.step(`Navigate to Interactions Page`, async () => {
        await homePage.navigateToInteractionsPage();
    });

    await test.step(`Navigate to Droppable Page`, async () => {
        await leftNavigations.navigateToDroppablePage();
    });

    await test.step(`Verify Drag and Drop`, async () => {
        await droppablePage.verifyDragAndDrop();
    });

});

