import test from '../../lib/BaseTest';

test(`Verify Broken Image`, async ({ homePage, leftNavigations, brokenImagePage }) => {

    await test.step(`Launch Application`, async () => {
        await homePage.launchURL();
    });

    await test.step(`Navigate to Elements Page`, async () => {
        await homePage.navigateToElementsPage();
    });

    await test.step(`Navigate to Broken Images Page`, async () => {
        await leftNavigations.navigateToBrokenLinkImagesPage();
    });

    await test.step(`Validate Broken  Image`, async () => {
        await brokenImagePage.validateBrokenImage();
    });

});



